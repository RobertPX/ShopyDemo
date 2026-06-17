import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Comida · 15 fotos de alimentos y mercado de Unsplash
const C = [
  "1542838132-92c53300491e", // 0
  "1583258292688-d0213dc5a3a8", // 1
  "1515706886582-54c73c5eaf41", // 2
  "1534723452862-4c874018d66d", // 3
  "1516594798947-e65505dbb29d", // 4
  "1584953528653-503bb1c9dbf8", // 5
  "1607349913338-fca6f7fc42d0", // 6
  "1585939049495-7f87cd649405", // 7
  "1585861299373-491140ca920e", // 8
  "1605447813584-26aeb3f8e6ae", // 9
  "1660583341011-bf2752db6cd9", // 10
  "1527493324787-47372b893452", // 11
  "1506617564039-2f3b650b7010", // 12
  "1717457782008-0be60990f016", // 13
  "1563377225929-7084bcef8e24", // 14
];

const comida: Producto[] = [
  {
    id: "comida-001",
    nombre: "Miel de Abeja Artesanal 500g",
    precio: 85,
    categoria: "Mieles",
    descripcionCorta: "Miel cruda sin pasteurizar, cosechada en colmenas de altura en los Yungas.",
    descripcionLarga: "Miel 100% natural obtenida de abejas melíferas en apiarios de altura (1800-2400 msnm) en los Yungas paceños. Sin pasteurizar, sin aditivos. Rica en enzimas, antioxidantes y propiedades antibacterianas naturales. Puede cristalizarse en clima frío, señal de su pureza. Ideal para endulzar infusiones, yogur o tostadas. Frasco de vidrio reutilizable.",
    imagenes: [img(C[0]), img(C[5]), img(C[10])],
    destacado: true,
  },
  {
    id: "comida-002",
    nombre: "Quinoa Real Orgánica 1kg",
    precio: 58,
    categoria: "Granos",
    descripcionCorta: "Quinoa real boliviana certificada orgánica, grano grande y nutritivo.",
    descripcionLarga: "La quinoa real del Altiplano boliviano: el cultivo más nutritivo del mundo en su versión más pura. Certificada orgánica, libre de gluten y con el mayor contenido de proteína vegetal completa del mercado. Grano grande, lavado y listo para cocinar. Cocción en 15 minutos. Perfecta para ensaladas, guisos, budines y bowls.",
    imagenes: [img(C[1]), img(C[6]), img(C[11])],
  },
  {
    id: "comida-003",
    nombre: "Chocolate Artesanal 70% Cacao",
    precio: 48,
    categoria: "Chocolates",
    descripcionCorta: "Tableta 80g de chocolate negro boliviano, cacao fino de aroma.",
    descripcionLarga: "Elaborado con cacao fino de aroma proveniente del norte de La Paz, reconocido mundialmente por su perfil aromático. 70% cacao, 30% azúcar de caña sin refinar. Sin lecitina de soja, sin sabores artificiales. Notas de frutos rojos, nuez y madera. Elaborado en pequeños lotes por maestros chocolateros locales. Tableta de 80g.",
    imagenes: [img(C[2]), img(C[7]), img(C[12])],
    destacado: true,
  },
  {
    id: "comida-004",
    nombre: "Aceite de Oliva Extra Virgen 500ml",
    precio: 98,
    categoria: "Aceites",
    descripcionCorta: "Aceite de oliva EVOO primera presión en frío, acidez <0.3%.",
    descripcionLarga: "Aceite de oliva extra virgen de la primera presión en frío de aceitunas Picual y Arbequina. Acidez menor a 0.3%, lo que garantiza su categoría premium. Aroma frutado con notas de hierba verde, tomate y almendra. Ideal para aliñar ensaladas, salsas y finalizar platos. Botella oscura para preservar sus propiedades. 500ml.",
    imagenes: [img(C[3]), img(C[8]), img(C[13])],
  },
  {
    id: "comida-005",
    nombre: "Café Arábica Tostado Artesanal 250g",
    precio: 78,
    categoria: "Café",
    descripcionCorta: "Café de altura boliviano, tostado medio-oscuro, molido para cafetera.",
    descripcionLarga: "Cultivado en las laderas de los Yungas a más de 1600 msnm por pequeños productores locales. Variedad arábica lavada con notas de chocolate amargo, caramelo y cítrico suave. Tostado artesanal en horno de tambor. Disponible en grano entero o molido para cafetera italiana, francesa o filtro. Bolsa con válvula de desgasificación. 250g.",
    imagenes: [img(C[4]), img(C[9]), img(C[14])],
    destacado: true,
  },
  {
    id: "comida-006",
    nombre: "Granola Artesanal Frutos Rojos 500g",
    precio: 62,
    categoria: "Cereales",
    descripcionCorta: "Granola horneada con avena, miel, quinoa pop y frutos rojos deshidratados.",
    descripcionLarga: "Granola artesanal elaborada con avena laminada gruesa, copos de quinoa pop, miel pura boliviana, semillas de girasol, almendras fileteadas y una generosa mezcla de arándanos, cranberry y cereza deshidratados. Horneada en pequeños lotes para garantizar frescura. Sin conservantes artificiales. Perfecta con yogur o leche vegetal. 500g.",
    imagenes: [img(C[5]), img(C[10]), img(C[0])],
  },
  {
    id: "comida-007",
    nombre: "Mermelada de Tomate de Árbol 350g",
    precio: 42,
    categoria: "Mermeladas",
    descripcionCorta: "Mermelada artesanal de tomate de árbol boliviano, baja en azúcar.",
    descripcionLarga: "El tomate de árbol (tamarillo) cultivado en los valles mesotérmicos bolivianos tiene un sabor único: agridulce con notas tropicales. Esta mermelada artesanal utiliza fruta fresca, azúcar de caña y pectina natural. Sin colorantes ni conservantes. Perfecta para acompañar queso fresco, tostadas o como relleno de facturas. 350g.",
    imagenes: [img(C[6]), img(C[11]), img(C[1])],
  },
  {
    id: "comida-008",
    nombre: "Maní Garrapiñado de la Abuela 300g",
    precio: 38,
    categoria: "Snacks",
    descripcionCorta: "Maní boliviano caramelizado con azúcar y canela al estilo tradicional.",
    descripcionLarga: "Receta tradicional de maní garrapiñado elaborado con maní nacional de primera selección, azúcar blanca, agua y un toque de canela molida. Cocción en paila de cobre a fuego lento hasta alcanzar el punto perfecto de cristalizado. Crujiente, dulce y aromático. Sin aditivos. Ideal como snack o para repostería. 300g.",
    imagenes: [img(C[7]), img(C[12]), img(C[2])],
  },
  {
    id: "comida-009",
    nombre: "Salsa de Locoto Artesanal 200ml",
    precio: 45,
    categoria: "Salsas",
    descripcionCorta: "Salsa picante de locoto fresco boliviano, sin conservantes.",
    descripcionLarga: "El locoto es el ají boliviano por excelencia, con un picor intenso y sabor afrutado inconfundible. Esta salsa artesanal mezcla locoto fresco molido con tomate, cebolla, cilantro y sal marina. Sin vinagre, sin conservantes. Refrigerar después de abrir y consumir en 15 días. Picor nivel 4/5. Perfecta para picantes, sandwiches y carnes asadas. 200ml.",
    imagenes: [img(C[8]), img(C[13]), img(C[3])],
    destacado: true,
  },
  {
    id: "comida-010",
    nombre: "Yerba Mate Premium con Palo 500g",
    precio: 65,
    categoria: "Infusiones",
    descripcionCorta: "Yerba mate suave con palo, corte grueso, curada 12 meses.",
    descripcionLarga: "Yerba mate seleccionada de hoja grande con palo, procesada con corte grueso para una infusión suave y duradera. Curada durante 12 meses en silo para suavizar el amargor y potenciar los sabores herbáceos. Perfecta para quienes prefieren un mate no tan fuerte. Viene en bolsa resellable con válvula de aroma. 500g.",
    imagenes: [img(C[9]), img(C[14]), img(C[4])],
  },
];

export default comida;
