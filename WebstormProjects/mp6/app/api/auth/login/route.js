export async function GET() {
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;
    const clientId = process.env.GOOGLE_CLIENT_ID;

    const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");

    authUrl.searchParams.set("client_id", clientId);
    authUrl.searchParams.set("redirect_uri", redirectUri);
    authUrl.searchParams.set("response_type", "code");
    authUrl.searchParams.set("scope", "openid email profile");
    authUrl.searchParams.set("access_type", "online");

    return Response.redirect(authUrl.toString());
}
