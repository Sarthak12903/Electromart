// AC Data
const AC = [
  {
    number: 1,
    name: "Panasonic",
    nameDescription:
      "Panasonic 7 in 1 Convertible with True AI Mode 1.5 Ton 3 Star Split Inverter AC with Wi-fi Connect - White  (CS-SU18ZKYWT/CU-SU18ZKYWT, Copper Condenser)",
    ratingStar: 4.1,
    ratingNumber: "25,279",
    reviewNumber: "2,554",
    img: "/ProductList/Panasonic.png",
    powerUsage: "1002.31",
    roomSize: "111-150 sqft",
    productWarranty: 1,
    pcbWarranty: 1,
    compressorWarranty: 10,
    price: "80,990",
    originalPrice: "55,400",
    offer: "33",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,100",
    bankOffer: "no",
  },
  {
    number: 2,
    name: "Voltas",
    nameDescription:
      "Voltas 1.5 Ton 3 Star Split Inverter AC - White  (183V CAX(4503692), Copper Condenser)",
    ratingStar: 4,
    ratingNumber: "17,081",
    reviewNumber: "876",
    img: "/ProductList/Voltas.png",
    powerUsage: "975.26",
    roomSize: "111-150 sqft",
    productWarranty: 1,
    pcbWarranty: 0,
    compressorWarranty: 10,
    price: "42,990",
    originalPrice: "62,990",
    offer: "46",
    date: "Tomorrow",
    hotDeal: "no",
    cashback: "5,100",
    bankOffer: "yes",
  },
  {
    number: 3,
    name: "Daikin",
    nameDescription:
      "Daikin 0.8 Ton 3 Star Split AC - White  (FTL30UV16V1/RL30UV16V1, Copper Condenser)",
    ratingStar: 4.2,
    ratingNumber: "14,937",
    reviewNumber: "1,136",
    img: "/ProductList/Daikin.png",
    powerUsage: "574.39",
    roomSize: "90 sqft or below",
    productWarranty: 1,
    pcbWarranty: 0,
    compressorWarranty: 5,
    price: "25,990",
    originalPrice: "38,100",
    offer: "31",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,100",
    bankOffer: "no",
  },
  {
    number: 4,
    name: "LG",
    nameDescription:
      "LG AI Convertible 6-in-1 Cooling 2024 Model 1.5 Ton 3 Star Split Dual Inverter HD Filter with Anti-Virus Protection,VIRAAT Mode, Diet Mode & ADC Sensor AC - White  (TS-Q18JNXE3, Copper Condenser)",
    ratingStar: 4.1,
    ratingNumber: "40,935",
    reviewNumber: "3,646",
    img: "/ProductList/LG.png",
    powerUsage: "852.44",
    roomSize: "111-150 sqft",
    productWarranty: 1,
    pcbWarranty: 5,
    compressorWarranty: 10,
    price: "36,990",
    originalPrice: "78,990",
    offer: "53",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,100",
    bankOffer: "no",
  },
];

