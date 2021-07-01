//----Variables with date format and current time display----//
var date = moment().format("MMM Do YYYY");
var currentTime = moment().format('H');
console.log(currentTime);

$("#currentDay").append(date);


var timeOfday = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
updatetime();

function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: ##77dd77");


    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #d3d3d3");

    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #ff6961");
    
    }
  }
}

//--Save input to local storage---//
$(".saveBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem('timeOfday', 'textContent');
    console.log(timeOfday, textContent);
});
