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
var roboSpeak = function(userNumber) {
  for (var i = 0; i <= userNumber; i += 1) {
    var outputValue = i.toString()
    var results = beepOrBoop(outputValue);
    $("#output").append("<li>" + results + "</li>")
  };
};

$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    $("#output").empty()
    
    var userNumber = parseInt($("#number").val())
    
    if (isNaN(userNumber)) {
      $("#output").append("Mr. Robogers only understands numbers. He is a robot after all. Please enter a number.")
    } else {
      roboSpeak(userNumber)
    };

      $(".well").fadeIn(1000);
      $("input#number").val("");
    });
});