/* ══════════════════════════════════════════
   SHOPS_BASE — sample data demonstrating the
   new 4-independent-image structure.

   Each shop may define:
     cardImage      (string)  — listing card preview only
     coverImage     (string)  — modal hero/banner only
     logoImage      (string)  — modal logo badge only
     galleryImages  (array)   — carousel/lightbox only

   Any field can be omitted — the page will show a
   role-specific placeholder instead of breaking.

   NOTE: this file is the single source of truth for shop
   directory data on BOTH the main website (indexshop.html)
   and the admin panel (shopadmin.html). Neither page fetches
   shop/category records from Firestore — Firestore is only
   used for Likes, Reviews, and Comments.
══════════════════════════════════════════ */
const SHOPS_BASE = [
 {
  "id": 1,
  "name": "Balaji Store",
  "detailPage": "/shop/1-gupta-stationery.html",
  "category": "Grocery Store",
  "owner": "Mr. Pushpraj Singh",
  "phone": "+918076929062",
  "since": "2023",
  "email": "ansh959912@gmail.com",
  "whatsapp": "918076929062",
  "verified": "true",
  "address": "House No.92, pkt-1 sector-25, Rohini, Delhi",
  "description": "Fresh groceries, daily essentials, snacks, dairy products, beverages, and household items available at affordable prices. Quality products with fast and friendly service.",
  "openTime": "6:00 AM",
  "closeTime": "10:00 PM",
  "lat": 28.7317095,
  "lng": 77.0945464,
  "mapLink": "https://www.google.com/maps/place/Balaji+Shop/@28.7317095,77.0945464,17z/data=!3m1!4b1!4m6!3m5!1s0x390d07363403e11f:0xe9f6cc26cf01fa2b!8m2!3d28.7317095!4d77.0945464!16s%2Fg%2F11z8r1q7n5?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D",
  "addedAt": "2026-01-10",
  "cardImage": "https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121407/6-PC-PACK-7.webp",
  "coverImage": "https://res.cloudinary.com/db2tt1cy6/image/upload/v1782295402/ChatGPT_Image_Jun_24_2026_03_32_34_PM.png",
  "logoImage": "https://res.cloudinary.com/db2tt1cy6/image/upload/v1782295779/4fbdddd2-51ca-488c-9117-897e31d5fc62.png",
  "featured": "gold",
  "galleryImages": [
    "https://res.cloudinary.com/db2tt1cy6/image/upload/v1784744243/IMG-20240122-WA0015.jpg"
  ]
},
  {
    id: 2,
    name: "Sharma Electricals",
      detailPage: "/shop/2-sharma-electricals.html",
    category: "Electrical Shop",
    owner: "Mr. Vinod Sharma",
    phone: "+919876500002",
     verified: "true",
    whatsapp: "919876500002",
    address: "Shop 4, Pocket B, Rohini Sector 11, Delhi",
    description: "Wiring, switches, fans, and all electrical fittings at fair prices.",
    openTime: "10:00 AM",
    closeTime: "8:00 PM",
      lat: 28.730492,
  lng: 77.1111727,
    mapLink: "https://www.google.com/maps/place/Ropar+Punjabi+Dhaba/@28.730492,77.1111727,16.73z/data=!4m15!1m8!3m7!1s0x390d01373b9ff459:0xcb80daeabaec4af8!2sSector+11,+Rohini,+Delhi!3b1!8m2!3d28.7288259!4d77.1068059!16s%2Fg%2F1vfzck8_!3m5!1s0x390d0136f29341c5:0x71ff641f0263a8e!8m2!3d28.731135!4d77.1097575!16s%2Fg%2F12hplq4qz?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
   
    addedAt: "2026-02-02",
   

    // Example: only cardImage and coverImage provided.
    // logoImage and galleryImages are intentionally omitted —
    // the page will show the category icon for the logo and an
    // empty-gallery placeholder, never substituting another field.
    cardImage: "https://picsum.photos/seed/sharma-card/400/280",
    coverImage: "https://res.cloudinary.com/db2tt1cy6/image/upload/v1782296146/342df288-bd9b-461d-8f49-f50bc9df0462.png",
     logoImage: "https://res.cloudinary.com/db2tt1cy6/image/upload/v1782295956/af5b1822-a3ad-4ff5-8810-22ff7baf06ea.png"
  },
  {
    id: 3,
    name: "Delhi Medical Store",
    category: "Medical Store",
    owner: "Dr. Anita Verma",
    phone: "+919876500003",
    email:"ansh@gmail.com",
    whatsapp: "919876500003",
    address: "Shop 22, Main Market, Rohini Sector 3, Delhi",
    description: "24x7 pharmacy with home delivery and a qualified pharmacist on duty.",
    openTime: "12:00 AM",
    closeTime: "11:59 PM",
    
    lat: 28.703134,
     lng: 77.1080838,
    mapLink: "https://www.google.com/maps/place/Royal+Pepper+Banquet+hall+-+Sector+3,+Rohini/@28.703134,77.1080838,18.46z/data=!4m15!1m8!3m7!1s0x390d03fc2d4d3e8b:0x636c1d669fb87e73!2sSector+3,+Rohini,+Delhi,+110085!3b1!8m2!3d28.7077393!4d77.1075892!16s%2Fg%2F1hc2w4gnq!3m5!1s0x390d03fcafffffff:0xc6dfc3f01877cea9!8m2!3d28.703746!4d77.107889!16s%2Fg%2F1tdwhwzw?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
    
    addedAt: "2026-03-15",

    // Example: every field intentionally missing to demonstrate
    // graceful placeholder fallback across all 4 roles.
    galleryImages: [
      "https://picsum.photos/seed/delhimed-gallery1/800/600",
      "https://picsum.photos/seed/delhimed-gallery2/800/600"
    ]
  },  {
    id:4 ,
    name: "Mahadev Enterprises",
    detailPage: "/shop/4-mahadev-enterprises.html",
    category: "Cyber Cafe",
    owner: "",
    phone: "+918796070307",

    whatsapp: "918796070307",
    address: "A3, J.j Colony, Rohini Sector 25, Delhi",
    description: "",
    openTime: "10:00 AM",
    closeTime: "08:00 PM",
    
    lat: 28.703134,
     lng: 77.1080838,
    mapLink: "https://www.google.com/maps/place/Royal+Pepper+Banquet+hall+-+Sector+3,+Rohini/@28.703134,77.1080838,18.46z/data=!4m15!1m8!3m7!1s0x390d03fc2d4d3e8b:0x636c1d669fb87e73!2sSector+3,+Rohini,+Delhi,+110085!3b1!8m2!3d28.7077393!4d77.1075892!16s%2Fg%2F1hc2w4gnq!3m5!1s0x390d03fcafffffff:0xc6dfc3f01877cea9!8m2!3d28.703746!4d77.107889!16s%2Fg%2F1tdwhwzw?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
    
    addedAt: "2026-03-15",
      // 1. cardImage — used ONLY on the listing card
    cardImage: "https://res.cloudinary.com/db2tt1cy6/image/upload/f_auto,q_auto/v1784740070/IMG-20260721-WA0002.jpg",

    // 2. coverImage — used ONLY as the modal hero banner
    coverImage: "https://res.cloudinary.com/db2tt1cy6/image/upload/v1784740018/IMG-20260721-WA0008.jpg",

    /* 3. logoImage — used ONLY as the circular/square logo badge*/
    logoImage: "https://res.cloudinary.com/db2tt1cy6/image/upload/v1784740018/IMG-20260721-WA0007.jpg",

    // 4. galleryImages — used ONLY inside the carousel/lightbox
    galleryImages: [
      "https://res.cloudinary.com/db2tt1cy6/image/upload/v1784740069/IMG-20260721-WA0003.jpg",
      "https://res.cloudinary.com/db2tt1cy6/image/upload/v1784740018/IMG-20260721-WA0004.jpg"
      
    ]

    
  }
];