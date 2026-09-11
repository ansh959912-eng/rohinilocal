/* ============================================================
   little & lovely — data.js
   Central store data: products, builder catalogues, config
   ============================================================ */

const WHATSAPP_NUMBER = "910000000000"; // TODO: replace with real WhatsApp business number
const INSTAGRAM_URL = "https://instagram.com/littlelovely.store"; // TODO: replace with real handle
const INSTA_POSTS = [
{ type: "image", src: "https://magicneedles.in/cdn/shop/files/MNHKKC0166.jpg?v=1770686925" },
{ type: "video", src: "video/keychain.mp4" },
  { type: "emoji", icon: "💡", tone: "peach" },
  { type: "emoji", icon: "✏️", tone: "lavender" },
  { type: "emoji", icon: "🎁", tone: "mint" },
  { type: "emoji", icon: "🌬️", tone: "yellow" },
  { type: "emoji", icon: "✨", tone: "rose" },
  { type: "emoji", icon: "📓", tone: "blue" },
  { type: "emoji", icon: "🩷", tone: "peach" },
  { type: "emoji", icon: "🎉", tone: "lavender" },
];

const NAV_LINKS = [
  { label: "Shop", cat: "" },
  { label: "Stationery", cat: "Stationery" },
  { label: "Keychains", cat: "Keychains" },
  { label: "Hair Accessories", cat: "Hair Accessories" },
  { label: "Kids", cat: "Kids" },
  { label: "Fans & Lamps", cat: "Fans & Lamps" },
  { label: "Gifts", cat: "Gifts" },
];