// Tv Data
const TV = [
  {
    number: 1,
    name: "TCL",
    nameDescription:
      "TCL L4B 79.97 cm (32 inch) HD Ready LED Smart Android TV 2024 Edition with Metallic Bezel Less and Chromecast built-in  (32L4B)",
    ratingStar: 4.1,
    ratingNumber: "28,475",
    reviewNumber: "2,371",
    img: "/ProductList/TCLTV.png",
    operatingSystem: "Android",
    pixels: "HD Ready 1366 X 768 Pixels",
    launch: 2024,
    productWarranty: 1,
    additionalWarranty: 0,
    price: "8,990",
    originalPrice: "20,990",
    offer: "57",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "3,700",
    bankOffer: "no",
  },
  {
    number: 2,
    name: "Mi",
    nameDescription:
      "Mi by Xiaomi A Series 80 cm (32 inch) HD Ready LED Smart Google TV 2024 Edition with 200+ Free Channels |Dolby Audio | DTS:HD|DTS Virtual: X| Vivid Picture Engine| Dual Band Wi-Fi| Bluetooth 5.0 Metallic Bezel Less and Chromecast built-in  (32L4B)",
    ratingStar: 4.3,
    ratingNumber: "1,74,973",
    reviewNumber: "13,371",
    img: "/ProductList/MI.png",
    operatingSystem: "Google Tv",
    pixels: "HD Ready 1366 X 768 Pixels",
    launch: 2022,
    productWarranty: 1,
    additionalWarranty: 1,
    price: "13,999",
    originalPrice: "24,999",
    offer: "44",
    date: "Tomorrow",
    hotDeal: "no",
    cashback: "5,400 ",
    bankOffer: "no",
  },
  {
    number: 3,
    name: "Samsung",
    nameDescription:
      "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV with Bezel-Free Design | 300+ Free Channels | PurColor | Hyper Real Picture Engine | Triple Protection | SmartThings App Support | TV Key | Connect Share (HDD) | ConnectShare (USB 2.0)  (UA32T4380AKXXL)",
    ratingStar: 4.3,
    ratingNumber: "1.53,099",
    reviewNumber: "11,245",
    img: "/ProductList/samsung.png",
    operatingSystem: "Tizen",
    pixels: " HD Ready 1366 X 768 Pixels",
    launch: 2024,
    productWarranty: 1,
    additionalWarranty: 1,
    price: "15,990",
    originalPrice: "18,990",
    offer: "19",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,400",
    bankOffer: "yes",
  },
  {
    number: 4,
    name: "LG",
    nameDescription:
      "LG 32LMBPTC 80 cm (32 inch) HD Ready LED Smart WebOS TV with Quad Core Processor, Active HDR, 60 Hz Refresh Rate, DTS Virtual:X, Dolby Audio  (32LM563BPTC)",
    ratingStar: 4.3,
    ratingNumber: "24,210",
    reviewNumber: "1,564",
    img: "/ProductList/LGTV.png",
    operatingSystem: "Web OS",
    pixels: "HD Ready 1366 X 768 Pixels",
    launch: 2020,
    productWarranty: 1,
    price: "43,490",
    originalPrice: "54,990",
    offer: "46",
    date: "Tomorrow",
    hotDeal: "no",
    cashback: "5,400 ",
    bankOffer: "no",
  },
  {
    number: 5,
    name: "Toshiba",
    nameDescription:
      "TOSHIBA C350NP 189 cm (75 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition with Dolby Vision Atmos and REGZA Engine ZR  (75C350NP)",
    ratingStar: 4.3,
    ratingNumber: "5,581",
    reviewNumber: "975",
    img: "/ProductList/Toshiba.png",
    operatingSystem: "Google TV",
    pixels: "Ultra HD (4K) 3840 X 2160 Pixels",
    launch: 2024,
    productWarranty: 1,
    price: "76,229",
    originalPrice: "1,14,999",
    offer: "33",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "3,700",
    bankOffer: "no",
  },
];

