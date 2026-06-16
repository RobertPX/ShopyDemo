"use client";

import { useTiendaConfig } from "@/lib/useTiendaConfig";
import themes from "@/themes/themes.json";
import type { Tema } from "@/lib/types";

export default function ThemeSwitcher() {
  const { tema, setTema } = useTiendaConfig();

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span
        className="text-xs font-medium mr-1"
        style={{ color: "var(--text-secondary)" }}
      >
        Tema:
      </span>
      {(themes as Tema[]).map((t) => (
        <button
          key={t.id}
          title={t.name}
          onClick={() => setTema(t.id)}
          className="relative w-7 h-7 rounded-full border-2 transition-all duration-150 focus:outline-none focus-visible:ring-2"
          style={{
            backgroundColor: t.swatch,
            borderColor: tema === t.id ? "var(--accent)" : "var(--border)",
            boxShadow:
              tema === t.id ? "0 0 0 2px var(--bg), 0 0 0 4px var(--accent)" : "none",
          }}
          aria-label={`Tema ${t.name}`}
          aria-pressed={tema === t.id}
        />
      ))}
    </div>
  );
}
