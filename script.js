let selectedDay = "sabato";
let selectedCategory = "Tutti";


/* --------------------------
   MAIN NAVIGATION
-------------------------- */

const navButtons =
  document.querySelectorAll(
    ".nav-button"
  );

const sections =
  document.querySelectorAll(
    ".page-section"
  );


navButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const target =
          button.dataset.section;


        navButtons.forEach(
          nav =>
            nav.classList.remove(
              "active"
            )
        );


        button.classList.add(
          "active"
        );


        sections.forEach(
          section =>
            section.classList.remove(
              "active-section"
            )
        );


        const targetSection =
          document.getElementById(
            target
          );


        if (
          targetSection
        ) {

          targetSection
            .classList.add(
              "active-section"
            );

        }


        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }
);


/* --------------------------
   LOCATION LOOKUP
-------------------------- */

function getLocation(
  locationId
) {

  return locations.find(
    location =>
      location.id === locationId
  );

}


/* --------------------------
   PROGRAMME
-------------------------- */

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

      .filter(
        event =>
          event.day ===
          selectedDay
      )

      .filter(
        event =>
          selectedCategory ===
            "Tutti"
          ||
          event.category ===
            selectedCategory
      );


  filteredProgramme.forEach(
    event => {

      const location =
        getLocation(
          event.locationId
        );


      const eventElement =
        document.createElement(
          "div"
        );


      eventElement.className =
        "event";


      eventElement.innerHTML = `

        <div class="event-time">

          ${event.time}

        </div>


        <div>

          <div class="event-category">

            ${event.category}

          </div>


          <div class="event-title">

            ${event.title}

          </div>


          <div class="event-location">

            📍 ${
              location
                ? location.name
                : ""
            }

          </div>

        </div>

      `;


      container.appendChild(
        eventElement
      );

    }
  );


  if (
    filteredProgramme.length ===
    0
  ) {

    container.innerHTML = `

      <div
        style="
          padding:30px 0;
          color:#74716D;
        "
      >

        Nessun evento
        in questa categoria.

      </div>

    `;

  }

}


/* --------------------------
   DAY SELECTOR
-------------------------- */

document
  .querySelectorAll(
    ".day-button"
  )
  .forEach(
    button => {

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
              dayButton =>
                dayButton
                  .classList
                  .remove(
                    "active"
                  )
            );


          button
            .classList
            .add(
              "active"
            );


          renderProgramme();

        }
      );

    }
  );


/* --------------------------
   CATEGORY FILTER
-------------------------- */

document
  .querySelectorAll(
    ".filter-button"
  )
  .forEach(
    button => {

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
              filterButton =>
                filterButton
                  .classList
                  .remove(
                    "active"
                  )
            );


          button
            .classList
            .add(
              "active"
            );


          renderProgramme();

        }
      );

    }
  );


/* --------------------------
   INITIAL LOAD
-------------------------- */

renderProgramme();
