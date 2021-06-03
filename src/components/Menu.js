import React from "react";

import $ from "react-jquery-plugin";

import "./Menu.css";

const Menu = () => {
  (function () {
    $("#home").addClass("selected");
  })();

  $("#home").addClass("selected");

  $(".btn").click(function () {
    let selected = $(this);
    selected.toggleClass("selected").siblings().removeClass("selected");
  });

  $(".btn-upload").click(function () {
    let uploadScreen = $(".uploads");
    uploadScreen.toggleClass("active");
    $(".options").removeClass("active");
  });

  $(document).ready(function () {
    $("#home").click(function (event) {
      event.preventDefault();
      $(".home-post").css("display", "block");
      $(".routines-post").css("display", "none");
      $(".activities-post").css("display", "none");
      $(".myroutines-post").css("display", "none");
    });

    $("#routines").click(function (event) {
      event.preventDefault();
      $(".home-post").css("display", "none");
      $(".routines-post").css("display", "block");
      $(".activities-post").css("display", "none");
      $(".myroutines-post").css("display", "none");
    });

    $("#myroutines").click(function (event) {
      event.preventDefault();
      $(".home-post").css("display", "none");
      $(".routines-post").css("display", "none");
      $(".activities-post").css("display", "none");
      $(".myroutines-post").css("display", "block");
    });

    $("#activities").click(function (event) {
      event.preventDefault();
      $(".home-post").css("display", "none");
      $(".routines-post").css("display", "none");
      $(".activities-post").css("display", "block");
      $(".myroutines-post").css("display", "none");
    });
  });

  $(".cancel").click(function () {
    $(".uploads").removeClass("active");
    $(".options").show();
    $(".new-routine").removeClass("active");
    $(".new-activity").removeClass("active");
  });

  $("#activity").click(function () {
    $(".options").addClass("active");
    $(".new-activity").addClass("active");
    $(".new-routine").removeClass("active");
  });

  $("#routine").click(function () {
    $(".new-routine").addClass("active");
    $(".new-activity").removeClass("active");
    $(".options").addClass("active");
  });

  $("#link-rou").click(function () {
    $(".options").css("display", "none");
    $(".new-activity").removeClass("active");
    $(".new-routine").toggleClass("active");
  });

  $("#link-act").click(function () {
    $(".options").css("display", "none");
    $(".new-routine").removeClass("active");
    $(".new-activity").toggleClass("active");
  });

  $("#account").click(function () {
    $(".options-reg").toggleClass("active");
  });

  $("#login").click(function () {
    $(".login-register").toggleClass("active");
    $(".login-form").addClass("active");
    $(".options-reg").removeClass("active");
  });

  $("#link-reg").click(function () {
    $(".login-register").removeClass("active");
    $(".login-form").removeClass("active");
    $(".register-form").addClass("active");
    $(".login-register").addClass("active");
    $(".options").css("display", "none");
  });

  $("#register").click(function () {
    $(".login-register").toggleClass("active");
    $(".register-form").addClass("active");
    $(".options-reg").removeClass("active");
  });

  $("#link-log").click(function () {
    $(".login-register").removeClass("active");
    $(".register-form").removeClass("active");
    $(".login-form").addClass("active");
    $(".login-register").addClass("active");
    $(".options").css("display", "none");
  });

  $(" .login-register .cancel").click(function () {
    $(".login-register").removeClass("active");
    $(".login-form").removeClass("active");
    $(".register-form").removeClass("active");
  });
};

export default Menu;
