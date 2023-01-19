//store unique API Keys
const APIKey = "Basic YmFiMmI0YTgtOTJhZi00M2RlLWJhNjAtZjQ3ZjYzMzM1YTVm";
const partnertoken = "2cd2c049426c40bea3bda0dcee042d17";

//Use local storage for search history
const history = JSON.parse(localStorage.getItem('search-history')) || [];
const historyLastValue = history[history.length - 1];
console.log(historyLastValue);
renderBtns();
function renderBtns() {
    $(".history").empty();
    history.forEach(function (i) {
        const recentuserCar = $("<li><button>" + i + "</button></li>");
        $(".history").prepend(recentuserCar);
    })
}
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
                    user_response = user_response + ` 
                    <tr class = "response_text">
                    <td>${car.desc}</td>
                    <td>${car.due_mileage}</td>
                    <td>${car.repair.repair_difficulty}</td>
                    <td>$${car.repair.total_cost}</td>
                    </tr>
                `;
                }
            }
            //prepend values to search history
            renderBtns();
            localStorage.setItem('search-history', JSON.stringify(history));
            let usersearches = {
                make: make,
                model: model,
                year: year,
                mileage: mileage,
            }
            history.push(usersearches);
            $("#response_data").html(user_response); // puts data in div id on html page
        }
   });
});




