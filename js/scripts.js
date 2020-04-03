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
    
    var total = 0
    for (var currentNumber = 0; currentNumber <= userNumber; currentNumber += 1) {
      total = currentNumber
      $("#output").append("<li>" + total + "</li>")
      // alert("total is: " + total)
    };

    // $("#output").text(result);
    $(".well").show;
  });
});