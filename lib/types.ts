export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  categoria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagenes: string[];
  destacado?: boolean;
}

export interface TemaColors {
  bg: string;
  bgSecondary: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentHover: string;
  border: string;
  cardBg: string;
}

export interface Tema {
  id: string;
  name: string;
  swatch: string;
  colors: TemaColors;
}

export interface RubroConfig {
  slug: string;
  nombre: string;
  icono: string;
  colorFondo: string;
  whatsappNumero?: string;
}

export interface TiendaConfig {
  rubro: string;
  layout: string;
  tema: string;
}
