import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoHeroProps {
  src: string;
  children: React.ReactNode;
  minHeight?: string;
}

export default function VideoHero({ src, children, minHeight = "min-h-screen" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;

    if (src.includes(".m3u8")) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.play().catch(() => {});
      } else if (Hls.isSupported()) {
        hls = new Hls({ autoStartLoad: true, startLevel: -1 });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => { video.play().catch(() => {}); });
      }
    } else {
      video.src = src;
      video.play().catch(() => {});
    }
    return () => { if (hls) hls.destroy(); };
  }, [src]);

  return (
    <section className={`relative w-full ${minHeight} flex flex-col items-center justify-center overflow-hidden`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="video-overlay absolute inset-0 z-[1]" />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
