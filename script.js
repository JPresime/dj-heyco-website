const languages = [
  { code: "en", label: "🇺🇸 EN" },
  { code: "es", label: "🇪🇸 ES" },
  { code: "fr", label: "🇫🇷 FR" }
];

const translations = {
  en: {
    "meta.home.title": "DJ HEYCO | Premium DJ Artist in Santo Domingo",
    "meta.experience.title": "Experience | DJ HEYCO",
    "meta.bookings.title": "Bookings | DJ HEYCO",
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.bookings": "Bookings",
    "nav.instagram": "Instagram",
    "nav.bookNow": "Book Now",
    "cta.whatsapp": "Book on WhatsApp",
    "cta.experience": "View Experience",
    "cta.bookingInquiry": "Start a Booking Inquiry",
    "cta.form": "Booking Form",
    "cta.email": "Email Booking",
    "cta.watchMore": "Watch More",
    "brand.phrase": "All Genres • All Vibes • All Energy",
    "final.eyebrow": "Ready when the room is",
    "footer.copy": "Premium DJ artist based in Santo Domingo.",
    "services.clubs": "Clubs",
    "services.private": "Private Events",
    "services.weddings": "Weddings",
    "services.pool": "Pool Parties",
    "services.birthdays": "Birthday Celebrations",
    "services.brand": "Corporate / Brand Events",
    "services.collabs": "Collaborations",
    "services.nightlife": "Nightlife Events",
    "home.hero.eyebrow": "Santo Domingo based DJ artist",
    "home.hero.title": "DJ Heyco — Sound. Presence. Experience.",
    "home.hero.text": "Premium DJ sets for clubs, private events, weddings, pool parties, celebrations, and brand moments that need the right energy.",
    "home.position.eyebrow": "Artist positioning",
    "home.position.title": "Built for nightlife. Ready for private rooms.",
    "home.position.text": "DJ Heyco brings clean transitions, high-energy selection, and a refined sense of timing to every setting, from club floors to elegant celebrations.",
    "home.why.eyebrow": "What he brings",
    "home.why.title": "A set shaped around the room.",
    "home.why.card1.title": "Crowd Control",
    "home.why.card1.text": "Reading the floor, building momentum, and knowing when to switch the energy.",
    "home.why.card2.title": "Versatile Sound",
    "home.why.card2.text": "Open-format range for clubs, weddings, private parties, and brand experiences.",
    "home.why.card3.title": "Premium Presence",
    "home.why.card3.text": "A serious artist image with the polish expected from professional events.",
    "home.services.eyebrow": "Services",
    "home.services.title": "Event formats with a tailored sound.",
    "home.video.eyebrow": "Live energy",
    "home.video.title": "A preview of the room in motion.",
    "home.video.text": "See the performance energy before you make the call.",
    "home.final.title": "Make the next event feel intentional.",
    "experience.hero.eyebrow": "Experience / Media",
    "experience.hero.title": "The right sound for the right moment.",
    "experience.hero.text": "A refined open-format presence built for nightlife, celebrations, private rooms, and brand-driven moments.",
    "experience.profile.eyebrow": "Artist profile",
    "experience.profile.title": "A serious presence with adaptable energy.",
    "experience.profile.text": "Based in Santo Domingo, DJ Heyco shapes each set around the people in front of him: elegant when the moment calls for polish, explosive when the room is ready to move.",
    "experience.energy.eyebrow": "Music style",
    "experience.energy.title": "Versatility without losing identity.",
    "experience.energy.card1.title": "Nightlife",
    "experience.energy.card1.text": "Club-focused energy with clean movement and confident pacing.",
    "experience.energy.card2.title": "Private Events",
    "experience.energy.card2.text": "Flexible selection for birthdays, weddings, pool parties, and celebrations.",
    "experience.energy.card3.title": "Brand Moments",
    "experience.energy.card3.text": "A polished sound for corporate events, activations, and collaborations.",
    "experience.gallery.eyebrow": "Visual identity",
    "experience.gallery.title": "Image that feels as intentional as the set.",
    "experience.video.eyebrow": "Featured video",
    "experience.video.title": "Performance energy, framed with purpose.",
    "experience.presence.title": "Presence that carries the room.",
    "experience.presence.text": "The experience is built on timing, taste, and the ability to move between sounds without breaking the atmosphere.",
    "experience.final.title": "Bring the same energy to your event.",
    "bookings.hero.eyebrow": "Bookings",
    "bookings.hero.title": "Make the booking easy. Make the night memorable.",
    "bookings.hero.text": "For clubs, weddings, private events, pool parties, birthdays, brand events, nightlife, and collaborations.",
    "bookings.events.eyebrow": "Event types",
    "bookings.events.title": "A premium sound for the right setting.",
    "bookings.value.eyebrow": "Booking value",
    "bookings.value.title": "Clear communication, refined energy, serious delivery.",
    "bookings.value.text": "Tell us the room, the date, the location, and the feeling you want. DJ Heyco helps shape the sound around the event, not around a generic playlist.",
    "bookings.process.eyebrow": "Process",
    "bookings.process.title": "Three steps to lock the energy.",
    "bookings.process.one.title": "Send Details",
    "bookings.process.one.text": "Share date, location, event type, and expected atmosphere.",
    "bookings.process.two.title": "Confirm Fit",
    "bookings.process.two.text": "Align on timing, sound direction, and booking requirements.",
    "bookings.process.three.title": "Move the Room",
    "bookings.process.three.text": "Arrive ready with a set designed for the moment.",
    "bookings.form.eyebrow": "Inquiry form",
    "bookings.form.title": "Start with the essentials.",
    "bookings.form.text": "The form prepares a professional email. For the fastest response, WhatsApp remains the primary booking channel.",
    "bookings.direct.eyebrow": "Direct contact",
    "bookings.direct.title": "Choose the channel that fits the moment.",
    "bookings.faq.eyebrow": "FAQ",
    "bookings.faq.title": "Before you book.",
    "bookings.final.title": "Let’s make the sound match the occasion.",
    "form.name": "Full Name",
    "form.email": "Email",
    "form.phone": "WhatsApp / Phone",
    "form.type": "Event Type",
    "form.select": "Select one",
    "form.date": "Event Date",
    "form.location": "Location",
    "form.message": "Message",
    "form.submit": "Prepare Booking Email",
    "form.success": "Your inquiry is ready. Opening your email app now, and you can also continue directly through WhatsApp.",
    "faq.q1": "What types of events can I book DJ Heyco for?",
    "faq.a1": "Clubs, nightlife events, weddings, private events, pool parties, birthdays, brand events, and collaborations.",
    "faq.q2": "What is the fastest booking channel?",
    "faq.a2": "WhatsApp is the fastest option. Email is ideal for formal proposals and collaborations.",
    "faq.q3": "Can the music direction be tailored?",
    "faq.a3": "Yes. The set can be shaped around the event format, audience, and atmosphere you want to create.",
    "faq.q4": "Where is DJ Heyco based?",
    "faq.a4": "DJ Heyco is based in Santo Domingo and is available for qualified event inquiries."
  },
  es: {
    "meta.home.title": "DJ HEYCO | DJ premium en Santo Domingo",
    "meta.experience.title": "Experiencia | DJ HEYCO",
    "meta.bookings.title": "Reservas | DJ HEYCO",
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.bookings": "Reservas",
    "nav.instagram": "Instagram",
    "nav.bookNow": "Reservar",
    "cta.whatsapp": "Reservar por WhatsApp",
    "cta.experience": "Ver experiencia",
    "cta.bookingInquiry": "Iniciar solicitud",
    "cta.form": "Formulario",
    "cta.email": "Enviar correo",
    "cta.watchMore": "Ver más",
    "brand.phrase": "Todos los géneros • Todas las vibras • Toda la energía",
    "final.eyebrow": "Listo cuando el ambiente lo pida",
    "footer.copy": "DJ premium basado en Santo Domingo.",
    "services.clubs": "Clubes",
    "services.private": "Eventos privados",
    "services.weddings": "Bodas",
    "services.pool": "Pool parties",
    "services.birthdays": "Cumpleaños",
    "services.brand": "Eventos corporativos / marcas",
    "services.collabs": "Colaboraciones",
    "services.nightlife": "Eventos nocturnos",
    "home.hero.eyebrow": "DJ basado en Santo Domingo",
    "home.hero.title": "DJ Heyco — Sonido. Presencia. Experiencia.",
    "home.hero.text": "Sets premium para clubes, eventos privados, bodas, pool parties, celebraciones y momentos de marca que necesitan la energía correcta.",
    "home.position.eyebrow": "Posicionamiento artístico",
    "home.position.title": "Hecho para la noche. Listo para eventos privados.",
    "home.position.text": "DJ Heyco aporta transiciones limpias, selección enérgica y un sentido refinado del timing en cada ambiente, desde pistas de club hasta celebraciones elegantes.",
    "home.why.eyebrow": "Lo que aporta",
    "home.why.title": "Un set diseñado alrededor del público.",
    "home.why.card1.title": "Control del ambiente",
    "home.why.card1.text": "Leer la pista, construir momentum y saber cuándo cambiar la energía.",
    "home.why.card2.title": "Sonido versátil",
    "home.why.card2.text": "Rango open-format para clubes, bodas, fiestas privadas y experiencias de marca.",
    "home.why.card3.title": "Presencia premium",
    "home.why.card3.text": "Una imagen artística seria con el pulido que esperan los eventos profesionales.",
    "home.services.eyebrow": "Servicios",
    "home.services.title": "Formatos de evento con sonido a medida.",
    "home.video.eyebrow": "Energía en vivo",
    "home.video.title": "Una muestra del ambiente en movimiento.",
    "home.video.text": "Mira la energía de la presentación antes de hacer la llamada.",
    "home.final.title": "Haz que el próximo evento se sienta intencional.",
    "experience.hero.eyebrow": "Experiencia / Media",
    "experience.hero.title": "El sonido correcto para el momento correcto.",
    "experience.hero.text": "Una presencia open-format refinada para nightlife, celebraciones, eventos privados y momentos de marca.",
    "experience.profile.eyebrow": "Perfil artístico",
    "experience.profile.title": "Una presencia seria con energía adaptable.",
    "experience.profile.text": "Basado en Santo Domingo, DJ Heyco moldea cada set alrededor del público: elegante cuando el momento pide pulido, explosivo cuando la sala está lista para moverse.",
    "experience.energy.eyebrow": "Estilo musical",
    "experience.energy.title": "Versatilidad sin perder identidad.",
    "experience.energy.card1.title": "Nightlife",
    "experience.energy.card1.text": "Energía enfocada en club con movimiento limpio y ritmo seguro.",
    "experience.energy.card2.title": "Eventos privados",
    "experience.energy.card2.text": "Selección flexible para cumpleaños, bodas, pool parties y celebraciones.",
    "experience.energy.card3.title": "Momentos de marca",
    "experience.energy.card3.text": "Un sonido pulido para eventos corporativos, activaciones y colaboraciones.",
    "experience.gallery.eyebrow": "Identidad visual",
    "experience.gallery.title": "Imagen tan intencional como el set.",
    "experience.video.eyebrow": "Video destacado",
    "experience.video.title": "Energía de performance, presentada con intención.",
    "experience.presence.title": "Presencia que sostiene la sala.",
    "experience.presence.text": "La experiencia se construye con timing, gusto y la capacidad de moverse entre sonidos sin romper la atmósfera.",
    "experience.final.title": "Lleva esa misma energía a tu evento.",
    "bookings.hero.eyebrow": "Reservas",
    "bookings.hero.title": "Reserva fácil. Noche memorable.",
    "bookings.hero.text": "Para clubes, bodas, eventos privados, pool parties, cumpleaños, marcas, nightlife y colaboraciones.",
    "bookings.events.eyebrow": "Tipos de evento",
    "bookings.events.title": "Un sonido premium para el ambiente correcto.",
    "bookings.value.eyebrow": "Valor de reserva",
    "bookings.value.title": "Comunicación clara, energía refinada, entrega seria.",
    "bookings.value.text": "Cuéntanos el lugar, la fecha, la ubicación y la vibra que quieres. DJ Heyco ayuda a moldear el sonido alrededor del evento, no de una playlist genérica.",
    "bookings.process.eyebrow": "Proceso",
    "bookings.process.title": "Tres pasos para asegurar la energía.",
    "bookings.process.one.title": "Envía detalles",
    "bookings.process.one.text": "Comparte fecha, ubicación, tipo de evento y atmósfera esperada.",
    "bookings.process.two.title": "Confirmar encaje",
    "bookings.process.two.text": "Alinear horarios, dirección musical y requisitos de reserva.",
    "bookings.process.three.title": "Mover la sala",
    "bookings.process.three.text": "Llegar listo con un set diseñado para el momento.",
    "bookings.form.eyebrow": "Formulario",
    "bookings.form.title": "Empieza con lo esencial.",
    "bookings.form.text": "El formulario prepara un correo profesional. Para respuesta más rápida, WhatsApp sigue siendo el canal principal.",
    "bookings.direct.eyebrow": "Contacto directo",
    "bookings.direct.title": "Elige el canal que encaje con el momento.",
    "bookings.faq.eyebrow": "FAQ",
    "bookings.faq.title": "Antes de reservar.",
    "bookings.final.title": "Hagamos que el sonido vaya con la ocasión.",
    "form.name": "Nombre completo",
    "form.email": "Correo",
    "form.phone": "WhatsApp / Teléfono",
    "form.type": "Tipo de evento",
    "form.select": "Selecciona uno",
    "form.date": "Fecha del evento",
    "form.location": "Ubicación",
    "form.message": "Mensaje",
    "form.submit": "Preparar correo",
    "form.success": "Tu solicitud está lista. Abriendo tu app de correo; también puedes continuar directamente por WhatsApp.",
    "faq.q1": "¿Para qué eventos puedo reservar a DJ Heyco?",
    "faq.a1": "Clubes, eventos nocturnos, bodas, eventos privados, pool parties, cumpleaños, eventos de marca y colaboraciones.",
    "faq.q2": "¿Cuál es el canal más rápido?",
    "faq.a2": "WhatsApp es la opción más rápida. El correo es ideal para propuestas formales y colaboraciones.",
    "faq.q3": "¿Se puede adaptar la dirección musical?",
    "faq.a3": "Sí. El set puede ajustarse al formato del evento, al público y a la atmósfera que quieres crear.",
    "faq.q4": "¿Dónde está basado DJ Heyco?",
    "faq.a4": "DJ Heyco está basado en Santo Domingo y disponible para solicitudes de eventos calificados."
  },
  fr: {
    "meta.home.title": "DJ HEYCO | DJ premium à Saint-Domingue",
    "meta.experience.title": "Expérience | DJ HEYCO",
    "meta.bookings.title": "Réservations | DJ HEYCO",
    "nav.home": "Accueil",
    "nav.experience": "Expérience",
    "nav.bookings": "Réservations",
    "nav.instagram": "Instagram",
    "nav.bookNow": "Réserver",
    "cta.whatsapp": "Réserver sur WhatsApp",
    "cta.experience": "Voir l’expérience",
    "cta.bookingInquiry": "Commencer une demande",
    "cta.form": "Formulaire",
    "cta.email": "Réserver par email",
    "cta.watchMore": "Voir plus",
    "brand.phrase": "Tous les genres • Toutes les vibes • Toute l’énergie",
    "final.eyebrow": "Prêt quand la salle l’est",
    "footer.copy": "DJ premium basé à Saint-Domingue.",
    "services.clubs": "Clubs",
    "services.private": "Événements privés",
    "services.weddings": "Mariages",
    "services.pool": "Pool parties",
    "services.birthdays": "Anniversaires",
    "services.brand": "Événements corporate / marques",
    "services.collabs": "Collaborations",
    "services.nightlife": "Événements nightlife",
    "home.hero.eyebrow": "DJ basé à Saint-Domingue",
    "home.hero.title": "DJ Heyco — Son. Présence. Expérience.",
    "home.hero.text": "Des sets DJ premium pour clubs, événements privés, mariages, pool parties, célébrations et moments de marque qui demandent la bonne énergie.",
    "home.position.eyebrow": "Positionnement artistique",
    "home.position.title": "Pensé pour la nuit. Prêt pour les événements privés.",
    "home.position.text": "DJ Heyco apporte des transitions nettes, une sélection énergique et un sens précis du timing à chaque contexte, des clubs aux célébrations élégantes.",
    "home.why.eyebrow": "Ce qu’il apporte",
    "home.why.title": "Un set construit autour de la salle.",
    "home.why.card1.title": "Lecture du public",
    "home.why.card1.text": "Lire la piste, créer l’élan et savoir quand changer l’énergie.",
    "home.why.card2.title": "Son polyvalent",
    "home.why.card2.text": "Une approche open-format pour clubs, mariages, fêtes privées et expériences de marque.",
    "home.why.card3.title": "Présence premium",
    "home.why.card3.text": "Une image artistique sérieuse avec le niveau de finition attendu par les événements professionnels.",
    "home.services.eyebrow": "Services",
    "home.services.title": "Des formats d’événement avec un son sur mesure.",
    "home.video.eyebrow": "Énergie live",
    "home.video.title": "Un aperçu de la salle en mouvement.",
    "home.video.text": "Découvrez l’énergie de performance avant de confirmer.",
    "home.final.title": "Donnez une vraie intention au prochain événement.",
    "experience.hero.eyebrow": "Expérience / Média",
    "experience.hero.title": "Le bon son pour le bon moment.",
    "experience.hero.text": "Une présence open-format raffinée pour nightlife, célébrations, événements privés et moments de marque.",
    "experience.profile.eyebrow": "Profil artistique",
    "experience.profile.title": "Une présence sérieuse avec une énergie adaptable.",
    "experience.profile.text": "Basé à Saint-Domingue, DJ Heyco façonne chaque set autour du public: élégant quand le moment demande de la finesse, explosif quand la salle veut bouger.",
    "experience.energy.eyebrow": "Style musical",
    "experience.energy.title": "La polyvalence sans perdre l’identité.",
    "experience.energy.card1.title": "Nightlife",
    "experience.energy.card1.text": "Une énergie club avec une progression fluide et un rythme maîtrisé.",
    "experience.energy.card2.title": "Événements privés",
    "experience.energy.card2.text": "Une sélection flexible pour anniversaires, mariages, pool parties et célébrations.",
    "experience.energy.card3.title": "Moments de marque",
    "experience.energy.card3.text": "Un son soigné pour événements corporate, activations et collaborations.",
    "experience.gallery.eyebrow": "Identité visuelle",
    "experience.gallery.title": "Une image aussi intentionnelle que le set.",
    "experience.video.eyebrow": "Vidéo à la une",
    "experience.video.title": "Une énergie de performance cadrée avec intention.",
    "experience.presence.title": "Une présence qui porte la salle.",
    "experience.presence.text": "L’expérience repose sur le timing, le goût et la capacité à passer d’un son à l’autre sans casser l’atmosphère.",
    "experience.final.title": "Apportez cette même énergie à votre événement.",
    "bookings.hero.eyebrow": "Réservations",
    "bookings.hero.title": "Réservation simple. Soirée mémorable.",
    "bookings.hero.text": "Pour clubs, mariages, événements privés, pool parties, anniversaires, marques, nightlife et collaborations.",
    "bookings.events.eyebrow": "Types d’événement",
    "bookings.events.title": "Un son premium pour le bon contexte.",
    "bookings.value.eyebrow": "Valeur de réservation",
    "bookings.value.title": "Communication claire, énergie raffinée, prestation sérieuse.",
    "bookings.value.text": "Partagez la salle, la date, le lieu et l’ambiance souhaitée. DJ Heyco aide à façonner le son autour de l’événement, pas autour d’une playlist générique.",
    "bookings.process.eyebrow": "Processus",
    "bookings.process.title": "Trois étapes pour verrouiller l’énergie.",
    "bookings.process.one.title": "Envoyer les détails",
    "bookings.process.one.text": "Partagez date, lieu, type d’événement et atmosphère attendue.",
    "bookings.process.two.title": "Confirmer l’accord",
    "bookings.process.two.text": "Aligner horaires, direction musicale et besoins de réservation.",
    "bookings.process.three.title": "Faire bouger la salle",
    "bookings.process.three.text": "Arriver prêt avec un set pensé pour le moment.",
    "bookings.form.eyebrow": "Formulaire",
    "bookings.form.title": "Commencez par l’essentiel.",
    "bookings.form.text": "Le formulaire prépare un email professionnel. Pour la réponse la plus rapide, WhatsApp reste le canal principal.",
    "bookings.direct.eyebrow": "Contact direct",
    "bookings.direct.title": "Choisissez le canal adapté au moment.",
    "bookings.faq.eyebrow": "FAQ",
    "bookings.faq.title": "Avant de réserver.",
    "bookings.final.title": "Faisons correspondre le son à l’occasion.",
    "form.name": "Nom complet",
    "form.email": "Email",
    "form.phone": "WhatsApp / Téléphone",
    "form.type": "Type d’événement",
    "form.select": "Sélectionner",
    "form.date": "Date de l’événement",
    "form.location": "Lieu",
    "form.message": "Message",
    "form.submit": "Préparer l’email",
    "form.success": "Votre demande est prête. Ouverture de votre application email; vous pouvez aussi continuer directement sur WhatsApp.",
    "faq.q1": "Pour quels événements puis-je réserver DJ Heyco ?",
    "faq.a1": "Clubs, événements nightlife, mariages, événements privés, pool parties, anniversaires, événements de marque et collaborations.",
    "faq.q2": "Quel est le canal le plus rapide ?",
    "faq.a2": "WhatsApp est l’option la plus rapide. L’email est idéal pour les propositions formelles et collaborations.",
    "faq.q3": "La direction musicale peut-elle être adaptée ?",
    "faq.a3": "Oui. Le set peut être adapté au format de l’événement, au public et à l’atmosphère souhaitée.",
    "faq.q4": "Où DJ Heyco est-il basé ?",
    "faq.a4": "DJ Heyco est basé à Saint-Domingue et disponible pour des demandes d’événements qualifiées."
  }
};

