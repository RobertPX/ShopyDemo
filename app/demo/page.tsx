"use client";

import { useState } from "react";
import { useTiendaConfig } from "@/lib/useTiendaConfig";
import { loadRubro } from "@/lib/loadRubro";
import rubrosConfig from "@/data/rubros.config";
import StoreHeader from "@/components/store/StoreHeader";
import ProductGrid from "@/components/store/ProductGrid";
import ProductDetailModal from "@/components/store/ProductDetailModal";
import ReservaModal from "@/components/store/ReservaModal";
import RubroIcon from "@/components/ui/RubroIcon";
import type { Producto } from "@/lib/types";

export default function DemoPage() {
  const { rubro: rubroSlug } = useTiendaConfig();

  const [productoAbierto, setProductoAbierto] = useState<Producto | null>(null);
  const [reservaAbierta, setReservaAbierta] = useState(false);

  const rubroConfig = rubrosConfig.find((r) => r.slug === rubroSlug);
  const productos = rubroSlug ? loadRubro(rubroSlug) : [];

  const abrirProducto = (p: Producto) => setProductoAbierto(p);
  const cerrarProducto = () => setProductoAbierto(null);

  const abrirReserva = (p: Producto) => {
    setProductoAbierto(p);
    setReservaAbierta(true);
  };
  const cerrarReserva = () => setReservaAbierta(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <StoreHeader rubro={rubroConfig} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Sin rubro seleccionado */}
        {!rubroSlug ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
            <span className="text-6xl">🏪</span>
            <h1
              className="text-2xl font-black"
              style={{ color: "var(--text)" }}
            >
              Selecciona un rubro
            </h1>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Vuelve a la home y elige el tipo de tienda que quieres previsualizar.
            </p>
          </div>
        ) : (
          <>
            {/* Encabezado de la tienda */}
            <div className="mb-8">
              <h1
                className="flex items-center gap-3 text-3xl sm:text-4xl font-black leading-tight"
                style={{ color: "var(--text)" }}
              >
                {rubroConfig && (
                  <span style={{ color: "var(--accent)" }}>
                    <RubroIcon name={rubroConfig.icono} size={36} />
                  </span>
                )}
                {rubroConfig?.nombre}
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                {productos.length} productos · Vista previa de tu tienda online
              </p>
            </div>

            {/* Grid de productos */}
            <ProductGrid
              productos={productos}
              rubro={rubroConfig}
              onProductoClick={abrirProducto}
            />
          </>
        )}
      </main>

      {/* Modales */}
      <ProductDetailModal
        producto={productoAbierto}
        rubro={rubroConfig}
        onClose={cerrarProducto}
        onReservar={abrirReserva}
      />

      <ReservaModal
        isOpen={reservaAbierta}
        productoNombre={productoAbierto?.nombre ?? ""}
        onClose={cerrarReserva}
      />
    </div>
  );
}
