/** Single source of truth. Do not duplicate hours, phones or awards in components. */
export const MEDIA = {
  camel:
    "https://static.wixstatic.com/media/4f4a92_741e15091b1140e7a9ac505bdd04de73~mv2_d_2216_1984_s_2.png",
  homeHero:
    "https://static.wixstatic.com/media/4f4a92_126409754f12473887cd0e9c416ca369~mv2_d_2048_1365_s_2.jpg",
  homeLogo:
    "https://static.wixstatic.com/media/494bcd_2e573423bbe8483aaf8efc6633663d31~mv2.png",
  og: "https://static.wixstatic.com/media/4f4a92_91b40942a533436b865d5d78f15d1679~mv2.jpg",
  cinematic:
    "https://static.wixstatic.com/media/4f4a92_7e557ad76dab42c2af839515a08a8303~mv2_d_2880_1602_s_2.jpg",
  panorama:
    "https://static.wixstatic.com/media/4f4a92_f536d76d73684bf3b1de0d8b06404186~mv2_d_3000_1318_s_2.jpg",
  street:
    "https://static.wixstatic.com/media/4f4a92_115559a37edc43b2b8e7b95a440bca65~mv2_d_2048_1365_s_2.jpg",
  interiorA:
    "https://static.wixstatic.com/media/4f4a92_ca562de407344232805722a73af2220e~mv2_d_5646_3764_s_4_2.jpg",
  interiorB:
    "https://static.wixstatic.com/media/4f4a92_e1935af91d1346779f0ab0371e88038f~mv2_d_5414_3609_s_4_2.jpg",
  interiorC:
    "https://static.wixstatic.com/media/4f4a92_66f4099ed34c4d9c9c55b522315c2ef0~mv2_d_5300_3533_s_4_2.jpg",
  detail:
    "https://static.wixstatic.com/media/4f4a92_7e326dbfd0044930bf5152cf59936af0~mv2_d_5109_3406_s_4_2.jpg",
  david: `${import.meta.env.BASE_URL}images/david-personal.jpg`,
  eventsBar:
    "https://static.wixstatic.com/media/4f4a92_c2e646a734544a6f943540c4f7ef1dec~mv2_d_3000_2000_s_2.jpg",
  eventsWide:
    "https://static.wixstatic.com/media/4f4a92_695b085a8e554d369f1df85dee6ee32b~mv2_d_5591_3727_s_4_2.jpg",
  eventsTease:
    "https://static.wixstatic.com/media/4f4a92_e1935af91d1346779f0ab0371e88038f~mv2_d_5414_3609_s_4_2.jpg",
  eventsGallery:
    "https://static.wixstatic.com/media/4f4a92_ef000f5c0b5d4527a4dec8f87cc9c3f0~mv2_d_5592_3728_s_4_2.jpg",
  eventsLogo:
    "https://static.wixstatic.com/media/494bcd_db4b5949ea5948d8b5759b31fc80ccf0~mv2.png",
  eventsVideo:
    "https://video.wixstatic.com/video/11062b_1edc73181da84de2a85a88c62346f05f/1080p/mp4/file.mp4",
  eventsVideoPoster:
    "https://static.wixstatic.com/media/11062b_1edc73181da84de2a85a88c62346f05ff000.jpg",
  portrait:
    "https://static.wixstatic.com/media/4f4a92_adef1012b1af4e0eb2d2d7c19587fa29~mv2.jpg",
};

// Media "source of truth" by usage.
// Keep existing MEDIA keys for backwards compatibility; new UI should prefer these objects.
export const homeSectionsMedia = {
  story: {
    src: MEDIA.eventsWide,
    orientation: "landscape",
    focal: "center",
    altHe: "חלל תעשייתי של זאלמה באזור המוסכים ברחוב הנגרים",
    altEn: "Zalame interior space in the garage yards",
  },
  david: {
    src: MEDIA.david,
    orientation: "landscape",
    focal: "center",
    altHe: "דוד קלינצ'ב, הרוקח הראשי של זאלמה ACB",
    altEn: "David Kalinchev, head bartender at Zalame ACB",
  },
  pathsHere: {
    src: MEDIA.interiorA,
    orientation: "landscape",
    focal: "center",
    altHe: "בר זאלמה מבפנים, מוכן לשולחן",
    altEn: "Zalame bar inside, ready for a table",
  },
  pathsThere: {
    src: MEDIA.eventsBar,
    orientation: "landscape",
    focal: "center",
    altHe: "עמדת קוקטיילים של זאלמה באירוע מחוץ לבר",
    altEn: "Zalame cocktail station at an outside event",
  },
};

