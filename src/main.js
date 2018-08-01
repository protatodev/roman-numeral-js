
import {RomanNumerals} from "./roman-numerals.js";
import $ from "jquery";
import "./styles.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./ruins.jpg";
import img1 from "./dude.png";

$(document).ready(function () {

  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    let input = parseInt($("#field").val());
    let roman = new RomanNumerals(input); 
    let result = roman.calculate();
    $("#result").text(result);
    $("#result").show();
  });

});
