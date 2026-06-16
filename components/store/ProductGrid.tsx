"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import RubroIcon from "@/components/ui/RubroIcon";
import type { Producto, RubroConfig } from "@/lib/types";

interface ProductGridProps {
  productos: Producto[];
  rubro: RubroConfig | undefined;
  onProductoClick: (p: Producto) => void;
}

export default function ProductGrid({ productos, rubro, onProductoClick }: ProductGridProps) {
  if (productos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
        <span style={{ color: "var(--text-secondary)" }}>
          <RubroIcon name={rubro?.icono ?? "ShoppingBag"} size={56} />
        </span>
        <p className="text-lg font-semibold" style={{ color: "var(--text)" }}>
          No hay productos disponibles
        </p>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Vuelve pronto — estamos cargando el catálogo.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productos.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
        >
          <ProductCard
            producto={p}
            rubro={rubro}
            onClick={onProductoClick}
          />
        </motion.div>
      ))}
    </div>
  );
}
