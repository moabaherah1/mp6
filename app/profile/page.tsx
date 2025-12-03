import Image from "next/image";
import Link from "next/link";

type ProfilePageProps = {
    searchParams: Promise<{
        name?: string;
        email?: string;
        picture?: string;
    }>;
};

export default async function Profile({ searchParams }: ProfilePageProps) {
    const params = await searchParams;
    const { name, email, picture } = params;

    if (!name) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black text-center px-4">
                <div className="text-black dark:text-white">
                    <h1 className="text-2xl font-semibold mb-3">Not Signed In</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Please sign in again from the homepage.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
            <div className="flex flex-col items-center gap-6 p-10 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg max-w-md w-full">

                {/* Profile Picture */}
                <Image
                    src={picture!}
                    alt="Profile picture"
                    width={120}
                    height={120}
                    className="rounded-full shadow-lg"
                />

                <h1 className="text-2xl font-semibold text-black dark:text-white text-center">
                    {name}
                </h1>

                <p className="text-zinc-600 dark:text-zinc-400 text-center">
                    {email}
                </p>

                <Link
                    href="/"
                    className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
}
