import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Hogar · 15 fotos de decoración e interiores de Unsplash
const H = [
  "1616486338812-3dadae4b4ace", // 0
  "1554995207-c18c203602cb",   // 1
  "1633505899118-4ca6bd143043", // 2
  "1617103996702-96ff29b1c467", // 3
  "1616137422495-1e9e46e2aa77", // 4
  "1631510083755-11ecb5172d81", // 5
  "1728649054288-61f332ee389b", // 6
  "1631679893114-7957e44879db", // 7
  "1666585958641-4f70887372a1", // 8
  "1672860044506-e3ec09653e82", // 9
  "1672927936377-97d1be3976cd", // 10
  "1618221312573-404f9a52798d", // 11
  "1669387448840-610c588f003d", // 12
  "1728649060658-8e64dccf2711", // 13
  "1662059361834-d361807d63e7", // 14
];

const hogar: Producto[] = [
  {
    id: "hogar-001",
    nombre: "Lámpara de Mesa Nórdica Concreto",
    precio: 285,
    categoria: "Iluminación",
    descripcionCorta: "Lámpara de mesa con base de hormigón y pantalla de lino natural.",
    descripcionLarga: "Base moldeada a mano en hormigón arquitectónico con acabado mate. Pantalla de lino natural en tono crema que tamiza la luz creando un ambiente cálido y acogedor. Portalámparas E27 compatible con bombillos LED hasta 40W. Cable textil trenzado de 1.8m con interruptor en el cable. Dimensiones: 30cm altura total, pantalla 25cm de diámetro. Incluye bombillo LED 8W 2700K.",
    imagenes: [img(H[0]), img(H[5]), img(H[10])],
    destacado: true,
  },
  {
    id: "hogar-002",
    nombre: "Vela Aromática Cera de Soja 200g",
    precio: 78,
    categoria: "Aromaterapia",
    descripcionCorta: "Vela de cera de soja con esencias naturales, recipiente de vidrio reutilizable.",
    descripcionLarga: "Formulada con cera de soja 100% natural de origen sostenible que arde un 50% más limpio y lento que la parafina. Perfumada con aceites esenciales puros: lavanda, eucalipto y romero para una fragancia equilibrada y no sintética. Mecha de algodón sin plomo. Tiempo de quema: 45-50 horas. El recipiente de vidrio ámbar puede reutilizarse como vaso o maceta. 200g.",
    imagenes: [img(H[1]), img(H[6]), img(H[11])],
  },
  {
    id: "hogar-003",
    nombre: "Cojín Macramé Boho 45cm",
    precio: 148,
    categoria: "Textiles",
    descripcionCorta: "Cojín decorativo tejido a mano en macramé de algodón, relleno incluido.",
    descripcionLarga: "Tejido artesanalmente en hilo de macramé de algodón reciclado por artesanas locales. Diseño geométrico con flecos en los bordes. Parte trasera en lino natural liso con cremallera oculta. Relleno de fibra de poliéster siliconada incluido. Lavado delicado a mano. 45×45cm. Coordina con mantas, alfombras y sillas de mimbre. Disponible en crudo, topo y terracota.",
    imagenes: [img(H[2]), img(H[7]), img(H[12])],
    destacado: true,
  },
  {
    id: "hogar-004",
    nombre: "Suculenta Echeveria en Maceta Artesanal",
    precio: 58,
    categoria: "Plantas",
    descripcionCorta: "Planta suculenta viva en maceta de barro pintada a mano.",
    descripcionLarga: "Echeveria Elegans: suculenta compacta ideal para interiores por su bajísimo mantenimiento. Presentada en una maceta de barro pintada a mano con diseños étnicos locales. La maceta tiene agujero de drenaje. Instrucciones de cuidado incluidas: riego cada 10-14 días, luz indirecta o directa. Perfecta como regalo o para decorar escritorios, ventanas y repisas.",
    imagenes: [img(H[3]), img(H[8]), img(H[13])],
  },
  {
    id: "hogar-005",
    nombre: "Espejo Redondo Marco Ratán 60cm",
    precio: 385,
    categoria: "Decoración",
    descripcionCorta: "Espejo circular con marco de ratán natural tejido a mano, Ø60cm.",
    descripcionLarga: "Marco de ratán natural tejido a mano por artesanos con técnica trenzada doble que garantiza rigidez y durabilidad. Espejo cristal plano de alta calidad, 5mm de grosor. Colgador integrado para pared. Diámetro total (con marco): 60cm. El ratán natural varía ligeramente en color e imperfecciones, lo que lo hace único. Ideal para dormitorio, baño o sala. Ø espejo: 48cm.",
    imagenes: [img(H[4]), img(H[9]), img(H[14])],
  },
  {
    id: "hogar-006",
    nombre: "Set 3 Porta-Retratos Metálicos Dorados",
    precio: 168,
    categoria: "Decoración",
    descripcionCorta: "Trio de portafotos en metal dorado, tamaños 10×15, 13×18, 15×20cm.",
    descripcionLarga: "Set de tres marcos de metal acabado dorado satinado con perfil delgado minimalista. Cada uno tiene soporte trasero metálico articulado para colocar vertical u horizontal sobre superficie, y gancho integrado para colgar en pared. Cristal acrílico ligero. Tamaños: 10×15cm, 13×18cm y 15×20cm. Coordina con espejos, lámparas y objetos dorados para un look cohesionado.",
    imagenes: [img(H[5]), img(H[10]), img(H[0])],
  },
  {
    id: "hogar-007",
    nombre: "Organizador de Escritorio Madera Natural",
    precio: 198,
    categoria: "Organización",
    descripcionCorta: "Organizador modular de madera maciza para escritorio, 5 compartimentos.",
    descripcionLarga: "Fabricado en madera de bambú maciza, el material más sostenible del reino vegetal. 5 compartimentos de distintos tamaños: bandeja plana para documentos, portabolígrafos redondo, cajetín ancho y dos cajitas con tapa. Uniones encastradas sin pegamento visible. Acabado con aceite natural de linaza. Dimensiones totales: 30×20×15cm. Ideal para tener el escritorio ordenado y con estilo.",
    imagenes: [img(H[6]), img(H[11]), img(H[1])],
    destacado: true,
  },
  {
    id: "hogar-008",
    nombre: "Mantel Bordado Lino 6 Puestos",
    precio: 225,
    categoria: "Textiles",
    descripcionCorta: "Mantel de lino natural 140×240cm con bordados florales en el borde.",
    descripcionLarga: "Mantel de lino 55% / algodón 45% en color crudo natural. Bordados florales en hilos de colores en el perímetro, realizados a mano en taller local. Medidas: 140×240cm, apto para mesa de 6 puestos. Lavable a máquina 40°C. El lino gana belleza con cada lavado. Incluye 6 servilletas de tela a juego. Dobladillo cosido a dos agujas.",
    imagenes: [img(H[7]), img(H[12]), img(H[2])],
  },
  {
    id: "hogar-009",
    nombre: "Reloj de Pared Minimalista Madera",
    precio: 248,
    categoria: "Decoración",
    descripcionCorta: "Reloj de madera cortada a láser, mecanismo silencioso, Ø35cm.",
    descripcionLarga: "Diseñado y cortado con láser de precisión en madera de arce 6mm. Números arábigos en relieve tridimensional. Mecanismo de cuarzo de alta precisión totalmente silencioso (sweep), sin tic-tac. Funciona con 1 pila AA (incluida). Colgador trasero de metal para pared. Diámetro: 35cm. Acabado con barniz mate ecológico al agua. Perfecto para sala, comedor o dormitorio.",
    imagenes: [img(H[8]), img(H[13]), img(H[3])],
  },
  {
    id: "hogar-010",
    nombre: "Difusor Ultrasónico Aromas 200ml",
    precio: 168,
    categoria: "Aromaterapia",
    descripcionCorta: "Difusor ultrasónico con 7 LEDs RGB, temporizador y función de humidificador.",
    descripcionLarga: "Difusor de aceites esenciales por ultrasonidos: transforma el agua + aceite en micropartículas frías sin calor, preservando las propiedades terapéuticas de los aceites. Iluminación LED RGB en 7 colores, estáticos o en rotación. Temporizador: 1h / 3h / 6h / continuo. Apagado automático cuando el agua se agota. Recipiente de 200ml (cubre habitaciones de hasta 25m²). Incluye 5ml de aceite esencial de lavanda.",
    imagenes: [img(H[9]), img(H[14]), img(H[4])],
  },
];

export default hogar;
