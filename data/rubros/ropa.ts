import type { Producto } from "@/lib/types";

const img = (hash: string) =>
  `https://images.unsplash.com/photo-${hash}?w=800&h=600&fit=crop&q=80`;

// Ropa · 15 fotos de moda/ropa de Unsplash
const R = [
  "1626497764746-6dc36546b388", // 0
  "1603252110481-7ba873bf42ab", // 1
  "1642764873649-5c228ce3fe74", // 2
  "1623658580851-3b25bf83b4ea", // 3
  "1629426958003-35a5583b2977", // 4
  "1600247354058-a55b0f6fb720", // 5
  "1518419973-a5f458580a50",   // 6
  "1642764873855-934ed87e79e1", // 7
  "1763771444795-85740205e3e9", // 8
  "1490092218187-0713ea317e21", // 9
  "1596918404383-22e2c91f4964", // 10
  "1556630184-066f7ac4e15f",   // 11
  "1561053720-76cd73ff22c3",   // 12
  "1518419973-a5f458580a50",   // 13
  "1600247354058-a55b0f6fb720", // 14
];

const ropa: Producto[] = [
  {
    id: "ropa-001",
    nombre: "Camisa Oxford Celeste Slim",
    precio: 185,
    categoria: "Camisas",
    descripcionCorta: "Camisa de algodón Oxford, corte slim, cuello button-down.",
    descripcionLarga: "Confeccionada en algodón Oxford 100% de primera calidad, esta camisa ofrece frescura y estructura durante todo el día. Su corte slim favorece siluetas modernas sin sacrificar comodidad. Detalle de cuello button-down y puños con doble ojal para gemelos. Disponible en tallas S al XL.",
    imagenes: [img(R[0]), img(R[5]), img(R[9])],
    destacado: true,
  },
  {
    id: "ropa-002",
    nombre: "Pantalón Chino Slim Fit Beige",
    precio: 225,
    categoria: "Pantalones",
    descripcionCorta: "Pantalón chino de algodón con elastano, corte slim, tobillero.",
    descripcionLarga: "Elegante pantalón chino fabricado en mezcla de algodón con 3% elastano para mayor libertad de movimiento. Corte slim moderno, largo tobillero y cinturilla con trabillas anchas. Bolsillos laterales y traseros. Ideal para looks smart-casual. Colores: beige, verde salvia, azul petróleo.",
    imagenes: [img(R[1]), img(R[6]), img(R[10])],
  },
  {
    id: "ropa-003",
    nombre: "Vestido Midi Floral Wrap",
    precio: 295,
    categoria: "Vestidos",
    descripcionCorta: "Vestido midi cruzado con estampado floral, tela viscosa fluida.",
    descripcionLarga: "Diseñado en viscosa de caída fluida, este vestido wrap de largo midi es perfecto para cualquier ocasión. El escote cruzado y la cintura ceñida con lazo regulable se adaptan a múltiples tallas. Estampado floral en tonos cálidos. Con bolsillos laterales ocultos. Tallas XS a L.",
    imagenes: [img(R[2]), img(R[7]), img(R[11])],
    destacado: true,
  },
  {
    id: "ropa-004",
    nombre: "Chaqueta Cuero Sintético Negro",
    precio: 460,
    categoria: "Chaquetas",
    descripcionCorta: "Chaqueta biker de cuero sintético premium con detalles metálicos.",
    descripcionLarga: "Chaqueta estilo biker elaborada en cuero sintético de alta gama con acabado mate. Detalles de cremalleras metálicas plateadas en pecho y mangas. Interior forrado en satén con bolsillos internos. Cuello mao con solapa doble. Corte ajustado. Tallas S al XL.",
    imagenes: [img(R[3]), img(R[8]), img(R[12])],
  },
  {
    id: "ropa-005",
    nombre: "Polo Piqué Classic Navy",
    precio: 115,
    categoria: "Polos",
    descripcionCorta: "Polo de algodón piqué clásico, corte regular, dos botones.",
    descripcionLarga: "El polo indispensable en cualquier guardarropa. Tejido en algodón piqué 100% de peso medio, transpirable y resistente a lavados repetidos. Cuello clásico con dos botones y tira interna. Bajo recto con pequeñas aberturas laterales. Colores: navy, blanco, rojo, verde. Tallas XS a XXL.",
    imagenes: [img(R[4]), img(R[9]), img(R[13])],
  },
  {
    id: "ropa-006",
    nombre: "Blusa de Gasa Floral Off-White",
    precio: 170,
    categoria: "Blusas",
    descripcionCorta: "Blusa de gasa con estampado floral, manga larga con volante.",
    descripcionLarga: "Delicada blusa confeccionada en gasa de poliéster semitransparente con forro interior en la parte delantera. Manga larga con acabado en volante en el puño. Cuello redondo con tira de lazo. Estampado floral en tonos pastel sobre fondo crema. Perfecta para una cita o el trabajo. Tallas XS a L.",
    imagenes: [img(R[5]), img(R[10]), img(R[0])],
    destacado: true,
  },
  {
    id: "ropa-007",
    nombre: "Jeans Recto Premium Azul Oscuro",
    precio: 285,
    categoria: "Jeans",
    descripcionCorta: "Jean de corte recto, tela denim 12oz con elastano, lavado oscuro.",
    descripcionLarga: "Jean de corte recto clásico fabricado en denim premium de 12oz con 2% elastano para una comodidad superior. Lavado oscuro uniforme con detalles de costura contrastante. Cinco bolsillos tradicionales, cierre de cremallera y botón metálico. Apto para lavar a máquina. Tallas 28 al 36.",
    imagenes: [img(R[6]), img(R[11]), img(R[1])],
  },
  {
    id: "ropa-008",
    nombre: "Blazer Oversize Gris Perla",
    precio: 390,
    categoria: "Blazers",
    descripcionCorta: "Blazer oversize de fibra reciclada, solapa ancha, unisex.",
    descripcionLarga: "Blazer de corte oversized confeccionado en tela estructurada de poliéster reciclado. Solapa de muesca ancha, un botón frontal y bolsillos de parche en pecho y cadera. Forro interior sencillo. El corte relajado lo hace versátil: úsalo sobre un vestido, con jeans o como parte de un traje completo. Talla única (S-L).",
    imagenes: [img(R[7]), img(R[12]), img(R[2])],
  },
  {
    id: "ropa-009",
    nombre: "Jogger Cargo Urban Negro",
    precio: 200,
    categoria: "Pantalones",
    descripcionCorta: "Pantalón jogger cargo con bolsillos laterales, cintura elástica.",
    descripcionLarga: "Pantalón jogger de estilo cargo en algodón French Terry suave al tacto. Cinturilla elástica con cordón ajustable, puños elásticos en el bajo y bolsillos cargo con solapa lateral. Ideal para looks urbanos casual. Color negro y gris. Tallas XS al XL.",
    imagenes: [img(R[8]), img(R[13]), img(R[3])],
  },
  {
    id: "ropa-010",
    nombre: "Camisa Lino Oversize Blanca",
    precio: 178,
    categoria: "Camisas",
    descripcionCorta: "Camisa de lino 100%, corte oversize, cuello abierto, sin planchar.",
    descripcionLarga: "La camisa perfecta para el verano: lino 100% natural con acabado no tratado que le da ese look relajado tan característico. Corte oversize con hombros caídos y larga en la espalda. Cuello abierto clásico y mangas largas con posibilidad de remangar. Transpirable y cada vez más bonita con el uso. Tallas XS a XL.",
    imagenes: [img(R[9]), img(R[14]), img(R[4])],
  },
];

export default ropa;
