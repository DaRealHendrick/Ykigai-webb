export const INFO = {
  name: "Ykigai",
  kanji: "生きがい",
  sushiKanji: "鮨",
  rating: "4.6",
  reviews: 249,
  address:
    "GV Center · Jardín Plaza, C. Principal Residencial Costa Cana, Bávaro, Punta Cana 23000",
  addressShort: "GV Center · Residencial Costa Cana, Bávaro",
  reference: "A pasos de Coco Bongo, entrada del Residencial Costa Cana",
  phoneDisplay: "(849) 445-9606",
  phoneHref: "tel:+18494459606",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ykigai+Sushi+Bar+Punta+Cana",
  igUrl: "https://www.instagram.com/ykigaisushi",
  ig: "@ykigaisushi",
  price: "RD$ 500 – 2,000",
  priceNote: "por persona",
  hours: "Lun – Sáb · 12:30 – 10:00 p.m.",
};

export type Dish = {
  name: string;
  jp: string;
  desc: string;
  price: string;
  tag?: string;
  img: string;
};

export const DISHES: Dish[] = [
  {
    name: "Omakase Roll",
    jp: "お任せ",
    desc: "Salmón flameado, aguacate y el toque secreto de la casa",
    price: "RD$ 950",
    tag: "El favorito",
    img: "/images/omakase.jpg",
  },
  {
    name: "Ramen Tonkotsu",
    jp: "拉麺",
    desc: "Caldo cremoso de 12 horas, chashu braseado y huevo ajitama",
    price: "RD$ 780",
    tag: "Popular",
    img: "/images/ramen.jpg",
  },
  {
    name: "Ceviche Nikkei",
    jp: "セビチェ",
    desc: "Pesca del día en leche de tigre, cancha crujiente y camote",
    price: "RD$ 880",
    img: "/images/ceviche.jpg",
  },
  {
    name: "Gyozas de Cerdo",
    jp: "餃子",
    desc: "Al vapor o doradas en sartén, con ponzu casero",
    price: "RD$ 520",
    img: "/images/gyoza.jpg",
  },
  {
    name: "Anticucho de Pollo",
    jp: "串焼き",
    desc: "A la brasa, glaseado nikkei y crema de ají amarillo",
    price: "RD$ 590",
    img: "/images/anticucho.jpg",
  },
  {
    name: "Spicy Tuna Temaki",
    jp: "手巻き",
    desc: "Cono de nori crocante, atún spicy, aguacate y tobiko",
    price: "RD$ 450",
    img: "/images/temaki.jpg",
  },
];

export const MORE_DISHES = [
  "Philadelphia Roll",
  "Ebi Crunch",
  "Lomo Saltado",
  "Chofán",
  "Sopa Miso",
  "Edamame al Wok",
  "Banana Roll",
  "Sushi Lunch",
  "Chicha Morada",
  "Cerveza Japonesa",
];

export const MARQUEE_ITEMS = [
  "Sushi artesanal",
  "Ramen tonkotsu",
  "Ceviche nikkei",
  "Gyozas al vapor",
  "Omakase",
  "Anticuchos",
  "Coctelería",
  "Cervecería japonesa",
];

export type Review = {
  name: string;
  meta: string;
  text: string;
};

export const REVIEWS_ROW_A: Review[] = [
  {
    name: "Claudia G. de Aza",
    meta: "Local Guide · 133 reseñas",
    text: "El mejor sushi que he comido; siempre es mi lugar de confianza. Tienen otros platos riquísimos, como su arroz frito.",
  },
  {
    name: "Agustín A. Batto",
    meta: "Local Guide · 171 reseñas",
    text: "Extraordinario — desde Japón no probaba esta calidad y creatividad. Muy distinto al resto de Punta Cana.",
  },
  {
    name: "Cesar Escalera",
    meta: "Local Guide · 100 reseñas",
    text: "Cocina la familia completa, el sabor es muy bueno; se nota que se cocina con el corazón. 100% recomendado.",
  },
  {
    name: "Robert Ambriano",
    meta: "Local Guide · 221 reseñas",
    text: "A true sushi bar in Punta Cana. The rolls are handcrafted, the sushi is very fresh. The chef knows what he's doing.",
  },
];

export const REVIEWS_ROW_B: Review[] = [
  {
    name: "Jesus F. Valenzuela",
    meta: "Hace 8 meses",
    text: "El sabor original de Japón en tu paladar, gracias al arte del chef Luis Nakamura. Una cosa es leerlo y otra vivirlo.",
  },
  {
    name: "Елена Мишина",
    meta: "Local Guide · 38 reseñas",
    text: "El ambiente es acogedor, el servicio muy atento y el sushi fresco, preparado con mucho cuidado y presentación impecable.",
  },
  {
    name: "Rafaelina Encarnación",
    meta: "Hace un año",
    text: "Los mejores sushi y chofán que he probado en República Dominicana. El jengibre le da un toque único.",
  },
  {
    name: "Gabby",
    meta: "Local Guide · 17 reseñas",
    text: "The sushi is AMAZING. I am literally stressed out 'cause I don't want them to close ever.",
  },
];

export const RATING_BARS: Array<[number, number]> = [
  [5, 82],
  [4, 9],
  [3, 4],
  [2, 1],
  [1, 4],
];
