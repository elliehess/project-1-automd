// only use hash with query selector
const input = document.getElementById("pac-input");
const submitBtn = document.getElementById("zipcodeSearch");
// this creates a list, we want parse to be default
const zipArray = JSON.parse(localStorage.getItem("zipArray")) || []

//switch over to this one
// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v12',
//   center: [-74.5, 40],
//   zoom: 9
// });

//screen load by layer
map.on('load', () => {
  map.addLayer({
    id: 'terrain-data',
    type: 'line',
    source: {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2'
    },
    'source-layer': 'contour'
  });
});

//submit button event listener, start of logic

submitBtn.addEventListener("click", (e) => {
 console.log ('button click')
  e.preventDefault();
  const value = input.value;
  if (!zipArray.includes(value)) {
    zipArray.push(value)
    localStorage.setItem("zipArray", JSON.stringify(zipArray))

  }
  
});

// input field for zipcode, do we need blur?
//let inputField = document.getElementById('pac-input');
// inputField.addEventListener("blur", function () {
//     localStorage.setItem("input-field", inputField.value);
// });
  
//local storage, does this need to be parsed or stringified?
  const userData = {
    zipcode: document.getElementById('pac-inputs')
  };

// possibly not the right url for the endpoint that we need, just a filler currently
  // fetch('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/auto/300x200?access_token=sk.eyJ1IjoiY2Ftc2NobHVldGVyIiwiYSI6ImNsY3R0OHJvMTEzNTgzcGs2MHV6bGFxa3EifQ.M4kwV5JtsfhXnaHPyuyJow', {
  //   method: 'GET',
  //   body: JSON.stringify(userData),
  //   Headers: {'Content-Type': 'application/json'},
  // })
  // .then((Response) => Response.json())
  // .then((data) => {

  //   console.log('Success:', data);
  // })
  //  .catch((error) => {
  //   console.error('Error', error);
  //  });

  // call back function??