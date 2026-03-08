'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';

export default function LoginForm() {
    const supabase = createClient();
    const [loading, setLoading] = useState(false);

    const handleOAuthLogin = async () => {
        setLoading(true);
        await supabase.auth.signInWithOAuth({
            provider: 'twitter',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="w-full max-w-sm rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 mx-auto mt-20">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Welcome back</h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Sign in to your Xmonials account to manage your testimonials.
                </p>
            </div>

            <button
                onClick={handleOAuthLogin}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 dark:bg-white dark:text-neutral-900"
            >
                {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white dark:border-neutral-900/20 dark:border-t-neutral-900" />
                ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                )}
                {loading ? 'Connecting...' : 'Continue with X'}
            </button>

            <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-500">
                By clicking continue, you agree to our Terms of Service and Privacy Policy.
            </p>
        </div>
    );
}
