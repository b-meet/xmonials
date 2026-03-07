import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200/50 bg-white/70 backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-950/70 transition-colors duration-300">
            <div className="container mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight font-display text-neutral-900 dark:text-white">Xmonials</span>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link
                        href="/dashboard"
                        className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                    >
                        Dashboard
                    </Link>
                    <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-800 hidden sm:block"></div>
                    <ThemeToggle />
                    <Link
                        href="/dashboard"
                        className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