const PRODUCTS = [
  { id: "p1", name: "Cloud Nine Keychain", cat: "Keychains", price: 149, mrp: 249, badge: "BESTSELLER", icon: "🧸", tone: "rose", images: ["https://rukmini1.flixcart.com/image/1500/1500/xif0q/key-chain/h/w/6/handmade-crochet-keychain-cute-gift-for-bags-keys-mezulot-1-original-imahezs8gfu4rgbm.jpeg?q=70", "https://magicneedles.in/cdn/shop/files/MNHKKC0166.jpg?v=1770686925", "images/p1-3.jpg", "images/p1-4.jpg", "images/p1-5.jpg"],
    rating: 4.8, reviews: 214, stock: 34, tags: ["keychain","cute","bag charm"],
    description: "A soft, cloud-shaped keychain in buttery vegan leather with a brushed gold ring. Clips onto bags, backpacks or keys and adds an instant dose of cute." },
  { id: "p2", name: "Mochi Gel Pen Set (5)", cat: "Stationery", price: 129, mrp: 199, badge: "NEW", icon: "🖊️", tone: "blue",images:["https://5.imimg.com/data5/IOS/Default/2025/10/556443276/QN/IL/MW/247919538/product-jpeg-500x500.jpeg"],
    rating: 4.6, reviews: 132, stock: 58, tags: ["pen","stationery","school"],
    description: "Five smooth-writing gel pens in pastel mochi colours. Quick-dry ink, comfort grip, perfect for school, journaling or gifting." },
  { id: "p3", name: "Pastel Pearl Hair Clips (4)", cat: "Hair Accessories", price: 99, mrp: 179, badge: "UNDER ₹99", icon: "🎀", tone: "peach",images:["https://m.media-amazon.com/images/I/71ajag7fy2L._AC_UF1000,1000_QL80_.jpg"],
    rating: 4.7, reviews: 301, stock: 80, tags: ["hair clip","accessory","girls"],
    description: "Four pearl-studded claw clips in soft pastel shades. Gentle grip, no-slip hold, gorgeous for everyday wear or party dress-up." },
  { id: "p4", name: "Starlight Desk Lamp", cat: "Kids", price: 599, mrp: 899, badge: "KIDS FAVOURITE", icon: "💡", tone: "lavender",images:["https://m.media-amazon.com/images/I/41V5RWm1eYL._AC_UF894,1000_QL80_.jpg"],
    rating: 4.9, reviews: 96, stock: 21, tags: ["lamp","led","kids room"],
    description: "A star-shaped LED desk lamp with 3 brightness modes and USB charging. Warm, soft light that's easy on young eyes at study time or bedtime." },
  { id: "p5", name: "Breeze Mini Fan", cat: "Fans & Lamps", price: 349, mrp: 499, badge: "TRENDING", icon: "🌬️", tone: "mint",images:["https://mumuso.co.in/cdn/shop/files/Mumuso_14.webp?v=1782904034&width=1500"],
    rating: 4.5, reviews: 187, stock: 46, tags: ["fan","portable","summer"],
    description: "A rechargeable handheld fan with foldable stand and whisper-quiet motor. Slips into any bag — perfect for commutes, school or travel." },
  { id: "p6", name: "Kawaii Sticker Bundle", cat: "Stationery", price: 79, mrp: 129, badge: "UNDER ₹99", icon: "✨", tone: "yellow",images:["https://i.etsystatic.com/59168509/r/il/c7cb05/6999590025/il_1080xN.6999590025_shcd.jpg"],
    rating: 4.7, reviews: 245, stock: 120, tags: ["sticker","kawaii","journal"],
    description: "120+ kawaii stickers across 6 sheets — animals, food, and doodles. Great for journals, water bottles, laptops and return-gift kits." },
  { id: "p7", name: "Ribbon Bow Scrunchies (3)", cat: "Hair Accessories", price: 119, mrp: 199, badge: "TRENDING", icon: "🩷", tone: "rose",images:["https://m.media-amazon.com/images/I/81JqYLnnT6L._AC_UF1000,1000_QL80_.jpg"],
    rating: 4.6, reviews: 158, stock: 63, tags: ["scrunchie","hair","bow"],
    description: "Three silky bow scrunchies in coordinating pastel tones. Gentle on hair, cute on the wrist, adorable in a ponytail." },
  { id: "p8", name: "Little Bear Notebook", cat: "Stationery", price: 159, mrp: 229, badge: "BESTSELLER", icon: "📓", tone: "peach", images:["https://img.kwcdn.com/product/open/91a5d0a44034405887c0d24fd44579bc-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"],
    rating: 4.8, reviews: 176, stock: 54, tags: ["notebook","journal","cute"],
    description: "An A5 hardbound notebook with a plush bear charm on the spine. 160 dotted pages of thick, ghost-free paper." },
  { id: "p9", name: "Charm Bag Tag Set", cat: "Keychains", price: 99, mrp: 159, badge: "RETURN GIFT", icon: "🔑", tone: "blue",images:["https://m.media-amazon.com/images/I/71HGknqXsQL._AC_UY1100_.jpg"],
    rating: 4.5, reviews: 89, stock: 140, tags: ["keychain","return gift","bag tag"],
    description: "A set of mini charm bag tags — light, colourful and loved by kids. A return-gift favourite that works for any birthday theme." },
  { id: "p10", name: "Cloud Highlighter Trio", cat: "Stationery", price: 89, mrp: 139, badge: "UNDER ₹99", icon: "🖍️", tone: "mint", images:["https://5.imimg.com/data5/ECOM/Default/2025/4/503578271/IY/SJ/TL/217528291/6930114566984-mau2-2.webp"],
    rating: 4.4, reviews: 73, stock: 90, tags: ["highlighter","stationery","school"],
    description: "Three pastel highlighters with a soft chisel tip — no bleed-through, no harsh neon glare." },
  { id: "p11", name: "Sweetheart Pencil Pouch", cat: "Kids", price: 199, mrp: 299, badge: "NEW", icon: "🎒", tone: "lavender",images:["https://images.meesho.com/images/products/904812463/acvnm_512.webp?width=512"],
    rating: 4.7, reviews: 61, stock: 40, tags: ["pouch","kids","school"],
    description: "A heart-quilted pencil pouch with double zips and a durable canvas lining. Roomy enough for a full stationery kit." },
  { id: "p12", name: "Petal Hair Bands (6)", cat: "Hair Accessories", price: 89, mrp: 149, badge: "UNDER ₹99", icon: "🌸", tone: "yellow",images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjdEodBeM98J_Mc9RVIggM0d8nGhXozm0agst_mu9B6YWhoj46A2X5z0U&s=10"],
    rating: 4.6, reviews: 112, stock: 200, tags: ["hair band","accessory","flower"],
    description: "Six soft flower hair ties that won't tug or crease hair. A gentle, everyday essential for little ones." },
  { id: "p13", name: "Bunny Ears Hair Clip Duo", cat: "Hair Accessories", price: 139, mrp: 219, badge: "NEW", icon: "🐰", tone: "lavender",images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7C6B2LW-bgJ0UI-nQqaDfUg6YJ2bzfIGg1YUbUvftdLk6HsDy9ZUc8uG&s=10"],
    rating: 4.6, reviews: 44, stock: 70, tags: ["hair clip","bunny","cute"],
    description: "Adorable bunny-ear hair clips in a soft plush finish, sold as a pair — an instant favourite for party looks." },
  { id: "p14", name: "Sunshine Keyring Charm", cat: "Keychains", price: 119, mrp: 189, badge: "TRENDING", icon: "☀️", tone: "yellow",images:["https://m.media-amazon.com/images/I/61mdZJzYWnL._AC_UY350_.jpg"],
    rating: 4.5, reviews: 67, stock: 88, tags: ["keychain","charm","sunshine"],
    description: "A bright enamel sunshine charm on a sturdy split ring — cheerful on backpacks, keys or bags." },
  { id: "p15", name: "Rainbow Gel Highlighters (4)", cat: "Stationery", price: 99, mrp: 159, badge: "UNDER ₹99", icon: "🌈", tone: "blue",images:["https://www.tinyminymo.com/cdn/shop/files/Aesthetic-Highlighter-Set-22.webp?v=1779781542&width=1445"],
    rating: 4.5, reviews: 58, stock: 100, tags: ["highlighter","rainbow","stationery"],
    description: "Four gel-based highlighters in rainbow shades — smooth, mess-free colour for notes and planners." },
  { id: "p16", name: "Twinkle Night Lamp", cat: "Kids", price: 449, mrp: 699, badge: "KIDS FAVOURITE", icon: "🌙", tone: "lavender",images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWy6cOxQj-t12SWoMViqpBKEUmu7tuSqAffzA-F-MrvpZf7wWZxNpHMb8&s=10"],
    rating: 4.8, reviews: 52, stock: 30, tags: ["lamp","night light","kids"],
    description: "A star-and-moon silicone night lamp that projects a gentle glow — soft, safe and cordless with USB charging." },
  { id: "p17", name: "Petal Desk Fan", cat: "Fans & Lamps", price: 399, mrp: 599, badge: "TRENDING", icon: "🌼", tone: "peach",images:["https://m.media-amazon.com/images/I/61RT4thG1nL._AC_UF894,1000_QL80_.jpg"],
    rating: 4.4, reviews: 39, stock: 55, tags: ["fan","desk","petal"],
    description: "A flower-shaped desk fan with adjustable tilt and 3 speeds — quiet enough for study tables and shared rooms." },
  { id: "p18", name: "Cutie Gift Wrap Bundle", cat: "Gifts", price: 149, mrp: 229, badge: "NEW", icon: "🎁", tone: "mint", images:["https://pinkpalette.in/cdn/shop/files/Untitleddesign_80_1080x.jpg?v=1695205580"],
    rating: 4.7, reviews: 28, stock: 60, tags: ["gift wrap","packaging","gift"],
    description: "A set of pastel wrapping paper, ribbons and gift tags — everything you need to wrap a little gift beautifully." },
];

