import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Electrónica · 14 fotos de tech/gadgets de Unsplash
const E = [
  "1426024084828-5da21e13f5dc", // 0
  "1588058365815-c96ac30ee30f", // 1
  "1610664921890-ebad05086414", // 2
  "1518611507436-f9221403cca2", // 3
  "1596742578443-7682ef5251cd", // 4
  "1589400066718-871249af5f71", // 5
  "1423666639041-f56000c27a9a", // 6
  "1584433305355-9cb73387fc61", // 7
  "1584438784894-089d6a62b8fa", // 8
  "1542351967-d5ae722fed71",   // 9
  "1544237526-cae15a57ed1e",   // 10
  "1655156875398-d11323b4f5de", // 11
  "1552572748-cb23c32145e6",   // 12
  "1654555023156-0a1c9cdf1130", // 13
];
const n = E.length;

const electronica: Producto[] = [
  {
    id: "electronica-001",
    nombre: "Auriculares Bluetooth ANC Over-Ear",
    precio: 385,
    categoria: "Audio",
    descripcionCorta: "Auriculares inalámbricos con cancelación activa de ruido, 30h batería.",
    descripcionLarga: "Cancelación activa de ruido (ANC) con tres modos ajustables: total, transparencia y apagado. Driver de 40mm con respuesta en frecuencia 20Hz-20kHz. Bluetooth 5.3 con conectividad multipoint (2 dispositivos simultáneos). Batería de 30 horas con ANC activa, 40 sin ANC. Carga rápida: 10 minutos = 3 horas. Plegables, con estuche incluido. Micrófono dual para llamadas.",
    imagenes: [img(E[0 % n]), img(E[5 % n]), img(E[10 % n])],
    destacado: true,
  },
  {
    id: "electronica-002",
    nombre: "Cargador USB-C 65W GaN Compacto",
    precio: 148,
    categoria: "Cargadores",
    descripcionCorta: "Cargador de nitruro de galio 65W, tamaño de cargador de 5W.",
    descripcionLarga: "La tecnología GaN (nitruro de galio) permite este cargador 65W con el tamaño de un cargador convencional de 5W. Compatible con Power Delivery 3.0. Un puerto USB-C y un USB-A. Carga un MacBook Air en 90 minutos, un iPhone en 35 minutos, un Galaxy en 45 minutos. Temperatura de operación optimizada. Certificado CE, FCC, RoHS. Incluye cable USB-C trenzado de 1.5m.",
    imagenes: [img(E[1 % n]), img(E[6 % n]), img(E[11 % n])],
  },
  {
    id: "electronica-003",
    nombre: "Altavoz Portátil Waterproof IPX7",
    precio: 295,
    categoria: "Audio",
    descripcionCorta: "Altavoz Bluetooth 20W, resistente al agua IPX7, batería 24h.",
    descripcionLarga: "Certificación IPX7: sumergible hasta 1 metro durante 30 minutos. Potencia de 20W RMS con bajo reforzado mediante pasivo de doble radiador. Bluetooth 5.2 con alcance de 15 metros. Batería de 6600mAh para 24 horas de reproducción a volumen medio. Carga USB-C. Función de micrófono manos libres. Modo True Wireless Stereo (conecta dos altavoces). Correa de transporte incluida.",
    imagenes: [img(E[2 % n]), img(E[7 % n]), img(E[12 % n])],
    destacado: true,
  },
  {
    id: "electronica-004",
    nombre: "Smartwatch Fitness con GPS Integrado",
    precio: 425,
    categoria: "Wearables",
    descripcionCorta: "Smartwatch con GPS, monitor cardíaco, SpO2 y más de 100 modos deportivos.",
    descripcionLarga: "GPS integrado de alta precisión con rastreo de ruta en tiempo real. Monitor cardíaco óptico 24/7 con alertas de frecuencia anómala. Oximetría (SpO2), estrés y calidad de sueño. Más de 100 modos deportivos. Pantalla AMOLED 1.43″ 466x466px. Resistente al agua 5ATM. Batería: 14 días en modo reloj, 20 horas con GPS activo. Compatible iOS y Android. Incluye 2 correas.",
    imagenes: [img(E[3 % n]), img(E[8 % n]), img(E[13 % n])],
  },
  {
    id: "electronica-005",
    nombre: "Hub USB-C 7 en 1 Aluminio",
    precio: 188,
    categoria: "Accesorios",
    descripcionCorta: "Hub 7 puertos: HDMI 4K, USB-A x3, SD, microSD, USB-C PD 100W.",
    descripcionLarga: "Expande la conectividad de tu laptop o tablet con un único cable USB-C. Puertos: 1× HDMI 4K@30Hz, 3× USB-A 3.0 (5Gbps), 1× lector SD, 1× lector microSD, 1× USB-C Power Delivery 100W (passthrough). Carcasa de aluminio con disipación pasiva de calor. Plug & play, sin drivers. Compatible con Mac, Windows y ChromeOS.",
    imagenes: [img(E[4 % n]), img(E[9 % n]), img(E[0 % n])],
    destacado: true,
  },
  {
    id: "electronica-006",
    nombre: "Webcam Full HD 1080p con Micrófono",
    precio: 255,
    categoria: "Periféricos",
    descripcionCorta: "Webcam 1080p@30fps con micrófono estéreo y corrección automática de luz.",
    descripcionLarga: "Resolución Full HD 1080p a 30fps con lente de vidrio de 78° campo visual. Corrección automática de exposición y balance de blancos para verse bien en cualquier ambiente. Micrófono estéreo con reducción de ruido. Soporte giratorio universal: clip para monitor, trípode o superficie plana. Conexión USB-A plug & play. Compatible con Zoom, Teams, Meet. Cable 1.5m trenzado.",
    imagenes: [img(E[5 % n]), img(E[10 % n]), img(E[1 % n])],
  },
  {
    id: "electronica-007",
    nombre: "Teclado Mecánico Compacto RGB TKL",
    precio: 448,
    categoria: "Periféricos",
    descripcionCorta: "Teclado mecánico TKL con switches red, retroiluminación RGB por tecla.",
    descripcionLarga: "Diseño Tenkeyless (TKL) que ahorra espacio sin sacrificar funciones de programación. Switches mecánicos Red (lineales, 45g de actuation, 2mm de pre-travel). Retroiluminación RGB por tecla con 18 efectos predeterminados y personalización por software. Construcción doble capa PBT + metal. Cable USB-C desmontable trenzado de 1.8m. Compatible Windows y Mac.",
    imagenes: [img(E[6 % n]), img(E[11 % n]), img(E[2 % n])],
  },
  {
    id: "electronica-008",
    nombre: "Mouse Ergonómico Inalámbrico Silent",
    precio: 178,
    categoria: "Periféricos",
    descripcionCorta: "Mouse vertical ergonómico, clicks silenciosos, 2400 DPI ajustable.",
    descripcionLarga: "Diseño vertical ergonómico que mantiene la muñeca en posición natural, reduciendo la tensión del túnel carpiano. Clicks 90% más silenciosos que un mouse convencional. DPI ajustable: 800/1200/1600/2400. Sensor óptico de precisión. Conexión dual: receptor USB de 2.4GHz o Bluetooth 5.0. Batería AAA de hasta 12 meses. Botones laterales de retroceso/avance. Para mano derecha.",
    imagenes: [img(E[7 % n]), img(E[12 % n]), img(E[3 % n])],
    destacado: true,
  },
  {
    id: "electronica-009",
    nombre: "Soporte Ajustable para Laptop Aluminio",
    precio: 135,
    categoria: "Accesorios",
    descripcionCorta: "Soporte de aluminio para laptop 10–17″, altura e inclinación ajustable.",
    descripcionLarga: "Fabricado en aluminio aeronáutico de alta resistencia. Soporta laptops de 10 a 17 pulgadas (hasta 8kg). Altura ajustable en 6 niveles (7–13cm). Ángulo de inclinación de 0° a 45°. Base antideslizante con almohadillas de silicona. Diseño abierto para facilitar la ventilación de la laptop. Plegable y compacto: 27cm × 23cm plegado. Peso: 550g.",
    imagenes: [img(E[8 % n]), img(E[13 % n]), img(E[4 % n])],
  },
  {
    id: "electronica-010",
    nombre: "Lámpara LED de Escritorio con Clip",
    precio: 98,
    categoria: "Iluminación",
    descripcionCorta: "Lámpara LED clip para monitor o escritorio, 5 temperaturas y 5 brillos.",
    descripcionLarga: "25 modos de iluminación: 5 temperaturas de color (2700K-6500K) × 5 niveles de brillo. 48 LEDs de alta eficiencia con índice CRI>90 para una luz fiel a la realidad. Control por botón táctil con memoria del último ajuste. Alimentación USB-A (cable incluido). Clip ajustable compatible con monitores y escritorios de hasta 5cm de espesor. Sin parpadeo ni radiación UV.",
    imagenes: [img(E[9 % n]), img(E[0 % n]), img(E[5 % n])],
  },
];

export default electronica;
