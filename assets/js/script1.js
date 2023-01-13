
 


const APIKey = "YmFiMmI0YTgtOTJhZi00M2RlLWJhNjAtZjQ3ZjYzMzM1YTVm";

//store my unique API Key

//Call API Key.

const queryURL = "http://api.carmd.com/v3.0/upcoming?year=2015&make=CHEVROLET&model=EQUINOX&mileage=82000";
$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    headers: {"content-type":"application/json",
    "authorization":"YmFiMmI0YTgtOTJhZi00M2RlLWJhNjAtZjQ3ZjYzMzM1YTVm",
    "partner-token":"your_partner_token_here"

},
    success: function (res) {
        console.log("Successful! AJax1:")
        console.log(res)
    

        {
            "year":"2015",
            "make":"CHEVROLET",
            "model":"EQUINOX",
            "mileage":51000  
          }
    }
});

var year = '';
var make = '';
var model = '';
var mileage = '';

