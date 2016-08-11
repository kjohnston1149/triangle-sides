$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (side1 === side2 && side1 === side3 && side2 === side3) {
      $("#result").text("This is an EQUILATERAL triangle")
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#result").text("This is an ISOSCELES triangle")
    } else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side3 + side2 <= side1) {
      $("#result").text("This is NOT A TRIANGLE.")
    } else {
      $("#result").text("This is a SCALENE triangle")
    }

    $("#result").show();
  });
});
