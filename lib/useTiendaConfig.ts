"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";
import themes from "@/themes/themes.json";
import type { TiendaConfig, Tema } from "./types";

export function useTiendaConfig(): TiendaConfig & {
  setTema: (id: string) => void;
  setRubro: (slug: string) => void;
  setLayout: (layout: string) => void;
  temaActual: Tema | undefined;
} {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tema = searchParams.get("tema") ?? "claro";
  const rubro = searchParams.get("rubro") ?? "";
  const layout = searchParams.get("layout") ?? "grid";

  const temaActual = (themes as Tema[]).find((t) => t.id === tema);

  const aplicarTema = useCallback((t: Tema) => {
    const root = document.documentElement;
    root.style.setProperty("--bg", t.colors.bg);
    root.style.setProperty("--bg-secondary", t.colors.bgSecondary);
    root.style.setProperty("--text", t.colors.text);
    root.style.setProperty("--text-secondary", t.colors.textSecondary);
    root.style.setProperty("--accent", t.colors.accent);
    root.style.setProperty("--accent-hover", t.colors.accentHover);
    root.style.setProperty("--border", t.colors.border);
    root.style.setProperty("--card-bg", t.colors.cardBg);
  }, []);

  useEffect(() => {
    if (temaActual) aplicarTema(temaActual);
  }, [temaActual, aplicarTema]);

  const buildUrl = useCallback(
    (updates: Partial<TiendaConfig>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, val]) => {
        if (val) params.set(key, val);
        else params.delete(key);
      });
      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams]
  );

  const setTema = useCallback(
    (id: string) => router.push(buildUrl({ tema: id }), { scroll: false }),
    [router, buildUrl]
  );

  const setRubro = useCallback(
    (slug: string) => router.push(buildUrl({ rubro: slug }), { scroll: false }),
    [router, buildUrl]
  );

  const setLayout = useCallback(
    (l: string) => router.push(buildUrl({ layout: l }), { scroll: false }),
    [router, buildUrl]
  );

  return { tema, rubro, layout, temaActual, setTema, setRubro, setLayout };
}
