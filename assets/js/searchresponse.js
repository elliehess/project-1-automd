//store unique API Keys
const APIKey = "Basic YmFiMmI0YTgtOTJhZi00M2RlLWJhNjAtZjQ3ZjYzMzM1YTVm";
const partnertoken = "2cd2c049426c40bea3bda0dcee042d17";


//Call API Key

const queryURL = "http://api.carmd.com/v3.0/maint?year=2015&make=CHEVROLET&model=EQUINOX";
//$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    headers: {"content-type":"application/json",
    "authorization":"Basic YmFiMmI0YTgtOTJhZi00M2RlLWJhNjAtZjQ3ZjYzMzM1YTVm",
    "partner-token":"2cd2c049426c40bea3bda0dcee042d17"},
    data: {"year":"2015",
    "make":"CHEVROLET",
    "model":"EQUINOX",
    "mileage":"51000 "}, 
    success: function (res) {
        console.log("Successful! AJax1:")
        console.log(res)

    
    //var maintenance = 'Issue : '+data[0].desc ;
        //maintenance += ' Due Mileage : '+data[0].due_mileage ;
        //maintenance += ' Repair : '+data[0].repair ;
        //$('response_data').append(maintenance);
    }
})
.done(function(data) {
    $('#response_data').append(JSON.stringify(data))
});



var year = '';
var make = '';
var model = '';
var mileage = '';

