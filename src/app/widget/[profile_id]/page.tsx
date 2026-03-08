import { createClient } from '@/lib/supabase/server';
import { WidgetIframeResizer } from '@/components/widgets/WidgetIframeResizer';
import { MasonryGrid, WallOfLove, SidebarFeed, SingleHighlight, Carousel } from '@/components/widgets/Styles';

// This is an embedded Next.js page used strictly for serving the iframe contents without the main app headers.
export default async function WidgetEmbedPage({
    params,
    searchParams,
}: {
    params: Promise<{ profile_id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { profile_id } = await params;
    const resolvedParams = await searchParams;

    const style = typeof resolvedParams.style === 'string' ? resolvedParams.style : 'masonry';
    const theme = typeof resolvedParams.theme === 'string' ? resolvedParams.theme : 'light';
    const watermarkParam = resolvedParams.watermark;

    const supabase = await createClient();

    const { data: mentions, error } = await supabase
        .from('mentions')
        .select('*')
        .eq('profile_id', profile_id)
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

    if (error || !mentions || mentions.length === 0) {
        return (
            <div className="flex h-full w-full items-center justify-center p-8 text-neutral-500 font-sans">
                No testimonials configured.
            </div>
        );
    }

    // Force dark mode via root class if requested, otherwise we rely on system/light via container classes
    const isDark = theme === 'dark';
    const containerClasses = `w-full h-full min-h-screen p-4 sm:p-8 font-sans transition-colors ${isDark ? 'dark bg-neutral-950 text-white' : 'bg-transparent text-neutral-900'}`;

    // SEO JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Xmonials Testimonials",
        "review": mentions.map(m => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": m.author_name
            },
            "datePublished": m.created_at,
            "reviewBody": m.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            }
        }))
    };

    return (
        <div className={containerClasses} id="xmonials-widget-root">
            <WidgetIframeResizer />

            {/* Inject SEO directly into the DOM */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {style === 'masonry' && <MasonryGrid mentions={mentions} />}
            {style === 'carousel' && <Carousel mentions={mentions} />}
            {style === 'walloflove' && <WallOfLove mentions={mentions} />}
            {style === 'sidebar' && <SidebarFeed mentions={mentions} />}
            {style === 'single' && <SingleHighlight mentions={mentions} />}

            {/* Free tier watermark enforcement (mocked visually here) */}
            {watermarkParam !== 'false' && (
                <div className="mt-8 flex w-full justify-center">
                    <a
                        href="https://xmonials.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-semibold hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                    >
                        <span className="opacity-60">Powered by</span>
                        <span>Xmonials</span>
                    </a>
                </div>
            )}

            {/* 
        Ensure no scrollbar is visible on the body globally for this iframe.
        Next.js root layout handles html/body but we can inject a style here to be safe.
      */}
            <style dangerouslySetInnerHTML={{
                __html: `
        body { background: transparent !important; }
        ::-webkit-scrollbar { display: none; }
      `}} />
        </div>
    );
}
