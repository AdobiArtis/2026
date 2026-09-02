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
   PLACES
   Replace these with the
   final places from your map
========================= */

const places = [

  {
    id: "P01",
    name: "Casa Podda"
  },

  {
    id: "P02",
    name: "Area Bambini"
  },

  {
    id: "P03",
    name: "Piazza San Valentino"
  },

  {
    id: "P04",
    name: "Palco principale"
  },

  {
    id: "P05",
    name: "Area Food & Drinks"
  }

];


/* =========================
   PROGRAMME
========================= */

const programme = [

  /* ---------- SABATO ---------- */

  {
    day: "sabato",
    time: "10:00",
    endTime: "20:00",
    title: "Artisti all'opera",
    category: "AO",
    placeId: "P01",
    description: ""
  },

  {
    day: "sabato",
    time: "11:00",
    endTime: "12:00",
    title: "Dipingi con noi",
    category: "BA",
    placeId: "P02",
    description: ""
  },

  {
    day: "sabato",
    time: "12:00",
    endTime: "24:00",
    title: "Food & Drinks",
    category: "FD",
    placeId: "P05",
    description: ""
  },

  {
    day: "sabato",
    time: "15:00",
    endTime: "17:00",
    title: "Trucco bambini",
    category: "BA",
    placeId: "P02",
    description: ""
  },

  {
    day: "sabato",
    time: "17:00",
    endTime: "17:45",
    title: "Giocoliere",
    category: "SP",
    placeId: "P03",
    description: ""
  },

  {
    day: "sabato",
    time: "18:00",
    endTime: "19:00",
    title: "Poesia e letture",
    category: "PL",
    placeId: "P01",
    description: ""
  },

  {
    day: "sabato",
    time: "19:00",
    endTime: "19:30",
    title: "Sputafuoco",
    category: "SP",
    placeId: "P03",
    description: ""
  },

  {
    day: "sabato",
    time: "21:00",
    endTime: "23:00",
    title: "Musica dal vivo",
    category: "MU",
    placeId: "P04",
    description: ""
  },


  /* ---------- DOMENICA ---------- */

  {
    day: "domenica",
    time: "10:00",
    endTime: "20:00",
    title: "Artisti all'opera",
    category: "AO",
    placeId: "P01",
    description: ""
  },

  {
    day: "domenica",
    time: "11:30",
    endTime: "13:00",
    title: "Costruzione LEGO",
    category: "BA",
    placeId: "P02",
    description: ""
  },

  {
    day: "domenica",
    time: "12:00",
    endTime: "22:00",
    title: "Food & Drinks",
    category: "FD",
    placeId: "P05",
    description: ""
  },

  {
    day: "domenica",
    time: "16:00",
    endTime: "16:45",
    title: "Pagliacci",
    category: "SP",
    placeId: "P03",
    description: ""
  },

  {
    day: "domenica",
    time: "18:00",
    endTime: "18:45",
    title: "Giocoliere",
    category: "SP",
    placeId: "P03",
    description: ""
  },

  {
    day: "domenica",
    time: "20:00",
    endTime: "22:00",
    title: "Musica dal vivo",
    category: "MU",
    placeId: "P04",
    description: ""
  }

];
