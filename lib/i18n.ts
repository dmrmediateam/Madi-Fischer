export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export interface CasaCopy {
  name: string;
  price: string;
  tagline: string;
  deck: string;
  water: string;
  highlight?: string;
}

export interface FormLabels {
  name: string;
  email: string;
  phone: string;
  message: string;
  placeholder: string;
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  genericError: string;
}

interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogLocale: string;
  };
  nav: {
    casas: string;
    area: string;
    know: string;
    contact: string;
    cta: string;
    switchLabel: string;
    switchHref: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  quickFacts: string[];
  stats: {
    eyebrow: string;
    items: { value: string; caption: string }[];
  };
  casas: {
    eyebrow: string;
    title: string;
    intro: string;
    perNight: string;
    beds: string;
    bath: string;
    kitchen: string;
    airbnbCta: string;
    bookCta: string;
    askCta: string;
    note: string;
    list: CasaCopy[];
  };
  area: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { title: string; text: string }[];
  };
  know: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { title: string; text: string }[];
  };
  book: {
    eyebrow: string;
    title: string;
    sub: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    location: string;
  };
  form: FormLabels;
  footer: {
    tagline: string;
    rights: string;
  };
}

export const dict: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title:
        "Fischer Tropitel | Jungle Casa Rentals & Sportfishing Near Quepos, Costa Rica",
      description:
        "Three private jungle casas above a waterfall near Quepos, Costa Rica — the sportfishing capital of the world. Full kitchens, private pool, hot springs hike, and local captains ready to take you fishing.",
      ogTitle: "Fischer Tropitel — Jungle Casa Rentals Near Quepos, Costa Rica",
      ogDescription:
        "Three private jungle casas above a waterfall near Quepos, Costa Rica. Wake up to howler monkeys, hike to hot springs, and fish the best waters in the world.",
      ogLocale: "en_US",
    },
    nav: {
      casas: "The Casas",
      area: "Fishing & Adventure",
      know: "Know Before You Go",
      contact: "Contact",
      cta: "Plan your stay",
      switchLabel: "Español",
      switchHref: "/es/",
    },
    hero: {
      eyebrow: "Quepos, Costa Rica · Jungle casa rentals",
      title:
        "Three jungle casas above a waterfall, in the sportfishing capital of the world.",
      sub: "Drink your morning coffee looking at a waterfall. Hike to hot springs. Fish the waters that made Quepos famous. Then come home to your own casa in the mountains — private pool included, monkeys not guaranteed but very likely.",
      ctaPrimary: "See the three casas",
      ctaSecondary: "What to expect",
    },
    quickFacts: [
      "Waterfall view from your morning coffee",
      "Private pool on the property",
      "20-minute hike to natural hot springs",
      "Minutes from world-class sportfishing in Quepos",
      "Manuel Antonio National Park nearby",
      "Each casa sleeps about 6",
    ],
    stats: {
      eyebrow: "Your vacation, our mountain",
      items: [
        {
          value: "3",
          caption: "fully furnished casas on one private jungle property",
        },
        {
          value: "~6",
          caption: "guests per casa — rent one, or bring everyone and take all three",
        },
        {
          value: "20 min",
          caption: "on foot from your door to natural hot springs",
        },
        {
          value: "$150–250",
          caption: "per night, depending on the casa and the season",
        },
      ],
    },
    casas: {
      eyebrow: "The Casas",
      title: "Pick your casa",
      intro:
        "Three fully furnished houses on one secluded mountain property. Each has two bedrooms, one bathroom, a full kitchen, and sleeps about six. Rent one — or bring everyone and take all three.",
      perNight: "/ night",
      beds: "2 bedrooms · sleeps ~6",
      bath: "1 bathroom",
      kitchen: "Fully equipped kitchen",
      airbnbCta: "Book on Airbnb",
      bookCta: "Book",
      askCta: "Ask about dates",
      note: "Good to know: the casas share one property, so if you book one, friendly neighbors may be staying in another. Rates are lower in the rainy season — ask us.",
      list: [
        {
          name: "Casa Cascada",
          price: "$250",
          tagline: "The fancy one — the biggest bathroom on the property.",
          deck: "Shares a big deck with Loads of Toads",
          water: "Hot water",
        },
        {
          name: "Loads of Toads",
          price: "$200",
          tagline: "Named for the neighbors you'll hear singing every night.",
          deck: "Shares a big deck with Casa Cascada",
          water: "Hot water",
        },
        {
          name: "Casa Verde",
          price: "$150",
          tagline: "Just as beautiful, priced lower for one honest reason:",
          deck: "Its own private deck",
          water: "No hot water (yet) — that's why it costs less",
          highlight:
            "Cold-water showers only for now. In the Costa Rican heat, most guests barely notice — but we want you to know before you book.",
        },
      ],
    },
    area: {
      eyebrow: "Fishing & Adventure",
      title: "We came for the fishing. We stayed for everything else.",
      sub: "Our family found Quepos on a fishing vacation and never really left. Now it's your turn.",
      items: [
        {
          title: "Sportfishing out of Quepos",
          text: "Quepos is famous worldwide for offshore fishing — it's the whole reason we fell in love with this place. We know local captains who can take you out for the day. Ask us and we'll help set it up.",
        },
        {
          title: "Manuel Antonio National Park",
          text: "One of Costa Rica's most-loved national parks — beaches, trails, sloths, and monkeys — is a short drive away.",
        },
        {
          title: "Hot springs hike",
          text: "About 20 minutes on foot from the casas. Our guests get to use the springs — bring sandals and go soak.",
        },
        {
          title: "Zip lines, ATVs & jet skis",
          text: "Plenty of excursions run nearby: zip-lining through the canopy, ATV tours in the mountains, and jet skiing on the coast.",
        },
      ],
    },
    know: {
      eyebrow: "Know Before You Go",
      title: "This is the jungle, not a resort — and that's the point",
      sub: "We'd rather tell you everything up front so you show up excited, not surprised. Here's the honest version.",
      items: [
        {
          title: "You need 4-wheel drive",
          text: "The casas sit up a steep mountain road. A 4WD vehicle isn't a suggestion — it's how you get here. In the rainy season, fallen trees, mud, and the occasional cow in the road are part of the adventure.",
        },
        {
          title: "Solar power, jungle rules",
          text: "The property runs on solar with a backup generator. Heavy rain can interrupt power; our caretakers live on site and keep everything running and everyone comfortable.",
        },
        {
          title: "This is the jungle — really",
          text: "Frogs on the railing, monkeys in the trees, maybe a snake on the trail. If you want wildlife at arm's length, you'll love it here. If you want a resort lobby, this isn't it.",
        },
        {
          title: "Two very different seasons",
          text: "Dry season runs roughly December through April — that's prime time. The rainy season (April to December) is lush, green, and quieter, and getting up the mountain takes more patience.",
        },
      ],
    },
    book: {
      eyebrow: "Booking",
      title: "Book your stay",
      sub: "Pick your dates below and we'll confirm the details with you directly.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Ready to plan your trip?",
      sub: "Tell us the dates you're thinking about, how many people are coming, and whether you want us to line up a fishing captain. We'll get back to you with availability.",
      location:
        "In the mountains above Quepos, Costa Rica — about 200 meters past the Hot Springs Lodge",
    },
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Tell us about your trip",
      placeholder:
        "Dates you're thinking about, how many people, which casa — and whether you'd like us to line up a fishing captain.",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Thanks — we got it.",
      successBody: "We'll be in touch shortly.",
      genericError: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Jungle casa rentals near Quepos, Costa Rica",
      rights: "Pura vida.",
    },
  },
  es: {
    meta: {
      title:
        "Fischer Tropitel | Casas en la selva y pesca deportiva cerca de Quepos, Costa Rica",
      description:
        "Tres casas privadas en la selva sobre una catarata cerca de Quepos, Costa Rica — la capital mundial de la pesca deportiva. Cocinas completas, piscina privada, aguas termales y capitanes locales listos para llevarlo a pescar.",
      ogTitle:
        "Fischer Tropitel — Casas en la selva cerca de Quepos, Costa Rica",
      ogDescription:
        "Tres casas privadas en la selva sobre una catarata cerca de Quepos, Costa Rica. Despierte con los monos congo, camine a las aguas termales y pesque en las mejores aguas del mundo.",
      ogLocale: "es_CR",
    },
    nav: {
      casas: "Las Casas",
      area: "Pesca y Aventura",
      know: "Antes de Venir",
      contact: "Contacto",
      cta: "Planee su estadía",
      switchLabel: "English",
      switchHref: "/en/",
    },
    hero: {
      eyebrow: "Quepos, Costa Rica · Casas de alquiler en la selva",
      title:
        "Tres casas en la selva sobre una catarata, en la capital mundial de la pesca deportiva.",
      sub: "Tómese el café de la mañana viendo una catarata. Camine hasta las aguas termales. Pesque en las aguas que hicieron famoso a Quepos. Y vuelva a su propia casa en la montaña — piscina privada incluida; los monos no están garantizados, pero son muy probables.",
      ctaPrimary: "Ver las tres casas",
      ctaSecondary: "Qué esperar",
    },
    quickFacts: [
      "Vista a la catarata desde su café de la mañana",
      "Piscina privada en la propiedad",
      "Caminata de 20 minutos a aguas termales naturales",
      "A minutos de la pesca deportiva de clase mundial en Quepos",
      "Cerca del Parque Nacional Manuel Antonio",
      "Cada casa aloja a unas 6 personas",
    ],
    stats: {
      eyebrow: "Sus vacaciones, nuestra montaña",
      items: [
        {
          value: "3",
          caption: "casas totalmente amuebladas en una propiedad privada en la selva",
        },
        {
          value: "~6",
          caption: "huéspedes por casa — alquile una, o venga con todos y tome las tres",
        },
        {
          value: "20 min",
          caption: "a pie desde su puerta hasta las aguas termales naturales",
        },
        {
          value: "$150–250",
          caption: "por noche, según la casa y la temporada",
        },
      ],
    },
    casas: {
      eyebrow: "Las Casas",
      title: "Elija su casa",
      intro:
        "Tres casas totalmente amuebladas en una propiedad privada en la montaña. Cada una tiene dos habitaciones, un baño, cocina completa y espacio para unas seis personas. Alquile una — o venga con todos y tome las tres.",
      perNight: "/ noche",
      beds: "2 habitaciones · ~6 personas",
      bath: "1 baño",
      kitchen: "Cocina totalmente equipada",
      airbnbCta: "Reservar en Airbnb",
      bookCta: "Reservar",
      askCta: "Consultar fechas",
      note: "Bueno saber: las casas comparten una misma propiedad, así que si reserva una, puede haber vecinos amistosos en otra. Las tarifas bajan en la temporada de lluvias — pregúntenos.",
      list: [
        {
          name: "Casa Cascada",
          price: "$250",
          tagline: "La elegante — con el baño más grande de la propiedad.",
          deck: "Comparte una gran terraza con Loads of Toads",
          water: "Agua caliente",
        },
        {
          name: "Loads of Toads",
          price: "$200",
          tagline: "Nombrada por los vecinos que oirá cantar cada noche.",
          deck: "Comparte una gran terraza con Casa Cascada",
          water: "Agua caliente",
        },
        {
          name: "Casa Verde",
          price: "$150",
          tagline: "Igual de linda, con un precio menor por una razón honesta:",
          deck: "Terraza privada propia",
          water: "Sin agua caliente (por ahora) — por eso cuesta menos",
          highlight:
            "Por ahora solo hay duchas de agua fría. Con el calor de Costa Rica casi ni se nota — pero queremos que lo sepa antes de reservar.",
        },
      ],
    },
    area: {
      eyebrow: "Pesca y Aventura",
      title: "Vinimos por la pesca. Nos quedamos por todo lo demás.",
      sub: "Nuestra familia descubrió Quepos en unas vacaciones de pesca y nunca se fue del todo. Ahora le toca a usted.",
      items: [
        {
          title: "Pesca deportiva desde Quepos",
          text: "Quepos es famoso en el mundo entero por la pesca mar adentro — es la razón por la que nos enamoramos de este lugar. Conocemos capitanes locales que pueden llevarlo a pescar por el día. Pregúntenos y se lo coordinamos.",
        },
        {
          title: "Parque Nacional Manuel Antonio",
          text: "Uno de los parques nacionales más queridos de Costa Rica — playas, senderos, perezosos y monos — está a un corto viaje en carro.",
        },
        {
          title: "Caminata a las aguas termales",
          text: "A unos 20 minutos a pie de las casas. Nuestros huéspedes pueden usar las termales — traiga sandalias y vaya a remojarse.",
        },
        {
          title: "Canopy, cuadraciclos y motos acuáticas",
          text: "Cerca hay excursiones de sobra: canopy entre los árboles, tours en cuadraciclo por la montaña y motos acuáticas en la costa.",
        },
      ],
    },
    know: {
      eyebrow: "Antes de Venir",
      title: "Esto es la selva, no un resort — y esa es la gracia",
      sub: "Preferimos contárselo todo de antemano para que llegue emocionado, no sorprendido. Esta es la versión honesta.",
      items: [
        {
          title: "Necesita un vehículo 4x4",
          text: "Las casas están subiendo un camino de montaña empinado. Un 4x4 no es una sugerencia — es la forma de llegar. En la temporada de lluvias, los árboles caídos, el barro y alguna vaca en el camino son parte de la aventura.",
        },
        {
          title: "Energía solar, reglas de la selva",
          text: "La propiedad funciona con energía solar y un generador de respaldo. La lluvia fuerte puede interrumpir la electricidad; nuestros cuidadores viven en la propiedad y mantienen todo funcionando y a todos cómodos.",
        },
        {
          title: "Esto es la selva — de verdad",
          text: "Ranas en la baranda, monos en los árboles, quizá una serpiente en el sendero. Si quiere la vida silvestre de cerca, le va a encantar. Si busca el lobby de un resort, esto no es eso.",
        },
        {
          title: "Dos temporadas muy distintas",
          text: "La temporada seca va más o menos de diciembre a abril — es la mejor época. La temporada de lluvias (de abril a diciembre) es verde, exuberante y más tranquila, y subir la montaña requiere más paciencia.",
        },
      ],
    },
    book: {
      eyebrow: "Reservas",
      title: "Reserve su estadía",
      sub: "Elija sus fechas abajo y confirmamos los detalles con usted directamente.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Listo para planear su viaje?",
      sub: "Cuéntenos qué fechas tiene en mente, cuántas personas vienen y si quiere que le coordinemos un capitán de pesca. Le responderemos con la disponibilidad.",
      location:
        "En las montañas sobre Quepos, Costa Rica — unos 200 metros después del Hot Springs Lodge",
    },
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Cuéntenos sobre su viaje",
      placeholder:
        "Las fechas que tiene en mente, cuántas personas, cuál casa — y si quiere que le coordinemos un capitán de pesca.",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      successTitle: "¡Gracias! Lo recibimos.",
      successBody: "Le escribiremos pronto.",
      genericError: "Algo salió mal. Inténtelo de nuevo.",
    },
    footer: {
      tagline: "Casas de alquiler en la selva cerca de Quepos, Costa Rica",
      rights: "Pura vida.",
    },
  },
};
