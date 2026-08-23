import Hero from "@/components/hero/Hero";
import LatestVideos from "@/components/home/LatestVideos";
import { LatestWriting } from "@/components/home/LatestWriting";
import { formatPostDate, getAllPosts } from "@/lib/posts";
import { domainFromLabel } from "@content/domains";

export default function HomePage() {
  const latestPosts = getAllPosts()
    .slice(0, 5)
    .flatMap((p, i) => {
      const domain = domainFromLabel(p.domain);
      // A post with an unrecognised frontmatter domain has no route to link to.
      if (!domain) return [];
      return [
        {
          n: String(i + 1).padStart(2, "0"),
          title: p.title,
          excerpt: p.excerpt,
          domain,
          date: formatPostDate(p.date),
          href: `/${domain}/${p.slug}`,
        },
      ];
    });

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
