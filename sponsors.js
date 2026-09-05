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
      logo: "sponsors/sponsor-main-1.png"
    },

    {
      name: "Andrea Laconi",
      logo: "sponsors/sponsor-main-2.png"
    }

  ],



  /* =========================
     COLLABORATORI
  ========================= */

  collaborators: [

    {
      name: "Protezione Civile Sadali",
      logo: "sponsors/collaboratore-1.png"
    },

    {
      name: "S'Urzu e su Pimperimponi",
      logo: "sponsors/collaboratore-2.png"
    },

    {
      name: "Associazione Culturale Sadali Antiga",
      logo: "sponsors/collaboratore-3.png"
    },

    {
      name: "San Valentino Sadali",
      logo: "sponsors/collaboratore-4.png"
    },

    {
      name: "Gruppo Culturale Alessandra Sorcinelli",
      logo: "sponsors/collaboratore-5.png"
    },

    {
      name: "Studio Olistico Seulo",
      logo: "sponsors/collaboratore-6.png"
    }

  ],



  /* =========================
     SPONSOR PRINCIPALI
  ========================= */

  principal: [

    {
      name: "Farmacia Elena Fenu",
      logo: "sponsors/sponsor-1.png"
    }

  ],



  /* =========================
     SPONSOR
  ========================= */

  standard: [

    {
      name: "Kòru Agri Risto Pizzeria",
      logo: "sponsors/sponsor-2.png"
    },

    {
      name: "S'Ambasciada Sarda",
      logo: "sponsors/sponsor-3.png"
    }

  ],



  /* =========================
     SOSTENITORI
  ========================= */

  supporters: [

    {
      name: "Amelia Market F.lli Mura",
      logo: "sponsors/sponsor-4.png"
    }

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
