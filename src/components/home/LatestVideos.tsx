import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { VideoCard, type VideoCardProps } from "../organisms/VideoCard";
import { SectionHeader } from "../layout/SectionHeader";

export type LatestVideo = Pick<
  VideoCardProps,
  "title" | "channel" | "views" | "thumbnail" | "href" | "duration"
>;

type LatestVideosProps = {
  videos: LatestVideo[];
};

export default function LatestVideos({ videos }: LatestVideosProps) {
  return (
    <section className={cn("home-inner py-[72px_0_64px] border-y")}>
      <div className="site-inner px-[clamp(20px,5vw,80px)] py-18 md:py-[72px_0_64px]">
        {/** SECTION HEADING */}
        <SectionHeader
          num="01"
          title="New this week"
          action={{ label: "All Videos", href: "/videos" }}
        />
        {/** CONTENT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <VideoCard
              key={video.href ?? video.title}
              duration={video.duration ?? "10:00"}
              title={video.title}
              channel={video.channel}
              views={video.views}
              thumbnail={video.thumbnail}
              href={video.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
