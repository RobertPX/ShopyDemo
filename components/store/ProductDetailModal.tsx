"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import RubroIcon from "@/components/ui/RubroIcon";
import type { Producto, RubroConfig } from "@/lib/types";
import { WHATSAPP_DEFAULT } from "@/data/rubros.config";

interface ProductDetailModalProps {
  producto: Producto | null;
  rubro: RubroConfig | undefined;
  onClose: () => void;
  onReservar: (producto: Producto) => void;
}

export default function ProductDetailModal({
  producto,
  rubro,
  onClose,
  onReservar,
}: ProductDetailModalProps) {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    setImagenActual(0);
  }, [producto?.id]);

  const irAnterior = useCallback(() => {
    if (!producto) return;
    setImagenActual((i) => (i - 1 + producto.imagenes.length) % producto.imagenes.length);
  }, [producto]);

  const irSiguiente = useCallback(() => {
    if (!producto) return;
    setImagenActual((i) => (i + 1) % producto.imagenes.length);
  }, [producto]);

  useEffect(() => {
    if (!producto) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") irSiguiente();
      if (e.key === "ArrowLeft") irAnterior();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [producto, onClose]);

  useEffect(() => {
    document.body.style.overflow = producto ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [producto]);

  const tieneImagenes = producto ? producto.imagenes.length > 0 : false;
  const whatsappNumero = rubro?.whatsappNumero ?? WHATSAPP_DEFAULT;

  return (
    <AnimatePresence>
      {producto && (
        <>
          {/* Overlay */}
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel container */}
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalle de ${producto.nombre}`}
          >
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 56 }}
              transition={{ type: "spring", damping: 30, stiffness: 360, mass: 0.8 }}
              className="relative w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[85vh] rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl pointer-events-auto"
              style={{ backgroundColor: "var(--bg)" }}
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full font-bold transition-colors"
                style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)" }}
                aria-label="Cerrar"
              >
                ✕
              </button>

              {/* Imagen / carrusel */}
              <div className="relative shrink-0" style={{ aspectRatio: "16/9" }}>
                {tieneImagenes ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={producto.imagenes[imagenActual]}
                      alt={`${producto.nombre} — imagen ${imagenActual + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {producto.imagenes.length > 1 && (
                      <>
                        <button
                          onClick={irAnterior}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold shadow-lg"
                          style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
                          aria-label="Imagen anterior"
                        >
                          ‹
                        </button>
                        <button
                          onClick={irSiguiente}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold shadow-lg"
                          style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
                          aria-label="Imagen siguiente"
                        >
                          ›
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {producto.imagenes.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setImagenActual(i)}
                              className="w-2 h-2 rounded-full transition-all"
                              style={{
                                backgroundColor:
                                  i === imagenActual ? "var(--accent)" : "rgba(255,255,255,0.5)",
                              }}
                              aria-label={`Imagen ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{ backgroundColor: rubro?.colorFondo ?? "var(--bg-secondary)", color: "var(--icon-dark)" }}
                  >
                    <RubroIcon name={rubro?.icono ?? "ShoppingBag"} size={72} />
                    <span className="text-sm font-medium opacity-60" style={{ color: "var(--text)" }}>
                      Sin imagen disponible
                    </span>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="overflow-y-auto flex-1 p-5 sm:p-6 flex flex-col gap-4">
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {producto.categoria}
                  </span>
                  <h2 className="text-2xl font-black mt-1 leading-tight" style={{ color: "var(--text)" }}>
                    {producto.nombre}
                  </h2>
                  <p className="text-3xl font-black mt-2" style={{ color: "var(--accent)" }}>
                    Bs {producto.precio}
                  </p>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {producto.descripcionLarga}
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <WhatsAppButton
                    productoNombre={producto.nombre}
                    whatsappNumero={whatsappNumero}
                  />
                  <button
                    onClick={() => onReservar(producto)}
                    className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-sm border-2 transition-all duration-150 hover:opacity-80 active:scale-95"
                    style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                  >
                    Reservar este producto
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
