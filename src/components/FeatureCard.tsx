import { motion } from "motion/react";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  delay?: number;
  number?: string;
  onClick?: () => void;
}

export default function FeatureCard({
  title,
  description,
  icon,
  gradient,
  delay = 0,
  number,
  onClick,
}: FeatureCardProps) {
  const IconComp = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>>)[icon] || Icons.Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="relative flex flex-col justify-start items-start w-full max-w-[300px] group mx-auto cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 w-full h-[280px] opacity-50 rounded-[40px] pointer-events-none transition-opacity duration-300 group-hover:opacity-70"
        style={{ background: gradient, filter: "blur(45px)" }}
      />
      <div
        className="relative self-stretch h-[280px] rounded-[40px] z-10 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
        style={{
          border: "8px solid transparent",
          background: `linear-gradient(#1A1A1C, #1A1A1C) padding-box, ${gradient} border-box`,
        }}
      >
        <div className="w-full h-full p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="text-white/90">
                <IconComp size={32} strokeWidth={2.5} />
              </div>
              {number && (
                <span className="text-[10px] text-white/30 tracking-widest font-medium">{number}</span>
              )}
            </div>
            <h3 className="text-white font-medium text-xl mb-3 tracking-tight">{title}</h3>
            <p className="text-gray-400 text-[14px] leading-[1.6] font-normal">{description}</p>
          </div>
          <div className="flex items-center gap-1 text-white/30 text-xs group-hover:text-white/60 transition-colors">
            <span>Learn more</span>
            <Icons.ArrowRight size={12} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
