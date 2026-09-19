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
    id: "P04",
    name: "Piazza Eleonora d'Arborea"
  },

  {
    id: "P05",
    name: "Davanti alla Chiesa/Cascata"
  },

  {
    id: "P06",
    name: "Itineranti"
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
    id: "P11",
    name: "Lungo il Persorso"
  },

  {
    id: "P12",
    name: "Mulino Vecchio"
  },

     {
    id: "P13",
    name: "Fragus e Saboris"
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
    time: "14:30",
    endTime: "15:30",
    title: "Max - Musicista",
    categories: ["MU"],
    placeId: "P05",
    description: ""
  },

                    {
    day: "sabato",
    time: "14:30",
    endTime: "16:00",
    title: "Gruppo Culturale Alessandra Sorcinelli - Viari Artisti",
    categories: ["AO"],
    placeId: "P01",
    description: "Letture e Racconti vari"
  },

                       {
    day: "sabato",
    time: "21:30",
    endTime: "22:30",
    title: "Gruppo Culturale Alessandra Sorcinelli - Viari Artisti",
    categories: ["AO"],
    placeId: "P01",
    description: "Letture e Racconti vari"
  },
                 {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Antonio Aracu - Scultore",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },
   
              {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Ferruccio  Ferru - Scultore",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },
           {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Antonello Pilittu - Scultore",
    categories: ["AO"],
    placeId: "P05",
    description: ""
  },

        {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Franco Carcangiu - Arti Varie",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },
     {
    day: "sabato",
    time: "14:30",
    endTime: "15:30",
    title: "Valentina Pilia - Laboratorio Ritmico",
    categories: ["BA" , "LA"],
    placeId: "P04",
    description: ""
  },

       {
       day: "sabato",
    time: "23:30",
    endTime: "01:30",
    title: "DJ Set con Daniele",
    categories: ["MU"],
    placeId: "P04",
    description: ""
  },
   
    {
       day: "sabato",
    time: "19:30",
    endTime: "20:30",
    title: "Maria Luciani – Dalla Mitteleuropa alla Spagna - concerto per chitarra classica",
    categories: ["MU"],
    placeId: "P01",
    description: "Un viaggio musicale da Mertz al cante jondo spagnolo di Torroba, Albéniz e Mompou."
  },
   
 {
       day: "sabato",
    time: "11:00",
    endTime: "13:00",
    title: "Mauro Marci - trattamenti Olistici",
    categories: ["LA"],
    placeId: "P05",
    description: "Reiki Pranoterapia bioenergetica applicata Massaggi Misti"
  },

    {
       day: "sabato",
    time: "14:30",
    endTime: "19:30",
    title: "Mauro Marci - trattamenti Olistici",
    categories: ["LA"],
    placeId: "P05",
    description: "Reiki Pranoterapia bioenergetica applicata Massaggi Misti"
  },
                       {
    day: "sabato",
    time: "18:00",
    endTime: "19:00",
    title: "L'Arte del Combattimento",
    categories: ["SP"],
    placeId: "P02",
    description: "Un viaggio tra Epoche e Continenti"
  },
   
                    {
    day: "sabato",
    time: "21:00",
    endTime: "22:30",
    title: "Stefano Lusso - Musica e Cover nei Vicoli di Sadali",
    categories: ["MU"],
    placeId: "P06",
    description: ""
  },
       
{
    day: "sabato",
    time: "16:00",
    endTime: "16:30",
    title: "Irene Marceddu - Spazio della Poesia",
    categories: ["PL"],
    placeId: "P01",
    description: ""
  },

{
    day: "sabato",
    time: "15:30",
    endTime: "17:00",
    title: "Vincenzo Mazza - Laboratorio di Percussioni Africane",
    categories: ["LA" , "MU" , "BA"],
    placeId: "P02",
    description: "Strumenti forniti, se hai un djembe portalo."
  },

                       {
    day: "sabato",
    time: "17:00",
    endTime: "17:30",
    title: "Civo Lerie - Su oe cun sos corros de atalzu",
    categories: ["SP", "BA"],
    placeId: "P04",
    description: "racconto di una antica paristoria thiesina, che parla della Mamma dei Venti, di una maledizione, di un bue dalle corna d' acciaio e due sorelle chiamate a rompere l' incanto. Dialoghi in logudorese"
  },

                    {
    day: "sabato",
    time: "19:00",
    endTime: "20:00",
    title: "Sirboni abriu - Cinghiale bianco (Funambolo)",
    categories: ["SP"],
    placeId: "P02",
    description: "Collettivo idealista"
  },
   
                 {
    day: "sabato",
    time: "17:00",
    endTime: "18:00",
    title: "Degustazione Erboristica",
    categories: ["FD"],
    placeId: "P13",
    description: ""
  },

                 {
    day: "sabato",
    time: "21:30",
    endTime: "22:30",
    title: "Concerto: Whjtey",
    categories: ["MU"],
    placeId: "P04",
    description: ""
  },
              {
    day: "sabato",
    time: "22:30",
    endTime: "00:00",
    title: "Concerto: Red Moon Diamond",
    categories: ["MU"],
    placeId: "P04",
    description: "Musica rock retro psichedelico con tratti prog"
  },
           {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Anna Rita Atzori e Marco Ambu - Pittura di un Quadro con poesie lette",
    categories: ["AO" , "PL"],
    placeId: "P12",
    description: ""
  },
        {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Ugo Porceddu - Scultura Pietra",
    categories: ["AO"],
    placeId: "P12",
    description: ""
  },

   
     {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Cherubino Mungianu e Paolo Mura - Scultura Pietra",
    categories: ["AO"],
    placeId: "P08",
    description: ""
  },
   
          {
    day: "sabato",
    time: "17:30",
    endTime: "18:00",
    title: "Paola Tomasi, armonizzazione sonora: VOCE E SUONI CHE CURANO",
    categories: ["LA", "PL"],
    placeId: "P01",
    description: ""
  },
       {
    day: "sabato",
    time: "18:00",
    endTime: "19:30",
    title: "'La morale di Santander' con Ali e gli Amici dell'Autore'",
    categories: ["PL"],
    placeId: "P01",
    description: ""
  },
   
   {
    day: "sabato",
    time: "18:00",
    endTime: "19:00",
    title: "Paolo Pittiu - Tooling del Cuoio",
    categories: ["LA"],
    placeId: "P12",
    description: "Borse in pellami pregiati con inserti in cuoio ispirati alla cultura nuragica. Gioielli realizzati con la tecnica dello sbalzo, ispirati ai simboli della cultura nuragica"
  },
   

  {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Cesare Chilotti e Guido Ghiani - Scultura Legno",
    categories: ["AO"],
    placeId: "P07",
    description: ""
  },
   
  {
    day: "sabato",
    time: "11:00",
    endTime: "19:00",
    title: "Cesare Chilotti - Scultura Legno",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },

  {
    day: "sabato",
    time: "12:30",
    endTime: "15:00",
    title: "Pranzo al Ristorante degli Artisti - Buon Apetito",
    categories: ["FD"],
    placeId: "P05",
    description: ""
  },

  {
    day: "sabato",
    time: "20:00",
    endTime: "21:00",
    title: "Sergio Carboni - Giocoliere",
    categories: ["SP", "BA"],
    placeId: "P05",
    description: ""
  },

  {
    day: "sabato",
    time: "20:00",
    endTime: "22:30",
    title: "Cena al Ristorante degli Artisti - Buon Apetito",
    categories: ["FD"],
    placeId: "P05",
    description: ""
  },

  {
    day: "sabato",
    time: "16:30",
    endTime: "17:30",
    title: "Lia Servi e Lorena Carta - lettura racconti",
    categories: ["PL"],
    placeId: "P01",
    description: ""
  },

     {
    day: "sabato",
    time: "11:00",
    endTime: "20:00",
    title: "Giostraio Checco Locci",
    categories: ["BA"],
    placeId: "P07",
    description: ""
  },

          {
       day: "sabato",
    time: "15:30",
    endTime: "17:00",
    title: "Concerto: Tappeti Lebowsky snc",
    categories: ["MU"],
    placeId: "P05",
    description: "Musica popolare"
  },

   
  /* =========================
     DOMENICA
  ========================= */

   {
    day: "domenica",
    time: "16:30",
    endTime: "17:00",
    title: "Irene Marceddu - Spazio della Poesia",
    categories: ["PL"],
    placeId: "P01",
    description: ""
  },
                       {
    day: "domenica",
    time: "11:00",
    endTime: "13:00",
    title: "Gruppo Culturale Alessandra Sorcinelli - Viari Artisti",
    categories: ["AO"],
    placeId: "P01",
    description: "Letture e Racconti vari"
  },

                       {
    day: "domenica",
    time: "15:00",
    endTime: "16:30",
    title: "Gruppo Culturale Alessandra Sorcinelli - Viari Artisti",
    categories: ["AO"],
    placeId: "P01",
    description: "Letture e Racconti vari"
  },
   
                       {
    day: "domenica",
    time: "15:00",
    endTime: "16:00",
    title: "Max - Musicista",
    categories: ["MU"],
    placeId: "P04",
    description: ""
  },
   
                 {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Antonio Aracu    - Scultore",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },
   
              {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Ferruccio  Ferru - Scultore",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },
           {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Antonello Pilittu - Scultore",
    categories: ["AO"],
    placeId: "P05",
    description: ""
  },

        {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Franco Carcangiu - Arti Varie",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },
   
       {
       day: "domenica",
    time: "12:30",
    endTime: "14:00",
    title: "Concerto: Tappeti Lebowsky snc",
    categories: ["MU"],
    placeId: "P05",
    description: "Musica popolare"
  },
   
    {
       day: "domenica",
    time: "10:00",
    endTime: "13:00",
    title: "Mauro Marci - trattamenti Olistici",
    categories: ["LA"],
    placeId: "P05",
    description: "Reiki Pranoterapia bioenergetica applicata Massaggi Misti"
  },

    {
       day: "domenica",
    time: "14:30",
    endTime: "17:30",
    title: "Mauro Marci - trattamenti Olistici",
    categories: ["LA"],
    placeId: "P05",
    description: "Reiki Pranoterapia bioenergetica applicata Massaggi Misti"
  },
   
           {
    day: "domenica",
    time: "20:00",
    endTime: "20:30",
    title: "Qua Terna c'inquina. È un omaggio alla rivolta degli ulivi di Selargius",
    categories: ["SP","MU"],
    placeId: "P04",
    description: "Simone Olla, Sandro Ullasci, Stefano Manca"
  },

        {
    day: "domenica",
    time: "11:00",
    endTime: "12:30",
    title: "Trio musicale di Seulo con Cover Guccini",
    categories: ["MU"],
    placeId: "P05",
    description: ""
  },
   
                 {
    day: "domenica",
    time: "18:00",
    endTime: "19:00",
    title: "Tradizione in Cammino: Quadri di Abiti Tradizionali a cura dell'Associazione Sàdili Antiga",
    categories: ["SP"],
    placeId: "P01",
    description: "Un percorso guidato alla scoperta dei tessuti, delle forme e della storia dell'abbigliamento tradizionale."
  },

                       {
    day: "domenica",
    time: "13:00",
    endTime: "15:00",
    title: "Alessio Lilliu - Ferratura del cavallo Taki",
    categories: ["SP", "AO"],
    placeId: "P02",
    description: ""
  },
   
                 {
    day: "domenica",
    time: "17:00",
    endTime: "19:30",
    title: "Two in Blues",
    categories: ["MU"],
    placeId: "P04",
    description: ""
  },
                             {
    day: "domenica",
    time: "16:30",
    endTime: "18:00",
    title: "Vincenzo Mazza - Laboratorio di percussioni africane",
    categories: ["LA" , "BA", "MU"],
    placeId: "P02",
    description: "Strumenti forniti, se hai un djembe portalo."
  },
   
                          {
    day: "domenica",
    time: "11:00",
    endTime: "11:30",
    title: "Civo Lerie - Storie a Manovella",
    categories: ["SP", "BA"],
    placeId: "P04",
    description: "spettacolo di raccontastorie con un teatrino a manovella ispirato al kamishibai giapponese"
  },
                          {
    day: "domenica",
    time: "16:00",
    endTime: "16:30",
    title: "Civo Lerie - Su oe cun sos corros de atalzu",
    categories: ["SP", "BA"],
    placeId: "P04",
    description: "racconto di una antica paristoria thiesina, che parla della Mamma dei Venti, di una maledizione, di un bue dalle corna d' acciaio e due sorelle chiamate a rompere l' incanto. Dialoghi in logudorese"
  },
   
       {
       day: "domenica",
    time: "09:00",
    endTime: "10:00",
    title: "Funambolo - vuoi provare?",
    categories: ["LA" , "BA"],
    placeId: "P02",
    description: ""
  },

   
    {
       day: "domenica",
    time: "10:00",
    endTime: "11:00",
    title: "Sirboni abriu - Cinghiale bianco (Funambolo)",
    categories: ["SP"],
    placeId: "P02",
    description: "Collettivo idealista"
  },

                    {
    day: "domenica",
    time: "10:00",
    endTime: "11:00",
    title: "Davide Brai - Giochi con i piu piccoli",
    categories: ["BA"],
    placeId: "P04",
    description: ""
  },

                    {
    day: "domenica",
    time: "19:30",
    endTime: "20:00",
    title: "Davide Brai - Spettacolo sui Trampoli",
    categories: ["SP"],
    placeId: "P04",
    description: ""
  },
                 {
    day: "domenica",
    time: "17:00",
    endTime: "18:00",
    title: "Degustazione Erboristica",
    categories: ["FD"],
    placeId: "P13",
    description: ""
  },
   
           {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Anna Rita Atzori e Marco Ambu - Pittura di un Quadro con poesie lette",
    categories: ["AO" , "PL"],
    placeId: "P12",
    description: ""
  },
   
           {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Ugo Porceddu - Scultura Pietra",
    categories: ["AO"],
    placeId: "P12",
    description: ""
  },
   
        {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Cherubino Mungianu e Paolo Mura - Scultura Pietra",
    categories: ["AO"],
    placeId: "P08",
    description: ""
  },
   
 {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Guido Ghiani - Scultura Legno",
    categories: ["AO"],
    placeId: "P07",
    description: ""
  },
   
  {
    day: "domenica",
    time: "11:00",
    endTime: "19:00",
    title: "Cesare Chilotti - Scultura Legno",
    categories: ["AO"],
    placeId: "P02",
    description: ""
  },
   
      {
    day: "domenica",
    time: "19:30",
    endTime: "20:00",
    title: "Chiusura della Lotteria dell'Arte - con Alberto Farris",
    categories: ["SP"],
    placeId: "P04",
    description: ""
  },

   
   {
    day: "domenica",
    time: "16:00",
    endTime: "17:00",
    title: "Paolo Pittiu - Tooling del Cuoio",
    categories: ["LA"],
    placeId: "P12",
    description: "Borse in pellami pregiati con inserti in cuoio ispirati alla cultura nuragica. Gioielli realizzati con la tecnica dello sbalzo, ispirati ai simboli della cultura nuragica"
  },
   
  {
    day: "domenica",
    time: "12:30",
    endTime: "15:00",
    title: "Pranzo al Ristorante degli Artisti - Buon Apetito",
    categories: ["FD"],
    placeId: "P05",
    description: ""
  },

  {
    day: "domenica",
    time: "20:00",
    endTime: "22:30",
    title: "Cena al Ristorante degli Artisti - Buon Apetito",
    categories: ["FD"],
    placeId: "P05",
    description: ""
  },

     {
    day: "domenica",
    time: "17:00",
    endTime: "18:00",
    title: "Lia Servi e Lorena Carta - lettura racconti",
    categories: ["PL"],
    placeId: "P01",
    description: ""
  },

        {
    day: "domenica",
    time: "10:00",
    endTime: "19:00",
    title: "Giostraio Checco Locci",
    categories: ["BA"],
    placeId: "P07",
    description: ""
  },

   
];
