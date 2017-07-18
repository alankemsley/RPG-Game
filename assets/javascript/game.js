var jyn = {
  "name": "JYN",
  "health": 120,
  "attack-power": 0,
  "counter-attack": 0
};

var cassian = {
  "name": "CASSIAN",
  "health": 100,
  "attack-power": 0,
  "counter-attack": 0
};

var k2 = {
  "name": "K-2",
  "health": 180,
  "attack-power": 0,
  "counter-attack": 0
};

var chirrut = {
  "name": "CHIRRUT",
  "health": 140,
  "attack-power": 0,
  "counter-attack": 0
};

var baze = {
  "name": "BAZE",
  "health": 160,
  "attack-power": 0,
  "counter-attack": 0
};

var bodhi = {
  "name": "BODHI",
  "health": 80,
  "attack-power": 0,
  "counter-attack": 0
};

var rebels = [jyn, cassian, k2, chirrut, baze, bodhi];
var selectedRebel = null;
var selectedOpponent = null;


$(document).ready(function(){

  //CHARACTER AND OPPONENT SELECTION
  $(".rebelsList").on({
    "click": function(){
      if (selectedRebel == $(this).children("h4").text() || selectedOpponent !== null) {
      } else if (selectedRebel === null) {
          selectedRebel = $(this).children("h4").text();
          $("#alert").text("Select Your Opponent");
          $(this).clone().replaceAll("#player-div").removeClass("col-md-1 col-sm-2 col-xs-4 rebelsList cards").addClass("col-sm-2 col-xs-4");
          $(this).css("opacity", "0.5");
          $(this).children().css("color", "#555");
          $(this).children().css("border-color", "#555");
          $("#vs").css("color", "#EAE5D4");
          $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
        } else {
            selectedOpponent = $(this).children("h4").text();
            $("#alert").text("Click ATTACK to Begin Duel");
            $(this).clone().replaceAll("#computer-div").removeClass("col-md-1 col-sm-2 col-xs-4 rebelsList cards").addClass("col-sm-2 col-xs-4");
            $(this).css("opacity", "0.5");
            $(this).children().css("color", "#555");
            $(this).children().css("border-color", "#555");
            $("#attack").css("color", "#A18064").css("border-color", "#A18064");
          }
    }
  });





















});
