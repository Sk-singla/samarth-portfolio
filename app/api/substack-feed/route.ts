import { NextResponse } from "next/server";

// @ts-ignore
import Parser from "rss-parser";

export const dynamic = "force-dynamic";

const FEED_URL = "https://samarth000.substack.com/feed";

export async function GET() {
  const parser = new Parser();
  try {
    // Add a cache-busting query parameter to the feed URL
    const urlWithNoCache = `${FEED_URL}?_=${Date.now()}`;
    const feed = await parser.parseURL(urlWithNoCache);
    const posts = (feed.items || []).slice(0, 5).map((item: any) => {
      // Try to extract image from enclosure, media:content, or content
      let image = "";
      if (item.enclosure?.url) {
        image = item.enclosure.url;
      } else if (item["media:content"]?.url) {
        image = item["media:content"].url;
      } else if (item.content) {
        // Try to extract first image from HTML content
        const match = item.content.match(/<img[^>]+src="([^">]+)"/);
        if (match) image = match[1];
      }
      const description =
        item.contentSnippet ||
        item.summary ||
        (item.content ? item.content.replace(/<[^>]+>/g, "").slice(0, 200) : "") ||
        "";
      return {
        id: item.guid || item.link || item.title || Math.random().toString(),
        title: item.title || "Untitled",
        url: item.link || "#",
        publishedAt: item.isoDate || item.pubDate || "",
        image,
        description,
      };
    });
    return NextResponse.json({ posts });
  } catch (e: any) {
    return NextResponse.json({ posts: [], error: e.message }, { status: 500 });
  }
}
