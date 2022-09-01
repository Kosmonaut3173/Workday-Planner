// function to display the date and time at the top
var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

$(document).ready(function() {
    // save button click listener for user input. want time and text
    $(".saveBtn").on("click", function() {
        // get values
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // sets values in local storage
        localStorage.setItem(time, text);
    })

    //gets values from localstorage and loads them on the screen
    $("#hr09 .description").val(localStorage.getItem("hr09"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr1 .description").val(localStorage.getItem("hr1"));
    $("#hr2 .description").val(localStorage.getItem("hr2"));
    $("#hr3 .description").val(localStorage.getItem("hr3"));
    $("#hr4 .description").val(localStorage.getItem("hr4"));
    $("#hr5 .description").val(localStorage.getItem("hr5"));

    

})


setInterval(displayTime, 1000);