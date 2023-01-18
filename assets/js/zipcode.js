// only use hash with query selector
const input = document.getElementById("pac-input");
const submitBtn = document.getElementById("zipcodeSearch");
// this creates a list, we want parse to be default
const zipArray = JSON.parse(localStorage.getItem("zipArray")) || [] 

//center and zoom are just a starting point for the map
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Ftc2NobHVldGVyIiwiYSI6ImNsY3RxYjhqbzBkMmEzdXF6bzRnczhsamoifQ.yWGERvYjWy73r4QslnX8tQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-118.2437, 34.0522],
  zoom: 9
});

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

// start of control for map search
// map.addControl(geocoder);
//     geocoder.on('result', function(ev) {
//     map.setCenter(ev.result.geometry.coordinates);
//     });

    
//submit button event listener, start of logic

submitBtn.addEventListener("click", (e) => {
 console.log ('button click')
  e.preventDefault();
  const value = input.value;
  if (!zipArray.includes(value)) {
    zipArray.push(value)
    localStorage.setItem("zipArray", JSON.stringify(zipArray))

  }
  fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/2%20Lincoln%20Memorial%20Cir%20NW.json?access_token=pk.eyJ1IjoiY2Ftc2NobHVldGVyIiwiYSI6ImNsY3RxYjhqbzBkMmEzdXF6bzRnczhsamoifQ.yWGERvYjWy73r4QslnX8tQ', {
    method: 'GET',
    Headers: {'Content-Type': 'application/json'},
  })
  .then((Response) => Response.json())
  .then((data) => {

    console.log('Success:', data);
  })
   .catch((error) => {
    console.error('Error', error);
   });
});

// input field for zipcode, do we need blur?
let inputField = document.getElementById('pac-input');
inputField.addEventListener("blur", function () {
    localStorage.setItem("input-field", inputField.value);
});
  
//local storage, does this need to be parsed or stringified?
  const userData = {
    zipcode: document.getElementById('pac-input')
  };

// possibly not the right url for the endpoint that we need, just a filler currently
 

  // call back function??