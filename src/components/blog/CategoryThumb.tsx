import type { ElementType } from "react";
import {
  Layers,
  Building2,
  Briefcase,
  Scale,
  DollarSign,
  Star,
  Target,
  Workflow,
  Anchor,
  ShoppingBag,
} from "lucide-react";
import AetherLogo from "../aether/AetherLogo";
import { categoryColors } from "../../data/blogShared";

const ICONS: Record<string, ElementType> = {
  "Luxury Rugs": Layers,
  "Premium Real Estate": Building2,
  "Private Equity": Briefcase,
  "Professional Services": Scale,
  "Wealth Management": DollarSign,
  "B2B Platforms": Star,
  "Strategy": Target,
  "Use Cases": Workflow,
  "Maritime & Logistics": Anchor,
  "High-Ticket E-commerce": ShoppingBag,
};

// Colored editorial thumbnail (gradient + dot grid + category icon) used on the
// blog index and related cards — the Anthropic-style tile, no photo needed.
export default function CategoryThumb({
  category,
  className = "",
  iconSize = 40,
}: {
  category: string;
  className?: string;
  iconSize?: number;
}) {
  const color = categoryColors[category] || "#7a7a85";
  const Icon = ICONS[category];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(140deg, ${color} 0%, ${color}cc 45%, #0A0A0B 135%)` }}
    >
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.95) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {category === "Cassian" ? (
          <AetherLogo size={iconSize + 6} state="static" className="text-white/90" />
        ) : Icon ? (
          <Icon size={iconSize} className="text-white/85" strokeWidth={1.4} />
        ) : null}
      </div>
    </div>
  );
}
