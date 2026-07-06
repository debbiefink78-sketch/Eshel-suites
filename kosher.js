// Kosher directory — source: kosher.com.pa (Shevet Ahim). Links to official listing.
const KBASE="https://kosher.com.pa/listing/";
const KOSHER=[
 // Paitilla
 {n:"Pita Plus",t:"meat",z:"Paitilla",u:"restaurantes-kosher/pita-plus/"},
 {n:"La Finka",t:"meat",z:"Paitilla",u:"restaurantes-kosher/la-finka/"},
 {n:"Miznon",t:"meat",z:"Paitilla",u:"restaurantes-kosher/miznon/"},
 {n:"Yoss Burger Bar",t:"meat",z:"Paitilla",tag:"Mehadrin",u:"restaurantes-kosher/yoss-burguer-bar/"},
 {n:"Don Shawarma",t:"meat",z:"Paitilla",u:"restaurantes-kosher/don-shawarma/"},
 {n:"Panama Sandwich",t:"meat",z:"Paitilla",u:"restaurantes-kosher/panama-sandwich/"},
 {n:"Tostados 24",t:"meat",z:"Paitilla",u:"restaurantes-kosher/tostados-24/"},
 {n:"Fuego",t:"meat",z:"Paitilla",u:"restaurantes-kosher/fuego/"},
 {n:"Muzka",t:"meat",z:"Paitilla",u:"restaurantes-kosher/muzka/"},
 {n:"Blondie",t:"meat",z:"Paitilla",u:"restaurantes-kosher/blondie/"},
 {n:"Be Shack",t:"meat",z:"Paitilla",tag:"Verificar",u:"restaurantes-kosher/burger-shack/"},
 {n:"La Spezia",t:"dairy",z:"Paitilla",tag:"Jalav Israel · Mehadrin",u:"restaurantes-kosher/la-spezia/"},
 {n:"Nice Slice",t:"dairy",z:"Paitilla",tag:"Jalav Israel",u:"restaurantes-kosher/nice-slice/"},
 {n:"Aroma Gourmet",t:"dairy",z:"Paitilla",u:"restaurantes-kosher/aroma-gourmet/"},
 {n:"Vitali",t:"dairy",z:"Paitilla",u:"restaurantes-kosher/verde/"},
 {n:"Mamba",t:"parve",z:"Paitilla",tag:"Jalav Israel",u:"restaurantes-kosher/mamba/"},
 {n:"Pita Pan",t:"dairy",z:"Paitilla",u:"restaurantes-kosher/pita-pan/"},
 {n:"Yoss Bakery",t:"dairy",z:"Paitilla",tag:"Jalav Israel",u:"restaurantes-kosher/yoss-bakery/"},
 {n:"Jeffrey's Bakery",t:"dairy",z:"Paitilla",tag:"Jalav Israel",u:"restaurantes-kosher/jeffreys-bakery-panama/"},
 {n:"Super Kosher",t:"super",z:"Paitilla",u:"supermercados-kosher/super-kosher/"},
 {n:"Deli K Market",t:"super",z:"Paitilla",u:"supermercados-kosher/deli-k-market/"},
 {n:"Beit Chabad",t:"meat",z:"Paitilla",u:"establecimientos-kosher/beit-chabad/"},
 {n:"Meatme",t:"meat",z:"Paitilla",u:"establecimientos-kosher/meatme/"},
 {n:"Candies Bazaar",t:"parve",z:"Paitilla",u:"establecimientos-kosher/candies-bazaar/"},
 {n:"La Bombonniere",t:"parve",z:"Paitilla",u:"establecimientos-kosher/la-bombonniere/"},
 {n:"Nicky's Baking Studio",t:"parve",z:"Paitilla",u:"establecimientos-kosher/nicky-s-baking-studio/"},
 {n:"Breadz",t:"parve",z:"Paitilla",u:"establecimientos-kosher/breadz/"},
 {n:"Lindashe",t:"parve",z:"Paitilla",u:"establecimientos-kosher/lindashe/"},
 {n:"Fresko Market",t:"parve",z:"Paitilla",u:"establecimientos-kosher/fresko-market/"},
 // Obarrio
 {n:"Aria",t:"meat",z:"Obarrio",u:"restaurantes-kosher/aria/"},
 {n:"Grila",t:"meat",z:"Obarrio",u:"restaurantes-kosher/falafel-grill-house/"},
 {n:"Kava",t:"dairy",z:"Obarrio",u:"restaurantes-kosher/kava/"},
 {n:"Olivetta",t:"dairy",z:"Obarrio",u:"restaurantes-kosher/olivetta/"},
 {n:"Joey's Chocolates",t:"parve",z:"Obarrio",u:"establecimientos-kosher/joey-s-chocolates/"},
 // San Francisco
 {n:"Rimonim",t:"meat",z:"San Francisco",u:"establecimientos-kosher/rimonim-catering/"},
 {n:"Adele's",t:"dairy",z:"San Francisco",u:"restaurantes-kosher/adele-s/"},
 // Marbella
 {n:"The Chief",t:"meat",z:"Marbella",u:"restaurantes-kosher/the-chief/"},
 {n:"Not so Martha",t:"parve",z:"Marbella",u:"establecimientos-kosher/not-so-martha/"},
 {n:"Blossom",t:"parve",z:"Marbella",u:"establecimientos-kosher/blossom/"},
 // Avenida Balboa
 {n:"Cafe con Teclas",t:"dairy",z:"Av. Balboa",u:"restaurantes-kosher/cafe-con-teclas/"},
 {n:"Pinkberry",t:"dairy",z:"Av. Balboa",u:"establecimientos-kosher/pinkberry/"},
 // Via Brasil
 {n:"El Nacional",t:"dairy",z:"Vía Brasil",tag:"Jalav Israel",u:"restaurantes-kosher/el-nacional/"},
 {n:"Shaki's Pizza",t:"dairy",z:"Vía Brasil",tag:"Jalav Israel",u:"restaurantes-kosher/shaki-s-pizza/"},
 {n:"Spice Market",t:"dairy",z:"Vía Brasil",u:"restaurantes-kosher/spice-market/"},
 // Casco / turístico
 {n:"Lula",t:"meat",z:"Casco Antiguo",u:"restaurantes-kosher/lula-by-darna/"},
 {n:"Granclement",t:"dairy",z:"Casco Antiguo",u:"establecimientos-kosher/granclement/"},
 // Coco del Mar / others
 {n:"Kosher Express",t:"meat",z:"Coco del Mar",u:"restaurantes-kosher/kosher-express/"},
 {n:"Club Hebreo",t:"meat",z:"Coco del Mar",u:"establecimientos-kosher/club-hebreo/"},
 {n:"Adama",t:"meat",z:"Bellavista",u:"restaurantes-kosher/adama/"},
 {n:"Bagel Spot",t:"dairy",z:"Clayton",tag:"Jalav Israel",u:"restaurantes-kosher/bagel-spot/"},
 {n:"Morton's Bakehouse",t:"parve",z:"Boquete",u:"restaurantes-kosher/morton-s-bakehouse/"},
 {n:"Fresh Kosher by Organik",t:"meat",z:"Aeropuerto Tocumen T2",u:"establecimientos-kosher/fresh-kosher-by-organik/"}
];
