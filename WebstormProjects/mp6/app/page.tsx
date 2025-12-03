import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <div className="flex flex-col items-center gap-8 p-10 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg max-w-md w-full">

          <h1 className="text-3xl font-semibold text-black dark:text-white text-center">
            MP6 Login Demo
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-center">
            Sign in with your BU Google Account to continue.
          </p>

          <Link
              href="/api/auth/login"
              className="flex items-center gap-3 w-full justify-center py-3 px-5 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <Image
                src="/google.png"
                alt="Google Logo"
                width={28}
                height={28}
                className="scale-125"
            />
            <span className="text-sm font-medium text-black dark:text-white">
            Sign in with Google
          </span>
          </Link>
        </div>
      </main>
  );
}
