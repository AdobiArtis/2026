let selectedDay = "sabato";

let selectedCategory = "Tutti";

let selectedMapCategory = "Tutti";

let map;

let markers = [];



/* --------------------
   NAVIGATION
-------------------- */


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


      navButtons.forEach(b =>
        b.classList.remove("active")
      );


      button.classList.add("active");


      sections.forEach(section =>
        section.classList.remove(
          "active-section"
        )
      );


      document
        .getElementById(target)
        .classList.add(
          "active-section"
        );


      if (
        target === "mappa"
        &&
        map
      ) {

        setTimeout(
          () =>
            map.invalidateSize(),
          100
        );

      }

    }
  );

});



/* --------------------
   PROGRAMME
-------------------- */


function getLocation(
  locationId
) {

  return locations.find(
    location =>
      location.id === locationId
  );

}



function renderProgramme() {

  const container =
    document.getElementById(
      "programme-list"
    );


  container.innerHTML = "";


  const filtered =
    programme.filter(event => {

      const correctDay =
        event.day === selectedDay;


      const correctCategory =
        selectedCategory === "Tutti"
        ||
        event.category ===
          selectedCategory;


      return (
        correctDay
        &&
        correctCategory
      );

    });


  filtered.forEach(event => {

    const location =
      getLocation(
        event.locationId
      );


    const element =
      document.createElement(
        "div"
      );


    element.className =
      "event";


    element.innerHTML = `

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


        <button
          class="event-location"
          data-location="${event.locationId}"
        >

          📍 ${location.name}

        </button>

      </div>

    `;


    container.appendChild(
      element
    );

  });


  document
    .querySelectorAll(
      ".event-location"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(
              button.dataset.location
            );


          openLocationOnMap(id);

        }
      );

    });

}



/* DAY BUTTONS */


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
          .forEach(b =>
            b.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        renderProgramme();

      }
    );

  });



/* PROGRAMME FILTERS */


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
          .forEach(b =>
            b.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        renderProgramme();

      }
    );

  });



/* --------------------
   MAP
-------------------- */


function createMap() {

  map = L.map(
    "map"
  ).setView(

    [
      39.8149,
      9.2719
    ],

    16

  );


  L.tileLayer(

    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",

    {

      maxZoom: 19,

      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

    }

  ).addTo(map);


  renderMarkers();

}



function createMarkerIcon(
  number
) {

  return L.divIcon({

    className: "",

    html:
      `<div class="custom-marker">${number}</div>`,

    iconSize:
      [34,34],

    iconAnchor:
      [17,17]

  });

}



function renderMarkers() {

  markers.forEach(item => {

    map.removeLayer(
      item.marker
    );

  });


  markers = [];


  locations
    .filter(location => {

      return (

        selectedMapCategory ===
          "Tutti"

        ||

        location.category ===
          selectedMapCategory

      );

    })
    .forEach(location => {


      const locationEvents =
        programme.filter(event =>

          event.locationId ===
            location.id

        );


      let programmeHtml = "";


      if (
        locationEvents.length
        > 0
      ) {

        programmeHtml +=
          "<hr><strong>Programma</strong>";


        locationEvents.forEach(event => {

          programmeHtml += `

            <div
              style="
              margin-top:7px;
              "
            >

              <strong>
                ${event.time}
              </strong>

              ${event.title}

            </div>

          `;

        });

      }


      const marker =
        L.marker(

          [
            location.latitude,
            location.longitude
          ],

          {

            icon:
              createMarkerIcon(
                location.id
              )

          }

        );


      marker.bindPopup(`

        <div>

          <strong
            style="
            font-size:17px;
            "
          >

            ${location.name}

          </strong>


          <p>

            ${location.description}

          </p>


          ${programmeHtml}

        </div>

      `);


      marker.addTo(map);


      markers.push({

        id:
          location.id,

        marker:
          marker

      });

    });

}



/* MAP FILTERS */


document
  .querySelectorAll(
    ".map-filter"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        selectedMapCategory =
          button.dataset.mapCategory;


        document
          .querySelectorAll(
            ".map-filter"
          )
          .forEach(b =>
            b.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        renderMarkers();

      }
    );

  });



/* OPEN LOCATION FROM PROGRAMME */


function openLocationOnMap(
  locationId
) {

  const location =
    getLocation(
      locationId
    );


  if (!location) {

    return;

  }


  /* Switch navigation */

  navButtons.forEach(b =>
    b.classList.remove(
      "active"
    )
  );


  document
    .querySelector(
      '[data-section="mappa"]'
    )
    .classList.add(
      "active"
    );


  sections.forEach(section =>
    section.classList.remove(
      "active-section"
    )
  );


  document
    .getElementById(
      "mappa"
    )
    .classList.add(
      "active-section"
    );


  setTimeout(() => {

    map.invalidateSize();


    map.setView(

      [
        location.latitude,
        location.longitude
      ],

      18

    );


    const markerItem =
      markers.find(
        item =>
          item.id === locationId
      );


    if (
      markerItem
    ) {

      markerItem.marker
        .openPopup();

    }

  },100);

}



/* --------------------
   INITIALISE
-------------------- */


renderProgramme();

createMap();
