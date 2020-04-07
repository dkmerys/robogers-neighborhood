// Business Logic
var beepOrBoop = function(numberAsString) {
  if (numberAsString.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (numberAsString.includes("2")) {
    return  "boop!";
  } else if (numberAsString.includes("1")) {
    return "beep!";
  } else {
    return numberAsString;
  };
};

// UI Logic
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
      var results = beepOrBoop(outputValue);
      $("#output").append("<li>" + results + "</li>")
    };
    $(".well").fadeIn(1000);
    $("input#number").val("");
  });
});