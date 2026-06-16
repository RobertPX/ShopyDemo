"use client";

import RubroIcon from "@/components/ui/RubroIcon";
import type { Producto, RubroConfig } from "@/lib/types";

interface ProductCardProps {
  producto: Producto;
  rubro: RubroConfig | undefined;
  onClick: (p: Producto) => void;
}

export default function ProductCard({ producto, rubro, onClick }: ProductCardProps) {
  const tieneImagen = producto.imagenes.length > 0;

  return (
    <button
      onClick={() => onClick(producto)}
      className="text-left w-full rounded-2xl border overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-2 group"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border)",
      }}
    >
      {/* Imagen / placeholder */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        {tieneImagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={producto.imagenes[0]}
            alt={producto.nombre}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: rubro?.colorFondo ?? "var(--bg-secondary)", color: "var(--icon-dark)" }}
          >
            <RubroIcon name={rubro?.icono ?? "ShoppingBag"} size={56} />
          </div>
        )}

        {producto.destacado && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full"
            style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)" }}
          >
            Destacado
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <span
          className="text-xs font-medium uppercase tracking-wide"
          style={{ color: "var(--text-secondary)" }}
        >
          {producto.categoria}
        </span>
        <h3
          className="font-bold text-base leading-snug line-clamp-2"
          style={{ color: "var(--text)" }}
        >
          {producto.nombre}
        </h3>
        <p
          className="text-sm line-clamp-2 mt-0.5"
          style={{ color: "var(--text-secondary)" }}
        >
          {producto.descripcionCorta}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-black" style={{ color: "var(--accent)" }}>
            Bs {producto.precio}
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full font-semibold border"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            Ver detalle
          </span>
        </div>
      </div>
    </button>
  );
}
