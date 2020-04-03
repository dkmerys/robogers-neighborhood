// Business Logic








// UI Logic

$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt("#number").val();
    var result

    if (numChecker(userNumber) === true) {
      result = fuctionName(userNumber)
    } else {
      result = "Mr. Roboger only understands numbers. Please enter a number."
    }

    $("#output").text(result);
    $(".well").show;
  });
});