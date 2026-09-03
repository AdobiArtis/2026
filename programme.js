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
    name: "Cecco Locc - Giostraio"
  },

  {
    id: "P07",
    name: "Dietro alla Giostra"
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
    time: "19:00",
    endTime: "20:00",
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


  /* =========================
     DOMENICA
  ========================= */

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
  }

];
