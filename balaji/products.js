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
    { id:'grains_aashirvaad_10kg',  name:'Aashirvaad Atta',                    image:CLOUDINARY_BASE+'/image/aashirvaad_atta.jpg',         emoji:'🌾', weight:'10 kg',   price:470, mrp:489, category:'grains', stock:50 },
    { id:'grains_aashirvaad_5kg',   name:'Aashirvaad Atta',                    image:CLOUDINARY_BASE+'/image/aashirvaad_atta.jpg',         emoji:'🌾', weight:'5 kg',    price:250, mrp:262, category:'grains', stock:50 },
    { id:'grains_silvercoin_10kg',  name:'Silver Coin Atta',                   image:CLOUDINARY_BASE+'/image/silvercoin_atta.jpg',         emoji:'🌾', weight:'10 kg',   price:420, mrp:550, category:'grains', stock:40 },
    { id:'grains_silvercoin_5kg',   name:'Silver Coin Atta',                   image:CLOUDINARY_BASE+'/image/silvercoin_atta.jpg',         emoji:'🌾', weight:'5 kg',    price:220, mrp:300, category:'grains', stock:40 },
    { id:'grains_anand_10kg',       name:'Anand Atta',                         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537340/IMG_20260615_205501.png',                        emoji:'🌾', weight:'10 kg',   price:370, mrp:400, category:'grains', stock:40 },
    { id:'grains_anand_5kg',        name:'Anand Atta',                         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537329/1000339772-Photoroom.png',                        emoji:'🌾', weight:'5 kg',    price:190, mrp:200, category:'grains', stock:40 },
{ id:'grains_mp_10kg', name:'Mp Atta', image:CLOUDINARY_BASE+'/image/.jpg', emoji:'🌾', weight:'10 kg', price:500, mrp:520, category:'grains', stock:40 },
{ id:'grains_mp_5kg', name:'Mp Atta', image:CLOUDINARY_BASE+'/image/.jpg', emoji:'🌾', weight:'5 kg', price:250, mrp:270, category:'grains', stock:40 },
{ id:'grains_chawal_atta_1kg', name:'Chawal Atta', image:CLOUDINARY_BASE+'/imag.jpg', emoji:'🌾', weight:'1 kg', price:250, mrp:270, category:'grains', stock:40 },
{ id:'grains_makka_atta_1kg', name:'Makka Atta', image:CLOUDINARY_BASE+'/ime/.jpg', emoji:'🌾', weight:'1 kg', price:250, mrp:270, category:'grains', stock:40 },
{ id:'grains_kuttu_atta_1kg', name:'Kuttu Atta', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680603/1000340508-Photoroom.png', emoji:'🌾', weight:'250gm', price:85, mrp:90, category:'grains', stock:40 },
  { id:'grains_singhada',         name:'Farm Fresh Singhade Ka Atta',        image:CLOUDINARY_BASE+'/image/singhade_ka_atta.png',        emoji:'🌾', weight:'250 gm',  price:50,  mrp:70,  category:'grains', stock:50 },
    { id:'grains_singhada pkt',         name:'Singhade Ka Atta pkt',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680607/1000340515-Photoroom.png',        emoji:'🌾', weight:'250 gm',  price:50,  mrp:70,  category:'grains', stock:50 },
{ id:'grains_khulla_atta_1kg', name:'Khulla Atta', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781612179/1619330858854-c96d62f0-9a8e-43b8-bdc3-9f763546cce1.webp', emoji:'🌾', weight:'1 kg', price:250, mrp:270, category:'grains', stock:40 },

    { id:'grains_quaker_oats',      name:'Quaker Oats',                        image:CLOUDINARY_BASE+'/image/oats_quaker.png',             emoji:'🌾', weight:'400 gm',  price:80,  mrp:86,  category:'grains', stock:50 },
    { id:'grains_saffola_classic',  name:'Saffola Classic Masala Oats',        image:CLOUDINARY_BASE+'/image/oats_saffola_500.png',        emoji:'🌾', weight:'500 gm',  price:210, mrp:220, category:'grains', stock:50 },
    { id:'grains_saffola_curry',    name:'Saffola Curry Corn Pepper Oats',     image:CLOUDINARY_BASE+'/image/oats_saffola_curry.png',      emoji:'🌾', weight:'500 gm',  price:230, mrp:240, category:'grains', stock:50 },
    { id:'grains_saffola_mini',     name:'Saffola Classic Masala Oats',        image:CLOUDINARY_BASE+'/image/oats_saffola_10.png',         emoji:'🌾', weight:'38 gm',   price:18,  mrp:18,  category:'grains', stock:50 },
    { id:'grains_popcorn_classic',  name:'Act Classic Salted Popcorn',         image:CLOUDINARY_BASE+'/image/popcorn_classic.png',         emoji:'🌾', weight:'70 gm',   price:30,  mrp:30,  category:'grains', stock:50 },
    { id:'grains_popcorn_golden',   name:'Act Classic Golden Sizzle Popcorn',  image:CLOUDINARY_BASE+'/image/popcorn_golden.png',          emoji:'🌾', weight:'30 gm',   price:10,  mrp:10,  category:'grains', stock:50 },
      { id:'grains_dalia',            name:'Rajdhani Dalia',                     image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781634206/5d003f88-4c31-45f4-aa04-6faa14d3295d_CR1ZN8ZI66_MN_15122025.avif',                   emoji:'🌾', weight:'500 gm',  price:35,  mrp:50,  category:'grains', stock:50 },
    { id:'grains_sooji',            name:'Rajdhani Sooji',                     image:CLOUDINARY_BASE+'/image/sooji.png',                   emoji:'🌾', weight:'500 gm',  price:35,  mrp:50,  category:'grains', stock:50 },
    { id:'grains_maida',            name:'Rajdhani Maida',                     image:CLOUDINARY_BASE+'/image/maida.png',                   emoji:'🌾', weight:'500 gm',  price:35,  mrp:50,  category:'grains', stock:50 },
    { id:'grains_macroni',          name:'Rajdhani Macroni',                   image:CLOUDINARY_BASE+'/image/pasta.png',                   emoji:'🌾', weight:'200 gm',  price:30,  mrp:31,  category:'grains', stock:50 },
    { id:'grains_besan',            name:'Rajdhani Besan',                     image:CLOUDINARY_BASE+'/image/besan.png',                   emoji:'🌾', weight:'500 gm',  price:60,  mrp:80,  category:'grains', stock:50 },
    { id:'grains_poha_raj',         name:'Rajdhani Poha',                      image:CLOUDINARY_BASE+'/image/poha_rajdhani.png',           emoji:'🌾', weight:'500 gm',  price:60,  mrp:80,  category:'grains', stock:50 },
     { id:'grains_sattu_raj',         name:'Rajdhani Sattu',                      image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165522/rajdhani_sattu_999.webp',           emoji:'🌾', weight:'500 gm',  price:70,  mrp:99,  category:'grains', stock:50 },
    {id:'grains_awadh_sattu_500gm',name:'Awadh Sattu',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543684/1000339894-Photoroom.png',emoji:'🥣',weight:'500gm',price:60,mrp:97,category:'grains',stock:50},

     { id:'grains_sattu_sabudana',         name:'Sabudana',                      image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680601/IMG_20260617_124450.png',           emoji:'🌾', weight:'250 gm',  price:40,  mrp:95,  category:'grains', stock:50 },
  
    { id:'grains_poha_jad',         name:'Jadugar Poha',                       image:CLOUDINARY_BASE+'/image/poha_jadugar.png',            emoji:'🌾', weight:'500 gm',  price:45,  mrp:75,  category:'grains', stock:50 },
      {id:'grains_Dhampure_Sugar_1kg',name:'Dhampure Sugar (chini)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543669/1000339865-Photoroom.png',emoji:'🍯',weight:'1kg',price:45,mrp:45,category:'grains',stock:50},
       {id:'grains_bura_1pkt',name:' Bura',image:'https://res.cloudinary.com/db2tt16/image/upload/q_auto/f_auto/v1781543667/1000339864-Photoroom.png',emoji:'🍯',weight:'1kg',price:45,mrp:45,category:'grains',stock:50},
       {id:'grains_desi_khand_1kg',name:'Ved Ji Desi Khand',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/desi_khand.webp',emoji:'🍯',weight:'1kg',price:45,mrp:105,category:'grains',stock:50},
   {id:'grains_Brown_Sugar_1kg',name:'Brown Sugar',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543667/1000339864-Photoroom.png',emoji:'🍯',weight:'1kg',price:80,mrp:151,category:'grains',stock:50},
    
  { id:'grains_ararot_1kg', name:'Ararot', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610780/d18c1933ec643ca40931039bf0e1fcea.jpg', emoji:'🌾', weight:'1kg', price:60, mrp:60, category:'grains', stock:50 },
{ id:'grains_khullamaida_1kg', name:'Khulla Maida', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610890/maida-500x500.webp', emoji:'🌾', weight:'1kg', price:40, mrp:40, category:'grains', stock:50 },
{ id:'grains_bura_1kg', name:'Khulla Bura', image:'https://res.cloudinary.com/db2tt16/image/upload/q_auto/f_auto/v1781543667/1000339864-Photoroom.png', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },
{ id:'grains_khullasugar_1kg', name:'Khulla Sugar (chini)', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421745/image/chini.png', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },
{ id:'grains_khullamacroni_1kg', name:'Khulla Macroni', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610642/71-OWrr8uTL._AC_UF894_1000_QL80_.jpg', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },
{ id:'grains_khullapasta_1kg', name:'Khulla Pasta', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610672/500-fusilli-pasta-500-gram-regular-sam-world-original-imag4f8ayhfkx7wa.webp', emoji:'🍯', weight:'1kg', price:45, mrp:45, category:'grains', stock:50 },

{ id:'baking_ajanta_baking_powder_45', name:'Ajanta Baking Powder', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632336/IMG_20260616_210528-Photoroom.png', emoji:'🍯', weight:'100gm', price:45, mrp:45, category:'baking', stock:50 },
{ id:'baking_ajanta_lemon_yellow_color_45', name:'Ajanta Lemon Yellow Color', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632329/IMG_20260616_210448-Photoroom.png', emoji:'🍯', weight:'100gm', price:40, mrp:43, category:'baking', stock:50 },
{ id:'baking_ajanta_bright_green_color_45', name:'Ajanta Bright Green Color', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632329/IMG_20260616_210507-Photoroom.png', emoji:'🍯', weight:'100gm', price:40, mrp:42, category:'baking', stock:50 },
{ id:'baking_anuja_lemon_yellow_color_45', name:'Anuja Lemon Yellow Color', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632329/IMG_20260616_210613-Photoroom.png', emoji:'🍯', weight:'10gm', price:5, mrp:7, category:'baking', stock:50 },
{ id:'baking_anuja_bright_green_color_45', name:'Anuja Bright Green Color', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632328/IMG_20260616_210544-Photoroom.png', emoji:'🍯', weight:'10gm', price:5, mrp:7, category:'baking', stock:50 },
{ id:'baking_anuja_orange_red_color_45', name:'Anuja Orange Red Color', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632328/IMG_20260616_210554-Photoroom.png', emoji:'🍯', weight:'10gm', price:5, mrp:7, category:'baking', stock:50 },


 // ══ Dal and Pulses ══

   {id:'grains_plain_chana_1kg',name:'Farm Fresh Plain Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543690/IMG_20260615_224434.png',emoji:'🫘',weight:'1kg',price:45,mrp:45,category:'dal',stock:50},
{id:'grains_ farmfreshchilka_chana_1kg',name:'Farm Fresh Chilka Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543678/1000339882-Photoroom.png',emoji:'🫘',weight:'1kg',price:45,mrp:45,category:'dal',stock:50},
{id:'grains_chilka_chana_1kg',name:'Khulla Chilka Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610798/with-chilka.webp',emoji:'🫘',weight:'1kg',price:45,mrp:45,category:'dal',stock:50},
{id:'grains_chilka_chana_500g',name:'Khulla Chilka Chana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1782471821/rosted-chilka-chana.jpg',emoji:'🫘',weight:'500gm',price:45,mrp:45,category:'dal',stock:50},


    // ══ OIL ══
     { id:'oil_bail_kolhu_5l',       name:'Bail Kolhu 5L',                      image:CLOUDINARY_BASE+'/image/oil_bail_kolhu_5ltr.png',     emoji:'🫙', weight:'5 L',     price:340, mrp:390, category:'oil', stock:15 },
   
    { id:'oil_veer_500ml',          name:'Veer Brand Oil',                     image:CLOUDINARY_BASE+'/image/veerbrandoil_1.png',          emoji:'🫙', weight:'500 ml',  price:85,  mrp:90,  category:'oil', stock:20 },
    { id:'oil_kanishk_500ml',       name:'Kanishk',                            image:CLOUDINARY_BASE+'/image/kanishk_oil.jpg',             emoji:'🫙', weight:'500 mL',  price:90,  mrp:115, category:'oil', stock:35 },
    { id:'oil_jk_mangla_500ml',     name:'J.k Mangla Til Oil',                 image:CLOUDINARY_BASE+'/image/oil_til_tel.png',             emoji:'🫙', weight:'500 ml',  price:90,  mrp:95,  category:'oil', stock:20 },
    { id:'oil_fortune_1l',          name:'Fortune Oil',                        image:CLOUDINARY_BASE+'/image/fortune_oil.jpg',             emoji:'🫙', weight:'1 L',     price:180, mrp:215, category:'oil', stock:60 }, 
    { id:'oil_bail_kolhu_1l',       name:'Bail Kolhu',                         image:CLOUDINARY_BASE+'/image/oil_bail_kolhu.jpg',          emoji:'🫙', weight:'1 L',     price:190, mrp:200, category:'oil', stock:45 },
    { id:'oil_patanjali_1l',        name:'Patanjali Oil',                      image:CLOUDINARY_BASE+'/image/oil_patanjali.jpg',           emoji:'🫙', weight:'1 L',     price:190, mrp:210, category:'oil', stock:22 },
    { id:'oil_veer_1l',             name:'Veer Brand Oil',                     image:CLOUDINARY_BASE+'/image/veerbrandoil_1.jpg',          emoji:'🫙', weight:'1 L',     price:165, mrp:170, category:'oil', stock:20 },
     { id:'oil_aashirwad_1l',       name:'Aashirwad Oil',       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781523020/a-grade-yellow-kachchi-ghani-aashirvaad-mustard-oil-1-liter-bottle-pack-280.jpg', emoji:'🫙', weight:'1 L', price:165, mrp:170, category:'oil', stock:20 },
{ id:'oil_manas_1l',           name:'Manas Mustard Oil',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781523049/71md8pcvuql-sl1500.jpg',                                     emoji:'🫙', weight:'1 L', price:165, mrp:170, category:'oil', stock:20 },
    { id:'oil_jk_mangla_1l',        name:'J.K Mangla Til Oil',                 image:CLOUDINARY_BASE+'/image/oil_til_tel.png',             emoji:'🫙', weight:'1 L',     price:175, mrp:180, category:'oil', stock:20 },
    { id:'oil_dalda_groundnut_1l',  name:'Dalda Groundnut Oil',                image:CLOUDINARY_BASE+'/image/oil_dalda_groundnut.png',     emoji:'🫙', weight:'1 L',     price:220, mrp:238, category:'oil', stock:20 },
    { id:'oil_rath_dalda',          name:'Rath Dalda',                         image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537330/1000339774-Photoroom.png',                emoji:'🫙', weight:'840 gm',  price:195, mrp:199, category:'oil', stock:20 },
     { id:'oil_fortune_refined_1l',  name:'Fortune Refined',                    image:CLOUDINARY_BASE+'/image/oil_fortune_refined.jpg',     emoji:'🫙', weight:'1 L',     price:150, mrp:170, category:'oil', stock:30 },
    { id:'oil_mahakosh_1l',         name:'Mahakosh Refined',                   image:CLOUDINARY_BASE+'/image/oil_mahakosh.png',            emoji:'🫙', weight:'1 L',     price:145, mrp:160, category:'oil', stock:28 },
   { id:'oil_raag_gold_1l', name:'Raag Gold Refined', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522994/7cf7da1f296343469f89262730ee5afd.webp', emoji:'🫙', weight:'1 L', price:145, mrp:160, category:'oil', stock:28 },

    { id:'oil_mayonese_1l',         name:'Mayonese',                           image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537333/1000339775-Photoroom.png',                emoji:'🫙', weight:'1 L',     price:50,  mrp:120, category:'oil', stock:20 },
   
    { id:'oil_coconut_500ml',       name:'Parachute Coconut Oil',              image:CLOUDINARY_BASE+'/image/oil_coconut500.png',          emoji:'🫙', weight:'500ml',   price:310, mrp:320, category:'oil', stock:15 },
    { id:'oil_dabur_sarso_500ml',   name:'Dabur Sarso Amla',                   image:CLOUDINARY_BASE+'/image/oil_dabur_sarso_500.png',     emoji:'🫙', weight:'500ml',   price:160, mrp:165, category:'oil', stock:15 },
    { id:'oil_vatika_300ml',        name:'Vatika Coconut Hair Oil',            image:CLOUDINARY_BASE+'/image/oil_vatika.png',              emoji:'🫙', weight:'300ml',   price:175, mrp:180, category:'oil', stock:15 },
    { id:'oil_dabur_amla_136ml',    name:'Dabur Amla',                         image:CLOUDINARY_BASE+'/image/oil_amla10.png',              emoji:'🫙', weight:'136ml',   price:50,  mrp:50,  category:'oil', stock:15 },
    { id:'oil_keo_100ml',           name:'Keo Karpin Olive Oil',               image:CLOUDINARY_BASE+'/image/oil_keo.png',                 emoji:'🫙', weight:'100ml',   price:50,  mrp:50,  category:'oil', stock:15 },
    { id:'oil_bajaj_110ml',         name:'Bajaj Almond Drop Oil',              image:CLOUDINARY_BASE+'/image/oil_bajaj_85.png',            emoji:'🫙', weight:'110ml',   price:80,  mrp:85,  category:'oil', stock:15 },
    { id:'oil_indulekha_100ml',     name:'Indulekha Bringha Oil',              image:CLOUDINARY_BASE+'/image/oil_indulekha.png',           emoji:'🫙', weight:'100ml',   price:450, mrp:468, category:'oil', stock:15 },
    { id:'oil_dabur_amla_70ml',     name:'Dabur Amla',                         image:CLOUDINARY_BASE+'/image/oil_amla10.png',              emoji:'🫙', weight:'70ml',    price:20,  mrp:20,  category:'oil', stock:15 },
    { id:'oil_dabur_sarso_70ml',    name:'Dabur Sarso Amla',                   image:CLOUDINARY_BASE+'/image/oil_sarso20.png',             emoji:'🫙', weight:'70ml',    price:20,  mrp:20,  category:'oil', stock:15 },
    { id:'oil_coconut_42ml',        name:'Parachute Coconut Oil',              image:CLOUDINARY_BASE+'/image/oil_coconut20.png',           emoji:'🫙', weight:'42ml',    price:20,  mrp:20,  category:'oil', stock:15 },
    { id:'oil_dabur_amla_28ml',     name:'Dabur Amla',                         image:CLOUDINARY_BASE+'/image/oil_amla10.png',              emoji:'🫙', weight:'28ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    { id:'oil_dabur_sarso_30ml',    name:'Dabur Sarso Amla',                   image:CLOUDINARY_BASE+'/image/oil_sarso10.png',             emoji:'🫙', weight:'30ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    { id:'oil_bajaj_24ml',          name:'Bajaj Almond Drop Oil',              image:CLOUDINARY_BASE+'/image/oil_bajaj10.png',             emoji:'🫙', weight:'24ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    { id:'oil_hair_care_30ml',      name:'Hair & Care Almond Oil',             image:CLOUDINARY_BASE+'/image/oil_hair10.png',              emoji:'🫙', weight:'30ml',    price:10,  mrp:10,  category:'oil', stock:15 },
    {id:'oil_navratan_180ml',name:'Navratan Oil',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/navratan_oil_180ml.jpg',emoji:'🧴',weight:'180ml',price:140,mrp:140,category:'oil',stock:15},
    {id:'oil_himgange_180ml',name:'Himgange Oil',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/himgange_oil_140.jpg',emoji:'🧴',weight:'180ml',price:140,mrp:140,category:'oil',stock:15},
    {id:'navratan-oil-1',name:'Navratan Oil',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165517/oil_navratan_1.jpg',emoji:'🧴',price:1,mrp:1,category:'oil',stock:15},
    {id:'himgange-oil-1',name:'Himgange Oil',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165517/oil_himgange_1.webp',emoji:'🧴',price:1,mrp:1,category:'oil',stock:15},

    // ══ GHEE ══
    { id:'ghee_patanjali_900ml',    name:'Patanjali Cow Ghee',                 image:CLOUDINARY_BASE+'/image/ghee_patanjali900.png',       emoji:'🥛', weight:'900ml',   price:720, mrp:731, category:'oil', stock:20 },
    { id:'ghee_patanjali_450ml',    name:'Patanjali Cow Ghee',                 image:CLOUDINARY_BASE+'/image/ghee_patanjali_450.png',      emoji:'🥛', weight:'450ml',   price:385, mrp:393, category:'oil', stock:20 },
    { id:'ghee_patanjali_950ml',    name:'Patanjali Cow Ghee',                 image:CLOUDINARY_BASE+'/image/ghee_patanjali_950.png',      emoji:'🥛', weight:'950ml',   price:925, mrp:932, category:'oil', stock:20 },
    { id:'ghee_mother_dairy_1l', name:'Mother Dairy Ghee',                  image:CLOUDINARY_BASE+'/image/ghee_mother_dairy500.png',    emoji:'🥛', weight:'1ltr',   price:340, mrp:350, category:'oil', stock:20 },
     { id:'ghee_mother_dairy_500ml', name:'Mother Dairy Ghee',                  image:CLOUDINARY_BASE+'/image/ghee_mother_dairy500.png',    emoji:'🥛', weight:'500ml',   price:340, mrp:350, category:'oil', stock:20 },
   { id:'ghee_milkfood_1ltr',          name:'Milkfood Desi Ghee',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522361/40026269_4-milkfood-rich-desi-ghee.webp',                                            emoji:'🥛', weight:'1ltr',   price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_milkfood_500ml',         name:'Milkfood Desi Ghee',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522402/500-rich-desi-ghee-500gm-premium-danedar-ghee-natural-ghee-original-imafu3pjmqc8tgfz.webp', emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_nutralite_500ml',        name:'Nutralite Desi Ghee',       image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522498/best-ghee-tin.jpg',                                                           emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_madhusudan_500ml',       name:'Madhusudan Desi Ghee',      image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522674/1kg-madhusudan-desi-ghee.jpg',                                                emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_paras_500ml',            name:'Paras Desi Ghee',           image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522708/30006680_5-paras-ghee.webp',                                                   emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_amul_500ml',             name:'Amul Desi Ghee',            image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522740/214784_5-amul-amul-pure-ghee-1-l.webp',                                       emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },
{ id:'ghee_namaste_india_500ml',    name:'Namaste India Desi Ghee',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781522830/images.jpg',                                                                   emoji:'🥛', weight:'500ml',  price:340, mrp:350, category:'oil', stock:20 },


    // ══ DRINKS ══
    { id:'drinks_gopal_thandai',    name:'Gopal Ji Thandai',                   image:CLOUDINARY_BASE+'/image/gopal_ji_thandai.png',        emoji:'🥤', weight:'500gm',   price:300, mrp:310, category:'drinks', stock:100 },
    { id:'drinks_glucond_dabur_1kg',name:'Dabur Glucon-D',                     image:CLOUDINARY_BASE+'/image/glucond_dabur.png',           emoji:'🥤', weight:'1 kg',    price:240, mrp:247, category:'drinks', stock:100 },
    { id:'drinks_glucond_tangy_1kg',name:'Glucon-D Tangy Orange',              image:CLOUDINARY_BASE+'/image/glucond_1.png',               emoji:'🥤', weight:'1 kg',    price:400, mrp:409, category:'drinks', stock:100 },
    { id:'drinks_glucond_nimbu',    name:'Glucon-D Nimbu Pani',                image:CLOUDINARY_BASE+'/image/glucond_nimbu.png',           emoji:'🥤', weight:'200gm',   price:95,  mrp:99,  category:'drinks', stock:100 },
    { id:'drinks_glucond_orange',   name:'Glucon-D Tangy Orange',              image:CLOUDINARY_BASE+'/image/glucond_orange.png',          emoji:'🥤', weight:'200gm',   price:95,  mrp:99,  category:'drinks', stock:100 },

    { id:'drinks_icecube',   name:'Ice Cube (Barf)',              image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680606/1000340529-Photoroom.png',          emoji:'🥤', weight:'1pkt',   price:30,  mrp:30,  category:'drinks', stock:100 },

    { id:'drinks_frooti_150ml',     name:'Frooti 150ml',                       image:CLOUDINARY_BASE+'/image/drink_frooti.jpg',            emoji:'🥤', weight:'150 ml',  price:10,  mrp:12,  category:'drinks', stock:100 },
    { id:'drinks_arora_lemon',      name:'Arora Lemon',                        image:CLOUDINARY_BASE+'/image/drink_arora_lemon.png',       emoji:'🥤', weight:'160 ml',  price:10,  mrp:12,  category:'drinks', stock:80  },
    { id:'drinks_lahori_jeera',     name:'Lahori Jeera',                       image:CLOUDINARY_BASE+'/image/drink_lahori_jeera.png',      emoji:'🥤', weight:'160 ml',  price:10,  mrp:12,  category:'drinks', stock:90  },
    { id:'drinks_smoodh_80ml',      name:'Smoodh 80ml',                        image:CLOUDINARY_BASE+'/image/drink_smoodh.png',            emoji:'🥤', weight:'80 ml',   price:10,  mrp:12,  category:'drinks', stock:70  },
    { id:'drinks_appy_125ml',       name:'Appy Fizz 125ml',                    image:CLOUDINARY_BASE+'/image/drink_appy.png',              emoji:'🥤', weight:'125 ml',  price:10,  mrp:15,  category:'drinks', stock:60  },
    { id:'drinks_smoodh_150ml',     name:'Smoodh 150ml',                       image:CLOUDINARY_BASE+'/image/drink_smoodh2.png',           emoji:'🥤', weight:'150 ml',  price:20,  mrp:25,  category:'drinks', stock:50  },
    { id:'drinks_smoodh_lassi',     name:'Smoodh Lassi',                       image:CLOUDINARY_BASE+'/image/drink_smoodh_lassi.png',      emoji:'🥤', weight:'180 ml',  price:20,  mrp:25,  category:'drinks', stock:45  },
    { id:'drinks_real_180ml',       name:'Real Juice 180ml',                   image:CLOUDINARY_BASE+'/image/drink_real.jpg',              emoji:'🥤', weight:'180 ml',  price:20,  mrp:25,  category:'drinks', stock:55  },
    { id:'drinks_pulpy_orange',     name:'Pulpy Orange',                       image:CLOUDINARY_BASE+'/image/drink_pulpyorange.png',       emoji:'🥤', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:65  },
    { id:'drinks_sting',            name:'Sting',                              image:CLOUDINARY_BASE+'/image/drink_sting.png',             emoji:'⚡', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:80  },
    { id:'drinks_coca_250ml',       name:'Coca Cola 250ml',                    image:CLOUDINARY_BASE+'/image/drink_coca.png',              emoji:'🥤', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:100 },
    { id:'drinks_fanta_250ml',      name:'Fanta 250ml',                        image:CLOUDINARY_BASE+'/image/drink_fanta.png',             emoji:'🍊', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:75  },
    { id:'drinks_limca_250ml',      name:'Limca 250ml',                        image:CLOUDINARY_BASE+'/image/drink_limca.png',             emoji:'🍋', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:60  },
    { id:'drinks_mtn_dew_250ml',    name:'Mountain Dew',                       image:CLOUDINARY_BASE+'/image/drink_mountaindew.png',       emoji:'💚', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:70  },
    { id:'drinks_pepsi_400ml',      name:'Pepsi 400ml',                        image:CLOUDINARY_BASE+'/image/drink_pepsi.png',             emoji:'🥤', weight:'400 ml',  price:20,  mrp:25,  category:'drinks', stock:85  },
    { id:'drinks_coconut_250ml',    name:'Coconut Water',                      image:CLOUDINARY_BASE+'/image/drink_coconut.png',           emoji:'🥥', weight:'250 ml',  price:20,  mrp:25,  category:'drinks', stock:40  },
    { id:'drinks_coca_740ml',       name:'Coca Cola 740ml',                    image:CLOUDINARY_BASE+'/image/drink_coca2.png',             emoji:'🥤', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:50  },
    { id:'drinks_sprite_740ml',     name:'Sprite 740ml',                       image:CLOUDINARY_BASE+'/image/drink_sprite1.png',           emoji:'🍃', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:45  },
    { id:'drinks_fanta_740ml',      name:'Fanta 740ml',                        image:CLOUDINARY_BASE+'/image/drink_fanta2.png',            emoji:'🍊', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:40  },
    { id:'drinks_thumsup_740ml',    name:'Thums Up 740ml',                     image:CLOUDINARY_BASE+'/image/drink_thumsup2.jpg',          emoji:'👍', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:55  },
    { id:'drinks_limca_740ml',      name:'Limca 740ml',                        image:CLOUDINARY_BASE+'/image/drink_limca1.png',            emoji:'🍋', weight:'740 ml',  price:35,  mrp:40,  category:'drinks', stock:35  },
    { id:'drinks_maaza_600ml',      name:'Maaza 600ml',                        image:CLOUDINARY_BASE+'/image/drink_maaza.jpg',             emoji:'🥭', weight:'600 ml',  price:40,  mrp:50,  category:'drinks', stock:60  },
    { id:'drinks_coca_1l',          name:'Coca Cola 1L',                       image:CLOUDINARY_BASE+'/image/drink_coca2.png',             emoji:'🥤', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:40  },
    { id:'drinks_sprite_1l',        name:'Sprite 1L',                          image:CLOUDINARY_BASE+'/image/drink_sprite2.png',           emoji:'🍃', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:35  },
    { id:'drinks_fanta_1l',         name:'Fanta 1L',                           image:CLOUDINARY_BASE+'/image/drink_fanta3.png',            emoji:'🍊', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:30  },
    { id:'drinks_thumsup_1l',       name:'Thums Up 1L',                        image:CLOUDINARY_BASE+'/image/drink_thumsup2.png',          emoji:'👍', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:38  },
    { id:'drinks_limca_1l',         name:'Limca 1L',                           image:CLOUDINARY_BASE+'/image/drink_limca2.png',            emoji:'🍋', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:25  },
    { id:'drinks_maaza_1l',         name:'Maaza 1L',                           image:CLOUDINARY_BASE+'/image/drink_maaza.jpg',             emoji:'🥭', weight:'1 L',     price:50,  mrp:60,  category:'drinks', stock:45  },
    { id:'drinks_coca_2l',          name:'Coca Cola 2L',                       image:CLOUDINARY_BASE+'/image/drink_coca3.png',             emoji:'🥤', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:30  },
    { id:'drinks_sprite_2l',        name:'Sprite 2L',                          image:CLOUDINARY_BASE+'/image/drink_sprite2.png',           emoji:'🍃', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:25  },
    { id:'drinks_fanta_2l',         name:'Fanta 2L',                           image:CLOUDINARY_BASE+'/image/drink_fanta4.png',            emoji:'🍊', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:20  },
    { id:'drinks_thumsup_2l',       name:'Thums Up 2L',                        image:CLOUDINARY_BASE+'/image/drink_thumsup2.jpg',          emoji:'👍', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:28  },
    { id:'drinks_limca_2l',         name:'Limca 2L',                           image:CLOUDINARY_BASE+'/image/drink_limca3.jpg',            emoji:'🍋', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:22  },
    { id:'drinks_maaza_2l',         name:'Maaza 2L',                           image:CLOUDINARY_BASE+'/image/drink_maaza.jpg',             emoji:'🥭', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:18  },
    { id:'drinks_frooti_2l',        name:'Frooti 2L',                          image:CLOUDINARY_BASE+'/image/drink_frooti2.jpg',           emoji:'🥤', weight:'2 L',     price:100, mrp:120, category:'drinks', stock:20  },
    { id:'drinks_real_250g',        name:'Real Juice 250g',                    image:CLOUDINARY_BASE+'/image/drink_real2.png',             emoji:'🥤', weight:'250 g',   price:100, mrp:120, category:'drinks', stock:15  },
    { id:'drinks_redbull',          name:'Red Bull',                           image:CLOUDINARY_BASE+'/image/drink_redbull.png',           emoji:'🐂', weight:'250 ml',  price:120, mrp:150, category:'drinks', stock:20  },
    { id:'drinks_amul_kool',        name:'Amul Kool',                          image:CLOUDINARY_BASE+'/image/drink_amul_kool.png',         emoji:'🥛', weight:'180 ml',  price:30,  mrp:35,  category:'drinks', stock:50  },
    { id:'drinks_mogu_mogu',        name:'Mogu Mogu',                          image:CLOUDINARY_BASE+'/image/drink_mogu_mogu.png',         emoji:'🥤', weight:'320 ml',  price:70,  mrp:85,  category:'drinks', stock:30  },
    { id:'drinks_campa_energy',     name:'Campa Energy',                       image:CLOUDINARY_BASE+'/image/drink_campa.png',             emoji:'⚡', weight:'250 ml',  price:35,  mrp:40,  category:'drinks', stock:40  },
    { id:'drinks_zyro_400ml',       name:'Zyro 400ml',                         image:CLOUDINARY_BASE+'/image/drink_zyro.png',              emoji:'🥤', weight:'400 ml',  price:60,  mrp:75,  category:'drinks', stock:35  },
    { id:'drinks_zyro_lemon',       name:'Zyro Lemon',                         image:CLOUDINARY_BASE+'/image/drink_zyro2.png',             emoji:'🍋', weight:'400 ml',  price:60,  mrp:75,  category:'drinks', stock:30  },
    { id:'drinks_zyro_mango',       name:'Zyro Mango',                         image:CLOUDINARY_BASE+'/image/drink_zyro3.png',             emoji:'🥭', weight:'400 ml',  price:60,  mrp:75,  category:'drinks', stock:28  },
    { id:'drinks_roohafza',         name:'Roohafza',                           image:CLOUDINARY_BASE+'/image/roohafza.png',                emoji:'🥭', weight:'750 ml',  price:140, mrp:165, category:'drinks', stock:28  },
    { id:'drinks_khus_syrup',       name:'Shahi Khus Syrup',                   image:CLOUDINARY_BASE+'/image/khus_syrup.png',              emoji:'🥭', weight:'700 ml',  price:170, mrp:180, category:'drinks', stock:28  },
    { id:'drinks_bisleri_200ml',    name:'Bisleri Pani ',                      image:CLOUDINARY_BASE+'/image/drink_water.png',             emoji:'💧', weight:'200 ml',  price:5,   mrp:7,   category:'drinks', stock:150 },
    { id:'drinks_bisleri_1l',       name:'Bisleri Pani ',                         image:CLOUDINARY_BASE+'/image/drink_bisleri1.png',          emoji:'💧', weight:'1 L',     price:20,  mrp:25,  category:'drinks', stock:80  },
    { id:'drinks_bisleri_20l',      name:'Bisleri Pani Jar ',                        image:CLOUDINARY_BASE+'/image/drink_bisleri2.png',          emoji:'💧', weight:'20 L',    price:120, mrp:140, category:'drinks', stock:15  },
    { id:'drinks_kinley_2l',        name:'Kinley Pani ',                          image:CLOUDINARY_BASE+'/image/drink_kinley2.png',           emoji:'💧', weight:'2 L',     price:30,  mrp:35,  category:'drinks', stock:40  },
      { id:'drinks_nmpani_2l',        name:'Aaro Filter Pani Jar',                          image:CLOUDINARY_BASE+'/image/drink_kinley2.png',           emoji:'💧', weight:'20 L',     price:30,  mrp:30,  category:'drinks', stock:40  },

    // ══ TEA & COFFEE ══
    { id:'tea_kashmirichai_kahva_1kg', name:'Kashmiri Chai (kahva)', image:CLOUDINARY_BASE+'/image/ch_redlabel1kg.png', emoji:'☕', weight:'1 kg', price:525, mrp:530, category:'tea', stock:10 },
     { id:'tea_kashmirichai_kahva_500gm', name:'Kashmiri Chai (kahva)', image:CLOUDINARY_BASE+'/image/ch_redlabel1kg.png', emoji:'☕', weight:'500gm', price:525, mrp:530, category:'tea', stock:10 },
    { id:'tea_red_label_1kg',       name:'Red Label Natural Care',             image:CLOUDINARY_BASE+'/image/chai_redlabel1kg.png',        emoji:'☕', weight:'1 kg',    price:525, mrp:530, category:'tea', stock:10 },
    { id:'tea_wagh_bakri_500g',     name:'Wagh Bakri Premium Leaf Tea',        image:CLOUDINARY_BASE+'/image/chai_wagh_bakri_500.png',     emoji:'☕', weight:'500 gm',  price:320, mrp:325, category:'tea', stock:10 },
    { id:'tea_tata_premium_500g',   name:'Tata Tea Premium',                   image:CLOUDINARY_BASE+'/image/chai_premium_250gm.png',      emoji:'☕', weight:'500 gm',  price:235, mrp:240, category:'tea', stock:10 },
    { id:'tea_taaza_250g',          name:'Taaza',                              image:CLOUDINARY_BASE+'/image/chai_taaza_250gm.png',        emoji:'☕', weight:'250gm',   price:65,  mrp:65,  category:'tea', stock:10 },
    { id:'tea_tata_premium_250g',   name:'Tata Tea Premium',                   image:CLOUDINARY_BASE+'/image/chai_premium_250gm.png',      emoji:'☕', weight:'250 gm',  price:120, mrp:125, category:'tea', stock:10 },
    { id:'tea_wagh_bakri_250g',     name:'Wagh Bakri Premium Leaf Tea',        image:CLOUDINARY_BASE+'/image/chai_wagh_bakri_250_gm.png',  emoji:'☕', weight:'250 gm',  price:160, mrp:165, category:'tea', stock:10 },
    { id:'tea_agni_250g',           name:'Tata Tea Agni',                      image:CLOUDINARY_BASE+'/image/chai_agni.png',               emoji:'☕', weight:'250 gm',  price:50,  mrp:50,  category:'tea', stock:10 },
    { id:'tea_today_star_250g',     name:'Today Star',                         image:CLOUDINARY_BASE+'/image/chai_today_star.png',         emoji:'☕', weight:'250 gm',  price:60,  mrp:60,  category:'tea', stock:10 },
    { id:'tea_taj_mahal_250g',      name:'Taj Mahal Tea',                      image:CLOUDINARY_BASE+'/image/chai_tajmahal_250.png',       emoji:'☕', weight:'250 gm',  price:175, mrp:180, category:'tea', stock:10 },
    { id:'tea_wagh_spiced_250g',    name:'Wagh Bakri Spiced Tea',              image:CLOUDINARY_BASE+'/image/chai_wagh_bakri_spiced_250.png', emoji:'☕', weight:'250 gm', price:160, mrp:165, category:'tea', stock:10 },
    { id:'tea_red_label_250g',      name:'Broke Bond Red Label',               image:CLOUDINARY_BASE+'/image/chai_red_label.png',          emoji:'☕', weight:'250 gm',  price:115, mrp:120, category:'tea', stock:10 },
    { id:'tea_tetley_100pcs',       name:'Tetley Tea Bags',                    image:CLOUDINARY_BASE+'/image/chai_tetly.png',              emoji:'☕', weight:'100 Pcs', price:210, mrp:220, category:'tea', stock:10 },
    { id:'tea_taj_bag_25pcs',       name:'Taj Mahal Tea Bags',                 image:CLOUDINARY_BASE+'/image/chai_taj_mahal_teabag.png',   emoji:'☕', weight:'25 pcs',  price:75,  mrp:80,  category:'tea', stock:10 },
    { id:'tea_lipton_green_100g',   name:'Lipton Green Tea',                   image:CLOUDINARY_BASE+'/image/chai_lipton.png',             emoji:'☕', weight:'100 gm',  price:165, mrp:170, category:'tea', stock:10 },
    { id:'tea_tata_premium_100g',   name:'Tata Tea Premium',                   image:CLOUDINARY_BASE+'/image/chai_premium_100gm.png',      emoji:'☕', weight:'100 gm',  price:35,  mrp:35,  category:'tea', stock:10 },
    { id:'tea_morbagh_100g',        name:'Morbagh Daily Tea',                  image:CLOUDINARY_BASE+'/image/chai_morbagh.png',            emoji:'☕', weight:'100 gm',  price:45,  mrp:45,  category:'tea', stock:10 },
    { id:'tea_uttam_250g',          name:'Uttam Tea',                          image:CLOUDINARY_BASE+'/image/chai_uttam.png',              emoji:'☕', weight:'250 gm',  price:145, mrp:150, category:'tea', stock:10 },
    { id:'tea_waghbakri_elaichi_20',name:'Waghbakri Elaichi Tea',              image:CLOUDINARY_BASE+'/image/chai_waghbakri_20.png',       emoji:'☕', weight:'55 gm',   price:20,  mrp:20,  category:'tea', stock:10 },
    { id:'tea_today_premium_20',    name:'Today Premium',                      image:CLOUDINARY_BASE+'/image/chai_today20.png',            emoji:'☕', weight:'55 gm',   price:20,  mrp:20,  category:'tea', stock:10 },
    { id:'tea_tata_premium_10',     name:'Tata Tea Premium',                   image:CLOUDINARY_BASE+'/image/chai_premium_10.png',         emoji:'☕', weight:'25 gm',   price:10,  mrp:10,  category:'tea', stock:10 },
    { id:'tea_agni_elaichi_10',     name:'Tata Tea Agni Elaichi Chai',         image:CLOUDINARY_BASE+'/image/chai_agni10.png',             emoji:'☕', weight:'25 gm',   price:10,  mrp:10,  category:'tea', stock:10 },

    // ══ SPICES & MASALA ══

{id:'spice_kashmirimirchpowder_1kg',name:'Kashmiri mirch Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/100-kutilal-coarse-ground-chilli-powder-pouch-1-evert-powder-original-imahfxpfusxn5dja.jpg',emoji:'🌶️',weight:'1kg',price:700,mrp:700,category:'spices',stock:20},
{id:'spice_kashmirimirchpowder_1kg',name:'Kashmiri mirch Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/100-kutilal-coarse-ground-chilli-powder-pouch-1-evert-powder-original-imahfxpfusxn5dja.jpg',emoji:'🌶️',weight:'500gm',price:350,mrp:350,category:'spices',stock:20},
{id:'spice_sukhimirch_100gm',name:'Sukhi mirch',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611042/719mGOXzPeL._AC_UF894_1000_QL80_.jpg',emoji:'🌶️',weight:'100gm',price:40,mrp:40,category:'spices',stock:20},
{id:'spice_saufpowder_1kg',name:'Sauf Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/100-kutilal-coarse-ground-chilli-powder-pouch-1-everes-powder-original-imahfxpfusxn5dja.jpg',emoji:'🌶️',weight:'1kg',price:400,mrp:400,category:'spices',stock:20},
{id:'spice_saufpowder_500gm',name:'Sauf Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/100-kutilal-carse-ground-chilli-powder-pouch-1-everes-powder-original-imahfxpfusxn5dja.jpg',emoji:'🌶️',weight:'500gm',price:400,mrp:400,category:'spices',stock:20},

{id:'spice_elaichi_100gm',name:'Elaichi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611046/71UrL-52XQL._AC_UF894_1000_QL80_.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_badi_elaichi_100gm',name:'Badi elaichi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611097/black-cardamom-jpg.webp',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_laung_100gm',name:'Laung',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611140/AmazonImages3_3.webp',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_meetha_soda_100gm',name:'Metha soda',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611203/SodaMeetha_2.webp',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_kali_mirch_100gm',name:'Kali mirch',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611242/Kali-Mirch-Whole-450x450.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_kalonji_100gm',name:'Kalonji',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611261/4_9c0ddfd8-b1a0-4e55-b70e-8c971df4ba32.webp',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_ajwain_100gm',name:'Ajwain',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611319/69676623.avif',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_jeera_100gm',name:'Jeera',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611379/jeera-crushing-qulity-extra.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_methidana_100gm',name:'Methi dana ',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611360/1.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_Dalchini_100gm',name:'Dalchini ',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611495/61hkXVG1fUL._AC_UF894_1000_QL80_.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},
{id:'spice_sauf_100gm',name:'Sauf',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611538/81UmF7lbO-L._AC_UF894_1000_QL80_.jpg',emoji:'🌶️',weight:'100gm',price:90,mrp:100,category:'spices',stock:20},

   {id:'spice_everest_kutilal_powder',name:'Everest Kutilal Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/100-kutilal-coarse-ground-chilli-powder-pouch-1-everest-powder-original-imahfxpfusxn5dja.jpg',emoji:'🌶️',weight:'250gm',price:90,mrp:100,category:'spices',stock:20},
    { id:'spice_manglam_haldi',     name:'Manglam Haldi Powder',               image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632326/IMG_20260616_210409-Photoroom.png',                 emoji:'🌶️', weight:'250 gm',  price:90,  mrp:100, category:'spices', stock:20 },
    { id:'spice_mdh_deggi_100g',    name:'MDH Deggi Mirch',                    image:CLOUDINARY_BASE+'/image/masala_deggi_100.png',        emoji:'🌶️', weight:'100 gm',  price:120, mrp:125, category:'spices', stock:20 },
    { id:'spice_mdh_chana_100g',    name:'MDH Chana Masala',                   image:CLOUDINARY_BASE+'/image/masala_chana_100.png',        emoji:'🌶️', weight:'100 gm',  price:85,  mrp:92,  category:'spices', stock:20 },
    { id:'spice_mdh_meat_100g',     name:'MDH Meat Masala',                    image:CLOUDINARY_BASE+'/image/masala_meat_100.png',         emoji:'🌶️', weight:'100 gm',  price:90,  mrp:100, category:'spices', stock:20 },
    { id:'spice_mdh_chicken_100g',  name:'MDH Chicken Masala',                 image:CLOUDINARY_BASE+'/image/masala_chicken_100.png',      emoji:'🌶️', weight:'100 gm',  price:85,  mrp:92,  category:'spices', stock:20 },
    { id:'spice_mdh_chat_100g',     name:'MDH Chunkey Chat Masala',            image:CLOUDINARY_BASE+'/image/masala_chat_100.png',         emoji:'🌶️', weight:'100 gm',  price:88,  mrp:94,  category:'spices', stock:20 },
    { id:'spice_mdh_kitchen_100g',  name:'MDH Kitchen King',                   image:CLOUDINARY_BASE+'/image/masala_kitchen_king_100.png', emoji:'🌶️', weight:'100 gm',  price:90,  mrp:100, category:'spices', stock:20 },
    { id:'spice_mdh_garam_100g',    name:'MDH Garam Masala',                   image:CLOUDINARY_BASE+'/image/masala_garam_100.png',        emoji:'🌶️', weight:'100 gm',  price:105, mrp:115, category:'spices', stock:20 },
    { id:'spice_mdh_methi_100g',    name:'MDH Kasoori Methi',                  image:CLOUDINARY_BASE+'/image/masala_kasoori.png',          emoji:'🌶️', weight:'100 gm',  price:50,  mrp:56,  category:'spices', stock:20 },
    { id:'spice_mdh_kashmiri_100g', name:'MDH Kashmiri Mirch',                 image:CLOUDINARY_BASE+'/image/masala_kashmiri_mirch_100.png', emoji:'🌶️', weight:'100 gm', price:120, mrp:125, category:'spices', stock:20 },
    { id:'spice_kbm_haldi_100g',    name:'KBM Haldi Powder',                   image:CLOUDINARY_BASE+'/image/masala_haldi_kbm.png',        emoji:'🌶️', weight:'100 gm',  price:35,  mrp:40,  category:'spices', stock:20 },
    { id:'spice_kbm_mirch_100g',    name:'KBM Kutti Lal Mirch Powder',         image:CLOUDINARY_BASE+'/image/masala_kutti_mirch_kbm.png',  emoji:'🌶️', weight:'100 gm',  price:50,  mrp:54,  category:'spices', stock:20 },
    { id:'spice_kbm_dhaniya_100g',  name:'KBM Dhaniya Powder',                 image:CLOUDINARY_BASE+'/image/masala_dhaniya_powder.png',   emoji:'🌶️', weight:'100 gm',  price:30,  mrp:34,  category:'spices', stock:20 },
    { id:'spice_kbm_amchoor_100g',  name:'KBM Amchoor Powder',                 image:CLOUDINARY_BASE+'/image/masala_amchur_powder.png',    emoji:'🌶️', weight:'100 gm',  price:50,  mrp:65,  category:'spices', stock:20 },
    { id:'spice_kbm_lal_100g',      name:'KBM Lal Mirch Powder',               image:CLOUDINARY_BASE+'/image/masala_lal_mirch.png',        emoji:'🌶️', weight:'100 gm',  price:50,  mrp:54,  category:'spices', stock:20 },
    { id:'spice_everest_chicken_50g',name:'Everest Chicken Masala',            image:CLOUDINARY_BASE+'/image/masala_chicken_50E.png',      emoji:'🌶️', weight:'50gm',    price:45,  mrp:48,  category:'spices', stock:20 },
    { id:'spice_sds_chhole',        name:'SDS Chhole/Chana Masala',            image:CLOUDINARY_BASE+'/image/masala_sds_chhole.png',       emoji:'🌶️', weight:'70gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_pav',           name:'SDS Pav Bhaji Masala',               image:CLOUDINARY_BASE+'/image/masala_sds_pav.png',          emoji:'🌶️', weight:'50gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_matar_paneer',  name:'SDS Matar Paneer Masala',            image:CLOUDINARY_BASE+'/image/masala_sds_matar_paneer.png', emoji:'🌶️', weight:'40gm',    price:35,  mrp:35,  category:'spices', stock:20 },
    { id:'spice_sds_shahi_paneer',  name:'SDS Shahi Paneer Masala',            image:CLOUDINARY_BASE+'/image/masala_sds_shahi_paneer.png', emoji:'🌶️', weight:'40gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_bhindi',        name:'SDS Bhindi/Karela Masala',           image:CLOUDINARY_BASE+'/image/masala_sds_bhindi.png',       emoji:'🌶️', weight:'50gm',    price:35,  mrp:35,  category:'spices', stock:20 },
    { id:'spice_sds_soya_chaap',    name:'SDS Soya Chaap Masala',              image:CLOUDINARY_BASE+'/image/masala_sds_soya_chaap.png',   emoji:'🌶️', weight:'40gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_sambhar',       name:'SDS Sambhar Masala',                 image:CLOUDINARY_BASE+'/image/masala_sds_sambhar.png',      emoji:'🌶️', weight:'50gm',    price:35,  mrp:35,  category:'spices', stock:20 },
    { id:'spice_sds_rajma',         name:'SDS Rajma Masala',                   image:CLOUDINARY_BASE+'/image/masala_sds_pav.png',          emoji:'🌶️', weight:'70gm',    price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_aloo',          name:'SDS Aloo Sabji Masala',              image:CLOUDINARY_BASE+'/image/masala_sds_aloo.png',         emoji:'🌶️', weight:'60gm',    price:40,  mrp:40,  category:'spices', stock:20 },
    { id:'spice_sds_methi_sauth',   name:'SDS Methi Sauth Masala',             image:CLOUDINARY_BASE+'/image/masala_sds_methi_sauth.png',  emoji:'🌶️', weight:'100gm',   price:45,  mrp:50,  category:'spices', stock:20 },
    { id:'spice_sds_biryani',       name:'SDS Pulav/Biryani Masala',           image:CLOUDINARY_BASE+'/image/masala_sds_biryani.png',      emoji:'🌶️', weight:'50gm',    price:70,  mrp:75,  category:'spices', stock:20 },


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


    { id:'spice_10_shahi_biryani',  name:'Shahi Biryani Masala',               image:CLOUDINARY_BASE+'/image/masala_shahi_biryani_10.png', emoji:'🌶️', weight:'8 gm',    price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_shahi_paneer',   name:'Shahi Paneer Masala',                image:CLOUDINARY_BASE+'/image/masala_shahi_paneer_10.png',  emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_pav_bhaji',      name:'Pav Bhaji Masala',                   image:CLOUDINARY_BASE+'/image/masala_pav_bhaji_10.png',     emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_meat',           name:'Meat Masala',                        image:CLOUDINARY_BASE+'/image/masala_meat_10.png',          emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_sambhar',        name:'Sambhar Masala',                     image:CLOUDINARY_BASE+'/image/masala_sambhar_10.png',       emoji:'🌶️', weight:'12 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_kitchen',        name:'Kitchen King Masala',                image:CLOUDINARY_BASE+'/image/masala_kitchen_10.png',       emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_sabji',          name:'Sabji Masala',                       image:CLOUDINARY_BASE+'/image/masala_sabji_10.png',         emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_chhole',         name:'Chhole Masala',                      image:CLOUDINARY_BASE+'/image/masala_chhole_10.png',        emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_kashmiri_mirch', name:'KBM Kashmiri Mirch',                 image:CLOUDINARY_BASE+'/image/masala_kashmiri_mirch10.png', emoji:'🌶️', weight:'5 gm',    price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_chicken',        name:'Chicken Masala',                     image:CLOUDINARY_BASE+'/image/masala_chicken_10.png',       emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
     { id:'spice_10_garam',        name:'Garam Masala',                     image:CLOUDINARY_BASE+'/image/masala_chicken0.png',       emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },  
    { id:'spice_10_matar_paneer',   name:'Bharat Matar Paneer Masala',         image:CLOUDINARY_BASE+'/image/masala_matar_paneer_10.png',  emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_catch_chat',     name:'Catch Chunkey Chat Masala',          image:CLOUDINARY_BASE+'/image/masala_chat_10.png',          emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_everest_chat',   name:'Everest Chunkey Chat Masala',        image:CLOUDINARY_BASE+'/image/masala_chat_10E.png',         emoji:'🌶️', weight:'10 gm',   price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_10_black_pepper',   name:'Catch Black Pepper Powder',          image:CLOUDINARY_BASE+'/image/masala_black_pepper_10.png',  emoji:'🌶️', weight:'5 gm',    price:10,  mrp:10,  category:'spices', stock:20 },
    { id:'spice_20_black_pepper',   name:'Chukde Black Pepper Powder',         image:CLOUDINARY_BASE+'/image/masala_black_pepper_20.png',  emoji:'🌶️', weight:'10 gm',   price:20,  mrp:20,  category:'spices', stock:20 },

 { id:'pack_meat_masala_5', name:'Meat Masala pack', image:CLOUDINARY_BASE+'/image/masala_mat_10.png', emoji:'🌶️', weight:'5 gm', price:5, mrp:5, category:'spices', stock:20 },
{ id:'pack_chicken_masala_5', name:'Chicken Masala pack', image:CLOUDINARY_BASE+'/image/masaa_chicken_10.png', emoji:'🌶️', weight:'5 gm', price:5, mrp:5, category:'spices', stock:20 },
{ id:'pack_garam_masala_5', name:'Garam Masala pack', image:CLOUDINARY_BASE+'/image/masala_chcken0.png', emoji:'🌶️', weight:'5 gm', price:5, mrp:5, category:'spices', stock:20 },
    

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

    { id:'snack_nutri_choice',      name:'Nutri Choice',                       image:CLOUDINARY_BASE+'/image/nutri_choice.png',            emoji:'🍪', weight:'120 gm',  price:25,  mrp:25,  category:'snacks', stock:20 },
    { id:'snack_jimjam_150g',       name:'Jim Jam',                            image:CLOUDINARY_BASE+'/image/jimjam_40.png',               emoji:'🍪', weight:'150 gm',  price:40,  mrp:40,  category:'snacks', stock:20 },
    { id:'snack_parleg_10',         name:'Parle G',                            image:CLOUDINARY_BASE+'/image/parle_g10.png',               emoji:'🍪', weight:'90 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_monaco_10',         name:'Monaco',                             image:CLOUDINARY_BASE+'/image/monaco.png',                  emoji:'🍪', weight:'52 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_jimjam_10',         name:'Jim Jam',                            image:CLOUDINARY_BASE+'/image/jimjam.png',                  emoji:'🍪', weight:'62 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_tiger_krunch_10',   name:'Tiger Krunch',                       image:CLOUDINARY_BASE+'/image/tiger_krunch.png',            emoji:'🍪', weight:'68 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_coconut_10',        name:'Coconut Biscuit',                    image:CLOUDINARY_BASE+'/image/coconut.png',                 emoji:'🍪', weight:'69 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_parleg_gold_10',    name:'Parle G Gold',                       image:CLOUDINARY_BASE+'/image/parleg_gold.png',             emoji:'🍪', weight:'68 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_bourbon_10',        name:'Bourbon',                            image:CLOUDINARY_BASE+'/image/bourbon.png',                 emoji:'🍪', weight:'60 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_marie_gold_10',     name:'Marie Gold',                         image:CLOUDINARY_BASE+'/image/marie_gold.png',              emoji:'🍪', weight:'73 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_moms_magic_10',     name:'Moms Magic',                         image:CLOUDINARY_BASE+'/image/mom_magic.png',               emoji:'🍪', weight:'61 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_good_day_10',       name:'Good Day',                           image:CLOUDINARY_BASE+'/image/good_day.png',                emoji:'🍪', weight:'67 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_oreo_10',           name:'Oreo',                               image:CLOUDINARY_BASE+'/image/oreo.png',                    emoji:'🍪', weight:'41 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_oreo_sandwich_10',  name:'Oreo Sandwich',                      image:CLOUDINARY_BASE+'/image/oreo_sandwich.png',           emoji:'🍪', weight:'41 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_krackjack_10',      name:'Krack Jack',                         image:CLOUDINARY_BASE+'/image/krackjack.png',               emoji:'🍪', weight:'56 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_nice_time_10',      name:'Nice Time',                          image:CLOUDINARY_BASE+'/image/nice_time.png',               emoji:'🍪', weight:'59 gm',   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_5050_10',           name:'50-50 Biscuit',                      image:CLOUDINARY_BASE+'/image/50_biscuit10.png',            emoji:'🍪',                   price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'snack_good_day_5',        name:'Good Day',                           image:CLOUDINARY_BASE+'/image/good_day.png',                emoji:'🍪', weight:'34 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    { id:'snack_parleg_5',          name:'Parle G',                            image:CLOUDINARY_BASE+'/image/parle_g5.png',                emoji:'🍪', weight:'45 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    { id:'snack_5050_5',            name:'50-50 Biscuit',                      image:CLOUDINARY_BASE+'/image/50_biscuit5.png',             emoji:'🍪', weight:'37 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    { id:'snack_cnc_5',             name:'CNC',                                image:CLOUDINARY_BASE+'/image/cnc.png',                     emoji:'🍪', weight:'40 gm',   price:5,   mrp:5,   category:'snacks', stock:20 },
    {id:'snack_happy_happy_5',name:'Happy Happy Biscuit',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/happy_happy_biscuit_5.webp',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
    {id:'snack_yummy_chocolate_5',name:'Yummy Chocolate',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/yummy_biscuit_chocolate_5.webp',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
    {id:'snack_yummy_milk_5',name:'Yummy Milk',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332662/yummy_biscuit_milk_5.webp',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
    {id:'snack_yummy_elaichi_5',name:'Yummy Elaichi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/yummy_biscuit_elaichi_5.webp',emoji:'🍪',price:5,mrp:5,category:'snacks',stock:20},
   {id:'snack_dark_fantasy_10',name:'Dark Fantasy',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/dark_fantasy_10.jpg',emoji:'🍪',price:10,mrp:10,category:'snacks',stock:20},
   {id:'snack_gems_10',name:'Gems',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/gems_10.webp',emoji:'🍬',price:10,mrp:10,category:'snacks',stock:20},
   {id:'snack_gems_5',name:'Gems',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/gems_5.webp',emoji:'🍬',price:5,mrp:5,category:'snacks',stock:20},
    
    // ══ NAMKEEN 200g ══
    { id:'namkeen_aloo_bhujia_200', name:'Aloo Bhujia',                        image:CLOUDINARY_BASE+'/image/namkeen_aloo_bhujia_200.png', emoji:'🍪', weight:'210 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_bhujia_200',      name:'Bhujia',                             image:CLOUDINARY_BASE+'/image/namkeen_bhujia_200.png',      emoji:'🍪', weight:'200 gm',  price:55,  mrp:57,  category:'snacks', stock:20 },
    { id:'namkeen_fatafat_200',     name:'Fatafat Bhel',                       image:CLOUDINARY_BASE+'/image/namkeen_fatafat_bhel_200.png',emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_kashmiri_200',    name:'Kashmiri Mixture',                   image:CLOUDINARY_BASE+'/image/namkeen_kashmiri200.png',     emoji:'🍪', weight:'150 gm',  price:36,  mrp:38,  category:'snacks', stock:20 },
    { id:'namkeen_moong_200',       name:'Moong Dal',                          image:CLOUDINARY_BASE+'/image/namkeen_moong200.png',        emoji:'🍪', weight:'200 gm',  price:60,  mrp:60,  category:'snacks', stock:20 },
    { id:'namkeen_navrattan_200',   name:'Navrattan',                          image:CLOUDINARY_BASE+'/image/namkeen_navratan_200.png',    emoji:'🍪', weight:'200 gm',  price:60,  mrp:60,  category:'snacks', stock:20 },
    { id:'namkeen_nimbu_200',       name:'Nimbu Masala',                       image:CLOUDINARY_BASE+'/image/namkeen_nimbu_masala.png',    emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_nut_200',         name:'Nut Cracker',                        image:CLOUDINARY_BASE+'/image/namkeen_nutcracker200.png',   emoji:'🍪', weight:'210 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_panchrattan_200', name:'Panchrattan',                        image:CLOUDINARY_BASE+'/image/namkeen_panchrattan_200.png', emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_peanut_200',      name:'Salted Peanut',                      image:CLOUDINARY_BASE+'/image/namkeen_peanut200.png',       emoji:'🍪', weight:'200 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_punjabi_200',     name:'Punjabi Tadka',                      image:CLOUDINARY_BASE+'/image/namkeen_punjabi200.png',      emoji:'🍪', weight:'210 gm',  price:55,  mrp:55,  category:'snacks', stock:20 },
    { id:'namkeen_lite_250g',       name:'Lite Mixture',                       image:CLOUDINARY_BASE+'/image/namkeen_lite_mixture200.png', emoji:'🍪', weight:'250 gm',  price:100, mrp:103, category:'snacks', stock:20 },
    { id:'namkeen_lite_150g',       name:'Lite Mixture',                       image:CLOUDINARY_BASE+'/image/namkeen_lite_mixture200.png', emoji:'🍪', weight:'150 gm',  price:36,  mrp:38,  category:'snacks', stock:20 },

    // ══ NAMKEEN ₹10 ══
    { id:'namkeen_bhujia_10',       name:'Bhujia',                             image:CLOUDINARY_BASE+'/image/namkeen_bhujia10.png',        emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_aloo_bhujia_10',  name:'Aloo Bhujia',                        image:CLOUDINARY_BASE+'/image/namkeen_aloo_bhujia10.png',   emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_bhel_10',         name:'Fatafat Bhel',                       image:CLOUDINARY_BASE+'/image/namkeen_bhel10.png',          emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_gathiya_10',      name:'Bhavnagar Gathiya',                  image:CLOUDINARY_BASE+'/image/namkeen_gathiya10.png',       emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_kashmiri_10',     name:'Kashmiri Mixture',                   image:CLOUDINARY_BASE+'/image/namkeen_kashmiri10.png',      emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_khatta_10',       name:'Khatta Metha',                       image:CLOUDINARY_BASE+'/image/namkeen_khatta10.png',        emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_moong_10',        name:'Moong Dal',                          image:CLOUDINARY_BASE+'/image/namkeen_moong10.png',         emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_navrattan_10',    name:'Navrattan',                          image:CLOUDINARY_BASE+'/image/namkeen_navratan10.png',      emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_nimbu_10',        name:'Nimbu Masala',                       image:CLOUDINARY_BASE+'/image/namkeen_nimbu10.png',         emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_nut_10',          name:'Nut Cracker',                        image:CLOUDINARY_BASE+'/image/namkeen_nut10.png',           emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_palak_10',        name:'Palak Sev',                          image:CLOUDINARY_BASE+'/image/namkeen_palak10.png',         emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_panchrattan_10',  name:'Panchrattan',                        image:CLOUDINARY_BASE+'/image/namkeen_panchrattan10.png',   emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_punjabi_10',      name:'Punjabi Tadka',                      image:CLOUDINARY_BASE+'/image/namkeen_punjabi10.png',       emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_peanut_10',       name:'Salted Peanut',                      image:CLOUDINARY_BASE+'/image/namkeen_peanut200.png',       emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    { id:'namkeen_chana_10',        name:'Haldiram Heeng Jeera Chana',         image:CLOUDINARY_BASE+'/image/namkeen_chana10.png',         emoji:'🍪', price:10, mrp:10, category:'snacks', stock:20 },
    {id:'snack_britannia_little_heart_10',name:'Britannia Little Heart',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/little_heart_10.avif',emoji:'🍪',price:10,mrp:10,category:'snacks',stock:20},

    // ══ HOME & PERSONAL CARE ══
  { id:'personal_savlon_wipes_65', name:'Savlon Wipes', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781634292/40196472_8-savlon-germ-protection-multipurpose-thick-soft-wet-wipes-with-fliptop-lid.webp', emoji:'🏠', weight:'1pkt', price:65, mrp:66, category:'personal', stock:20 },
    { id:'home_gainda_1l',          name:'Gainda',                             image:CLOUDINARY_BASE+'/image/home_gainda_1ltr.png',        emoji:'🏠', weight:'1L',      price:65,  mrp:66,  category:'personal', stock:20 },
        { id:'home_drain_1pcs',          name:'Harpic Drain Xpert Powder',                             image:"https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781684335/40256374_5-harpic-drain-xpert-drain-cleaning-powder-removes-blockages-in-30-mins-for-washbasins-sinks-bathrooms.webp",        emoji:'🏠', weight:'1pcs',      price:65,  mrp:66,  category:'personal', stock:20 },

    { id:'home_lizol_500ml',        name:'Pink Lizol',                         image:CLOUDINARY_BASE+'/image/home_lizol.png',              emoji:'🏠', weight:'500ml',   price:115, mrp:123, category:'personal', stock:20 },
    { id:'home_harpic_500ml',       name:'Harpic',                             image:CLOUDINARY_BASE+'/image/home_harpic500.png',          emoji:'🏠', weight:'500ml',   price:105, mrp:110, category:'personal', stock:20 },
  { id:'home_harpic_cleaner_500ml', name:'Harpic Bathroom Cleaner', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781523448/413495-2_11-harpic-disinfectant-bathroom-cleaner-lemon.webp', emoji:'🏠', weight:'500ml', price:105, mrp:110, category:'personal', stock:20 },
    { id:'home_colin_500ml',        name:'Colin',                              image:CLOUDINARY_BASE+'/image/home_colin500.png',           emoji:'🏠', weight:'500ml',   price:110, mrp:115, category:'personal', stock:20 },
    { id:'home_rin_ala',            name:'Rin Ala',                            image:CLOUDINARY_BASE+'/image/home_rin_ala.png',            emoji:'🏠', weight:'500ml',   price:85,  mrp:90,  category:'personal', stock:20 },
    { id:'home_tshine',             name:'T-Shine Toilet Cleaner',             image:CLOUDINARY_BASE+'/image/home_tshine.png',             emoji:'🏠', weight:'500ml',   price:100, mrp:105, category:'personal', stock:20 },
    { id:'home_ezee',               name:'Ezee',                               image:CLOUDINARY_BASE+'/image/home_ezee.png',               emoji:'🏠', weight:'470ml',   price:125, mrp:130, category:'personal', stock:20 },
    { id:'home_vanish_400ml',       name:'Vanish Liquid',                      image:CLOUDINARY_BASE+'/image/home_vanish_400.png',         emoji:'🏠', weight:'400ml',   price:145, mrp:149, category:'personal', stock:20 },
    { id:'home_black_hit_400ml',    name:'Black Hit',                          image:CLOUDINARY_BASE+'/image/home_black_hit_400.png',      emoji:'🏠', weight:'400ml',   price:175, mrp:180, category:'personal', stock:20 },
    { id:'home_red_hit_400ml',      name:'Red Hit',                            image:CLOUDINARY_BASE+'/image/home_red_hit_400.png',        emoji:'🏠', weight:'400ml',   price:185, mrp:189, category:'personal', stock:20 },
    { id:'home_black_hit_320ml',    name:'Black Hit',                          image:CLOUDINARY_BASE+'/image/home_black_hit_320.png',      emoji:'🏠', weight:'320ml',   price:205, mrp:210, category:'personal', stock:20 },
    { id:'home_red_hit_320ml',      name:'Red Hit',                            image:CLOUDINARY_BASE+'/image/home_red_hit_320.png',        emoji:'🏠', weight:'320ml',   price:205, mrp:210, category:'personal', stock:20 },
    { id:'home_harpic_200ml',       name:'Harpic',                             image:CLOUDINARY_BASE+'/image/home_harpic200.png',          emoji:'🏠', weight:'200ml',   price:45,  mrp:46,  category:'personal', stock:20 },
    { id:'home_ujala',              name:'Ujala',                              image:CLOUDINARY_BASE+'/image/home_ujala.png',              emoji:'🏠', weight:'250ml',   price:75,  mrp:80,  category:'personal', stock:20 },
    { id:'home_revive',             name:'Revive Liquid Stiffener',            image:CLOUDINARY_BASE+'/image/home_revive.png',             emoji:'🏠', weight:'200ml',   price:75,  mrp:81,  category:'personal', stock:20 },
    { id:'home_vanish_180ml',       name:'Vanish Liquid Detergent',            image:CLOUDINARY_BASE+'/image/home_vanish_180.png',         emoji:'🏠', weight:'180ml',   price:75,  mrp:78,  category:'personal', stock:20 },
    { id:'home_ambipur_spray',      name:'Room Spray Rose & Blossom',          image:CLOUDINARY_BASE+'/image/home_ambipur_air.png',        emoji:'🏠', weight:'275ml',   price:290, mrp:299, category:'personal', stock:20 },
    { id:'home_odonil_citrus',      name:'Room Spray Citrus Fresh',            image:CLOUDINARY_BASE+'/image/home_odonil_citrus.png',      emoji:'🏠', weight:'220ml',   price:165, mrp:169, category:'personal', stock:20 },
    { id:'home_odonil_ocean',       name:'Room Spray Ocean Breeze',            image:CLOUDINARY_BASE+'/image/home_odonil_ocean.png',       emoji:'🏠', weight:'220ml',   price:165, mrp:169, category:'personal', stock:20 },
    { id:'home_odonil_lavender',    name:'Odonil Lavender 1pcs',               image:CLOUDINARY_BASE+'/image/home_odonil.png',             emoji:'🏠', weight:'192 gm',  price:205, mrp:212, category:'personal', stock:20 },
    { id:'home_vim_750ml',          name:'Vim Liquid',                         image:CLOUDINARY_BASE+'/image/home_vim_liquid_750.png',     emoji:'🏠', weight:'750ml',   price:205, mrp:210, category:'personal', stock:20 },
    { id:'home_vim_250ml',          name:'Vim Liquid',                         image:CLOUDINARY_BASE+'/image/home_vim_liquid_250.png',     emoji:'🏠', weight:'250ml',   price:55,  mrp:60,  category:'personal', stock:20 },
    { id:'home_vim_20',             name:'Vim Liquid',                         image:CLOUDINARY_BASE+'/image/home_vim_liquid_20.png',      emoji:'🏠',                   price:20,  mrp:20,  category:'personal', stock:20 },

     { id:'personal_pitambari_20', name:'Pitambari', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781634294/900459219_3-pitambari-shining-powder-for-6-metals.webp', emoji:'🏠', price:20, mrp:20, category:'personal', stock:20 },

    { id:'home_goodnight_pack',     name:'Good Night Pack',                    image:CLOUDINARY_BASE+'/image/home_goodknight.png',         emoji:'🏠', weight:'1pcs',    price:85,  mrp:90,  category:'personal', stock:20 },
    { id:'home_goodnight_refill',   name:'Good Night Refill',                  image:CLOUDINARY_BASE+'/image/home_goodnight.png',          emoji:'🏠', weight:'45ml',    price:75,  mrp:80,  category:'personal', stock:20 },
    { id:'home_allout_pack',        name:'All Out Pack',                       image:CLOUDINARY_BASE+'/image/home_all_out_pack.png',       emoji:'🏠', weight:'1pcs',    price:100, mrp:105, category:'personal', stock:20 },
    { id:'home_allout_refill',      name:'All Out Refill',                     image:CLOUDINARY_BASE+'/image/home_all_out.png',            emoji:'🏠', weight:'45ml',    price:85,  mrp:90,  category:'personal', stock:20 },
    { id:'home_mortein_coil',       name:'Mortein Coil',                       image:CLOUDINARY_BASE+'/image/home_mortein_coil.png',       emoji:'🏠', weight:'10pcs',   price:40,  mrp:42,  category:'personal', stock:20 },
    { id:'home_hit_gel',            name:'Hit Gel',                            image:CLOUDINARY_BASE+'/image/home_hit_gel.png',            emoji:'🏠', weight:'20gm',    price:210, mrp:220, category:'personal', stock:20 },
    { id:'home_ratkill',            name:'Mortein Rat Kill',                   image:CLOUDINARY_BASE+'/image/home_ratkill.png',            emoji:'🏠', weight:'100gm',   price:75,  mrp:77,  category:'personal', stock:20 },

    // ══ DAIRY ══
     {id:'custardpowder_100gm',name:'Custard Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421784/image/custard.png',emoji:'🍮',weight:'100gm',price:72,mrp:72,category:'dairy',stock:20},
    { id:'dairy_amul_full_1l',      name:'Amul Full Cream',                    image:CLOUDINARY_BASE+'/image/amul_milk72.png',             emoji:'🥛', weight:'1L',      price:72,  mrp:72,  category:'dairy', stock:20 },
    { id:'dairy_amul_full_500ml',   name:'Amul Full Cream',                    image:CLOUDINARY_BASE+'/image/amul_milk36.png',             emoji:'🥛', weight:'500ml',   price:36,  mrp:36,  category:'dairy', stock:20 },
    { id:'dairy_amul_toned_1l',     name:'Amul Toned Taaza',                   image:CLOUDINARY_BASE+'/image/amul_milkt1.png',             emoji:'🥛', weight:'1L',      price:59,  mrp:59,  category:'dairy', stock:20 },
    { id:'dairy_amul_toned_500ml',  name:'Amul Toned Taaza',                   image:CLOUDINARY_BASE+'/image/amul_milkt.png',              emoji:'🥛', weight:'500ml',   price:30,  mrp:30,  category:'dairy', stock:20 },
    { id:'dairy_amul_cow_1l',       name:'Amul Cow Milk',                      image:CLOUDINARY_BASE+'/image/amul_milkc1.png',             emoji:'🥛', weight:'1L',      price:62,  mrp:62,  category:'dairy', stock:20 },
    { id:'dairy_amul_cow_500ml',    name:'Amul Cow Milk',                      image:CLOUDINARY_BASE+'/image/amul_milkc.png',              emoji:'🥛', weight:'500ml',   price:31,  mrp:31,  category:'dairy', stock:20 },
    { id:'dairy_amul_buffalo_1l',   name:'Amul Buffalo',                       image:CLOUDINARY_BASE+'/image/amul_milkb.png',              emoji:'🥛', weight:'1L',      price:80,  mrp:80,  category:'dairy', stock:20 },
    { id:'dairy_md_cow_1l',         name:'Mother Dairy Cow Milk',              image:CLOUDINARY_BASE+'/image/mother_milkc1.png',           emoji:'🥛', weight:'1L',      price:62,  mrp:62,  category:'dairy', stock:20 },
    { id:'dairy_md_cow_500ml',      name:'Mother Dairy Cow Milk',              image:CLOUDINARY_BASE+'/image/mother_milkc.png',            emoji:'🥛', weight:'500ml',   price:31,  mrp:31,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_1kg',     name:'Amul Dahi',                          image:CLOUDINARY_BASE+'/image/dahi1kg.png',                 emoji:'🥛', weight:'1L',      price:80,  mrp:80,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_400g',    name:'Amul Dahi',                          image:CLOUDINARY_BASE+'/image/dahi35.png',                  emoji:'🥛', weight:'400gm',   price:35,  mrp:35,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_20',      name:'Amul Dahi',                          image:CLOUDINARY_BASE+'/image/dhi25.png',                  emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_25',      name:'Amul Dahi',                          image:CLOUDINARY_BASE+'/image/dahi25.png',                  emoji:'🥛',                   price:25,  mrp:25,  category:'dairy', stock:20 },
    { id:'dairy_mother_dahi_25',      name:'Mother Dairy Dahi',                          image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260658/mother_dairy_dahi_400gm.webp',                  emoji:'🥛',                   price:25,  mrp:25,  category:'dairy', stock:20 },
    { id:'dairy_amul_dahi_10',      name:'Amul Dahi',                          image:CLOUDINARY_BASE+'/image/dahi25.png',                  emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_mother_dahi_10',      name:'Mother Dairy Dahi',                          image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260658/mother_dairy_dahi_10.jpg',                  emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_amul_paneer',       name:'Amul Paneer',                        image:CLOUDINARY_BASE+'/image/amul_paneer.png',             emoji:'🥛', weight:'200gm',   price:90,  mrp:90,  category:'dairy', stock:20 },
    { id:'dairy_md_paneer',         name:'Mother Dairy Paneer',                image:CLOUDINARY_BASE+'/image/paneer.png',                  emoji:'🥛', weight:'200gm',   price:90,  mrp:90,  category:'dairy', stock:20 },

{ id:'dairy_amul_cheese_200gm_10pcs', name:'Amul Cheese', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610571/amul-chees-450x450.jpg', emoji:'🥛', weight:'200gm (10pcs)', price:140, mrp:145, category:'dairy', stock:20 },
{ id:'dairy_amul_cheese_100gm_5pcs', name:'Amul Cheese', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610571/amul-chees-450x450.jpg', emoji:'🥛', weight:'100gm (5pcs)', price:80, mrp:82, category:'dairy', stock:20 },
{ id:'dairy_amul_cheese_1pcs', name:'Amul Cheese', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781610571/amul-chees-450x450.jpg', emoji:'🥛', weight:'1pcs', price:80, mrp:82, category:'dairy', stock:20 },
{ id:'dairy_amul_cheese_cube_1pcs', name:'Amul Cheese Cube', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781684275/6458AMULCHEESECUBES1PC_1.jpg', emoji:'🥛', weight:'1pcs', price:80, mrp:82, category:'dairy', stock:20 },
 
{ id:'dairy_amul_cheese_1pkt', name:'Pizza Topping', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781680602/IMG_20260617_124419.png', emoji:'🥛', weight:'1pkt', price:300, mrp:60, category:'dairy', stock:20 },

    { id:'dairy_amul_butter_500g',  name:'Amul Butter',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260642/Amul_butter_500g.webp',          emoji:'🥛', weight:'500gm',   price:300,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_amul_butter_100g',  name:'Amul Butter',                        image:CLOUDINARY_BASE+'/image/amul_butter100.png',          emoji:'🥛', weight:'100gm',   price:60,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_amul_butter_15',    name:'Amul Butter',                        image:CLOUDINARY_BASE+'/image/amul_butter15.png',           emoji:'🥛',                   price:15,  mrp:15,  category:'dairy', stock:20 },
    { id:'dairy_amul_chhachh_10',    name:'Amul Plain Chhachh',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1781260641/amul_chhachh_10.webp',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
      { id:'dairy_amul_tadkachhachh_10',    name:'Amul Tadka Chhachh',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260641/amul_tadka_chhachh.webp',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
        { id:'dairy_mother_tadkachhachh_10',    name:'Mother Dairy Tadka Chhachh',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260642/mother_dairy_tadka_chhachh.webp',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
          { id:'dairy_mother_chhachh_10',    name:'Mother Dairy Pudina Chhachh',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260641/mother_dairy_pudina_chhachh.jpg',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
           { id:'dairy_amul_tadkachhachh_20',    name:'Amul Masti Tadka Chhachh',                        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260641/amul_chhachh_20.webp',           emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_tomato_puree',      name:'Kissan Tomato Puree',                image:CLOUDINARY_BASE+'/image/dairy_tomato_puree.png',      emoji:'🥛', weight:'200gm',   price:25,  mrp:25,  category:'dairy', stock:20 },
    { id:'dairy_amul_cream',        name:'Amul Fresh Cream',                   image:CLOUDINARY_BASE+'/image/dairy_amul_cream.png',        emoji:'🥛', weight:'250ml',   price:60,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_sauce_850g',        name:'Kissan Tomato Sauce',                image:CLOUDINARY_BASE+'/image/tomato_sauce850g.png',        emoji:'🥛', weight:'850gm',   price:90,  mrp:93,  category:'dairy', stock:20 },
    { id:'dairy_sauce_435g',        name:'Kissan Tomato Sauce',                image:CLOUDINARY_BASE+'/image/kissan_sauce_435.png',        emoji:'🥛', weight:'435gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
      { id:'dairy_sauce_10',        name:'Kissan Tomato Sauce',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260642/Kissan_Sauce_10.webp',        emoji:'🥛', weight:'gm',   price:10,  mrp:10,  category:'dairy', stock:20 },
         { id:'dairy_kissan_jam_big',        name:'Kissan Mixed Fruit Jems',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260642/kissan_jam_big.webp',        emoji:'🥛', weight:'gm',   price:100,  mrp:100,  category:'dairy', stock:20 },
         { id:'dairy_kissan_jam',        name:'Kissan Mixed Fruit Jems',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781260641/kissan_jam_25.avif',        emoji:'🥛', weight:'gm',   price:20,  mrp:20,  category:'dairy', stock:20 },
{ id:'dairy_ginger_garlic_paste_5rs', name:'Ginger Garlic Paste', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/ginger_garlic_paste_5.webp', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'dairy', stock:20 },
{ id:'dairy_pasta_masala_5rs',        name:'Pasta Masala',        image:'https://res.clinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/ginger_garlic_paste_5.webp', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'dairy', stock:20 },
{ id:'dairy_maggi_masala_5rs',        name:'Maggi Masala',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632330/IMG_20260616_211845-Photoroom.png', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'dairy', stock:20 },
{ id:'dairy_tops_tomato_sauce_1pcs',  name:'Tops Tomato Sauce',   image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515008/sauce_1.png', emoji:'🥛', weight:'1pcs', price:1, mrp:1, category:'dairy', stock:20 },

{id:'pack_odonillavender',name:'Odonil Air Freshener Pack',image:CLOUDINARY_BASE+'/image/home_odonil.png',emoji:'📦',weight:'4Pcs',price:205,mrp:212,category:'pack',stock:20},
{id:'pack_nehamehndicone',name:'Neha Mehndi Cone Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/neha_cone_pack.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},
{id:'pack_kaverimehndicone',name:'Kaveri Mehndi Cone Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515008/kaveri_cone_pack.webp',emoji:'📦',weight:'1box',price:100,mrp:100,category:'pack',stock:10},

{ id:'ginger_garlic_paste_pack', name:'Ginger Garlic Paste Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/ginger_garlic_paste_5.webp', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'pasta_masala_pack', name:'Pasta Masala Pack', image:'https://res.clinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/ginger_garlic_paste_5.webp', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'maggi_masala_pack', name:'Maggi Masala Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632330/IMG_20260616_211845-Photoroom.png', emoji:'🥛', weight:'1pcs', price:5, mrp:5, category:'pack', stock:20 },
{ id:'tops_tomato_sauce_pack', name:'Tops Tomato Sauce Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515008/sauce_1.png', emoji:'🥛', weight:'1pcs', price:1, mrp:1, category:'pack', stock:20 },

    { id:'dairy_soya_granules',     name:'Nutrela Soya Granules',              image:CLOUDINARY_BASE+'/image/soyagranules.png',            emoji:'🥛', weight:'200gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
    { id:'dairy_soya_mini',         name:'Nutrela Soya Mini Chunks',           image:CLOUDINARY_BASE+'/image/soyamini.png',                emoji:'🥛', weight:'200gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
    { id:'dairy_soya_chunks',       name:'Nutrela Soya Chunks',                image:CLOUDINARY_BASE+'/image/soyachunks.png',              emoji:'🥛', weight:'200gm',   price:50,  mrp:50,  category:'dairy', stock:20 },
      { id:'dairy_soya_chunks_10',       name:'Nutrela Soya Chunks',                image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/nutrela_soyachunks_10.webp',              emoji:'🥛', weight:'1pcs',   price:10,  mrp:10,  category:'dairy', stock:20 },

    { id:'dairy_atta_bread',        name:'Atta Bread',                         image:CLOUDINARY_BASE+'/image/bread_atta.png',              emoji:'🥛',                   price:65,  mrp:65,  category:'dairy', stock:20 },
    { id:'dairy_white_bread_65',    name:'White Bread',                        image:CLOUDINARY_BASE+'/image/bread_white65.png',           emoji:'🥛',                   price:65,  mrp:65,  category:'dairy', stock:20 },
    { id:'dairy_brown_bread',       name:'Brown Bread',                        image:CLOUDINARY_BASE+'/image/bread_brown.png',             emoji:'🥛',                   price:60,  mrp:60,  category:'dairy', stock:20 },
    { id:'dairy_sandwich_bread',    name:'Sandwich Bread',                     image:CLOUDINARY_BASE+'/image/bread_sandwich.png',          emoji:'🥛',                   price:45,  mrp:45,  category:'dairy', stock:20 },
    { id:'dairy_white_bread_33',    name:'White Bread',                        image:CLOUDINARY_BASE+'/image/bread_white33.png',           emoji:'🥛',                   price:33,  mrp:33,  category:'dairy', stock:20 },
      { id:'dairy_white_bread_25',    name:'White Bread',                        image:CLOUDINARY_BASE+'/e/bread_white33.png',           emoji:'🥛',                   price:25,  mrp:25,  category:'dairy', stock:20 },
       { id:'dairy_white_bread_20',    name:'Nashta White Bread',                        image:CLOUDINARY_BASE+'/e/bread_white33.png',           emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
        { id:'dairy_white_bread_10',    name:'Nashta White Bread',                        image:CLOUDINARY_BASE+'/e/bread_white33.png',           emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_atta_bun',          name:'Atta Burger Bun',                    image:CLOUDINARY_BASE+'/image/bread_attabun.png',           emoji:'🥛',     weight:'4pcs',              price:45,  mrp:45,  category:'dairy', stock:20 },
    { id:'dairy_burger_bun_6',      name:'Burger Bun ',                    image:CLOUDINARY_BASE+'/image/bread_burgerbun6.png',        emoji:'🥛',      weight:'4pcs',             price:55,  mrp:55,  category:'dairy', stock:20 },
    { id:'dairy_burger_bun_4',      name:'Burger Bun ',                    image:CLOUDINARY_BASE+'/image/bread_burgerbun.png',         emoji:'🥛',       weight:'6pcs',            price:55,  mrp:55,  category:'dairy', stock:20 },
    { id:'dairy_kulcha',            name:'Kulcha Bread',                       image:CLOUDINARY_BASE+'/image/bread_kulcha.png',            emoji:'🥛',      weight:'5pcs',             price:50,  mrp:50,  category:'dairy', stock:20 },
    { id:'dairy_bombay_pav',        name:'Bombay Pav',                         image:CLOUDINARY_BASE+'/image/bread_pav.png',               emoji:'🥛', weight:'6pcs',   price:40,  mrp:40,  category:'dairy', stock:20 },
    { id:'dairy_sweet_bun_20',      name:'Sweet Bun',                          image:CLOUDINARY_BASE+'/image/bread_bun20.png',             emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_frooty_bread_20',   name:'Frooty Bread',                       image:CLOUDINARY_BASE+'/image/bread_frooty20.png',          emoji:'🥛',                   price:20,  mrp:20,  category:'dairy', stock:20 },
    { id:'dairy_vanilla_cake_10',   name:'Vanilla Cake',                       image:CLOUDINARY_BASE+'/image/bread_bun10.png',             emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_strawberry_cake_10',name:'Strawberry Cake',                    image:CLOUDINARY_BASE+'/image/bread_cake10.png',            emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_choco_bun_10',      name:'Chocolate Bun',                      image:CLOUDINARY_BASE+'/image/bread_creambun.png',          emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_vanilla_bun_10',    name:'Vanilla Bun',                        image:CLOUDINARY_BASE+'/image/bread_vanillabun.png',        emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    { id:'dairy_strawberry_bun_10', name:'Strawberry Bun',                     image:CLOUDINARY_BASE+'/image/bread_strawberrybun.png',     emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
      { id:'dairy_swiss10', name:'Anmol Swiss Roll Strawberry',                     image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165523/anmol_swiss_roll_10_strawberry.jpg',     emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
      { id:'dairy_swisschoco', name:'Anmol Swiss Roll Chocolate',                     image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165523/anmol_swiss_roll_10_chocolate.jpg',     emoji:'🥛',                   price:10,  mrp:10,  category:'dairy', stock:20 },
    
   {id:'nestle-everyday-powder-10',name:'Nestle Everyday Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/nestle_everyday_10.webp',emoji:'🥛',weight:'1pcs',price:10,mrp:10,category:'dairy',stock:20},
   {id:'nestle-everyday-powder-5',name:'Nestle Everyday Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/nestle_everyday_10.webp',emoji:'🥛',weight:'1pcs',price:5,mrp:5,category:'dairy',stock:20},
    {id:'nestle-everyday-powder-2',name:'Nestle Everyday Powder',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/nestle_everyday_10.webp',emoji:'🥛',weight:'1pcs',price:2,mrp:2,category:'dairy',stock:20},

   {id:'bournvita_30',name:'Bourn Vita',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/510f6445-1298-4617-a324-a98737846922_1_b0de879f-80ed-4f7f-9036-60e4e5b1e322.png',emoji:'🍫',weight:'1pcs',price:30,mrp:30,category:'dairy',stock:20},
{id:'bournvita_5',name:'Bourn Vita',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781537278/510f6445-1298-4617-a324-a98737846922_1_b0de879f-80ed-4f7f-9036-60e4e5b1e322.png',emoji:'🍫',weight:'1pcs',price:5,mrp:5,category:'dairy',stock:20},

{id:'coffee_nescafe_100gm',name:'Nescafe Coffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421779/image/coffee.jpg',emoji:'☕',weight:'100gm',price:100,mrp:100,category:'dairy',stock:20},
{id:'coffee_nescafe_10',name:'Nescafe Coffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421779/image/coffee0.png',emoji:'☕',weight:'1 pcs',price:10,mrp:10,category:'dairy',stock:20},
{id:'coffee_nescafe_2',name:'Nescafe Coffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421784/image/custarpng',emoji:'☕',weight:'1 pcs',price:2,mrp:2,category:'dairy',stock:20},

{id:'coffee_nescafe_2pack',name:'Nescafe Coffee Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421784/image/custarpng',emoji:'☕',weight:'1 pcs',price:2,mrp:2,category:'pack',stock:20},


    // ══ TOOTHPASTE & PERSONAL ══
    { id:'personal_listerine_freshburst_200ml', name:'Listerine FreshBurst Mouthwash', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515008/freshburst_mouthwash.webp', emoji:'🦷', weight:'200gm', price:125, mrp:131, category:'personal', stock:20 },
    { id:'personal_vicks_vaporub_50ml', name:'Vicks VapoRub', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781521574/7mVvYiAYB2-vicks_vaporub_50_ml_849549_5_0.avif', emoji:'🧴', weight:'1pcs', price:185, mrp:185, category:'personal', stock:20 },

{ id:'personal_unknown_product', name:'Vicks VapoRub', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781521641/IMG_20251017_103827.webp', emoji:'🧴', weight:'1pcs', price:20, mrp:20, category:'personal', stock:20 },
 { id:'personal_anchor_colgate_cooling_fresh_150g', name:'Anchor Colgate Cooling Fresh', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515008/anchor_colgate_150g.jpg', emoji:'🦷', weight:'150gm', price:95, mrp:95, category:'personal', stock:20 }, 
 { id:'personal_pepsodent',      name:'Pepsodent',                          image:CLOUDINARY_BASE+'/image/colgate_pepsodent.png',       emoji:'🦷', weight:'200gm',   price:125, mrp:131, category:'personal', stock:20 },
{ id:'personal_dabur_red_175',  name:'Dabur Red',                          image:CLOUDINARY_BASE+'/image/colgate_dabur175.png',        emoji:'🦷', weight:'175gm',   price:70,  mrp:72,  category:'personal', stock:20 },
{ id:'personal_colgate_sens',   name:'Colgate Sensitive',                  image:CLOUDINARY_BASE+'/image/colgate_sensitive.png',       emoji:'🦷', weight:'160gm',   price:200, mrp:207, category:'personal', stock:20 },
{ id:'personal_dant_manjan',    name:'MDH Dant Manjan',                    image:CLOUDINARY_BASE+'/image/home_dantmanjan.png',         emoji:'🦷', weight:'80gm',    price:65,  mrp:70,  category:'personal', stock:20 },
{ id:'personal_colgate_100g',   name:'Colgate',                            image:CLOUDINARY_BASE+'/image/colgate_70.png',              emoji:'🦷', weight:'100gm',   price:65,  mrp:70,  category:'personal', stock:20 },
{ id:'personal_colgate_salt',   name:'Colgate Active Salt',                image:CLOUDINARY_BASE+'/image/colgate_active75.png',        emoji:'🦷', weight:'100gm',   price:70,  mrp:75,  category:'personal', stock:20 },
{ id:'personal_dabur_100g',     name:'Dabur Red',                          image:CLOUDINARY_BASE+'/image/colgate_dabur.png',           emoji:'🦷', weight:'100gm',   price:70,  mrp:72,  category:'personal', stock:20 },
{ id:'personal_dant_kanti_100', name:'Patanjali Dant Kanti',               image:CLOUDINARY_BASE+'/image/colgate_dant100.png',         emoji:'🦷', weight:'100gm',   price:50,  mrp:56,  category:'personal', stock:20 },
{ id:'personal_closeup_80g',    name:'Closeup',                            image:CLOUDINARY_BASE+'/image/home_closeup85.png',          emoji:'🦷', weight:'80gm',    price:80,  mrp:85,  category:'personal', stock:20 },
{ id:'personal_dant_kanti_20',  name:'Patanjali Dant Kanti',               image:CLOUDINARY_BASE+'/image/colgate_dant20.png',          emoji:'🦷', weight:'43gm',    price:20,  mrp:20,  category:'personal', stock:20 },
{ id:'personal_colgate_20',     name:'Colgate',                            image:CLOUDINARY_BASE+'/image/colgate_20.png',              emoji:'🦷', weight:'44gm',    price:20,  mrp:20,  category:'personal', stock:20 },
{ id:'personal_closeup_20',     name:'Closeup Super Fresh',                image:CLOUDINARY_BASE+'/image/home_closeup20.png',          emoji:'🦷', weight:'45gm',    price:20,  mrp:20,  category:'personal', stock:20 },
{ id:'personal_colgate_10',     name:'Colgate',                            image:CLOUDINARY_BASE+'/image/colgate_10.png',              emoji:'🦷', weight:'20gm',    price:10,  mrp:10,  category:'personal', stock:20 },
{ id:'personal_colgate_max_10', name:'Colgate Max Fresh',                  image:CLOUDINARY_BASE+'/image/colgate_max10.png',           emoji:'🦷', weight:'20gm',    price:10,  mrp:10,  category:'personal', stock:20 },

{id:'personal_enshine_brush_ultra_soft_55',name:'Enshine Brush Ultra Soft',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/enshine_brush.webp',emoji:'🪥',weight:'1pcs',price:55,mrp:55,category:'personal',stock:20},
{id:'personal_classic_gold_brush_hard_30',name:'Classic Gold Brush Hard',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332637/classic_gold_hard.jpg',emoji:'🪥',weight:'1pcs',price:30,mrp:30,category:'personal',stock:20},
{id:'personal_ajay_brush_ultra_soft_36',name:'Ajay Brush Ultra Soft',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/ajay_brush.webp',emoji:'🪥',weight:'1pcs',price:36,mrp:36,category:'personal',stock:20},

{ id:'personal_godrej_black',   name:'Godrej Black Colour 1.0',            image:CLOUDINARY_BASE+'/image/haircolor_godrejb.png',       emoji:'🎨',                   price:30,  mrp:30,  category:'personal', stock:20 },
{ id:'personal_godrej_brown',   name:'Godrej Brown Colour 4.0',            image:CLOUDINARY_BASE+'/image/haircolor_godrejbr.png',      emoji:'🎨',                   price:30,  mrp:30,  category:'personal', stock:20 },
{ id:'personal_garnier_1',      name:'Garnier Deep Black 1.0',             image:CLOUDINARY_BASE+'/image/haircolor_garnier1.0.png',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_garnier_2',      name:'Garnier Natural Black 2.0',          image:CLOUDINARY_BASE+'/image/haircolor_garnier2.0.png',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_garnier_4',      name:'Garnier Brown Colour 4.0',           image:CLOUDINARY_BASE+'/image/haircolor_garnier4.0.png',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_garnier_4',      name:'Garnier Red Colour ',           image:CLOUDINARY_BASE+'/imaghaircolor_garnier4.0.png',    emoji:'🎨',                   price:45,  mrp:45,  category:'personal', stock:20 },
{ id:'personal_neha_black',     name:'Neha Black Colour',                   image:CLOUDINARY_BASE+'/image/haircolor_nehab.png',         emoji:'🎨',                   price:10,  mrp:10,  category:'personal', stock:20 },
{ id:'personal_neha_brown',     name:'Neha Brown Colour',                   image:CLOUDINARY_BASE+'/image/haircolor_nehabr.png',        emoji:'🎨',                   price:10,  mrp:10,  category:'personal', stock:20 },
{id:'personal_kaveri_mehendi_cone_1pcs',name:'Kaveri Mehendi Cone',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/kaveri_cone_10.webp',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'personal_neha_mehendi_cone_1pcs',name:'Neha Mehendi Cone',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/neha_cone10.webp',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'personal_pantene_shampoo_180ml',name:'Pantene Shampoo',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1780421913/image/shampoo_pantene.png',emoji:'🧴',weight:'180ml',price:200,mrp:200,category:'personal',stock:20},


{ id:'personal_dermi_cool',     name:'Dermi Cool Powder Pack',              image:CLOUDINARY_BASE+'/image/home_dermi_cool.png',         emoji:'🧴', weight:'150gm',   price:150, mrp:155, category:'personal', stock:20 },
{ id:'personal_gillette_foam',  name:'Gillette Foam',                       image:CLOUDINARY_BASE+'/image/home_foam.png',               emoji:'🪒', weight:'196gm',   price:245, mrp:249, category:'personal', stock:20 },
{ id:'personal_gillette_lemon', name:'Gillette Lemon Foam',                 image:CLOUDINARY_BASE+'/image/home_foam_lemon.png',         emoji:'🪒', weight:'196gm',   price:245, mrp:249, category:'personal', stock:20 },
{ id:'personal_gillette_cream', name:'Gillette Regular Shaving Cream',      image:CLOUDINARY_BASE+'/image/home_gillette_foam93.png',    emoji:'🪒', weight:'93gm',    price:70,  mrp:75,  category:'personal', stock:20 },
{ id:'personal_vijohn',         name:'Vi John Shaving Cream',               image:CLOUDINARY_BASE+'/image/home_vijohn_foam.png',        emoji:'🪒', weight:'196gm',   price:50,  mrp:55,  category:'personal', stock:20 },

{ id:'personal_gillette_guard_28',name:'Gillette Guard 7 Up To Save',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/gillette_guard_28.webp',emoji:'🪒',weight:'1pcs',price:28,mrp:28,category:'personal',stock:20},
{ id:'personal_gillette_use_throw_25',name:'Gillette Use And Throw (Stasat)',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/gillette_use_and_throw25.png',emoji:'🪒',weight:'1pcs',price:25,mrp:25,category:'personal',stock:20},
{ id:'personal_gillette_wilkinson_15',name:'Gillette Wilkinson',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/gillette-blades-wilkinson.webp',emoji:'🪒',weight:'1pcs',price:15,mrp:15,category:'personal',stock:20},
{ id:'personal_gillette_guard_blade_15rs', name:'Gillette Guard Blade', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/gillete_guarde_blade15.webp', emoji:'🪒', weight:'1pcs', price:15, mrp:15, category:'personal', stock:20 },

{ id:'personal_ponds_body_lotion', name:'Ponds Body Lotion', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/pond_body_lotion.webp', emoji:'🧴', weight:'200ml', price:145, mrp:150, category:'personal', stock:20 },
{ id:'personal_rose_water',     name:'VLCC Rose Water',                    image:CLOUDINARY_BASE+'/image/home_rose_water.png',         emoji:'🧴', weight:'100ml',   price:145, mrp:150, category:'personal', stock:20 },
{ id:'personal_fair_handsome_cream_175g', name:'Fair & Handsome Cream', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515009/fair_handsome_cream_175.webp', emoji:'🧴', weight:'175g', price:145, mrp:150, category:'personal', stock:20 },
{ id:'personal_clean_clear_facewash_40g', name:'Clean & Clear Face Wash', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/facewash_clean_and_clear_40g.webp', emoji:'🧴', weight:'40g', price:40, mrp:40, category:'personal', stock:20 },

{ id:'personal_lux_50ml',       name:'Lux Body Wash',                      image:CLOUDINARY_BASE+'/image/home_lux50.png',              emoji:'🧴', weight:'50ml',    price:25,  mrp:25,  category:'personal', stock:20 },
{ id:'personal_zandu_balm',     name:'Zandu Balm Green',                   image:CLOUDINARY_BASE+'/image/home_zandubalm.png',          emoji:'💊', weight:'25ml',    price:115, mrp:120, category:'personal', stock:20 },
{ id:'personal_dettol_650ml',   name:'Dettol Hand Wash',                   image:CLOUDINARY_BASE+'/image/home_dettol_handwash650.png', emoji:'🧴', weight:'650ml',   price:95,  mrp:99,  category:'personal', stock:20 },
{ id:'personal_dettol_wash',    name:'Dettol First Aid',                   image:CLOUDINARY_BASE+'/image/home_dettol_aid.png',         emoji:'💊',                   price:120, mrp:120, category:'personal', stock:20 },
{ id:'personal_surf_matic',     name:'Surf Excel Matic',                   image:CLOUDINARY_BASE+'/image/home_surf_excel_matic.png',   emoji:'🧺', weight:'1L',      price:145, mrp:149, category:'personal', stock:20 },

    // ══ POOJA ITEMS ══

{ id:'pooja_batasa_100gm', name:'Batasa', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611450/41wLXoQdcUL._AC_UF894_1000_QL80_.jpg', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_nariyal_gola_100gm', name:'Nariyal Gola', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611566/khopra-goladry-coconut-premium-quality-quick-pantry.jpg', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_dhagamishri_100gm', name:'Dhaga Mishri ', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611562/29946570-ac1f-4af2-ba3d-26035bc97fad.__CR0_0_650_350_PT0_SX650_V1___.png', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_mishri_100gm', name:'Mishri', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611571/9.jpg', emoji:'🪔', weight:'100gm', price:1, mrp:1, category:'pooja', stock:20 },
{ id:'pooja_mishri_packet', name:'Mishri Pack', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781611571/9.jpg', emoji:'🪔', weight:'100gm', price:10, mrp:25, category:'pooja', stock:20 },

    { id:'pooja_kumkum_5',          name:'Saraswati Kumkum',                   image:CLOUDINARY_BASE+'/image/pooja_kumkum5.png',           emoji:'🪔', weight:'1pcs',    price:5,   mrp:5,   category:'pooja', stock:20 },
    { id:'pooja_sindoor_5',         name:'Hanuman Sindoor',                    image:CLOUDINARY_BASE+'/image/pooja_sindoor5.png',          emoji:'🪔', weight:'1pcs',    price:5,   mrp:5,   category:'pooja', stock:20 },
    { id:'pooja_hawan',             name:'Hawan Samagri',                      image:CLOUDINARY_BASE+'/image/pooja_hawan.png',             emoji:'🪔', weight:'200gm',   price:40,  mrp:40,  category:'pooja', stock:20 },
   { id:'pooja_prem_ghee_batti_30pcs', name:'Prem Ghee Batti', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515008/prem_ghee_batti.webp', emoji:'🪔', weight:'30pcs', price:100, mrp:100, category:'pooja', stock:20 },

    { id:'pooja_kapoor_100g',       name:'Saraswati Kapoor',                   image:CLOUDINARY_BASE+'/image/kapoor100.png',               emoji:'🪔', weight:'100gm',   price:290, mrp:300, category:'pooja', stock:20 },
    { id:'pooja_kapoor_50g',        name:'Saraswati Kapoor',                   image:CLOUDINARY_BASE+'/image/kapoor_50.png',               emoji:'🪔', weight:'50gm',    price:140, mrp:150, category:'pooja', stock:20 },
    { id:'pooja_kapoor_45g',        name:'Saraswati Kapoor',                   image:CLOUDINARY_BASE+'/image/kapoor.png',                  emoji:'🪔', weight:'45gm',    price:120, mrp:135, category:'pooja', stock:20 },
    { id:'pooja_dhoop_hari_15',     name:'Hari Darshan Dhoop',                 image:CLOUDINARY_BASE+'/image/dhoop_hari15.png',            emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_delux',       name:'Hari Darshan Deluxe Dhoop',          image:CLOUDINARY_BASE+'/image/dhoop_delux.png',             emoji:'🪔', weight:'1pcs',    price:20,  mrp:25,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_fancy',       name:'Hari Darshan Fancy',                 image:CLOUDINARY_BASE+'/image/dhoop_fancy.png',             emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_sandal',      name:'Hari Darshan Sandal',                image:CLOUDINARY_BASE+'/image/dhoop_sandal.png',            emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_rose',        name:'Mangaldeep Rose Dhoop',              image:CLOUDINARY_BASE+'/image/dhoop_rose.png',              emoji:'🪔', weight:'1pcs',    price:10,  mrp:20,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_mogra',       name:'Mangaldeep Mogra Dhoop',             image:CLOUDINARY_BASE+'/image/dhoop_mogra.png',             emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_zed_15',      name:'Zed Black Dhoop',                    image:CLOUDINARY_BASE+'/image/dhoop_zed15.png',             emoji:'🪔', weight:'1pcs',    price:10,  mrp:15,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_zed_gugal',   name:'Zed Black Gugal Dhoop',              image:CLOUDINARY_BASE+'/image/dhoop_zedblack_gugal.png',    emoji:'🪔', weight:'1pkt',    price:30,  mrp:30,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_zed_gulab',   name:'Zed Black Gulab Dhoop',              image:CLOUDINARY_BASE+'/image/dhoop_zedblack.png',          emoji:'🪔', weight:'1pkt',    price:30,  mrp:30,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_chandan',     name:'Zed Black Chandan Stick',            image:CLOUDINARY_BASE+'/image/dhoop_chandan_stick.png',     emoji:'🪔', weight:'125gm',   price:70,  mrp:80,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_mogra_stick', name:'Zed Black Mogra Stick',              image:CLOUDINARY_BASE+'/image/dhoop_mogra_stick.png',       emoji:'🪔', weight:'125gm',   price:70,  mrp:80,  category:'pooja', stock:20 },
    { id:'pooja_dhoop_patanjali',   name:'Patanjali Rose Dry Stick',           image:CLOUDINARY_BASE+'/image/dhoop_patanjali.png',         emoji:'🪔', weight:'1pkt',    price:20,  mrp:20,  category:'pooja', stock:20 },
    { id:'pooja_naivedya',          name:'Cycle Naivedya',                     image:CLOUDINARY_BASE+'/image/dhoop_naivedya.png',          emoji:'🪔', weight:'1pkt',    price:70,  mrp:72,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_cycle',   name:'Cycle Agarbatti',                    image:CLOUDINARY_BASE+'/image/agarbatti55.png',             emoji:'🪔', weight:'1pkt',    price:50,  mrp:55,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_zed_10',  name:'Zed Black Agarbatti',                image:CLOUDINARY_BASE+'/image/agarbatti10.png',             emoji:'🪔', weight:'1pkt',    price:10,  mrp:10,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_bharat',  name:'Bharat Vasi Agarbatti',              image:CLOUDINARY_BASE+'/image/agarbattiprimal10.png',       emoji:'🪔', weight:'1pkt',    price:10,  mrp:13,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_tulasi',  name:'Tulasi Agarbatti',                   image:CLOUDINARY_BASE+'/image/aggarbatti17.png',            emoji:'🪔', weight:'1pkt',    price:15,  mrp:17,  category:'pooja', stock:20 },
    { id:'pooja_agarbatti_raj',     name:'Raj Pure Chandanam Agarbatti',       image:CLOUDINARY_BASE+'/image/aggarbatti_chandanam.png',    emoji:'🪔', weight:'1pkt',    price:10,  mrp:15,  category:'pooja', stock:20 },

   { id:'pooja_homelite_matchbox_5pcs',  name:'Homelite Match Box', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/homelite1.webp',  emoji:'🪔', weight:'5pcs',  price:10, mrp:10, category:'pooja', stock:20 },
{ id:'pooja_homelite_matchbox_10pcs', name:'Homelite Match Box', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515008/homelite10.webp', emoji:'🪔', weight:'1pcs',  price:10, mrp:10, category:'pooja', stock:20 },
{ id:'pooja_homelite_matchbox_1pcs',  name:'Homelite Match Box', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/homelite1.webp',  emoji:'🪔', weight:'1pcs',  price:2,  mrp:2,  category:'pooja', stock:20 },
{ id:'pooja_ship_matchbox_10pcs',     name:'Ship Match Box',     image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/ship_10.jpg',     emoji:'🪔', weight:'10pcs', price:10, mrp:10, category:'pooja', stock:20 },
{ id:'pooja_ship_matchbox_1pcs',      name:'Ship Match Box',     image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/ship1.webp',      emoji:'🪔', weight:'1pcs',  price:1,  mrp:1,  category:'pooja', stock:20 },

    // ══ CHIPS ══
    { id:'chips_haldiram_50',       name:'Haldiram Yellow Chips',              image:CLOUDINARY_BASE+'/image/chips_haldiram50.png',        emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_snaclite_50',       name:'Haldiram Snac Lite Katori',          image:CLOUDINARY_BASE+'/image/chips_snaclite50.png',        emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_pudina_50',         name:'Haldiram Pudina Treat',              image:CLOUDINARY_BASE+'/image/chips_haldirampudina.png',    emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_bicano_50',         name:'Bicano Crunchy Munchy',              image:CLOUDINARY_BASE+'/image/chips_bicano50.png',          emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_mad_angles_50',     name:'Bingo Mad Angles',                   image:CLOUDINARY_BASE+'/image/chips_madangles.png',         emoji:'🍪', price:50,  mrp:50,  category:'snacks', stock:20 },
    { id:'chips_crax_classic_20',   name:'Crax Natkhat Classic',               image:CLOUDINARY_BASE+'/image/chips_crax_natkhat.png',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_masala_20',    name:'Crax Natkhat Masala',                image:CLOUDINARY_BASE+'/image/chips_crax_natkhatb.png',     emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_cream_20',     name:'Crax Fritts Cream & Onion',          image:CLOUDINARY_BASE+'/image/chips_crax_frittscream.png',  emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_pasta_20',     name:'Crax Pasta Crunch',                  image:CLOUDINARY_BASE+'/image/chips_crax_pasta20.png',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_curls_20',     name:'Crax Curls',                         image:CLOUDINARY_BASE+'/image/chips_crax_curls.png',        emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_choco_20',     name:'Crax Choco Rings',                   image:CLOUDINARY_BASE+'/image/chips_craxchoco20.png',       emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_fryumms_20',   name:'Crax Fryumms',                       image:CLOUDINARY_BASE+'/image/chips_crax_fryumms20.png',    emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_t_20',   name:'Crax Rings Tangy Tomato',            image:CLOUDINARY_BASE+'/image/chips_craxr10.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_m_20',   name:'Crax Rings Masala Mania',            image:CLOUDINARY_BASE+'/image/chips_craxb10.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_noodles_20',   name:'Crax Crunchy Noodles',               image:CLOUDINARY_BASE+'/image/chips_crax_noodles.png',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_peri_20',      name:'Crax Fritts Peri Peri',              image:CLOUDINARY_BASE+'/image/chips_craxfrittsperi20.png',  emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_pipe_20',      name:'Crax Crunchy Pipe',                  image:CLOUDINARY_BASE+'/image/chips_crax_pipe.png',         emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_masala_20', name:'Kurkure Masala Munch',               image:CLOUDINARY_BASE+'/image/chips_kurkure.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chilli_20', name:'Kurkure Chilli Chatka',              image:CLOUDINARY_BASE+'/image/chips_kurkurechilli.png',     emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_solid_20',  name:'Kurkure Solid Masti',                image:CLOUDINARY_BASE+'/image/chips_kurkuresolid.png',      emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chat_20',   name:'Kurkure Chatpata Masala',            image:CLOUDINARY_BASE+'/image/chips_kurkurechatpata.png',   emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_kurkure_puff_20',   name:'Kurkure Puffcorn',                   image:CLOUDINARY_BASE+'/image/chips_kurkurepuffcorn.png',   emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_yellow_20',    name:'Lays Yellow Classic Salted',         image:CLOUDINARY_BASE+'/image/chips_laysy10.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_blue_20',      name:'Lays Blue India Magic Masala',       image:CLOUDINARY_BASE+'/image/chips_laysb20.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_green_20',     name:'Lays Green Classic Salted',          image:CLOUDINARY_BASE+'/image/chips_laysg20.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_orange_20',    name:'Lays Orange West Indies',            image:CLOUDINARY_BASE+'/image/chips_laysw20.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_red_20',       name:'Lays Red Spanish Tomato Tango',      image:CLOUDINARY_BASE+'/image/chips_laysr20.png',           emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_dg_20',        name:'Lays Dark Green Chile Limon',        image:CLOUDINARY_BASE+'/image/chips_laysdg10.png',          emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_lays_crispz_20',    name:'Lays Crispz',                        image:CLOUDINARY_BASE+'/image/chips_layscrispz.png',        emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_uncle_20',          name:'Uncle Chips',                        image:CLOUDINARY_BASE+'/image/chips_unclechips.png',        emoji:'🍪', price:20,  mrp:20,  category:'snacks', stock:20 },
    { id:'chips_crax_classic_10',   name:'Crax Natkhat Classic',               image:CLOUDINARY_BASE+'/image/chips_crax_natkhat.png',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_masala_10',    name:'Crax Natkhat Masala',                image:CLOUDINARY_BASE+'/image/chips_crax_natkhatb.png',     emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_cream_10',     name:'Crax Fritts Cream & Onion',          image:CLOUDINARY_BASE+'/image/chips_crax_frittscream.png',  emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_pasta_10',     name:'Crax Pasta Crunch',                  image:CLOUDINARY_BASE+'/image/chips_crax_pasta20.png',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_curls_10',     name:'Crax Curls',                         image:CLOUDINARY_BASE+'/image/chips_crax_curls.png',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_t_10',   name:'Crax Rings Tangy Tomato',            image:CLOUDINARY_BASE+'/image/chips_craxr10.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_rings_m_10',   name:'Crax Rings Masala Mania',            image:CLOUDINARY_BASE+'/image/chips_craxb10.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_noodles_10',   name:'Crax Crunchy Noodles',               image:CLOUDINARY_BASE+'/image/chips_crax_noodles.png',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_crax_pipe_10',      name:'Crax Crunchy Pipe',                  image:CLOUDINARY_BASE+'/image/chips_crax_pipe.png',         emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_masala_10', name:'Kurkure Masala Munch',               image:CLOUDINARY_BASE+'/image/chips_kurkure.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chilli_10', name:'Kurkure Chilli Chatka',              image:CLOUDINARY_BASE+'/image/chips_kurkurechilli.png',     emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_solid_10',  name:'Kurkure Solid Masti',                image:CLOUDINARY_BASE+'/image/chips_kurkuresolid.png',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_chat_10',   name:'Kurkure Chatpata Masala',            image:CLOUDINARY_BASE+'/image/chips_kurkurechatpata.png',   emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_puff_10',   name:'Kurkure Puffcorn',                   image:CLOUDINARY_BASE+'/image/chips_kurkurepuffcorn.png',   emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_kurkure_sch_10',    name:'Kurkure Schezwan Chutney',           image:CLOUDINARY_BASE+'/image/chips_kurkure_schezwan.png',  emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_yellow_10',    name:'Lays Yellow Classic Salted',         image:CLOUDINARY_BASE+'/image/chips_laysy10.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_blue_10',      name:'Lays Blue India Magic Masala',       image:CLOUDINARY_BASE+'/image/chips_laysb10.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_green_10',     name:'Lays Green Classic Salted',          image:CLOUDINARY_BASE+'/image/chips_laysg10.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_orange_10',    name:'Lays Orange West Indies',            image:CLOUDINARY_BASE+'/image/chips_laysw10.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_red_10',       name:'Lays Red Spanish Tomato Tango',      image:CLOUDINARY_BASE+'/image/chips_laysr10.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_dg_10',        name:'Lays Dark Green Chile Limon',        image:CLOUDINARY_BASE+'/image/chips_laysdg10.png',          emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_lays_wafer_10',     name:'Lays Wafer Chips',                   image:CLOUDINARY_BASE+'/image/chips_layswafer10.png',       emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_haldiram_10',       name:'Haldiram Classic Salted',            image:CLOUDINARY_BASE+'/image/chips_haldiram50.png',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_doritos_10',        name:'Doritos Nacho Cheese',               image:CLOUDINARY_BASE+'/image/chips_doritos10.png',         emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_doritos_sweet_10',  name:'Doritos Sweet Chilli',               image:CLOUDINARY_BASE+'/image/chips_doritossweet10.png',    emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_popcorn_10',        name:'Popcorn',                            image:CLOUDINARY_BASE+'/image/chips_popcorn.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_uncle_10',          name:'Uncle Chips',                        image:CLOUDINARY_BASE+'/image/chips_unclechips.png',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_khatta_10',    name:'Oyes Khatta Meetha',                 image:CLOUDINARY_BASE+'/image/chips_oyeskhattameetha.png',  emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_chinese_10',   name:'Oyes Chinese Tadka',                 image:CLOUDINARY_BASE+'/image/oyes_chinesetadka.png',       emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_cocktail_10',  name:'Oyes Cocktail',                      image:CLOUDINARY_BASE+'/image/oyes_cpcktail.png',           emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_cream_10',     name:'Oyes Cream And Onion',               image:CLOUDINARY_BASE+'/image/oyes_cream_and_onion.png',    emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_manch_10',     name:'Oyes Manchurian',                    image:CLOUDINARY_BASE+'/image/oyes_manchurain.png',         emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_tamatar_10',   name:'Oyes Talli Tamatar',                 image:CLOUDINARY_BASE+'/image/oyes_talli_tamatar.png',      emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },
    { id:'chips_oyes_pudina_10',    name:'Oyes Tangy Pudina',                  image:CLOUDINARY_BASE+'/image/oyes_tangypudina.png',        emoji:'🍪', price:10,  mrp:10,  category:'snacks', stock:20 },

    // ══ CHOCOLATES ══
   { id:'choc_kinder_joy_50', name:'Kinder Joy', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/kinderjoy50.webp', emoji:'🧁', weight:'1pcs', price:50, mrp:50, category:'chocolates', stock:20 },
     { id:'choc_kinder_joy_10', name:'Kinder Joy', image:'https://recloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/kinderjoy50.webp', emoji:'🧁', weight:'1pcs', price:10, mrp:10, category:'chocolates', stock:20 },
    { id:'choc_dairy_fn_107',        name:'Dairy Milk Fruit & Nut',             image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119357/dairy_milk_107.webp',       emoji:'🧁', price:107,  mrp:107,  category:'chocolates', stock:20 },
    { id:'choc_dairy_100',          name:'Dairy Milk Chocolate',               image:CLOUDINARY_BASE+'/image/chocolate_dairy100.png',      emoji:'🧁', price:100, mrp:100, category:'chocolates', stock:20 },
    { id:'choc_dairy_53',           name:'Dairy Milk Chocolate',               image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119358/dairy_milk_53.webp',       emoji:'🧁', price:53,  mrp:53,  category:'chocolates', stock:20 },
    { id:'choc_dairy_fn_50',        name:'Dairy Milk Fruit & Nut',             image:CLOUDINARY_BASE+'/image/chocolate_dairy50.png',       emoji:'🧁', price:50,  mrp:50,  category:'chocolates', stock:20 },
    { id:'choc_dairy_45',           name:'Dairy Milk Chocolate',               image:CLOUDINARY_BASE+'/image/chocolate_dairy45.png',       emoji:'🧁', price:45,  mrp:45,  category:'chocolates', stock:20 },
    { id:'choc_dairy_20',           name:'Dairy Milk Chocolate',               image:CLOUDINARY_BASE+'/image/chocolate_dairy20.png',       emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_dairy_10',           name:'Dairy Milk Chocolate',               image:CLOUDINARY_BASE+'/image/chocolate_dairy10.png',       emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_dairy_5',            name:'Dairy Milk Chocolate',               image:'https://res.cloudinary.com/db2tt1cy6/image/upload/v1781118183/dairy_milk_5.webp', emoji:'🧁', price:5, mrp:5, category:'chocolates', stock:20 },
     { id:'choc_kitkat_35',          name:'Kit Kat Chocolate',                  image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781167835/kitkat_50.jpg',         emoji:'🧁', price:50,  mrp:50,  category:'chocolates', stock:20 },
    { id:'choc_kitkat_35',          name:'Kit Kat Chocolate',                  image:CLOUDINARY_BASE+'/image/chocolate_kit35.png',         emoji:'🧁', price:35,  mrp:35,  category:'chocolates', stock:20 },
    { id:'choc_kitkat_20',          name:'Kit Kat Chocolate',                  image:CLOUDINARY_BASE+'/image/chocolate_kit20.png',         emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_kitkat_10',          name:'Kit Kat Chocolate',                  image:CLOUDINARY_BASE+'/image/chocolate_kit10.png',         emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_milkybar_20',        name:'Milky Bar Chocolate',                image:CLOUDINARY_BASE+'/image/chocolate_milkybar20.png',    emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_milkybar_10',        name:'Milky Bar Chocolate',                image:CLOUDINARY_BASE+'/image/chocolate_milkybar10.png',    emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_5star_20',           name:'5 Star Chocolate',                   image:CLOUDINARY_BASE+'/image/chocolate_star20.png',        emoji:'🧁', price:20,  mrp:20,  category:'chocolates', stock:20 },
    { id:'choc_5star_10',           name:'5 Star Chocolate',                   image:CLOUDINARY_BASE+'/image/chcocolate_star10.png',       emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_5star_5',            name:'5 Star Chocolate',                   image:CLOUDINARY_BASE+'/image/chcocolate_star5.png',        emoji:'🧁', price:5,   mrp:5,   category:'chocolates', stock:20 },
    { id:'choc_perk_10',            name:'Perk Chocolate',                     image:CLOUDINARY_BASE+'/image/chocolate_perk10.png',        emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_munch_10',           name:'Munch Chocolate',                    image:CLOUDINARY_BASE+'/image/chocolate_munch5.png',        emoji:'🧁', price:10,  mrp:10,  category:'chocolates', stock:20 },
    { id:'choc_munch_5',            name:'Munch Chocolate',                    image:CLOUDINARY_BASE+'/image/chocolate_munch5.png',        emoji:'🧁', price:5,   mrp:5,   category:'chocolates', stock:20 },
      { id:'choc_merlin_5',            name:'Merlin Chocolate',                    image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332660/merlin_1.webp',        emoji:'🧁', price:5,   mrp:5,   category:'chocolates', stock:20 },
{id:'choc_lotte_chocopie_10',name:'Lotte Chocopie',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/choco_pie_10.webp',emoji:'🍫',weight:'1Pcs',price:10,mrp:10,category:'chocolates',stock:20},
{id:'choc_chupa_chups_5',name:'Chupa Chups',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/chupa_chups.webp',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_harvest_brownie_walnut_20',name:'Harvest Brownie Real Walnut',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/brownie_real_walnut.jpg',emoji:'🧁',price:20,mrp:20,category:'chocolates',stock:20},
{id:'choc_harvest_brownie_chocolate_20',name:'Harvest Brownie Chocolate',image:CLOUDINARY_BASE+'/image/chocolate_mun5.png',emoji:'🧁',price:20,mrp:20,category:'chocolates',stock:20},

{id:'choc_alpenliebe_eclairs_lollipop_5',name:'Alpenliebe Eclairs Lollipop',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332634/Alpenliebe_eclairs_lolipop.jpg',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_orange_5',name:'Jolly Rancher Orange Lolipop',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/Jolly_Rancher_orange.webp',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_mango_5',name:'Jolly Rancher Mango Lolipop',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332641/Jolly_Rancher_mango.webp',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_strawberry_5',name:'Jolly Rancher Strawberry Lolipop',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/Jolly_Rancher_strawberry.webp',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_jolly_rancher_watermelon_5',name:'Jolly Rancher Watermelon Lolipop',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/Jolly_Rancher_Watermelon.webp',emoji:'🍭',price:5,mrp:5,category:'chocolates',stock:20},

{id:'choc_vicks_toffee_1',name:'Vicks Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332634/vicks.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_naturaly_imli_toffee_1',name:'Naturaly Imli Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332640/imli_candy.avif',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_imli_1',name:'Hajmola Imli',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332636/hajmola_imli.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_anardana_1',name:'Hajmola Anardana',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332635/hajmola_anardana.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_regular_1',name:'Hajmola Regular',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/hajmola_1.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_hajmola_toffee_1',name:'Hajmola Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332660/hajmola_candy_1.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},

{id:'choc_orbit_lemon_5',name:'Orbit Lemon Flavour',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332639/orbit_lemon_flavour_5.webp',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_orbit_sweetmint_5',name:'Orbit Sweetmint Flavour',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/orbit_sweetmint_flavour_5.webp',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_orbit_mixed_fruit_5',name:'Orbit Mixed Fruit Flavour',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332662/orbit_mixed_fruit_flavour_5.webp',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_orbit_spearmint_5',name:'Orbit Spearmint Flavour',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781341288/40123373_9-orbit-sugar-free-chewing-gum-spearmint.webp',emoji:'🍬',price:5,mrp:5,category:'chocolates',stock:20},
{id:'choc_polo_10',name:'Polo Toffee',image:'https://res.clodinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/Alpenliebe_eclairs_toffee.webp',emoji:'🍬',price:10,mrp:10,category:'chocolates',stock:20},

{id:'choc_pulse_toffee_1',name:'Pulse Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332674/pulse-toffee-1.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_melody_toffee_1',name:'Melody Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/melody_toffee_1.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_londonderry_toffee_1',name:'Londonderry Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/londonderry_toffee1.avif',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_cadbury_eclairs_2',name:'Cadbury Eclairs Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/cadbuary_eclairs_toffee_1.jpg',emoji:'🍬',price:2,mrp:2,category:'chocolates',stock:20},
{id:'choc_alpenliebe_creamfills_1',name:'Alpenliebe Creamfills Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332663/Alpenliebe_toffee1.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_alpenliebe_gold_1',name:'Alpenliebe Gold Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332662/Alpenliebe_Gold_toffee1.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_kopiko_toffee_1',name:'Kopiko Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/kopikpo_toffee_1.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_mango_bite_1',name:'Mango Bite Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332660/Mango_bite_toffee_1.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_just_jelly_1',name:'Just Jelly Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332644/just_jelly_toffee.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_kismi_toffee_1',name:'Kismi Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332643/kismi_toffe_1.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_centerfruit_1',name:'Centerfruit Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332664/centerfruit_1.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_centerfresh_1',name:'Centerfresh Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332661/centerfresh_blue.jpg',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},
{id:'choc_alpenliebe_eclairs_1',name:'Alpenliebe Eclairs Toffee',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332638/Alpenliebe_eclairs_toffee.webp',emoji:'🍬',price:1,mrp:1,category:'chocolates',stock:20},



    // ══ STATIONARY ══
    { id:'stat_apsara_pencil',      name:'Apsara Pencil',                      image:CLOUDINARY_BASE+'/image/stationary_pencil_apsara.png',  emoji:'🖊️', price:50, mrp:50, category:'stationary', stock:20 },
    { id:'stat_nataraj_pencil',     name:'Nataraj Pencil',                     image:CLOUDINARY_BASE+'/image/stationary_pencil_nataraj.png', emoji:'🖊️', price:50, mrp:50, category:'stationary', stock:20 },
    { id:'stat_bf_blue_pen',        name:'Butterflow Blue Pen',                image:CLOUDINARY_BASE+'/image/stationary_butterflowb.png',    emoji:'🖊️', price:10, mrp:10, category:'stationary', stock:20 },
    { id:'stat_bf_black_pen',       name:'Butterflow Black Pen',               image:CLOUDINARY_BASE+'/image/stationary_butterflowbl.png',   emoji:'🖊️', price:10, mrp:10, category:'stationary', stock:20 },
    { id:'stat_a4_color',           name:'A4 Colourful Sheet',                 image:CLOUDINARY_BASE+'/image/stationary_a4color.png',        emoji:'🖊️', price:40, mrp:40, category:'stationary', stock:20 },
{ id:'stat_fevikwik_5rs', name:'Fevikwik', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515010/fevikwik_5.jpg', emoji:'🖊️', weight:'1pcs', price:5, mrp:5, category:'stationary', stock:20 },
{ id:'stat_fevikwik_onedrop', name:'Fevikwik One Drop', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/fevikwik_one_drop.webp', emoji:'🖊️', weight:'1pcs', price:10, mrp:10, category:'stationary', stock:20 },
{ id:'stat_fevicol_10rs',        name:'Fevicol',             image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781515011/fevicol.webp',          emoji:'🖊️', weight:'1pcs', price:10, mrp:10, category:'stationary', stock:20 },



     // ══ Maggie ══
     
 {id:'maggie-6-pack',name:'2 Minutes Maggi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119351/maggie_6_pack_83.webp',emoji:'🍜',weight:'6 Pack',price:83,mrp:83,category:'snacks',stock:20},

{id:'atta-maggi-4-pack',name:'Atta Maggi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119360/atta_maggie_4pck_103.webp',emoji:'🍜',weight:'4 Pack',price:103,mrp:103,category:'snacks',stock:20},

{id:'maggie-4-pack',name:'2 Minutes Maggi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119351/maggie_4_pack_56.webp',emoji:'🍜',weight:'4 Pack',price:56,mrp:56,category:'snacks',stock:20},

{id:'schezwan-maggi',name:'Schezwan Maggi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119381/schezwan_maggie_20.avif',emoji:'🍜',weight:'1 Pc',price:20,mrp:20,category:'snacks',stock:20},

{id:'atta-maggi-single',name:'Atta Maggi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119359/atta_maggie_30.avif',emoji:'🍜',weight:'1 Pc',price:30,mrp:30,category:'snacks',stock:20},

{id:'masala-atta-maggi',name:'Masala Atta Maggi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119349/masala_maggie_15.webp',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'maggi-single',name:'2 Minutes Maggi',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119350/maggie_15.webp',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'yippee-noodles',name:'Yippee Noodles',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119380/yipee_maggie_15.webp',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'mario-tez-tadka',name:'Mario Tez Tadka Noodles',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119350/mario_tez_tadka_maggie.webp',emoji:'🍜',weight:'1 Pc',price:15,mrp:15,category:'snacks',stock:20},

{id:'mario-noodles',name:'Mario Noodles',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119350/mario_maggie_10.jpg',emoji:'🍜',weight:'1 Pc',price:10,mrp:10,category:'snacks',stock:20},

{id:'snack_bambino_macroni_10',name:'Bambino Macroni',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781633876/shopping_50703422-2491-4ee3-a99d-e49be8e7605d_1920x-Photoroom.png',emoji:'🍜',weight:'1 Pc',price:10,mrp:10,category:'snacks',stock:20},

{id:'snack_chowmein_10',name:'Chawmein',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781543671/1000339885-Photoroom.png',emoji:'🍜',weight:'1pcs',price:10,mrp:10,category:'snacks',stock:20},      

       // ══ Farmley ══

 {id:'farmley-date-bites-small',name:'Farmley Date Bites',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119353/farmley_date_bites.webp',emoji:'🍫',weight:'1 Pc',price:40,mrp:40,category:'chocolates',stock:20},
{id:'farmley-apple-pie-small',name:'Farmley Apple Pie',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119356/farmley_apple_pie.webp',emoji:'🍫',weight:'1 Pc',price:40,mrp:40,category:'chocolates',stock:20},
{id:'farmley-dark-choco-orange-small',name:'Farmley Dark Choco Orange',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119355/farmley_choco_orange.webp',emoji:'🍫',weight:'1 Pc',price:40,mrp:40,category:'chocolates',stock:20},
{id:'farmley-apple-pie-big',name:'Farmley Apple Pie',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119357/Farmley_apple_pie_big.webp',emoji:'🍫',weight:'1 Pc',price:200,mrp:200,category:'chocolates',stock:20},
{id:'farmley-date-bites-big',name:'Farmley Date Bites',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119354/farmley_date_bites_big.avif',emoji:'🍫',weight:'1 Pc',price:200,mrp:200,category:'chocolates',stock:20},
{id:'farmley-dark-choco-orange-big',name:'Farmley Dark Choco Orange',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781119355/farmley_choco_orange_big.jpg',emoji:'🍫',weight:'1 Pc',price:200,mrp:200,category:'chocolates',stock:20},
{id:'farmley-panchmeva',name:'Farmley Panchmeva',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/farmley_panchmeva.jpg',emoji:'🍫',weight:'1 Pc',price:30,mrp:30,category:'chocolates',stock:20},
         
// ══ Shampoo ══
{ id:'personal_dettol_powder_handwash_10', name:'Dettol Handwash Powder', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781634162/DettolPowderToLiquidHandwashRefill1pc.webp', emoji:'🧴', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },
{ id:'personal_godrej_powder_handwash_10', name:'Godrej Handwash Powder', image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781634124/40149067-2_2-godrej-protekt-mr-magic-powder-to-liquid-germ-protection-handwash-refill-makes-200-ml-of-liquid.webp', emoji:'🧴', weight:'1pcs', price:10, mrp:10, category:'personal', stock:20 },

 {id:'denver-powder',name:'Denver Powder',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781332642/denver_powder10.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
 {id:'himalaya-lip-balm',name:'Himalaya Lip Balm',        image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/himalaya_lip_balm_40.webp',emoji:'💄',weight:'1pcs',price:40,mrp:40,category:'personal',stock:20},
{id:'vaseline',name:'Vaseline',     image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/vaseline_10.webp',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'joy-skin-fruit-cream',name:'Joy Skin Fruit Cream',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/joy_skin_fruits_10.webp',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'joy-honey-almond-cream',name:'Joy Honey & Almond Cream',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/joy_honey_and_almond_cream_10.webp',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'boroplus',name:'Boroplus',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165522/boroplus_10.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'boroline',name:'Boroline',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165522/boroline_10.jpg',emoji:'🧴',weight:'1pcs',price:10,mrp:10,category:'personal',stock:20},
{id:'comfort',name:'Comfort',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/comfort_4.jpg',emoji:'🧴',weight:'1pcs',price:5,mrp:5,category:'personal',stock:20},
{id:'mediker',name:'Mediker',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_mediker.webp',emoji:'🧴',weight:'1pcs',price:7,mrp:7,category:'personal',stock:20},
{id:'dove-shampoo-conditioner',name:'Dove Shampoo & Conditioner',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_dove_5.jpg',emoji:'🧴',weight:'1pcs',price:5,mrp:5,category:'personal',stock:20},

{id:'head_shoulder2in1',name:'Head & Shoulder 2 in 1 ',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/shampoo_head_and_shouler_4.jpg',emoji:'🧴',weight:'1pcs',price:4,mrp:4,category:'personal',stock:20},
{id:'dove-conditioner',name:'Dove Conditioner',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/shampoo_dove_4.jpg',emoji:'🧴',weight:'1pcs',price:4,mrp:4,category:'personal',stock:20},
{id:'dove-shampoo',name:'Dove Shampoo',image:CLOUDINARY_BASE+'/image/home_gainda_1ltr.',emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'tresemme',name:'Tresemme',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/shampoo_tresemme_2.webp',emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'head_shoulder2',name:'Head & Shoulder ',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_head_and_shouler_2.jpg',emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'head_shouldercool',name:'Head & Shoulder Cool ',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_head_and_shouler_cool_2.webp', emoji:'🧴',weight:'1pcs',price:2,mrp:2,category:'personal',stock:20},
{id:'sunsilk-black',name:'Sunsilk Black',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/shampoo_sunsilkblack.webp',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},
{id:'sunsilk-pink',name:'Sunsilk Pink',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/shampoo_sunsilkpink.jpg',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},
{id:'vatika',name:'Vatika',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/shampoo_vatika.webp',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},
{id:'clinic-plus',name:'Clinic Plus',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/CLINIC-PLUS-SHAMPOO-1.jpg',emoji:'🧴',weight:'1pcs',price:1,mrp:1,category:'personal',stock:20},

{id:'navratan-oil-1pack',name:'Navratan Oil Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165517/oil_navratan_1.jpg',emoji:'🧴',price:1,mrp:1,category:'pack',stock:15},
    {id:'himgange-oil-1pack',name:'Himgange Oil Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165517/oil_himgange_1.webp',emoji:'🧴',price:1,mrp:1,category:'pack',stock:15},


{id:'personal_ezee_liquid_pack',name:'Ezee Liquid Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781632319/IMG_20260616_204416-Photoroom.png',emoji:'🧺',weight:'1pcs',price:5,mrp:5,category:'pack',stock:20},

{id:'mediker-pack',name:'Mediker Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_mediker.webp',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'dove-shampoo-conditioner-pack',name:'Dove Shampoo & Conditioner Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_dove_5.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'head-shoulder-2-in-1-pack',name:'Head & Shoulder 2 in 1 Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/shampoo_head_and_shouler_4.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'dove-conditioner-pack',name:'Dove Conditioner Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/shampoo_dove_4.jpg',emoji:'🧴',weight:'16pcs',price:4,mrp:4,category:'pack',stock:20},
{id:'dove-shampoo-pack',name:'Dove Shampoo Pack',image:CLOUDINARY_BASE+'/image/home_gainda_1ltr.',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'tresemme-pack',name:'Tresemme Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/shampoo_tresemme_2.webp',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'head-shoulder-pack',name:'Head & Shoulder Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_head_and_shouler_2.jpg',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'head-shoulder-cool-pack',name:'Head & Shoulder Cool Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165520/shampoo_head_and_shouler_cool_2.webp',emoji:'🧴',weight:'16pcs',price:2,mrp:2,category:'pack',stock:20},
{id:'sunsilk-black-pack',name:'Sunsilk Black Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/shampoo_sunsilkblack.webp',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'sunsilk-pink-pack',name:'Sunsilk Pink Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165519/shampoo_sunsilkpink.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'vatika-pack',name:'Vatika Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165518/shampoo_vatika.webp',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},
{id:'clinic-plus-pack',name:'Clinic Plus Pack',image:'https://res.cloudinary.com/db2tt1cy6/image/upload/q_auto/f_auto/v1781165521/CLINIC-PLUS-SHAMPOO-1.jpg',emoji:'🧴',weight:'16pcs',price:15,mrp:16,category:'pack',stock:20},


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
