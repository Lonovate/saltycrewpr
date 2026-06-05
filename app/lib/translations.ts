// Booking links per route — update these when real links are available
export const bookingLinks = {
  icacosHalfDay: "https://www.google.com",
  icacosFullDay: "https://www.google.com",
  culebraCharter: "https://www.google.com",
  culebraPremium: "https://www.google.com",
  viequesCharter: "https://www.google.com",
  viequesPremium: "https://www.google.com",
  sunset: "https://www.google.com",
  palominoHalfDay: "https://www.google.com",
  palominoFullDay: "https://www.google.com",
  privateTour: "https://www.google.com",
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      routes: "Routes",
      history: "Our History",
      contact: "Contact",
    },
    hero: {
      headline1: "Experience Puerto Rico",
      headline2: "From The Sea",
      subheadline:
        "Luxury tropical boat routes through the most beautiful islands of Puerto Rico.",
      cta: "Book Your Route",
      explore: "Explore Routes",
    },
    routes: {
      title: "Discover Our Routes",
      subtitle: "Choose from our curated collection of luxury boat experiences",
      explore: "Explore Route",
      reserveNow: "Reserve Now",
      close: "Close",
      startingAt: "Starting at",
      includes: "Includes",
      duration: "Duration",
      guests: "Guests",
      addOns: "Add-Ons",
      addOnsList: [
        { name: "Cooler stocked with soft drinks", price: "$50" },
        { name: "Premium beverage package", price: "$150" },
        { name: "Charcuterie board", price: "$125" },
        { name: "Drone footage", price: "$150" },
        { name: "Professional Photography", price: "$250" },
        { name: "Extra Hour", price: "$150" },
      ],
      items: [
        {
          name: "Icacos Island",
          description:
            "Crystal clear waters and pristine white sand beaches await you.",
          packages: [
            {
              name: "Half Day Island Escape",
              duration: "4 Hours",
              guests: "Up to 6 Guests",
              price: "$499",
              bookingKey: "icacosHalfDay",
              description: "Visit Icacos, Palomino or nearby reefs.",
              includes: [
                "USCG Licensed Captain",
                "Ice & Water",
                "Snorkeling Equipment",
                "Floating Mat",
                "Bluetooth Sound System",
              ],
            },
            {
              name: "Full Day Island Escape",
              duration: "6 Hours",
              guests: "Up to 6 Guests",
              price: "$599",
              bookingKey: "icacosFullDay",
              description: "Explore Icacos, Palomino and nearby cays.",
              includes: [
                "Captain & Fuel",
                "Ice & Water",
                "Snorkeling Gear",
                "Floating Mat",
                "Beach Time & Island Hopping",
              ],
            },
          ],
        },
        {
          name: "Culebra Experience",
          description:
            "Discover the enchanting beauty of Culebra's turquoise paradise.",
          packages: [
            {
              name: "Culebra Private Charter",
              duration: "Full Day",
              guests: "Up to 6 Guests",
              price: "$799",
              bookingKey: "culebraCharter",
              description: "Visit Flamenco Beach, Tamarindo Beach and world-class snorkeling spots.",
              includes: [
                "Captain",
                "Fuel",
                "Ice & Water",
                "Snorkeling Equipment",
                "Floating Mat",
              ],
            },
            {
              name: "Culebra Premium Experience",
              duration: "Full Day",
              guests: "Up to 6 Guests",
              price: "$1,350",
              bookingKey: "culebraPremium",
              description: "Extended itinerary with multiple beach and snorkeling stops.",
              includes: [
                "Captain",
                "Fuel",
                "Ice & Water",
                "Snorkeling Equipment",
                "Floating Mat",
                "Complimentary Soft Drinks",
              ],
            },
          ],
        },
        {
          name: "Vieques Escape",
          description:
            "Explore hidden coves and bioluminescent bays in style.",
          packages: [
            {
              name: "Vieques Private Charter",
              duration: "Full Day",
              guests: "Up to 6 Guests",
              price: "$1,500",
              bookingKey: "viequesCharter",
              description: "Discover secluded beaches and crystal-clear waters.",
              includes: [
                "Captain",
                "Fuel",
                "Ice & Water",
                "Snorkeling Equipment",
                "Floating Mat",
              ],
            },
            {
              name: "Vieques Premium Experience",
              duration: "Full Day",
              guests: "Up to 6 Guests",
              price: "$1,995",
              bookingKey: "viequesPremium",
              description: "Premium beach-hopping and snorkeling adventure.",
              includes: [
                "Captain",
                "Fuel",
                "Ice & Water",
                "Snorkeling Equipment",
                "Floating Mat",
                "Complimentary Soft Drinks",
              ],
            },
          ],
        },
        {
          name: "Sunset Route",
          description:
            "Watch the Caribbean sun paint the sky in golden hues.",
          packages: [
            {
              name: "Sunset Cruise",
              duration: "3 Hours",
              guests: "Up to 6 Guests",
              price: "$399",
              bookingKey: "sunset",
              description: "Enjoy Puerto Rico's beautiful sunset from the water.",
              includes: [
                "Captain",
                "Ice & Water",
                "Music",
                "Light Snacks",
              ],
            },
          ],
        },
        {
          name: "Private Tropical Tour",
          description:
            "Customized luxury journey through Puerto Rico's hidden gems.",
          packages: [
            {
              name: "Half Day Island Escape",
              duration: "4 Hours",
              guests: "Up to 6 Guests",
              price: "$499",
              bookingKey: "icacosHalfDay",
              description: "Visit Icacos, Palomino or nearby reefs.",
              includes: [
                "USCG Licensed Captain",
                "Ice & Water",
                "Snorkeling Equipment",
                "Floating Mat",
                "Bluetooth Sound System",
              ],
            },
            {
              name: "Full Day Island Escape",
              duration: "6 Hours",
              guests: "Up to 6 Guests",
              price: "$599",
              bookingKey: "icacosFullDay",
              description: "Explore Icacos, Palomino and nearby cays.",
              includes: [
                "Captain & Fuel",
                "Ice & Water",
                "Snorkeling Gear",
                "Floating Mat",
                "Beach Time & Island Hopping",
              ],
            },
          ],
        },
        {
          name: "Palomino",
          description:
            "Ride the river to the sea through lush tropical landscapes.",
          packages: [
            {
              name: "Half Day Island Escape",
              duration: "4 Hours",
              guests: "Up to 6 Guests",
              price: "$499",
              bookingKey: "palominoHalfDay",
              description: "Visit Icacos, Palomino or nearby reefs.",
              includes: [
                "USCG Licensed Captain",
                "Ice & Water",
                "Snorkeling Equipment",
                "Floating Mat",
                "Bluetooth Sound System",
              ],
            },
            {
              name: "Full Day Island Escape",
              duration: "6 Hours",
              guests: "Up to 6 Guests",
              price: "$599",
              bookingKey: "palominoFullDay",
              description: "Explore Icacos, Palomino and nearby cays.",
              includes: [
                "Captain & Fuel",
                "Ice & Water",
                "Snorkeling Gear",
                "Floating Mat",
                "Beach Time & Island Hopping",
              ],
            },
          ],
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us",
      subtitle: "Experience the difference with Salty Crew PR",
      features: [
        {
          title: "Experienced Crew",
          description:
            "Professional captains with years of Caribbean sailing experience.",
        },
        {
          title: "Premium Service",
          description:
            "Luxury amenities and personalized attention to every detail.",
        },
        {
          title: "Licensed Captain",
          description:
            "Our captain holds a certified license, ensuring professional and safe navigation.",
        },
        {
          title: "Safe & Comfortable",
          description:
            "Top-tier safety equipment and modern, well-maintained vessels.",
        },
      ],
    },
    gallery: {
      title: "Experience Gallery",
      subtitle: "Moments captured from our luxury Caribbean adventures",
    },
    history: {
      title: "Our History",
      p1: "We created Salty Crew PR to share the beauty of Puerto Rico through unforgettable ocean experiences.",
      p2: "Born from a deep passion for the Caribbean Sea and love for our island, we've dedicated ourselves to offering luxury boat tours that showcase Puerto Rico's most breathtaking coastal destinations.",
      p3: "Our experienced crew combines local knowledge with world-class hospitality, ensuring every journey is safe, comfortable, and filled with moments you'll treasure forever.",
      p4: "From the pristine beaches of Icacos to the hidden coves of Vieques, we invite you to discover Puerto Rico the way it was meant to be experienced\u2014from the sea.",
      quote:
        "Every wave tells a story, and we're here to help you write yours.",
      quoteAuthor: "The Salty Crew PR Family",
    },
    testimonials: {
      title: "What Our Guests Say",
      subtitle: "Stories from travelers who've experienced the magic",
      reviews: [
        {
          name: "Sarah Martinez",
          location: "New York, USA",
          text: "Absolutely magical experience! The crew was professional, the boat was pristine, and the views were breathtaking. Icacos Island is now at the top of my favorite destinations.",
        },
        {
          name: "Michael Chen",
          location: "San Francisco, USA",
          text: "This was the highlight of our Puerto Rico vacation. The sunset route was incredible, and the captain shared amazing local stories. Highly recommend!",
        },
        {
          name: "Isabella Rodriguez",
          location: "Miami, USA",
          text: "Pure luxury from start to finish. The attention to detail, the comfort of the boat, and the stunning destinations made this an unforgettable journey.",
        },
      ],
    },
    social: {
      title: "Follow Our Journey",
      subtitle: "Get daily inspiration from our Caribbean adventures",
    },
    contact: {
      title: "Start Your Adventure",
      subtitle:
        "Ready to explore Puerto Rico's tropical paradise? Get in touch with us today.",
      info: "Contact Information",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationValue: "Fajardo, Puerto Rico",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        phoneNumber: "Phone Number",
        emailAddress: "Email",
        preferredRoute: "Preferred Route",
        selectRoute: "Select a route",
        communicationMethod: "Preferred Communication Method",
        selectMethod: "Select a method",
        methodEmail: "Email",
        methodPhone: "Phone Call",
        methodWhatsApp: "WhatsApp",
        methodSMS: "SMS/Text Message",
        groupSize: "Group Size",
        selectSize: "Select group size",
        sizeSmall: "0 to 6",
        sizeLarge: "6+",
        message: "Message (optional)",
        submit: "Request Your Experience",
        sending: "Sending...",
        success: "Thank you for your inquiry! We will contact you soon.",
        error: "Something went wrong. Please try again.",
      },
    },
    footer: {
      description:
        "Luxury tropical boat experiences through the most beautiful islands of Puerto Rico.",
      navigation: "Navigation",
      contactTitle: "Contact",
      followUs: "Follow Us",
      copyright: "Salty Crew PR. All rights reserved.",
      builtBy: "Built by",
    },
    validation: {
      required: "Required",
      invalidEmail: "Invalid email",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      routes: "Rutas",
      history: "Nuestra Historia",
      contact: "Contacto",
    },
    hero: {
      headline1: "Experimenta Puerto Rico",
      headline2: "Desde El Mar",
      subheadline:
        "Rutas de botes de lujo a trav\u00e9s de las islas m\u00e1s hermosas de Puerto Rico.",
      cta: "Reserva Tu Ruta",
      explore: "Explorar Rutas",
    },
    routes: {
      title: "Descubre Nuestras Rutas",
      subtitle:
        "Elige entre nuestra colección curada de experiencias de bote de lujo",
      explore: "Explorar Ruta",
      reserveNow: "Reservar Ahora",
      close: "Cerrar",
      startingAt: "Desde",
      includes: "Incluye",
      duration: "Duración",
      guests: "Pasajeros",
      addOns: "Extras",
      addOnsList: [
        { name: "Nevera con refrescos", price: "$50" },
        { name: "Paquete de bebidas premium", price: "$150" },
        { name: "Tabla de charcutería", price: "$125" },
        { name: "Grabación con dron", price: "$150" },
        { name: "Fotografía profesional", price: "$250" },
        { name: "Hora adicional", price: "$150" },
      ],
      items: [
        {
          name: "Isla Icacos",
          description:
            "Aguas cristalinas y playas de arena blanca prístina te esperan.",
          packages: [
            {
              name: "Escape de Medio Día",
              duration: "4 Horas",
              guests: "Hasta 6 Pasajeros",
              price: "$499",
              bookingKey: "icacosHalfDay",
              description: "Visita Icacos, Palomino o arrecifes cercanos.",
              includes: [
                "Capitán con Licencia USCG",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Sistema de Sonido Bluetooth",
              ],
            },
            {
              name: "Escape de Día Completo",
              duration: "6 Horas",
              guests: "Hasta 6 Pasajeros",
              price: "$599",
              bookingKey: "icacosFullDay",
              description: "Explora Icacos, Palomino y cayos cercanos.",
              includes: [
                "Capitán y Combustible",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Tiempo en Playa y Recorrido de Islas",
              ],
            },
          ],
        },
        {
          name: "Experiencia Culebra",
          description:
            "Descubre la encantadora belleza del paraíso turquesa de Culebra.",
          packages: [
            {
              name: "Charter Privado a Culebra",
              duration: "Día Completo",
              guests: "Hasta 6 Pasajeros",
              price: "$799",
              bookingKey: "culebraCharter",
              description: "Visita Playa Flamenco, Playa Tamarindo y spots de snorkel de clase mundial.",
              includes: [
                "Capitán",
                "Combustible",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
              ],
            },
            {
              name: "Experiencia Premium Culebra",
              duration: "Día Completo",
              guests: "Hasta 6 Pasajeros",
              price: "$1,350",
              bookingKey: "culebraPremium",
              description: "Itinerario extendido con múltiples paradas de playa y snorkel.",
              includes: [
                "Capitán",
                "Combustible",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Refrescos de Cortesía",
              ],
            },
          ],
        },
        {
          name: "Escape a Vieques",
          description:
            "Explora calas escondidas y bahías bioluminiscentes con estilo.",
          packages: [
            {
              name: "Charter Privado a Vieques",
              duration: "Día Completo",
              guests: "Hasta 6 Pasajeros",
              price: "$1,500",
              bookingKey: "viequesCharter",
              description: "Descubre playas aisladas y aguas cristalinas.",
              includes: [
                "Capitán",
                "Combustible",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
              ],
            },
            {
              name: "Experiencia Premium Vieques",
              duration: "Día Completo",
              guests: "Hasta 6 Pasajeros",
              price: "$1,995",
              bookingKey: "viequesPremium",
              description: "Aventura premium de playas y snorkel.",
              includes: [
                "Capitán",
                "Combustible",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Refrescos de Cortesía",
              ],
            },
          ],
        },
        {
          name: "Ruta del Atardecer",
          description:
            "Observa el sol caribeño pintar el cielo en tonos dorados.",
          packages: [
            {
              name: "Crucero al Atardecer",
              duration: "3 Horas",
              guests: "Hasta 6 Pasajeros",
              price: "$399",
              bookingKey: "sunset",
              description: "Disfruta del hermoso atardecer de Puerto Rico desde el agua.",
              includes: [
                "Capitán",
                "Hielo y Agua",
                "Música",
                "Aperitivos Ligeros",
              ],
            },
          ],
        },
        {
          name: "Tour Tropical Privado",
          description:
            "Viaje de lujo personalizado por las joyas escondidas de Puerto Rico.",
          packages: [
            {
              name: "Escape de Medio Día",
              duration: "4 Horas",
              guests: "Hasta 6 Pasajeros",
              price: "$499",
              bookingKey: "icacosHalfDay",
              description: "Visita Icacos, Palomino o arrecifes cercanos.",
              includes: [
                "Capitán con Licencia USCG",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Sistema de Sonido Bluetooth",
              ],
            },
            {
              name: "Escape de Día Completo",
              duration: "6 Horas",
              guests: "Hasta 6 Pasajeros",
              price: "$599",
              bookingKey: "icacosFullDay",
              description: "Explora Icacos, Palomino y cayos cercanos.",
              includes: [
                "Capitán y Combustible",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Tiempo en Playa y Recorrido de Islas",
              ],
            },
          ],
        },
        {
          name: "Palomino",
          description:
            "Navega el río hasta el mar a través de exuberantes paisajes tropicales.",
          packages: [
            {
              name: "Escape de Medio Día",
              duration: "4 Horas",
              guests: "Hasta 6 Pasajeros",
              price: "$499",
              bookingKey: "palominoHalfDay",
              description: "Visita Icacos, Palomino o arrecifes cercanos.",
              includes: [
                "Capitán con Licencia USCG",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Sistema de Sonido Bluetooth",
              ],
            },
            {
              name: "Escape de Día Completo",
              duration: "6 Horas",
              guests: "Hasta 6 Pasajeros",
              price: "$599",
              bookingKey: "palominoFullDay",
              description: "Explora Icacos, Palomino y cayos cercanos.",
              includes: [
                "Capitán y Combustible",
                "Hielo y Agua",
                "Equipo de Snorkel",
                "Colchoneta Flotante",
                "Tiempo en Playa y Recorrido de Islas",
              ],
            },
          ],
        },
      ],
    },
    whyChooseUs: {
      title: "Por Qu\u00e9 Elegirnos",
      subtitle: "Experimenta la diferencia con Salty Crew PR",
      features: [
        {
          title: "Tripulaci\u00f3n Experimentada",
          description:
            "Capitanes profesionales con a\u00f1os de experiencia navegando el Caribe.",
        },
        {
          title: "Servicio Premium",
          description:
            "Amenidades de lujo y atenci\u00f3n personalizada a cada detalle.",
        },
        {
          title: "Capitán con Licencia",
          description:
            "Nuestro capitán cuenta con licencia certificada, garantizando una navegación profesional y segura.",
        },
        {
          title: "Seguro y C\u00f3modo",
          description:
            "Equipo de seguridad de primera y embarcaciones modernas y bien mantenidas.",
        },
      ],
    },
    gallery: {
      title: "Galer\u00eda de Experiencias",
      subtitle:
        "Momentos capturados de nuestras aventuras de lujo en el Caribe",
    },
    history: {
      title: "Nuestra Historia",
      p1: "Creamos Salty Crew PR para compartir la belleza de Puerto Rico a trav\u00e9s de experiencias oce\u00e1nicas inolvidables.",
      p2: "Nacidos de una profunda pasi\u00f3n por el Mar Caribe y el amor por nuestra isla, nos hemos dedicado a ofrecer tours de botes de lujo que muestran los destinos costeros m\u00e1s impresionantes de Puerto Rico.",
      p3: "Nuestra tripulaci\u00f3n experimentada combina conocimiento local con hospitalidad de clase mundial, asegurando que cada viaje sea seguro, c\u00f3modo y lleno de momentos que atesorar\u00e1s para siempre.",
      p4: "Desde las playas pr\u00edstinas de Icacos hasta las calas escondidas de Vieques, te invitamos a descubrir Puerto Rico como deb\u00eda ser experimentado\u2014desde el mar.",
      quote:
        "Cada ola cuenta una historia, y estamos aqu\u00ed para ayudarte a escribir la tuya.",
      quoteAuthor: "La Familia Salty Crew PR",
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Hu\u00e9spedes",
      subtitle:
        "Historias de viajeros que han experimentado la magia",
      reviews: [
        {
          name: "Sarah Martinez",
          location: "Nueva York, EE.UU.",
          text: "\u00a1Experiencia absolutamente m\u00e1gica! La tripulaci\u00f3n fue profesional, el bote estaba impecable y las vistas eran impresionantes. Isla Icacos est\u00e1 ahora en el tope de mis destinos favoritos.",
        },
        {
          name: "Michael Chen",
          location: "San Francisco, EE.UU.",
          text: "Este fue el punto culminante de nuestras vacaciones en Puerto Rico. La ruta del atardecer fue incre\u00edble, y el capit\u00e1n comparti\u00f3 historias locales asombrosas. \u00a1Altamente recomendado!",
        },
        {
          name: "Isabella Rodriguez",
          location: "Miami, EE.UU.",
          text: "Lujo puro de principio a fin. La atenci\u00f3n al detalle, la comodidad del bote y los destinos impresionantes hicieron de este un viaje inolvidable.",
        },
      ],
    },
    social: {
      title: "Sigue Nuestro Viaje",
      subtitle:
        "Obt\u00e9n inspiraci\u00f3n diaria de nuestras aventuras caribe\u00f1as",
    },
    contact: {
      title: "Comienza Tu Aventura",
      subtitle:
        "\u00bfListo para explorar el para\u00edso tropical de Puerto Rico? Cont\u00e1ctanos hoy.",
      info: "Informaci\u00f3n de Contacto",
      phone: "Tel\u00e9fono",
      email: "Correo Electr\u00f3nico",
      location: "Ubicaci\u00f3n",
      locationValue: "Fajardo, Puerto Rico",
      form: {
        firstName: "Nombre",
        lastName: "Apellido",
        phoneNumber: "N\u00famero de Tel\u00e9fono",
        emailAddress: "Correo Electr\u00f3nico",
        preferredRoute: "Ruta Preferida",
        selectRoute: "Selecciona una ruta",
        communicationMethod: "M\u00e9todo de Comunicaci\u00f3n Preferido",
        selectMethod: "Selecciona un m\u00e9todo",
        methodEmail: "Correo Electr\u00f3nico",
        methodPhone: "Llamada Telef\u00f3nica",
        methodWhatsApp: "WhatsApp",
        methodSMS: "SMS/Mensaje de Texto",
        groupSize: "Tamaño del Grupo",
        selectSize: "Selecciona tamaño del grupo",
        sizeSmall: "0 a 6",
        sizeLarge: "6+",
        message: "Mensaje (opcional)",
        submit: "Solicita Tu Experiencia",
        sending: "Enviando...",
        success:
          "\u00a1Gracias por tu consulta! Nos comunicaremos contigo pronto.",
        error: "Algo sali\u00f3 mal. Por favor, int\u00e9ntalo de nuevo.",
      },
    },
    footer: {
      description:
        "Experiencias tropicales de bote de lujo a trav\u00e9s de las islas m\u00e1s hermosas de Puerto Rico.",
      navigation: "Navegaci\u00f3n",
      contactTitle: "Contacto",
      followUs: "S\u00edguenos",
      copyright: "Salty Crew PR. Todos los derechos reservados.",
      builtBy: "Desarrollado por",
    },
    validation: {
      required: "Requerido",
      invalidEmail: "Correo inv\u00e1lido",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKeys = (typeof translations)[Language];