const HAMPER_PRODUCTS = [
  { id: "h1", name: "Cute Keychain", price: 79, icon: "🧸",image:"https://magicneedles.in/cdn/shop/files/MNHKKC0166.jpg?v=1770686925", variants: [
      { id: "h1a", name: "Bow Keychain", price: 79, icon: "🎀",image:"https://5.imimg.com/data5/ANDROID/Default/2025/9/543955783/BZ/KJ/HD/100129482/product-jpeg.jpg" },
      { id: "h1b", name: "Bear Keychain", price: 89, icon: "🧸",image:"https://m.media-amazon.com/images/I/61vhxxvnoRL._AC_UY1100_.jpg" },
      { id: "h1c", name: "Star Keychain", price: 75, icon: "⭐" ,image:"https://m.media-amazon.com/images/I/513G4Ms3E5L._AC_UY1100_.jpg"},
      { id: "h1d", name: "Sunshine Keychain", price: 99, icon: "☀️",image:"https://thecraftgallery.in/cdn/shop/files/6_9a13ece0-a515-4dfc-971d-340047421c23.png?v=1754117909" },
  ]},
  { id: "h2", name: "Mini Notebook", price: 69, icon: "📓",image:"https://oneoclock.in/cdn/shop/files/kawaii-struggle-bear-mini-diary-cute-pocket-notebook-with-spiral-binding-9330668.png?v=1776868210&width=1445", variants: [
      { id: "h2a", name: "Bear Notebook", price: 69, icon: "📓",image:"https://oneoclock.in/cdn/shop/files/kawaii-struggle-bear-mini-diary-cute-pocket-notebook-with-spiral-binding-9330668.png?v=1776868210&width=1445" },
      { id: "h2b", name: "Floral Notebook", price: 75, icon: "🌸",image:"https://www.rapiddeliveryservices.in/uploads/webp/dairy_33918-.webp" },
      { id: "h2c", name: "Rainbow Notebook", price: 79, icon: "🌈",image:"https://m.media-amazon.com/images/I/61bq9NmFj+L._AC_UF1000,1000_QL80_.jpg" },
  ]},
  { id: "h3", name: "Gel Pen", price: 29, icon: "🖊️",image:"https://www.mochikids.com/cdn/shop/files/PEN04_PEN-BUDDIES_BUBBLE_DOS_FC.webp?v=1776467268&width=1600", variants: [
      { id: "h3a", name: "Mochi Pastel Pen", price: 29, icon: "🖊️",image:"https://www.mochikids.com/cdn/shop/files/PEN04_PEN-BUDDIES_BUBBLE_DOS_FC.webp?v=1776467268&width=1600" },
      { id: "h3b", name: "Glitter Gel Pen", price: 35, icon: "✨" ,image:"https://m.media-amazon.com/images/I/713UI2LbGqL.jpg"},
  ]},
  { id: "h4", name: "Highlighter", price: 35, icon: "🖍️", image:"https://m.media-amazon.com/images/I/51eX+QTCq9L._AC_UF1000,1000_QL80_.jpg" ,variants: [
      { id: "h4a", name: "Cloud Highlighter", price: 35, icon: "🖍️",image:"https://m.media-amazon.com/images/I/51eX+QTCq9L._AC_UF1000,1000_QL80_.jpg" },
      { id: "h4b", name: "Rainbow Highlighter", price: 39, icon: "🌈",image:"https://5.imimg.com/data5/SELLER/Default/2023/6/314402046/PJ/JP/EI/46642485/whatsapp-image-2023-06-07-at-4-56-58-pm-500x500.jpeg" },
  ]},
  { id: "h5", name: "Hair Clips", price: 49, icon: "🎀",image:"https://m.media-amazon.com/images/I/71pox2SI4QL._AC_UF1000,1000_QL80_.jpg", variants: [
      { id: "h5a", name: "Pastel Pearl Clip", price: 49, icon: "🎀" ,image:"https://m.media-amazon.com/images/I/71pox2SI4QL._AC_UF1000,1000_QL80_.jpg"},
      { id: "h5b", name: "Bunny hair Clip", price: 55, icon: "🐰",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuM5Q_OWTzR2uxAWcQohaVuxWW3reaUjGzRt57WE4sc5m2UPbeAN1fsc&s=10" },
  ]},
  { id: "h6", name: "Hair Bands", price: 39, icon: "🌸", image:"https://images.meesho.com/images/products/940922592/2o9t0_512.jpg",variants: [
      { id: "h6a", name: "Petal Hair Band", price: 39, icon: "🌸",image:"https://images.meesho.com/images/products/940922592/2o9t0_512.jpg" },
      { id: "h6b", name: "Ribbon Bow Scrunchie", price: 45, icon: "🩷",image:"https://m.media-amazon.com/images/I/71c3rO6iI9L._AC_UF1000,1000_QL80_.jpg" },
  ]},
  { id: "h7", name: "Mini Fan", price: 189, icon: "🌬️",image:"https://mumuso.co.in/cdn/shop/files/Mumuso_15.webp?v=1782904034&width=1500" ,variants: [
      { id: "h7a", name: "Breeze Mini Fan", price: 189, icon: "🌬️" ,image:"https://mumuso.co.in/cdn/shop/files/Mumuso_15.webp?v=1782904034&width=1500"},
      { id: "h7b", name: "Petal Desk Fan", price: 199, icon: "🌼" ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3jmVswdLQ7AIFaJZiEPFv3gbomd6cJp6mbyKSz9HAruXRp9-OUI3_MX7&s=10"},
  ]},
  { id: "h8", name: "LED Lamp", price: 299, icon: "💡", image:"https://m.media-amazon.com/images/I/61+tawGPjtL.jpg",variants: [
      { id: "h8a", name: "Starlight Desk Lamp", price: 299, icon: "💡" ,image:"https://m.media-amazon.com/images/I/61+tawGPjtL.jpg"},
      { id: "h8b", name: "Twinkle Night Lamp", price: 279, icon: "🌙",image:"https://m.media-amazon.com/images/I/61fJgHmmzGL._AC_UF894,1000_QL80_.jpg" },
  ]},
  { id: "h9", name: "Sticker Set", price: 45, icon: "✨",image:"https://images.meesho.com/images/products/633521833/kig9q_512.webp?width=512", variants: [
      { id: "h9a", name: "Kawaii Sticker Set", price: 45, icon: "✨",image:"https://images.meesho.com/images/products/633521833/kig9q_512.webp?width=512" },
  ]},
  { id: "h10", name: "Eraser Set", price: 19, icon: "🩷",image:"https://topperskit.com/cdn/shop/files/5_9d986248-7fdd-49d3-b5ba-0f84edfb2e67.jpg?v=1724139592", variants: [
      { id: "h10a", name: "Pastel Eraser Set", price: 19, icon: "🩷" ,image:"https://topperskit.com/cdn/shop/files/5_9d986248-7fdd-49d3-b5ba-0f84edfb2e67.jpg?v=1724139592"},
  ]},
  { id: "h11", name: "Pencil Set", price: 55, icon: "✏️",image:"https://m.media-amazon.com/images/I/81NkcNYScnL._AC_UF1000,1000_QL80_.jpg", variants: [
      { id: "h11a", name: "Cloud Pencil Set", price: 55, icon: "✏️",image:"https://m.media-amazon.com/images/I/81NkcNYScnL._AC_UF1000,1000_QL80_.jpg" },
  ]},
  { id: "h12", name: "Pencil Pouch", price: 129, icon: "🎒",image:"https://m.media-amazon.com/images/I/71VSXPLPuaL._SX522_.jpg", variants: [
      { id: "h12a", name: "Sweetheart Pouch", price: 129, icon: "🎒",image:"https://m.media-amazon.com/images/I/71VSXPLPuaL._SX522_.jpg" },
  ]},
];
const OCCASIONS = ["Birthday", "Return Gift", "Friendship", "Kids Gift", "Girls Gift", "Anniversary", "Festive", "Just Because"];
const BUDGETS = [199, 299, 499, 699, 999, 1499];
const PACKAGING = [
  { id: "box", name: "Cute Gift Box", price: 49, icon: "🎁", tone: "rose", image: "https://zinkywee.in/products/cute-print-gift-boxes-styled.jpg" },
  { id: "clear", name: "Transparent Gift Box", price: 39, icon: "📦", tone: "blue", image: "https://dispozable.in/cdn/shop/files/golden_01_2.webp?v=1754293072" },
  { id: "bag", name: "Goodie Bag", price: 19, icon: "🛍️", tone: "peach", image: "https://apisap.fabindia.com/medias/20058946-1.jpg?context=bWFzdGVyfGltYWdlc3wxNjAyNzJ8aW1hZ2UvanBlZ3xhREEwTDJnNU55OHlOemcwTnpRMU16VTNNekUxTUM4eU1EQTFPRGswTmw4eExtcHdad3wwMjQ3NGVkZTM1ZGVjNGI5Yjc4NTRkZWE0ODljZmU3ZGE5NzIzYzhmM2IxMzk5N2FlNDhjMWYzOGI3ZTUyZDdh&aio=w-768" },
  { id: "basket", name: "Premium Hamper Basket", price: 149, icon: "🧺", tone: "lavender", image: "https://www.floralhub.in/cdn/shop/files/GH-6_2.png?v=1781075106&width=3840" },
  { id: "theme", name: "Birthday Theme Wrap", price: 69, icon: "🎉", tone: "mint", image: "https://satyamkraft.in/cdn/shop/files/HAPPY_BDAY_PAPER_800x800.jpg?v=1747810786" },
];

const RETURN_KITS = [
  { id: "rk1", name: "Stationery Kit", price: 49, icon: "✏️", tone: "peach", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mfsH_xayH4eS9w-4QBo6A4md5s_JAhfb2pVmmKoNs12iTdr_VtErDbMo&s=10" },
  { id: "rk2", name: "Kawaii Kit", price: 79, icon: "✨", tone: "yellow", image: "https://www.giftoo.in/cdn/shop/files/KawaiiTheme6-PieceStationeryGiftSet-SchoolSupplies_7.png?v=1779452722&width=1946" },
  { id: "rk3", name: "Mini Gift Kit", price: 99, icon: "🎁", tone: "rose", image: "https://m.media-amazon.com/images/I/91t2OMjG4fL._AC_UF1000,1000_QL80_.jpg" },
  { id: "rk4", name: "Premium Stationery Kit", price: 149, icon: "📓", tone: "lavender", image: "https://m.media-amazon.com/images/I/71BEhhtdu+L._AC_UF1000,1000_QL80_.jpg" },
  { id: "rk5", name: "Birthday Gift Kit", price: 199, icon: "🎉", tone: "mint", image: "https://images.meesho.com/images/products/256898728/cecdg_512.webp?width=512" },
];
const RETURN_GUEST_COUNTS = [10, 20, 30, 50, 100, 200];
const RETURN_THEMES = [
  { id: "pink", name: "Pink", icon: "🩷", tone: "rose", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qdw8CgI4X1BtannaM3COyqnDTl-egJp7DnVLUbD7UhljcDLER2XJCWo&s=10" },
  { id: "blue", name: "Blue", icon: "💙", tone: "blue", image: "https://i.etsystatic.com/62360022/r/il/8384c6/7983610520/il_570xN.7983610520_px4g.jpg" },
  { id: "pastel", name: "Pastel", icon: "🌸", tone: "lavender", image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2025/JULY/19/3z01EFvk_b82557992ee64f8489927d5ba76b37f0.jpg" },
  { id: "rainbow", name: "Rainbow", icon: "🌈", tone: "mint", image: "https://m.media-amazon.com/images/I/71nWRsWYJaL.jpg" },
  { id: "cartoon", name: "Cartoon", icon: "🧸", tone: "peach", image: "https://images.meesho.com/images/products/1053483044/9hfyx_512.webp?width=512" },
  { id: "custom", name: "Custom", icon: "✨", tone: "yellow", image: "https://quapri.in/_next/image?url=https%3A%2F%2Fwp.quapri.in%2Fwp-content%2Fuploads%2F2024%2F04%2FWrapping-Paper-Quapri-2.webp&w=1920&q=75" },
];

const KIT_ITEMS = [
  { id: "k1", name: "Pencil", price: 12, icon: "✏️", tone: "peach", variants: [
      { id: "k1a", name: "Plain Pencil", price: 12, icon: "✏️", tone: "peach", image: "https://quapri.in/_next/image?url=https%3A%2F%2Fwp.quapri.in%2Fwp-content%2Fuploads%2F2024%2F04%2FWrapping-Paper-Quapri-2.webp&w=1920&q=75" },
      { id: "k1b", name: "Pastel Pencil", price: 14, icon: "🖍️", tone: "lavender", image: "" },
      { id: "k1c", name: "Character Pencil", price: 18, icon: "🧸", tone: "rose", image: "" },
  ]},
  { id: "k2", name: "Pen", price: 15, icon: "🖊️", tone: "blue", variants: [
      { id: "k2a", name: "Mochi Gel Pen", price: 15, icon: "🖊️", tone: "blue", image: "" },
      { id: "k2b", name: "Glitter Pen", price: 20, icon: "✨", tone: "yellow", image: "" },
  ]},
  { id: "k3", name: "Eraser", price: 8, icon: "🩷", tone: "rose", variants: [
      { id: "k3a", name: "Pastel Eraser", price: 8, icon: "🩷", tone: "rose", image: "" },
      { id: "k3b", name: "Fruit Eraser", price: 10, icon: "🍓", tone: "peach", image: "" },
  ]},
  { id: "k4", name: "Sharpener", price: 10, icon: "🔺", tone: "mint", variants: [
      { id: "k4a", name: "Simple Sharpener", price: 10, icon: "🔺", tone: "mint", image: "" },
      { id: "k4b", name: "Character Sharpener", price: 13, icon: "🧸", tone: "peach", image: "" },
  ]},
  { id: "k5", name: "Notebook", price: 45, icon: "📓", tone: "peach", variants: [
      { id: "k5a", name: "Little Bear Notebook", price: 45, icon: "📓", tone: "peach", image: "" },
      { id: "k5b", name: "Floral Notebook", price: 49, icon: "🌸", tone: "rose", image: "" },
      { id: "k5c", name: "Rainbow Notebook", price: 55, icon: "🌈", tone: "blue", image: "" },
  ]},
  { id: "k6", name: "Sticker", price: 15, icon: "✨", tone: "yellow", variants: [
      { id: "k6a", name: "Kawaii Sticker Sheet", price: 15, icon: "✨", tone: "yellow", image: "" },
  ]},
  { id: "k7", name: "Highlighter", price: 20, icon: "🖍️", tone: "mint", variants: [
      { id: "k7a", name: "Cloud Highlighter", price: 20, icon: "🖍️", tone: "mint", image: "" },
      { id: "k7b", name: "Rainbow Highlighter", price: 24, icon: "🌈", tone: "blue", image: "" },
  ]},
  { id: "k8", name: "Pouch", price: 60, icon: "🎒", tone: "lavender", variants: [
      { id: "k8a", name: "Sweetheart Pouch", price: 60, icon: "🎒", tone: "lavender", image: "" },
  ]},
  { id: "k9", name: "Ruler", price: 10, icon: "📏", tone: "blue", variants: [
      { id: "k9a", name: "Simple Ruler", price: 10, icon: "📏", tone: "blue", image: "" },
  ]},
  { id: "k10", name: "Keychain", price: 40, icon: "🧸", tone: "rose", variants: [
      { id: "k10a", name: "Bow Keychain", price: 40, icon: "🎀", tone: "rose", image: "" },
      { id: "k10b", name: "Sunshine Keychain", price: 45, icon: "☀️", tone: "yellow", image: "" },
  ]},
];
const KIT_QUANTITY_TIERS = [10, 20, 30, 50, 100];

const MOODS = [
  { icon: "🎀", tone: "rose", label: "Hair Accessories", cat: "Hair Accessories" },
  { icon: "✏️", tone: "blue", label: "Stationery", cat: "Stationery" },
  { icon: "🧸", tone: "peach", label: "Keychains", cat: "Keychains" },
  { icon: "🏮", tone: "lavender", label: "Kids Lamps", cat: "Kids" },
  { icon: "🌬️", tone: "mint", label: "Mini Fans", cat: "Fans & Lamps" },
  { icon: "🎁", tone: "yellow", label: "Gifts", cat: "Gifts" },
  { icon: "🎉", tone: "rose", label: "Return Gifts", link: "return-gifts" },
  { icon: "✨", tone: "blue", label: "Kawaii Finds", tag: "kawaii" },
];

const PRICE_TIERS = [
  { label: "Gifts Under ₹99", tone: "rose", max: 99 },
  { label: "Gifts Under ₹199", tone: "blue", max: 199 },
  { label: "Gifts Under ₹299", tone: "peach", max: 299 },
  { label: "Return Gifts Under ₹100", tone: "mint", max: 100, cat: "Keychains" },
];

const OCCASION_SHOP = [
  { label: "Birthday", icon: "🎂", tone: "rose" },
  { label: "Return Gifts", icon: "🎉", tone: "peach", link: "return-gifts" },
  { label: "For Girls", icon: "🎀", tone: "lavender" },
  { label: "For Kids", icon: "🧸", tone: "blue" },
  { label: "Best Friend", icon: "💌", tone: "yellow" },
  { label: "Festive", icon: "✨", tone: "mint" },
  { label: "School Gifts", icon: "🎒", tone: "rose" },
  { label: "Teacher Gifts", icon: "🍎", tone: "peach" },
  { label: "Just Because", icon: "🌸", tone: "lavender" },
];

const REVIEWS = [
  { name: "Ananya R.", text: "Built a return-gift kit for my daughter's party — every parent asked where it was from. Packaging felt so premium.", rating: 5, product: "Custom Return Gift Kit" },
  { name: "Karthik S.", text: "The stationery kit builder is genius. Ordered 40 identical pouches for my son's class, sorted in one sitting.", rating: 5, product: "Custom Stationery Kit" },
  { name: "Meher P.", text: "Ordered the mystery hamper for a friend's birthday. The unboxing alone made it worth it.", rating: 5, product: "Custom Hamper" },
  { name: "Divya N.", text: "The hair clips are so much sturdier than expected, and they arrived in the cutest little pouch.", rating: 5, product: "Pastel Pearl Hair Clips" },
];

const FAQS = [
  { q: "How long does shipping take?", a: "Orders are usually dispatched within 24–48 hours and delivered within 3–7 business days depending on your location." },
  { q: "What is your return policy?", a: "Unused items in original packaging can be returned within 7 days of delivery. Customised hampers, return gifts and personalised items are not eligible for return." },
  { q: "Can I customise a hamper for a specific budget?", a: "Yes! Use our Build Your Own Hamper tool to set a budget, pick products, choose packaging and add a personal message — the total updates live as you build." },
  { q: "Do you do bulk birthday return gifts?", a: "Yes, we specialise in bulk return gifts starting from 10 kits, with bulk discounts kicking in at higher quantities. Use the Return Gift Builder or request a custom quote." },
  { q: "Can I create a custom stationery kit?", a: "Absolutely — pick individual stationery items, set your quantity of kits, and we'll assemble identical kits for classroom gifting, parties or events." },
  { q: "What payment methods do you accept?", a: "We accept UPI, all major debit/credit cards, and Cash on Delivery on eligible orders." },
  { q: "How do I track my order?", a: "Use the Track Order page with your Order ID and phone number to see live status: Placed, Processing, Shipped or Delivered." },
  { q: "Can I speak to someone before ordering bulk gifts?", a: "Yes — tap the WhatsApp button anywhere on the site, or use Get Bulk Quote to send us your requirements directly." },
];
