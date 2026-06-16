"use client";

import Link from "next/link";
import { useTiendaConfig } from "@/lib/useTiendaConfig";
import ThemeSwitcher from "./ThemeSwitcher";
import RubroIcon from "@/components/ui/RubroIcon";
import type { RubroConfig } from "@/lib/types";

interface StoreHeaderProps {
  rubro: RubroConfig | undefined;
}

export default function StoreHeader({ rubro }: StoreHeaderProps) {
  const { tema } = useTiendaConfig();

  return (
    <header
      className="sticky top-0 z-40 border-b px-6 py-3"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/?tema=${tema}`}
            className="flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-70 shrink-0"
            style={{ color: "var(--text-secondary)" }}
          >
            ← Volver
          </Link>

          <span style={{ color: "var(--border)" }}>|</span>

          {rubro ? (
            <div className="flex items-center gap-2 min-w-0">
              <span style={{ color: "var(--accent)" }}>
                <RubroIcon name={rubro.icono} size={20} />
              </span>
              <span
                className="font-bold text-lg truncate"
                style={{ color: "var(--text)" }}
              >
                {rubro.nombre}
              </span>
            </div>
          ) : (
            <span className="font-bold text-lg" style={{ color: "var(--text)" }}>
              Demo
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span
            className="hidden sm:block text-xs font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Nexvo Showcase
          </span>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
