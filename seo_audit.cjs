const fs = require('fs');

const urls = [
    "https://axoneura.in",
    "https://axoneura.in/eduopus",
    "https://axoneura.in/schools",
    "https://axoneura.in/business",
    "https://axoneura.in/services",
    "https://axoneura.in/about",
    "https://axoneura.in/faq",
    "https://axoneura.in/contact",
    "https://axoneura.in/blog"
];

async function run() {
    const results = {};
    for (const url of urls) {
        try {
            const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 SEO-Audit' }});
            const html = await res.text();
            
            const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
            const title = titleMatch ? titleMatch[1].trim() : "";
            
            const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
            const description = descMatch ? descMatch[1].trim() : "";
            
            const h1s = [];
            const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
            let m;
            while ((m = h1Regex.exec(html)) !== null) {
                h1s.push(m[1].replace(/<[^>]+>/g, '').trim());
            }
            
            const h2s = (html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || []).length;
            const h3s = (html.match(/<h3[^>]*>[\s\S]*?<\/h3>/gi) || []).length;
            
            const textContent = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
                                    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
                                    .replace(/<[^>]+>/g, ' ');
            const words = textContent.split(/\s+/).filter(w => w.trim().length > 0);
            
            const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
            const canonical = canonicalMatch ? canonicalMatch[1] : "";
            
            const ogTags = html.match(/<meta[^>]*property=["']og:.*?["']/ig) || [];
            const schemaMatch = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>/i);
            
            const images = html.match(/<img[^>]*>/ig) || [];
            const imagesWithAlt = images.filter(img => /alt=["'].*?["']/.test(img));
            
            const internalLinks = (html.match(/<a[^>]*href=["'](\/|https:\/\/axoneura\.in).*?["']/ig) || []).length;
            
            const viewportMatch = html.match(/<meta[^>]*name=["']viewport["']/i);

            results[url] = {
                status: res.status,
                title,
                description,
                h1_count: h1s.length,
                h1s,
                h2s,
                h3s,
                word_count: Math.round(words.length * 0.7), // approximating content vs nav
                first_100_words: words.slice(0, 100).join(" ").toLowerCase(),
                canonical,
                viewport_present: !!viewportMatch,
                og_tags_count: ogTags.length,
                schema_present: !!schemaMatch,
                total_images: images.length,
                images_with_alt: imagesWithAlt.length,
                internal_links_count: internalLinks,
                text_content_preview: words.slice(0, 1000).join(" ").toLowerCase()
            };
        } catch (e) {
            results[url] = { status: 500, error: e.message };
        }
    }
    
    try {
        const robRes = await fetch("https://axoneura.in/robots.txt");
        results["__site__"] = { robots: await robRes.text() };
        const smRes = await fetch("https://axoneura.in/sitemap.xml");
        results["__site__"].sitemap = (await smRes.text()).toLowerCase().includes('urlset');
    } catch (e) {
        if (!results["__site__"]) results["__site__"] = {};
        results["__site__"].error = e.message;
    }

    fs.writeFileSync("c:\\Users\\User\\axoneura-ignite\\seo_results.json", JSON.stringify(results, null, 2));
}

run();