const Gadgets = [
  {
    number: 1,
    name: "Samsung",
    nameDescription: "SAMSUNG Galaxy F05 (Twilight Blue, 64 GB)  (4 GB RAM)",
    ratingStar: 4.2,
    size: "w-36 mt-6",
    ratingNumber: "24,743",
    reviewNumber: "1,403",
    img: "/ProductList/SamsungMob.png",
    ram: "4GB",
    rom: "64GB",
    expandable: "upto 1TB",
    display: "17.12 cm (6.74 inch) HD+ Dispaly",
    rearCam: "50MP + 2MP",
    frontCam: "8MP",
    battery: "5000mAh ",
    processor: " Helio G85",
    productWarranty: "1 year",
    AccessoryWarranty: "6 month",
    price: "6,249",
    originalPrice: "9,999",
    offer: "37",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,700 ",
    bankOffer: "no",
  },
  {
    number: 2,
    name: "Motorola",
    nameDescription: "Motorola G85 5G (Cobalt Blue, 256 GB)  (12 GB RAM)",
    ratingStar: 4.4,
    size: "w-36 mt-6",
    ratingNumber: "46,743",
    reviewNumber: "2,403",
    img: "/ProductList/Motorola.png",
    ram: "12GB",
    rom: "256GB",
    expandable: "",
    display: "16.94 cm (6.67 inch) Full HD+ Dispaly",
    rearCam: "50MP + 8MP",
    frontCam: "32MP",
    battery: "5000mAh ",
    processor: " 6s Gen 3",
    productWarranty: "1 year",
    AccessoryWarranty: "6 month",
    price: "18,999",
    originalPrice: "22,999",
    offer: "17",
    date: "19th Jan",
    hotDeal: "no",
    cashback: "17,850 ",
    bankOffer: "yes",
  },
  {
    number: 3,
    name: "Apple",
    nameDescription: "Apple iPhone 16 (Black, 128 GB)",
    ratingStar: 4.6,
    size: "w-36 mt-6",
    ratingNumber: "2,260",
    reviewNumber: "85",
    img: "/ProductList/Apple.png",
    ram: "",
    rom: "64GB",
    expandable: "upto 1TB",
    display: "17.12 cm (6.74 inch) HD+ Dispaly",
    rearCam: "50MP + 2MP",
    frontCam: "8MP",
    battery: "5000mAh ",
    processor: " Helio G85",
    productWarranty: "1 year",
    AccessoryWarranty: "6 month",
    price: "6,249",
    originalPrice: "9,999",
    offer: "37%",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,700 ",
    bankOffer: "no",
  },
  {
    number: 1,
    name: "Samsung",
    nameDescription: "SAMSUNG Galaxy F05 (Twilight Blue, 64 GB)  (4 GB RAM)",
    ratingStar: 4.2,
    size: "w-36 mt-6",
    ratingNumber: "24,743",
    reviewNumber: "1,403",
    img: "/ProductList/SamsungMob.png",
    ram: "4GB",
    rom: "64GB",
    expandable: "upto 1TB",
    display: "17.12 cm (6.74 inch) HD+ Dispaly",
    rearCam: "50MP + 2MP",
    frontCam: "8MP",
    battery: "5000mAh ",
    processor: " Helio G85",
    productWarranty: "1 year",
    AccessoryWarranty: "6 month",
    price: "6,249",
    originalPrice: "9,999",
    offer: "37%",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,700 ",
    bankOffer: "no",
  },
  {
    number: 1,
    name: "Samsung",
    nameDescription: "SAMSUNG Galaxy F05 (Twilight Blue, 64 GB)  (4 GB RAM)",
    ratingStar: 4.2,
    size: "w-36 mt-6",
    ratingNumber: "24,743",
    reviewNumber: "1,403",
    img: "/ProductList/SamsungMob.png",
    ram: "4GB",
    rom: "64GB",
    expandable: "upto 1TB",
    display: "17.12 cm (6.74 inch) HD+ Dispaly",
    rearCam: "50MP + 2MP",
    frontCam: "8MP",
    battery: "5000mAh ",
    processor: " Helio G85",
    productWarranty: "1 year",
    AccessoryWarranty: "6 month",
    price: "6,249",
    originalPrice: "9,999",
    offer: "37%",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,700 ",
    bankOffer: "no",
  },
  {
    number: 1,
    name: "Samsung",
    nameDescription: "SAMSUNG Galaxy F05 (Twilight Blue, 64 GB)  (4 GB RAM)",
    ratingStar: 4.2,
    size: "w-36 mt-6",
    ratingNumber: "24,743",
    reviewNumber: "1,403",
    img: "/ProductList/SamsungMob.png",
    ram: "4GB",
    rom: "64GB",
    expandable: "upto 1TB",
    display: "17.12 cm (6.74 inch) HD+ Dispaly",
    rearCam: "50MP + 2MP",
    frontCam: "8MP",
    battery: "5000mAh ",
    processor: " Helio G85",
    productWarranty: "1 year",
    AccessoryWarranty: "6 month",
    price: "6,249",
    originalPrice: "9,999",
    offer: "37%",
    date: "Tomorrow",
    hotDeal: "yes",
    cashback: "5,700 ",
    bankOffer: "no",
  },
];

export { AC, TV, Gadgets };