export const eventsGalleryMedia = [
  // Sourced from https://www.zalame.co.il/aperitivo (Wix static assets).
  // kind: station = bar at the event, drink = the glass, crowd = people in the room.
  {
    id: "evt-crowd",
    kind: "crowd",
    src: MEDIA.eventsWide,
    focal: "center",
    altHe: "קהל בערב חברה עם עמדת קוקטיילים של זאלמה",
    altEn: "Guests at a company night with a Zalame cocktail station",
  },
  {
    id: "evt-01",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_17e60b395ab84a03a1d3cefe18db715d~mv2_d_3960_2640_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_17e60b395ab84a03a1d3cefe18db715d~mv2_d_3960_2640_s_4_2.jpg",
    focal: "center",
    altHe: "ברמן מוזג קוקטייל בעמדת אירוע בחוץ",
    altEn: "Bartender pouring at an outdoor event station",
  },
  {
    id: "evt-02",
    kind: "drink",
    src: "https://static.wixstatic.com/media/4f4a92_248beab6add347778b25b7971b882dbc~mv2_d_2048_1365_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_248beab6add347778b25b7971b882dbc~mv2_d_2048_1365_s_2.jpg",
    focal: "center",
    altHe: "שלושה קוקטיילים על הבר, ברמן משלים את המנה",
    altEn: "Three cocktails on the bar as a bartender finishes a drink",
  },
  {
    id: "evt-03",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_2c988aed485942bd85700ad7e4b54c78~mv2_d_5760_3840_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_2c988aed485942bd85700ad7e4b54c78~mv2_d_5760_3840_s_4_2.jpg",
    focal: "center",
    altHe: "ברמן מוזג משייקר באירוע",
    altEn: "Bartender pouring from a shaker at an event",
  },
  {
    id: "evt-04",
    kind: "drink",
    src: "https://static.wixstatic.com/media/4f4a92_3f8dc4364e0d4fb19f887d99e6afc40b~mv2_d_3500_2336_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_3f8dc4364e0d4fb19f887d99e6afc40b~mv2_d_3500_2336_s_2.jpg",
    focal: "center",
    altHe: "מזיגה לכוסות קוקטייל על הבר",
    altEn: "Pouring cocktails into glasses on the bar",
  },
  {
    id: "evt-05",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_4160472f76244709856572d43fba3960~mv2_d_3500_2336_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_4160472f76244709856572d43fba3960~mv2_d_3500_2336_s_2.jpg",
    focal: "center",
    altHe: "עמדת קוקטיילים באירוע של זאלמה",
    altEn: "Zalame cocktail station at an event",
  },
  {
    id: "evt-06",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_46d26cca8f8c4eb5811d7653210aa896~mv2_d_3500_2336_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_46d26cca8f8c4eb5811d7653210aa896~mv2_d_3500_2336_s_2.jpg",
    focal: "center",
    altHe: "עמדת קוקטיילים באירוע של זאלמה",
    altEn: "Zalame cocktail station at an event",
  },
  {
    id: "evt-07",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_5df2ffa60d4e4be0a7db026d6f58cede~mv2_d_3500_2336_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_5df2ffa60d4e4be0a7db026d6f58cede~mv2_d_3500_2336_s_2.jpg",
    focal: "center",
    altHe: "עמדת קוקטיילים באירוע של זאלמה",
    altEn: "Zalame cocktail station at an event",
  },
  {
    id: "evt-08",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_6364a327d16d4282867aa43087281165~mv2_d_3500_2336_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_6364a327d16d4282867aa43087281165~mv2_d_3500_2336_s_2.jpg",
    focal: "center",
    altHe: "עמדת קוקטיילים באירוע של זאלמה",
    altEn: "Zalame cocktail station at an event",
  },
  {
    id: "evt-09",
    kind: "drink",
    src: "https://static.wixstatic.com/media/4f4a92_66f4099ed34c4d9c9c55b522315c2ef0~mv2_d_5300_3533_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_66f4099ed34c4d9c9c55b522315c2ef0~mv2_d_5300_3533_s_4_2.jpg",
    focal: "center",
    altHe: "כוס קוקטייל מוגשת על הבר",
    altEn: "A finished cocktail on the bar",
  },
  {
    id: "evt-10",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_75fa69a5337b4eb29d7ea2bf4097f137~mv2_d_5234_3489_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_75fa69a5337b4eb29d7ea2bf4097f137~mv2_d_5234_3489_s_4_2.jpg",
    focal: "center",
    altHe: "ברמן מסנן קוקטייל לכוס באירוע",
    altEn: "Bartender straining a cocktail at an event",
  },
  {
    id: "evt-11",
    kind: "drink",
    src: "https://static.wixstatic.com/media/4f4a92_7e326dbfd0044930bf5152cf59936af0~mv2_d_5109_3406_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_7e326dbfd0044930bf5152cf59936af0~mv2_d_5109_3406_s_4_2.jpg",
    focal: "center",
    altHe: "קוקטייל מקרוב מאירוע של זאלמה",
    altEn: "Close-up of a cocktail from a Zalame event",
  },
  {
    id: "evt-12",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_a818d0ceab6c4f67b1ea9c2f69850bf5~mv2_d_3960_2640_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_a818d0ceab6c4f67b1ea9c2f69850bf5~mv2_d_3960_2640_s_4_2.jpg",
    focal: "center",
    altHe: "שלט Aperitivo Cocktail Bar בעמדת אירוע",
    altEn: "Aperitivo Cocktail Bar sign at an event station",
  },
  {
    id: "evt-13",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_ad0ae03f7d3a425989ad804cf8daa4b0~mv2_d_3500_2336_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_ad0ae03f7d3a425989ad804cf8daa4b0~mv2_d_3500_2336_s_2.jpg",
    focal: "center",
    altHe: "עמדת קוקטיילים באירוע של זאלמה",
    altEn: "Zalame cocktail station at an event",
  },
  {
    id: "evt-14",
    kind: "station",
    src: "https://static.wixstatic.com/media/4f4a92_df6eb6345e0349f3b5c19d3a186765b4~mv2_d_3500_2336_s_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_df6eb6345e0349f3b5c19d3a186765b4~mv2_d_3500_2336_s_2.jpg",
    focal: "center",
    altHe: "עמדת קוקטיילים באירוע של זאלמה",
    altEn: "Zalame cocktail station at an event",
  },
  {
    id: "evt-15",
    kind: "drink",
    src: "https://static.wixstatic.com/media/4f4a92_ef000f5c0b5d4527a4dec8f87cc9c3f0~mv2_d_5592_3728_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_ef000f5c0b5d4527a4dec8f87cc9c3f0~mv2_d_5592_3728_s_4_2.jpg",
    focal: "center",
    altHe: "קוקטייל מוגש ליד בקבוק על הבר",
    altEn: "A served cocktail beside a bottle on the bar",
  },
  {
    id: "evt-16",
    kind: "crowd",
    src: "https://static.wixstatic.com/media/4f4a92_ca562de407344232805722a73af2220e~mv2_d_5646_3764_s_4_2.jpg/v1/fit/w_1920,h_1284,q_90,enc_avif,quality_auto/4f4a92_ca562de407344232805722a73af2220e~mv2_d_5646_3764_s_4_2.jpg",
    focal: "center",
    altHe: "חלל הבר מוכן לערב",
    altEn: "The bar room set for the night",
  },
];

