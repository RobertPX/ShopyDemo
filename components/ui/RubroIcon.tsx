"use client";

import {
  Shirt,
  Footprints,
  Utensils,
  Package,
  Cpu,
  Sparkles,
  Home,
  PawPrint,
  Gem,
  Dumbbell,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Shirt,
  Footprints,
  Utensils,
  Package,
  Cpu,
  Sparkles,
  Home,
  PawPrint,
  Gem,
  Dumbbell,
  ShoppingBag,
};

interface RubroIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function RubroIcon({ name, size = 24, className }: RubroIconProps) {
  const Icon = ICON_MAP[name] ?? ShoppingBag;
  return <Icon size={size} className={className} />;
}
