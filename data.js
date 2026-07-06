// ESHEL SUITES PANAMA — datos consolidados (fuente de verdad)
// Precios "desde"/noche (temporada baja). + 10% imp. + limpieza. Mín. 2 noches.
const CLOUDBEDS = "https://hotels.cloudbeds.com/reservation/JNyUrT";
const WHATSAPP = "50766730990";

const SUITES = [
  {
    id: "kingston", n: "02", name: "Kingston", rid: "542192",
    price: 125, clean: 30, cap: 4,
    beds: { es: "2 camas queen", en: "2 queen beds", he: "2 מיטות קווין" },
    photos: 7, video: true,
    tag: { es: "Muy amplia", en: "Very spacious", he: "מרווחת מאוד" },
    blurb: {
      es: "Una de las suites más espaciosas: baño amplio y amplios clósets. Ideal para familias de hasta 4 personas.",
      en: "One of our most spacious suites: large bathroom and generous closets. Ideal for families up to 4.",
      he: "מהסוויטות המרווחות ביותר: חדר רחצה גדול וארונות נרחבים. אידיאלי למשפחות עד 4 אנשים."
    },
    crib: true
  },
  {
    id: "union", cover: "14", n: "03", name: "Union", rid: "542765", cover: "14",
    price: 100, clean: 30, cap: 4,
    beds: { es: "2 camas full", en: "2 full beds", he: "2 מיטות זוגיות" },
    photos: 15, video: true,
    tag: { es: "Amplio clóset", en: "Spacious closet", he: "ארון גדול" },
    blurb: {
      es: "Cómoda suite para hasta 4 personas, con amplio clóset. Baño compacto y funcional.",
      en: "Comfortable suite for up to 4 guests, with a spacious closet. Compact, functional bathroom.",
      he: "סוויטה נוחה עד 4 אנשים, עם ארון גדול. חדר רחצה קומפקטי ופונקציונלי."
    },
    crib: true
  },
  {
    id: "atlantic", n: "04", name: "Atlantic", rid: "542766",
    price: 90, clean: 30, cap: 2,
    beds: { es: "1 cama queen + 1 cama full extraíble", en: "1 queen + 1 pull-out full bed", he: "מיטת קווין + מיטה זוגית נשלפת" },
    photos: 7, video: true,
    tag: { es: "Ideal parejas", en: "Ideal for couples", he: "אידיאלי לזוגות" },
    blurb: {
      es: "Estilo moderno con acabados de lujo, colores suaves e iluminación cálida. Ideal para 1 a 2 personas.",
      en: "Modern style with luxury finishes, soft colors and warm lighting. Ideal for 1 to 2 guests.",
      he: "סגנון מודרני עם גימור יוקרתי, צבעים רכים ותאורה חמה. אידיאלי ל-1 עד 2 אנשים."
    },
    crib: false
  },
  {
    id: "montgomery", n: "05", name: "Montgomery", rid: "542771",
    price: 200, clean: 30, cap: 6,
    beds: { es: "2 cuartos · 2 queen + 2 full c/ twin extraíble + cuna", en: "2 rooms · 2 queen + 2 full w/ pull-out twin + crib", he: "2 חדרים · 2 קווין + 2 זוגיות עם מיטת יחיד נשלפת + עריסה" },
    photos: 13, video: true,
    tag: { es: "Familias grandes", en: "Large families", he: "משפחות גדולות" },
    blurb: {
      es: "Nuestra suite de mayor capacidad: dos habitaciones, hasta 6 personas. Un solo baño (el más amplio de todas). Ideal para familias grandes.",
      en: "Our largest suite: two bedrooms, up to 6 guests. A single (and our largest) bathroom. Ideal for large families.",
      he: "הסוויטה הגדולה ביותר: שני חדרי שינה, עד 8 אנשים. חדר רחצה אחד (הגדול ביותר). אידיאלי למשפחות גדולות."
    },
    crib: true
  },
  {
    id: "albany", cover: "03", , n: "06", name: "Albany", rid: "542773",
    price: 115, clean: 30, cap: 4,
    beds: { es: "2 camas full", en: "2 full beds", he: "2 מיטות זוגיות" },
    photos: 8, video: true,
    tag: { es: "Amplio clóset", en: "Spacious closet", he: "ארון גדול" },
    blurb: {
      es: "Cómoda suite para hasta 4 personas, con amplio clóset. Baño compacto y funcional.",
      en: "Comfortable suite for up to 4 guests, with a spacious closet. Compact, functional bathroom.",
      he: "סוויטה נוחה עד 4 אנשים, עם ארון גדול. חדר רחצה קומפקטי ופונקציונלי."
    },
    crib: true
  },
  {
    id: "crown", cover: "04", n: "07", name: "Crown", rid: "542774",
    price: 95, clean: 30, cap: 3,
    beds: { es: "1 cama queen + 1 cama full extraíble", en: "1 queen + 1 pull-out full bed", he: "מיטת קווין + מיטה זוגית נשלפת" },
    photos: 5, video: true,
    tag: { es: "Más amplia", en: "More spacious", he: "מרווחת יותר" },
    blurb: {
      es: "Más amplia que Atlantic, con las mismas camas. Cómoda para 2 personas, máximo 3.",
      en: "More spacious than Atlantic, with the same beds. Comfortable for 2, max 3 guests.",
      he: "מרווחת יותר מאטלנטיק, עם אותן מיטות. נוחה ל-2 אנשים, מקסימום 3."
    },
    crib: false
  },
  {
    id: "troy", cover: "02", n: "08", name: "Troy", rid: "640280",  // PARA AGREGAR VIDEO: sube assets/troy/troy.mp4 + assets/troy/troy-poster.jpg y cambia video:false a video:true
    price: 80, clean: 30, cap: 2,
    beds: { es: "2 camas full", en: "2 full beds", he: "2 מיטות זוגיות" },
    photos: 9, video: false,
    tag: { es: "Acogedora", en: "Cozy", he: "נעימה" },
    blurb: {
      es: "Suite acogedora para máximo 2 personas. Baño funcional y compacto. Perfecta para una estadía tranquila.",
      en: "Cozy suite for max 2 guests. Functional, compact bathroom. Perfect for a quiet stay.",
      he: "סוויטה נעימה למקסימום 2 אנשים. חדר רחצה פונקציונלי וקומפקטי."
    },
    crib: false
  },
  {
    id: "brooklyn", cover: "07", n: "09", name: "Brooklyn", rid: "640281",  // PARA AGREGAR VIDEO: sube assets/brooklyn/brooklyn.mp4 + assets/brooklyn/brooklyn-poster.jpg y cambia video:false a video:true
    price: 80, clean: 30, cap: 2,
    beds: { es: "2 camas full", en: "2 full beds", he: "2 מיטות זוגיות" },
    photos: 8, video: false,
    tag: { es: "Acogedora", en: "Cozy", he: "נעימה" },
    blurb: {
      es: "Suite acogedora de estilo cálido, con cabeceras de madera y arte dorado. Máximo 2 personas. Baño funcional y compacto.",
      en: "Cozy, warm-styled suite with wood headboards and golden art. Max 2 guests. Functional, compact bathroom.",
      he: "סוויטה נעימה בסגנון חם, עם ראשי מיטה מעץ ואמנות זהובה. מקסימום 2 אנשים. חדר רחצה פונקציונלי וקומפקטי."
    },
    crib: false
  },
  {
    id: "president", n: "01", name: "President Apartment", rid: "542775",
    price: 350, clean: 130, cap: 8, flagship: true,
    beds: { es: "2 recámaras (4 camas queen) + 2 sofá-cama", en: "2 bedrooms (4 queen beds) + 2 sofa beds", he: "2 חדרי שינה (4 מיטות קווין) + 2 ספות נפתחות" },
    photos: 13, video: true,
    tag: { es: "Flagship · Kosher", en: "Flagship · Kosher", he: "דירת יוקרה" },
    blurb: {
      es: "Nuestro apartamento insignia para 6 a 8 personas: 2 recámaras, 2½ baños, sala y comedor independientes, cocina kosher completa, lavadora y secadora, balcón con vista al parque de Paitilla y terraza. Sucá privada en Sucot. Aire central. Se reserva exclusivamente a huéspedes estrictamente kosher.",
      en: "Our flagship apartment for 6 to 8 guests: 2 bedrooms, 2½ baths, separate living and dining rooms, full kosher kitchen, washer and dryer, balcony overlooking Paitilla park, and terrace. Private sukkah on Sukkot. Central A/C. Reserved exclusively for strictly kosher guests.",
      he: "דירת הדגל שלנו ל-6 עד 8 אנשים: 2 חדרי שינה, 2.5 חדרי רחצה, סלון ופינת אוכל נפרדים, מטבח כשר מלא, מכונת כביסה ומייבש, מרפסת עם נוף לפארק פייטיה. סוכה פרטית בסוכות."
    },
    crib: true
  }
];
