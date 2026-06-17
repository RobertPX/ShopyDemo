import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Zapatos · 14 fotos de calzado de Unsplash
const Z = [
  "1542291026-7eec264c27ff", // 0
  "1581888748626-2a3f240a6f9f", // 1
  "1637437757614-6491c8e915b5", // 2
  "1611080027147-a1a0b6e05168", // 3
  "1613972798457-45fc5237ae32", // 4
  "1708214837986-c3c3592c7a3e", // 5
  "1611080027910-9a417988bd34", // 6
  "1708214837981-1a2c1abd5464", // 7
  "1653397087561-e7425d6b5a2a", // 8
  "1518656306295-aa28b28b2504", // 9
  "1695459468644-717c8ae17eed", // 10
  "1661605813204-8c7662c1a5f8", // 11
  "1719523677291-a395426c1a87", // 12
  "1739138056250-8fe572213417", // 13
];
const n = Z.length;

const zapatos: Producto[] = [
  {
    id: "zapatos-001",
    nombre: "Sneaker Blanco Minimalista",
    precio: 320,
    categoria: "Sneakers",
    descripcionCorta: "Zapatilla urbana en cuero vegano blanco, suela de goma vulcanizada.",
    descripcionLarga: "Diseño minimalista atemporal con parte superior en cuero vegano blanco. Suela de goma vulcanizada de 3cm con grip antideslizante. Interior acolchado con plantilla extraíble de memory foam. Cierre con cordones planos de algodón. Tallas 35 al 45. Fácil de limpiar con paño húmedo.",
    imagenes: [img(Z[0 % n]), img(Z[5 % n]), img(Z[10 % n])],
    destacado: true,
  },
  {
    id: "zapatos-002",
    nombre: "Bota Chelsea Caramelo",
    precio: 485,
    categoria: "Botas",
    descripcionCorta: "Bota Chelsea de cuero genuino caramelo, elástico lateral, puntera redonda.",
    descripcionLarga: "Clásica bota Chelsea en cuero vacuno curtido de primera calidad, color caramelo envejecido. Elásticos laterales dobles para un calce preciso. Forro interior de ante suave. Suela de goma antideslizante de 4cm. La suela de cuero se trabaja con el uso para mayor comodidad. Disponible también en negro y cognac. Tallas 35 al 44.",
    imagenes: [img(Z[1 % n]), img(Z[6 % n]), img(Z[11 % n])],
  },
  {
    id: "zapatos-003",
    nombre: "Sandalia Trenzada Plana Natural",
    precio: 145,
    categoria: "Sandalias",
    descripcionCorta: "Sandalia plana de cuero trenzado, hebilla lateral ajustable.",
    descripcionLarga: "Elaborada a mano por artesanos locales con tiras de cuero natural entretejido. Plantilla anatómica con acolchado en el talón y antepié. Cierre con hebilla metálica dorada ajustable en el tobillo. Suela de goma flexible de 1.5cm. Perfecta para el verano. Tallas 35 al 42.",
    imagenes: [img(Z[2 % n]), img(Z[7 % n]), img(Z[12 % n])],
  },
  {
    id: "zapatos-004",
    nombre: "Oxford Cuero Negro Clásico",
    precio: 425,
    categoria: "Formales",
    descripcionCorta: "Zapato Oxford clásico en cuero negro, suela de cuero, punta redonda.",
    descripcionLarga: "El zapato formal por excelencia: Oxford en cuero liso negro con cordones de tres ojales. Suela de cuero cosida Blake (no pegada) para mayor durabilidad y reparabilidad. Puntera redonda elegante con leve brogueo decorativo. Plantilla interior en cuero acolchado. Ideal para entrevistas, bodas o el día a día en la oficina. Tallas 38 al 46.",
    imagenes: [img(Z[3 % n]), img(Z[8 % n]), img(Z[13 % n])],
    destacado: true,
  },
  {
    id: "zapatos-005",
    nombre: "Mocasín Ante Azul Marino",
    precio: 355,
    categoria: "Mocasines",
    descripcionCorta: "Mocasín de ante azul marino con detalle de moneda, sin cordones.",
    descripcionLarga: "Mocasín de vestir casual en ante azul marino de primera calidad. Detalle de franja con moneda plateada en el empeine. Forro interior de cuero suave. Suela de goma ligera con terminación de cuero. Ideal para usar sin calcetines en verano o con calcetines finos en invierno. Tallas 38 al 45.",
    imagenes: [img(Z[4 % n]), img(Z[9 % n]), img(Z[0 % n])],
  },
  {
    id: "zapatos-006",
    nombre: "Tenis Running Ultraligero",
    precio: 395,
    categoria: "Deportivos",
    descripcionCorta: "Zapatilla running con malla transpirable, suela EVA amortiguada.",
    descripcionLarga: "Diseñada para runners de nivel intermedio. Upper en malla knit ultraligera que permite una ventilación óptima. Suela en EVA dual-density con amortiguación diferenciada en talón y antepié. Plantilla removible con perfil ergonómico. Peso: 280g (talla 42). Reflectivos para mayor seguridad nocturna. Tallas 36 al 46.",
    imagenes: [img(Z[5 % n]), img(Z[10 % n]), img(Z[1 % n])],
  },
  {
    id: "zapatos-007",
    nombre: "Bota de Montaña Impermeable",
    precio: 585,
    categoria: "Botas",
    descripcionCorta: "Bota de trekking impermeable, membrana Gore-Tex, suela Vibram.",
    descripcionLarga: "Bota técnica para actividades al aire libre con membrana impermeable y transpirable. Parte superior en nobuk resistente a la abrasión reforzada en puntera y talón. Suela Vibram Megagrip con tacos profundos para terrenos irregulares. Sistema de cordones con ganchos rápidos. Horma ancha para mayor estabilidad. Tallas 36 al 46.",
    imagenes: [img(Z[6 % n]), img(Z[11 % n]), img(Z[2 % n])],
    destacado: true,
  },
  {
    id: "zapatos-008",
    nombre: "Alpargata Espadrille Natural",
    precio: 125,
    categoria: "Casuales",
    descripcionCorta: "Alpargata clásica con suela de yute trenzado, lona de algodón.",
    descripcionLarga: "La alpargata tradicional artesanal: parte superior en lona 100% algodón y suela de yute natural trenzado a mano. Ligera, fresca y perfecta para el verano. Disponible en colores lisos y rayas. Nota: la suela de yute no es apta para lluvia. Disponible en tallas 35 al 43.",
    imagenes: [img(Z[7 % n]), img(Z[12 % n]), img(Z[3 % n])],
  },
  {
    id: "zapatos-009",
    nombre: "Kitten Heel Nude Satinado",
    precio: 265,
    categoria: "Tacones",
    descripcionCorta: "Zapato destalonado con tacón kitten de 4cm, punta almendra, satén.",
    descripcionLarga: "Elegante mule con tacón kitten de 4cm en satén nude. Punta almendra levemente puntiaguda que estiliza la silueta. Forro interior en cuero suave. Tiras laterales con micro-ajuste. El nude clásico que combina con todo. Disponible también en negro y champagne. Tallas 35 al 42.",
    imagenes: [img(Z[8 % n]), img(Z[13 % n]), img(Z[4 % n])],
  },
  {
    id: "zapatos-010",
    nombre: "Zueco Ergonómico Plantilla Cork",
    precio: 215,
    categoria: "Casuales",
    descripcionCorta: "Zueco con plantilla de corcho moldeable, parte superior de cuero.",
    descripcionLarga: "El confort elevado a diseño: zueco con plantilla de corcho natural que se adapta a la forma del pie con el uso. Parte superior en cuero genuino con acabado liso. Suela de goma antideslizante. Hebilla metálica ajustable en el empeine. Recomendado por podólogos para personas con problemas de fascitis plantar. Tallas 35 al 45.",
    imagenes: [img(Z[9 % n]), img(Z[0 % n]), img(Z[5 % n])],
  },
];

export default zapatos;
