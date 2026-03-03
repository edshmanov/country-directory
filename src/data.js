// ======================================================
// src/data.js — ВСЕ ДАННЫЕ ЗДЕСЬ
// Чтобы добавить магазин — добавьте объект в STORES
// Чтобы изменить — найдите по name и измените
// ======================================================

export const CATS = [
  {
    id: "produce", en: "Farm Produce", uk: "Продукти", ru: "Продукты", icon: "🥚", color: "#4a7c59",
    subs: [{ en: "Eggs", uk: "Яйця", ru: "Яйца" }, { en: "Vegetables", uk: "Овочі", ru: "Овощи" }, { en: "Fruits", uk: "Фрукти", ru: "Фрукты" }, { en: "Dairy", uk: "Молочка", ru: "Молочка" }, { en: "Honey", uk: "Мед", ru: "Мёд" }, { en: "Meats", uk: "М'ясо", ru: "Мясо" }, { en: "Baked Goods", uk: "Випічка", ru: "Выпечка" }]
  },
  {
    id: "garden", en: "Garden & Farm", uk: "Сад і город", ru: "Сад и огород", icon: "🌱", color: "#2d6a4f",
    subs: [{ en: "Seeds", uk: "Насіння", ru: "Семена" }, { en: "Seedlings", uk: "Розсада", ru: "Рассада" }, { en: "Tools", uk: "Інструменти", ru: "Инструменты" }, { en: "Fertilizer", uk: "Добрива", ru: "Удобрения" }, { en: "Greenhouses", uk: "Теплиці", ru: "Теплицы" }]
  },
  {
    id: "construction", en: "Construction", uk: "Будівництво", ru: "Строительство", icon: "🏗️", color: "#7f5539",
    subs: [{ en: "Lumber", uk: "Пиломатеріали", ru: "Пиломатериалы" }, { en: "Barns", uk: "Амбари", ru: "Амбары" }, { en: "Fencing", uk: "Паркани", ru: "Заборы" }, { en: "Roofing", uk: "Покрівля", ru: "Кровля" }, { en: "Concrete", uk: "Бетон", ru: "Бетон" }]
  },
  {
    id: "services", en: "Services", uk: "Послуги", ru: "Услуги", icon: "🔧", color: "#5a6e4e",
    subs: [{ en: "Home Building", uk: "Будівництво будинків", ru: "Строительство домов" }, { en: "Barns / Sheds", uk: "Амбари / Сараї", ru: "Амбары / Сараи" }, { en: "Babysitting", uk: "Няня", ru: "Няня" }, { en: "Landscaping", uk: "Ландшафт", ru: "Ландшафт" }, { en: "Repairs", uk: "Ремонт", ru: "Ремонт" }, { en: "Cleaning", uk: "Прибирання", ru: "Уборка" }, { en: "Hauling", uk: "Перевезення", ru: "Перевозки" }]
  },
  {
    id: "goods", en: "General Store", uk: "Товари", ru: "Товары", icon: "🏪", color: "#6c584c",
    subs: [{ en: "Hardware", uk: "Господарчі", ru: "Хозтовары" }, { en: "Furniture", uk: "Меблі", ru: "Мебель" }, { en: "Fabrics", uk: "Тканини", ru: "Ткани" }, { en: "Kitchenware", uk: "Посуд", ru: "Посуда" }, { en: "Candles & Soap", uk: "Свічки та мило", ru: "Свечи и мыло" }]
  },
];

// ======================================================
// МАГАЗИНЫ — добавляйте новые сюда
// ======================================================

