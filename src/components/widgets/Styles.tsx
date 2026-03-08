import React from 'react';
import { Mention } from '../MentionItem';

const AuthorMeta = ({ mention }: { mention: Mention }) => (
    <div className="flex items-center space-x-3 mb-4">
        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-sm text-sm">
            {mention.author_name.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col">
            <h4 className="font-semibold leading-tight">{mention.author_name}</h4>
            <p className="text-xs opacity-70">@{mention.author_username}</p>
        </div>
        <div className="ml-auto flex shrink-0 self-start mt-1">
            <svg className="h-5 w-5 fill-current opacity-20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        </div>
    </div>
);

export function MasonryGrid({ mentions }: { mentions: Mention[] }) {
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-4">
            {mentions.map((m) => (
                <div key={m.id} className="break-inside-avoid relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <AuthorMeta mention={m} />
                    <p className="leading-relaxed text-sm whitespace-pre-wrap">{m.text}</p>
                </div>
            ))}
        </div>
    );
}

export function WallOfLove({ mentions }: { mentions: Mention[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentions.map((m) => (
                <div key={m.id} className="flex flex-col justify-between h-full bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30">
                    <p className="leading-relaxed text-sm whitespace-pre-wrap mb-6 italic">&quot;{m.text}&quot;</p>
                    <AuthorMeta mention={m} />
                </div>
            ))}
        </div>
    );
}

export function SidebarFeed({ mentions }: { mentions: Mention[] }) {
    return (
        <div className="flex flex-col gap-4 max-w-sm w-full mx-auto">
            {mentions.map((m) => (
                <div key={m.id} className="border-l-4 border-blue-500 bg-white dark:bg-neutral-900 pl-4 py-3 pr-4 shadow-sm rounded-r-lg">
                    <AuthorMeta mention={m} />
                    <p className="text-sm line-clamp-4">{m.text}</p>
                </div>
            ))}
        </div>
    );
}

export function SingleHighlight({ mentions }: { mentions: Mention[] }) {
    const m = mentions[0];
    if (!m) return null;
    return (
        <div className="max-w-3xl mx-auto rounded-3xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl"></div>
            <p className="text-xl sm:text-3xl font-medium leading-tight mb-8 relative z-10">&quot;{m.text}&quot;</p>
            <div className="relative z-10">
                <AuthorMeta mention={m} />
            </div>
        </div>
    );
}

export function Carousel({ mentions }: { mentions: Mention[] }) {
    // A simple CSS-only snap scrolling carousel
    return (
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {mentions.map((m) => (
                <div key={m.id} className="snap-center shrink-0 w-[85vw] sm:w-[400px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-xl">
                    <AuthorMeta mention={m} />
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
            ))}
        </div>
    );
}
