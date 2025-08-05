"use client";

import React, { useEffect, useState } from "react";

type SubstackPost = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  image?: string;
};

const SUBSTACK_PROFILE = "https://substack.com/@samarth000";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Substack() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(`/api/substack-feed`);
        if (!res.ok) throw new Error("Failed to fetch blog posts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFeed();
  }, []);

  // Helper to get a lower quality image if possible
  function getLowQualityImage(url?: string) {
    if (!url) return undefined;
    // Substack CDN images often have /f/ in the path, replace with /w_400/ for lower-res
    return url.replace(/\/f\//, "/w_400/");
  }

  // Skeleton loader for cards
  function SkeletonCard() {
    return (
      <div className="animate-pulse h-full border rounded-lg p-6 flex flex-col">
        <div className="bg-gray-200 rounded w-full h-48 mb-4" />
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-100 rounded w-1/2 mt-auto" />
      </div>
    );
  }

  // Animated image loader component
  function AnimatedImage({ src, alt }: { src: string | undefined; alt: string }) {
    const [loaded, setLoaded] = useState(false);
    // Use a dummy image if src is not provided
    const imageSrc =
      src ||
      "https://placehold.co/600x300?text="+alt;

    return (
      <div className="relative mb-4 rounded w-full h-48 overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-0">
          </div>
        )}
        <img
          src={imageSrc}
          alt={alt}
          className={`rounded w-full h-48 object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
    );
  }

  return (
    <section id="substack" className="section-padding">
      <div className="container px-4 mx-auto">
        <h2 className="section-title gradient-text mb-8">Latest Blog Posts</h2>
        <div className="mb-6 flex justify-center">
          <a
            href={SUBSTACK_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            Visit my Substack profile
          </a>
        </div>
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.length === 0 && <p className="col-span-full">No posts found.</p>}
            {posts.map((post: SubstackPost) => (
              <Card key={post.id} className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                    <AnimatedImage
                      src={getLowQualityImage(post.image)}
                      alt={post.title}
                    />
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-700 hover:underline mb-2"
                  >
                    {post.title}
                  </a>
                  <span className="text-gray-500 text-sm mt-auto">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : ""}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
