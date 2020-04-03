// Business Logic








// UI Logic

$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#number").val())
    
    if (isNaN(userNumber)) {
      result = "Please enter a number."
    } else {
      result = userNumber
    };
    
    // var total = 0
    // for (var currentNumber = 0; currentNumber <= userNumber; currentNumber += 1) {
    //   total = currentNumber
    //   $("#output").append("<li>" + total + "</li>")
    // };

    for (var currentNumber = 0; currentNumber <= userNumber; currentNumber += 1) {
      var outputValue = currentNumber.toString()
        if (outputValue.includes("3")) {
          outputValue = "Won't you be my neighbor?"
        } else if (outputValue.includes("2")) {
          outputValue = "beep!"
        }
      $("#output").append("<li>" + outputValue + "</li>")
    };

    // $("#output").text(result);
    $(".well").show;
  });
});