export const eventsGalleryMediaNormalized = eventsGalleryMedia.map((img) => ({
  ...img,
  orientation: "landscape",
}));

export const venue = {
  nameHe: "זאלמה ACB",
  nameEn: "Zalame ACB",
  legalNameHe: "זלמה דדי בע\"מ",
  founded: 2016,
  addressHe: "הנגרים 4, באר שבע",
  addressEn: "HaNagarim 4, Be'er Sheva",
  timezone: "Asia/Jerusalem",
  hoursSource: "owner + ontopo (weekends)",
  hoursUpdated: "2026-09-03",
  hours: [
    { day: 0, open: "19:00", close: "01:00" },
    { day: 1, open: "19:00", close: "01:00" },
    { day: 2, open: "19:00", close: "01:00" },
    { day: 3, open: "19:00", close: "01:00" },
    { day: 4, open: "19:00", close: "01:00" },
    { day: 5, open: "21:30", close: "02:00" },
    { day: 6, open: "21:00", close: "01:00" },
  ],
  phones: {
    table: { e164: "+972526935855", display: "052-693-5855", source: "zalame.co.il + Ontopo" },
    events: { e164: "+972526410005", display: "052-641-0005", source: "zalame.co.il/aperitivo" },
  },
  emailEvents: "cao@zalame.co.il",
  links: {
    reserve: "https://ontopo.co.il/zalameabc?source=homepage",
    reserveAlt: "https://ontopo.com/he/il/page/zalameabc?source=homepage",
    whatsappTable: "https://wa.me/message/KA34IC4REL5TO1",
    whatsappEvents: "https://wa.me/972526410005",
    whatsappEventsBitly: "http://bit.ly/contactzalame",
    waze: "https://www.waze.com/ul?q=%D7%94%D7%A0%D7%92%D7%A8%D7%99%D7%9D%204%20%D7%91%D7%90%D7%A8%20%D7%A9%D7%91%D7%A2%20Zalame",
    maps: "https://maps.google.com/?q=%D7%94%D7%A0%D7%92%D7%A8%D7%99%D7%9D+4+%D7%91%D7%90%D7%A8+%D7%A9%D7%91%D7%A2+Zalame+ACB",
    facebook: "https://www.facebook.com/zalameacb/",
    instagram: "https://www.instagram.com/zalame.acb/",
    instagramEvents: "https://www.instagram.com/aperitivo_cocktail_bar/",
    facebookEvents:
      "https://www.facebook.com/Aperitivo-%D7%A7%D7%95%D7%A7%D7%98%D7%99%D7%99%D7%9C-%D7%91%D7%A8-%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D-%D7%9E%D7%99%D7%95%D7%97%D7%93%D7%99%D7%9D-766394773551084/",
    loyaltyProgram: "https://www.zalame.co.il/loyalty-program",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g297741-d14903255-Reviews-Zalame_Acbar_Cocktail_Bar-Beersheva_Southern_District.html",
    site: "https://www.zalame.co.il/",
  },
  awards: [
    {
      he: "זוכה World Class ישראל 2017",
      en: "World Class Israel 2017 winner",
      personHe: "דוד קלינצ'ב",
      personEn: "David Kalinchev",
      source: "zalame.co.il + br7news 30.06.2017",
    },
  ],
  drinks: [
    {
      nameHe: "ערום ומעושן",
      nameEn: "Naked & Smoked",
      noteHe: "מהתפריט העדכני באונטופו.",
      noteEn: "From the current Ontopo menu.",
      source: "ontopo",
    },
    {
      nameHe: "הדרינק של מיכאל",
      nameEn: "Michael's drink",
      noteHe: "מהתפריט העדכני באונטופו.",
      noteEn: "From the current Ontopo menu.",
      source: "ontopo",
    },
    {
      nameHe: "קרטיב של ילדות",
      nameEn: "Childhood ice pop",
      noteHe: "מהתפריט העדכני באונטופו.",
      noteEn: "From the current Ontopo menu.",
      source: "ontopo",
    },
    {
      nameHe: "רחמים לא ידע",
      nameEn: "He knew no mercy",
      noteHe: "ג'ין ואמארו לוקאנו. הדרי, חמצמץ, סיומת אננס ארוכה ועשבונית.",
      noteEn: "Gin and Amaro Lucano. Dry, tart, long herbal pineapple finish.",
      source: "Ontopo Guide, Aug 2026",
    },
  ],
  plates: [
    {
      nameHe: "ארטישוק צלוי קלות",
      nameEn: "Lightly roasted artichoke",
      source: "Ontopo Guide, Aug 2026",
    },
    {
      nameHe: "הגוואקמולי של סימונה",
      nameEn: "Simona's guacamole",
      source: "Ontopo Guide, Aug 2026",
    },
  ],
  accessibility: {
    status: "unconfirmed-official",
    noteHe: "כדאי לאשר נגישות מול המקום לפני ההגעה.",
    noteEn: "Confirm access with the bar before you arrive.",
    source: "zips.co.il",
  },
};
