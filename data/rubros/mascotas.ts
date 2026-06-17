import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Mascotas · 15 fotos de perros, gatos y accesorios de Unsplash
const M = [
  "1623387641168-d9803ddd3f35", // 0
  "1450778869180-41d0601e046e", // 1
  "1573435567032-ff5982925350", // 2
  "1655306963086-a34411c0915b", // 3
  "1606098216818-40939b7c98ad", // 4
  "1546377791-2e01b4449bf0",   // 5
  "1642625932641-3a52ad27e268", // 6
  "1585849847025-256a1488e653", // 7
  "1547623542-de3ff5941ddb",   // 8
  "1581171383994-afd540b6a4da", // 9
  "1718885433034-908d5bca08cf", // 10
  "1682448169828-039868860001", // 11
  "1613915588863-e6cc05fcaa16", // 12
  "1657592596598-dded3243eab2", // 13
  "1669892246379-607dfeffafd2", // 14
];

const mascotas: Producto[] = [
  {
    id: "mascotas-001",
    nombre: "Alimento Premium Perro Adulto Raza Grande 3kg",
    precio: 148,
    categoria: "Alimentación",
    descripcionCorta: "Croquetas de pollo y arroz integral para perros adultos de raza grande.",
    descripcionLarga: "Fórmula veterinaria con pollo deshidratado como primera fuente proteica (30% proteína total). Arroz integral y avena como carbohidratos de digestión lenta. Omega 3 y 6 para piel y pelo brillante. Sin colorantes, conservantes artificiales ni subproductos cárnicos. Adecuado para razas grandes (>25kg) adultas de 1 a 7 años. Saco de 3kg con cierre hermético reutilizable.",
    imagenes: [img(M[0]), img(M[5]), img(M[10])],
    destacado: true,
  },
  {
    id: "mascotas-002",
    nombre: "Arena Aglomerante Sin Polvo para Gato 5kg",
    precio: 78,
    categoria: "Higiene",
    descripcionCorta: "Arena de bentonita aglomerante, control de olores 7 días, sin polvo.",
    descripcionLarga: "Arena mineral de bentonita de grano medio-fino. Aglomeración instantánea al contacto con la orina, facilita la limpieza total del arenero. Control de olores garantizado por 7 días gracias a la absorción profunda y el agente neutralizante de amoniaco incorporado. Fórmula low-dust: produce un 99% menos de polvo que arenas convencionales. 5kg rinde aproximadamente 4-6 semanas para 1 gato.",
    imagenes: [img(M[1]), img(M[6]), img(M[11])],
  },
  {
    id: "mascotas-003",
    nombre: "Collar Ajustable con Placa Grabada",
    precio: 58,
    categoria: "Accesorios",
    descripcionCorta: "Collar de nylon con hebilla de seguridad y placa de identificación incluida.",
    descripcionLarga: "Collar de nylon plano en colores vibrantes con hebilla de seguridad de plástico de alta resistencia. Ajustable para cuellos de 25cm a 45cm (talla M). La anilla metálica central soporta correa y la placa de identificación de acero inoxidable incluida (grabamos nombre y teléfono sin costo adicional). Lavable a mano. Disponible en 8 colores. Especificar datos de grabado al pedir.",
    imagenes: [img(M[2]), img(M[7]), img(M[12])],
  },
  {
    id: "mascotas-004",
    nombre: "Cama Ortopédica para Perro Mediano",
    precio: 285,
    categoria: "Descanso",
    descripcionCorta: "Cama con espuma viscoelástica de 7cm para perros de 15-30kg.",
    descripcionLarga: "El soporte ortopédico marca la diferencia para perros con problemas de articulaciones o simplemente para un descanso óptimo. Espuma viscoelástica de 7cm de densidad 45D que distribuye el peso uniformemente. Funda exterior en tela Oxford resistente al agua y a los arañazos. Cremallera YKK extraíble para lavar en máquina (30°C). Medidas: 85×65×12cm. Incluye capa antideslizante inferior.",
    imagenes: [img(M[3]), img(M[8]), img(M[13])],
    destacado: true,
  },
  {
    id: "mascotas-005",
    nombre: "Kong Classic Juguete Rellenable M",
    precio: 88,
    categoria: "Juguetes",
    descripcionCorta: "Juguete de goma natural resistente para rellenar con premios, talla M.",
    descripcionLarga: "El juguete Kong original: goma natural vulcanizada ultra-resistente en color rojo. La forma cónica irregular rebota de manera impredecible al rodar. El hueco interior se rellena con pâté, mantequilla de maní u otros snacks para estimulación mental prolongada. Apto para lavar en lavavajillas. Talla M recomendada para perros de 7 a 15kg. Veterinarios lo recomiendan para reducir la ansiedad por separación.",
    imagenes: [img(M[4]), img(M[9]), img(M[14])],
  },
  {
    id: "mascotas-006",
    nombre: "Arnés Anti-Jalón Reflectante Talla M",
    precio: 98,
    categoria: "Accesorios",
    descripcionCorta: "Arnés de cuatro puntos sin presión en cuello ni tráquea, con reflectivos.",
    descripcionLarga: "Diseño en H sin contacto con la tráquea que evita la lesión cervical incluso en perros que jalan fuerte. Cuatro puntos de ajuste para un calce personalizado. Dos argollas de correa: pecho (control anti-jalón) y espalda (paseo relajado). Tiras reflectivas en laterales y frente para visibilidad nocturna. Material: nylon tejido con espuma acolchada en contacto con la piel. Talla M: pecho 45-65cm.",
    imagenes: [img(M[5]), img(M[10]), img(M[0])],
    destacado: true,
  },
  {
    id: "mascotas-007",
    nombre: "Snacks Dentales Premium x30 Unidades",
    precio: 68,
    categoria: "Snacks",
    descripcionCorta: "Masticables dentales con acción enzimática para perros de 10-25kg.",
    descripcionLarga: "Snacks masticables con textura estriada que fricciona mecánicamente contra el sarro mientras el perro mastica. Fórmula con sorbitol (humectante), polifosfatos de sodio (quelante del calcio) y extracto de perejil (antioxidante y anti-aliento). Sin colorantes artificiales. Calorías: 55kcal por unidad. Para perros de 10 a 25kg: 1 unidad/día. 30 unidades = 1 mes de rutina dental. Olor a menta suave.",
    imagenes: [img(M[6]), img(M[11]), img(M[1])],
  },
  {
    id: "mascotas-008",
    nombre: "Transportadora Plegable con Ventilación S",
    precio: 188,
    categoria: "Transporte",
    descripcionCorta: "Transportadora blanda plegable para gatos y perros hasta 6kg.",
    descripcionLarga: "Estructura de alambre de acero recubierto que mantiene la forma y la ventilación óptima. Paneles de malla en 4 lados para circulación de aire 360°. Base interior acolchada extraíble y lavable. Cierre con mosquetones de doble seguridad. Asa de transporte superior + correa de hombro ajustable incluida. Plegable en 3 segundos para almacenamiento. Talla S: 45×30×30cm. Hasta 6kg.",
    imagenes: [img(M[7]), img(M[12]), img(M[2])],
  },
  {
    id: "mascotas-009",
    nombre: "Dispensador Automático de Agua 1.8L",
    precio: 148,
    categoria: "Comederos",
    descripcionCorta: "Fuente de agua eléctrica con filtro de carbón activo para gatos y perros.",
    descripcionLarga: "El flujo constante de agua atrae a los gatos (que naturalmente prefieren agua en movimiento) y garantiza hidratación óptima. Caudal de 1.5L/h configurable en 3 modos: chorro, lámina y cascada. Filtro de carbón activo + esponja de fibra que elimina pelo, impurezas y cloro. Depósito transparente de 1.8L con indicador de nivel. Motor ultrasilencioso (< 30dB). Fácil desmontaje para limpiar.",
    imagenes: [img(M[8]), img(M[13]), img(M[3])],
  },
  {
    id: "mascotas-010",
    nombre: "Champú Natural Pelo Largo 300ml",
    precio: 58,
    categoria: "Higiene",
    descripcionCorta: "Champú pH neutro con aceite de argán y aloe vera para pelo largo y sedoso.",
    descripcionLarga: "Formulado específicamente para razas de pelo largo como Shih Tzu, Yorkshire, Maltés y similares. pH neutro 7 compatible con el manto ácido de la piel del perro. Aceite de argán para nutrición profunda y reducción del enredo. Aloe vera para calmar el cuero cabelludo. Sin sulfatos fuertes, sin parabenos, sin siliconas. Enjuague fácil. Aroma de avena y vainilla. 300ml.",
    imagenes: [img(M[9]), img(M[14]), img(M[4])],
  },
];

export default mascotas;
