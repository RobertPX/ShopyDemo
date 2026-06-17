import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Joyería · 15 fotos de joyas y accesorios de Unsplash
const J = [
  "1633934542430-0905ccb5f050", // 0
  "1620656798579-1984d9e87df7", // 1
  "1585960622850-ed33c41d6418", // 2
  "1673131158657-4404fd1f041a", // 3
  "1673131158656-84601f4d00ea", // 4
  "1697713465161-d872b22723a2", // 5
  "1631050165122-626a1377fbce", // 6
  "1684616290775-9b1722dbe9b7", // 7
  "1586878341523-7acb55eb8c12", // 8
  "1611540280958-dc93ce74f8d5", // 9
  "1586878341340-1971696a9b71", // 10
  "1503351107055-43fe50b5d4fa", // 11
  "1750208759824-6b7f2c3ee420", // 12
  "1611107683227-e9060eccd846", // 13
  "1777286577770-8032341c7e4d", // 14
];

const joyeria: Producto[] = [
  {
    id: "joyeria-001",
    nombre: "Anillo Plata 925 con Piedra Azul",
    precio: 248,
    categoria: "Anillos",
    descripcionCorta: "Anillo de plata esterlina 925 con topacio azul natural, ajustable.",
    descripcionLarga: "Elaborado en plata de ley 925 con baño de rodio para mayor brillo y resistencia al oscurecimiento. Engastado con un topacio azul natural talla oval de 6×4mm. El diseño abierto en la parte posterior lo hace ajustable entre tallas 6 y 9 (US). Viene en caja de regalo de terciopelo. Certificado de autenticidad incluido.",
    imagenes: [img(J[0]), img(J[5]), img(J[10])],
    destacado: true,
  },
  {
    id: "joyeria-002",
    nombre: "Gargantilla Dorada Cadena Fina",
    precio: 188,
    categoria: "Collares",
    descripcionCorta: "Gargantilla de acero inoxidable bañada en oro 18k, longitud 40+5cm.",
    descripcionLarga: "Cadena tipo rolo de eslabones redondos en acero inoxidable 316L con baño de oro 18 quilates al vacío, resistente al agua, al sudor y a cremas. Longitud base de 40cm con extensor de 5cm para ajustar al escote deseado. Cierre langosta de fácil manejo. Espesor: 1.5mm. Ideal para usar sola como gargantilla o combinar con colgantes.",
    imagenes: [img(J[1]), img(J[6]), img(J[11])],
  },
  {
    id: "joyeria-003",
    nombre: "Aretes Perla Barroca Natural",
    precio: 168,
    categoria: "Aretes",
    descripcionCorta: "Aretes de perla de agua dulce barroca, poste de plata 925.",
    descripcionLarga: "Perlas de agua dulce cultivadas con forma barroca orgánica única (nunca dos iguales). Tono blanco nacarado con destellos rosados. Diámetro aproximado: 10-12mm. Poste y mariposa de plata esterlina 925. Las perlas son una de las pocas gemas de origen orgánico, símbolo de elegancia atemporal. Incluyen caja de regalo. Cada par es irrepetible por la naturaleza de las perlas.",
    imagenes: [img(J[2]), img(J[7]), img(J[12])],
    destacado: true,
  },
  {
    id: "joyeria-004",
    nombre: "Pulsera Hilo Rojo & Plata 925",
    precio: 88,
    categoria: "Pulseras",
    descripcionCorta: "Pulsera artesanal tejida en hilo encerado rojo con dije de plata 925.",
    descripcionLarga: "Tejida a mano con técnica de macramé en hilo encerado rojo premium. Dije central de plata esterlina 925 con forma de estrella de 8 puntas. Cierre deslizante doble para ajustar el diámetro de 15cm a 25cm. Se puede mojar sin perder el color ni la forma. Ideal como pulsera de protección o amuleto. Incluye tarjeta con el significado del hilo rojo.",
    imagenes: [img(J[3]), img(J[8]), img(J[13])],
  },
  {
    id: "joyeria-005",
    nombre: "Colgante Cuarzo Rosa Ovalado",
    precio: 148,
    categoria: "Colgantes",
    descripcionCorta: "Colgante de cuarzo rosa natural talla oval, engaste de plata 925.",
    descripcionLarga: "Cuarzo rosa natural sin tratamiento térmico ni colorante. Talla oval cabujón 14×10mm con transparencia media y veladuras naturales características de la piedra. Engaste en plata esterlina 925 con diseño de puntas abiertas que permite ver la piedra por ambos lados. La cadena (45cm) no está incluida, o consúltanos por combos. Tiene propiedades energéticas ligadas al amor y la calma.",
    imagenes: [img(J[4]), img(J[9]), img(J[14])],
  },
  {
    id: "joyeria-006",
    nombre: "Set 5 Anillos Apilables Minimalistas",
    precio: 198,
    categoria: "Anillos",
    descripcionCorta: "Pack de 5 anillos finos en acero inoxidable dorado y plateado.",
    descripcionLarga: "Cinco anillos finos diseñados para usar juntos (stacking) o por separado. Incluye: 2 lisos dorados, 1 liso plateado, 1 con textura retorcida y 1 con micro-zirconia. Material: acero inoxidable 316L con baño de oro 18k y rodio blanco. Sin nickel, apto para piel sensible. Ancho de cada aro: 1.5-2mm. Disponible en tallas 6 a 9 (US). Presentados en bandeja de exhibición.",
    imagenes: [img(J[5]), img(J[10]), img(J[0])],
    destacado: true,
  },
  {
    id: "joyeria-007",
    nombre: "Collar Perlas Cultivadas Cierre Dorado",
    precio: 385,
    categoria: "Collares",
    descripcionCorta: "Collar de perlas cultivadas aakoya 7-8mm, 45cm, cierre dorado 18k.",
    descripcionLarga: "Perlas de ostión aakoya cultivadas en aguas del Pacífico sur, seleccionadas por su uniformidad, lustre y ausencia de manchas. Tono blanco-rosado. Talla 7-8mm. Hilo de seda con doble nudo entre cada perla para evitar pérdida en caso de rotura. Cierre esférico de oro laminado 18k con sistema push-lock de seguridad. Longitud: 45cm. Viene en estuche de lujo con certificado de origen.",
    imagenes: [img(J[6]), img(J[11]), img(J[1])],
  },
  {
    id: "joyeria-008",
    nombre: "Pulsera Plata con Dijes Ajustable",
    precio: 228,
    categoria: "Pulseras",
    descripcionCorta: "Pulsera tipo charm de plata 925 con 5 dijes temáticos, extensible.",
    descripcionLarga: "Base de cadena en plata esterlina 925 con cinco dijes intercambiables: estrella, luna, corazón, llave y letra (a elegir entre A-Z). Cierre langosta con extensor 3cm para ajustar entre 16 y 19cm de circunferencia. Dijes soldados, no se enroscan ni se caen. La pulsera es compatible con dijes tipo 3mm. Presentada en caja kraft con tarjeta personalizable. Gravado del nombre opcional sin costo.",
    imagenes: [img(J[7]), img(J[12]), img(J[2])],
  },
  {
    id: "joyeria-009",
    nombre: "Aretes Colgantes Turquesa Natural",
    precio: 148,
    categoria: "Aretes",
    descripcionCorta: "Aretes pendientes de turquesa natural y plata, longitud 5cm.",
    descripcionLarga: "Turquesa natural de origen americano sin tratamientos de estabilización, con vetas características de la piedra. Talla redonda cabujón 8mm en el cuerpo y en forma de gota 14×8mm en el pendiente. Cadena y gancho tipo palanca de plata 925. Longitud total: 5cm. La turquesa es considerada una piedra de protección y bienestar en muchas culturas. Peso: 4g por par.",
    imagenes: [img(J[8]), img(J[13]), img(J[3])],
  },
  {
    id: "joyeria-010",
    nombre: "Reloj Mujer Dorado Esfera Blanca",
    precio: 525,
    categoria: "Relojes",
    descripcionCorta: "Reloj de pulsera con caja dorada Ø28mm, movimiento japonés, correa mesh.",
    descripcionLarga: "Caja en acero inoxidable con baño en oro 18k de 3 micrones. Esfera blanca con índices dorados y agujas tipo delfín. Movimiento de cuarzo japonés Miyota con precisión ±15 seg/mes. Correa mesh milanesa ajustable en el mismo acabado dorado. Resistencia al agua: 3ATM (salpicaduras y lluvia, no sumergible). Diámetro: 28mm, grosor: 7mm. Cristal mineral antirrayaduras. Incluye estuche premium y pila de repuesto.",
    imagenes: [img(J[9]), img(J[14]), img(J[4])],
    destacado: true,
  },
];

export default joyeria;
