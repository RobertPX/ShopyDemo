"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTiendaConfig } from "@/lib/useTiendaConfig";
import rubrosConfig from "@/data/rubros.config";
import { RUBROS_DISPONIBLES } from "@/lib/loadRubro";
import RubroIcon from "@/components/ui/RubroIcon";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function RubroSelector() {
  const router = useRouter();
  const { tema } = useTiendaConfig();

  const irADemo = (slug: string) => {
    router.push(`/demo?rubro=${slug}&tema=${tema}`);
  };

  const rubrosActivos = rubrosConfig.filter((r) => RUBROS_DISPONIBLES.includes(r.slug));
  const rubrosProximos = rubrosConfig.filter((r) => !RUBROS_DISPONIBLES.includes(r.slug));

  return (
    <section>
      <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
        ¿Qué tipo de tienda necesitas?
      </h2>
      <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
        Selecciona el rubro para previsualizar tu tienda con productos de ejemplo.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {rubrosActivos.map((r, i) => (
          <motion.button
            key={r.slug}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => irADemo(r.slug)}
            className="flex flex-col items-center gap-3 rounded-2xl p-5 border-2 transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: r.colorFondo, color: "var(--icon-dark)" }}
            >
              <RubroIcon name={r.icono} size={32} />
            </div>
            <span className="text-sm font-semibold text-center leading-tight">
              {r.nombre}
            </span>
            <span className="text-xs" style={{ color: "var(--accent)" }}>
              Ver tienda →
            </span>
          </motion.button>
        ))}

        {rubrosProximos.map((r, i) => (
          <motion.div
            key={r.slug}
            custom={rubrosActivos.length + i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-3 rounded-2xl p-5 border-2 opacity-40 cursor-not-allowed"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
            title="Disponible próximamente"
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: r.colorFondo, color: "var(--icon-muted)" }}
            >
              <RubroIcon name={r.icono} size={32} />
            </div>
            <span className="text-sm font-semibold text-center leading-tight">
              {r.nombre}
            </span>
            <span className="text-xs">Próximamente</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
