import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export interface Mention {
    id: string;
    profile_id: string;
    text: string;
    author_name: string;
    author_username: string;
    created_at: string;
    is_approved: boolean;
}

interface MentionItemProps {
    mention: Mention;
    onToggleApproval: (id: string, newStatus: boolean) => Promise<void>;
}

export default function MentionItem({ mention, onToggleApproval }: MentionItemProps) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleToggle = async () => {
        setIsUpdating(true);
        await onToggleApproval(mention.id, !mention.is_approved);
        setIsUpdating(false);
    };

    return (
        <div className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${mention.is_approved ? 'border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-emerald-500/20' : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700'}`}>

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-sm">
                        {mention.author_name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1">
                            {mention.author_name}
                            {mention.is_approved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                        </h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">@{mention.author_username}</p>
                    </div>
                </div>
                <div className="text-xs text-neutral-400">
                    {new Date(mention.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </div>
            </div>

            {/* Body */}
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {mention.text}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-end mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                <button
                    onClick={handleToggle}
                    disabled={isUpdating}
                    className={`relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${mention.is_approved
                            ? 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 focus:ring-neutral-500'
                            : 'bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-lg dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 focus:ring-neutral-900 dark:focus:ring-white dark:focus:ring-offset-neutral-900'
                        } ${isUpdating ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isUpdating ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
                    ) : mention.is_approved ? (
                        <>
                            <XCircle className="w-4 h-4" />
                            Revoke
                        </>
                    ) : (
                        <>
                            <CheckCircle2 className="w-4 h-4" />
                            Approve
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
