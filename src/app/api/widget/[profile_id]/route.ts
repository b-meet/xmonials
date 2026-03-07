import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request, { params }: { params: Promise<{ profile_id: string }> }) {
  try {
    const { profile_id } = await params;

    // Fetch approved mentions for this profile
    const { data: mentions, error } = await supabase
      .from('mentions')
      .select('*')
      .eq('profile_id', profile_id)
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    if (!mentions || mentions.length === 0) {
      return new NextResponse('<div style="font-family: system-ui, sans-serif; text-align: center; padding: 20px; color: #666;">No testimonials available yet.</div>', {
        headers: { 'Content-Type': 'text/html' }
      });
    }

    // Step 7: Generate JSON-LD for SEO
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

    // Step 6: Generate HTML Widget with Tailwind UI
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testimonials Widget</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script type="application/ld+json">
          ${JSON.stringify(jsonLd)}
        </script>
        <style>
          /* Hide scrollbar for a cleaner iframe experience */
          ::-webkit-scrollbar { display: none; }
          body { -ms-overflow-style: none; scrollbar-width: none; background: transparent; }
        </style>
      </head>
      <body class="p-4 font-sans bg-transparent antialiased">
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          ${mentions.map(m => `
            <div class="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex items-center space-x-3 mb-4">
                <div class="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-sm">
                  ${m.author_name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 class="font-semibold text-neutral-900 leading-tight">
                    ${m.author_name}
                  </h4>
                  <p class="text-xs text-neutral-500">@${m.author_username}</p>
                </div>
                <div class="ml-auto flex shrink-0 self-start mt-1">
                  <!-- Twitter/X Icon -->
                  <svg class="h-5 w-5 fill-neutral-900" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </div>
              </div>
              <p class="text-neutral-700 leading-relaxed text-sm">
                ${m.text}
              </p>
            </div>
          `).join('')}
        </div>
        
        <!-- Script to communicate height to parent for auto-resizing iframe -->
        <script>
          function sendHeight() {
            var height = document.body.scrollHeight;
            window.parent.postMessage({ height: height, type: 'xmonials-widget-resize' }, '*');
          }
          window.addEventListener('load', sendHeight);
          window.addEventListener('resize', sendHeight);
          new ResizeObserver(sendHeight).observe(document.body);
        </script>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Content-Security-Policy': "frame-ancestors *;" // Allow framing from any origin 
      }
    });

  } catch (err: unknown) {
    console.error('Failed to generate widget:', err);
    return new NextResponse('<div style="color:red">Error loading widget</div>', { status: 500 });
  }
}
