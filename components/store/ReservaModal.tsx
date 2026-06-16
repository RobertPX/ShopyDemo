"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ReservaModalProps {
  isOpen: boolean;
  productoNombre: string;
  onClose: () => void;
}

type Estado = "formulario" | "confirmado";

export default function ReservaModal({
  isOpen,
  productoNombre,
  onClose,
}: ReservaModalProps) {
  const [estado, setEstado] = useState<Estado>("formulario");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errores, setErrores] = useState<{ nombre?: string; telefono?: string }>({});

  useEffect(() => {
    if (isOpen) {
      setEstado("formulario");
      setNombre("");
      setTelefono("");
      setErrores({});
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const validar = () => {
    const nuevosErrores: typeof errores = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (!/^\+?[\d\s\-()]{6,}$/.test(telefono.trim())) {
      nuevosErrores.telefono = "Ingresa un número de teléfono válido.";
    }
    return nuevosErrores;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validar();
    if (Object.keys(err).length > 0) {
      setErrores(err);
      return;
    }
    setEstado("confirmado");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="reserva-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel container */}
          <div
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-label="Reservar producto"
          >
            <motion.div
              key="reserva-panel"
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 56 }}
              transition={{ type: "spring", damping: 30, stiffness: 360, mass: 0.8 }}
              className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
              style={{ backgroundColor: "var(--bg)" }}
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full font-bold transition-colors"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  color: "var(--text-secondary)",
                }}
                aria-label="Cerrar"
              >
                ✕
              </button>

              <div className="p-6 sm:p-8">
                {estado === "formulario" ? (
                  <>
                    <h2
                      className="text-xl font-black mb-1"
                      style={{ color: "var(--text)" }}
                    >
                      Reservar producto
                    </h2>
                    <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                      {productoNombre}
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                      {/* Nombre */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="reserva-nombre"
                          className="text-sm font-semibold"
                          style={{ color: "var(--text)" }}
                        >
                          Tu nombre
                        </label>
                        <input
                          id="reserva-nombre"
                          type="text"
                          autoComplete="name"
                          placeholder="Ej: María García"
                          value={nombre}
                          onChange={(e) => {
                            setNombre(e.target.value);
                            if (errores.nombre) setErrores((p) => ({ ...p, nombre: undefined }));
                          }}
                          className="w-full rounded-xl px-4 py-3 text-sm border-2 outline-none transition-colors"
                          style={{
                            backgroundColor: "var(--bg-secondary)",
                            borderColor: errores.nombre ? "var(--error)" : "var(--border)",
                            color: "var(--text)",
                          }}
                        />
                        {errores.nombre && (
                          <span className="text-xs" style={{ color: "var(--error)" }}>{errores.nombre}</span>
                        )}
                      </div>

                      {/* Teléfono */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="reserva-telefono"
                          className="text-sm font-semibold"
                          style={{ color: "var(--text)" }}
                        >
                          Tu teléfono
                        </label>
                        <input
                          id="reserva-telefono"
                          type="tel"
                          autoComplete="tel"
                          placeholder="Ej: +591 70000000"
                          value={telefono}
                          onChange={(e) => {
                            setTelefono(e.target.value);
                            if (errores.telefono) setErrores((p) => ({ ...p, telefono: undefined }));
                          }}
                          className="w-full rounded-xl px-4 py-3 text-sm border-2 outline-none transition-colors"
                          style={{
                            backgroundColor: "var(--bg-secondary)",
                            borderColor: errores.telefono ? "var(--error)" : "var(--border)",
                            color: "var(--text)",
                          }}
                        />
                        {errores.telefono && (
                          <span className="text-xs" style={{ color: "var(--error)" }}>{errores.telefono}</span>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-xl px-5 py-3 font-bold text-sm transition-all duration-150 hover:opacity-90 active:scale-95 mt-2"
                        style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)" }}
                      >
                        Confirmar reserva
                      </button>
                    </form>

                    <p className="text-xs text-center mt-4" style={{ color: "var(--text-secondary)" }}>
                      En el proyecto real, aquí se conecta con la pasarela de pago o el sistema del negocio.
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-4 py-4 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                      style={{ backgroundColor: "var(--bg-secondary)" }}
                    >
                      ✅
                    </div>
                    <h2
                      className="text-xl font-black"
                      style={{ color: "var(--text)" }}
                    >
                      ¡Reserva registrada!
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Gracias, <strong style={{ color: "var(--text)" }}>{nombre}</strong>. Tu interés en{" "}
                      <em>{productoNombre}</em> ha sido registrado.
                      <br />
                      Te contactaremos al <strong style={{ color: "var(--text)" }}>{telefono}</strong> a la brevedad.
                    </p>
                    <p
                      className="text-xs px-4 py-2 rounded-xl"
                      style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)" }}
                    >
                      (Demo) En producción esto enviaría una notificación real al negocio.
                    </p>
                    <button
                      onClick={onClose}
                      className="rounded-xl px-6 py-3 font-bold text-sm transition-all hover:opacity-90 mt-1"
                      style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)" }}
                    >
                      Entendido
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
