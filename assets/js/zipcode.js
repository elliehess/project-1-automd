const input = document.getElementById("#pac-input");
const submitBtn = document.getElementById("#zipcodeSearch");
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.5, 40],
  zoom: 9
});

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

submitBtn.addEventListener("click", (e) => {
 console.log ('button click')
  e.preventDefault();
  const value = input.value;
  console.log(value);
});

let inputField = document.getElementById('pac-input');
inputField.addEventListener("blur", function () {
    localStorage.setItem("input-field", inputField.value);
});

  // local storage parse
  localStorage.setItem("object", JSON.stringify(myObject));
  let myObject = JSON.parse(localStorage.getItem("object"));
  
//local storage
  const userData = {
    zipcode: document.getElementById('pac-inputs')
  };


  $.ajax({
    type: "GET",
    url: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/auto/300x200?access_token=sk.eyJ1IjoiY2Ftc2NobHVldGVyIiwiYSI6ImNsY3R0OHJvMTEzNTgzcGs2MHV6bGFxa3EifQ.M4kwV5JtsfhXnaHPyuyJow",
    success: function(data) {
      console.log(data);
    }
  });
  
// possibly not the right url for the endpoint that we need, just a filler currently
  fetch('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/auto/300x200?access_token=sk.eyJ1IjoiY2Ftc2NobHVldGVyIiwiYSI6ImNsY3R0OHJvMTEzNTgzcGs2MHV6bGFxa3EifQ.M4kwV5JtsfhXnaHPyuyJow', {
    method: 'GET',
    body: JSON.stringify(userData),
    Headers: {'Content-Type': 'application/json'},
  })
  .then((Response) => Response.json())
  .then((data) => {
// is anything special needed here for success besides 'data'?
    console.log('Success:', data);
  })
   .catch((error) => {
    console.error('Error', error);
   });

  // call back function??