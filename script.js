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
  document.querySelectorAll(".nav-button");

const sections =
  document.querySelectorAll(".page-section");


navButtons.forEach(button => {

  button.addEventListener("click", () => {

    const target =
      button.dataset.section;

    navButtons.forEach(nav => {
      nav.classList.remove("active");
    });

    button.classList.add("active");

    sections.forEach(section => {
      section.classList.remove("active-section");
    });

    const targetSection =
      document.getElementById(target);

    if (targetSection) {
      targetSection.classList.add("active-section");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


/* =========================
   HELPERS
========================= */

function getPlace(placeId) {

  return places.find(
    place => place.id === placeId
  );

}


function getCategory(categoryId) {

  return categories.find(
    category => category.id === categoryId
  );

}


/*
  Supports BOTH:

  category: "SP"

  and:

  categories: ["SP", "BA"]
*/

function getEventCategoryIds(event) {

  if (
    Array.isArray(event.categories)
  ) {
    return event.categories;
  }

  if (event.category) {
    return [event.category];
  }

  return [];

}


function convertTimeToMinutes(time) {

  if (!time) {
    return 0;
  }

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


  /*
    Prevent duplicate options
    if script is reloaded
  */

  select.innerHTML = `
    <option value="Tutti">
      Tutti i luoghi
    </option>
  `;


  places.forEach(place => {

    const option =
      document.createElement(
        "option"
      );

    option.value =
      place.id;

    /*
      Visitor sees ONLY
      the place name
    */

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

      /* DAY */
      .filter(event =>
        event.day ===
        selectedDay
      )

      /* CATEGORY */
      .filter(event => {

        if (
          selectedCategory ===
          "Tutti"
        ) {
          return true;
        }

        const eventCategories =
          getEventCategoryIds(
            event
          );

        return eventCategories.includes(
          selectedCategory
        );

      })

      /* PLACE */
      .filter(event =>

        selectedPlace ===
          "Tutti"

        ||

        event.placeId ===
          selectedPlace

      )

      /* TIME */
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


      const categoryIds =
        getEventCategoryIds(
          event
        );


      const eventCategories =
        categoryIds

          .map(
            categoryId =>
              getCategory(
                categoryId
              )
          )

          .filter(Boolean);


      const eventElement =
        document.createElement(
          "div"
        );


      eventElement.className =
        "event";


      /* TIME */

      let timeDisplay =
        event.time;


      if (event.endTime) {

        timeDisplay += `

          <span class="event-end-time">
            ${event.endTime}
          </span>

        `;

      }


      /* DESCRIPTION */

      let description =
        "";


      if (event.description) {

        description = `

          <div class="event-description">
            ${event.description}
          </div>

        `;

      }


      /* LOCATION */

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


      /* CATEGORIES */

      const categoryDisplay =
        eventCategories

          .map(
            category =>
              category.name
          )

          .join(" · ");


      /* EVENT HTML */

      eventElement.innerHTML = `

        <div class="event-time">

          ${timeDisplay}

        </div>


        <div class="event-content">

          <div class="event-category">

            ${categoryDisplay}

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
