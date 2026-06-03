import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Hls from "hls.js";

interface VideoHeroProps {
  src: string;
  children: React.ReactNode;
  minHeight?: string;
}

export default function VideoHero({ src, children, minHeight = "min-h-screen" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;

    const onReady = () => setReady(true);
    video.addEventListener("playing", onReady);
    video.addEventListener("canplay", onReady); // Safari HLS fallback

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

    return () => {
      video.removeEventListener("playing", onReady);
      video.removeEventListener("canplay", onReady);
      if (hls) hls.destroy();
    };
  }, [src]);

  return (
    <section className={`relative w-full ${minHeight} flex flex-col items-center justify-center overflow-hidden`}>
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      {/* Permanent gradient overlay */}
      <div className="video-overlay absolute inset-0 z-[1]" />
      {/* Dark intro overlay — fades out once video is playing */}
      <motion.div
        className="absolute inset-0 z-[5] bg-[#0A0A0B]"
        initial={{ opacity: 1 }}
        animate={{ opacity: ready ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ pointerEvents: "none" }}
      />
      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