export const STORES = [
  {
    id: "s1",
    name: "Yoder's Farm Market",
    cat: "produce",
    subs: ["Eggs", "Vegetables", "Baked Goods"],
    addr: "1234 County Rd 200 N, Shipshewana, IN",
    phone: "",
    en: "Yoder family farm. Fresh eggs, seasonal vegetables, homemade bread and pies.",
    uk: "Ферма родини Йодерів. Свіжі яйця, сезонні овочі, домашній хліб.",
    ru: "Семейная ферма Йодеров. Свежие яйца, овощи, домашний хлеб и пироги.",
    hen: "Mon-Sat 7AM-5PM",
    huk: "Пн-Сб 7:00-17:00",
    hru: "Пн-Сб 7:00-17:00",
    tags: ["amish"],
    photos: [],
  },
  {
    id: "s2",
    name: "Miller's Building Supply",
    cat: "construction",
    subs: ["Lumber", "Barns"],
    addr: "5678 SR 5, Topeka, IN",
    phone: "(260) 555-0123",
    en: "Lumber and building materials. Crew builds barns, sheds, garages.",
    uk: "Пиломатеріали. Бригада будує амбари, сараї, гаражі.",
    ru: "Пиломатериалы. Бригада строит амбары, сараи, гаражи.",
    hen: "Mon-Fri 7AM-4PM",
    huk: "Пн-Пт 7:00-16:00",
    hru: "Пн-Пт 7:00-16:00",
    tags: ["construction", "lumber"],
    photos: [],
  },
  {
    id: "s3",
    name: "Lehman's Country Store",
    cat: "goods",
    subs: ["Hardware", "Kitchenware"],
    addr: "9012 Old US 20, LaGrange, IN",
    phone: "(260) 555-0456",
    en: "Large country store by former Amish. Hardware, cast iron cookware.",
    uk: "Великий магазин. Колишні аміші. Господарчі, чавунний посуд.",
    ru: "Большой магазин. Бывшие амиши. Хозтовары, чугунная посуда.",
    hen: "Mon-Sat 8AM-6PM",
    huk: "Пн-Сб 8:00-18:00",
    hru: "Пн-Сб 8:00-18:00",
    tags: ["former amish"],
    photos: [],
  },
  {
    id: "s4",
    name: "Schwartz Greenhouse",
    cat: "garden",
    subs: ["Seedlings", "Seeds"],
    addr: "3456 CR 600 W, Middlebury, IN",
    phone: "",
    en: "Greenhouse. Tomatoes, peppers, flowers, herbs. Good prices.",
    uk: "Теплиця. Помідори, перці, квіти, трави. Гарні ціни.",
    ru: "Теплица. Помидоры, перцы, цветы, травы. Хорошие цены.",
    hen: "Mar-Jun: Mon-Sat 8AM-5PM",
    huk: "Бер-Чер: Пн-Сб 8-17",
    hru: "Мар-Июн: Пн-Сб 8-17",
    tags: ["amish", "greenhouse"],
    photos: [],
  },
  {
    id: "s5",
    name: "Bontrager Eggs",
    cat: "produce",
    subs: ["Eggs", "Vegetables"],
    addr: "7890 CR 35, Goshen, IN",
    phone: "",
    en: "Farm eggs. Honor system roadside stand.",
    uk: "Фермерські яйця. Самообслуговування біля дороги.",
    ru: "Яйца, овощи. Самообслуживание у дороги.",
    hen: "Daily",
    huk: "Щодня",
    hru: "Каждый день",
    tags: ["amish", "roadside"],
    photos: [],
  },
  {
    id: "s6",
    name: "Hochstetler Barn Builders",
    cat: "services",
    subs: ["Barns / Sheds"],
    addr: "2345 CR 40, Nappanee, IN",
    phone: "(574) 555-0789",
    en: "Amish crew builds barns, sheds. 20 years experience.",
    uk: "Бригада амішів будує амбари, сараї. 20 років досвіду.",
    ru: "Бригада амишей строит амбары, сараи. 20 лет опыта.",
    hen: "Mon-Fri 6AM-5PM",
    huk: "Пн-Пт 6:00-17:00",
    hru: "Пн-Пт 6:00-17:00",
    tags: ["amish", "barn"],
    photos: [],
  },
  {
    id: "s7",
    name: "Mary's Childcare",
    cat: "services",
    subs: ["Babysitting"],
    addr: "6789 SR 13, Millersburg, IN",
    phone: "(574) 555-0321",
    en: "Home childcare. Ages 1-10.",
    uk: "Няня вдома. Діти 1-10 років.",
    ru: "Няня на дому. Дети 1-10 лет.",
    hen: "Mon-Fri 7AM-5:30PM",
    huk: "Пн-Пт 7:00-17:30",
    hru: "Пн-Пт 7:00-17:30",
    tags: ["childcare"],
    photos: [],
  },
  {
    id: "s8",
    name: "Troyer Home Builders",
    cat: "services",
    subs: ["Home Building", "Repairs"],
    addr: "1122 US 20, Shipshewana, IN",
    phone: "(260) 555-0654",
    en: "Full home construction. Remodeling, porches.",
    uk: "Будівництво будинків під ключ. Ремонт, веранди.",
    ru: "Дома под ключ. Ремонт, пристройки.",
    hen: "Mon-Fri 6:30AM-4:30PM",
    huk: "Пн-Пт 6:30-16:30",
    hru: "Пн-Пт 6:30-16:30",
    tags: ["amish", "home building"],
    photos: [],
  },
  {
    id: "s9",
    name: "Willow Creek Store",
    cat: "goods",
    subs: ["Hardware", "Kitchenware", "Fabrics"],
    addr: "5160 W 400 S, Berne, IN 46711",
    phone: "+1 260-334-5080",
    en: "Amish general store in Berne. Wide selection of dry goods, hardware, fabric, and household items. A true country store experience.",
    uk: "Амішський загальний магазин у Берні. Великий вибір бакалеї, господарських товарів, тканин та предметів побуту.",
    ru: "Амишский магазин в Берне. Большой выбор бакалеи, хозтоваров, тканей и предметов быта.",
    hen: "Mon-Wed 8AM-5:30PM | Thu 8AM-8PM | Fri 8AM-5:30PM | Sat 8AM-3PM | Sun Closed",
    huk: "Пн-Ср 8:00-17:30 | Чт 8:00-20:00 | Пт 8:00-17:30 | Сб 8:00-15:00 | Нд зачинено",
    hru: "Пн-Ср 8:00-17:30 | Чт 8:00-20:00 | Пт 8:00-17:30 | Сб 8:00-15:00 | Вс закрыто",
    tags: ["amish", "general store", "berne"],
    photos: [
      { url: "https://gz0.googleusercontent.com/gps-cs-s/AHVAwerAIwkOQRhiVX43krfi2qjzKh-UagdHAyMN6YTxuJI4wcgansF_c7mqp-tHs6pZcN5jdBLjLQAqpEqgDuaZQSe5htG_GPGbjlrmdn6_-5sR33nz4j8GcXaWWBdAeQZjRhPJlVUQ2w=w600-h800-k-no", caption: "", status: "approved" },
      { url: "https://gz0.googleusercontent.com/gps-cs-s/AHVAwepKq-SfQYD8YIz6G2tSe2ljPeJB0hwT_6BZW0lqNsEAT3jLTYDREe0G0etT5k4JgHSyqmpfNYACTVlKFumw1ef4zfYegeyvU_NKWMwC8YmMAH2UDKLu78fTiYS04oa75eMBbePN=w600-h800-k-no", caption: "", status: "approved" },
      { url: "https://gz0.googleusercontent.com/grass-cs/ABsKjrycQu3bp0Mlg_PuoRQZ0L8bo9RZFwdmrwd3o-cy-AgmRsgzfu6wlO6eHceXYC8ONefaqblZm5z5yKy5RwK_F9npPTTgnMS_ns8AcLacrUFlLaYVohWJEFKSZ1idC8HQ2D0AoD0W=w600-h800-k-no", caption: "bulk items", status: "approved" },
      { url: "https://gz0.googleusercontent.com/gps-cs-s/AHVAweqZebiJ2B6sjf0Hm4c-uPE-hEXgid57Dv5YJAVJq3_5CzrgFjl1HEe8lOmlO2NO23s2GeVNvF_uaO1tld0NFIg5api9OhS_N7cBI4ZcCO3x45WsAC7Q2vZOtjmXw9oGkm4cbk95=w600-h800-k-no", caption: "", status: "approved" },
      { url: "https://gz0.googleusercontent.com/gps-cs-s/AHVAweqVsDieAigzl7fCzvVUMxl2h-fztI8KsrGb4QVjT8xirXqEyYfcnuM9H8fSJuA4gj2JeGR184q-as9rp0mPrwbIxWsRcQVfriFYZmERzfAqwiKhYXmPekvM7A5ljzdR0TXkWdU=w600-h800-k-no", caption: "", status: "approved" },
      { url: "https://gz0.googleusercontent.com/grass-cs/ABsKjrzCyl5nOjiyQG-1BV1Ee8aWV5ZqWRTN567b5e1NS1PwIoGJa0OprPjpHP5eKTw5V_dcghdiZ4f3WLZ4Q4md3UShKuLjPFXzIP0-0nReeJvQZ7Y_FrAQsyXUKWanzvFR3dwk3HyWUw=w600-h800-k-no", caption: "store cleanliness", status: "approved" },
    ],

  },
  // ======================================================
  // ДОБАВЬТЕ НОВЫЕ МАГАЗИНЫ НИЖЕ ПО ОБРАЗЦУ ВЫШЕ
  // ======================================================
];
