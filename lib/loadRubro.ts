import ropa from "@/data/rubros/ropa";
import zapatos from "@/data/rubros/zapatos";
import comida from "@/data/rubros/comida";
import consumibles from "@/data/rubros/consumibles";
import electronica from "@/data/rubros/electronica";
import belleza from "@/data/rubros/belleza";
import hogar from "@/data/rubros/hogar";
import mascotas from "@/data/rubros/mascotas";
import joyeria from "@/data/rubros/joyeria";
import deportivo from "@/data/rubros/deportivo";
import type { Producto } from "./types";

const rubroData: Record<string, Producto[]> = {
  ropa,
  zapatos,
  comida,
  consumibles,
  electronica,
  belleza,
  hogar,
  mascotas,
  joyeria,
  deportivo,
};

export function loadRubro(slug: string): Producto[] {
  return rubroData[slug] ?? [];
}

export const RUBROS_DISPONIBLES = Object.keys(rubroData);
