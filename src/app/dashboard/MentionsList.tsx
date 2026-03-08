'use client';

import { useState } from 'react';
import MentionItem, { Mention } from '@/components/MentionItem';

export default function MentionsList({ initialMentions }: { initialMentions: Mention[] }) {
    const [mentions, setMentions] = useState<Mention[]>(initialMentions);

    const handleToggleApproval = async (id: string, newStatus: boolean) => {
        // Optimistic update
        setMentions(current =>
            current.map(m => m.id === id ? { ...m, is_approved: newStatus } : m)
        );

        try {
            const res = await fetch('/api/mentions/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, is_approved: newStatus }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => null);
                throw new Error(data?.error || 'Failed to update status');
            }
        } catch (err: unknown) {
            // Revert on error
            console.error(err);
            setMentions(current =>
                current.map(m => m.id === id ? { ...m, is_approved: !newStatus } : m)
            );

            const message = err instanceof Error ? err.message : 'Failed to update mention approval status.';
            alert(message);
        }
    };

    if (mentions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800">
                <div className="h-16 w-16 mb-4 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                    <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">No mentions found</h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
                    We haven&apos;t synced any mentions yet. Once your Twitter handle receives mentions, they will appear here.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentions.map(mention => (
                <MentionItem
                    key={mention.id}
                    mention={mention}
                    onToggleApproval={handleToggleApproval}
                />
            ))}
        </div>
    );
}
