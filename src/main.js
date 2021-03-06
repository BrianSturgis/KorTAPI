/*eslint-disable*/
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { KanyeQuote, TaylorQuote } from "./js/quotegenerator.js";

function getKQuote(response) {
  if (response) {
    $(".showQuote").text(`${response}`);
    console.log(response)
  } else {
    $(".showErrors").text(`${response}`);
  }
}
function getTQuote(response) {
  if (response) {
    $(".showQuote").text(`${response}`);
    console.log(response)
  } else {
    $(".showErrors").text(`${response}`);
  }
}
function randomQuote(roll) {
  if (roll == 1) {
    KanyeQuote.getKQuote().then(function (response) {
      getKQuote(response.quote);
      console.log(response)
    })
  } else {
    TaylorQuote.getTQuote().then(function (response) {
      getTQuote(response.quote);
      console.log(response)
    })
  }
}
function tay(roll) {
  if (roll == 2) {
    return true
  } else {
    return false
  }
}
function ye(roll) {
  if (roll == 1) {
    return true
  } else {
    return false
  }
}

$(document).ready(function () {
  let roll = Math.floor(Math.random() * 2) + 1;
  console.log(roll)
  $("#btn").click(function () {
    $(".splash").hide();
    $(".showQuote").show();
    $(".yeOrTay").show();
    randomQuote();
  })
  $("#btnTay").click(function () {
    $(".yeOrTay").hide();
    $("h1").hide();
    if (tay(roll) == true) {
      $(".showTayAnswer").show();
      $("#btnReset").show();
    } else {
      $(".yaGoofed").show();
      $("#btnReset").show();
    }
  })
  $("#btnYe").click(function () {
    $(".yeOrTay").hide();
    $("h1").hide();
    if (ye(roll) == true) {
      $(".showYeAnswer").show();
      $("#btnReset").show();
    } else {
      $(".yaGoofed").show();
      $("#btnReset").show();
    }
  })
});