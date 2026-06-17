import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Deportivo · 15 fotos de fitness y deportes de Unsplash
const D = [
  "1534438327276-14e5300c3a48", // 0
  "1517836357463-d25dfeac3438", // 1
  "1571902943202-507ec2618e8f", // 2
  "1605296867304-46d5465a13f1", // 3
  "1581009146145-b5ef050c2e1e", // 4
  "1583454110551-21f2fa2afe61", // 5
  "1507398941214-572c25f4b1dc", // 6
  "1534258936925-c58bed479fcb", // 7
  "1605296867724-fa87a8ef53fd", // 8
  "1641337221253-fdc7237f6b61", // 9
  "1591311630200-ffa9120a540f", // 10
  "1554284126-aa88f22d8b74",   // 11
  "1517838277536-f5f99be501cd", // 12
  "1546483875-ad9014c88eba",   // 13
  "1521804906057-1df8fdb718b7", // 14
];

const deportivo: Producto[] = [
  {
    id: "deportivo-001",
    nombre: "Malla Compresión Cintura Alta",
    precio: 168,
    categoria: "Ropa Deportiva",
    descripcionCorta: "Malla deportiva de compresión media, tela reciclada, bolsillo lateral.",
    descripcionLarga: "Fabricada en 79% poliéster reciclado de botellas PET y 21% elastano. Compresión media que mejora la circulación y reduce la fatiga muscular durante el entrenamiento. Cintura alta sin voltearse durante ejercicios de impacto. Bolsillo lateral en muslo con cremallera para el celular. Tela con tecnología de secado rápido y factor de protección UPF 50. Tallas XS a XL.",
    imagenes: [img(D[0]), img(D[5]), img(D[10])],
    destacado: true,
  },
  {
    id: "deportivo-002",
    nombre: "Remera Dry-Fit Manga Corta",
    precio: 98,
    categoria: "Ropa Deportiva",
    descripcionCorta: "Camiseta técnica de secado ultra rápido, costuras planas antirroce.",
    descripcionLarga: "Tejido técnico de microfibra de poliéster con canal de evacuación de humedad unidireccional: el sudor viaja desde la piel hacia el exterior donde se evapora. Costuras planas de 4 hilos que eliminan la fricción en zonas de roce. Cuello redondo con cinta interna reforzada. Reflectivo en espalda para visibilidad nocturna. Ligera: 130g en talla M. Colores: blanco, negro, azul, rojo, verde. Tallas XS al XXL.",
    imagenes: [img(D[1]), img(D[6]), img(D[11])],
  },
  {
    id: "deportivo-003",
    nombre: "Mancuernas Hexagonales 5kg Par",
    precio: 188,
    categoria: "Pesas",
    descripcionCorta: "Par de mancuernas de hierro fundido con recubrimiento de goma hexagonal.",
    descripcionLarga: "Mancuernas de hierro fundido sólido con recubrimiento vulcanizado de goma negra. La forma hexagonal evita que rueden al apoyarlas en el suelo. Peso exacto garantizado ±2%. Mango knurling de acero para agarre seguro incluso con las manos sudadas. La goma protege el suelo y absorbe impactos. Peso por unidad: 5kg. Usadas para tonificación, HIIT, fitness en casa y rehabilitación.",
    imagenes: [img(D[2]), img(D[7]), img(D[12])],
    destacado: true,
  },
  {
    id: "deportivo-004",
    nombre: "Mat Yoga Antideslizante 6mm",
    precio: 148,
    categoria: "Accesorios",
    descripcionCorta: "Mat de yoga TPE 183×61cm, doble capa, alineación impresa.",
    descripcionLarga: "Fabricado en TPE (elastómero termoplástico) libre de PVC, látex y ftalatos. Doble capa: la superior texturizada antideslizante para manos y pies, la inferior en foam suave para el suelo. Líneas guía de alineación impresas para mejorar la técnica. 6mm de espesor: equilibrio entre amortiguación y estabilidad. Peso: 1.1kg. Con funda de transporte y correa incluidas. Fácil limpieza con paño húmedo.",
    imagenes: [img(D[3]), img(D[8]), img(D[13])],
  },
  {
    id: "deportivo-005",
    nombre: "Botella Térmica Acero Inox 750ml",
    precio: 98,
    categoria: "Hidratación",
    descripcionCorta: "Botella de doble pared al vacío, mantiene frío 24h y calor 12h.",
    descripcionLarga: "Pared doble de acero inoxidable 18/8 con aislamiento al vacío. Mantiene bebidas frías hasta 24 horas y calientes hasta 12 horas. Tapa de rosca hermética con asa integrada. Boca ancha de 5cm para añadir hielo y limpiar fácilmente. Sin BPA, sin recubrimiento interior de plástico. Apta para lavar a mano (no lavavajillas). Capacidad: 750ml. Disponible en 6 colores mate.",
    imagenes: [img(D[4]), img(D[9]), img(D[14])],
  },
  {
    id: "deportivo-006",
    nombre: "Guantes de Box Cuero Sintético",
    precio: 225,
    categoria: "Boxeo",
    descripcionCorta: "Guantes de entrenamiento 10oz con relleno multi-capa y muñequera velcro.",
    descripcionLarga: "Exterior en cuero sintético de alta densidad resistente a la abrasión. Relleno en tres capas: foam de impacto, gel amortiguador y foam de soporte para protección y durabilidad. Diseño anatómico de la mano en posición cerrada para reducir la tensión tendinosa. Muñequera amplia con cierre velcro de triple tira para ajuste seguro. Costuras dobles reforzadas. Talla 10oz: para bolsa de boxeo y sparring ligero. Color negro/rojo.",
    imagenes: [img(D[5]), img(D[10]), img(D[0])],
  },
  {
    id: "deportivo-007",
    nombre: "Cuerda de Saltar de Velocidad",
    precio: 68,
    categoria: "Cardio",
    descripcionCorta: "Cuerda de velocidad con cable de acero y rodamientos de bola, ajustable.",
    descripcionLarga: "Cable de acero revestido en PVC con diámetro de 3mm para mínima resistencia al aire. Rodamientos de bola de 360° en los mangos que permiten rotación sin torsión, lo que facilita el doble salto y el crossover. Mangos de aluminio anodizado ergonómicos con ranuras antideslizantes. Longitud ajustable de 2.4m a 3.2m mediante el sistema de tornillo interior. Bolsa de transporte incluida.",
    imagenes: [img(D[6]), img(D[11]), img(D[1])],
  },
  {
    id: "deportivo-008",
    nombre: "Set Bandas Elásticas de Resistencia x3",
    precio: 88,
    categoria: "Resistencia",
    descripcionCorta: "Set de 3 bandas de latex: ligera (15kg), media (25kg), fuerte (40kg).",
    descripcionLarga: "Tres bandas de latex natural de alta elasticidad, sin empalmaduras que se fracturen. Resistencias: verde-ligera (15kg aprox.), roja-media (25kg aprox.) y negra-fuerte (40kg aprox.). Longitud en reposo: 104cm. Aptas para trabajo de glúteos, piernas, espalda y brazos. Se pueden combinar entre sí para mayor resistencia. Incluye guía de ejercicios impresa y bolsa de tela. Certificadas libres de látex para alérgicos (solicitar variante TPE).",
    imagenes: [img(D[7]), img(D[12]), img(D[2])],
  },
  {
    id: "deportivo-009",
    nombre: "Zapatilla Cross Training Entrehook",
    precio: 385,
    categoria: "Calzado",
    descripcionCorta: "Zapatilla de entrenamiento cruzado, suela plana para levantamiento y flexibilidad.",
    descripcionLarga: "Diseñada para el atleta versátil: suela plana de goma de 6mm para mayor estabilidad en sentadillas y levantamiento de pesas, con zona delantera flexible para correr y saltar. Upper de malla respiratoria con refuerzos de TPU en medial y lateral. Plantilla removible para ortopedia. Cordones planos con ojales metálicos. Mediotransferina interna para soporte de arco. Tallas 35 al 46. Peso: 320g talla 42.",
    imagenes: [img(D[8]), img(D[13]), img(D[3])],
    destacado: true,
  },
  {
    id: "deportivo-010",
    nombre: "Mochila Deportiva con Puerto USB 25L",
    precio: 198,
    categoria: "Accesorios",
    descripcionCorta: "Mochila de 25L con bolsillo húmedo separado, puerto USB y reflectivo.",
    descripcionLarga: "Capacidad de 25 litros organizada en tres compartimentos. Compartimento principal acolchado para laptop hasta 15.6″. Bolsillo lateral húmedo independiente para ropa mojada o calzado (cierre sellado). Puerto USB externo conectado a bolsillo interno para cable (batería externa no incluida). Soportes de espalda con ventilación en canal. Tiras reflectivas delanteras y en tiradores. Material: poliéster 600D resistente al agua. Peso: 680g.",
    imagenes: [img(D[9]), img(D[14]), img(D[4])],
  },
];

export default deportivo;
