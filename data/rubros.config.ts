import type { RubroConfig } from "@/lib/types";

// Número de WhatsApp de demostración — cambia por el real de cada cliente
export const WHATSAPP_DEFAULT = "59170000000";

const rubrosConfig: RubroConfig[] = [
  { slug: "ropa",        nombre: "Ropa",               icono: "Shirt",      colorFondo: "#DBEAFE" },
  { slug: "zapatos",     nombre: "Zapatos",             icono: "Footprints", colorFondo: "#FEF9C3" },
  { slug: "comida",      nombre: "Comida",              icono: "Utensils",   colorFondo: "#FEE2E2" },
  { slug: "consumibles", nombre: "Consumibles",         icono: "Package",    colorFondo: "#D1FAE5" },
  { slug: "electronica", nombre: "Electrónica",         icono: "Cpu",        colorFondo: "#E0E7FF" },
  { slug: "belleza",     nombre: "Belleza / Cosmética", icono: "Sparkles",   colorFondo: "#FCE7F3" },
  { slug: "hogar",       nombre: "Hogar / Decoración",  icono: "Home",       colorFondo: "#FEF3C7" },
  { slug: "mascotas",    nombre: "Mascotas",            icono: "PawPrint",   colorFondo: "#ECFDF5" },
  { slug: "joyeria",     nombre: "Joyería / Accesorios",icono: "Gem",        colorFondo: "#FDF2F8" },
  { slug: "deportivo",   nombre: "Deportivo / Fitness", icono: "Dumbbell",   colorFondo: "#EFF6FF" },
];

export default rubrosConfig;