const getText = (key, lang = currentLang()) => translations[lang]?.[key] || translations.en[key] || key;
const currentLang = () => localStorage.getItem("djheyco_language") || "en";

function setLanguage(lang) {
  localStorage.setItem("djheyco_language", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = getText(el.dataset.i18n, lang);
  });
  const page = document.documentElement.dataset.page;
  const title = getText(`meta.${page}.title`, lang);
  document.title = title;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
}

function buildLanguageSwitchers() {
  document.querySelectorAll("[data-lang-switcher]").forEach((switcher) => {
    switcher.innerHTML = "";
    languages.forEach((language) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lang-btn";
      button.dataset.lang = language.code;
      button.textContent = language.label;
      button.addEventListener("click", () => setLanguage(language.code));
      switcher.appendChild(button);
    });
  });
}

function initMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initHeader() {
  const header = document.querySelector("[data-header]");
  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initActiveNav() {
  const page = document.documentElement.dataset.page;
  document.querySelectorAll(`[data-nav="${page}"]`).forEach((item) => item.classList.add("is-active"));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  items.forEach((item) => observer.observe(item));
}

function initFaq() {
  document.querySelectorAll("[data-faq]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      item?.classList.toggle("is-open");
    });
  });
}

function initBookingForm() {
  const form = document.querySelector("[data-booking-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`DJ Heyco Booking Inquiry - ${data.get("type") || "Event"}`);
    const body = encodeURIComponent([
      `Full Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `WhatsApp / Phone: ${data.get("phone")}`,
      `Event Type: ${data.get("type")}`,
      `Event Date: ${data.get("date")}`,
      `Location: ${data.get("location")}`,
      "",
      "Message:",
      data.get("message")
    ].join("\n"));
    const status = form.querySelector("[data-form-status]");
    if (status) status.textContent = getText("form.success");
    window.location.href = `mailto:djheyco.ht@gmail.com?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildLanguageSwitchers();
  setLanguage(currentLang());
  initMenu();
  initHeader();
  initActiveNav();
  initReveal();
  initFaq();
  initBookingForm();
});
