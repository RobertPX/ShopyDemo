"use client";

const LAYOUTS = [
  {
    id: "grid",
    nombre: "Grid Clásico",
    descripcion: "Productos en cuadrícula, ideal para catálogos amplios.",
    preview: (
      <div className="grid grid-cols-3 gap-1 w-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded aspect-square"
            style={{ backgroundColor: "var(--border)" }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "lista",
    nombre: "Lista Detallada",
    descripcion: "Cada producto ocupa una fila con descripción amplia.",
    preview: (
      <div className="flex flex-col gap-1.5 w-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-2 items-center">
            <div
              className="rounded w-10 h-10 shrink-0"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div className="flex-1 flex flex-col gap-1">
              <div
                className="h-2 rounded"
                style={{ backgroundColor: "var(--border)", width: "60%" }}
              />
              <div
                className="h-1.5 rounded"
                style={{ backgroundColor: "var(--border)", width: "40%" }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "showcase",
    nombre: "Imagen Destacada",
    descripcion: "Un producto a la vez, con imagen grande e impacto visual.",
    preview: (
      <div className="flex flex-col gap-1.5 w-full">
        <div
          className="w-full rounded-lg"
          style={{ backgroundColor: "var(--border)", height: "60px" }}
        />
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded aspect-square"
              style={{ backgroundColor: "var(--border)", opacity: 0.5 }}
            />
          ))}
        </div>
      </div>
    ),
  },
];

export default function LayoutSelector() {
  return (
    <section>
      <h2
        className="text-2xl font-bold mb-2"
        style={{ color: "var(--text)" }}
      >
        Estilo de tu tienda
      </h2>
      <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
        Elige cómo quieres mostrar tus productos. Los estilos estarán disponibles en la próxima fase.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {LAYOUTS.map((layout, idx) => (
          <div
            key={layout.id}
            className="rounded-2xl border-2 p-5 flex flex-col gap-4 opacity-70 cursor-not-allowed"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: idx === 0 ? "var(--accent)" : "var(--border)",
            }}
            title="Disponible en Fase 2"
          >
            <div className="h-24 flex items-center justify-center p-2">
              {layout.preview}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--text)" }}
                >
                  {layout.nombre}
                </span>
                {idx === 0 && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "var(--on-accent)",
                    }}
                  >
                    Por defecto
                  </span>
                )}
              </div>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {layout.descripcion}
              </p>
            </div>
            <span
              className="text-xs mt-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Disponible en Fase 2
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
