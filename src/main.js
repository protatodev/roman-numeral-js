$(document).ready(function () {

  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#field").val());
    var result = romanNumerals(input);
    $("#result").text(result);
    $("#result").show();
  });

});


function romanNumerals(number) {
  if(number > 3999) {
    return "Limit is 3999";
  }

  var numerals = {M: 1000,
                 CM: 900,
                  D: 500,
                 CD: 400,
                  C: 100,
                 XC: 90,
                  L: 50,
                 XL: 40,
                XXX: 30,
                  X: 10,
                 IX: 9,
                  V: 5,
                 IV: 4,
                  I: 1,};
  var roman = "";
  var i = 0;

  for(i in numerals) {
    while(number >= numerals[i]) {
      roman += i;
      number -= numerals[i];

    }
  }
  return roman;
 }
