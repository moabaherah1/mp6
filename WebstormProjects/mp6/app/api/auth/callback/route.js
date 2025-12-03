export async function GET(req) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (!code) return new Response("Missing code", { status: 400 });

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: "authorization_code",
        }),
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) return new Response("No access token", { status: 400 });

    const userRes = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    const user = await userRes.json();

    const redirectURL = new URL("/profile", req.url);
    redirectURL.searchParams.set("name", user.name);
    redirectURL.searchParams.set("email", user.email);
    redirectURL.searchParams.set("picture", user.picture);

    return Response.redirect(redirectURL.toString());
}
