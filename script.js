// function to display the date and time at the top
var timeDisplayEl = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

$(document).ready(function() {

    //save button click listener for user input. want time and text
    $(".saveBtn").on("click", function() {
        //get values
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //sets values in local storage
        localStorage.setItem(time, text);
    })

    //gets values from localstorage and loads them on the screen
    $("#hr09 .description").val(localStorage.getItem("hr09"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
   
    //color coding hrs
    function hourTracker() {
        //get current time in 24hr format
        var currentHour = moment().hour();
        
        //to compare to current time, get block by id name then remove hr leaving just hour
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hr")[1]);
            console.log(blockHour, currentHour)
            

            //link to css past, pressent, future classes
            if (blockHour < currentHour) {
                $(this).addClass("past");
                
            } else if (blockHour == currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})
