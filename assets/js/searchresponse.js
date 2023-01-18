//store unique API Keys
const APIKey = "Basic YmFiMmI0YTgtOTJhZi00M2RlLWJhNjAtZjQ3ZjYzMzM1YTVm";
const partnertoken = "2cd2c049426c40bea3bda0dcee042d17";


//Call API Key

$(document).ready(function () { //we want the document to load only once
    function onLoad(){
    }

    //selectors for user input 
    var queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    var model = urlParams.get('model');
    var year = urlParams.get('year');
    var make = urlParams.get('make');
    var mileage = urlParams.get('mileage');

    var queryURL = "http://api.carmd.com/v3.0/maint?";
    queryURL = queryURL + "year=" + year + "&make=" + make + "&model=" + model + "&mileage=" + mileage;
    console.log (queryURL);

    $.ajax({ // API request 
        url: queryURL,
        method: "GET",
        dataType: "json",
        headers: {"content-type":"application/json",
        "authorization":"Basic YmFiMmI0YTgtOTJhZi00M2RlLWJhNjAtZjQ3ZjYzMzM1YTVm",
        "partner-token":"2cd2c049426c40bea3bda0dcee042d17"},

        success: function (res) {
            console.log("Successful! AJax1:");
            console.log(res);

            let user_response = ""; 
            
            //for loop to get all data that meets requirement
            for (let i = 0; i < res.data.length; i++) {
                const car = res.data[i]
                if (car.due_mileage > 50000) {
                    user_response = user_response + `<div class = "response_text">
                    <h3>${car.desc}</h3><br>
                    <p>Due_Mileage: ${car.due_mileage}</p>
                    <p>Total Cost of Repair: ${car.repair.total_cost}</p>
                </div>`;
                }

            }
            $("#response_data").html(user_response); // puts data in div id on html page



        }
   });
});

