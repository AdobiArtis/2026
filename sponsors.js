/* =========================
   ADOBIARTIS 2026
   SPONSOR DATA
========================= */


const sponsorsData = {


  /* =========================
     PARTNER PRINCIPALI
  ========================= */

  main: [

    {
      name: "Comune di Sadali",
      logo: "sponsors/sponsor-main-comune.png"
    },

    {
      name: "La Compagnia dell'Arte APS",
      logo: "sponsors/sponsor-main-CdA.png"
    },


  ],



  /* =========================
     COLLABORATORI
  ========================= */

  collaborators: [

     {
      name: "Gruppo Culturale Alessandra Sorcinelli",
      logo: "sponsors/collaboratore-sorcinelli.png"
    },

   {
      name: "S'Urzu e su Pimperimponi",
      logo: "sponsors/collaboratore-surzu.png"
    },

         {
      name: "Studio Olistico Seulo",
      logo: "sponsors/collaboratore-studioolistico.png"
    },
     
     {
      name: "Protezione Civile Sadali",
      logo: "sponsors/collaboratore-protezionecivile.png"
    },


    {
      name: "Associazione Culturale Sadali Antiga",
      logo: "sponsors/collaboratore-sadaliantiga.png"
    },

    {
      name: "San Valentino Sadali",
      logo: "sponsors/collaboratore-sanvalentino.png"
    }


  ],



  /* =========================
     SPONSOR PRINCIPALI
  ========================= */

  principal: [

         {
      name: "Andrea Laconi",
      logo: "sponsors/sponsor-main-andraLaconi.png"
    }

  ],



  /* =========================
     SPONSOR
  ========================= */

  standard: [

              {
      name: "Kòru Agri Risto Pizzeria",
      logo: "sponsors/sponsor-koru.png"
    },
     
    {
      name: "Farmacia Elena Fenu",
      logo: "sponsors/sponsor-farmaciafenu.png"
    },

         {
      name: "Amelia Market F.lli Mura",
      logo: "sponsors/sponsor-ameliamarket.png"
    },

              {
      name: "Bar Ristorante Da Corrado e Francesca",
      logo: "sponsors/sponsor-corrado.png"
    }

  ],



  /* =========================
     SOSTENITORI
  ========================= */

  supporters: [

    {
      name: "S'Ambasciada Sarda",
      logo: "sponsors/sponsor-sambasciada.png"
    },

         {
      name: "Fragus e Saboris",
      logo: "sponsors/sponsor-fragus.png"
    },

         {
      name: "Matta Raffaela Alimenti",
      logo: "sponsors/sponsor-matta.png"
    },

              {
      name: "Pescheria Il Molo",
      logo: "sponsors/sponsor-pescheria.png"
    },

              {
      name: "Al Bar di Su",
      logo: "sponsors/sponsor-albardisu.png"
    },

  ]

};



/* =========================
   CREATE SPONSOR CARD
========================= */

function createSponsorCard(item, type) {

  const card =
    document.createElement("div");

  card.classList.add(
    "sponsor-card"
  );


  if (type === "main") {

    card.classList.add(
      "sponsor-main"
    );

  }


  if (type === "collaborator") {

    card.classList.add(
      "collaborator-card"
    );

  }


  if (type === "principal") {

    card.classList.add(
      "sponsor-principal"
    );

  }


  if (type === "supporter") {

    card.classList.add(
      "sponsor-supporter"
    );

  }



  const logoWrapper =
    document.createElement("div");

  logoWrapper.classList.add(
    "sponsor-logo"
  );



  const img =
    document.createElement("img");

  img.src =
    item.logo;

  img.alt =
    item.name;

  img.loading =
    "lazy";



  const name =
    document.createElement("div");

  name.classList.add(
    "sponsor-name"
  );

  name.textContent =
    item.name;



  logoWrapper.appendChild(
    img
  );

  card.appendChild(
    logoWrapper
  );

  card.appendChild(
    name
  );


  return card;

}



/* =========================
   RENDER GROUP
========================= */

function renderSponsorGroup(
  containerId,
  items,
  type
) {

  const container =
    document.getElementById(
      containerId
    );


  if (!container) {

    return;

  }


  container.innerHTML =
    "";


  items.forEach(
    function(item) {

      const card =
        createSponsorCard(
          item,
          type
        );

      container.appendChild(
        card
      );

    }
  );

}



/* =========================
   RENDER ALL
========================= */

function renderSponsors() {

  renderSponsorGroup(
    "main-sponsors",
    sponsorsData.main,
    "main"
  );


  renderSponsorGroup(
    "collaborators",
    sponsorsData.collaborators,
    "collaborator"
  );


  renderSponsorGroup(
    "sponsors-principal",
    sponsorsData.principal,
    "principal"
  );


  renderSponsorGroup(
    "sponsors-standard",
    sponsorsData.standard,
    "standard"
  );


  renderSponsorGroup(
    "sponsors-supporters",
    sponsorsData.supporters,
    "supporter"
  );

}



/* =========================
   START
========================= */

document.addEventListener(
  "DOMContentLoaded",
  renderSponsors
);
