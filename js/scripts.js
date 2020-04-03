$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    $("#output").empty()

    var userNumber = parseInt($("#number").val())
    
    if (isNaN(userNumber)) {
    $("#output").append("Mr. Robogers only understands numbers. He is a robot after all. Please enter a number.")
    }; 
    
    for (var currentNumber = 0; currentNumber <= userNumber; currentNumber += 1) {
      var outputValue = currentNumber.toString()
        if (outputValue.includes("3")) {
          outputValue = "Won't you be my neighbor?"
        } else if (outputValue.includes("2")) {
          outputValue = "boop!"
        } else if (outputValue.includes("1")) {
          outputValue = "beep!"
        }
      $("#output").append("<li>" + outputValue + "</li>")
    };
    $(".well").fadeIn(1000);
  });
});