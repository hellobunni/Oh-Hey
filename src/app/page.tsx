import Hero from "@/components/hero/Hero";
import LatestVideos from "@/components/home/LatestVideos";
import { LatestWriting } from "@/components/home/LatestWriting";
import { getAllPosts } from "@/lib/posts";
import type { Domain } from "@content/domains";

const DOMAIN_KEY: Record<string, Domain> = {
  Tech: "tech",
  Fitness: "fitness",
  Creative: "creative",
  "Nerd Stuff": "nerd",
};

export default function HomePage() {
  const latestPosts = getAllPosts()
    .slice(0, 5)
    .map((p, i) => ({
      n: String(i + 1).padStart(2, "0"),
      title: p.title,
      excerpt: p.excerpt,
      domain: DOMAIN_KEY[p.domain],
      date: p.date,
      href: `/${DOMAIN_KEY[p.domain]}/${p.slug}`,
    }));

  const latestVideos = [
    {
      title: "I BEAT IT BLINDFOLDED",
      channel: "ohheylynae",
      views: "12K views",
      duration: "10:00",
      href: "/videos/i-beat-it-blindfolded",
    },
    {
      title: "I BEAT IT BLINDFOLDED",
      channel: "ohheylynae",
      views: "12K views",
      duration: "10:00",
      href: "/videos/i-beat-it-blindfolded",
    },
    {
      title: "I BEAT IT BLINDFOLDED",
      channel: "ohheylynae",
      views: "12K views",
      duration: "10:00",
      href: "/videos/i-beat-it-blindfolded",
    },
  ];

  return (
    <main>
      <Hero />
      <LatestVideos videos={latestVideos} />
      <LatestWriting posts={latestPosts} />
    </main>
  );
}
