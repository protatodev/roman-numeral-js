
import {romanNumerals} from "./roman-numerals.js";
import $ from "jquery";
import "./styles.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./ruins.jpg";
import img1 from "./dude.png";

$(document).ready(function () {

  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#field").val());
    var result = romanNumerals(input);
    $("#result").text(result);
    $("#result").show();
  });

});
