/* =========================
   ADOBIARTIS 2026
   WEBSITE
========================= */


let selectedDay = "sabato";

let selectedCategory = "Tutti";

let selectedPlace = "Tutti";


/* =========================
   MAIN NAVIGATION
========================= */

const navButtons =
  document.querySelectorAll(
    ".nav-button"
  );


const sections =
  document.querySelectorAll(
    ".page-section"
  );


navButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const target =
        button.dataset.section;


      navButtons.forEach(nav => {

        nav.classList.remove(
          "active"
        );

      });


      button.classList.add(
        "active"
      );


      sections.forEach(section => {

        section.classList.remove(
          "active-section"
        );

      });


      const targetSection =
        document.getElementById(
          target
        );


      if (targetSection) {

        targetSection.classList.add(
          "active-section"
        );

      }


      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

});


/* =========================
   HELPERS
========================= */


function getPlace(placeId) {

  return places.find(
    place =>
      place.id === placeId
  );

}


function getCategory(categoryId) {

  return categories.find(
    category =>
      category.id === categoryId
  );

}


function convertTimeToMinutes(time) {

  if (time === "24:00") {
    return 1440;
  }


  const parts =
    time.split(":");


  const hours =
    Number(parts[0]);


  const minutes =
    Number(parts[1]);


  return (
    hours * 60
    +
    minutes
  );

}


/* =========================
   CREATE PLACE FILTER
========================= */

function createPlaceFilter() {

  const select =
    document.getElementById(
      "place-filter"
    );


  if (!select) {
    return;
  }


  places.forEach(place => {

    const option =
      document.createElement(
        "option"
      );


    option.value =
      place.id;


    option.textContent =
  place.name;


    select.appendChild(
      option
    );

  });


  select.addEventListener(
    "change",
    () => {

      selectedPlace =
        select.value;


      renderProgramme();

    }
  );

}


/* =========================
   RENDER PROGRAMME
========================= */

function renderProgramme() {

  const container =
    document.getElementById(
      "programme-list"
    );


  if (!container) {
    return;
  }


  container.innerHTML = "";


  const filteredProgramme =
    programme

      .filter(event =>
        event.day ===
        selectedDay
      )

      .filter(event =>
        selectedCategory ===
          "Tutti"
        ||
        event.category ===
          selectedCategory
      )

      .filter(event =>
        selectedPlace ===
          "Tutti"
        ||
        event.placeId ===
          selectedPlace
      )

      .sort(
        (a, b) =>
          convertTimeToMinutes(
            a.time
          )
          -
          convertTimeToMinutes(
            b.time
          )
      );


  filteredProgramme.forEach(
    event => {

      const place =
        getPlace(
          event.placeId
        );


      const category =
        getCategory(
          event.category
        );


      const eventElement =
        document.createElement(
          "div"
        );


      eventElement.className =
        "event";


      let timeDisplay =
        event.time;


      if (event.endTime) {

        timeDisplay += `

          <span class="event-end-time">
            ${event.endTime}
          </span>

        `;

      }


      let description = "";


      if (event.description) {

        description = `

          <div class="event-description">

            ${event.description}

          </div>

        `;

      }


      let placeDisplay =
        "";


      if (place) {

placeDisplay = `

  <div class="event-location">

    <span class="location-dot">
      ●
    </span>

    ${place.name}

  </div>

`;

      }


      eventElement.innerHTML = `

        <div class="event-time">

          ${timeDisplay}

        </div>


        <div class="event-content">

          <div class="event-category">

            ${
              category
                ? category.name
                : event.category
            }

          </div>


          <div class="event-title">

            ${event.title}

          </div>


          ${placeDisplay}


          ${description}

        </div>

      `;


      container.appendChild(
        eventElement
      );

    }
  );


  /* NO RESULTS */

  if (
    filteredProgramme.length ===
    0
  ) {

    container.innerHTML = `

      <div class="no-events">

        Nessun evento trovato
        con questi filtri.

      </div>

    `;

  }

}


/* =========================
   DAY FILTER
========================= */

document
  .querySelectorAll(
    ".day-button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectedDay =
          button.dataset.day;


        document
          .querySelectorAll(
            ".day-button"
          )
          .forEach(
            dayButton => {

              dayButton
                .classList
                .remove(
                  "active"
                );

            }
          );


        button.classList.add(
          "active"
        );


        renderProgramme();

      }
    );

  });


/* =========================
   CATEGORY FILTER
========================= */

document
  .querySelectorAll(
    ".filter-button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectedCategory =
          button.dataset.category;


        document
          .querySelectorAll(
            ".filter-button"
          )
          .forEach(
            filterButton => {

              filterButton
                .classList
                .remove(
                  "active"
                );

            }
          );


        button.classList.add(
          "active"
        );


        renderProgramme();

      }
    );

  });


/* =========================
   INITIALISE
========================= */

createPlaceFilter();

renderProgramme();
