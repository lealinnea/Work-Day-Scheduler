// clock
let date = moment().format('MMMM Do, h:mm');
$("#currentDay").html(date);

function getMomentinTime() {
    var TBH = parseInt(moment().hour());

    $(".time-block").each(function () {
        let addTD = parseInt($(this).attr("id").split("TOD")[1]);

        if (addTD < TBH) {
            $(this).addClass("past");
        }
        else if (addTD === TBH) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");

        }
    })
}

$(".saveBtn").on("click", function () {
    let TOD = $(this).parent().attr("id");
    let WDS = $(this).siblings("textarea").val();
   
    localStorage.setItem(TOD, WDS);
})

$(".clearBtn").on("click", function () {
    window.localStorage.clear();
    document.location.reload();
});

$("#TOD9 textarea").val(localStorage.getItem("TOD9"));
$("#TOD10 textarea").val(localStorage.getItem("TOD10"));
$("#TOD11 textarea").val(localStorage.getItem("TOD11"));
$("#TOD12 textarea").val(localStorage.getItem("TOD12"));
$("#TOD13 textarea").val(localStorage.getItem("TOD13"));
$("#TOD14 textarea").val(localStorage.getItem("TOD14"));
$("#TOD15 textarea").val(localStorage.getItem("TOD15"));
$("#TOD16 textarea").val(localStorage.getItem("TOD16"));
$("#TOD17 textarea").val(localStorage.getItem("TOD17"));

getMomentinTime();



