import { motion } from "motion/react";
import {
  Anchor, BarChart3, Briefcase, Building2, DollarSign, Layers, Mail,
  MessageSquare, Network, Scale, Search, ShoppingBag, Star, Target,
  TrendingUp, Workflow, ArrowRight,
  type LucideIcon,
} from "lucide-react";

// Explicit map so the bundler tree-shakes Lucide down to only what we use.
// (A wildcard `import * as Icons` pulls the entire ~150KB icon set into the
//  homepage bundle.)
const ICONS: Record<string, LucideIcon> = {
  Anchor, BarChart3, Briefcase, Building2, DollarSign, Layers, Mail,
  MessageSquare, Network, Scale, Search, ShoppingBag, Star, Target,
  TrendingUp, Workflow,
};

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
  gradient: _gradient,
  delay = 0,
  number,
  onClick,
}: FeatureCardProps) {
  void _gradient;
  const IconComp = ICONS[icon] || Star;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="group h-full"
      onClick={onClick}
    >
      <div className="relative h-full flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.03] cursor-pointer">
        <div>
          <div className="flex items-center justify-between mb-5">
            <IconComp size={22} strokeWidth={1.75} className="text-white/70" />
            {number && (
              <span
                className="text-[10px] tracking-widest text-white/30 tabular-nums"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {number}
              </span>
            )}
          </div>
          <h3 className="text-white font-semibold text-lg mb-2 tracking-tight">{title}</h3>
          <p className="text-white/45 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-white/35 text-xs group-hover:text-white/70 transition-colors">
          <span>Learn more</span>
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
