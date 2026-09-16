/**
 * products.js — Balaji Store Static Products
 * ─────────────────────────────────────────────
 * All static product data lives here.
 * Import this file BEFORE your main app script in index.html:
 *
 *   <script src="products.js"></script>
 *   <script src="app.js"></script>   ← or your main <script> block
 *
 * Then in your main script, replace the STATIC_PRODUCTS const with:
 *   const STATIC_PRODUCTS = window.STATIC_PRODUCTS;
 *
 * Or just reference window.STATIC_PRODUCTS directly everywhere.
 * ─────────────────────────────────────────────
 */

(function () {
  'use strict';

  const CLOUDINARY_BASE =
    'https://res.cloudinary.com/db2tt1cy6/image/upload/v1780421930';

  const STATIC_PRODUCTS = [

    // ══ GRAINS & FLOUR ══
    { id:'grains_aashirvaad_10kg',  name:'Aashirvaad Atta',                    image:"https://desigros.com/cdn/shop/files/Aashirvaad_Whole_Wheat_Atta_-_10Kg.jpg?v=1759318391&width=1000",         emoji:'🌾', weight:'10 kg',   price:470, mrp:489, category:'grains', stock:50 },
    { id:'grains_aashirvaad_5kg',   name:'Aashirvaad Atta',                    image:"https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F493%2F1697433415559.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75",         emoji:'🌾', weight:'5 kg',    price:250, mrp:262, category:'grains', stock:50 },
    { id:'grains_silvercoin_10kg',  name:'Silver Coin Atta',                   image:"https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F4034%2F1761224103726.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75",         emoji:'🌾', weight:'10 kg',   price:420, mrp:550, category:'grains', stock:40 },
    { id:'grains_silvercoin_5kg',   name:'Silver Coin Atta',                   image:"https://www.bbassets.com/media/uploads/p/l/40008443_4-silver-coin-traditional-chakki-atta.jpg",         emoji:'🌾', weight:'5 kg',    price:220, mrp:300, category:'grains', stock:40 },
    { id:'grains_anand_10kg',       name:'Anand Atta',                         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537340/IMG_20260615_205501.png',                        emoji:'🌾', weight:'10 kg',   price:370, mrp:400, category:'grains', stock:40 },
    { id:'grains_anand_5kg',        name:'Anand Atta',                         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537329/1000339772-Photoroom.png',                        emoji:'🌾', weight:'5 kg',    price:190, mrp:200, category:'grains', stock:40 },
{ id:'grains_mp_10kg', name:'Mp Atta', image:CLOUDINARY_BASE+'/image/.jpg', emoji:'🌾', weight:'10 kg', price:500, mrp:520, category:'grains', stock:40 },
{ id:'grains_mp_5kg', name:'Mp Atta', image:CLOUDINARY_BASE+'/image/.jpg', emoji:'🌾', weight:'5 kg', price:250, mrp:270, category:'grains', stock:40 },
{ id:'grains_chawal_atta_1kg', name:'Chawal Atta', image:CLOUDINARY_BASE+'/imag.jpg', emoji:'🌾', weight:'1 kg', price:250, mrp:270, category:'grains', stock:40 },
{ id:'grains_makka_atta_1kg', name:'Makka Atta', image:CLOUDINARY_BASE+'/ime/.jpg', emoji:'🌾', weight:'1 kg', price:250, mrp:270, category:'grains', stock:40 },
{ id:'grains_kuttu_atta_1kg', name:'Kuttu Atta', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680603/1000340508-Photoroom.png', emoji:'🌾', weight:'250gm', price:85, mrp:90, category:'grains', stock:40 },
  { id:'grains_singhada',         name:'Farm Fresh Singhade Ka Atta',        image:"https://5.imimg.com/data5/SELLER/Default/2024/6/425812400/VJ/ON/PY/222115988/dda15647-122d-45f9-a155-78e36c14641e.jpg",        emoji:'🌾', weight:'250 gm',  price:50,  mrp:70,  category:'grains', stock:50 },
    { id:'grains_singhada pkt',         name:'Singhade Ka Atta pkt',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680607/1000340515-Photoroom.png',        emoji:'🌾', weight:'250 gm',  price:50,  mrp:70,  category:'grains', stock:50 },
{ id:'grains_khulla_atta_1kg', name:'Khulla Atta', image:'https://s7ap1.scene7.com/is/image/itcportalprod/Khapli%20Atta%20Flour%20-%20banner%20image', emoji:'🌾', weight:'1 kg', price:250, mrp:270, category:'grains', stock:40 },

    { id:'grains_quaker_oats',      name:'Quaker Oats',                        image:"https://www.bbassets.com/media/uploads/p/xl/266122_19-quaker-oats-breakfast-cereal-rich-in-protein-dietary-fibre-nutritious-easy-to-cook.jpg",             emoji:'🌾', weight:'400 gm',  price:80,  mrp:86,  category:'grains', stock:50 },
    { id:'grains_saffola_classic',  name:'Saffola Classic Masala Oats',        image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F6752%2F1752663903775.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',        emoji:'🌾', weight:'500 gm',  price:210, mrp:220, category:'grains', stock:50 },
    { id:'grains_saffola_curry',    name:'Saffola Curry Corn Pepper Oats',     image:'https://rukminim3.flixcart.com/image/480/640/xif0q/cereal-flake/5/m/k/-enriched-transparent-original-imahddwjgy6gdwsy.png?q=20',      emoji:'🌾', weight:'500 gm',  price:230, mrp:240, category:'grains', stock:50 },
    { id:'grains_saffola_mini',     name:'Saffola Classic Masala Oats',        image:'https://cdn.grofers.com/da/cms-assets/cms/product/rc-upload-1779702172667-744.jpg',         emoji:'🌾', weight:'38 gm',   price:18,  mrp:18,  category:'grains', stock:50 },
    { id:'grains_popcorn_classic',  name:'Act Classic Salted Popcorn',         image:'https://www.bbassets.com/media/uploads/p/l/100169324_3-act-ii-instant-popcorn-classic-salted.jpg',         emoji:'🌾', weight:'70 gm',   price:30,  mrp:30,  category:'grains', stock:50 },
    { id:'grains_popcorn_golden',   name:'Act Classic Golden Sizzle Popcorn',  image:'https://www.bbassets.com/media/uploads/p/l/267392_2-act-ii-instant-popcorn-golden-sizzle.jpg',          emoji:'🌾', weight:'30 gm',   price:10,  mrp:10,  category:'grains', stock:50 },
      { id:'grains_dalia',            name:'Rajdhani Dalia',                     image:'https://www.bbassets.com/media/uploads/p/l/70000237_2-rajdhani-dalia.jpg',                   emoji:'🌾', weight:'500 gm',  price:35,  mrp:50,  category:'grains', stock:50 },
    { id:'grains_sooji',            name:'Rajdhani Sooji',                     image:'https://m.media-amazon.com/images/I/81xpz0UPZqL.jpg',                   emoji:'🌾', weight:'500 gm',  price:35,  mrp:50,  category:'grains', stock:50 },
    { id:'grains_maida',            name:'Rajdhani Maida',                     image:'https://rukmini1.flixcart.com/image/300/300/xif0q/flour/m/g/q/-original-imahmvvhttpbgun8.jpeg',                   emoji:'🌾', weight:'500 gm',  price:35,  mrp:50,  category:'grains', stock:50 },
    { id:'grains_macroni',          name:'Rajdhani Macroni',                   image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/6d8c5c2b-7826-4c9e-9eaa-98c2a69cb12a/Rajdhani-Macaroni-Pasta.jpeg',                   emoji:'🌾', weight:'200 gm',  price:30,  mrp:31,  category:'grains', stock:50 },
    { id:'grains_besan',            name:'Rajdhani Besan',                     image:'https://www.bbassets.com/media/uploads/p/l/40200334_3-rajdhani-besan-gram-flour.jpg',                   emoji:'🌾', weight:'500 gm',  price:60,  mrp:80,  category:'grains', stock:50 },
    { id:'grains_poha_raj',         name:'Rajdhani Poha',                      image:'https://www.bbassets.com/media/uploads/p/l/97133_1-rajdhani-poha-mota.jpg',           emoji:'🌾', weight:'500 gm',  price:60,  mrp:80,  category:'grains', stock:50 },
     { id:'grains_sattu_raj',         name:'Rajdhani Sattu',                      image:'https://www.bbassets.com/media/uploads/p/l/40206907_2-rajdhani-chana-sattu.jpg',           emoji:'🌾', weight:'500 gm',  price:70,  mrp:99,  category:'grains', stock:50 },
    {id:'grains_awadh_sattu_500gm',name:'Awadh Sattu',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543684/1000339894-Photoroom.png',emoji:'🥣',weight:'500gm',price:60,mrp:97,category:'grains',stock:50},

     { id:'grains_sattu_sabudana',         name:'Sabudana',                      image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680601/IMG_20260617_124450.png',           emoji:'🌾', weight:'250 gm',  price:40,  mrp:95,  category:'grains', stock:50 },
  
    { id:'grains_poha_jad',         name:'Jadugar Poha',                       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5C-LsqAseyQKnycdXAFglG8GYlWmdBk6cApaNhfsRthdJohXMs6jaWjE&s=10',            emoji:'🌾', weight:'500 gm',  price:45,  mrp:75,  category:'grains', stock:50 },
      {id:'grains_Dhampure_Sugar_1kg',name:'Dhampure Sugar (chini)',image:'https://dhampure.com/cdn/shop/files/LIFESTYLE_White_Crystal_Sugar.jpg?v=1775556169&width=900',emoji:'🍯',weight:'1kg',price:45,mrp:45,category:'grains',stock:50},
       {id:'grains_bura_1pkt',name:' Bura',image:'https://res.cloudinary.com/db2tt16/image/upload/q_auto/f_auto/v1781543667/1000339864-Photoroom.png',emoji:'🍯',weight:'1kg',price:45,mrp:45,category:'grains',stock:50},
       {id:'grains_desi_khand_1kg',name:'Ved Ji Desi Khand',image:'https://5.imimg.com/data5/SELLER/Default/2025/1/482878220/JB/HM/FV/85085168/khandsari-desi-khand.jpg',emoji:'🍯',weight:'1kg',price:45,mrp:105,category:'grains',stock:50},
   {id:'grains_Brown_Sugar_1kg',name:'Brown Sugar',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543667/1000339864-Photoroom.png',emoji:'🍯',weight:'1kg',price:80,mrp:151,category:'grains',stock:50},
    
  { id:'grains_ararot_1kg', name:'Khulla Ararot', image:'https://m.media-amazon.com/images/I/51Z5CyparCL._AC_UF1000,1000_QL80_.jpg', emoji:'🌾', weight:'1kg', price:60, mrp:60, category:'grains', stock:50 },
{ id:'grains_khullamaida_1kg', name:'Khulla Maida', image:'https://tiimg.tistatic.com/fp/1/009/823/maida--134.jpg', emoji:'🌾', weight:'1kg', price:40, mrp:40, category:'grains', stock:50 },
{ id:'grains_bura_1kg', name:'Khulla Bura', image:'https://5.imimg.com/data5/SELLER/Default/2024/1/375673407/KF/YD/KD/56132965/white-bura-sugar-powder-500x500.jpg', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },
{ id:'grains_khullasugar_1kg', name:'Khulla Sugar (chini)', image:'https://m.media-amazon.com/images/I/71AWD0lgPvL._AC_UF894,1000_QL80_.jpg', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },
{ id:'grains_khullamacroni_1kg', name:'Khulla Macroni', image:'https://5.imimg.com/data5/SELLER/Default/2025/11/559715083/QF/TK/EB/53288182/loose-macaroni-500x500.png', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },
{ id:'grains_khullapasta_1kg', name:'Khulla Pasta', image:'https://khuvi.com/cdn/shop/files/Penne-PAsta.jpg?v=1722947779&width=5000', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },

{ id:'baking_ajanta_baking_powder_45', name:'Ajanta Baking Powder', image:'https://ajantafoodproducts.com/wp-content/uploads/2023/08/home-baking-powder.png', emoji:'🍯', weight:'100gm', price:45, mrp:45, category:'baking', stock:50 },
{ id:'baking_ajanta_lemon_yellow_color_45', name:'Ajanta Lemon Yellow Color', image:'https://5.imimg.com/data5/SELLER/Default/2025/2/491344236/TO/JK/VN/183203996/ajanta-lemon-yellow-food-color.png', emoji:'🍯', weight:'100gm', price:40, mrp:43, category:'baking', stock:50 },
{ id:'baking_ajanta_bright_green_color_45', name:'Ajanta Bright Green Color', image:'https://5.imimg.com/data5/KM/AR/IN/SELLER-35206445/bright-green-food-colour-500x500.jpg', emoji:'🍯', weight:'100gm', price:40, mrp:42, category:'baking', stock:50 },
{ id:'baking_anuja_lemon_yellow_color_45', name:'Anuja Lemon Yellow Color', image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F907%2F1728284097277.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75', emoji:'🍯', weight:'10gm', price:5, mrp:7, category:'baking', stock:50 },
{ id:'baking_anuja_bright_green_color_45', name:'Anuja Bright Green Color', image:'https://image.aapkabazar.co/product/908/1728283653903.png?type=png', emoji:'🍯', weight:'10gm', price:5, mrp:7, category:'baking', stock:50 },
{ id:'baking_anuja_orange_red_color_45', name:'Anuja Orange Red Color', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25LbFxrKMo_2n1jFjRWTsJ_Gp_y_AgvNzGoXs4AAPCFylSe8JkfDad6w&s=10', emoji:'🍯', weight:'10gm', price:5, mrp:7, category:'baking', stock:50 },


 // ══ Dal and Pulses ══

   {id:'grains_plain_chana_1kg',name:'Farm Fresh Plain Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543690/IMG_20260615_224434.png',emoji:'🫘',weight:'1kg',price:45,mrp:45,category:'dal',stock:50},
{id:'grains_ farmfreshchilka_chana_1kg',name:'Farm Fresh Chilka Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543678/1000339882-Photoroom.png',emoji:'🫘',weight:'1kg',price:45,mrp:45,category:'dal',stock:50},
{id:'grains_chilka_chana_1kg',name:'Khulla Chilka Chana',image:'https://images.jansatta.com/2024/09/MixCollage-24-Sep-2024-02-19-PM-6827.jpg',emoji:'🫘',weight:'1kg',price:45,mrp:45,category:'dal',stock:50},
{id:'grains_chilka_chana_500g',name:'Khulla Chilka Chana',image:'https://sindhidryfruits.live/cdn/shop/files/chana_chilka.jpg?v=1755872162&width=600',emoji:'🫘',weight:'500gm',price:45,mrp:45,category:'dal',stock:50},


    // ══ OIL ══
     { id:'oil_bail_kolhu_5l',       name:'Bail Kolhu 5L',                      image:'https://rukminim3.flixcart.com/image/480/640/kyag87k0/edible-oil/d/8/t/5-kachi-ghani-mustard-oil-5l-1-pet-bottle-mustard-oil-bail-kolhu-original-imagak5fhhhamrdb.jpeg?q=20',     emoji:'🫙', weight:'5 L',     price:340, mrp:390, category:'oil', stock:15 },
   
    { id:'oil_veer_500ml',          name:'Veer Brand Oil',                     image:'https://5.imimg.com/data5/SELLER/Default/2024/9/448159965/OI/HJ/FS/10781323/500ml-veer-brand-mustard-oil-500x500.jpg',          emoji:'🫙', weight:'500 ml',  price:85,  mrp:90,  category:'oil', stock:20 },
    { id:'oil_kanishk_500ml',       name:'Kanishk',                            image:'https://m.media-amazon.com/images/I/61u3dxKl54L._AC_UF894,1000_QL80_.jpg',             emoji:'🫙', weight:'500 mL',  price:90,  mrp:115, category:'oil', stock:35 },
    { id:'oil_jk_mangla_500ml',     name:'J.k Mangla Til Oil',                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QO3ehjmsb8ss1u9C-F5PhTXf3Oox9rojVVYjDXjFnljZyZGqLqDJL0Y_&s=10',             emoji:'🫙', weight:'500 ml',  price:90,  mrp:95,  category:'oil', stock:20 },
    { id:'oil_fortune_1l',          name:'Fortune Oil',                        image:'https://www.bbassets.com/media/uploads/p/xl/276764_12-fortune-fortune-premium-kachi-ghani-pure-mustard-oil.jpg',             emoji:'🫙', weight:'1 L',     price:180, mrp:215, category:'oil', stock:60 }, 
    { id:'oil_bail_kolhu_1l',       name:'Bail Kolhu',                         image:'https://www.bbassets.com/media/uploads/p/l/40193771_1-bail-kolhu-kachi-ghani-mustard-oil.jpg',          emoji:'🫙', weight:'1 L',     price:190, mrp:200, category:'oil', stock:45 },
    { id:'oil_patanjali_1l',        name:'Patanjali Oil',                      image:'https://www.patanjaliayurved.net/assets/product_images/additional_images/mustardoil1ltr5_1748590181.webp',           emoji:'🫙', weight:'1 L',     price:190, mrp:210, category:'oil', stock:22 },
    { id:'oil_veer_1l',             name:'Veer Brand Oil',                     image:'https://m.media-amazon.com/images/I/61+u+WK4zPL.jpg',          emoji:'🫙', weight:'1 L',     price:165, mrp:170, category:'oil', stock:20 },
     { id:'oil_aashirwad_1l',       name:'Aashirwad Oil',       image:'https://sellerconnect.vikrra.in/api/v1/images/itemImage/apiondcfarmlokalcom/844cdcfa576542c94d52f7e106ef45d17896b8136837a1280d04cc24b3d870df17ea287dd8d6a443511c4e3663b136d3/image.jpeg', emoji:'🫙', weight:'1 L', price:165, mrp:170, category:'oil', stock:20 },
{ id:'oil_manas_1l',           name:'Manas Mustard Oil',   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltPj0SHKpTOd54eBQvRvkzFq1czy08_ZzWhRvEiXuu_fRTAbDv5fhBUQ&s=10',                                     emoji:'🫙', weight:'1 L', price:165, mrp:170, category:'oil', stock:0 },
    { id:'oil_jk_mangla_1l',        name:'J.K Mangla Til Oil',                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QO3ehjmsb8ss1u9C-F5PhTXf3Oox9rojVVYjDXjFnljZyZGqLqDJL0Y_&s=10',             emoji:'🫙', weight:'1 L',     price:175, mrp:180, category:'oil', stock:20 },
    { id:'oil_dalda_groundnut_1l',  name:'Dalda Groundnut Oil',                image:'https://www.bbassets.com/media/uploads/p/l/40006864_3-dalda-refined-groundnut-oil.jpg',     emoji:'🫙', weight:'1 L',     price:220, mrp:238, category:'oil', stock:20 },
    { id:'oil_rath_dalda',          name:'Rath Dalda',                         image:'https://m.media-amazon.com/images/I/61SWp-JjjyL.jpg',                emoji:'🫙', weight:'840 gm',  price:195, mrp:199, category:'oil', stock:20 },
     { id:'oil_fortune_refined_1l',  name:'Fortune Refined',                    image:'https://m.media-amazon.com/images/I/51GyUUKe-0L.jpg',     emoji:'🫙', weight:'1 L',     price:150, mrp:170, category:'oil', stock:30 },
    { id:'oil_mahakosh_1l',         name:'Mahakosh Refined',                   image:'https://www.bbassets.com/media/uploads/p/l/70001645_15-mahakosh-soyabean-oil.jpg',            emoji:'🫙', weight:'1 L',     price:145, mrp:160, category:'oil', stock:28 },
   { id:'oil_raag_gold_1l', name:'Raag Gold Refined', image:'https://assets.hyperpure.com/data/images/products/7cf7da1f296343469f89262730ee5afd.webp', emoji:'🫙', weight:'1 L', price:145, mrp:160, category:'oil', stock:28 },

    { id:'oil_mayonese_1l',         name:'Mayonese',                           image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537333/1000339775-Photoroom.png',                emoji:'🫙', weight:'1 L',     price:50,  mrp:120, category:'oil', stock:20 },
   
    { id:'oil_coconut_500ml',       name:'Parachute Coconut Oil',              image:'https://m.media-amazon.com/images/I/61NXavgNuAL._AC_UF1000,1000_QL80_.jpg',          emoji:'🫙', weight:'500ml',   price:310, mrp:320, category:'oil', stock:15 },
    { id:'oil_dabur_sarso_500ml',   name:'Dabur Sarso Amla',                   image:'https://www.bbassets.com/media/uploads/p/xl/40050801-6_1-dabur-amla-sarson-amla-hair-oil.jpg',     emoji:'🫙', weight:'500ml',   price:160, mrp:165, category:'oil', stock:15 },
    { id:'oil_vatika_300ml',        name:'Vatika Coconut Hair Oil',            image:'https://m.media-amazon.com/images/I/71TpplCLIKL._AC_UF350,350_QL80_.jpg',              emoji:'🫙', weight:'300ml',   price:175, mrp:180, category:'oil', stock:15 },
    { id:'oil_dabur_amla_136ml',    name:'Dabur Amla',                         image:'https://www.quickpantry.in/cdn/shop/files/dabur-amla-hair-oil-quick-pantry.jpg?v=1710538163',              emoji:'🫙', weight:'136ml',   price:50,  mrp:50,  category:'oil', stock:15 },
    { id:'oil_keo_100ml',           name:'Keo Karpin Olive Oil',               image:'https://www.bbassets.com/media/uploads/p/xl/255742_5-keo-karpin-hair-oil-non-sticky-with-olive-oil.jpg',                 emoji:'🫙', weight:'100ml',   price:50,  mrp:50,  category:'oil', stock:15 },
    { id:'oil_bajaj_110ml',         name:'Bajaj Almond Drop Oil',              image:'https://bajajconsumercare.com/assets/images/Bajaj-Almond-Drops-Hair_Oil.jpg',            emoji:'🫙', weight:'110ml',   price:80,  mrp:85,  category:'oil', stock:15 },
    { id:'oil_indulekha_100ml',     name:'Indulekha Bringha Oil',              image:'https://www.indulekha.co.in/cdn/shop/files/11997_S1-8901030929496.jpg?v=1692008732&width=1000',           emoji:'🫙', weight:'100ml',   price:450, mrp:468, category:'oil', stock:15 },
    { id:'oil_dabur_amla_70ml',     name:'Dabur Amla',                         image:'https://dukaan.b-cdn.net/500x500/webp/media/6e6b0cef-4df4-407a-bb9d-58cf22a15d29.jpeg',              emoji:'🫙', weight:'70ml',    price:20,  mrp:20,  category:'oil', stock:15 },
    { id:'oil_dabur_sarso_70ml',    name:'Dabur Sarso Amla',                   image:'https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/abb10e8f-6212-401d-a9e6-3469cd52a5e7/Dabur-Sarson-Amla-Hair-Oil.jpeg',             emoji:'🫙', weight:'70ml',    price:20,  mrp:20,  category:'oil', stock:15 },
    { id:'oil_coconut_42ml',        name:'Parachute Coconut Oil',              image:'https://5.imimg.com/data5/SELLER/Default/2021/1/WM/JX/IC/6883999/ba36fa80-1bf1-492a-a483-4e5ee0338cd9.jpg',           emoji:'🫙', weight:'42ml',    price:20,  mrp:20,  category:'oil', stock:15 },
    { id:'oil_dabur_amla_28ml',     name:'Dabur Amla',                         image:'https://storage.googleapis.com/shy-pub/262887/SKU-0580_0-1712656884448.png',              emoji:'🫙', weight:'28ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    { id:'oil_dabur_sarso_30ml',    name:'Dabur Sarso Amla',                   image:'https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/abb10e8f-6212-401d-a9e6-3469cd52a5e7/Dabur-Sarson-Amla-Hair-Oil.jpeg',             emoji:'🫙', weight:'30ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    { id:'oil_bajaj_24ml',          name:'Bajaj Almond Drop Oil',              image:'https://fmcghouse.com/cdn/shop/files/BAJAJALMONDHAIROIL19ML.webp?v=1746085524',             emoji:'🫙', weight:'24ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    { id:'oil_hair_care_30ml',      name:'Hair & Care Almond Oil',             image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/6/16/d242bf23-54d1-4c1f-a083-7c2072b114dc_483970_1.png',              emoji:'🫙', weight:'30ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    {id:'oil_navratan_180ml',name:'Navratan Oil',image:'https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/JUNE/30/z1aYZHM5_4cda060d455f4d36918b728037ebf1c9.jpg',emoji:'🧴',weight:'180ml',price:140,mrp:140,category:'oil',stock:15},
    {id:'oil_himgange_180ml',name:'Himgange Oil',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8_9JsGmvlM7yHKNDo0hxgZ8fozVF1qJ2H1zh9L5ZQMJnzdL_o36mGEhB&s=10',emoji:'🧴',weight:'180ml',price:140,mrp:140,category:'oil',stock:15},
    {id:'navratan-oil-1',name:'Navratan Oil',image:'https://5.imimg.com/data5/SELLER/Default/2025/12/568057713/SE/CB/AC/187750607/navratna-hair-oil-pouch.jpg',emoji:'🧴',price:1,mrp:1,category:'oil',stock:15},
    {id:'himgange-oil-1',name:'Himgange Oil',image:'https://cdn2.clevup.in/457601/SKU-0358_0-1761881105599.webp?format=webp',emoji:'🧴',price:1,mrp:1,category:'oil',stock:15},

    // ══ GHEE ══
    { id:'ghee_patanjali_900ml',    name:'Patanjali Cow Ghee',                 image:'https://www.patanjaliayurved.net/assets/product_images/additional_images/ghee1ltr4_1738324104.webp',       emoji:'🥛', weight:'900ml',   price:720, mrp:731, category:'oil', stock:20 },
    { id:'ghee_patanjali_450ml',    name:'Patanjali Cow Ghee',                 image:'https://www.patanjaliayurved.net/assets/product_images/additional_images/ghee500ml4(2)_1738136231.webp',      emoji:'🥛', weight:'450ml',   price:385, mrp:393, category:'oil', stock:20 },
    { id:'ghee_patanjali_950ml',    name:'Patanjali Cow Ghee',                 image:'https://www.bbassets.com/media/uploads/p/l/40308711_8-patanjali-cow-ghee.jpg',      emoji:'🥛', weight:'950ml',   price:925, mrp:932, category:'oil', stock:20 },
    { id:'ghee_mother_dairy_1l', name:'Mother Dairy Ghee',                  image:'https://www.kunaic.com/public/uploads/media/pZZbgzrbC31EKMlGIW3L-1772636974.webp',    emoji:'🥛', weight:'1ltr',   price:340, mrp:350, category:'oil', stock:20 },
     { id:'ghee_mother_dairy_500ml', name:'Mother Dairy Ghee',                  image:'https://www.bbassets.com/media/uploads/p/l/70001269_5-mother-dairy-ghee.jpg',    emoji:'🥛', weight:'500ml',   price:340, mrp:350, category:'oil', stock:20 },
   { id:'ghee_milkfood_1ltr',          name:'Milkfood Desi Ghee',        image:'https://www.bbassets.com/media/uploads/p/l/40026269_4-milkfood-rich-desi-ghee.jpg',                                            emoji:'🥛', weight:'1ltr',   price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_milkfood_500ml',         name:'Milkfood Desi Ghee',        image:'https://m.media-amazon.com/images/I/61KyrvA4jZL.jpg', emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_nutralite_500ml',        name:'Nutralite Desi Ghee',       image:'https://www.jjenterprise.co.in/wp-content/uploads/2024/06/best-ghee-tin.jpg',                                                           emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_madhusudan_500ml',       name:'Madhusudan Desi Ghee',      image:'https://image.aapkabazar.co/product/7304/1751011071759.png?type=png',                                                emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_paras_500ml',            name:'Paras Desi Ghee',           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSildH6Q1IbI0Knumww6S_l8IEAzbgYt1R3hcJOJRuTg&s=10',                                                   emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_amul_500ml',             name:'Amul Desi Ghee',            image:'https://shop.amul.com/s/62fa94df8c13af2e242eba16/65ba25a7a55405fa02e1881f/01-hero-image_amul-pure-ghee-tetrapack-1l.png',                                       emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_namaste_india_500ml',    name:'Namaste India Desi Ghee',   image:'https://gs1datakart.org/upload/product_image/8908001700/8908001700320/8908001700320_f.jpg',                                                                   emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },


    // ══ DRINKS ══
    { id:'drinks_gopal_thandai',    name:'Gopal Ji Thandai',                   image:'https://omjee.in/wp-content/uploads/2025/01/Artboard-10.jpg',        emoji:'🥤', weight:'500gm',   price:300, mrp:310, category:'drinks', stock:100 },
    { id:'drinks_glucond_dabur_1kg',name:'Dabur Glucon-D',                     image:'https://m.media-amazon.com/images/I/71YSy98qkhL.jpg',           emoji:'🥤', weight:'1 kg',    price:240, mrp:247, category:'drinks', stock:100 },
    { id:'drinks_glucond_tangy_1kg',name:'Glucon-D Tangy Orange',              image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/3/18/3dce56bf-6651-4b3f-b8c1-fc430dc427e4_9472_9.png',               emoji:'🥤', weight:'1 kg',    price:400, mrp:409, category:'drinks', stock:100 },
    { id:'drinks_glucond_nimbu',    name:'Glucon-D Nimbu Pani',                image:'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/fc3b60435d1f4295960971723d15988c.jpg?dpr=3&format=auto&w=412',           emoji:'🥤', weight:'200gm',   price:95,  mrp:99,  category:'drinks', stock:100 },
    { id:'drinks_glucond_orange',   name:'Glucon-D Tangy Orange',              image:'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/6889c7d89be347ea902d5973212af81f.jpg?dpr=3&format=auto&w=412',          emoji:'🥤', weight:'200gm',   price:95,  mrp:99,  category:'drinks', stock:100 },

    { id:'drinks_icecube',   name:'Ice Cube (Barf)',              image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680606/1000340529-Photoroom.png',          emoji:'🥤', weight:'1pkt',   price:30,  mrp:30,  category:'drinks', stock:100 },

    { id:'drinks_frooti_150ml',     name:'Frooti 150ml',                       image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/10/28/d8fbfcd3-33ce-499b-b3e6-6d2584b4c768_232_4.png',            emoji:'🥤', weight:'150 ml',  price:10,  mrp:12,  category:'drinks', stock:100 },
    { id:'drinks_arora_lemon',      name:'Arora Lemon',                        image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/3/5/adef9948-6eca-4388-9dfa-059154ed90a1_303427_4.png',       emoji:'🥤', weight:'160 ml',  price:10,  mrp:12,  category:'drinks', stock:80  },
    { id:'drinks_lahori_jeera',     name:'Lahori Jeera',                       image:'https://storage.googleapis.com/shy-pub/340140/1702992956988_51HY5LTAEcLACUF10001000QL80.jpeg',      emoji:'🥤', weight:'160 ml',  price:10,  mrp:12,  category:'drinks', stock:90  },
    { id:'drinks_smoodh_80ml',      name:'Smoodh 80ml',                        image:'https://m.media-amazon.com/images/I/61iUJ5-VyPL._AC_UF894,1000_QL80_.jpg',            emoji:'🥤', weight:'80 ml',   price:10,  mrp:12,  category:'drinks', stock:70  },
    { id:'drinks_appy_125ml',       name:'Appy Fizz 125ml',                    image:'https://5.imimg.com/data5/SELLER/Default/2023/3/294024732/WE/EJ/NY/143249945/parle-agro-appy-fizz-soft-drink.jpg',              emoji:'🥤', weight:'125 ml',  price:10,  mrp:15,  category:'drinks', stock:60  },
    { id:'drinks_smoodh_150ml',     name:'Smoodh 150ml',                       image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/12/17/a661178c-4a23-4634-8255-a6009d7d7817_X0FSWX9S3Z_MN_16122025.png',           emoji:'🥤', weight:'150 ml',  price:20,  mrp:25,  category:'drinks', stock:50  },
    { id:'drinks_smoodh_lassi',     name:'Smoodh Lassi',                       image:'https://www.zipgro.in/cdn/shop/files/rn-image_picker_lib_temp_1cfc4870-3ca5-41eb-be84-a152a8fe9e06.webp?v=1771339922&width=1920',      emoji:'🥤', weight:'180 ml',  price:20,  mrp:25,  category:'drinks', stock:45  },
    { id:'drinks_real_180ml',       name:'Real Juice 180ml',                   image:'https://www.bbassets.com/media/uploads/p/l/265845_2-real-fruit-power-juice-mixed-fruits.jpg',              emoji:'🥤', weight:'180 ml',  price:20,  mrp:25,  category:'drinks', stock:55  },
    { id:'drinks_pulpy_orange',     name:'Pulpy Orange',                       image:'https://www.bbassets.com/media/uploads/p/l/40371237_1-minute-maid-pulpy-orange-juice.jpg',       emoji:'🥤', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:65  },
    { id:'drinks_sting',            name:'Sting',                              image:'https://image.aapkabazar.co/product/6763/1777355163478.jpg?type=png',             emoji:'⚡', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:80  },
    { id:'drinks_coca_250ml',       name:'Coca Cola 250ml',                    image:'https://www.bbassets.com/media/uploads/p/l/94411_2-coca-cola-soft-drink.jpg',              emoji:'🥤', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:100 },
    { id:'drinks_fanta_250ml',      name:'Fanta 250ml',                        image:'https://5.imimg.com/data5/SELLER/Default/2023/5/308684122/ZV/TL/JK/113300712/250ml-fanta-carbonated-drinks.jpeg',             emoji:'🍊', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:75  },
    { id:'drinks_limca_250ml',      name:'Limca 250ml',                        image:'https://cdn-cmimgopt-dyn.citymall.live/cmimgopt-62ba2ccd-2f58-41ad-a64f-23d2924b5264.webp?w=960&q=75',             emoji:'🍋', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:60  },
    { id:'drinks_mtn_dew_250ml',    name:'Mountain Dew',                       image:'https://www.bbassets.com/media/uploads/p/l/40352542_1-mountain-dew-soft-drink.jpg',       emoji:'💚', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:70  },
    { id:'drinks_pepsi_400ml',      name:'Pepsi 400ml',                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bAEgG1fkPvEtKym48UrfcO9o544_3VaY-ryRmYq9gEdKCs_aByuySvB1&s=10',             emoji:'🥤', weight:'400 ml',  price:20,  mrp:25,  category:'drinks', stock:85  },
    { id:'drinks_coconut_250ml',    name:'Coconut Water',                      image:CLOUDINARY_BASE+'/image/drink_coconut.png',           emoji:'🥥', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:40  },
    { id:'drinks_coca_740ml',       name:'Coca Cola 740ml',                    image:'https://m.media-amazon.com/images/I/61CzuD9j7+L.jpg',             emoji:'🥤', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:50  },
    { id:'drinks_sprite_740ml',     name:'Sprite 740ml',                       image:'https://image.aapkabazar.co/product/2206/1772864617745.png?type=webp&width=600',           emoji:'🍃', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:45  },
    { id:'drinks_fanta_740ml',      name:'Fanta 740ml',                        image:'https://www.bbassets.com/media/uploads/p/l/60000931_10-fanta-soft-drink-orange-flavour.jpg',            emoji:'🍊', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:40  },
    { id:'drinks_thumsup_740ml',    name:'Thums Up 740ml',                     image:'https://assets.hyperpure.com/data/images/products/71bceb4991dcfd8285cdc1cdab15ce13.webp',          emoji:'👍', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:55  },
    { id:'drinks_limca_740ml',      name:'Limca 740ml',                        image:'https://image.aapkabazar.co/product/6840/1774340480654.jpeg?type=webp&width=600',            emoji:'🍋', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:35  },
    { id:'drinks_maaza_600ml',      name:'Maaza 600ml',                        image:'https://rukminim2.flixcart.com/image/300/300/xif0q/drinks-juice/u/x/7/-original-imahq7fja7tdyg5q.jpeg',             emoji:'🥭', weight:'600 ml',  price:40,  mrp:50,  category:'drinks', stock:60  },
    { id:'drinks_coca_1l',          name:'Coca Cola 1L',                       image:'https://cdn.shopify.com/s/files/1/0523/9934/1736/products/61y4HOllrdL._SX679_0af22f5f-841b-42d5-970f-decbfe2a9ffa.jpg?v=1662543570',             emoji:'🥤', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:40  },
    { id:'drinks_sprite_1l',        name:'Sprite 1L',                          image:'https://5.imimg.com/data5/SELLER/Default/2026/2/582822929/RU/AY/GE/31550288/whatsapp-image-2026-02-10-at-15-23-03-500x500.jpeg',           emoji:'🍃', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:35  },
    { id:'drinks_fanta_1l',         name:'Fanta 1L',                           image:'https://5.imimg.com/data5/SELLER/Default/2025/3/499579525/BX/CP/TZ/21524088/1-l-fanta-cold-drink.jpg',            emoji:'🍊', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:30  },
    { id:'drinks_thumsup_1l',       name:'Thums Up 1L',                        image:'https://m.media-amazon.com/images/I/81iju7Ed8hL._AC_UF350,350_QL80_.jpg',          emoji:'👍', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:38  },
    { id:'drinks_limca_1l',         name:'Limca 1L',                           image:'https://m.media-amazon.com/images/I/61n4pHXydrL.jpg',            emoji:'🍋', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:25  },
    { id:'drinks_maaza_1l',         name:'Maaza 1L',                           image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/d1366a12-1e2c-453e-ad37-3524a624e141/Maaza.jpeg',             emoji:'🥭', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:45  },
    { id:'drinks_coca_2l',          name:'Coca Cola 2L',                       image:'https://cdn.dotpe.in/longtail/store-items/8839286/aczH2HI4.webp',             emoji:'🥤', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:30  },
    { id:'drinks_sprite_2l',        name:'Sprite 2L',                          image:'https://image.aapkabazar.co/product/4565/1731307305707.png?type=webp&width=600',           emoji:'🍃', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:25  },
    { id:'drinks_fanta_2l',         name:'Fanta 2L',                           image:'https://www.bbassets.com/media/uploads/p/m/40222668-2_1-fanta-soft-drink-orange-flavoured.jpg',            emoji:'🍊', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:20  },
    { id:'drinks_thumsup_2l',       name:'Thums Up 2L',                        image:'https://www.samyaksupermart.com/cdn/shop/files/251039-5_7-thums-up-soft-drink.jpg?v=1744355538&width=1445',          emoji:'👍', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:28  },
    { id:'drinks_limca_2l',         name:'Limca 2L',                           image:'https://dukaan.b-cdn.net/700x700/webp/557397/11c767b3-157d-42dd-848a-bca399da1903/1607186689476.png',            emoji:'🍋', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:22  },
    { id:'drinks_maaza_2l',         name:'Maaza 2L',                           image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/rc-upload-1785470076523-885.png',             emoji:'🥭', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:18  },
    { id:'drinks_frooti_2l',        name:'Frooti 2L',                          image:'https://www.bbassets.com/media/uploads/p/l/40194542_5-frooti-mango-drink.jpg',           emoji:'🥤', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:20  },
    { id:'drinks_real_250g',        name:'Real Juice 250g',                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHH1QGjWLZmncsE_8XCd67bqKnNx754Cgeyl9pItungsHGdTizmb0wb4&s=10',             emoji:'🥤', weight:'250 g',   price:100, mrp:120, category:'drinks', stock:15  },

{
  id: 'drinks_redbull',
  name: 'Red Bull',
  image: 'https://www.bbassets.com/media/uploads/p/l/100393567_11-red-bull-energy-drink.jpg',
  emoji: '🐂',
  weight: '250 ml',
  price: 120,
  mrp: 150,
  category: 'drinks',
  stock: 20
},


    { id:'drinks_amul_kool',        name:'Amul Kool',                          image:'https://image.aapkabazar.co/product/6483/1698125011014.png?type=png',         emoji:'🥛', weight:'180 ml',  price:30,  mrp:35,  category:'drinks', stock:50  },
    { id:'drinks_mogu_mogu',        name:'Mogu Mogu',                          image:'https://sunbeamventures.in/cdn/shop/files/MangoMM.jpg?v=1778762405',         emoji:'🥤', weight:'320 ml',  price:70,  mrp:85,  category:'drinks', stock:30  },
    { id:'drinks_campa_energy',     name:'Campa Energy',                       image:'https://www.bbassets.com/media/uploads/p/xl/40338350_2-campa-energy-gold-boost.jpg',             emoji:'⚡', weight:'250 ml',  price:35,  mrp:40,  category:'drinks', stock:40  },
    { id:'drinks_zyro_400ml',       name:'Zyro 400ml',                         image:'https://www.bbassets.com/media/uploads/p/l/40363328_2-zyro-green-apple-flavoured-drink.jpg',              emoji:'🥤', weight:'400 ml',  price:60,  mrp:75,  category:'drinks', stock:35  },
    { id:'drinks_zyro_lemon',       name:'Zyro Lemon',                         image:'https://zyroindia.com/cdn/shop/files/Slide1_c0e3f28e-0611-46f8-a64b-f184309e85d2.jpg?v=1772192210&width=2200',             emoji:'🍋', weight:'400 ml',  price:60,  mrp:75,  category:'drinks', stock:30  },
    { id:'drinks_zyro_mango',       name:'Zyro Strawberry ',                         image:'https://www.bbassets.com/media/uploads/p/l/40363326_2-zyro-strawberrey-watermelon-flavoured-drink.jpg',             emoji:'🥭', weight:'400 ml',  price:60,  mrp:75,  category:'drinks', stock:28  },
    { id:'drinks_roohafza',         name:'Roohafza',                           image:'https://www.bbassets.com/media/uploads/p/xl/256091_2-roohafza-sharbat.jpg',                emoji:'🥭', weight:'750 ml',  price:140, mrp:165, category:'drinks', stock:28  },
    { id:'drinks_khus_syrup',       name:'Shahi Khus Syrup',                   image:'https://m.media-amazon.com/images/I/81SIsjmyDEL.jpg',              emoji:'🥭', weight:'700 ml',  price:170, mrp:180, category:'drinks', stock:28  },
    { id:'drinks_bisleri_200ml',    name:'Bisleri Pani ',                      image:'https://www.bbassets.com/media/uploads/p/xl/197348_4-bisleri-mineral-water.jpg',             emoji:'💧', weight:'200 ml',  price:5,   mrp:7,   category:'drinks', stock:150 },
    { id:'drinks_bisleri_1l',       name:'Bisleri Pani ',                         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkffr8j3SOGXiHyCxogKrNC71f4AKnOplY0DPRzguwrg&s=10',          emoji:'💧', weight:'1 L',     price:20,  mrp:25,  category:'drinks', stock:80  },
    { id:'drinks_bisleri_20l',      name:'Bisleri Pani Jar ',                        image:'https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dw7f969054/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/Bisleri_Ecom_Web_20L_01.png',          emoji:'💧', weight:'20 L',    price:120, mrp:140, category:'drinks', stock:15  },
     { id:'drinks_kinley_1l',        name:'Kinley Pani ',                          image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/d615dc08-ba72-4f86-b902-533a9c6433a8/Kinley-Packaged-Drinking-Water-Combo.jpeg',           emoji:'💧', weight:'1 L',     price:20,  mrp:20,  category:'drinks', stock:40  },
    { id:'drinks_kinley_2l',        name:'Kinley Pani ',                          image:'https://m.media-amazon.com/images/I/61cQHS2MMeL.jpg',           emoji:'💧', weight:'2 L',     price:30,  mrp:35,  category:'drinks', stock:40  },
      { id:'drinks_nmpani_2l',        name:'Aaro Filter Pani Jar',                          image:CLOUDINARY_BASE+'/image/drink_kinley2.png',           emoji:'💧', weight:'20 L',     price:30,  mrp:30,  category:'drinks', stock:40  },

    // ══ TEA & COFFEE ══
    { id:'tea_kashmirichai_kahva_1kg', name:'Kashmiri Chai (kahva)', image:CLOUDINARY_BASE+'/image/ch_redlabel1kg.png', emoji:'☕', weight:'1 kg', price:525, mrp:530, category:'tea', stock:10 },
     { id:'tea_kashmirichai_kahva_500gm', name:'Kashmiri Chai (kahva)', image:CLOUDINARY_BASE+'/image/ch_redlabel1kg.png', emoji:'☕', weight:'500gm', price:525, mrp:530, category:'tea', stock:10 },
    { id:'tea_red_label_1kg',       name:'Red Label Natural Care',             image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/62d512cb-5427-4c11-b68b-c00518710b08/Brooke-Bond-Red-Label-Natural-Care-Tea.jpg',        emoji:'☕', weight:'1 kg',    price:525, mrp:530, category:'tea', stock:10 },
    { id:'tea_wagh_bakri_500g',     name:'Wagh Bakri Premium Leaf Tea',        image:'https://www.bbassets.com/media/uploads/p/xl/30009197_7-wagh-bakri-premium-leaf-tea.jpg',     emoji:'☕', weight:'500 gm',  price:320, mrp:325, category:'tea', stock:10 },
    { id:'tea_tata_premium_500g',   name:'Tata Tea Premium',                   image:'https://www.bbassets.com/media/uploads/p/l/264446_7-tata-tea-premium-tea.jpg',      emoji:'☕', weight:'500 gm',  price:235, mrp:240, category:'tea', stock:10 },
    { id:'tea_taaza_250g',          name:'Taaza',                              image:'https://www.bigbasket.com/media/uploads/flatpages/mailer-images-aug/40002086_100626_6.jpg',        emoji:'☕', weight:'250gm',   price:65,  mrp:65,  category:'tea', stock:10 },
    { id:'tea_tata_premium_250g',   name:'Tata Tea Premium',                   image:'https://www.bbassets.com/media/uploads/p/l/264445_4-tata-tea-premium-tea.jpg',      emoji:'☕', weight:'250 gm',  price:120, mrp:125, category:'tea', stock:10 },
    { id:'tea_wagh_bakri_250g',     name:'Wagh Bakri Premium Leaf Tea',        image:'https://www.bbassets.com/media/uploads/p/l/40052450_8-wagh-bakri-leaf-tea.jpg',  emoji:'☕', weight:'250 gm',  price:160, mrp:165, category:'tea', stock:10 },
    { id:'tea_agni_250g',           name:'Tata Tea Agni',                      image:'https://m.media-amazon.com/images/I/711eLs5VcjL.jpg',               emoji:'☕', weight:'250 gm',  price:50,  mrp:50,  category:'tea', stock:10 },
    { id:'tea_today_star_250g',     name:'Today Star',                         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv3XEalxWaLj2fGmMH3RPqlI43mgC9HIAhl8uoFB3BI9gIJKAiDKakFBY&s=10',         emoji:'☕', weight:'250 gm',  price:60,  mrp:60,  category:'tea', stock:10 },
    { id:'tea_taj_mahal_250g',      name:'Taj Mahal Tea',                      image:'https://m.media-amazon.com/images/I/71wsQztevDL._AC_UF894,1000_QL80_.jpg',       emoji:'☕', weight:'250 gm',  price:175, mrp:180, category:'tea', stock:10 },
    { id:'tea_wagh_spiced_250g',    name:'Wagh Bakri Spiced Tea',              image:'https://rukmini1.flixcart.com/image/1500/1500/xif0q/tea/1/s/o/250-spiced-tea-1-box-regular-tea-wagh-bakri-leaves-granules-original-imagkb4jfsa7bc7c.jpeg?q=70', emoji:'☕', weight:'250 gm', price:160, mrp:165, category:'tea', stock:10 },
    { id:'tea_red_label_250g',      name:'Broke Bond Red Label',               image:'https://www.bbassets.com/media/uploads/p/l/266575_20-red-label-tea.jpg',          emoji:'☕', weight:'250 gm',  price:115, mrp:120, category:'tea', stock:10 },
    { id:'tea_tetley_100pcs',       name:'Tetley Tea Bags',                    image:'https://image.aapkabazar.co/product/659/1762440875683.png?type=png',              emoji:'☕', weight:'100 Pcs', price:210, mrp:220, category:'tea', stock:10 },
    { id:'tea_taj_bag_25pcs',       name:'Taj Mahal Tea Bags',                 image:'https://www.bbassets.com/media/uploads/p/l/266595-5_1-taj-mahal-tea.jpg',   emoji:'☕', weight:'25 pcs',  price:75,  mrp:80,  category:'tea', stock:10 },
    { id:'tea_lipton_green_100g',   name:'Lipton Green Tea',                   image:'https://m.media-amazon.com/images/I/51S0lF0r00L._AC_UF350,350_QL80_.jpg',             emoji:'☕', weight:'100 gm',  price:165, mrp:170, category:'tea', stock:10 },
    { id:'tea_tata_premium_100g',   name:'Tata Tea Premium',                   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGcPm51h0utPp9ChvUHiZrX-VbgNEvSKoaMWnzIWe-yEvxHQoQ_bzld31&s=10',      emoji:'☕', weight:'100 gm',  price:35,  mrp:35,  category:'tea', stock:10 },
    { id:'tea_morbagh_100g',        name:'Morbagh Daily Tea',                  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5cQWAMSkbdaFTlTEAQQsoQ4wZdGGWUxBAtSHrFf2U-DxqHdRzTP7hMLX&s=10',            emoji:'☕', weight:'100 gm',  price:45,  mrp:45,  category:'tea', stock:10 },
    { id:'tea_uttam_250g',          name:'Uttam Tea',                          image:'https://m.media-amazon.com/images/I/81UqzKgIzVL.jpg',              emoji:'☕', weight:'250 gm',  price:145, mrp:150, category:'tea', stock:10 },
    { id:'tea_waghbakri_elaichi_20',name:'Waghbakri Elaichi Tea',              image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F3235%2F1732971706028.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',       emoji:'☕', weight:'55 gm',   price:20,  mrp:20,  category:'tea', stock:10 },
    { id:'tea_today_premium_20',    name:'Today Premium',                      image:'https://5.imimg.com/data5/XK/TN/MY-696345/today-1-kg-premium-tea.jpg',            emoji:'☕', weight:'55 gm',   price:20,  mrp:20,  category:'tea', stock:10 },
    { id:'tea_tata_premium_10',     name:'Tata Tea Premium',                   image:'https://www.bbassets.com/media/uploads/p/l/264445_4-tata-tea-premium-tea.jpg',         emoji:'☕', weight:'25 gm',   price:10,  mrp:10,  category:'tea', stock:10 },
    { id:'tea_agni_elaichi_10',     name:'Tata Tea Agni Elaichi Chai',         image:'https://cdn2.clevup.in/448409/SKU-0090_0-1765563158562.png?width=600&format=webp',             emoji:'☕', weight:'25 gm',   price:10,  mrp:10,  category:'tea', stock:10 },

    // ══ SPICES & MASALA ══

{id:'spice_kashmirimirchpowder_1kg',name:'Kashmiri mirch Powder',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOCbVR74HBK0LrMxuGaF0Q9OzO973ncZost5Eh2Kh7RtgnWx5PimUoyq4&s=10',emoji:'🌶️',weight:'1kg',price:700,mrp:700,category:'spices',stock:20},
{id:'spice_kashmirimirchpowder_1kg',name:'Kashmiri mirch Powder',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaaZ-Tl17Zg1NPm-QrX_GOzF-YlGAcY31pvvUjqXtmNa-iAQ4UE479qW_&s=10',emoji:'🌶️',weight:'500gm',price:350,mrp:350,category:'spices',stock:20},
{id:'spice_sukhimirch_100gm',name:'Sukhi mirch',image:'https://familyemart.com/old/wp-content/uploads/2023/03/Dry-Red-Chilli.jpg',emoji:'🌶️',weight:'100gm',price:40,mrp:40,category:'spices',stock:20},
{id:'spice_saufpowder_1kg',name:'Sauf Powder',image:'https://i0.wp.com/veganicmart.com/wp-content/uploads/2022/09/fennel-powder-2-jpg.webp?fit=500%2C500&ssl=1',emoji:'🌶️',weight:'1kg',price:400,mrp:400,category:'spices',stock:20},
{id:'spice_saufpowder_500gm',name:'Sauf Powder',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gnIqLaoneBh7tSKaF7J0nFN8gh-U9WvZmVunEJK5Qv9ycIhmwuc0QHSw&s=10',emoji:'🌶️',weight:'500gm',price:400,mrp:400,category:'spices',stock:20},

{id:'spice_elaichi_100gm',name:'Elaichi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2YjfGg5Dc_311qy9AZDER91-CyYBY8-_Iis6k2O1-0di9RENGNz8joGZ&s=10',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_badi_elaichi_100gm',name:'Badi elaichi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzhm0XHYDI89set-qirRN4tJ4XGSImGRRvF1XmZDvyowYu_yDOcafGS4&s=10',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_laung_100gm',name:'Laung',image:'https://m.media-amazon.com/images/I/51+VxjPrqrL._AC_UF894,1000_QL80_.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_meetha_soda_100gm',name:'Metha soda',image:'https://rukminim3.flixcart.com/image/480/640/l1fc0i80/baking-ingredient/1/w/q/100-baking-soda-meetha-soda-baking-powder-used-for-cooking-original-imagczt5jzymsnjf.jpeg?q=80',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_kali_mirch_100gm',name:'Kali mirch',image:'https://sindhidryfruits.live/cdn/shop/files/kalimirch_1bf9b76a-9b7f-4a57-8036-943ccd1e7701.jpg?v=1769774361&width=3840',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_kalonji_100gm',name:'Kalonji',image:'https://media.post.rvohealth.io/wp-content/uploads/2020/07/kalonji-732x549-thumbnail-732x549.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_ajwain_100gm',name:'Ajwain',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGzMiQ-_q1ykUh5IYP7tzV1NPhT3vLMBXaCHHC0bX6916U7oPBw39DSU&s=10',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_jeera_100gm',name:'Jeera',image:'https://naubaharmasale.com/cdn/shop/files/jeera-sabut-1-kg-411595_1200x1200.png?v=1749605793',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_methidana_100gm',name:'Methi dana ',image:'https://odishadesihaat.com/cdn/shop/files/Methi_dana_in_Use.png?v=1779686523&width=1445',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_Dalchini_100gm',name:'Dalchini ',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jJnBAzNxxWoOzvJfWR2azs5otkKMp-dIv4BddKfYiHNa70IDkncPZEXn&s=10',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_sauf_100gm',name:'Sauf',image:'https://bharatmasala.net/cdn/shop/files/Variyali-Small-sauf-fennel-seeds-Lakhnavi-03.png?v=1746140970&width=1445',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},

   {id:'spice_everest_kutilal_powder',name:'Everest Kutilal Powder',image:'https://m.media-amazon.com/images/I/710yOLx+h0L._AC_UF894,1000_QL80_.jpg',emoji:'🌶️',weight:'250gm',price:90,mrp:100,category:'spices',stock:20},
    { id:'spice_manglam_haldi',     name:'Manglam Haldi Powder',               image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632326/IMG_20260616_210409-Photoroom.png',                 emoji:'🌶️', weight:'250 gm',  price:90,  mrp:100, category:'spices', stock:20 },
    { id:'spice_mdh_deggi_100g',    name:'MDH Deggi Mirch',                    image:'https://www.bbassets.com/media/uploads/p/l/260799_3-mdh-powder-deggi-mirch.jpg',        emoji:'🌶️', weight:'100 gm',  price:120, mrp:125, category:'spices', stock:20 },
    { id:'spice_mdh_chana_100g',    name:'MDH Chana Masala',                   image:'https://www.bbassets.com/media/uploads/p/l/100004426_2-mdh-masala-chana.jpg',        emoji:'🌶️', weight:'100 gm',  price:85,  mrp:92,  category:'spices', stock:20 },
    { id:'spice_mdh_meat_100g',     name:'MDH Meat Masala',                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujWFR03Gt8maLUieHqx-KbXtpRaDGBKTOb4bwxMSL_Udn-IYQGWF22vM&s=10',         emoji:'🌶️', weight:'100 gm',  price:90,  mrp:100, category:'spices', stock:20 },
    { id:'spice_mdh_chicken_100g',  name:'MDH Chicken Masala',                 image:'https://www.bbassets.com/media/uploads/p/xl/260798_4-mdh-masala-chicken.jpg',      emoji:'🌶️', weight:'100 gm',  price:85,  mrp:92,  category:'spices', stock:20 },
    { id:'spice_mdh_chat_100g',     name:'MDH Chunkey Chat Masala',            image:'https://assets.hyperpure.com/data/images/products/6c38ea2d1fd308a2a025a91dec45dd28.png',         emoji:'🌶️', weight:'100 gm',  price:88,  mrp:94,  category:'spices', stock:20 },
    { id:'spice_mdh_kitchen_100g',  name:'MDH Kitchen King',                   image:'https://www.bbassets.com/media/uploads/p/l/100004502_7-mdh-masala-kitchen-king.jpg', emoji:'🌶️', weight:'100 gm',  price:90,  mrp:100, category:'spices', stock:20 },
    { id:'spice_mdh_garam_100g',    name:'MDH Garam Masala',                   image:'https://www.bbassets.com/media/uploads/p/l/100004473_4-mdh-masala-garam.jpg',        emoji:'🌶️', weight:'100 gm',  price:105, mrp:115, category:'spices', stock:20 },
    { id:'spice_mdh_methi_100g',    name:'MDH Kasoori Methi',                  image:'https://assets.hyperpure.com/data/images/products/ef1bc4779b541755ec80c1de41d59aaa.jpg',          emoji:'🌶️', weight:'100 gm',  price:50,  mrp:56,  category:'spices', stock:20 },
    { id:'spice_mdh_kashmiri_100g', name:'MDH Kashmiri Mirch',                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHbskdWfCWUDmIHKI23Ai2sKG0zSnT_HxkVbLFm4OCdixJpWQJn37sMPd&s=10', emoji:'🌶️', weight:'100 gm', price:120, mrp:125, category:'spices', stock:20 },
    { id:'spice_kbm_haldi_100g',    name:'KBM Haldi Powder',                   image:'https://assets.hyperpure.com/data/images/products/fb7eb3d283b42e8730aaf9be650f6af4.png',        emoji:'🌶️', weight:'100 gm',  price:35,  mrp:40,  category:'spices', stock:20 },
    { id:'spice_kbm_mirch_100g',    name:'KBM Kutti Lal Mirch Powder',         image:'https://kbmfoods.com/cdn/shop/files/Red-Chilli-Kutti.png?v=1728887760',  emoji:'🌶️', weight:'100 gm',  price:50,  mrp:54,  category:'spices', stock:20 },
    { id:'spice_kbm_dhaniya_100g',  name:'KBM Dhaniya Powder',                 image:'https://assets.hyperpure.com/data/images/products/5034e437132a3599e7ffffe6f0b9b1cf.png',   emoji:'🌶️', weight:'100 gm',  price:30,  mrp:34,  category:'spices', stock:20 },
    { id:'spice_kbm_amchoor_100g',  name:'KBM Amchoor Powder',                 image:'https://kbmfoods.com/cdn/shop/files/1_6994da16-e023-4b59-b8d5-6aec87917eb1.png?v=1769071855',    emoji:'🌶️', weight:'100 gm',  price:50,  mrp:65,  category:'spices', stock:20 },
    { id:'spice_kbm_lal_100g',      name:'KBM Lal Mirch Powder',               image:'https://assets.hyperpure.com/data/images/products/97b4d389efcc174a49440707c4ea5abb.png',        emoji:'🌶️', weight:'100 gm',  price:50,  mrp:54,  category:'spices', stock:20 },
    { id:'spice_everest_chicken_50g',name:'Everest Chicken Masala',            image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/12/18/d24e9bc8-d0dc-4a36-8957-3865e3222487_QWRDJ2DL28_MN_18122025.png',      emoji:'🌶️', weight:'50gm',    price:45,  mrp:48,  category:'spices', stock:20 },
    { id:'spice_sds_chhole',        name:'SDS Chhole/Chana Masala',            image:'https://www.sdsmasala.com/cdn/shop/files/Artboard1copy29.jpg?v=1759814871&width=1445',       emoji:'🌶️', weight:'70gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_pav',           name:'SDS Pav Bhaji Masala',               image:'https://image.aapkabazar.co/product/1372/1735374976139.png?type=webp&width=600',          emoji:'🌶️', weight:'50gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_matar_paneer',  name:'SDS Matar Paneer Masala',            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubgHohmhVK8JYU3WVSzFO2ctO0za-8tpYo6mk7QndFq8bbcpYOsTxl1c&s=10', emoji:'🌶️', weight:'40gm',    price:35,  mrp:35,  category:'spices', stock:20 },
    { id:'spice_sds_shahi_paneer',  name:'SDS Shahi Paneer Masala',            image:'https://image.aapkabazar.co/product/1376/1732175348686.png?type=webp&width=600', emoji:'🌶️', weight:'40gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_bhindi',        name:'SDS Bhindi/Karela Masala',           image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F1935%2F1732274256772.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',       emoji:'🌶️', weight:'50gm',    price:35,  mrp:35,  category:'spices', stock:20 },
    { id:'spice_sds_soya_chaap',    name:'SDS Soya Chaap Masala',              image:'https://m.media-amazon.com/images/I/61nFrrenyQL.jpg',   emoji:'🌶️', weight:'40gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_sambhar',       name:'SDS Sambhar Masala',                 image:'https://image.aapkabazar.co/product/1375/1732338585640.png?type=webp&width=600',      emoji:'🌶️', weight:'50gm',    price:35,  mrp:35,  category:'spices', stock:20 },
    { id:'spice_sds_rajma',         name:'SDS Rajma Masala',                   image:'https://www.sdsmasala.com/cdn/shop/files/1_4e381fd5-db8b-4526-9aac-dc1bee061380.jpg?v=1759814133',          emoji:'🌶️', weight:'70gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_aloo',          name:'SDS Aloo Sabji Masala',              image:'https://m.media-amazon.com/images/I/81TDUmeuGaL.jpg',         emoji:'🌶️', weight:'60gm',    price:40,  mrp:40,  category:'spices', stock:20 },
    { id:'spice_sds_methi_sauth',   name:'SDS Methi Sauth Masala',             image:'https://m.media-amazon.com/images/I/812SzcDHLEL.jpg',  emoji:'🌶️', weight:'100gm',   price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_biryani',       name:'SDS Pulav/Biryani Masala',           image:'https://image.aapkabazar.co/product/1373/1732273306940.png?type=webp&width=600',      emoji:'🌶️', weight:'50gm',    price:70,  mrp:75,  category:'spices', stock:20 },


{id:'spice_fennel_seeds',name:'Sauf Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537334/IMG_20260615_205557.png',emoji:'🌿',weight:'100gm',price:40,mrp:75,category:'spices',stock:20},
{id:'spice_flax_seeds',name:'Arsi Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537497/IMG_20260615_210117.png',emoji:'🌿',weight:'200gm',price:40,mrp:50,category:'spices',stock:20},
{id:'spice_cumin_seeds',name:'Jeera Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537498/IMG_20260615_210052.png',emoji:'🌿',weight:'100gm',price:45,mrp:60,category:'spices',stock:20},
{id:'spice_black_cumin',name:'Shah Jeera Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537498/IMG_20260615_210035.png',emoji:'🌿',weight:'100gm',price:50,mrp:60,category:'spices',stock:20},
{id:'spice_fenugreek_seeds',name:'Methi Dana Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537280/IMG_20260615_204307.png',emoji:'🌿',weight:'100gm',price:30,mrp:40,category:'spices',stock:20},
{id:'spice_black_mustard',name:'Kali Sarson Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537282/1000339788-Photoroom.png',emoji:'🌿',weight:'100gm',price:35,mrp:40,category:'spices',stock:20},
{id:'spice_yellow_mustard',name:'Peeli Sarson Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537332/1000339781-Photoroom.png',emoji:'🌿',weight:'100gm',price:35,mrp:40,category:'spices',stock:20},
{id:'spice_black_sesame',name:'Kala Til Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537328/1000339782-Photoroom.png',emoji:'🌿',weight:'100gm',price:35,mrp:40,category:'spices',stock:20},
{id:'spice_white_sesame',name:'Safed Til Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537497/IMG_20260615_210011.png',emoji:'🌿',weight:'100gm',price:35,mrp:40,category:'spices',stock:20},
{id:'spice_tamarind',name:'Imli Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537495/IMG_20260615_205957.png',emoji:'🌿',weight:'100gm',price:20,mrp:30,category:'spices',stock:20},


    { id:'spice_10_shahi_biryani',  name:'Shahi Biryani Masala',               image:'https://m.media-amazon.com/images/I/71HV3pak5FL._AC_UF894,1000_QL80_.jpg', emoji:'🌶️', weight:'8 gm',    price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_shahi_paneer',   name:'Shahi Paneer Masala',                image:'https://m.media-amazon.com/images/I/712QHJApS+L.jpg',  emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_pav_bhaji',      name:'Pav Bhaji Masala',                   image:'https://5.imimg.com/data5/ANDROID/Default/2024/3/402545683/BU/DU/IK/14029277/product-jpeg.jpg',     emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_meat',           name:'Meat Masala',                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCv1LyYqNcKBRST68WSn_7bm_DvawkttqauIXVB3GgJoe2Wxn0W7TY0GwI&s=10',          emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_sambhar',        name:'Sambhar Masala',                     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ARPJ0EsONg5C1tKhHq38lsUYWjCPzNcpT4TECRJQ3A&s',       emoji:'🌶️', weight:'12 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_kitchen',        name:'Kitchen King Masala',                image:'https://5.imimg.com/data5/SELLER/Default/2024/8/440443071/VA/RB/TV/60311052/everest-kitchen-king-masala-500x500.jpeg',       emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_sabji',          name:'Sabji Masala',                       image:'https://storage.googleapis.com/hul-retailer-propics/ondc/IMG_20230915_125033.jpg.png',         emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_chhole',         name:'Chhole Masala',                      image:'https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2019-08-29/1939_Ct4Nj9E.jpg',        emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_kashmiri_mirch', name:'KBM Kashmiri Mirch',                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOVk49VxPe498cDZ2Uc05tGtVltrTZv9UGP-zFn-6zA&s', emoji:'🌶️', weight:'5 gm',    price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_chicken',        name:'Chicken Masala',                     image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/12/18/05bca567-53f9-4420-8775-bec36c7deb1c_9FS374TQJO_MN_18122025.png',       emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
     { id:'spice_10_garam',        name:'Garam Masala',                     image:'https://www.bbassets.com/media/uploads/p/l/268943-2_2-everest-garam-masala.jpg',       emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },  
    { id:'spice_10_matar_paneer',   name:'Bharat Matar Paneer Masala',         image:'https://5.imimg.com/data5/SELLER/Default/2022/4/TI/BO/VF/3232760/bharat-matar-paneer-masala.JPG',  emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_catch_chat',     name:'Catch Chunkey Chat Masala',          image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F6912%2F1695130427486.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',          emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_everest_chat',   name:'Everest Chunkey Chat Masala',        image:'https://assets.hyperpure.com/data/images/products/f37c6649f16df18077e4030f816da7c0.png',         emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_black_pepper',   name:'Catch Black Pepper Powder',          image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F2591%2F1698384809086.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',  emoji:'🌶️', weight:'5 gm',    price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_20_black_pepper',   name:'Chukde Black Pepper Powder',         image:'https://m.media-amazon.com/images/I/615z7S6cOIL._AC_UF350,350_QL80_.jpg',  emoji:'🌶️', weight:'10 gm',   price:20,  mrp:20,  category:'spices', stock:20 },

 { id:'pack_meat_masala_5', name:'Meat Masala pack', image:'https://5.imimg.com/data5/SELLER/Default/2022/3/GP/QV/JV/148540348/everest-meat-masala-08gm-mrp-05.png', emoji:'🌶️', weight:'5 gm', price:5, mrp:5, category:'spices', stock:20 },
{ id:'pack_chicken_masala_5', name:'Chicken Masala pack', image:'https://www.bbassets.com/media/uploads/p/l/40290698_1-everest-everest-chicken-masala-m.jpg', emoji:'🌶️', weight:'5 gm', price:5, mrp:5, category:'spices', stock:20 },
{ id:'pack_garam_masala_5', name:'Garam Masala pack', image:'https://5.imimg.com/data5/ANDROID/Default/2023/6/313608987/XC/CI/BY/61029556/product-jpeg.jpg', emoji:'🌶️', weight:'5 gm', price:5, mrp:5, category:'spices', stock:20 },
    

    // ══ BISCUITS & SNACKS ══
    { id:'snack_babaji_rusk_400g',  name:'Babaji Rusk',                        image:CLOUDINARY_BASE+'/image/babajirusk.png',              emoji:'🍪', weight:'400gm',   price:75,  mrp:98,  category:'snacks', stock:20 },
   { id:'snack_gwalior_rusk_55',  name:'Gwalior Rusk', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632319/IMG_20260616_211010-Photoroom.png', emoji:'🍪', weight:'400gm', price:55, mrp:95, category:'snacks', stock:20 },

{ id:'snack_gwalior_fan_50',  name:'Gwalior Fan', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632327/IMG_20260616_211328-Photoroom.png', emoji:'🍪', weight:'250gm', price:45, mrp:65, category:'snacks', stock:20 },
    { id:'snack_mario_rusk_10',     name:'Mario Rusk',                         image:CLOUDINARY_BASE+'/image/rusk10.png',                  emoji:'🍪', weight:'60gm',    price:10,  mrp:10,  category:'snacks', stock:20 },
{id:'snack_lizzat_papad_60',name:'Lizzat Papad',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/lizzat_papad.webp',emoji:'🥠',weight:'200gm',price:85,mrp:92,category:'snacks',stock:20},

{id:'snack_babaji_plain_boondi_220gm',name:'Babaji Plain Boondi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543667/IMG_20260615_224116.png',emoji:'🍘',weight:'220gm',price:70,mrp:72,category:'snacks',stock:20},
{id:'snack_babaji_pudina_boondi',name:'Babaji Pudina Boondi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543681/1000339895-Photoroom.png',emoji:'🍘',weight:'66gm',price:35,mrp:36,category:'snacks',stock:20},
{id:'snack_babaji_pudina_boondi_220gm',name:'Babaji Pudina Boondi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/raita_boondi_225_gm.webp',emoji:'🍘',weight:'220gm',price:70,mrp:72,category:'snacks',stock:20},
{id:'snack_babaji_raita_boondi_10',name:'Babaji Raita Boondi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332662/Babaji_Raita_Boondi_10.jpg',emoji:'🍘',weight:'1pcs',price:10,mrp:10,category:'snacks',stock:20},
{id:'snack_babaji_pudina_boondi_10',name:'Babaji Pudina Boondi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/Babaji_Pudina_Boondi_10.jpg',emoji:'🍘',weight:'1pcs',price:10,mrp:10,category:'snacks',stock:20},

{id:'snack_bambino_roasted_semai_100gm',name:'Bambino Roasted Semai',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543677/100339888-Photoroom.png',emoji:'🍜',weight:'100gm',price:10,mrp:10,category:'snacks',stock:20},
{id:'snack_long_cut_semai_1pcs',name:'Long Cut Semai',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543677/1000339888-Photoroom.png',emoji:'🍜',weight:'1pcs',price:10,mrp:10,category:'snacks',stock:20},
{id:'snack_bambino_roasted_semai_1pcs',name:'Bambino Roasted Semai',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781634241/40286526_6-bambino-roasted-vermicelli-ready-to-cook-100-suji-no-maida.jpg',emoji:'🍜',weight:'1pcs',price:10,mrp:10,category:'snacks',stock:20},

    { id:'snack_nutri_choice',      name:'Nutri Choice',                       image:'https://www.quickpantry.in/cdn/shop/products/britannia-nutri-choice-hi-fibre-digestive-biscuits-100-g-quick-pantry.jpg?v=1710538222',            emoji:'🍪', weight:'120 gm',  price:25,  mrp:25,  category:'snacks', stock:20 },
    
    { id:'snack_parleg_10',         name:'Parle G',                            image:'https://www.bbassets.com/media/uploads/p/l/302110_7-parle-gluco-biscuits-parle-g.jpg',               emoji:'🍪', weight:'90 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_monaco_10',         name:'Monaco',                             image:'https://www.bbassets.com/media/uploads/p/xl/302119_12-parle-monaco-biscuits-salted-snack.jpg',                  emoji:'🍪', weight:'52 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_jimjam_10',         name:'Jim Jam',                            image:'https://www.bbassets.com/media/uploads/p/l/40174324-2_8-britannia-treat-jimjam-cream-biscuits.jpg',                  emoji:'🍪', weight:'62 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_tiger_krunch_10',   name:'Tiger Krunch',                       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfVgZBqsIyoJ56nnG1Hlorb2kHddU5W2zyzG9FI9qsI2cq5T2oU07sjJx&s=10',            emoji:'🍪', weight:'68 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_coconut_10',        name:'Coconut Biscuit',                    image:'https://www.bbassets.com/media/uploads/p/l/40243808_2-mario-coconut-crunchy-biscuits-bite-sized-flavourful-teatime-snack.jpg',                 emoji:'🍪', weight:'69 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_parleg_gold_10',    name:'Parle G Gold',                       image:'https://neelamfoodlandmumbai.com/cdn/shop/files/21247_1.jpg?v=1761581449',             emoji:'🍪', weight:'68 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_bourbon_10',        name:'Bourbon',                            image:'https://kunaic.com/public/uploads/media/M61t4s4abi1NAvwQ7FR1-1772637293.webp',                 emoji:'🍪', weight:'60 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_marie_gold_10',     name:'Marie Gold',                         image:'https://www.bigbasket.com/media/uploads/groot/images/2492020-df72d366-module-2_600x300_bb.jpg',              emoji:'🍪', weight:'73 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_moms_magic_10',     name:'Moms Magic',                         image:'https://www.bbassets.com/media/uploads/p/l/30008746_12-sunfeast-moms-magic-rich-butter-biscuits-cookies.jpg',               emoji:'🍪', weight:'61 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_good_day_10',       name:'Good Day',                           image:'https://www.bigbasket.com/media/uploads/groot/images/1102020-b207328b-icon_04.jpg',                emoji:'🍪', weight:'67 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_oreo_10',           name:'Oreo',                               image:CLOUDINARY_BASE+'/image/oreo.png',                    emoji:'🍪', weight:'41 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_oreo_sandwich_10',  name:'Oreo Sandwich',                      image:CLOUDINARY_BASE+'/image/oreo_sandwich.png',           emoji:'🍪', weight:'41 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_krackjack_10',      name:'Krack Jack',                         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73JImpWP582ejpt--n8I2QglmSaWZvB29TNDxOMhlyq5fkZI5KljBviE&s=10',               emoji:'🍪', weight:'56 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_nice_time_10',      name:'Nice Time',                          image:'https://media.britannia.co.in/medium_Nice_time_Pack_d152ade9fe.png',               emoji:'🍪', weight:'59 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_5050_10',           name:'50-50 Biscuit',                      image:'https://m.media-amazon.com/images/I/615LClrHmNL.jpg',            emoji:'🍪',                   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_good_day_5',        name:'Good Day',                           image:'https://assets.hyperpure.com/data/images/products/15f604ded8a07a323a030a482cc370a0.png',                emoji:'🍪', weight:'34 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    { id:'snack_parleg_5',          name:'Parle G',                            image:'https://www.bbassets.com/media/uploads/p/l/40019272_4-parle-gluco-biscuits-parle-g.jpg',                emoji:'🍪', weight:'45 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    { id:'snack_5050_5',            name:'50-50 Biscuit',                      image:'https://www.bbassets.com/media/uploads/p/xl/40023487_12-britannia-50-50-sweet-salty-biscuits.jpg',             emoji:'🍪', weight:'37 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    { id:'snack_cnc_5',             name:'CNC',                                image:CLOUDINARY_BASE+'/image/cnc.png',                     emoji:'🍪', weight:'40 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    {id:'snack_happy_happy_5',name:'Happy Happy Biscuit',image:'https://5.imimg.com/data5/SELLER/Default/2022/2/DT/EQ/AP/146503902/20005925-2-8-parle-happy-happy-choco-chip-cookies.jpg',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
    {id:'snack_yummy_chocolate_5',name:'Yummy Chocolate',image:'https://www.bbassets.com/media/uploads/p/l/40050173_9-anmol-biscuits-yummy-chocolate.jpg',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
    {id:'snack_yummy_milk_5',name:'Yummy Milk',image:'https://www.bbassets.com/media/uploads/p/xl/40050170_6-anmol-biscuits-yummy-milk.jpg',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
    {id:'snack_yummy_elaichi_5',name:'Yummy Elaichi',image:'https://www.bbassets.com/media/uploads/p/l/40120273_3-anmol-yummy-elaichi.jpg',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
   {id:'snack_dark_fantasy_10',name:'Dark Fantasy',image:'https://images.forbesindia.com/blog/wp-content/uploads/media/images/2020/Sep/img_141893_bg_darkfantasychocofills_shutterstock_1772896922.jpg',emoji:'🍪',price:10,mrp:10,category:'snacks',stock:20},
   {id:'snack_gems_10',name:'Gems',image:'https://www.bbassets.com/media/uploads/p/xl/40120531_18-cadbury-gems-sugar-coated-chocolate.jpg',emoji:'🍬',price:10,mrp:10,category:'snacks',stock:20},
   {id:'snack_gems_5',name:'Gems',image:'https://www.kiranapoorti.com/image/cache/catalog/chocolate/gems%2010R-1000x1000.jpg',emoji:'🍬',price:5,mrp:5,category:'snacks',stock:20},
    
    // ══ NAMKEEN 200g ══
    { id:'namkeen_aloo_bhujia_200', name:'Aloo Bhujia',                        image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F623%2F1776683133358.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75', emoji:'🍪', weight:'210 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_bhujia_200',      name:'Bhujia',                             image:'https://www.bbassets.com/media/uploads/p/l/70000800_9-haldirams-namkeen-aloo-bhujia-del.jpg',      emoji:'🍪', weight:'200 gm',  price:55,  mrp:57,  category:'snacks', stock:20 },
    { id:'namkeen_fatafat_200',     name:'Fatafat Bhel',                       image:'https://m.media-amazon.com/images/I/51Ugk2q-WlL.jpg',emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_kashmiri_200',    name:'Kashmiri Mixture',                   image:'https://kunaic.com/public/uploads/media/dCYlvcZAV8Wk25nRSDQL-1772637052.webp',     emoji:'🍪', weight:'150 gm',  price:36,  mrp:38,  category:'snacks', stock:20 },
    { id:'namkeen_moong_200',       name:'Moong Dal',                          image:'https://www.bbassets.com/media/uploads/p/xxl/70000806-8_1-haldirams-namkeen-moong-dal-del.jpg',        emoji:'🍪', weight:'200 gm',  price:60,  mrp:60,  category:'snacks', stock:20 },
    { id:'namkeen_navrattan_200',   name:'Navrattan',                          image:'https://www.bbassets.com/media/uploads/p/l/70000791_8-haldirams-namkeen-navrattan-del.jpg',    emoji:'🍪', weight:'200 gm',  price:60,  mrp:60,  category:'snacks', stock:20 },
    { id:'namkeen_nimbu_200',       name:'Nimbu Masala',                       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSv5hbxlwjFpE73Xway8zMjMLuEsCDLQ1zFX1UiojFGkbsnnYNa3ODvvjA&s=10',    emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_nut_200',         name:'Nut Cracker',                        image:'https://cdn-cmimgopt-dyn.citymall.live/cmimgopt-1d185d69-9a4c-49ab-a1da-d344ac06661b.webp?w=960&q=75',   emoji:'🍪', weight:'210 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_panchrattan_200', name:'Panchrattan',                        image:'https://5.imimg.com/data5/ECOM/Default/2025/2/486934753/HT/AV/UA/85949022/haldirampanchrattan200g-500x500.png', emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_peanut_200',      name:'Salted Peanut',                      image:'https://m.media-amazon.com/images/I/61j28cBVCGL.jpg',       emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_punjabi_200',     name:'Punjabi Tadka',                      image:'https://www.bbassets.com/media/uploads/p/l/70000804_6-haldirams-namkeen-punjabi-tadka-del.jpg',      emoji:'🍪', weight:'210 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_lite_250g',       name:'Lite Mixture',                       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-meZFHvC0pA9Ud2lSN2OIQEQn-Wb681jOYupMnTyOw46kPaA0l99Nbj_O&s=10', emoji:'🍪', weight:'250 gm',  price:100, mrp:103, category:'snacks', stock:20 },
    { id:'namkeen_lite_150g',       name:'Lite Mixture',                       image:'https://image.aapkabazar.co/product/2912/1744968451088.png?type=webp&width=600', emoji:'🍪', weight:'150 gm',  price:36,  mrp:38,  category:'snacks', stock:20 },

    // ══ NAMKEEN ₹10 ══
    { id:'namkeen_bhujia_10',       name:'Bhujia',                             image:'https://www.bbassets.com/media/uploads/p/l/40113477_2-haldirams-namkeen-bhujia-del-horeca.jpg',        emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_aloo_bhujia_10',  name:'Aloo Bhujia',                        image:'https://www.bbassets.com/media/uploads/p/l/40102198_2-haldirams-namkeen-aloo-bhujia-del.jpg',   emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_bhel_10',         name:'Fatafat Bhel',                       image:'https://www.bbassets.com/media/uploads/p/l/40128691_3-haldirams-namkeen-fatafat-bhel.jpg',          emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_gathiya_10',      name:'Bhavnagar Gathiya',                  image:'https://storage.googleapis.com/hul-retailer-propics/ondc/17053997472162063296608603551461.jpg.png',       emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_kashmiri_10',     name:'Kashmiri Mixture',                   image:'https://5.imimg.com/data5/SELLER/Default/2024/9/448902824/CN/QL/EK/158770731/haldiram-s-kashmiri-mixture-23-gram-mrp-10.jpg',      emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_khatta_10',       name:'Khatta Metha',                       image:'https://5.imimg.com/data5/SELLER/PDFImage/2024/9/448897240/FG/KA/LW/158770731/haldiram-s-khatta-meetha-42-gram-mrp-10.png',        emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_moong_10',        name:'Moong Dal',                          image:'https://www.bbassets.com/media/uploads/p/l/40119463_7-haldiram-moong-dal-del.jpg' ,        emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_navrattan_10',    name:'Navrattan',                          image:'https://www.bbassets.com/media/uploads/p/xxl/40120504_4-haldiram-namkeen-navrattan-del.jpg',      emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_nimbu_10',        name:'Nimbu Masala',                       image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/7/5/726f01c7-a501-4921-b57e-2849fcdbfba1_2_AL1_6b6b4276-f4c0-4227-a75f-a7bdd024f3c6.png',         emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_nut_10',          name:'Nut Cracker',                        image:'https://5.imimg.com/data5/SELLER/Default/2024/9/448908376/KA/BR/LD/158770731/haldiram-s-nut-cracker-40-gram-mrp-10.jpg',           emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_palak_10',        name:'Palak Sev',                          image:'https://5.imimg.com/data5/NSDMERP/Default/2026/2/582285874/VN/IW/ZG/264388917/264388917-product-1770630008410.png',         emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_panchrattan_10',  name:'Panchrattan',                        image:'https://www.bbassets.com/media/uploads/p/l/40120507_5-haldiram-namkeen-panchrattan-del.jpg',   emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_punjabi_10',      name:'Punjabi Tadka',                      image:'https://rukminim2.flixcart.com/image/480/640/xif0q/snack-savourie/x/m/y/-enriched-transparent-original-imagg3d596nm6tvm.png?q=20',       emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_peanut_10',       name:'Salted Peanut',                      image:'https://storage.googleapis.com/shy-pub/241613/SKU-0813_0-1734452930833.jpg',       emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_chana_10',        name:'Haldiram Heeng Jeera Chana',         image:'https://image.aapkabazar.co/product/2361/1710936704406.png?type=webp&width=600',         emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    {id:'snack_britannia_little_heart_10',name:'Britannia Little Heart',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYTz1CKbKUR64DB07J1NfvbJcH78Oqm1Qn-CL0TVutEUW1qB4vRLMykkon&s=10',emoji:'🍪',price:10,mrp:10,category:'snacks',stock:20},

    // ══ HOME & PERSONAL CARE ══
  { id:'personal_savlon_wipes_65', name:'Savlon Wipes', image:'https://m.media-amazon.com/images/I/61WTaRXJaFS.jpg', emoji:'🏠', weight:'1pkt', price:65, mrp:66, category:'personal', stock:20 },
    { id:'home_gainda_1l',          name:'Gainda',                             image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhDL0ovbFCACuvy57XZa0y0SPD-hYG7OUD2gb8lpYk6fTvsAtiApUXUk&s=10',        emoji:'🏠', weight:'1L',      price:65,  mrp:66,  category:'personal', stock:20 },
        { id:'home_drain_1pcs',          name:'Harpic Drain Xpert Powder',                             image:"https://www.bbassets.com/media/uploads/p/l/40256374_6-harpic-drain-xpert-drain-cleaning-powder-removes-blockages-in-30-mins-for-washbasins-sinks-bathrooms.jpg",        emoji:'🏠', weight:'1pcs',      price:65,  mrp:66,  category:'personal', stock:20 },

    { id:'home_lizol_500ml',        name:'Pink Lizol',                         image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/8/28/3c350737-e054-4926-a7e6-5cdb5fb2693b_3_AL1_68f61f14-110f-4692-8934-3d247f7fd63b.jpg',              emoji:'🏠', weight:'500ml',   price:115, mrp:123, category:'personal', stock:20 },
    { id:'home_harpic_500ml',       name:'Harpic',                             image:'https://www.bbassets.com/media/uploads/p/l/263754_23-harpic-power-plus-disinfectant-toilet-cleaner-liquid-original.jpg',          emoji:'🏠', weight:'500ml',   price:105, mrp:110, category:'personal', stock:20 },
  { id:'home_harpic_cleaner_500ml', name:'Harpic Bathroom Cleaner', image:'https://www.bbassets.com/media/uploads/p/l/40017765_14-harpic-bathroom-cleaning-liquid-lemon.jpg', emoji:'🏠', weight:'500ml', price:105, mrp:110, category:'personal', stock:20 },
    { id:'home_colin_500ml',        name:'Colin',                              image:'https://www.bbassets.com/media/uploads/p/l/263819_21-colin-glass-cleaner-liquid-spray-bottle-cleans-mirror-car-home-appliances.jpg',           emoji:'🏠', weight:'500ml',   price:110, mrp:115, category:'personal', stock:20 },
    { id:'home_rin_ala',            name:'Rin Ala',                            image:'https://www.bbassets.com/media/uploads/p/l/100006662_7-rin-ala-fabric-whitener.jpg',            emoji:'🏠', weight:'500ml',   price:85,  mrp:90,  category:'personal', stock:20 },
    { id:'home_tshine',             name:'T-Shine Toilet Cleaner',             image:'https://cdn01.pharmeasy.in/dam/products_otc/X79182/t-shine-toilet-cleaner-floral-500-ml-2-1671742795.jpg',             emoji:'🏠', weight:'500ml',   price:100, mrp:105, category:'personal', stock:20 },
    { id:'home_ezee',               name:'Ezee',                               image:'https://m.media-amazon.com/images/I/71ykNxOCVqL.jpg',               emoji:'🏠', weight:'470ml',   price:125, mrp:130, category:'personal', stock:20 },
    { id:'home_vanish_400ml',       name:'Vanish Liquid',                      image:'https://www.bbassets.com/media/uploads/p/l/273562_20-vanish-all-in-one-detergent-booster-oxi-action.jpg',         emoji:'🏠', weight:'400ml',   price:145, mrp:149, category:'personal', stock:20 },
    { id:'home_black_hit_400ml',    name:'Black Hit',                          image:'https://rukminim2.flixcart.com/image/480/480/xif0q/insect-repellent/v/e/c/400-black-flying-insect-killer-spray-400-ml-1-hit-original-imagm8vcut8weepb.jpeg?q=90',      emoji:'🏠', weight:'400ml',   price:175, mrp:180, category:'personal', stock:20 },
    { id:'home_red_hit_400ml',      name:'Red Hit',                            image:'https://www.quickpantry.in/cdn/shop/files/hit-cockroach-killer-spray-400-ml.webp?v=1722663044',        emoji:'🏠', weight:'400ml',   price:185, mrp:189, category:'personal', stock:20 },
    { id:'home_black_hit_320ml',    name:'Black Hit',                          image:'https://m.media-amazon.com/images/I/61H8bgmxePL.jpg',      emoji:'🏠', weight:'320ml',   price:205, mrp:210, category:'personal', stock:20 },
    { id:'home_red_hit_320ml',      name:'Red Hit',                            image:'https://m.media-amazon.com/images/I/71UYTPMwiEL.jpg',        emoji:'🏠', weight:'320ml',   price:205, mrp:210, category:'personal', stock:20 },
    { id:'home_harpic_200ml',       name:'Harpic',                             image:'https://www.bbassets.com/media/uploads/p/l/298290_22-harpic-power-plus-disinfectant-toilet-cleaner-original.jpg',          emoji:'🏠', weight:'200ml',   price:45,  mrp:46,  category:'personal', stock:20 },
    { id:'home_ujala',              name:'Ujala',                              image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F1097%2F1740393252493.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',              emoji:'🏠', weight:'250ml',   price:75,  mrp:80,  category:'personal', stock:20 },
    { id:'home_revive',             name:'Revive Liquid Stiffener',            image:'https://m.media-amazon.com/images/I/6151uV--0oL._AC_UF1000,1000_QL80_.jpg',             emoji:'🏠', weight:'200ml',   price:75,  mrp:81,  category:'personal', stock:20 },
    { id:'home_vanish_180ml',       name:'Vanish Liquid Detergent',            image:'https://www.bbassets.com/media/uploads/p/l/273561_12-vanish-all-in-one-detergent-booster-oxi-action.jpg',         emoji:'🏠', weight:'180ml',   price:75,  mrp:78,  category:'personal', stock:20 },
    { id:'home_ambipur_spray',      name:'Room Spray Rose & Blossom',          image:'https://image.aapkabazar.co/product/3676/1730210103058.png?type=webp&width=600',        emoji:'🏠', weight:'275ml',   price:290, mrp:299, category:'personal', stock:20 },
    { id:'home_odonil_citrus',      name:'Room Spray Citrus Fresh',            image:'https://www.bbassets.com/media/uploads/p/l/40179422_11-odonil-room-air-freshener-spray-citrus-fresh.jpg',      emoji:'🏠', weight:'220ml',   price:165, mrp:169, category:'personal', stock:20 },
    { id:'home_odonil_ocean',       name:'Room Spray Ocean Breeze',            image:'https://www.bbassets.com/media/uploads/p/l/40186912_3-odonil-room-air-freshener-spray-ocean-breeze.jpg',       emoji:'🏠', weight:'220ml',   price:165, mrp:169, category:'personal', stock:20 },
    { id:'home_odonil_lavender',    name:'Odonil Lavender 1pcs',               image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/2/18/7d99dffc-d3ba-4f85-946d-6d0f3aab6d49_TS9AN33H1S_MN_18022026.png',             emoji:'🏠', weight:'192 gm',  price:205, mrp:212, category:'personal', stock:20 },
    { id:'home_vim_750ml',          name:'Vim Liquid',                         image:'https://www.bbassets.com/media/uploads/p/l/307195_25-vim-dishwash-liquid-gel-lemon.jpg',     emoji:'🏠', weight:'750ml',   price:205, mrp:210, category:'personal', stock:20 },
    { id:'home_vim_250ml',          name:'Vim Liquid',                         image:'https://www.bbassets.com/media/uploads/p/l/266967_11-vim-dishwash-liquid-gel-lemon.jpg',     emoji:'🏠', weight:'250ml',   price:55,  mrp:60,  category:'personal', stock:20 },
    { id:'home_vim_20',             name:'Vim Liquid',                         image:'https://www.bbassets.com/media/uploads/p/xl/40076994_12-vim-dishwash-liquid-gel-lemon-refill.jpg',      emoji:'🏠',                   price:20,  mrp:20,  category:'personal', stock:20 },

     { id:'personal_pitambari_20', name:'Pitambari', image:'https://www.bbassets.com/media/uploads/p/l/40049919_3-pitambari-pitambari-shining-powder-for-brass-copper-and-aluminum-articles-1-kg-dishwashing-detergent.jpg', emoji:'🏠', price:20, mrp:20, category:'personal', stock:20 },

    { id:'home_goodnight_pack',     name:'Good Night Pack',                    image:CLOUDINARY_BASE+'/image/home_goodknight.png',         emoji:'🏠', weight:'1pcs',    price:85,  mrp:90,  category:'personal', stock:20 },
    { id:'home_goodnight_refill',   name:'Good Night Refill',                  image:'https://storage.googleapis.com/shy-pub/22879/SKU-2326_0-1772533977852.png',          emoji:'🏠', weight:'45ml',    price:75,  mrp:80,  category:'personal', stock:20 },
    { id:'home_allout_pack',        name:'All Out Pack',                       image:'https://www.bbassets.com/media/uploads/p/xl/305907_23-all-out-ultra-mosquito-repellant-starter-pack.jpg',       emoji:'🏠', weight:'1pcs',    price:100, mrp:105, category:'personal', stock:20 },
    { id:'home_allout_refill',      name:'All Out Refill',                     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8_A4m1Hvg6ZZFSv3JEg09FeApe5zOhabHail9A3jjA&s',            emoji:'🏠', weight:'45ml',    price:85,  mrp:90,  category:'personal', stock:20 },
    { id:'home_mortein_coil',       name:'Mortein Coil',                       image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F5598%2F1735974439042.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',       emoji:'🏠', weight:'10pcs',   price:40,  mrp:42,  category:'personal', stock:20 },
    { id:'home_hit_gel',            name:'Hit Gel',                            image:'https://www.bbassets.com/media/uploads/p/xl/40007019_12-hit-anti-roach-gel-cockroach-killer.jpg',            emoji:'🏠', weight:'20gm',    price:210, mrp:220, category:'personal', stock:20 },
    { id:'home_ratkill',            name:'Mortein Rat Kill',                   image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/2/18/e68f9b89-b5ea-47a9-afb5-01c52a9c9347_Q0FL9FLJ5K_MN_18022026.png',            emoji:'🏠', weight:'100gm',   price:75,  mrp:77,  category:'personal', stock:20 },

    // ══ DAIRY ══
     {id:'custardpowder_100gm',name:'Custard Powder',image:'https://m.media-amazon.com/images/I/71tk4RMutnL._AC_UF894,1000_QL80_.jpg',emoji:'🍮',weight:'100gm',price:72,mrp:72,category:'dairy',stock:20},
    { id:'dairy_amul_full_1l',      name:'Amul Full Cream',                    image:'https://www.bbassets.com/media/uploads/p/l/40175764_7-amul-amul-gold.jpg',             emoji:'🥛', weight:'1L',      price:72,  mrp:72,  category:'dairy', stock:20 },
    { id:'dairy_amul_full_500ml',   name:'Amul Full Cream',                    image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/12/17/51a2cd89-2a42-4b2b-ac97-95288e02952d_TYF3262KU8_MN_16122025.png',             emoji:'🥛', weight:'500ml',   price:36,  mrp:36,  category:'dairy', stock:20 },
    { id:'dairy_amul_toned_1l',     name:'Amul Toned Taaza',                   image:'https://www.bbassets.com/media/uploads/p/l/40114416_8-amul-taaza-milk.jpg',             emoji:'🥛', weight:'1L',      price:59,  mrp:59,  category:'dairy', stock:20 },
    { id:'dairy_amul_toned_500ml',  name:'Amul Toned Taaza',                   image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/2e8a0f88-1038-4fd3-8093-7085a49b473c/Amul-Taaza-Toned-Fresh-Milk.jpeg',              emoji:'🥛', weight:'500ml',   price:30,  mrp:30,  category:'dairy', stock:20 },
    { id:'dairy_amul_cow_1l',       name:'Amul Cow Milk',                      image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2026/3/5/5628125f-dabb-466f-af3e-4ecc4d02ffc7_7109_1.png',             emoji:'🥛', weight:'1L',      price:62,  mrp:62,  category:'dairy', stock:20 },
    { id:'dairy_amul_cow_500ml',    name:'Amul Cow Milk',                      image:'https://www.bbassets.com/media/uploads/p/l/40141614_7-amul-amul-cow.jpg',              emoji:'🥛', weight:'500ml',   price:31,  mrp:31,  category:'dairy', stock:20 },
    { id:'dairy_amul_buffalo_1l',   name:'Amul Buffalo',                       image:'https://5.imimg.com/data5/SELLER/Default/2024/3/398974174/AM/BH/ZJ/78034159/pure-cotton-silk.png',              emoji:'🥛', weight:'1L',      price:80,  mrp:80,  category:'dairy', stock:20 },
    { id:'dairy_md_cow_1l',         name:'Mother Dairy Cow Milk',              image:'https://www.bbassets.com/media/uploads/p/l/40159658_3-mother-dairy-cow-milk.jpg',           emoji:'🥛', weight:'1L',      price:62,  mrp:62,  category:'dairy', stock:20 },
    { id:'dairy_md_cow_500ml',      name:'Mother Dairy Cow Milk',              image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/rc-upload-1780632898141-4.png?bg_token=color.background.quaternary',            emoji:'🥛', weight:'500ml',   price:31,  mrp:31,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_1kg',     name:'Amul Dahi',                          image:'https://www.bbassets.com/media/uploads/p/xl/40147629_3-amul-masti-dahi.jpg',                 emoji:'🥛', weight:'1L',      price:80,  mrp:80,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_400g',    name:'Amul Dahi',                          image:'https://gharstuff.com/wp-content/uploads/2020/05/Amul-Masti-Dahi-400g.jpg',                  emoji:'🥛', weight:'400gm',   price:35,  mrp:35,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_20',      name:'Amul Dahi',                          image:'https://rukminim3.flixcart.com/image/480/640/xif0q/curd-yogurt/q/o/9/-enriched-transparent-original-imahhrhga5nt9vtu.png?q=20',                  emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_25',      name:'Amul Dahi',                          image:'https://cdn.grofers.com/da/cms-assets/cms/product/d7a0818e-c466-4ffb-ac15-8156ccc27d90.jpg',                  emoji:'🥛',                   price:25,  mrp:25,  category:'dairy', stock:20 },
    { id:'dairy_mother_dahi_25',      name:'Mother Dairy Dahi',                          image:'https://www.bbassets.com/media/uploads/p/l/40004531_6-mother-dairy-dahi-made-from-toned-milk.jpg',                  emoji:'🥛',                   price:25,  mrp:25,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_10',      name:'Amul Dahi',                          image:'https://www.bbassets.com/media/uploads/p/xl/40087509_6-amul-masti-dahi.jpg',                  emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_mother_dahi_10',      name:'Mother Dairy Dahi',                          image:'https://www.bbassets.com/media/uploads/p/l/40181061_6-mother-dairy-classic-dahi.jpg',                  emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_amul_paneer',       name:'Amul Paneer',                        image:'https://www.bbassets.com/media/uploads/p/xl/40096747_9-amul-malai-fresh-paneer.jpg',             emoji:'🥛', weight:'200gm',   price:90,  mrp:90,  category:'dairy', stock:20 },
    { id:'dairy_md_paneer',         name:'Mother Dairy Paneer',                image:'https://www.bbassets.com/media/uploads/p/l/296470_8-mother-dairy-paneer-fresh.jpg',                  emoji:'🥛', weight:'200gm',   price:90,  mrp:90,  category:'dairy', stock:20 },
 
{ id:'dairy_amul_cheese_200gm_10pcs', name:'Amul Cheese', image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F7118%2F1735029422588.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75', emoji:'🥛', weight:'200gm (10pcs)', price:140, mrp:145, category:'dairy', stock:20 },
{ id:'dairy_amul_cheese_100gm_5pcs', name:'Amul Cheese', image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/17/0df385da-706d-4c59-af5b-4502556156c6_PSLTUXPOU9_MN_16122025.png', emoji:'🥛', weight:'100gm (5pcs)', price:80, mrp:82, category:'dairy', stock:20 },
{ id:'dairy_amul_cheese_1pcs', name:'Amul Cheese', image:'https://www.kiranapoorti.com/image/cache/catalog/AMUL%20CHEESE%20SLICE%201N-320x320.jpeg', emoji:'🥛', weight:'1pcs', price:80, mrp:82, category:'dairy', stock:20 },
{ id:'dairy_amul_cheese_cube_1pcs', name:'Amul Cheese Cube', image:'https://neelamfoodlandmumbai.com/cdn/shop/files/6458AMULCHEESECUBES1PC_1.jpg?v=1752070195&width=416', emoji:'🥛', weight:'1pcs', price:80, mrp:82, category:'dairy', stock:20 },
 
{ id:'dairy_amul_cheese_1pkt', name:'Pizza Topping', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ScDbiU44DCd6EG3YrSiptyeYVihYIX0-Y5a0O4su6F2RcgUn9ian7Q&s=10g', emoji:'🥛', weight:'1pkt', price:300, mrp:60, category:'dairy', stock:20 },

    { id:'dairy_amul_butter_500g',  name:'Amul Butter',                        image:'https://assets.hyperpure.com/data/images/products/03669d1e950fd601fd7963fc6827201e.jpg',          emoji:'🥛', weight:'500gm',   price:300,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_amul_butter_100g',  name:'Amul Butter',                        image:'https://www.bbassets.com/media/uploads/p/xl/104860_8-amul-butter-pasteurised.jpg',          emoji:'🥛', weight:'100gm',   price:60,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_amul_butter_15',    name:'Amul Butter',                        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUm1TpPF8Yv0l--86_Rv30DdTqcozdbzXzZMJpYtiT9igjCgOkIsL8qU_c&s=10',           emoji:'🥛',                   price:15,  mrp:15,  category:'dairy', stock:20 },
    { id:'dairy_amul_chhachh_10',    name:'Amul Plain Chhachh',                        image:'https://www.bbassets.com/media/uploads/p/l/40147628_5-amul-buttermilkchaas-polypack.jpg',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
      { id:'dairy_amul_tadkachhachh_10',    name:'Amul Tadka Chhachh',                        image:'https://www.bbassets.com/media/uploads/p/l/40323756_2-amul-probiotic-tadka-chaas.jpg',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
        { id:'dairy_mother_tadkachhachh_10',    name:'Mother Dairy Tadka Chhachh',                        image:'https://www.bbassets.com/media/uploads/p/xxl/40195339_6-mother-dairy-tadka-chach.jpg',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
          { id:'dairy_mother_chhachh_10',    name:'Mother Dairy Pudina Chhachh',                        image:'https://m.media-amazon.com/images/I/51IMfHvigrL.jpg',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
           { id:'dairy_amul_tadkachhachh_20',    name:'Amul Masti Tadka Chhachh',                        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/db1c5b97-864a-4dcf-9194-b5aca9923f62.jpg',           emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_tomato_puree',      name:'Kissan Tomato Puree',                image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F1549%2F1714974871667.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',      emoji:'🥛', weight:'200gm',   price:25,  mrp:25,  category:'dairy', stock:20 },
    { id:'dairy_amul_cream',        name:'Amul Fresh Cream',                   image:'https://m.media-amazon.com/images/I/71W+RZnbJbL.jpg',        emoji:'🥛', weight:'250ml',   price:60,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_sauce_850g',        name:'Kissan Tomato Sauce',                image:'https://m.media-amazon.com/images/I/61g3RnntRqL._AC_UF894,1000_QL80_.jpg',        emoji:'🥛', weight:'850gm',   price:90,  mrp:93,  category:'dairy', stock:20 },
    { id:'dairy_sauce_435g',        name:'Kissan Tomato Sauce',                image:'https://www.bbassets.com/media/uploads/p/l/40113115_10-kissan-fresh-tomato-ketchup.jpg',        emoji:'🥛', weight:'435gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
      { id:'dairy_sauce_10',        name:'Kissan Tomato Sauce',                image:'https://www.bbassets.com/media/uploads/p/l/40113115_10-kissan-fresh-tomato-ketchup.jpg',        emoji:'🥛', weight:'',   price:10,  mrp:10,  category:'dairy', stock:20 },
         { id:'dairy_kissan_jam_big',        name:'Kissan Mixed Fruit Jems',                image:'https://www.bbassets.com/media/uploads/p/l/266577-2_4-kissan-mixed-fruit-jam.jpg',        emoji:'🥛', weight:'gm',   price:100,  mrp:100,  category:'dairy', stock:20 },
         { id:'dairy_kissan_jam',        name:'Kissan Mixed Fruit Jems',                image:'https://www.bbassets.com/media/uploads/p/xl/266547_20-kissan-mixed-fruit-jam.jpg',        emoji:'🥛', weight:'gm',   price:20,  mrp:20,  category:'dairy', stock:20 },
{ id:'dairy_ginger_garlic_paste_5rs', name:'Ginger Garlic Paste', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59MtygFZiL-QkcdoS-Dq7gQ7ojWkdj5IiTkYArebYAOBnunyBKjvR_wrF&s=10', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'dairy', stock:20 },
{ id:'dairy_pasta_masala_5rs',        name:'Pasta Masala',        image:'https://5.imimg.com/data5/ANDROID/Default/2025/7/527084528/ZY/GT/XX/121773723/product-jpeg-500x500.jpeg', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'dairy', stock:20 },
{ id:'dairy_maggi_masala_5rs',        name:'Maggi Masala',        image:'https://gropharm.in/wp-content/uploads/2021/01/418.jpg', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'dairy', stock:20 },
{ id:'dairy_tops_tomato_sauce_1pcs',  name:'Tops Tomato Sauce',   image:'https://cdn2.shopclues.com/images/thumbnails/81676/320/320/12622869214565547872901503994514.png', emoji:'🥛', weight:'1pcs', price:1, mrp:1, category:'dairy', stock:20 },

{id:'pack_odonillavender',name:'Odonil Air Freshener Pack',image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/11/20/4595fbd0-902c-40ad-9793-afb27f21d626_Z0RB88B34N_MN_20112025.jpg',emoji:'📦',weight:'4Pcs',price:205,mrp:212,category:'pack',stock:20},
{id:'pack_nehamehndicone',name:'Neha Mehndi Cone Pack',image:'https://5.imimg.com/data5/SELLER/Default/2021/6/MI/UJ/IQ/131793628/mehandi.jpg',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_kaverimehndicone',name:'Kaveri Mehndi Cone Pack',image:'https://velnikstore.com/cdn/shop/files/Artboard_1_copy_57_4x_3ca7ee69-0fb0-42b5-b9ce-d9c2815975f2.webp?v=1783589510&width=1946',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},

{ id:'ginger_garlic_paste_pack', name:'Ginger Garlic Paste Pack', image:'https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/axg29whcmhb3/b/tbn-prod-assets/o/PROD_IMG/104454509_%20Packaging%20Front.webp', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pasta_masala_pack', name:'Pasta Masala Pack', image:'https://cdn.dotpe.in/longtail/store-items/4560238/VXEZUU0l.jpeg', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'maggi_masala_pack', name:'Maggi Masala Pack', image:'https://5.imimg.com/data5/ANDROID/Default/2023/2/OK/ZO/HX/61029556/product-jpeg.jpg', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'tops_tomato_sauce_pack', name:'Tops Tomato Sauce Pack', image:'https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/axg29whcmhb3/b/tbn-prod-assets/o/PRODUCT_1705469915239.webp', emoji:'🥛', weight:'1pcs', price:1, mrp:1, category:'pack', stock:20 },

    { id:'dairy_soya_granules',     name:'Nutrela Soya Granules',              image:"https://www.bbassets.com/media/uploads/p/l/257383_9-nutrela-soya-granules.jpg",            emoji:'🥛', weight:'200gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
    { id:'dairy_soya_mini',         name:'Nutrela Soya Mini Chunks',           image:'https://www.bbassets.com/media/uploads/p/l/261822_7-nutrela-soya-mini-chunk.jpg',                emoji:'🥛', weight:'200gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
    { id:'dairy_soya_chunks',       name:'Nutrela Soya Chunks',                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25JBO11yxEbde6lqFelgQ6MrMCweGp8q-GMJzVLISDA&s',              emoji:'🥛', weight:'200gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
      { id:'dairy_soya_chunks_10',       name:'Nutrela Soya Chunks',                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmiJmxv5lB_l13K2JvEuezMyV9W0CFmNIA83aP1ouqg&s=10',              emoji:'🥛', weight:'1pcs',   price:10,  mrp:10,  category:'dairy', stock:20 },

    { id:'dairy_atta_bread',        name:'Atta Bread',                         image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/7/14/997d03db-d3a9-4fe4-96fa-b4b398ddd8ad_4_AL6_09a057e8-7def-4fac-85dc-b005c4a443ae.png',              emoji:'🥛',                   price:65,  mrp:65,  category:'dairy', stock:20 },
    { id:'dairy_white_bread_65',    name:'White Bread',                        image:'https://cdn.grofers.com/da/cms-assets/cms/product/364403a1-9b3c-45a5-b5f3-b79b2a48ba74.jpg',           emoji:'🥛',                   price:65,  mrp:65,  category:'dairy', stock:20 },
    { id:'dairy_brown_bread',       name:'Brown Bread',                        image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product_videos_thumbnails/9543742d-fb0a-410d-8c0f-87b4317a66d7.jpg',             emoji:'🥛',                   price:60,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_sandwich_bread',    name:'Sandwich Bread',                     image:'https://cdn.grofers.com/da/cms-assets/cms/product/3410a305-5a4a-4785-98e9-b80e7366a302.jpg',          emoji:'🥛',                   price:45,  mrp:45,  category:'dairy', stock:20 },
    { id:'dairy_white_bread_33',    name:'White Bread',                        image:'https://www.bbassets.com/media/uploads/p/xl/40026514_3-harvest-gold-bread-white.jpg',           emoji:'🥛',                   price:33,  mrp:33,  category:'dairy', stock:20 },
      { id:'dairy_white_bread_25',    name:'White Bread',                        image:CLOUDINARY_BASE+'/e/bread_white33.png',           emoji:'🥛',                   price:25,  mrp:25,  category:'dairy', stock:20 },
       { id:'dairy_white_bread_20',    name:'Nashta White Bread',                        image:CLOUDINARY_BASE+'/e/bread_white33.png',           emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
        { id:'dairy_white_bread_10',    name:'Nashta White Bread',                        image:CLOUDINARY_BASE+'/e/bread_white33.png',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_atta_bun',          name:'Atta Burger Bun',                    image:'https://www.bbassets.com/media/uploads/p/l/40026521_4-harvest-gold-buns-atta-burger.jpg',           emoji:'🥛',     weight:'4pcs',              price:45,  mrp:45,  category:'dairy', stock:20 },
    { id:'dairy_burger_bun_6',      name:'Burger Bun ',                    image:'https://www.bbassets.com/media/uploads/p/l/40026522_7-harvest-gold-buns-burger.jpg',        emoji:'🥛',      weight:'4pcs',             price:55,  mrp:55,  category:'dairy', stock:20 },
    { id:'dairy_burger_bun_4',      name:'Burger Bun ',                    image:CLOUDINARY_BASE+'/image/bread_burgerbun.png',         emoji:'🥛',       weight:'6pcs',            price:55,  mrp:55,  category:'dairy', stock:20 },
    { id:'dairy_kulcha',            name:'Kulcha Bread',                       image:'https://www.bbassets.com/media/uploads/p/l/40026524_5-harvest-gold-bread-kulcha.jpg',            emoji:'🥛',      weight:'5pcs',             price:50,  mrp:50,  category:'dairy', stock:20 },
    { id:'dairy_bombay_pav',        name:'Bombay Pav',                         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9M8yBGk1HzLuxF3eDZzhkxkglJJ6Z3jqswYNGwFVxg&s',               emoji:'🥛', weight:'6pcs',   price:40,  mrp:40,  category:'dairy', stock:20 },
    { id:'dairy_sweet_bun_20',      name:'Sweet Bun',                          image:'https://m.media-amazon.com/images/I/61Ib-HMW9mL.jpg',             emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_frooty_bread_20',   name:'Frooty Bread',                       image:'https://www.bbassets.com/media/uploads/p/l/40298613_3-bonn-frooty-bread-zero-trans-fat.jpg',          emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_vanilla_cake_10',   name:'Vanilla Cake',                       image:'https://www.bbassets.com/media/uploads/p/xl/40327556_1-harvest-gold-crem-bite-vanilla-layer-cake.jpg',             emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_strawberry_cake_10',name:'Strawberry Cake',                    image:'https://www.bbassets.com/media/uploads/p/xl/40327555_1-harvest-gold-crem-bite-mixed-fruit-layer-cake.jpg',            emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_choco_bun_10',      name:'Chocolate Bun',                      image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/17/c49575f5-8a72-4ebf-abbb-71756aaecc4b_XGZ5P4G496_MN_16122025.png',          emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_vanilla_bun_10',    name:'Vanilla Bun',                        image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/12/17/dc747a67-6a6f-454d-a721-9f61c11f9115_Y5UY4OX5CL_MN_16122025.png',        emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_strawberry_bun_10', name:'Strawberry Bun',                     image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/rc-upload-1786277948619-6.png?bg_token=color.background.quaternary',     emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
      { id:'dairy_swiss10', name:'Anmol Swiss Roll Strawberry',                     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJLI0gRhbEz0umbqkxChMtHxU2wr-QjRv97FMSkoTrAq8s7iZPRVGtvc1&s=10',     emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
      { id:'dairy_swisschoco', name:'Anmol Swiss Roll Chocolate',                     image:'https://dukaan.b-cdn.net/700x700/webp/media/96f9c76c-9e41-409d-9666-3a24cedf5589.jpg',     emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    
   {id:'nestle-everyday-powder-10',name:'Nestle Everyday Powder',image:'https://img.clevup.in/414021/SKU-1707_0-1767026644148.jpg?width=600&format=webp',emoji:'🥛',weight:'1pcs',price:10,mrp:10,category:'dairy',stock:20},
   {id:'nestle-everyday-powder-5',name:'Nestle Everyday Powder',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgr2KQzosBBZmFmu0NqC-58JKeG_iiqCTe77EBPyI7mLjhfh79ElNuG4&s=10',emoji:'🥛',weight:'1pcs',price:5,mrp:5,category:'dairy',stock:20},
    {id:'nestle-everyday-powder-2',name:'Nestle Everyday Powder',image:'https://images.jdmagicbox.com/quickquotes/images_main/nestle-everyday-dairy-creamer-450g-2220128933-cyw3em2i.jpg',emoji:'🥛',weight:'1pcs',price:2,mrp:2,category:'dairy',stock:20},

   {id:'bournvita_30',name:'Bourn Vita',image:'https://5.imimg.com/data5/SELLER/Default/2023/2/PP/UG/EB/144328445/parle-biscuit.jpg',emoji:'🍫',weight:'1pcs',price:30,mrp:30,category:'dairy',stock:20},
{id:'bournvita_5',name:'Bourn Vita',image:'https://dukaan.b-cdn.net/1000x1000/webp/media/40ef3394-ec2e-4721-a4f8-6503fa969399.png',emoji:'🍫',weight:'1pcs',price:5,mrp:5,category:'dairy',stock:20},

{id:'coffee_nescafe_100gm',name:'Nescafe Coffee',image:'https://www.bbassets.com/media/uploads/p/l/40208513_1-nescafe-classic-pure-soluble-coffee.jpg',emoji:'☕',weight:'100gm',price:100,mrp:100,category:'dairy',stock:20},
{id:'coffee_nescafe_10',name:'Nescafe Coffee',image:'https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/axg29whcmhb3/b/tbn-prod-assets/o/PRODUCT_NEW/PRODUCT_104578945.jpeg',emoji:'☕',weight:'1 pcs',price:10,mrp:10,category:'dairy',stock:20},
{id:'coffee_nescafe_2',name:'Nescafe Coffee',image:'https://5.imimg.com/data5/SELLER/Default/2021/11/BL/VT/NN/3793336/nescafe-classic-instant-coffee-sachet.jpg',emoji:'☕',weight:'1 pcs',price:2,mrp:2,category:'dairy',stock:20},

{id:'coffee_nescafe_2pack',name:'Nescafe Coffee Pack',image:'https://www.bbassets.com/media/uploads/p/xl/40111432-7_6-nescafe-classic-coffee.jpg',emoji:'☕',weight:'1 pcs',price:2,mrp:2,category:'pack',stock:20},


    // ══ TOOTHPASTE & PERSONAL ══
    { id:'personal_listerine_freshburst_200ml', name:'Listerine FreshBurst Mouthwash', image:'https://images.ctfassets.net/z7cr8rgccizj/V849Ii2vR14XpbAIehaK4/73fb03e1f39ca621b732deb6ae628c51/LIS_USA_US_312547428552_524285587_687214_Freshburst_Intense_1p5L_PR_00000.webp?fm=jpg&w=1920&q=80', emoji:'🦷', weight:'200gm', price:125, mrp:131, category:'personal', stock:20 },
    { id:'personal_vicks_vaporub_50ml', name:'Vicks VapoRub', image:'https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-classic-relief-from-cold-cough-headache-body-pain-50-ml-2-1788343181.jpg', emoji:'🧴', weight:'1pcs', price:185, mrp:185, category:'personal', stock:20 },

{ id:'personal_unknown_product', name:'Vicks VapoRub', image:'https://asset.sastasundar.com/incom/images/product/Vicks-VapoRub-Classic-1749798540-10158430-a.jpg', emoji:'🧴', weight:'1pcs', price:20, mrp:20, category:'personal', stock:20 },
 { id:'personal_anchor_colgate_cooling_fresh_150g', name:'Anchor Colgate Cooling Fresh', image:'https://m.media-amazon.com/images/I/71FOYyXwtUL.jpg', emoji:'🦷', weight:'150gm', price:95, mrp:95, category:'personal', stock:20 }, 
 { id:'personal_pepsodent',      name:'Pepsodent',                          image:'https://m.media-amazon.com/images/I/51kr-2j3+LL.jpg',       emoji:'🦷', weight:'200gm',   price:125, mrp:131, category:'personal', stock:20 },
{ id:'personal_dabur_red_175',  name:'Dabur Red',                          image:'https://m.media-amazon.com/images/I/819TE-eh6OL._AC_UF1000,1000_QL80_.jpg',        emoji:'🦷', weight:'175gm',   price:70,  mrp:72,  category:'personal', stock:20 },
{ id:'personal_colgate_sens',   name:'Colgate Sensitive',                  image:'https://images.apollo247.in/pub/media/catalog/product/c/o/col0075_1-june.jpgg',       emoji:'🦷', weight:'160gm',   price:200, mrp:207, category:'personal', stock:20 },
{ id:'personal_dant_manjan',    name:'MDH Dant Manjan',                    image:'https://m.media-amazon.com/images/I/21RzGpMa6zL._AC_UF894,1000_QL80_.jpg',         emoji:'🦷', weight:'80gm',    price:65,  mrp:70,  category:'personal', stock:20 },
{ id:'personal_colgate_100g',   name:'Colgate',                            image:'https://www.bbassets.com/media/uploads/p/l/100006161_30-colgate-strong-teeth-anticavity-toothpaste-with-amino-shakti-formula-provides-fresher-breath.jpg',              emoji:'🦷', weight:'100gm',   price:65,  mrp:70,  category:'personal', stock:20 },
{ id:'personal_colgate_salt',   name:'Colgate Active Salt',                image:'https://m.media-amazon.com/images/I/71Pmvkj2cHL.jpg',        emoji:'🦷', weight:'100gm',   price:70,  mrp:75,  category:'personal', stock:20 },
{ id:'personal_dabur_100g',     name:'Dabur Red',                          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UDEB06ZG3Jx86ESa6XGhull3tjkRoItCmFGo3W6VPg-tbXs0Usr_eajr&s=10',           emoji:'🦷', weight:'100gm',   price:70,  mrp:72,  category:'personal', stock:20 },
{ id:'personal_dant_kanti_100', name:'Patanjali Dant Kanti',               image:'https://www.patanjaliayurved.net/assets/product_images/400x500/1739858231DantKantiNatural100g-1.webp',         emoji:'🦷', weight:'100gm',   price:50,  mrp:56,  category:'personal', stock:20 },
{ id:'personal_closeup_80g',    name:'Closeup',                            image:'https://images.apollo247.in/pub/media//catalog/product/c/l/clo0306_3.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w',          emoji:'🦷', weight:'80gm',    price:80,  mrp:85,  category:'personal', stock:20 },
{ id:'personal_dant_kanti_20',  name:'Patanjali Dant Kanti',               image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnrnFfH_QIEoXApIe8tKBgMrNvylpmAdp-9q5NYZ_2Q&s=10',          emoji:'🦷', weight:'43gm',    price:20,  mrp:20,  category:'personal', stock:20 },
{ id:'personal_colgate_20',     name:'Colgate',                            image:'https://cdn.dotpe.in/longtail/store-items/3877754/pV7OnuRd.jpeg',              emoji:'🦷', weight:'44gm',    price:20,  mrp:20,  category:'personal', stock:20 },
{ id:'personal_closeup_20',     name:'Closeup Super Fresh',                image:'https://www.bbassets.com/media/uploads/p/l/306166_7-close-up-ever-fresh-red-hot-anti-germ-gel-toothpaste.jpg',          emoji:'🦷', weight:'45gm',    price:20,  mrp:20,  category:'personal', stock:20 },
{ id:'personal_colgate_10',     name:'Colgate',                            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4Q0f4nNK8nElgCQD0ms7X5gK3JdDsGVm5EWzGWzK4dvIIr_iMe-vRDU&s=10',              emoji:'🦷', weight:'20gm',    price:10,  mrp:10,  category:'personal', stock:20 },
{ id:'personal_colgate_max_10', name:'Colgate Max Fresh',                  image:'https://live-mart-jkd.myshopify.com/cdn/shop/products/71dkYBl0WUL._SL1500_1024x1024@2x.jpg?v=1596896618',           emoji:'🦷', weight:'20gm',    price:10,  mrp:10,  category:'personal', stock:20 },

{id:'personal_enshine_brush_ultra_soft_55',name:'Enshine Brush Ultra Soft',image:'https://cdn2.clevup.in/356888/LeefordEnshineAdvanceCleanPlusToothbrushPackof3-1725115481697.jpeg?format=webp',emoji:'🪥',weight:'1pcs',price:55,mrp:55,category:'personal',stock:20},
{id:'personal_classic_gold_brush_hard_30',name:'Classic Gold Brush Hard',image:'https://m.media-amazon.com/images/I/61B3vJnaOZL._AC_UF1000,1000_QL80_.jpg',emoji:'🪥',weight:'1pcs',price:30,mrp:30,category:'personal',stock:20},
{id:'personal_ajay_brush_ultra_soft_36',name:'Ajay Brush Ultra Soft',image:'https://m.media-amazon.com/images/I/71Opb4eZgXL._AC_UF1000,1000_QL80_.jpg',emoji:'🪥',weight:'1pcs',price:36,mrp:36,category:'personal',stock:20},

{ id:'personal_godrej_black',   name:'Godrej Black Colour 1.0',            image:'https://www.bbassets.com/media/uploads/p/l/40051255_5-godrej-expert-rich-creme-hair-colour-single-use.jpg',       emoji:'🎨',                   price:30,  mrp:30,  category:'personal', stock:20 },
{ id:'personal_godrej_brown',   name:'Godrej Brown Colour 4.0',            image:'https://images.apollo247.in/pub/media/catalog/product/G/O/GOD0101_1-JULY23_1.jpg',      emoji:'🎨',                   price:30,  mrp:30,  category:'personal', stock:20 },
{ id:'personal_garnier_1',      name:'Garnier Deep Black 1.0',             image:'https://www.bbassets.com/media/uploads/p/xl/30003970_5-garnier-black-naturals-hair-colour.jpg',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_garnier_2',      name:'Garnier Natural Black 2.0',          image:'https://www.bbassets.com/media/uploads/p/xl/30003971_3-garnier-black-naturals-hair-colour.jpg',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_garnier_4',      name:'Garnier Brown Colour 4.0',           image:'https://m.media-amazon.com/images/I/61kAJmdgt1L._AC_UF1000,1000_QL80_.jpg',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_garnier_4',      name:'Garnier Red Colour ',           image:CLOUDINARY_BASE+'/imaghaircolor_garnier4.0.png',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_neha_black',     name:'Neha Black Colour',                   image:'https://m.media-amazon.com/images/I/71XetmsQg-L._AC_UF1000,1000_QL80_.jpg',         emoji:'🎨',                   price:10,  mrp:10,  category:'personal', stock:20 },
{ id:'personal_neha_brown',     name:'Neha Brown Colour',                   image:'https://5.imimg.com/data5/SELLER/Default/2024/7/431416984/QK/ZK/ZN/105125597/brown-neha-herbal-hair-mehndi-for-perso-500x500.jpeg',        emoji:'🎨',                   price:10,  mrp:10,  category:'personal', stock:20 },
{id:'personal_kaveri_mehendi_cone_1pcs',name:'Kaveri Mehendi Cone',image:'https://m.media-amazon.com/images/I/61EYJ2kfBYL._AC_UF1000,1000_QL80_.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'personal_neha_mehendi_cone_1pcs',name:'Neha Mehendi Cone',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2BUI_maW6cIwUKtGKmp2jEFKsabMEXH-9gH0IyZ3W8KiBS0v_EsRW_hej&s=10',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'personal_pantene_shampoo_180ml',name:'Pantene Shampoo',image:'https://www.bbassets.com/media/uploads/p/l/267847_15-pantene-advanced-hair-fall-solution-shampoo.jpg',emoji:'🧴',weight:'180ml',price:200,mrp:200,category:'personal',stock:20},


{ id:'personal_dermi_cool',     name:'Dermi Cool Powder Pack',              image:'https://shaktishingar.com/wp-content/uploads/2026/03/dermicool-menthol-regular-prickly-heat-powder-150-g-product-images-o493691731-p600278750-0-202505161934.webp',         emoji:'🧴', weight:'150gm',   price:150, mrp:155, category:'personal', stock:20 },
{ id:'personal_gillette_foam',  name:'Gillette Foam',                       image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F3680%2F1703224103460.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',               emoji:'🪒', weight:'196gm',   price:245, mrp:249, category:'personal', stock:20 },
{ id:'personal_gillette_lemon', name:'Gillette Lemon Foam',                 image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F3681%2F1695290028585.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',         emoji:'🪒', weight:'196gm',   price:245, mrp:249, category:'personal', stock:20 },
{ id:'personal_gillette_cream', name:'Gillette Regular Shaving Cream',      image:'https://www.bbassets.com/media/uploads/p/l/20004808_4-gillette-regular-pre-shave-cream.jpg',    emoji:'🪒', weight:'93gm',    price:70,  mrp:75,  category:'personal', stock:20 },
{ id:'personal_vijohn',         name:'Vi John Shaving Cream',               image:'https://m.media-amazon.com/images/I/610qjCEb+IL.jpg',        emoji:'🪒', weight:'196gm',   price:50,  mrp:55,  category:'personal', stock:20 },

{ id:'personal_gillette_guard_28',name:'Gillette Guard 7 Up To Save',image:'https://www.takoramart.com/_next/image?url=https%3A%2F%2Fimages.takoramart.com%2Fproducts%2F1785396357442-GILLETTE-GUARD-7SHAVES.webp&w=3840&q=75',emoji:'🪒',weight:'1pcs',price:28,mrp:28,category:'personal',stock:20},
{ id:'personal_gillette_use_throw_25',name:'Gillette Use And Throw (Stasat)',image:'https://images.ctfassets.net/7tfi3razjgvb/6izWMpzdgnga5vtItObx6a/7894ecf62d15bf11116ad2e13bdfcf27/DT_Overview_20Img_1ct_402x.png',emoji:'🪒',weight:'1pcs',price:25,mrp:25,category:'personal',stock:20},
{ id:'personal_gillette_wilkinson_15',name:'Gillette Wilkinson',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uvd9XZn9Xw3gHdaJgJWb0rAUjCN8uzz1PI43q4bdHWM4RqwNljHrO80&s=10',emoji:'🪒',weight:'1pcs',price:15,mrp:15,category:'personal',stock:20},
{ id:'personal_gillette_guard_blade_15rs', name:'Gillette Guard Blade', image:'https://images.apollo247.in/pub/media//catalog/product/G/I/GIL0213_1-JULY23_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w', emoji:'🪒', weight:'1pcs', price:15, mrp:15, category:'personal', stock:20 },

{ id:'personal_ponds_body_lotion', name:'Ponds Body Lotion', image:'https://www.bigbasket.com/media/uploads/flatpages/mailer-images-aug/40229721_280726_4.png', emoji:'🧴', weight:'200ml', price:145, mrp:150, category:'personal', stock:20 },
{ id:'personal_rose_water',     name:'VLCC Rose Water',                    image:'https://niram.in/cdn/shop/products/061-vlcc-rose-water-toner-pixies-chennai_1.jpg?v=1624661022',         emoji:'🧴', weight:'100ml',   price:145, mrp:150, category:'personal', stock:20 },
{ id:'personal_fair_handsome_cream_175g', name:'Fair & Handsome Cream', image:'https://www.bbassets.com/media/uploads/p/l/40268928_1-fair-and-handsome-long-lasting-radiance-cream-pro-peptide-protects-from-sun-damages-reduces-dark-spots.jpg', emoji:'🧴', weight:'175g', price:145, mrp:150, category:'personal', stock:20 },
{ id:'personal_clean_clear_facewash_40g', name:'Clean & Clear Face Wash', image:'https://www.bbassets.com/media/uploads/p/l/20004193_5-clean-clear-foaming-face-wash.jpg', emoji:'🧴', weight:'40g', price:40, mrp:40, category:'personal', stock:20 },

{ id:'personal_lux_50ml',       name:'Lux Body Wash',                      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScw5KSlnPPJevCab8SqlURk93gxGqKa-XJy_a-g2VLuSja2ycVIZBPrE&s=10',              emoji:'🧴', weight:'50ml',    price:25,  mrp:25,  category:'personal', stock:20 },
{ id:'personal_zandu_balm',     name:'Zandu Balm Green',                   image:'https://cdn01.pharmeasy.in/dam/products_otc/N02670/zandu-balm-for-instant-pain-relief-from-cold-headache-body-10ml-6.05-1778566075.jpg?dim=768x585&q=100',          emoji:'💊', weight:'25ml',    price:115, mrp:120, category:'personal', stock:20 },
{ id:'personal_dettol_650ml',   name:'Dettol Hand Wash',                   image:'https://www.bbassets.com/media/uploads/p/l/40034580_28-dettol-liquid-handwash-original-everyday-protection-fights-germs.jpg', emoji:'🧴', weight:'650ml',   price:95,  mrp:99,  category:'personal', stock:20 },
{ id:'personal_dettol_wash',    name:'Dettol First Aid',                   image:'https://cdn.zeptonow.com/production/ik-seo/tr:w-312,ar-1000-1000,pr-true,f-auto,q-40/cms/product_variant/f1d327e5-5a29-4083-a70a-d3384b96a015/Dettol-Antiseptic-Liquid-For-First-Aid-Surface-Disinfection-And-Personal-Hygiene.jpg',         emoji:'💊',                   price:120, mrp:120, category:'personal', stock:20 },
{ id:'personal_surf_matic',     name:'Surf Excel Matic',                   image:'https://www.bbassets.com/media/uploads/p/l/40281922_3-surf-excel-matic-liquid-top-load-removes-tough-stains-safe-on-clothes.jpg',   emoji:'🧺', weight:'1L',      price:145, mrp:149, category:'personal', stock:20 },

    // ══ POOJA ITEMS ══

{ id:'pooja_batasa_100gm', name:'Batasa', image:'https://m.media-amazon.com/images/I/71CFEh0kF6L._AC_UF894,1000_QL80_.jpg', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_nariyal_gola_100gm', name:'Nariyal Gola', image:'https://www.quickpantry.in/cdn/shop/products/khopra-goladry-coconut-premium-quality-quick-pantry.jpg?v=1710538284', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_dhagamishri_100gm', name:'Dhaga Mishri ', image:'https://m.media-amazon.com/images/I/71R86VbK+UL.jpg', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_mishri_100gm', name:'Mishri', image:'https://m.media-amazon.com/images/I/51JD0VNCc2L._AC_UF1000,1000_QL80_.jpg', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_mishri_packet', name:'Mishri Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611571/9.jpg', emoji:'🪔', weight:'100gm', price:10, mrp:25, category:'pooja', stock:20 },

    { id:'pooja_kumkum_5',          name:'Saraswati Kumkum',                   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuuU-muE6NHjbhofyQUSMIoEx63STwnzdUNh9IHADsQ&s',           emoji:'🪔', weight:'1pcs',    price:5,   mrp:5,   category:'pooja', stock:20 },
    { id:'pooja_sindoor_5',         name:'Hanuman Sindoor',                    image:'https://www.astromantra.com/wp-content/uploads/2024/10/Hanuman-Sindoor-1.webp',          emoji:'🪔', weight:'1pcs',    price:5,   mrp:5,   category:'pooja', stock:20 },
    { id:'pooja_hawan',             name:'Hawan Samagri',                      image:CLOUDINARY_BASE+'/image/pooja_hawan.png',             emoji:'🪔', weight:'200gm',   price:40,  mrp:40,  category:'pooja', stock:20 },
   { id:'pooja_prem_ghee_batti_30pcs', name:'Prem Ghee Batti', image:'https://summercoolindia.com/cdn/shop/files/2_jpg.jpg?v=1774090471', emoji:'🪔', weight:'30pcs', price:100, mrp:100, category:'pooja', stock:20 },

    { id:'pooja_kapoor_100g',       name:'Saraswati Kapoor',                   image:'https://storage.googleapis.com/shy-pub/22879/saraswati-camphor-kapoor-100gm-1722256152962_SKU-2592_0.png',               emoji:'🪔', weight:'100gm',   price:290, mrp:300, category:'pooja', stock:20 },
    { id:'pooja_kapoor_50g',        name:'Saraswati Kapoor',                   image:'https://m.media-amazon.com/images/I/71fwXuMTm-L._AC_UF1000,1000_QL80_.jpg',               emoji:'🪔', weight:'50gm',    price:140, mrp:150, category:'pooja', stock:20 },
    { id:'pooja_kapoor_45g',        name:'Saraswati Kapoor',                   image:'https://5.imimg.com/data5/SELLER/Default/2023/3/294249841/RC/MI/AK/92904392/45gm-saraswati-kapoor-tablet-500x500.jpg',                  emoji:'🪔', weight:'45gm',    price:120, mrp:135, category:'pooja', stock:20 },
    { id:'pooja_dhoop_hari_15',     name:'Hari Darshan Dhoop',                 image:'https://5.imimg.com/data5/ET/CT/DB/SELLER-14192463/hari-darshan-dhoop-500x500.jpg',            emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_delux',       name:'Hari Darshan Deluxe Dhoop',          image:'https://www.bbassets.com/media/uploads/p/l/40212651_4-hari-darshan-deluxe-dhoop-sticks.jpg',             emoji:'🪔', weight:'1pcs',    price:20,  mrp:25,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_fancy',       name:'Hari Darshan Fancy',                 image:'https://www.bbassets.com/media/uploads/p/l/40229568_2-hari-darshan-fancy-incense-dhoop-cones.jpg',             emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_sandal',      name:'Hari Darshan Sandal',                image:'https://www.bbassets.com/media/uploads/p/l/40229567_2-hari-darshan-sandal-incense-dhoop-cones.jpg',            emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_rose',        name:'Mangaldeep Rose Dhoop',              image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/mw6fnta2maqs5vvgb2a7',              emoji:'🪔', weight:'1pcs',    price:10,  mrp:20,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_mogra',       name:'Mangaldeep Mogra Dhoop',             image:'https://www.bbassets.com/media/uploads/p/l/40189002_1-mangaldeep-mogra-dhoop.jpg',             emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_zed_15',      name:'Zed Black Dhoop',                    image:'https://5.imimg.com/data5/SELLER/Default/2022/10/PJ/EU/HW/3305907/zed-black-dhoop-sticks-3-in-1-500x500.jpg',             emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_zed_gugal',   name:'Zed Black Gugal Dhoop',              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTGfsUu_rjaMyXodmsoaiiXOtb3IPsKFUcr6AoXv9zC8XO8HH5z27rFI&s=10',    emoji:'🪔', weight:'1pkt',    price:30,  mrp:30,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_zed_gulab',   name:'Zed Black Gulab Dhoop',              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfduABzym16tO6TcPaEGSGsExiCUxj4xSf_T-yuRP9w&s',          emoji:'🪔', weight:'1pkt',    price:30,  mrp:30,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_chandan',     name:'Zed Black Chandan Stick',            image:'https://m.media-amazon.com/images/I/61CoKmGazZL._AC_UF894,1000_QL80_.jpg',     emoji:'🪔', weight:'125gm',   price:70,  mrp:80,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_mogra_stick', name:'Zed Black Mogra Stick',              image:'https://m.media-amazon.com/images/I/61vPxVm8gTL._AC_UF894,1000_QL80_.jpg',       emoji:'🪔', weight:'125gm',   price:70,  mrp:80,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_patanjali',   name:'Patanjali Rose Dry Stick',           image:'https://www.patanjaliayurved.net/assets/product_images/400x500/1773116300_6800.webp',         emoji:'🪔', weight:'1pkt',    price:20,  mrp:20,  category:'pooja', stock:20 },
    { id:'pooja_naivedya',          name:'Cycle Naivedya',                     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9-DoQqfCDOiPLxM_C9eLEEMNFanS5gjF690NvmEXEoOHFFZvKMVAmyM&s=10',          emoji:'🪔', weight:'1pkt',    price:70,  mrp:72,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_cycle',   name:'Cycle Agarbatti',                    image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/8/12/6b400063-5bae-4770-b242-ca267c63096e_524303_1.png',             emoji:'🪔', weight:'1pkt',    price:50,  mrp:55,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_zed_10',  name:'Zed Black Agarbatti',                image:'https://www.bbassets.com/media/uploads/p/l/40200295_1-zed-black-agarbatti-zb-3-in-1.jpg',             emoji:'🪔', weight:'1pkt',    price:10,  mrp:10,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_bharat',  name:'Bharat Vasi Agarbatti',              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUAoTzkbpLsJxnobasABa-4g_MBUkUOo63c3TbGTiTYAy21OWyLRikGM&s=10',       emoji:'🪔', weight:'1pkt',    price:10,  mrp:13,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_tulasi',  name:'Tulasi Agarbatti',                   image:CLOUDINARY_BASE+'/image/aggarbatti17.png',            emoji:'🪔', weight:'1pkt',    price:15,  mrp:17,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_raj',     name:'Raj Pure Chandanam Agarbatti',       image:'https://cpimg.tistatic.com/11715436/b/4/pure-chandanam-incense-sticks.png',    emoji:'🪔', weight:'1pkt',    price:10,  mrp:15,  category:'pooja', stock:20 },

   { id:'pooja_homelite_matchbox_5pcs',  name:'Homelite Match Box', image:'https://storage.googleapis.com/shy-pub/22879/SKU-3966_0-1770360325150.png',  emoji:'🪔', weight:'5pcs',  price:10, mrp:10, category:'pooja', stock:20 },
{ id:'pooja_homelite_matchbox_10pcs', name:'Homelite Match Box', image:'https://www.bbassets.com/media/uploads/p/l/40027412_1-home-lite-matchbox-big.jpg', emoji:'🪔', weight:'1pcs',  price:10, mrp:10, category:'pooja', stock:20 },
{ id:'pooja_homelite_matchbox_1pcs',  name:'Homelite Match Box', image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/a7ca9083-d07e-4612-8c74-217f3ed55e3e/Matchbox.jpeg',  emoji:'🪔', weight:'1pcs',  price:2,  mrp:2,  category:'pooja', stock:20 },
{ id:'pooja_ship_matchbox_10pcs',     name:'Ship Match Box',     image:'https://5.imimg.com/data5/SELLER/Default/2022/11/BJ/YR/IG/35806921/61-jb3lqnbl-sl1200-.jpg',     emoji:'🪔', weight:'10pcs', price:10, mrp:10, category:'pooja', stock:20 },
{ id:'pooja_ship_matchbox_1pcs',      name:'Ship Match Box',     image:'https://5.imimg.com/data5/SELLER/Default/2022/11/RH/HD/DN/35806921/51hjaogqcdl.jpg',      emoji:'🪔', weight:'1pcs',  price:1,  mrp:1,  category:'pooja', stock:20 },

    // ══ CHIPS ══
    { id:'chips_haldiram_50',       name:'Haldiram Yellow Chips',              image:'https://cdn.shopify.com/s/files/1/0691/0948/1549/files/1_a4436bf9-8554-42af-9f44-8aadd0de1704.avif?v=1782651166',        emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_snaclite_50',       name:'Haldiram Snac Lite Katori',          image:'https://www.bbassets.com/media/uploads/p/xl/900459571_1-haldirams-snac-lite-soya-katori-masala-dhamaka.jpg',        emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_pudina_50',         name:'Haldiram Pudina Treat',              image:'https://cdn.shopify.com/s/files/1/0691/0948/1549/files/1_c2591032-f06e-4cd4-ab5a-558207ba26bc.avif?v=1782651096&width=400&format=webp',    emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_bicano_50',         name:'Bicano Crunchy Munchy',              image:'https://m.media-amazon.com/images/I/817u64QxcUL.jpg',          emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_mad_angles_50',     name:'Bingo Mad Angles',                   image:'https://www.bbassets.com/media/uploads/p/xl/40172829_11-bingo-mad-angles-chips-achaari-masti.jpg',         emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_crax_classic_20',   name:'Crax Natkhat Classic',               image:'https://m.media-amazon.com/images/I/71DNWRVd+NL.jpg',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_masala_20',    name:'Crax Natkhat Masala',                image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/18/b1c42499-0e53-4d76-b647-658fc7b20922_MPB6F6B13D_MN_17122025.png',     emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_cream_20',     name:'Crax Fritts Cream & Onion',          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDMC_VXFN6SNz0Htmmvx2WM_DRvi3l2sjKl6Z0LJn1Boz6yomhFqMAvrR&s=10',  emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_pasta_20',     name:'Crax Pasta Crunch',                  image:'https://m.media-amazon.com/images/I/71gMM+WP8QL.jpg',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_curls_20',     name:'Crax Curls',                         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN77jtH6pR3gDLpzbPdxucdd1BsIDkR7ovc-tVnkihWql_FNBwI6oNHIUQ&s=10',        emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_choco_20',     name:'Crax Choco Rings',                   image:'https://m.media-amazon.com/images/I/81QKrDBO9RL.jpg',       emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_fryumms_20',   name:'Crax Fryumms',                       image:'https://www.bbassets.com/media/uploads/p/l/40365315_1-crax-fryumms.jpg',    emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_t_20',   name:'Crax Rings Tangy Tomato',            image:'https://m.media-amazon.com/images/I/71o2iCuScsL.jpg',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_m_20',   name:'Crax Rings Masala Mania',            image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/9/6/56dcd98f-9c83-4e00-973a-031672a7d29e_10591_1.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_noodles_20',   name:'Crax Crunchy Noodles',               image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/11/27/0b510311-21d1-4ae4-b1bd-9c630283a3be_298397_1.png',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_peri_20',      name:'Crax Fritts Peri Peri',              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYk0C6fcFpXD7zOrZ_Pft2T-w74LTNPQqApeOwctn6IdhIpoJyBn5vXs&s=10',  emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_pipe_20',      name:'Crax Crunchy Pipe',                  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cmKv1huquoSH1nXxS-mstvFOt8-Ot3JMO5zRHCJfq9xc1we5qBPukbj1&s=10',         emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_masala_20', name:'Kurkure Masala Munch',               image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2026/6/9/47c49ed8-7fa7-4d03-8374-5b4d69ac52f2_9159_1.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chilli_20', name:'Kurkure Chilli Chatka',              image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/8/10/d6f441c7-baf8-4a22-ab1c-aab7f2655b75_2412_1.png',     emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_solid_20',  name:'Kurkure Solid Masti',                image:'https://www.bbassets.com/media/uploads/p/l/294294_15-kurkure-namkeen-solid-masti-twisteez.jpg',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chat_20',   name:'Kurkure Chatpata Masala',            image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2026/6/30/df557e52-e969-4b1b-92b6-c258e453bc9d_1.PT%20JP_MN_70ae6155-c198-43ef-a273-63d500de0a09.jpg',   emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_puff_20',   name:'Kurkure Puffcorn',                   image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2026/6/30/29deae10-063d-4f4f-9f53-434a20a9bc32_4.I%CC%88ngredients%20USP_AL1_01e860aa-449c-4fa2-954d-c59800459e25.jpg',   emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_yellow_20',    name:'Lays Yellow Classic Salted',         image:'https://m.media-amazon.com/images/I/71e7R+hp8cL._AC_UF350,350_QL80_.jpg',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_blue_20',      name:'Lays Blue India Magic Masala',       image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/4/16/8de6f4e3-61eb-4afa-b6e2-34a636b844c3_6053_4.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_green_20',     name:'Lays Green Classic Salted',          image:'https://cdn.grofers.com/da/cms-assets/cms/product_videos_thumbnails/1af848bb-e125-4304-8ae0-2c21630ba8a2.jpg',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_orange_20',    name:'Lays Orange West Indies',            image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F3560%2F1779427449257.jpg%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_red_20',       name:'Lays Red Spanish Tomato Tango',      image:'https://m.media-amazon.com/images/I/71GHQmE86HL.jpg',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_dg_20',        name:'Lays Dark Green Chile Limon',        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCEW55hIoOGtF_qFXAjeLJHP_nkbv7Fwtz-Yg0XExTSclIC1Oz0zY3gM&s=10',          emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_crispz_20',    name:'Lays Crispz',                        image:'https://m.media-amazon.com/images/I/718K8WaC6aL.jpg',        emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_uncle_20',          name:'Uncle Chips',                        image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/7/11/d07d8e38-2915-45eb-9a5a-4cabc019b905_1.UCspicytreat_primary_MN_3305ca39-2377-4abf-aa38-463046f8cfd3.jpg',        emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_classic_10',   name:'Crax Natkhat Classic',               image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/12/17/8402f564-c780-4eca-9294-30ba5419db7e_8RLSHC8WKY_MN_17122025.png',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_masala_10',    name:'Crax Natkhat Masala',                image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/18/b1c42499-0e53-4d76-b647-658fc7b20922_MPB6F6B13D_MN_17122025.png',     emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_cream_10',     name:'Crax Fritts Cream & Onion',          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDMC_VXFN6SNz0Htmmvx2WM_DRvi3l2sjKl6Z0LJn1Boz6yomhFqMAvrR&s=10',  emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_pasta_10',     name:'Crax Pasta Crunch',                  image:'https://m.media-amazon.com/images/I/71gMM+WP8QL.jpg',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_curls_10',     name:'Crax Curls',                         image:'https://www.bbassets.com/media/uploads/p/l/40358370_2-crax-curls-chatpata-masala.jpg',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_t_10',   name:'Crax Rings Tangy Tomato',            image:'https://m.media-amazon.com/images/I/71o2iCuScsL.jpg',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_m_10',   name:'Crax Rings Masala Mania',            image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/1/4/06716eea-3e6c-4449-9d1c-33e6617a55bf_10591_1.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_noodles_10',   name:'Crax Crunchy Noodles',               image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/11/27/0b510311-21d1-4ae4-b1bd-9c630283a3be_298397_1.png',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_pipe_10',      name:'Crax Crunchy Pipe',                  image:'https://rukmini1.flixcart.com/image/1500/1500/xif0q/snack-savourie/m/y/1/-enriched-transparent-original-imahg4tek8ppbqkz.png?q=70',         emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_masala_10', name:'Kurkure Masala Munch',               image:'https://www.bbassets.com/media/uploads/p/l/40068077_2-kurkure-namkeen-masala-munch.jpg',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chilli_10', name:'Kurkure Chilli Chatka',              image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryIbp-B-Bg-RF3Sr4T9Bga386m_S5CKw7U4UvfyyfrUA2QSEk32eMUTnH&s=10',     emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_solid_10',  name:'Kurkure Solid Masti',                image:'https://www.bbassets.com/media/uploads/p/l/40070746_7-kurkure-namkeen-solid-masti-twisteez.jpg',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chat_10',   name:'Kurkure Chatpata Masala',            image:'https://www.bbassets.com/media/uploads/p/xl/40363472_1-kurkure-chatpata-masala-jowar-puffs.jpg',   emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_puff_10',   name:'Kurkure Puffcorn',                   image:'https://m.media-amazon.com/images/I/716R9blhtmL._AC_UF894,1000_QL80_.jpg',   emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_sch_10',    name:'Kurkure Schezwan Chutney',           image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2026/8/10/e4a60775-622f-4595-a9c6-c27433374955_99074_1.png',  emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_yellow_10',    name:'Lays Yellow Classic Salted',         image:'https://m.media-amazon.com/images/I/71e7R+hp8cL._AC_UF350,350_QL80_.jpg',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_blue_10',      name:'Lays Blue India Magic Masala',       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7GDpd-Pytn-l6DwuyGi0CYyoreOJwCjujiXR4pck70EPCECuVnFw6_w&s=10',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_green_10',     name:'Lays Green Classic Salted',          image:'https://m.media-amazon.com/images/I/71gKmrEYnoL._AC_UF894,1000_QL80_.jpg',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_orange_10',    name:'Lays Orange West Indies',            image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product_videos_thumbnails/9193f069-c893-45c9-aa92-aa77d6838137.jpg',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_red_10',       name:'Lays Red Spanish Tomato Tango',      image:'https://www.bbassets.com/media/uploads/p/l/294283_18-lays-potato-chips-spanish-tomato-tango.jpg',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_dg_10',        name:'Lays Dark Green Chile Limon',        image:'https://assets.hyperpure.com/data/images/products/f12d6d530ae1bf75fe82ef5e794971a6.jpg',          emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_wafer_10',     name:'Lays Wafer Chips',                   image:'https://www.bbassets.com/media/uploads/p/l/40355960_1-lays-himalayan-pink-salt-wafer-chips.jpg',       emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_haldiram_10',       name:'Haldiram Classic Salted',            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-uKKW62zJ-9jf5sUzZG8E5A-SWRFI6EmPOphescGUmCVCbEfLaIz_FEU&s=10',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_doritos_10',        name:'Doritos Nacho Cheese',               image:'https://www.bbassets.com/media/uploads/p/xl/40201381_14-doritos-nacho-chips-nacho-cheese.jpg',         emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_doritos_sweet_10',  name:'Doritos Sweet Chilli',               image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaczRWv9J0jq1ZOCEyuu5ZhantD-13uZa1BUH_Yi8tNKRvruQzFPfHlK4&s=10',    emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_popcorn_10',        name:'Popcorn',                            image:CLOUDINARY_BASE+'/image/chips_popcorn.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_uncle_10',          name:'Uncle Chips',                        image:'https://www.bbassets.com/media/uploads/p/l/40015993_11-uncle-chips-spicy-treat.jpg',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_khatta_10',    name:'Oyes Khatta Meetha',                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLKfSXCWT8EvwqTdlBAGQlnCS5SxPQ3v1PaoLMMqJTAzaBXsjTvH1yGo&s=10',  emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_chinese_10',   name:'Oyes Chinese Tadka',                 image:'https://www.mastimagic.com/cdn/shop/files/oye-ch12_600x600.jpg?v=1774079828',       emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_cocktail_10',  name:'Oyes Cocktail',                      image:'https://www.snackspause.in/cdn/shop/files/IMG_8967.jpg?v=1735369534',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_cream_10',     name:'Oyes Cream And Onion',               image:'https://cdn.shopify.com/s/files/1/0523/9934/1736/files/WhatsAppImage2026-02-24at10.38.05AM.jpg?v=1771909983',    emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_manch_10',     name:'Oyes Manchurian',                    image:'https://cdn.grofers.com/da/cms-assets/cms/product/5af5ce4c-a758-4fe9-9ad0-98df185e99c1.jpg',         emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_tamatar_10',   name:'Oyes Talli Tamatar',                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCXPZGzz-jwjb71eT9LcrAUskHbrM1qicgSVDO2-FCQ&s',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_pudina_10',    name:'Oyes Tangy Pudina',                  image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/d05d2c47-0b8f-49d4-b52e-9f38b64da0b1.png?bg_token=color.background.quaternary',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },

    // ══ CHOCOLATES ══
   { id:'choc_kinder_joy_50', name:'Kinder Joy', image:'https://gharstuff.com/wp-content/uploads/2025/04/kinder-joy-blue-edition-surprise-chocolate-20-g-product-images-o490309134-p490309134-0-202507011217.webp', emoji:'🧁', weight:'1pcs', price:50, mrp:50, category:'chocolates', stock:20 },
     { id:'choc_kinder_joy_10', name:'Kinder Joy', image:'https://recloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/kinderjoy50.webp', emoji:'🧁', weight:'1pcs', price:10, mrp:10, category:'chocolates', stock:20 },
    { id:'choc_dairy_fn_107',        name:'Dairy Milk Fruit & Nut',             image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/a3107fc1-294a-4635-8e79-24a338c559ae/Cadbury-Dairy-Milk-Fruit-Nut-Chocolate-Bar-Pack.jpg',       emoji:'🧁', price:107,  mrp:107,  category:'chocolates', stock:20 },
    { id:'choc_dairy_100',          name:'Dairy Milk Chocolate',               image:'https://www.bbassets.com/media/uploads/p/l/40128409_18-cadbury-dairy-milk-family-pack-chocolate-bar.jpg',      emoji:'🧁', price:100, mrp:100, category:'chocolates', stock:20 },
    { id:'choc_dairy_53',           name:'Dairy Milk Chocolate',               image:'https://www.bbassets.com/media/uploads/p/l/40075989-2_2-cadbury-dairy-milk-chocolate.jpg',       emoji:'🧁', price:53,  mrp:53,  category:'chocolates', stock:20 },
    { id:'choc_dairy_fn_50',        name:'Dairy Milk Fruit & Nut',             image:'https://www.quickpantry.in/cdn/shop/files/Cadbury_Dairy_Milk_Fruit_Nut_Chocolate_Bar_Quick_Pantry.webp?v=1740325954',       emoji:'🧁', price:50,  mrp:50,  category:'chocolates', stock:20 },
    { id:'choc_dairy_45',           name:'Dairy Milk Chocolate',               image:'https://m.media-amazon.com/images/I/718ecxjECuL._SX679_.jpg',       emoji:'🧁', price:45,  mrp:45,  category:'chocolates', stock:20 },
    { id:'choc_dairy_20',           name:'Dairy Milk Chocolate',               image:'https://m.media-amazon.com/images/I/51Nv9p5YigL.jpg',       emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_dairy_10',           name:'Dairy Milk Chocolate',               image:'https://www.bbassets.com/media/uploads/p/xl/100020979_14-cadbury-dairy-milk-chocolate-bar.jpg',       emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_dairy_5',            name:'Dairy Milk Chocolate',               image:'https://m.media-amazon.com/images/I/51srRpaExZL.jpg', emoji:'🧁', price:5, mrp:5, category:'chocolates', stock:20 },
     { id:'choc_kitkat_50',          name:'Kit Kat Chocolate',                  image:'https://www.quickpantry.in/cdn/shop/products/kitkat-finger-wafer-chocolate-bar-55-g-quick-pantry.jpg?v=1710539021',         emoji:'🧁', price:50,  mrp:50,  category:'chocolates', stock:20 },
    { id:'choc_kitkat_35',          name:'Kit Kat Chocolate',                  image:'https://5.imimg.com/data5/SELLER/Default/2025/5/509225583/SP/GO/KC/71582518/nestle-kitkat-4-fingers-choco-coated-wafer-bar.jpg',         emoji:'🧁', price:35,  mrp:35,  category:'chocolates', stock:20 },
    { id:'choc_kitkat_20',          name:'Kit Kat Chocolate',                  image:'https://www.bbassets.com/media/uploads/p/l/100532699_39-nestle-kitkat-crispy-wafer-bar.jpg',         emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_kitkat_10',          name:'Kit Kat Chocolate',                  image:'https://cdn.zeptonow.com/production/ik-seo/inventory/product/c5cba2f7-ada0-4a8b-9ccb-e10eb835fca2-6fcc15e5-315f-4aac-9cfa-7ebea6c58989/Nestle-Kitkat-Choco-Coated-Wafer-Bar-Chocolate.jpeg',         emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_milkybar_20',        name:'Milky Bar Chocolate',                image:'https://5.imimg.com/data5/ECOM/Default/2025/1/479597679/YN/CO/EU/109941460/1310003638-1736404085862.jpeg',    emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_milkybar_10',        name:'Milky Bar Chocolate',                image:'https://dukaan.b-cdn.net/1000x1000/webp/master/products/milkybar-moosha-rs-10.png',    emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_5star_20',           name:'5 Star Chocolate',                   image:'https://tangyshopindia.com/cdn/shop/files/cadbury-5-star-chocolate-india-tangy-shop-tangy-shop-620235.png?v=1736381107',        emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_5star_10',           name:'5 Star Chocolate',                   image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2026/7/13/1c712a1e-2065-4d8f-b0c4-295a964c677d_1_MN_164cdeb9-5814-4813-a069-54080ecfddd1.png',       emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_5star_5',            name:'5 Star Chocolate',                   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWak0yk7iYGI8TlC4YZAGdO7rmjyxYIFfczfIolqkOSYb4-UUZgaAK6mpP&s=10',        emoji:'🧁', price:5,   mrp:5,   category:'chocolates', stock:20 },
    { id:'choc_perk_10',            name:'Perk Chocolate',                     image:'https://images.apollo247.in/pub/media/catalog/product/p/e/per0056_5.jpg',        emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_munch_10',           name:'Munch Chocolate',                    image:'https://www.bbassets.com/media/uploads/p/l/40018536_22-nestle-munch-crunchlicious-chocolate-coated-wafer-bar.jpg',        emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_munch_5',            name:'Munch Chocolate',                    image:'https://www.bbassets.com/media/uploads/p/l/40123183_2-nestle-maha-munch-chocolate.jpg',        emoji:'🧁', price:5,   mrp:5,   category:'chocolates', stock:20 },
      { id:'choc_merlin_5',            name:'Merlin Chocolate',                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i5YYavmn5FmnVgqaY-OMLWSF8lTUy0qdfoyW-ehi2N_kGLeIP9d2uIc&s=10',        emoji:'🧁', price:5,   mrp:5,   category:'chocolates', stock:20 },
{id:'choc_lotte_chocopie_10',name:'Lotte Chocopie',image:'https://www.lotteindia.com/images/choco-pause-button-img.png',emoji:'🍫',weight:'1Pcs',price:10,mrp:10,category:'chocolates',stock:20},
{id:'choc_chupa_chups_5',name:'Chupa Chups',image:'https://img.lazcdn.com/g/p/2a0d917dbd2a3596fef1770459203efe.png_720x720q80.png',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_harvest_brownie_walnut_20',name:'Harvest Brownie Real Walnut',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcuL0bVbe3h0Jdoy0VtWeZeWUZ2EdODfqdPexvnhvWA&s',emoji:'🧁',price:20,mrp:20,category:'chocolates',stock:20},
{id:'choc_harvest_brownie_chocolate_20',name:'Harvest Brownie Chocolate',image:'https://www.bbassets.com/media/uploads/p/xl/40347836-7_2-harvest-gold-walnut-brownie.jpg',emoji:'🧁',price:20,mrp:20,category:'chocolates',stock:20},

{id:'choc_alpenliebe_eclairs_lollipop_5',name:'Alpenliebe Eclairs Lollipop',image:'https://media.licdn.com/dms/image/v2/D5622AQHX2gKH1Ni4mg/feedshare-shrink_800/B56ZYF8lc8GsAg-/0/1743856491229?e=2147483647&v=beta&t=wotpQT_CFGHjvel39p193gNo5D93VfmRxa4kUp1VGr0',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_orange_5',name:'Jolly Rancher Orange Lolipop',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZPv-9cdTYzb_CZ5FqQypysMXVrwniNhqMIYjqcV-LE_yWWiMkAF1hyI&s=10',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_mango_5',name:'Jolly Rancher Mango Lolipop',image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/32945cfe-c5e4-464a-b147-8e5e0fffc46a.png?bg_token=color.background.quaternary',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_strawberry_5',name:'Jolly Rancher Strawberry Lolipop',image:'https://cdn.grofers.com/da/cms-assets/cms/product/a8153c77-8b9b-441f-a172-eaed7039bd0e.jpg',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_watermelon_5',name:'Jolly Rancher Watermelon Lolipop',image:'https://dukaan.b-cdn.net/700x700/webp/upload_file_service/da1604e7-7d28-4322-98ff-7ad3181f8f31/whrmelobn-lolipop-1.jpg',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},

{id:'choc_vicks_toffee_1',name:'Vicks Toffee',image:'https://m.media-amazon.com/images/I/71sX6Bx0aML._AC_UF350,350_QL80_.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_naturaly_imli_toffee_1',name:'Naturaly Imli Toffee',image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/ee196f1e-e499-4c64-b2d7-2f1c3f81e6c0/Funda-Imli-Pouch.jpeg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_imli_1',name:'Hajmola Imli',image:'https://tangyshopindia.com/cdn/shop/files/hajmola-imli-pack-of-20-tangy-shop-909541.png?v=1736381045',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_anardana_1',name:'Hajmola Anardana',image:'https://tangyshopindia.com/cdn/shop/files/hajmola-anardana-pack-of-20-tangy-shop-899018.png?v=1736381039',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_regular_1',name:'Hajmola Regular',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMbhS-pvmejjKnAquK27wAPiWNYQTSNHhESyo3ZtWcM2Ynw34Ff3f_h0&s=10',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_toffee_1',name:'Hajmola Toffee',image:'https://www.goodfoodbar.com/cdn/shop/files/WhatsApp-Image-2023-07-30-at-1.57.16-PM.jpg?v=1721040100',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},

{id:'choc_orbit_lemon_5',name:'Orbit Lemon Flavour',image:'https://www.bbassets.com/media/uploads/p/xl/40024673_9-wrigleys-orbit-sugar-free-chewing-gum-lemon-lime.jpg',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_orbit_sweetmint_5',name:'Orbit Sweetmint Flavour',image:'https://www.bbassets.com/media/uploads/p/l/40024678_8-orbit-sugar-free-chewing-gum-sweetmint.jpg',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_orbit_mixed_fruit_5',name:'Orbit Mixed Fruit Flavour',image:'https://www.bbassets.com/media/uploads/p/l/40024675_7-orbit-sugar-free-chewing-gum-mixed-fruit.jpg',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_orbit_spearmint_5',name:'Orbit Spearmint Flavour',image:'https://www.bbassets.com/media/uploads/p/l/40123373_9-orbit-sugar-free-chewing-gum-spearmint.jpg',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_polo_10',name:'Polo Toffee',image:'https://m.media-amazon.com/images/I/716J75wkqTL.jpg',emoji:'🍬',price:10,mrp:10,category:'chocolates',stock:20},

{id:'choc_pulse_toffee_1',name:'Pulse Toffee',image:'https://5.imimg.com/data5/PO/FI/MY-3961221/green-pulse-candy.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_melody_toffee_1',name:'Melody Toffee',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMtCNGHQfrq6VfGn9VJNdQI4QJcHIDOuTU61JE579H_8gySXrpYQsWOI&s=10',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_londonderry_toffee_1',name:'Londonderry Toffee',image:'https://tangyshopindia.com/cdn/shop/files/parle-londonderry-candy-pack-of-20pcs-143520.jpg?v=1736380458',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_cadbury_eclairs_2',name:'Cadbury Eclairs Toffee',image:'https://helloaugust.in/wp-content/uploads/2020/04/cadbury-eclairs.jpg',emoji:'🍬',price:2,mrp:2,category:'chocolates',stock:20},
{id:'choc_alpenliebe_creamfills_1',name:'Alpenliebe Creamfills Toffee',image:'https://m.media-amazon.com/images/I/61ePuKLbaeL._AC_UF350,350_QL80_.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_alpenliebe_gold_1',name:'Alpenliebe Gold Toffee',image:'https://m.media-amazon.com/images/I/61Rs56nxvRL._AC_UF350,350_QL80_.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_kopiko_toffee_1',name:'Kopiko Toffee',image:'https://cdn.zeptonow.com/production/ik-seo/cms/product_variant/354e6ba5-bc46-4a3f-b89b-36e07b014629/KOPIKO-Cappuccino-Coffee-Candy-Family-Pack.jpeg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_mango_bite_1',name:'Mango Bite Toffee',image:'https://tangyshopindia.com/cdn/shop/files/mango-bite-pack-of-20-tangy-shop-tangy-shop-211806.png?v=1736380589',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_just_jelly_1',name:'Just Jelly Toffee',image:'https://cdn.shopify.com/s/files/1/0523/9934/1736/products/Alpenliebe-Just-Jelly-Toffee-Strawberry-SDL484825492-1-8c4d0.jpg?v=1633681969',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_kismi_toffee_1',name:'Kismi Toffee',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlGg0cbVlApHai_nEbPz4bM4vcX5IgKCR5-PDIf5q99umSs37be4GoKU&s=10',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_centerfruit_1',name:'Centerfruit Toffee',image:'https://tangyshopindia.com/cdn/shop/files/center-fruit-20-pcs-chewing-gum-tangy-shop-137952.jpg?v=1736381110',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_centerfresh_1',name:'Centerfresh Toffee',image:'https://tangyshopindia.com/cdn/shop/files/center-fresh-20pcs-chewing-gum-tangy-shop-293750.jpg?v=1736381113',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_alpenliebe_eclairs_1',name:'Alpenliebe Eclairs Toffee',image:'https://rukmini1.flixcart.com/image/1500/1500/xif0q/candy-mouth-freshener/j/h/c/-original-imagpzq5uk4jm7px.jpeg?q=70',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},



    // ══ STATIONARY ══
    { id:'stat_apsara_pencil',      name:'Apsara Pencil',                      image:'https://store.1vp.in/wp-content/uploads/2025/06/Apsara-Pencil.jpg',  emoji:'🖊️', price:50, mrp:50, category:'stationary', stock:20 },
    { id:'stat_nataraj_pencil',     name:'Nataraj Pencil',                     image:'https://m.media-amazon.com/images/I/71x-akW2l5L.jpg', emoji:'🖊️', price:50, mrp:50, category:'stationary', stock:20 },
    { id:'stat_bf_blue_pen',        name:'Butterflow Blue Pen',                image:'https://5.imimg.com/data5/KH/EL/JC/GLADMIN-69030649/selection-851-500x500-500x500.png',    emoji:'🖊️', price:10, mrp:10, category:'stationary', stock:20 },
    { id:'stat_bf_black_pen',       name:'Butterflow Black Pen',               image:'https://shop.ourstore.in/wp-content/uploads/2022/11/DSC2597-scaled.jpg',   emoji:'🖊️', price:10, mrp:10, category:'stationary', stock:20 },
    { id:'stat_a4_color',           name:'A4 Colourful Sheet',                 image:'https://solo.in/cdn/shop/files/a4-coloured-papers-5-sheets-each-color-copy-printingart-and-craft-paper-double-sided-805547_1800x1800.webp?v=1742021714',        emoji:'🖊️', price:40, mrp:40, category:'stationary', stock:20 },
{ id:'stat_fevikwik_5rs', name:'Fevikwik', image:'https://www.himalayafineart.com/cdn/shop/files/A00013418.jpg?v=1752149907', emoji:'🖊️', weight:'1pcs', price:5, mrp:5, category:'stationary', stock:20 },
{ id:'stat_fevikwik_onedrop', name:'Fevikwik One Drop', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ud8jgCZcMvtrDSqQX2fFBTUegt4EDUVRIkuXVpGAntpqBAtJ-PbAm-97&s=10', emoji:'🖊️', weight:'1pcs', price:10, mrp:10, category:'stationary', stock:20 },
{ id:'stat_fevicol_10rs',        name:'Fevicol',             image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVraTPm0QERGOPxX8v9hJ1bVtnsFqqmRZXZ1oRL09SupbmSobMfujeO6u_&s=10',          emoji:'🖊️', weight:'1pcs', price:10, mrp:10, category:'stationary', stock:20 },



     // ══ Maggie ══
     
 {id:'maggie-6-pack',name:'2 Minutes Maggi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGODnoQFC12meML6xihxdPfqWCh1WAsgESUrI710Ljiayxkz2rGGE4xM_N&s=10',emoji:'🍜',weight:'6 Pack',price:83,mrp:83,category:'snacks',stock:20},

{id:'atta-maggi-4-pack',name:'Atta Maggi',image:'https://image.aapkabazar.co/product/7044/1672837569142.png?type=png',emoji:'🍜',weight:'4 Pack',price:103,mrp:103,category:'snacks',stock:20},

{id:'maggie-4-pack',name:'2 Minutes Maggi',image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F2301%2F1668064976041.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',emoji:'🍜',weight:'4 Pack',price:56,mrp:56,category:'snacks',stock:20},

{id:'schezwan-maggi',name:'Schezwan Maggi',image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/ciw/2025/12/18/0dab5921-37f7-4d60-a43b-6e7dfebf525b_BYHV4NDQZN_MN_18122025.png',emoji:'🍜',weight:'1 Pc',price:20,mrp:20,category:'snacks',stock:20},

{id:'atta-maggi-single',name:'Atta Maggi',image:'https://m.media-amazon.com/images/I/718bT19y+eL.jpg',emoji:'🍜',weight:'1 Pc',price:30,mrp:30,category:'snacks',stock:20},

{id:'masala-atta-maggi',name:'Masala Atta Maggi',image:'https://m.media-amazon.com/images/I/61Ick5R7bRL._AC_UF894,1000_QL80_.jpg',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'maggi-single',name:'2 Minutes Maggi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEgm3idHV2Qxl5VadUSLyTkVVCn5adYAdYm-F_ALdyAC6joPFUcHDPyE&s=10',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'yippee-noodles',name:'Yippee Noodles',image:'https://m.media-amazon.com/images/I/81a-joF7g-L._AC_UF894,1000_QL80_.jpg',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'mario-tez-tadka',name:'Mario Tez Tadka Noodles',image:'https://m.media-amazon.com/images/I/61hmFyrHNML.jpg',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'mario-noodles',name:'Mario Noodles',image:'https://www.bbassets.com/media/uploads/p/l/40243820_2-mario-instant-noodles-masala-calcium-protein-enriched-with-seasoning-mix.jpg',emoji:'🍜',weight:'1 Pc',price:10,mrp:10,category:'snacks',stock:20},

{id:'snack_bambino_macroni_10',name:'Bambino Macroni',image:'https://www.allhomeproduct.in/wp-content/uploads/2019/08/Bambino-Pep-Elbow-Macaroni-Pasta-450-g.jpg',emoji:'🍜',weight:'1 Pc',price:10,mrp:10,category:'snacks',stock:20},

{id:'snack_chowmein_10',name:'Chawmein',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339885-Photoroom.png',emoji:'🍜',weight:'1pcs',price:10,mrp:10,category:'snacks',stock:20},      

       // ══ Farmley ══

 {id:'farmley-date-bites-small',name:'Farmley Date Bites',image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/c0142005-7d04-4415-b476-3bd9a575ea93.png',emoji:'🍫',weight:'1 Pc',price:40,mrp:40,category:'chocolates',stock:20},
{id:'farmley-apple-pie-small',name:'Farmley Apple Pie',image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/8/12/bc53d9bc-d9e3-47d7-b9f5-7de34f08ceed_714091_1.png',emoji:'🍫',weight:'1 Pc',price:40,mrp:40,category:'chocolates',stock:20},
{id:'farmley-dark-choco-orange-small',name:'Farmley Dark Choco Orange',image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/ciw/2025/2/13/f39532a7-5984-49dc-891d-f65b80aeb985_123435_3_20250213_083347.png',emoji:'🍫',weight:'1 Pc',price:40,mrp:40,category:'chocolates',stock:20},
{id:'farmley-apple-pie-big',name:'Farmley Apple Pie',image:'https://www.farmley.com/cdn/shop/files/2_1_d892f488-eb35-475a-89af-ab485918e09e.jpg?format=webp&v=1769603038&width=3840',emoji:'🍫',weight:'1 Pc',price:200,mrp:200,category:'chocolates',stock:20},
{id:'farmley-date-bites-big',name:'Farmley Date Bites',image:'https://www.farmley.com/cdn/shop/files/classic_DB_KV.png?v=1769665648&width=1400',emoji:'🍫',weight:'1 Pc',price:200,mrp:200,category:'chocolates',stock:20},
{id:'farmley-dark-choco-orange-big',name:'Farmley Dark Choco Orange',image:'https://www.farmley.com/cdn/shop/files/2.jpg?format=webp&v=1769665678&width=3840',emoji:'🍫',weight:'1 Pc',price:200,mrp:200,category:'chocolates',stock:20},
{id:'farmley-panchmeva',name:'Farmley Panchmeva',image:'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/2/18/c35f0deb-4376-44a0-a301-c687ec2e561a_54053_1.png',emoji:'🍫',weight:'1 Pc',price:30,mrp:30,category:'chocolates',stock:20},
         
// ══ Shampoo ══
{ id:'personal_dettol_powder_handwash_10', name:'Dettol Handwash Powder', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHDSwA-415kkotoXzpG0fkzzlDiK4IEV3_tNkOGux3_R-PvxaObvpryjp&s=10', emoji:'🧴', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_godrej_powder_handwash_10', name:'Godrej Handwash Powder', image:'https://www.bbassets.com/media/uploads/p/l/40149067_2-godrej-protekt-mr-magic-powder-to-liquid-germ-protection-handwash-refill-makes-200-ml-of-liquid.jpg', emoji:'🧴', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },

 {id:'denver-powder',name:'Denver Powder',        image:'https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/29262814/2025/4/21/c4c9d7aa-0391-404a-9b06-8045bc263c561745216614545-Denver-Men-Black-Code-Cologne-Talc-with-UV-Radiation-Protect-1.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
 {id:'himalaya-lip-balm',name:'Himalaya Lip Balm',        image:'https://aapkabazar.co/_next/image?url=https%3A%2F%2Fimage.aapkabazar.co%2Fproduct%2F6651%2F1737033581565.png%3Ftype%3Dwebp%26width%3D600&w=3840&q=75',emoji:'💄',weight:'1pcs',price:40,mrp:40,category:'personal',stock:20},
{id:'vaseline',name:'Vaseline',     image:'https://martssr.com/images/product-images/1703051766362685501.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'joy-skin-fruit-cream',name:'Joy Skin Fruit Cream',image:'https://www.quickpantry.in/cdn/shop/products/joy-skin-fruits-fruit-moisturizing-skin-cream-quick-pantry-4.jpg?v=1710538670',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'joy-honey-almond-cream',name:'Joy Honey & Almond Cream',image:'https://www.samyaksupermart.com/cdn/shop/files/Addasubheading-2025-10-17T173201.989_0df7dbb5-6355-4af1-9f05-2da29d1d11c2.png?v=1760702609',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'boroplus',name:'Boroplus',image:'https://tiimg.tistatic.com/fp/1/006/338/boroplus-antiseptic-cream-870.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'boroline',name:'Boroline',image:'https://tiimg.tistatic.com/fp/1/006/336/boroline-antiseptic-ayurvedic-cream-827.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'comfort',name:'Comfort',image:'https://kiranamarket.com/wp-content/uploads/2023/03/8901030865909.jpg',emoji:'🧴',weight:'1pcs',price:5,mrp:5,category:'personal',stock:20},
{id:'mediker',name:'Mediker',image:'https://www.quickpantry.in/cdn/shop/files/Mediker_Anti-Lice_Treatment_Shampoo_5_ml.webp?v=1721380715',emoji:'🧴',weight:'1pcs',price:7,mrp:7,category:'personal',stock:20},
{id:'dove-shampoo-conditioner',name:'Dove Shampoo & Conditioner',image:'https://dms.mydukaan.io/original/jpeg/127502/d8f706aa-ade7-44e8-99e8-e169ada138a4.png',emoji:'🧴',weight:'1pcs',price:5,mrp:5,category:'personal',stock:20},

{id:'head_shoulder2in1',name:'Head & Shoulder 2 in 1 ',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCUgGCtZ-NCfYesMK9BrGA6zulMIYK9hjqBNpUf_th8mOs_CzbkvaJTyp&s=10',emoji:'🧴',weight:'1pcs',price:4,mrp:4,category:'personal',stock:20},
{id:'dove-conditioner',name:'Dove Conditioner',image:'https://storage.googleapis.com/shy-pub/22879/SKU-2343_0-1771915662040.png',emoji:'🧴',weight:'1pcs',price:4,mrp:4,category:'personal',stock:20},
{id:'dove-shampoo',name:'Dove Shampoo',image:'https://storage.googleapis.com/shy-pub/22879/SKU-1800_0-1771915463201.png',emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'tresemme',name:'Tresemme',image:'https://cdn.dotpe.in/longtail/store-items/1087846/8zpIaZjc.webp',emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'head_shoulder2',name:'Head & Shoulder ',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInf1yFjde425FbLrv-EKnZoHDXLK4KUYh6fG2nJdWov2YaS5_fALvgHQ&s=10',emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'head_shouldercool',name:'Head & Shoulder Cool ',image:'https://cdn2.clevup.in/334623/SKU-0592_0-1744442432764.jpg?format=webp', emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'sunsilk-black',name:'Sunsilk Black',image:'https://www.quickcartapp.in/media/image?path=uploads%2Fmedia%2F2025%2FIMG-20250916-WA0005.jpg&width=800&quality=80',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},
{id:'sunsilk-pink',name:'Sunsilk Pink',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdn0nVw6dFEDkPRsO1ckpkxOZk1F5zeOK0Q5d1_F8gOOUUwLCX3CGJYr5&s=10',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},
{id:'vatika',name:'Vatika',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnXvANK732qz3vz53Zim1XGgVF8NzwYPIzASGc4m-Z3f9HLcdY8Azy1gB&s=10',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},
{id:'clinic-plus',name:'Clinic Plus',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqweCLHWhahVLNqrez2gVOUAoSQhsGW7v53XkO7UIRHPbGToZD5IWNXfge&s=10',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},

{id:'navratan-oil-1pack',name:'Navratan Oil Pack',image:'https://i.pinimg.com/736x/87/86/20/878620e6e1125244827d4567b551c7b7.jpg',emoji:'🧴',price:1,mrp:1,category:'pack',stock:15},
    {id:'himgange-oil-1pack',name:'Himgange Oil Pack',image:'https://pbs.twimg.com/media/Ec9eN9AUYAEeXng.jpg',emoji:'🧴',price:1,mrp:1,category:'pack',stock:15},


{id:'personal_ezee_liquid_pack',name:'Ezee Liquid Pack',image:'https://5.imimg.com/data5/ECOM/Default/2023/8/334165424/HL/TJ/NA/133894414/1667884898690-sku-0853-0.jpeg',emoji:'🧺',weight:'1pcs',price:5,mrp:5,category:'pack',stock:20},

{id:'mediker-pack',name:'Mediker Pack',image:'https://storage.googleapis.com/shy-pub/394829/SKU-0463_0-1728192877198.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'dove-shampoo-conditioner-pack',name:'Dove Shampoo & Conditioner Pack',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjr9-hcSwW6aoZgl2L1e9KBt75rd1NHSp-JTEmJdQBxMJhKoUg2LXvHg&s=10',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'head-shoulder-2-in-1-pack',name:'Head & Shoulder 2 in 1 Pack',image:'https://i.ebayimg.com/images/g/lDYAAOSw4hRhvYRv/s-l400.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'dove-conditioner-pack',name:'Dove Conditioner Pack',image:'https://5.imimg.com/data5/SELLER/Default/2023/5/305952270/HG/SZ/LL/123467603/new-product-500x500.jpeg',emoji:'🧴',weight:'16pcs',price:4,mrp:4,category:'pack',stock:20},
{id:'dove-shampoo-pack',name:'Dove Shampoo Pack',image:'https://5.imimg.com/data5/NSDMERP/Default/2024/3/405313683/IX/AO/QQ/191408134/191408134-product-1711708448190.jpeg',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'tresemme-pack',name:'Tresemme Pack',image:'https://jgkkiranastore.com/resource/products/YcjKlcne4HeQYPUzx512.jpg?f=1',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'head-shoulder-pack',name:'Head & Shoulder Pack',image:'https://myawse-commerceapp.s3.ap-south-1.amazonaws.com/ProductImages/1756496489362-80-min-5.jpg',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'head-shoulder-cool-pack',name:'Head & Shoulder Cool Pack',image:'https://i.ebayimg.com/images/g/yVoAAOSwSANknxVf/s-l1200.jpg',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'sunsilk-black-pack',name:'Sunsilk Black Pack',image:'https://static.wixstatic.com/media/a962c7_2073ecb5c4bb47eeb703213e808cfce0~mv2.jpg/v1/fill/w_496,h_661,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a962c7_2073ecb5c4bb47eeb703213e808cfce0~mv2.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'sunsilk-pink-pack',name:'Sunsilk Pink Pack',image:'https://static.wixstatic.com/media/a962c7_248eba98d93149dba1fbcca014e7da4d~mv2.jpg/v1/fill/w_544,h_725,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a962c7_248eba98d93149dba1fbcca014e7da4d~mv2.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'vatika-pack',name:'Vatika Pack',image:'https://static.wixstatic.com/media/b13348_7a938b872bec44e0b311a5385a6b5e97~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'clinic-plus-pack',name:'Clinic Plus Pack',image:'https://epeedikaonline.com/assets/products/original/products_qcouly.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},


// ══ Veeba ══
{ id:'spices_chilli_vinegar_50ml', name:'Chilli Vinegar', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/chilli_vinegar_50.webp', emoji:'🥫', weight:'1pcs', price:50, mrp:50, category:'spices', stock:20 },
{id:'veeba-mayonnaise-eggless',name:'Mayonnaise Eggless',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165517/veeba_mayonnaise_46.webp',emoji:'🥫',weight:'100 gm',price:45,mrp:46,category:'spices',stock:20},
{id:'veeba-mayonnaise-burger',name:'Mayonnaise Burger',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165516/veeba_mayonnaise_burger_47.webp',emoji:'🍔',weight:'100 gm',price:47,mrp:47,category:'spices',stock:20},
{id:'veeba-pizza-pasta-sauce-herby-tomato',name:'Pizza Pasta Sauce Herby Tomato',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165517/veeba_pasta_pizza_sauce_46.webp',emoji:'🍝',weight:'100 gm',price:46,mrp:46,category:'spices',stock:20},

{id:'veeba-red-chilli-sauce',name:'Red Chilli Sauce',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165516/veeba_red_chilli_sauce_25.webp',emoji:'🌶️',weight:'90 gm',price:25,mrp:25,category:'spices',stock:20},
{id:'veeba-green-chilli-sauce',name:'Green Chilli Sauce',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165517/veeba_green_chilli_sauce_25.jpg',emoji:'🌶️',weight:'90 gm',price:25,mrp:25,category:'spices',stock:20},
{id:'schezwan-chutney',name:'Schezwan Chutney',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/schezwan_chutney_10.jpg',emoji:'🥣',weight:'30 gm',price:10,mrp:10,category:'spices',stock:20},

{id:'spice_schezwan_sauce_10',name:'Schezwan Sauce',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/schezwan_sauce.jpg',emoji:'🌶️',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_pizza_pasta_sauce_10',name:'Pizza Pasta Classic Sauce',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/pizza_pasta_classic_sauce.jpg',emoji:'🍝',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_mayonnaise_10',name:'Mayonnaise',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/mayonnaise_10.jpg',emoji:'🥫',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_sandwich_spread_10',name:'Sandwich Spread Mayonnaise',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/sandwich_spread.webp',emoji:'🥫',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_coriander_mint_mayo_10',name:'Coriander Mint Mayonnaise',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/coriander_mint_mayonnaise.jpg',emoji:'🥫',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},


{ id:'puro_salt_1kg',       name:'Puro Healthy Salt', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/Puro_salt_99.webp', emoji:'🧂', weight:'1kg',  price:95, mrp:99, category:'spices', stock:20 },
{ id:'tata_salt_1kg',       name:'Tata Salt',         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781550888/241600_9-tata-salt-iodized.webp', emoji:'🧂', weight:'1kg',  price:30, mrp:30, category:'spices', stock:20 },
{ id:'Black_salt_1kg',       name:'Black Salt',         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543681/1000339887-Photoroom.png', emoji:'🧂', weight:'1kg',  price:30, mrp:30, category:'spices', stock:20 },

{ id:'kala_namak_15',       name:'Kala Namak',        image:'https://r.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/Puro_salt_99.webp', emoji:'🧂', weight:'1pcs', price:15, mrp:15, category:'spices', stock:20 },
{ id:'sendha_namak_15',     name:'Sendha Namak',      image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332634/sendha_namak_15.jpg', emoji:'🧂', weight:'1pcs', price:15, mrp:15, category:'spices', stock:20 },

{id:'spice_chilli_flakes_10',name:'Chilli Flakes',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/chilli_flakes.jpg',emoji:'🌶️',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_msg_10',name:'MSG (Monosodium Glutamate)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332643/Monosodium_Glutamate_MSG.jpg',emoji:'🧂',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_oregano_10',name:'Oregano',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537332/IMG_20260615_205547.png',emoji:'🌿',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_oregano_seasoning_10',name:'Oregano Seasoning',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537330/IMG_20260615_205525.png',emoji:'🌿',weight:'1pcs',price:10,mrp:10,category:'spices',stock:20},
{id:'spice_dabur_honey_250gm',name:'Dabur Honey',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332639/dabur_honey.webp',emoji:'🍯',weight:'300gm',price:120,mrp:130,category:'oil',stock:20},
{id:'spice_Amul_honey_250gm',name:'Amul Honey',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522908/40359558_1-amul-honey.webp',emoji:'🍯',weight:'300gm',price:120,mrp:130,category:'oil',stock:20},
{ id:'pack_strong_hing', name:'Strong Hing pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/mdh_hing.webp', emoji:'🧂', weight:'10gm', price:250, mrp:250, category:'spices', stock:20 },
{ id:'pack_mdh_hing', name:'MDH Hing pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/mdh_hing.webp', emoji:'🧂', weight:'10gm', price:100, mrp:100, category:'spices', stock:20 },
{ id:'pack_everest_hing', name:'Everest Hing pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/mdh_hing.webp', emoji:'🧂', weight:'10gm', price:30, mrp:30, category:'spices', stock:20 },
{ id:'pack_hing', name:'Hing pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/mdh_hing.webp', emoji:'🧂', weight:'10gm', price:10, mrp:10, category:'spices', stock:20 },


  // ══ Amul Ice Creams ══

{ id:'amul_vanilla_royale_pack', name:'Amul Vanilla Royale Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_icecream_Vanilla_Royale_pack.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_rajbhog_pack', name:'Amul Rajbhog Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_icecream_Super_Saver_Packs_-_Rajbhog.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_strawberry_pack', name:'Amul Strawberry Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Super_Saver_Packs_-_Strawberry.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_butterscotch_pack', name:'Amul Butterscotch Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_Super_Saver_Packs_-_Butterscotch.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_butterscotch_bliss_pack', name:'Amul Butterscotch Bliss Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_Butterscotch_Bliss_pack.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_tutti_frutti_pack', name:'Amul Tutti Frutti Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_Super_Saver_Packs_-_Tutti_Frutti.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_fruit_n_nut_fantasy_pack', name:'Amul Fruit n Nut Fantasy Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251167/amul_icecream_Fruit_n_nut_fantasy_pack.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_kesar_pista_pack_royale', name:'Amul Kesar Pista Pack Royale', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_Super_Saver_Packs_-_Kesar_Pista_Royale.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_cups_vanilla_royale_1', name:'Amul Cups - Vanilla Royale', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_Super_Saver_Packs_-_Kesar_Pista_Royale.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_shahi_kulfi_rajbhog_single_pack', name:'Amul Shahi Kulfi Rajbhog Single Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Shahi_Kulfi_Rajbhog_Single_Pack.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_shahi_kulfi_kesar_pista_single_pack', name:'Amul Shahi Kulfi Kesar Pista Single Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Shahi_Kulfi_Kesar_Pista_Single_Pack.jpg', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },
{ id:'amul_jumbo_cups_fruit_n_nut_fantasy', name:'Amul Jumbo Cups - Fruit N Nut Fantasy', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251167/amul_icecream_Fruit_n_nut_fantasy_cup.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },


{ id:'amul_jumbo_cups_rajbhog', name:'Amul Jumbo Cups - Rajbhog', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Rajbhog_cup.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_tricone_butterscotch_gold', name:'Amul Tricone - Butterscotch Gold', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_butterscotch_gold_cone..avif', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_tricone_butterscotch', name:'Amul Tricone - Butterscotch', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_butterscotch_cone.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_tricone_choco_crunch', name:'Amul Tricone - Choco Crunch', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_chococrunch_cone.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_tricone_choco_vanilla', name:'Amul Tricone - Choco Vanilla', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_icecream_vanilla_cone.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_tricone_black_currant', name:'Amul Tricone - Black Currant', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_black_currant_cone.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_tricone_chocolate_gold', name:'Amul Tricone - Chocolate Gold', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_chocolate_Gold_cone.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_cups_alphonso_mango', name:'Amul Cups - Alphonso Mango', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251171/amul_icecream_Alphonso_mango_cup20.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_cups_afghan_dry_fruit', name:'Amul Cups - Afghan Dry Fruit', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781253194/amul_afghan_dry_fruit.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_cups_two_in_one', name:'Amul Cups - Two-in-one', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_two_in_one_cup20.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_cups_butterscotch', name:'Amul Cups - Butterscotch', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_butterscotch_cup20.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_cups_vanilla_royale_2', name:'Amul Cups - Vanilla Royale', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781253118/amul_vanilla_cup10.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },
{ id:'amul_cups_strawberry', name:'Amul Cups - Strawberry', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781253118/amul-strawberry-cup.jpg', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_frostik_gold', name:'Amul Stick - Frostik Gold', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251250/amul_icecream_Frostik_Gold.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_asli_aam_gold', name:'Amul Stick - Asli Aam Gold', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251169/amul_icecream_Asli_Aam_Gold.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_mango_duetz_gold', name:'Amul Stick - Mango Duetz Gold', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251167/amul_icecream_Mango_Duetz_Gold.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_coffee_bar', name:'Amul Stick - Coffee Bar', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251167/amul_icecream_Coffee_Bar.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_asli_aam', name:'Amul Stick - Asli Aam', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251169/amul_icecream_Asli_Aam.jpg', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_mango_duetz', name:'Amul Stick - Mango Duetz', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251167/amul_icecream_Mango_Duetz.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_probiotic_chocobar', name:'Amul Stick - Probiotic Chocobar', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Probiotic_Chocobar.jpg', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_probiotic_chocobar_2', name:'Amul Stick - Probiotic Chocobar', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Probiotic_Chocobar.jpg', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_mango_fundoo', name:'Amul Stick -  Mango Fundoo', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Mango_Fundoo.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_curly_fundoo', name:'Amul Stick - Curly Fundoo', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251167/amul_icecream_Curly_Fundoo.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_super_fundoo', name:'Amul Stick - Super Fundoo', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251165/amul_icecream_Super_Fundoo.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_chakri_fundoo', name:'Amul Stick - Chakri Fundoo', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251168/amul_icecream_Chakri_Fundoo.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_badshahi_kulfi', name:'Amul Stick - Badshahi Kulfi ', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251169/amul_icecream_Badshahi_Kulfi.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_aamras_kulfi', name:'Amul Stick - Aamras Kulfi', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251170/amul_icecream_Aamras_Kulfi.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_rabdi_kulfi', name:'Amul Stick - Rabdi Kulfi', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781257981/amul_rabdi_kulfi.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_rajwadi_kulfi', name:'Amul Stick - Rajwadi Kulfi', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781257981/amul_rajwadi_kulfi.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_rajbhog_kulfi', name:'Amul Stick - Rajbhog Kulfi', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251166/amul_icecream_Rajbhog_Kulfi.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_kashmiri_kulfi', name:'Amul Stick -  Kashmiri Kulfi', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781257981/amul_kashmiri_kulfi.png', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

{ id:'amul_stick_pista_malai_kulfi', name:'Amul Stick - Pista Malai Kulfi', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781251170/amul_icecream_Pista_Malai_Kulfi.webp', emoji:'🧁', price:107, mrp:107, category:'chocolates', stock:20 },

  // ══ home care ══

{ id:'personal_scotch_brite_20',      name:'Scotch Brite',             image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/scotch_brite_10.webp',      emoji:'🧽', weight:'1pcs', price:20, mrp:20, category:'personal', stock:20 },
{ id:'personal_scotch_brite_10',      name:'Scotch Brite',             image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/scotch_brite_10.webp',      emoji:'🧽', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },

{ id:'personal_dettol_soap_150gm',              name:'Dettol Sabun',                         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/dettol_sabun_150gm.webp',                     emoji:'🧼', weight:'150gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_lux_rose_soap_150gm',            name:'Lux Rose Sabun',                       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/lux_rose_sabun_150g.webp',                    emoji:'🧼', weight:'150gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_lux_jasmine_soap_150gm',         name:'Lux Jasmine Sabun',                    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332639/lux_jasmine_soap_150.webp',                  emoji:'🧼', weight:'150gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_savlon_glycerin_soap_125gm',     name:'Savlon Glycerin Sabun',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/savlon_glycerin_125g.jpg',                  emoji:'🧼', weight:'125gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_lifebuoy_soap_125gm',            name:'Lifebuoy Sabun',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/lifebuoy_sabun_125g.webp',                  emoji:'🧼', weight:'125gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_cinthol_cool_soap_100gm',        name:'Cinthol Cool Sabun',                    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/cinthol_cool_100gm.webp',                  emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_santoor_sandal_turmeric_100gm',  name:'Santoor Sandal & Turmeric Sabun',       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/santoor_sandal_and_turmeric_100g.webp',      emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_godrej_no1_jasmine_100gm',       name:'Godrej No.1 Jasmine Sabun',             image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/np.1_jasmine_sabun_100g.webp',              emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_godrej_no1_sandal_100gm',        name:'Godrej No.1 Sandal & Turmeric Sabun',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781336604/no.1_sandal_100gm.webp',                    emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },

  // ══ home care Pack ══
{ id:'pack_dettol_sabun', name:'Dettol Sabun pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332634/Dettol_sabun_10.jpg', emoji:'🧼', weight:'5pcs', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_lux_sabun', name:'Lux Sabun pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/lux_sabun_10.webp', emoji:'🧼', weight:'5pcs', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_godrej_no1_sabun', name:'Godrej No.1 Sabun pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/no.1_sabun_10.webp', emoji:'🧼', weight:'5pcs', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_lifebuoy_sabun', name:'Lifebuoy Sabun pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/lifebuoy_sabun_10.webp', emoji:'🧼', weight:'5pcs', price:10, mrp:10, category:'pack', stock:20 },

{ id:'personal_dettol_soap_10',       name:'Dettol Sabun',             image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332634/Dettol_sabun_10.jpg',      emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_lux_soap_10',          name:'Lux Sabun',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/lux_sabun_10.webp',         emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_godrej_no1_soap_10',   name:'Godrej No.1 Sabun',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/no.1_sabun_10.webp',       emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_lifebuoy_soap_10',     name:'Lifebuoy Sabun',           image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/lifebuoy_sabun_10.webp',   emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_dove_soap_25',         name:'Dove Sabun',               image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332639/dove-soap_25.jpg',         emoji:'🧼', weight:'1pcs', price:25, mrp:25, category:'personal', stock:20 },
{ id:'personal_pears_soap_20',        name:'Pears Sabun',              image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332639/pears_sabun_20.webp',      emoji:'🧼', weight:'1pcs', price:20, mrp:20, category:'personal', stock:20 },
{ id:'personal_ghadi_soap_10',        name:'Ghadi Sabun',              image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/ghadi_sabun_10.webp',      emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_surfexcel_sabun_10', name:'Surfexcel Sabun', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781521399/1000406332-600x600.png', emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_tide_soap_10',         name:'Tide Sabun',               image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/tide_sabun_5.jpg',         emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_patanjali_soap_10',    name:'Patanjali Super Sabun',    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/patanjali_super_sabun_10.webp', emoji:'🧼', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },

{ id:'personal_oswal_soap_10',    name:'Oswaal Soap (Batti)',    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/oswal_soap_batti.webp', emoji:'🧼', weight:'1pcs', price:50, mrp:50, category:'personal', stock:20 },

{ id:'personal_vim_bar_10',           name:'Vim Sabun',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/vim_10.webp',               emoji:'🧽', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_vim_set_35',           name:'Vim Set Sabun',            image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332634/vim_set_35.jpg',           emoji:'🧽', weight:'6pcs', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_exo_bar_52',           name:'Exo Bar Sabun',            image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/exo_bar_52.avif',          emoji:'🧽', weight:'1pcs', price:52, mrp:52, category:'personal', stock:20 },

 // ══ Surf ══
{ id:'personal_tide_surf_1kg',          name:'Tide Surf',         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/tide_surf_1kg.webp',          emoji:'🧺', weight:'1kg',   price:100, mrp:52, category:'personal', stock:20 },
{ id:'personal_tide_surf_500gm',        name:'Tide Surf',         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/tide_surf_halfkg.jpg',        emoji:'🧺', weight:'500gm', price:100, mrp:52, category:'personal', stock:20 },

{ id:'personal_surf_excel_1kg',         name:'Surf Excel Surf',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/surf_excel_surf_1_kg.webp',   emoji:'🧺', weight:'1kg',   price:100, mrp:52, category:'personal', stock:20 },
{ id:'personal_surf_excel_500gm',       name:'Surf Excel Surf',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/surf_excel_surf_half_kg.jpg', emoji:'🧺', weight:'500gm', price:100, mrp:52, category:'personal', stock:20 },

{ id:'personal_ghadi_surf_1kg',         name:'Ghadi Surf',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/ghadi-surf_1kg.webp',         emoji:'🧺', weight:'1kg',   price:100, mrp:52, category:'personal', stock:20 },
{ id:'personal_ghadi_surf_500gm',       name:'Ghadi Surf',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/ghadi_surf_half_kg.png',      emoji:'🧺', weight:'500gm', price:100, mrp:52, category:'personal', stock:20 },

{id:'personal_ezee_liquid_5',name:'Ezee Liquid',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632319/IMG_20260616_204416-Photoroom.png',emoji:'🧺',weight:'1pcs',price:5,mrp:5,category:'personal',stock:20},
{id:'personal_vanish_oxi_action_15',name:'Vanish Oxi Action All In One',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/vanish_all_in_one_15.jpg',emoji:'🧺',weight:'1pcs',price:15,mrp:15,category:'personal',stock:20},
{ id:'personal_surfexcel_surf_10', name:'Surfexcel Surf', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781521354/616rE8iiXsL._SL1000.webp', emoji:'🧺', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_cherry_black_shoe_polish', name:'Cherry Black Shoe Polish', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/cherry_black_polish.webp', emoji:'🧺', weight:'1pcs', price:15, mrp:15, category:'personal', stock:20 },
{ id:'personal_cherry_dark_tan_shoe_polish', name:'Cherry Dark Tan Shoe Polish', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/cherry_dark_tan_polish.webp', emoji:'🧺', weight:'1pcs', price:15, mrp:15, category:'personal', stock:20 },

{id:'personal_aluminium_foil',name:'Aluminium Foil',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543669/IMG_20260615_224211.png',emoji:'🍽️',weight:'1kg',price:15,mrp:15,category:'personal',stock:20},
{id:'personal_brb_food_wrapping',name:'Brb Food Wrapping',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543667/IMG_20260615_224138.png',emoji:'🍽️',weight:'1kg',price:15,mrp:15,category:'personal',stock:20},
{id:'personal_aluminium_foil_21_5',name:'Aluminium Foil (21+5)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543666/IMG_20260615_224149.png',emoji:'🍽️',weight:'1kg',price:15,mrp:15,category:'personal',stock:20},
{id:'personal_aluminium_foil_9_3',name:'Aluminium Foil(9+3)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543666/IMG_20260615_224159.png',emoji:'🍽️',weight:'1kg',price:15,mrp:15,category:'personal',stock:20},


{id:'personal_gebi_plastic_broom',name:'Gebi Plastic Jhaadu',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537277/40250836_6-gebi-sweepy-dust-free-broom-washable-xl.jpg',emoji:'🧹',weight:'1pcs',price:15,mrp:15,category:'personal',stock:20},
{id:'personal_royal_broom',name:'Royal Jhaadu',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/1000339763-removebg-preview.png',emoji:'🧹',weight:'1pcs',price:15,mrp:15,category:'personal',stock:20},
{id:'personal_laxmi_broom',name:'Laxmi Jhaadu',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/1000339770-removebg-preview.png',emoji:'🧹',weight:'1pcs',price:15,mrp:15,category:'personal',stock:20},

 // ══ Other ══

{id:'other_dkc_tabasir_banslochan_250gm',name:'Dkc Tabasir Banslochan',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/vanslochan.jpg',emoji:'🌿',weight:'250gm',price:200,mrp:200,category:'other',stock:20},
{id:'other_gul_manjan_1pcs',name:'Gul Manjan',image:'https://res.clinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/vanslochan.jpg',emoji:'🦷',weight:'1pcs',price:20,mrp:20,category:'other',stock:20},
{id:'other_tulsi_sat_isabgol_10',name:'Tulsi Sat Isabgol',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332639/tulsi_sat_isabgol.jpg',emoji:'🌿',weight:'1pcs',price:10,mrp:10,category:'other',stock:0},
{id:'other_playing_cards_10',name:'Playing Card (Tash)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339867-Photoroom.png',emoji:'🃏',weight:'1pcs',price:10,mrp:10,category:'other',stock:10},
{id:'other_toothpicks_10',name:'Toothpicks',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543670/1000339866-Photoroom.png',emoji:'🪥',weight:'1pcs',price:10,mrp:10,category:'other',stock:10},


 // ══ Dry Fruits ══
{id:'dryfruit_almond_10',name:'Almond (Badam)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543676/1000339875-Photoroom.png',emoji:'🥜',weight:'250gm',price:10,mrp:350,category:'dry',stock:10},
{id:'dryfruit_cashew_10',name:'Cashew (Kaju)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543676/1000339876-Photoroom.png',emoji:'🥜',weight:'250gm',price:250,mrp:325,category:'dry',stock:10},
{id:'dryfruit_raisins_10',name:'Kismish',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543675/1000339874-Photoroom.png',emoji:'🥜',weight:'250gm',price:150,mrp:195,category:'dry',stock:10},
{id:'dryfruit_walnuts_10',name:'Walnuts (Akhrot)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339868-Photoroom.png',emoji:'🥜',weight:'250gm',price:10,mrp:600,category:'dry',stock:10},
{id:'dry_anjeer_450',name:'Anjeer',image:'https://res.clouinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339868-Photoroom.png',emoji:'🥜',weight:'1pcs',price:450,mrp:450,category:'dry',stock:10},
{id:'dry_murmura_40',name:'Murmura',image:'https://res.clonary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339868-Photoroom.png',emoji:'🥜',weight:'1pcs',price:40,mrp:40,category:'dry',stock:10},
{id:'dry_makhana_250gm',name:'Makhana',image:'https://res.loudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339868-Photoroom.png',emoji:'🥜',weight:'250gm',price:350,mrp:350,category:'dry',stock:10},
{id:'dry_makhana_100gm',name:'Makhana',image:'https://re.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339868-Photoroom.png',emoji:'🥜',weight:'100gm',price:160,mrp:160,category:'dry',stock:10},



 // ══ Dal and Pulses ══
{id:'dal_arhar_1kg',name:'Arhar Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421787/image/dal_arhar.png',emoji:'🥜',weight:'1kg',price:140,mrp:140,category:'dal',stock:10},
{id:'dal_arhar_500gm',name:'Arhar Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471164/Arhar-Daal.jpg',emoji:'🥜',weight:'500gm',price:140,mrp:140,category:'dal',stock:10},

{id:'dal_chana_1kg',name:'Chana Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421796/image/dal_chana.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_chana_500gm',name:'Chana Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471166/ChanaDal.webp',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_urad_chilka_1kg',name:'Urad Chilka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421795/image/dal_uradchilka.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_urad_chilka_500gm',name:'Urad Chilka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471221/Urad-Dal-Chilka-500g-WHY-Nutrition-37099676401916.webp',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_urad_saboot_1kg',name:'Urad Saboot Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421791/image/dal_uradsaboot.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_urad_saboot_500gm',name:'Urad Saboot Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471243/81FYE5szMrS.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_moong_chilka_1kg',name:'Moong Chilka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421789/image/dal_moongchilka.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moong_chilka_500gm',name:'Moong Chilka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471313/CHHILKA-MOONG-DAL.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_moong_saboot_1kg',name:'Moong saboot Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421791/image/dal_moongsabut.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moong_saboot_500gm',name:'Moong saboot Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782472498/sabut-green-moong-dal.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_moong_dhuli_1kg',name:'Moong dhuli Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421788/image/dal_moongdhuli.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moong_dhuli_500gm',name:'Moong dhuli Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471435/Moong_dhuliPulse.webp',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_lal_malka_1kg',name:'Lal malka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421790/image/dal_lalmalka.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_lal_malka_500gm',name:'Lal malka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782472541/619OMrvjS-L._AC_UF350_350_QL80_.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_kaali_malka_1kg',name:'Kaali malka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421788/image/dal_kaalimalka.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_kaali_malka_500gm',name:'Kaali malka Dal',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471576/513w_q87X1L._AC_UF894_1000_QL80_.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_rajma_1kg',name:'Rajma',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421794/image/dal_rajma.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_rajma_500gm',name:'Rajma',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421794/image/dal_rajma.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_redrajma_1kg',name:' Red Rajma',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782472568/rajma-red-819160_l.jpg',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_redrajma_500gm',name:' Red Rajma',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782472607/image_a17ffd00-73ea-495a-bd90-f3b09829eabc_1024x1024_2x.webp',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_chhola_1kg',name:'Chhola',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421744/image/chhola.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_chhola_500gm',name:'Chhola',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471647/516rD97WU3L._AC_UF894_1000_QL80_.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_kalachana_1kg',name:'Kala Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421849/image/kala_chana.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_kalachana_500gm',name:'Kala Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471670/images.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_moongfali_1kg',name:'Moongfali',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421881/image/moongfali.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moongfali_500gm',name:'Moongfali',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471697/61lW-gOAX5L._AC_UF894_1000_QL80_.jpg',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_gud_1kg',name:'Gud',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421830/image/gud.png',emoji:'🥜',weight:'1kg',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_gud_500gm',name:'Gud',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471733/prod-20200205-2114466793877129798088620-jpg-500x500.webp',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},

{id:'dal_mixeddalpkt_500gm',name:'Mixed Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680605/1000340511-Photoroom.png',emoji:'🥜',weight:'500gm',price:140,mrp:140,category:'dal',stock:10},
{id:'dal_arhardalpkt_500gm',name:'Arhar Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421787/image/dal_arhar.png',emoji:'🥜',weight:'500gm',price:140,mrp:140,category:'dal',stock:10},
{id:'dal_chanadalpkt_500gm',name:'Chana Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680608/1000340512-Photoroom.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_uradchilkadalpkt_500gm',name:'Urad Chilka Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421795/image/dal_uradchilka.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_uradsabootdalpkt_500gm',name:'Urad Saboot Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421791/image/dal_uradsaboot.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moongchilkadalpkt_500gm',name:'Moong Chilka Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680603/1000340507-Photoroom.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moongsabootdalpkt_500gm',name:'Moong Saboot Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421791/image/dal_moongsabut.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moongdhulidalpkt_500gm',name:'Moong Dhuli Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680609/IMG_20260617_124515.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_lalmalkadalpkt_500gm',name:'Lal Malka Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421790/image/dal_lalmalka.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_kaalimalkadalpkt_500gm',name:'Kaali Malka Dal Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421788/image/dal_kaalimalka.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_rajmapkt_500gm',name:'Rajma Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680601/IMG_20260617_124503.png',emoji:'🥜',weight:'500gm',price:120,mrp:145,category:'dal',stock:10},
{id:'dal_chholapkt_500gm',name:'Chhola Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421744/image/chhola.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_kalachanapkt_500gm',name:'Kala Chana Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421849/image/kala_chana.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},
{id:'dal_moongfalipkt_500gm',name:'Moongfali Pkt',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421881/image/moongfali.png',emoji:'🥜',weight:'500gm',price:100,mrp:100,category:'dal',stock:10},


 // ══ Pack ══
{id:'pack_dettolsabun',name:'Dettol Sabun Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/dettol_sabun_150gm_pack.webp',emoji:'📦',weight:'5pcs',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_savlonglycerinsabun',name:'Savlon Glycerin Sabun Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/savlon_glycerin_125g_pack.webp',emoji:'📦',weight:'5pcs',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_cintholcoolsabun',name:'Cinthol Cool Sabun Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/cinthol_cool_pack_100gm.jpg',emoji:'📦',weight:'5pcs',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_godrejjasminesabun',name:'Godrej No.1 Jasmine Sabun Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/np.1_jasmine_sabun_100g_pack.webp',emoji:'📦',weight:'5pcs',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_godrejsandalturmeric',name:'Godrej No.1 Sandal Turmeric Sabun Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781336604/no.1_sandal_100gm.webp',emoji:'📦',weight:'5pcs',price:100,mrp:100,category:'pack',stock:10},
{ id:'personal_dettol_soap_150gm',              name:'Dettol Sabun',                         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/dettol_sabun_150gm.webp',                     emoji:'🧼', weight:'150gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_lux_rose_soap_150gm',            name:'Lux Rose Sabun',                       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/lux_rose_sabun_150g.webp',                    emoji:'🧼', weight:'150gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_lux_jasmine_soap_150gm',         name:'Lux Jasmine Sabun',                    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332639/lux_jasmine_soap_150.webp',                  emoji:'🧼', weight:'150gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_savlon_glycerin_soap_125gm',     name:'Savlon Glycerin Sabun',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/savlon_glycerin_125g.jpg',                  emoji:'🧼', weight:'125gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_lifebuoy_soap_125gm',            name:'Lifebuoy Sabun',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/lifebuoy_sabun_125g.webp',                  emoji:'🧼', weight:'125gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_cinthol_cool_soap_100gm',        name:'Cinthol Cool Sabun',                    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/cinthol_cool_100gm.webp',                  emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_santoor_sandal_turmeric_100gm',  name:'Santoor Sandal & Turmeric Sabun',       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/santoor_sandal_and_turmeric_100g.webp',      emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_godrej_no1_jasmine_100gm',       name:'Godrej No.1 Jasmine Sabun',             image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/np.1_jasmine_sabun_100g.webp',              emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },
{ id:'personal_godrej_no1_sandal_100gm',        name:'Godrej No.1 Sandal & Turmeric Sabun',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781336604/no.1_sandal_100gm.webp',                    emoji:'🧼', weight:'100gm', price:35, mrp:35, category:'personal', stock:20 },

{ id:'personal_oswal_soap_Pack',    name:'Oswaal Soap (Batti) Pack',    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/oswal_soap_batti.webp', emoji:'🧼', weight:'5pcs', price:50, mrp:50, category:'pack', stock:20 },


{ id:'pack_orbit_lemon_5_bundle',        name:'Orbit Lemon Flavour Pack',       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121153/61815llJCeL.jpg',        emoji:'📦', weight:'20pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pack_orbit_sweetmint_5_bundle',    name:'Orbit Sweetmint Flavour Pack',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121192/61uk_OiPWnL.jpg',    emoji:'📦', weight:'20pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pack_orbit_mixed_fruit_5_bundle',  name:'Orbit Mixed Fruit Flavour Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121217/orbit-mixed-fruit-flavour-chewing-gum-500x500.webp',  emoji:'📦', weight:'20pcs', price:5, mrp:5, category:'pack', stock:20 },
{id:'pack_orbitspearmint',name:'Orbit Spearmint Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332643/orbit_sweetmint_flavour_pack.jpg',emoji:'📦',weight:'20pcs',price:100,mrp:100,category:'pack',stock:10},
{id:'choc_polo_pack',name:'Polo Toffee Pack',image:'https://res.coudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/Alpenliebe_eclairs_toffee.webp',emoji:'🍬',price:10,mrp:10,category:'pack',stock:20},


{id:'pack_melodytoffee',name:'Melody Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332644/melody_toffee_pack.jpg',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_londonderrytoffee',name:'Londonderry Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332662/londonderry_toffee_pack.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_mangobitetoffee',name:'Mango Bite Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/Mango_bite_toffee_pack.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_pulsekachhaaam',name:'Pulse kachha Aam Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332643/pulse-toffee-pouch.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_kopikotoffee',name:'Kopiko Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332643/kopiko-_toffee_pouch.png',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_pulsetoffee',name:'Pulse Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332643/pulse-toffee-pouch_color.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},

{id:'vicks-toffee-pack-1',name:'Vicks Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332634/vicks.jpg',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'naturaly-imli-toffee-pack-1',name:'Naturaly Imli Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/imli_candy.avif',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'hajmola-imli-pack-1',name:'Hajmola Imli Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/hajmola_imli.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'hajmola-anardana-pack-1',name:'Hajmola Anardana Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/hajmola_anardana.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'hajmola-regular-pack-1',name:'Hajmola Regular Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/hajmola_1.jpg',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'hajmola-toffee-pack-1',name:'Hajmola Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332660/hajmola_candy_1.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'pulse-toffee-pack-1',name:'Pulse Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332674/pulse-toffee-1.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'melody-toffee-pack-1',name:'Melody Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/melody_toffee_1.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'londonderry-toffee-pack-1',name:'Londonderry Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/londonderry_toffee1.avif',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'cadbury-eclairs-toffee-pack-2',name:'Cadbury Eclairs Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/cadbuary_eclairs_toffee_1.jpg',emoji:'🍬',price:2,mrp:2,category:'pack',stock:20},
{id:'alpenliebe-creamfills-toffee-pack-1',name:'Alpenliebe Creamfills Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/Alpenliebe_toffee1.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'alpenliebe-gold-toffee-pack-1',name:'Alpenliebe Gold Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332662/Alpenliebe_Gold_toffee1.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'kopiko-toffee-pack-1',name:'Kopiko Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/kopikpo_toffee_1.jpg',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'mango-bite-toffee-pack-1',name:'Mango Bite Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332660/Mango_bite_toffee_1.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'just-jelly-toffee-pack-1',name:'Just Jelly Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332644/just_jelly_toffee.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'kismi-toffee-pack-1',name:'Kismi Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332643/kismi_toffe_1.jpg',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'centerfruit-toffee-pack-1',name:'Centerfruit Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/centerfruit_1.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'centerfresh-toffee-pack-1',name:'Centerfresh Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/centerfresh_blue.jpg',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},
{id:'alpenliebe-eclairs-toffee-pack-1',name:'Alpenliebe Eclairs Toffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/Alpenliebe_eclairs_toffee.webp',emoji:'🍬',price:1,mrp:1,category:'pack',stock:20},

{id:'pack_centerfruitjar2',name:'Centerfruit Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/centerfruit_jar.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_centerfresh jar 3',name:'Centerfresh Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/centerfruit_jar.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},


{ id:'pack_parleg_10_bundle',         name:'Parle G Pack',             image:"https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121383/p10-1778468808004.webp",             emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_monaco_10_bundle',         name:'Monaco Pack',              image:"https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121468/23_1732705448.jpg",                emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_coconut_10_bundle',        name:'Coconut Biscuit Pack',     image:"https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121994/Screenshot2025-09-24003643-1758654421910.png",               emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_parleg_gold_10_bundle',    name:'Parle G Gold Pack',        image:CLOUDINARY_BASE+'/image/parleg_gold.png',           emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_bourbon_10_bundle',        name:'Bourbon Pack',             image:CLOUDINARY_BASE+'/image/bourbon.png',               emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_moms_magic_10_bundle',     name:'Moms Magic Pack',          image:CLOUDINARY_BASE+'/image/mom_magic.png',             emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_good_day_10_bundle',       name:'Good Day Pack',            image:CLOUDINARY_BASE+'/image/good_day.png',              emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_oreo_10_bundle',           name:'Oreo Pack',                image:CLOUDINARY_BASE+'/image/oreo.png',                  emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_oreo_sandwich_10_bundle',  name:'Oreo Sandwich Pack',       image:CLOUDINARY_BASE+'/image/oreo_sandwich.png',         emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_krackjack_10_bundle',      name:'Krack Jack Pack',          image:CLOUDINARY_BASE+'/image/krackjack.png',             emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_5050_10_bundle',           name:'50-50 Biscuit Pack',       image:CLOUDINARY_BASE+'/image/50_biscuit10.png',          emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_good_day_5_bundle',        name:'Good Day Pack',            image:CLOUDINARY_BASE+'/image/good_day.png',              emoji:'📦', weight:'1 Bundle', price:5,  mrp:5,  category:'pack', stock:20 },
{ id:'pack_parleg_5_bundle',          name:'Parle G Pack',             image:"https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1782121407/6-PC-PACK-7.webp",              emoji:'📦', weight:'1 Bundle', price:5,  mrp:5,  category:'pack', stock:20 },
{ id:'pack_5050_5_bundle',            name:'50-50 Biscuit Pack',       image:CLOUDINARY_BASE+'/image/50_biscuit5.png',           emoji:'📦', weight:'1 Bundle', price:5,  mrp:5,  category:'pack', stock:20 },
{ id:'pack_cnc_5_bundle',             name:'CNC Pack',                 image:CLOUDINARY_BASE+'/image/cnc.png',                   emoji:'📦', weight:'1 Bundle', price:5,  mrp:5,  category:'pack', stock:20 },
{ id:'pack_happy_happy_5_bundle',     name:'Happy Happy Pack',         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/happy_happy_biscuit_5.webp', emoji:'📦', weight:'1 Bundle', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pack_yummy_chocolate_5_bundle', name:'Yummy Chocolate Pack',     image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/yummy_biscuit_chocolate_5.webp', emoji:'📦', weight:'1 Bundle', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pack_yummy_milk_5_bundle',      name:'Yummy Milk Pack',          image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332662/yummy_biscuit_milk_5.webp', emoji:'📦', weight:'1 Bundle', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pack_yummy_elaichi_5_bundle',   name:'Yummy Elaichi Pack',       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/yummy_biscuit_elaichi_5.webp', emoji:'📦', weight:'1 Bundle', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pack_dark_fantasy_10_bundle',   name:'Dark Fantasy Pack',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/dark_fantasy_10.jpg', emoji:'📦', weight:'1 Bundle', price:10, mrp:10, category:'pack', stock:20 },


{id:'dairy-milk-fruit-nut-pack-107',name:'Dairy Milk Fruit & Nut Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119357/dairy_milk_107.webp',emoji:'🧁',price:107,mrp:107,category:'pack',stock:20},
{id:'dairy-milk-chocolate-pack-100',name:'Dairy Milk Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_dairy100.png',emoji:'🧁',price:100,mrp:100,category:'pack',stock:20},
{id:'dairy-milk-chocolate-pack-53',name:'Dairy Milk Chocolate Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119358/dairy_milk_53.webp',emoji:'🧁',price:53,mrp:53,category:'pack',stock:20},
{id:'dairy-milk-fruit-nut-pack-50',name:'Dairy Milk Fruit & Nut Pack',image:CLOUDINARY_BASE+'/image/chocolate_dairy50.png',emoji:'🧁',price:50,mrp:50,category:'pack',stock:20},
{id:'dairy-milk-chocolate-pack-45',name:'Dairy Milk Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_dairy45.png',emoji:'🧁',price:45,mrp:45,category:'pack',stock:20},
{id:'dairy-milk-chocolate-pack-20',name:'Dairy Milk Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_dairy20.png',emoji:'🧁',price:20,mrp:20,category:'pack',stock:20},
{id:'dairy-milk-chocolate-pack-10',name:'Dairy Milk Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_dairy10.png',emoji:'🧁',price:10,mrp:10,category:'pack',stock:20},
{id:'dairy-milk-chocolate-pack-5',name:'Dairy Milk Chocolate Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1781118183/dairy_milk_5.webp',emoji:'🧁',price:5,mrp:5,category:'pack',stock:20},
{id:'kit-kat-chocolate-pack-50',name:'Kit Kat Chocolate Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781167835/kitkat_50.jpg',emoji:'🧁',price:50,mrp:50,category:'pack',stock:20},
{id:'kit-kat-chocolate-pack-35',name:'Kit Kat Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_kit35.png',emoji:'🧁',price:35,mrp:35,category:'pack',stock:20},
{id:'kit-kat-chocolate-pack-20',name:'Kit Kat Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_kit20.png',emoji:'🧁',price:20,mrp:20,category:'pack',stock:20},
{id:'kit-kat-chocolate-pack-10',name:'Kit Kat Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_kit10.png',emoji:'🧁',price:10,mrp:10,category:'pack',stock:20},
{id:'milky-bar-chocolate-pack-20',name:'Milky Bar Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_milkybar20.png',emoji:'🧁',price:20,mrp:20,category:'pack',stock:20},
{id:'milky-bar-chocolate-pack-10',name:'Milky Bar Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_milkybar10.png',emoji:'🧁',price:10,mrp:10,category:'pack',stock:20},
{id:'5-star-chocolate-pack-20',name:'5 Star Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_star20.png',emoji:'🧁',price:20,mrp:20,category:'pack',stock:20},
{id:'5-star-chocolate-pack-10',name:'5 Star Chocolate Pack',image:CLOUDINARY_BASE+'/image/chcocolate_star10.png',emoji:'🧁',price:10,mrp:10,category:'pack',stock:20},
{id:'5-star-chocolate-pack-5',name:'5 Star Chocolate Pack',image:CLOUDINARY_BASE+'/image/chcocolate_star5.png',emoji:'🧁',price:5,mrp:5,category:'pack',stock:20},
{id:'perk-chocolate-pack-10',name:'Perk Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_perk10.png',emoji:'🧁',price:10,mrp:10,category:'pack',stock:20},
{id:'munch-chocolate-pack-10',name:'Munch Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_munch5.png',emoji:'🧁',price:10,mrp:10,category:'pack',stock:20},
{id:'munch-chocolate-pack-5',name:'Munch Chocolate Pack',image:CLOUDINARY_BASE+'/image/chocolate_munch5.png',emoji:'🧁',price:5,mrp:5,category:'pack',stock:20},
{id:'pack_merlinbox',name:'Merlin Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332660/merlin_pack.jpg',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'lotte-chocopie-pack-10',name:'Lotte Chocopie Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/choco_pie_10.webp',emoji:'🍫',weight:'1Pcs',price:10,mrp:10,category:'pack',stock:20},
{id:'chupa-chups-pack-5',name:'Chupa Chups Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/chupa_chups.webp',emoji:'🍭',price:5,mrp:5,category:'pack',stock:20},
{ id:'pack_anmol_swiss_roll_strawberry', name:'Anmol Swiss Roll Strawberry pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165523/anmol_swiss_roll_10_strawberry.jpg', emoji:'🥛', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_anmol_swiss_roll_chocolate', name:'Anmol Swiss Roll Chocolate pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165523/anmol_swiss_roll_10_chocolate.jpg', emoji:'🥛', price:10, mrp:10, category:'pack', stock:20 },
{ id:'pack_harvest_brownie_real_walnut', name:'Harvest Brownie Real Walnut pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/brownie_real_walnut.jpg', emoji:'🧁', price:20, mrp:20, category:'pack', stock:20 },
{ id:'pack_harvest_brownie_chocolate', name:'Harvest Brownie Chocolate pack', image:CLOUDINARY_BASE+'/image/chocolate_mun5.png', emoji:'🧁', price:20, mrp:20, category:'pack', stock:20 },

   { id:'Frooti_Pack',             name:'Frooti Pack',              image:CLOUDINARY_BASE+'/image/drink_frooti.jpg',            emoji:'🥤', weight:'150 ml',  price:10,  mrp:12,  category:'pack', stock:100 },
{ id:'Arora_Lemon_Pack',        name:'Arora Lemon Pack',         image:CLOUDINARY_BASE+'/image/drink_arora_lemon.png',       emoji:'🥤', weight:'160 ml',  price:10,  mrp:12,  category:'pack', stock:80  },
{ id:'Lahori_Jeera_Pack',       name:'Lahori Jeera Pack',        image:CLOUDINARY_BASE+'/image/drink_lahori_jeera.png',      emoji:'🥤', weight:'160 ml',  price:10,  mrp:12,  category:'pack', stock:90  },
{ id:'Smoodh_80ml',             name:'Smoodh Pack',              image:CLOUDINARY_BASE+'/image/drink_smoodh.png',            emoji:'🥤', weight:'80 ml',   price:10,  mrp:12,  category:'pack', stock:70  },
{ id:'Appy_Fizz_Pack',          name:'Appy Fizz Pack',           image:CLOUDINARY_BASE+'/image/drink_appy.png',              emoji:'🥤', weight:'125 ml',  price:10,  mrp:15,  category:'pack', stock:60  },
{ id:'Smoodh_150ml',            name:'Smoodh Pack',              image:CLOUDINARY_BASE+'/image/drink_smoodh2.png',           emoji:'🥤', weight:'150 ml',  price:20,  mrp:25,  category:'pack', stock:50  },
{ id:'Smoodh_Lassi_Pack',       name:'Smoodh Lassi Pack',        image:CLOUDINARY_BASE+'/image/drink_smoodh_lassi.png',      emoji:'🥤', weight:'180 ml',  price:20,  mrp:25,  category:'pack', stock:45  },
{ id:'Real_Juice_180ml',        name:'Real Juice Pack',          image:CLOUDINARY_BASE+'/image/drink_real.jpg',              emoji:'🥤', weight:'180 ml',  price:20,  mrp:25,  category:'pack', stock:55  },
{ id:'Pulpy_Orange_Pack',       name:'Pulpy Orange Pack',        image:CLOUDINARY_BASE+'/image/drink_pulpyorange.png',       emoji:'🥤', weight:'250 ml',  price:20,  mrp:25,  category:'pack', stock:65  },
{ id:'Sting_Pack',              name:'Sting Pack',               image:CLOUDINARY_BASE+'/image/drink_sting.png',             emoji:'⚡', weight:'250 ml',  price:20,  mrp:25,  category:'pack', stock:80  },
{ id:'Coca_Cola_250ml',         name:'Coca Cola 250ml Pack',     image:CLOUDINARY_BASE+'/image/drink_coca.png',              emoji:'🥤', weight:'250 ml',  price:20,  mrp:25,  category:'pack', stock:100 },
{ id:'Fanta_250ml',             name:'Fanta 250ml Pack',         image:CLOUDINARY_BASE+'/image/drink_fanta.png',             emoji:'🍊', weight:'250 ml',  price:20,  mrp:25,  category:'pack', stock:75  },
{ id:'Limca_250ml',             name:'Limca 250ml Pack',         image:CLOUDINARY_BASE+'/image/drink_limca.png',             emoji:'🍋', weight:'250 ml',  price:20,  mrp:25,  category:'pack', stock:60  },
{ id:'Mountain_Dew_250ml',      name:'Mountain Dew Pack',        image:CLOUDINARY_BASE+'/image/drink_mountaindew.png',       emoji:'💚', weight:'250 ml',  price:20,  mrp:25,  category:'pack', stock:70  },
{ id:'Pepsi_400ml',             name:'Pepsi 400ml Pack',         image:CLOUDINARY_BASE+'/image/drink_pepsi.png',             emoji:'🥤', weight:'400 ml',  price:20,  mrp:25,  category:'pack', stock:85  },
{ id:'Coconut_Water_Pack',      name:'Coconut Water Pack',       image:CLOUDINARY_BASE+'/image/drink_coconut.png',           emoji:'🥥', weight:'250 ml',  price:20,  mrp:25,  category:'pack', stock:40  },
{ id:'Coca_Cola_740ml',         name:'Coca Cola 740ml Pack',     image:CLOUDINARY_BASE+'/image/drink_coca2.png',             emoji:'🥤', weight:'740 ml',  price:35,  mrp:40,  category:'pack', stock:50  },
{ id:'Sprite_740ml',            name:'Sprite 740ml Pack',        image:CLOUDINARY_BASE+'/image/drink_sprite1.png',           emoji:'🍃', weight:'740 ml',  price:35,  mrp:40,  category:'pack', stock:45  },
{ id:'Fanta_740ml',             name:'Fanta 740ml Pack',         image:CLOUDINARY_BASE+'/image/drink_fanta2.png',            emoji:'🍊', weight:'740 ml',  price:35,  mrp:40,  category:'pack', stock:40  },
{ id:'Thums_Up_740ml',          name:'Thums Up 740ml Pack',      image:CLOUDINARY_BASE+'/image/drink_thumsup2.jpg',          emoji:'👍', weight:'740 ml',  price:35,  mrp:40,  category:'pack', stock:55  },
{ id:'Limca_740ml',             name:'Limca 740ml Pack',         image:CLOUDINARY_BASE+'/image/drink_limca1.png',            emoji:'🍋', weight:'740 ml',  price:35,  mrp:40,  category:'pack', stock:35  },
{ id:'Maaza_600ml',             name:'Maaza 600ml Pack',         image:CLOUDINARY_BASE+'/image/drink_maaza.jpg',             emoji:'🥭', weight:'600 ml',  price:40,  mrp:50,  category:'pack', stock:60  },
{ id:'Coca_Cola_1L',            name:'Coca Cola 1L Pack',        image:CLOUDINARY_BASE+'/image/drink_coca2.png',             emoji:'🥤', weight:'1 L',     price:50,  mrp:60,  category:'pack', stock:40  },
{ id:'Sprite_1L',               name:'Sprite 1L Pack',           image:CLOUDINARY_BASE+'/image/drink_sprite2.png',           emoji:'🍃', weight:'1 L',     price:50,  mrp:60,  category:'pack', stock:35  },
{ id:'Fanta_1L',                name:'Fanta 1L Pack',            image:CLOUDINARY_BASE+'/image/drink_fanta3.png',            emoji:'🍊', weight:'1 L',     price:50,  mrp:60,  category:'pack', stock:30  },
{ id:'Thums_Up_1L',             name:'Thums Up 1L Pack',         image:CLOUDINARY_BASE+'/image/drink_thumsup2.png',          emoji:'👍', weight:'1 L',     price:50,  mrp:60,  category:'pack', stock:38  },
{ id:'Limca_1L',                name:'Limca 1L Pack',            image:CLOUDINARY_BASE+'/image/drink_limca2.png',            emoji:'🍋', weight:'1 L',     price:50,  mrp:60,  category:'pack', stock:25  },
{ id:'Maaza_1L',                name:'Maaza 1L Pack',            image:CLOUDINARY_BASE+'/image/drink_maaza.jpg',             emoji:'🥭', weight:'1 L',     price:50,  mrp:60,  category:'pack', stock:45  },
{ id:'Coca_Cola_2L',            name:'Coca Cola 2L Pack',        image:CLOUDINARY_BASE+'/image/drink_coca3.png',             emoji:'🥤', weight:'2 L',     price:100, mrp:120, category:'pack', stock:30  },
{ id:'Sprite_2L',               name:'Sprite 2L Pack',           image:CLOUDINARY_BASE+'/image/drink_sprite2.png',           emoji:'🍃', weight:'2 L',     price:100, mrp:120, category:'pack', stock:25  },
{ id:'Fanta_2L',                name:'Fanta 2L Pack',            image:CLOUDINARY_BASE+'/image/drink_fanta4.png',            emoji:'🍊', weight:'2 L',     price:100, mrp:120, category:'pack', stock:20  },
{ id:'Thums_Up_2L',             name:'Thums Up 2L Pack',         image:CLOUDINARY_BASE+'/image/drink_thumsup2.jpg',          emoji:'👍', weight:'2 L',     price:100, mrp:120, category:'pack', stock:28  },
{ id:'Limca_2L',                name:'Limca 2L Pack',            image:CLOUDINARY_BASE+'/image/drink_limca3.jpg',            emoji:'🍋', weight:'2 L',     price:100, mrp:120, category:'pack', stock:22  },
{ id:'Maaza_2L',                name:'Maaza 2L Pack',            image:CLOUDINARY_BASE+'/image/drink_maaza.jpg',             emoji:'🥭', weight:'2 L',     price:100, mrp:120, category:'pack', stock:18  },
{ id:'Frooti_2L',               name:'Frooti 2L Pack',           image:CLOUDINARY_BASE+'/image/drink_frooti2.jpg',           emoji:'🥤', weight:'2 L',     price:100, mrp:120, category:'pack', stock:20  },
{ id:'Real_Juice_250g',         name:'Real Juice 250g Pack',     image:CLOUDINARY_BASE+'/image/drink_real2.png',             emoji:'🥤', weight:'250 g',   price:100, mrp:120, category:'pack', stock:15  },
{ id:'Red_Bull_Pack',           name:'Red Bull Pack',            image:CLOUDINARY_BASE+'/image/drink_redbull.png',           emoji:'🐂', weight:'250 ml',  price:120, mrp:150, category:'pack', stock:20  },
{ id:'Amul_Kool_Pack',          name:'Amul Kool Pack',           image:CLOUDINARY_BASE+'/image/drink_amul_kool.png',         emoji:'🥛', weight:'180 ml',  price:30,  mrp:35,  category:'pack', stock:50  },
{ id:'Mogu_Mogu_Pack',          name:'Mogu Mogu Pack',           image:CLOUDINARY_BASE+'/image/drink_mogu_mogu.png',         emoji:'🥤', weight:'320 ml',  price:70,  mrp:85,  category:'pack', stock:30  },
{ id:'Campa_Energy_Pack',       name:'Campa Energy Pack',        image:CLOUDINARY_BASE+'/image/drink_campa.png',             emoji:'⚡', weight:'250 ml',  price:35,  mrp:40,  category:'pack', stock:40  },
{ id:'Zyro_400ml',              name:'Zyro 400ml',               image:CLOUDINARY_BASE+'/image/drink_zyro.png',              emoji:'🥤', weight:'400 ml',  price:60,  mrp:75,  category:'pack', stock:35  },
{ id:'Zyro_Lemon',              name:'Zyro Lemon',               image:CLOUDINARY_BASE+'/image/drink_zyro2.png',             emoji:'🍋', weight:'400 ml',  price:60,  mrp:75,  category:'pack', stock:30  },
{ id:'Zyro_Mango',              name:'Zyro Mango',               image:CLOUDINARY_BASE+'/image/drink_zyro3.png',             emoji:'🥭', weight:'400 ml',  price:60,  mrp:75,  category:'pack', stock:28  },
{ id:'Roohafza',                name:'Roohafza',                 image:CLOUDINARY_BASE+'/image/roohafza.png',                emoji:'🥭', weight:'750 ml',  price:140, mrp:165, category:'pack', stock:28  },
{ id:'Shahi_Khus_Syrup',        name:'Shahi Khus Syrup',         image:CLOUDINARY_BASE+'/image/khus_syrup.png',              emoji:'🥭', weight:'700 ml',  price:170, mrp:180, category:'pack', stock:28  },
{ id:'Bisleri_200ml',           name:'Bisleri Pani Pack',        image:CLOUDINARY_BASE+'/image/drink_water.png',             emoji:'💧', weight:'200 ml',  price:5,   mrp:7,   category:'pack', stock:150 },
{ id:'Bisleri_1L',              name:'Bisleri Pani Pack',        image:CLOUDINARY_BASE+'/image/drink_bisleri1.png',          emoji:'💧', weight:'1 L',     price:20,  mrp:25,  category:'pack', stock:80  },
{ id:'Bisleri_20L',             name:'Bisleri Pani Jar',         image:CLOUDINARY_BASE+'/image/drink_bisleri2.png',          emoji:'💧', weight:'20 L',    price:120, mrp:140, category:'pack', stock:15  },
{ id:'Kinley_2L',               name:'Kinley Pani Pack',         image:CLOUDINARY_BASE+'/image/drink_kinley2.png',           emoji:'💧', weight:'2 L',     price:30,  mrp:35,  category:'pack', stock:40  },
{ id:'Aaro_Filter_Pani_Jar',    name:'Aaro Filter Pani Jar',     image:CLOUDINARY_BASE+'/ima/drink_kinley2.png',           emoji:'💧', weight:'20 L',    price:30,  mrp:30,  category:'pack', stock:40  },


  ]; // end STATIC_PRODUCTS

  // Expose globally so index.html and any other script can use it
  window.STATIC_PRODUCTS = STATIC_PRODUCTS;

})();
