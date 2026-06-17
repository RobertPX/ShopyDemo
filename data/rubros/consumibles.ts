import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Consumibles · 15 fotos de limpieza e higiene de Unsplash
const K = [
  "1760537436392-5fe6e02fc6de", // 0
  "1759846866217-e627e4478f82", // 1
  "1771491458535-b23afd59ce79", // 2
  "1731041869283-1cbeee663d16", // 3
  "1758273238594-9a9d6c20eaa2", // 4
  "1758273238795-c284e5ae09b6", // 5
  "1758273238738-9410f7e9d53c", // 6
  "1758272421751-963195322eaa", // 7
  "1758273238847-bc2c2548e210", // 8
  "1774978612572-9ad8abb3027f", // 9
  "1779575735732-3c77476f55ab", // 10
  "1758279744970-b32360a5e907", // 11
  "1688644554687-3f8365a83799", // 12
  "1758273705819-87da5a147c22", // 13
  "1758273705433-d1485e8f00e0", // 14
];

const consumibles: Producto[] = [
  {
    id: "consumibles-001",
    nombre: "Shampoo Coco & Aloe Sin Sulfatos 350ml",
    precio: 58,
    categoria: "Cabello",
    descripcionCorta: "Shampoo libre de sulfatos y parabenos, apto para cabello teñido.",
    descripcionLarga: "Formulado con aceite de coco virgen, extracto de aloe vera y proteína de seda. Limpia suavemente sin agredir el cuero cabelludo ni eliminar los aceites naturales. Libre de sulfatos SLS/SLES, parabenos y colorantes artificiales. Apto para cabello rizado, liso, teñido y sensible. pH balanceado 5.5. 350ml.",
    imagenes: [img(K[0]), img(K[5]), img(K[10])],
    destacado: true,
  },
  {
    id: "consumibles-002",
    nombre: "Jabón Artesanal de Lavanda 100g",
    precio: 30,
    categoria: "Jabones",
    descripcionCorta: "Jabón frío de aceite de oliva y lavanda, hidratante y aromático.",
    descripcionLarga: "Elaborado por el método de saponificación en frío con aceite de oliva virgen, aceite de coco y aceite esencial de lavanda francesa. Curado durante 6 semanas para un pH óptimo. La glicerina natural del proceso queda en la barra, haciendo de este jabón un hidratante efectivo. Sin detergentes sintéticos. 100g.",
    imagenes: [img(K[1]), img(K[6]), img(K[11])],
  },
  {
    id: "consumibles-003",
    nombre: "Crema Corporal Karité & Vitamina E 250ml",
    precio: 78,
    categoria: "Cuerpo",
    descripcionCorta: "Crema corporal de absorción rápida con manteca de karité y vitamina E.",
    descripcionLarga: "Textura ligera de rápida absorción que no deja residuo graso. Enriquecida con manteca de karité orgánica, aceite de jojoba y vitamina E como antioxidante. Hidrata en profundidad por hasta 24 horas. Fragancia natural de vainilla y sándalo. Apta para piel seca y muy seca. Sin parabenos. 250ml.",
    imagenes: [img(K[2]), img(K[7]), img(K[12])],
  },
  {
    id: "consumibles-004",
    nombre: "Detergente Líquido Biodegradable 1L",
    precio: 48,
    categoria: "Limpieza",
    descripcionCorta: "Detergente concentrado para ropa, biodegradable, apto para piel sensible.",
    descripcionLarga: "Fórmula concentrada que requiere solo 30ml por carga. Surfactantes de origen vegetal, biodegradables al 95%. Efectivo en agua fría desde 20°C. Elimina manchas comunes (aceite, café, hierba) sin dañar las fibras. Sin fosfatos, sin cloro. Apto para lavarropas de carga frontal y superior. Fragancia de flores blancas. 1L rinde 33 cargas.",
    imagenes: [img(K[3]), img(K[8]), img(K[13])],
  },
  {
    id: "consumibles-005",
    nombre: "Rollos de Papel Bambú x6",
    precio: 40,
    categoria: "Limpieza",
    descripcionCorta: "Papel de cocina de bambú, resistente en húmedo, compostable.",
    descripcionLarga: "El papel de cocina más sostenible: fabricado con fibra de bambú de crecimiento rápido sin necesidad de pesticidas. 100 hojas doble capa por rollo. Resistente cuando está húmedo, por lo que puede usarse como trapo desechable. Compostable en 90 días. No contiene blanqueadores clorados. Pack de 6 rollos.",
    imagenes: [img(K[4]), img(K[9]), img(K[14])],
  },
  {
    id: "consumibles-006",
    nombre: "Suavizante Floral Concentrado 1.5L",
    precio: 55,
    categoria: "Limpieza",
    descripcionCorta: "Suavizante para ropa con fragancia floral prolongada, concentrado.",
    descripcionLarga: "Solo 15ml por carga gracias a su fórmula concentrada 10x. Suaviza las fibras desde el primer uso y reduce el tiempo de planchado. Fragancia de lirio y jazmín de larga duración. Apto para máquinas de carga frontal y superior, así como para lavado a mano. Sin colorantes artificiales. Bidón de 1.5L con tapa dosificadora.",
    imagenes: [img(K[5]), img(K[10]), img(K[0])],
  },
  {
    id: "consumibles-007",
    nombre: "Pasta Dental Blanqueadora Pack x2",
    precio: 44,
    categoria: "Higiene",
    descripcionCorta: "Pasta dental con carbón activado y flúor, blanqueo progresivo.",
    descripcionLarga: "Fórmula dual que combina carbón activado vegetal para absorber manchas superficiales con flúor 1450ppm para fortalecer el esmalte. Blanqueo progresivo visible desde la segunda semana. Menta intensa de larga duración. Sin microplásticos ni triclosán. Apta para uso diario. Tubo de 100ml. Pack x2 tubos.",
    imagenes: [img(K[6]), img(K[11]), img(K[1])],
    destacado: true,
  },
  {
    id: "consumibles-008",
    nombre: "Bloqueador Solar SPF 50 Invisible 100ml",
    precio: 72,
    categoria: "Cuidado Solar",
    descripcionCorta: "Protector solar de amplio espectro, acabado invisible, no comedogénico.",
    descripcionLarga: "Fórmula de amplio espectro UVA/UVB con SPF 50 y PA++++. Textura ligera de gel que se absorbe sin dejar residuo blanco, ideal para todo tipo de piel incluyendo piel oscura. No comedogénico, apto para piel con tendencia acneica. Resistente al agua 80 minutos. Con vitamina C y niacinamida como antioxidantes. Reaplica cada 2 horas. 100ml.",
    imagenes: [img(K[7]), img(K[12]), img(K[2])],
  },
  {
    id: "consumibles-009",
    nombre: "Desodorante Mineral Roll-On 50ml",
    precio: 38,
    categoria: "Higiene",
    descripcionCorta: "Desodorante de sales de alumbre mineral, sin aluminio sintético.",
    descripcionLarga: "Protección natural de 24 horas con sal de potasio alumbre, un mineral que inhibe el crecimiento de bacterias responsables del olor sin obstruir los poros. Sin aluminio clorhidrato, sin parabenos, sin alcohol. Apto para piel sensible y recién depilada. Sin fragancia artificial. El roll-on dura aproximadamente 6 meses. 50ml.",
    imagenes: [img(K[8]), img(K[13]), img(K[3])],
  },
  {
    id: "consumibles-010",
    nombre: "Vitamina C 1000mg Efervescente x30",
    precio: 88,
    categoria: "Suplementos",
    descripcionCorta: "Vitamina C de alta dosis con zinc y bioflavonoides, sabor naranja.",
    descripcionLarga: "Suplemento de vitamina C en tableta efervescente: 1000mg de ácido ascórbico + 10mg de zinc + 100mg de bioflavonoides de naranja. Fórmula de liberación sostenida para mejor absorción. Sabor naranja sin azúcar, endulzada con stevia. Refuerza el sistema inmune, favorece la síntesis de colágeno y actúa como antioxidante. 30 tabletas.",
    imagenes: [img(K[9]), img(K[14]), img(K[4])],
    destacado: true,
  },
];

export default consumibles;
