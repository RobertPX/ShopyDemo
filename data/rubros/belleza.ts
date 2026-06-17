import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Belleza · 15 fotos de skincare/cosmética de Unsplash
const B = [
  "1629380108599-ea06489d66f5", // 0
  "1600634999623-864991678406", // 1
  "1676570092589-a6c09ecbb373", // 2
  "1728727267814-792db55ce678", // 3
  "1667266543254-505cf5b16ec4", // 4
  "1723150512429-bfa92988d845", // 5
  "1582616698198-f978da534162", // 6
  "1653784097013-786a8965ea3b", // 7
  "1633793566189-8e9fe6f817fc", // 8
  "1695972235610-0c68661d537c", // 9
  "1583784561126-c18e59057f3b", // 10
  "1633793566063-52465a148cc7", // 11
  "1632452479455-e3d5e3159b63", // 12
  "1741896136113-c33a4fded0b5", // 13
  "1739980104488-408eff709fff", // 14
];

const belleza: Producto[] = [
  {
    id: "belleza-001",
    nombre: "Sérum Vitamina C + Niacinamida 30ml",
    precio: 185,
    categoria: "Cuidado Facial",
    descripcionCorta: "Sérum antioxidante 15% vitamina C estabilizada y 5% niacinamida.",
    descripcionLarga: "Formulación avanzada con vitamina C en forma de ascorbil glucósido (más estable que el ácido ascórbico) al 15% combinada con niacinamida al 5% y ácido ferúlico. Unifica el tono, reduce manchas, minimiza poros y estimula la síntesis de colágeno. Textura sérum acuoso de rápida absorción. Uso: mañana bajo protector solar. 30ml con cuentagotas.",
    imagenes: [img(B[0]), img(B[5]), img(B[10])],
    destacado: true,
  },
  {
    id: "belleza-002",
    nombre: "Base de Maquillaje SPF20 Cobertura Media",
    precio: 148,
    categoria: "Maquillaje",
    descripcionCorta: "Base fluida 30ml, 40 tonos, cobertura media buildable, SPF20.",
    descripcionLarga: "Base fluida de cobertura media buildable hasta alta. Fórmula enriquecida con ácido hialurónico para hidratación durante 12 horas. SPF20 incorporado. Acabado natural satinado que no colapsa los poros. 40 tonos disponibles organizados en 8 familias de color. Fórmula sin parabenos, sin aceite mineral, vegana. 30ml.",
    imagenes: [img(B[1]), img(B[6]), img(B[11])],
  },
  {
    id: "belleza-003",
    nombre: "Aceite de Argán Marroquí Puro 30ml",
    precio: 125,
    categoria: "Cuidado Capilar",
    descripcionCorta: "Aceite de argán 100% puro prensado en frío, para cabello y piel.",
    descripcionLarga: "Aceite de argán virgen extraído por prensado en frío de nueces de Argania spinosa seleccionadas. Certificado orgánico. Altísimo contenido en vitamina E, ácidos grasos esenciales y escualeno. Para cabello: aplica 2-3 gotas en puntas húmedas para sellado o en cabello seco para brillo. Para piel: nutre e hidrata sin obstruir poros. Sin fragancias artificiales. 30ml.",
    imagenes: [img(B[2]), img(B[7]), img(B[12])],
    destacado: true,
  },
  {
    id: "belleza-004",
    nombre: "Paleta Sombras 12 Tonos Neutros",
    precio: 178,
    categoria: "Maquillaje",
    descripcionCorta: "Paleta de 12 sombras: 6 mate, 4 shimmer, 2 glitter ultrafino.",
    descripcionLarga: "Colección curada de 12 tonos organizados para crear looks desde el natural diario hasta el ahumado de noche. 6 mate (fondo, transición, profundidad), 4 shimmer de alta pigmentación y 2 glitter ultrafino. Fórmula longwear de 10 horas. Sin caolín, sin talco. Altamente pigmentada: buildable en una sola capa. Espejo de doble cara y aplicador incluidos.",
    imagenes: [img(B[3]), img(B[8]), img(B[13])],
  },
  {
    id: "belleza-005",
    nombre: "Mascarilla Arcilla Verde Detox 75ml",
    precio: 88,
    categoria: "Cuidado Facial",
    descripcionCorta: "Mascarilla purificante de arcilla verde ilita con té verde y aloe.",
    descripcionLarga: "Arcilla verde ilita con alta capacidad de absorción de impurezas y exceso de sebo. Enriquecida con extracto de té verde (antioxidante), aloe vera (calmante) y ácido salicílico 0.5% (exfoliante). Adecuada para piel mixta y grasa. Aplicar 1-2 veces por semana, dejar actuar 10 minutos. Nota: si tienes piel seca, mezcla con unas gotas de aceite de rosa mosqueta. 75ml.",
    imagenes: [img(B[4]), img(B[9]), img(B[14])],
  },
  {
    id: "belleza-006",
    nombre: "Delineador Kajal Waterproof Negro",
    precio: 58,
    categoria: "Maquillaje",
    descripcionCorta: "Kajal cremoso waterproof de larga duración, trazo preciso o difuminado.",
    descripcionLarga: "Kajal con textura gel altamente pigmentada. La mina suave permite tanto un trazo preciso con la punta como un delineado ahumado usando el extremo difuminador incluido. Fórmula waterproof y resistente al calor con duración de hasta 16 horas sin correr. Ophthalmologically tested: apto para ojos sensibles y usuarios de lentes de contacto.",
    imagenes: [img(B[5]), img(B[10]), img(B[0])],
    destacado: true,
  },
  {
    id: "belleza-007",
    nombre: "Crema Contorno de Ojos Antifatiga 15ml",
    precio: 148,
    categoria: "Cuidado Facial",
    descripcionCorta: "Crema de ojos con cafeína, retinol 0.1% y péptidos tensores.",
    descripcionLarga: "Triple acción: cafeína al 3% para reducir la ojera y la bolsa por vasoconstricción; retinol 0.1% encapsulado para suavizar líneas finas sin irritar; péptidos de cobre para mejorar la elasticidad. Textura gel-crema. Aplicar suavemente con el dedo anular mañana y noche. Compatible con activos ácidos en la misma rutina. Sin fragancia. 15ml.",
    imagenes: [img(B[6]), img(B[11]), img(B[1])],
  },
  {
    id: "belleza-008",
    nombre: "Brocha Kabuki Pelo Sintético",
    precio: 78,
    categoria: "Herramientas",
    descripcionCorta: "Brocha kabuki densa para polvo, fondo y contouring, mango ergonómico.",
    descripcionLarga: "Pelo sintético ultra-suave (fibra Taklon imitación ardilla) de alta densidad. Apta para aplicar polvo suelto, compacto, base en polvo y productos de contouring con difuminado impecable. Mango ergonómico corto para mayor control. Los filamentos no absorben el producto, lo que maximiza la eficiencia. Lavable con jabón neutro. Disponible en negro y dorado.",
    imagenes: [img(B[7]), img(B[12]), img(B[2])],
  },
  {
    id: "belleza-009",
    nombre: "Spray Fijador Maquillaje 24h 100ml",
    precio: 98,
    categoria: "Maquillaje",
    descripcionCorta: "Setting spray con micropartículas que fija el maquillaje hasta 24 horas.",
    descripcionLarga: "Micropartículas que crean una capa invisible sobre el maquillaje, haciéndolo resistente al sudor, la humedad y el tacto. Fórmula sin alcohol que no reseca la piel. Tres distancias de spray para efectos distintos: fino (fijación máxima), medio (efecto skin) o lejano (hidratación). Ingredientes activos: polímero fijador + ácido hialurónico + extracto de cactus. 100ml.",
    imagenes: [img(B[8]), img(B[13]), img(B[3])],
    destacado: true,
  },
  {
    id: "belleza-010",
    nombre: "Exfoliante Corporal Café & Coco 200g",
    precio: 68,
    categoria: "Cuidado Corporal",
    descripcionCorta: "Scrub corporal de posos de café arábica y aceite de coco virgen.",
    descripcionLarga: "Elaborado con posos de café arábica de grano grueso que exfolian mecánicamente la piel, seguido de aceite de coco virgen que hidrata profundamente. La cafeína activa la circulación y ayuda a reducir la apariencia de celulitis con uso constante. Fragancia natural de vainilla. Usar en ducha, aplicar en movimientos circulares y enjuagar. 200g.",
    imagenes: [img(B[9]), img(B[14]), img(B[4])],
  },
];

export default belleza;
