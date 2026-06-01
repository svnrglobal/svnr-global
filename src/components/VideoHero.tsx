interface VideoHeroProps {
  src: string;
  children: React.ReactNode;
}

export default function VideoHero({ src, children }: VideoHeroProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={src}
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
