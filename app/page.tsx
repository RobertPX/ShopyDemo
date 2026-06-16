"use client";

import { motion } from "framer-motion";
import ThemeSwitcher from "@/components/store/ThemeSwitcher";
import RubroSelector from "@/components/home/RubroSelector";
import LayoutSelector from "@/components/home/LayoutSelector";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut", delay },
});

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Barra superior */}
      <header
        className="sticky top-0 z-50 border-b px-6 py-3 flex items-center justify-between"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-xl font-black tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            Nexvo
          </span>
          <span
            className="text-xl font-light"
            style={{ color: "var(--text)" }}
          >
            Showcase
          </span>
        </div>
        <ThemeSwitcher />
      </header>

      {/* Contenido principal */}
      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-16">
        {/* Hero */}
        <motion.div {...fadeUp(0)} className="text-center">
          <h1
            className="text-4xl sm:text-5xl font-black mb-4 leading-tight"
            style={{ color: "var(--text)" }}
          >
            Tu tienda online,{" "}
            <span style={{ color: "var(--accent)" }}>en minutos.</span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Selecciona el rubro, elige el estilo y comparte el link con tu
            cliente al instante — sin programar nada.
          </p>
        </motion.div>

        {/* Selector de rubro */}
        <motion.div {...fadeUp(0.1)}>
          <RubroSelector />
        </motion.div>

        {/* Separador */}
        <motion.hr {...fadeUp(0.2)} style={{ borderColor: "var(--border)" }} />

        {/* Selector de layouts */}
        <motion.div {...fadeUp(0.25)}>
          <LayoutSelector />
        </motion.div>
      </main>

      <footer
        className="text-center py-8 text-xs border-t"
        style={{
          color: "var(--text-secondary)",
          borderColor: "var(--border)",
        }}
      >
        Nexvo Showcase — Herramienta interna de demostración
      </footer>
    </div>
  );
}
