/* =========================
   ADOBIARTIS 2026
   PROGRAMME DATA
========================= */


/* =========================
   CATEGORIES
========================= */

const categories = [

  {
    id: "MU",
    name: "Musica"
  },

  {
    id: "PL",
    name: "Poesia / Lettura"
  },

  {
    id: "LA",
    name: "Laboratorio"
  },

  {
    id: "SP",
    name: "Spettacolo"
  },

  {
    id: "BA",
    name: "Bambini"
  },

  {
    id: "AO",
    name: "Artisti all'opera"
  },

  {
    id: "FD",
    name: "Food & Drinks"
  }

];


/* =========================
   PROGRAMME PLACES
========================= */

const places = [

  {
    id: "P01",
    name: "Casa Podda"
  },

  {
    id: "P02",
    name: "Giardino Podda"
  },

  {
    id: "P03",
    name: "L'Incrocio"
  },

  {
    id: "P04",
    name: "Piazza Eleonora d'Arborea"
  },

  {
    id: "P05",
    name: "Piazza Municipio"
  },

  {
    id: "P06",
    name: "Itinerante"
  },

  {
    id: "P07",
    name: "Dietro alla Chiesa "
  },

  {
    id: "P08",
    name: "Vicino alla Stazione"
  },

  {
    id: "P09",
    name: "Ristorante degli Artisti"
  },

  {
    id: "P10",
    name: "Punto Ristoro Su Stagno"
  },

  {
    id: "P11",
    name: "Chiosco degli Artisti"
  },

  {
    id: "P12",
    name: "Mulino Vecchio"
  }

];


/* =========================
   PROGRAMME
========================= */

const programme = [

  /* =========================
     SABATO
  ========================= */
    
       {
    day: "sabato",
    time: "18:00",
    endTime: "19:00",
    title: "Alì e gli amici di Giuseppe Carta presentano il romanzo La morale di Santander",
    categories: ["PL"],
    placeId: "P06",
    description: ""
  },
   
   {
    day: "sabato",
    time: "18:00",
    endTime: "19:00",
    title: "Paolo Pittiu - Tooling del Cuoio",
    categories: ["LA"],
    placeId: "P12",
    description: ""
  },
   
   {
    day: "sabato",
    time: "18:00",
    endTime: "20:00",
    title: "Rebel Blues Band",
    categories: ["MU"],
    placeId: "P05",
    description: ""
  },

     {
    day: "sabato",
    time: "12:00",
    endTime: "13:00",
    title: "Trio musicale di Seulo con Cover Guccini",
    categories: ["MU"],
    placeId: "P05",
    description: ""
  },
   
  {
    day: "sabato",
    time: "10:00",
    endTime: "20:00",
    title: "Claudio Lallai - Scultura Legno",
    categories: ["AO"],
    placeId: "P07",
    description: ""
  },

  {
    day: "sabato",
    time: "12:30",
    endTime: "15:00",
    title: "Pranzo aperto",
    categories: ["FD"],
    placeId: "P09",
    description: ""
  },

  {
    day: "sabato",
    time: "20:00",
    endTime: "21:00",
    title: "Sergio Carboni - Giocoliere",
    categories: ["SP", "BA"],
    placeId: "P04",
    description: ""
  },

  {
    day: "sabato",
    time: "20:00",
    endTime: "22:30",
    title: "Cena aperta",
    categories: ["FD"],
    placeId: "P09",
    description: ""
  },

  {
    day: "sabato",
    time: "17:00",
    endTime: "18:00",
    title: "Lia Servi - lettura racconti",
    categories: ["PL"],
    placeId: "P01",
    description: ""
  },

     {
    day: "sabato",
    time: "10:00",
    endTime: "20:00",
    title: "Giostraio Cecco Locc",
    categories: ["BA"],
    placeId: "P07",
    description: ""
  },

   
  /* =========================
     DOMENICA
  ========================= */

   {
    day: "domenica",
    time: "16:00",
    endTime: "17:00",
    title: "Paolo Pittiu - Tooling del Cuoio",
    categories: ["LA"],
    placeId: "P12",
    description: ""
  },
   
     {
    day: "domenica",
    time: "15:30",
    endTime: "16:00",
    title: "Valentina Pilia - Flamenco",
    categories: ["SP"],
    placeId: "P04",
    description: ""
  },

     {
    day: "domenica",
    time: "11:30",
    endTime: "12:00",
    title: "Valentina Pilia - Laboratorio Ritmico",
    categories: ["BA"],
    placeId: "P04",
    description: ""
  },
   
  {
    day: "domenica",
    time: "12:30",
    endTime: "15:00",
    title: "Pranzo aperto",
    categories: ["FD"],
    placeId: "P09",
    description: ""
  },

  {
    day: "domenica",
    time: "20:00",
    endTime: "22:30",
    title: "Cena aperta",
    categories: ["FD"],
    placeId: "P09",
    description: ""
  },

     {
    day: "domenica",
    time: "11:00",
    endTime: "12:00",
    title: "Lia Servi - lettura racconti",
    categories: ["PL"],
    placeId: "P01",
    description: ""
  },

        {
    day: "domenica",
    time: "10:00",
    endTime: "20:00",
    title: "Giostraio Cecco Locc",
    categories: ["BA"],
    placeId: "P07",
    description: ""
  },

   
];
