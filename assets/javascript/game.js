$(document).ready(function(){

  //CURRENT PLAYER AND OPPONENT CHARACTERS
  var player = null;
  var opponent = null;

  //ARRAY OF CHARACTERS AS OBJECTS
  var rebels = [
    {
      name: "JYN",
      health: 100,
      power: 5,
      counter: 20
    },
    {
      name: "CASSIAN",
      health: 110,
      power: 4,
      counter: 15
    },
    {
      name: "K2",
      health: 130,
      power: 3,
      counter: 25
    },
    {
      name: "CHIRRUT",
      health: 90,
      power: 7,
      counter: 35
    },
    {
      name: "BAZE",
      health: 120,
      power: 6,
      counter: 30
    },
    {
      name: "BODHI",
      health: 80,
      power: 2,
      counter: 5
    }
  ];

  //PLAYER AND OPPONENT CHARACTER SELECTION PROCESS
  $(".rebelsList").on({
    "click": function(){
      //If the same character has already been selected, or if player has already selected an opponent:
      if (player == $(this).children("h4").text() || opponent !== null) {
        //If the player character hasn't been selected yet:
      } else if (player === null) {
          player = $(this).children("h4").text();
          console.log("Player: " + player);
          $("#alert").text("Select Your Opponent");
          //For better visual aesthetics, selected characters get grayed out instead of disappearing from the grid.
          $(this).clone().replaceAll("#player-div").removeClass("col-md-1 rebelsList cards").addClass("player-div");
          $(this).css("opacity", "0.5");
          $(this).children().css("color", "#555");
          $(this).children().css("border-color", "#555");
          $(this).children("h6").css("color", "black");
          $("#vs").css("color", "#EAE5D4");

          //If the player character has already been selected:
        } else {
            opponent = $(this).children("h4").text();
            console.log("Opponent: " + opponent);
            $("#alert").text("Click ATTACK to Duel");
            $(this).clone().replaceAll("#computer-div").removeClass("col-md-1 rebelsList cards").addClass("computer-div");
            $(this).css("opacity", "0.5");
            $(this).children().css("color", "#555");
            $(this).children().css("border-color", "#555");
            $(this).children("h6").css("color", "black");
            $("#attack").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
          }

      //ASSIGN SELECTED PLAYER CHARACTERS TO CORRESPONDING OBJECTS
      switch (player) {
        case "JYN":
          player = rebels[0];
          break;
        case "CASSIAN":
          player = rebels[1];
          break;
        case "K2":
          player = rebels[2];
          break;
        case "CHIRRUT":
          player = rebels[3];
          break;
        case "BAZE":
          player = rebels[4];
          break;
        case "BODHI":
          player = rebels[5];
          break;
      }

      //ASSIGN SELECTED OPPONENT CHARACTERS TO CORRESPONDING OBJECTS
      switch (opponent) {
        case "JYN":
          opponent = rebels[0];
          break;
        case "CASSIAN":
          opponent = rebels[1];
          break;
        case "K2":
          opponent = rebels[2];
          break;
        case "CHIRRUT":
          opponent = rebels[3];
          break;
        case "BAZE":
          opponent = rebels[4];
          break;
        case "BODHI":
          opponent = rebels[5];
          break;
      }
    }
  });

  //ATTACK PROCESS
  $("#attack").on({
    "click": function (){
      //IF PLAYER LOSES
      if (player.health <= 0) {
        $("#alert").text("GAME OVER");
        $("#row2").css("opacity", "0.2");
        $("#row3").css("opacity", "0.2");
        $(this).on({"click": function(){$("#alert").text("Click RESTART to restart the game.")}});
        $(this).css("opacity", "0.2");
          //IF PLAYER WINS
      }   else if (opponent.health <= 0){
            $("#alert").text("You have Defeated Your Opponent.");
            $(this).on({"click": function(){$("#alert").text("Select Your Next Opponent.")}});
            $(this).css("opacity", "0.2");
            opponent = null;
            console.log ("Player: " + player);
            console.log("Opponent: " + opponent)
              //IF NOBODY HAS WON YET
          }   else {
                player.health = player.health - opponent.counter;
                opponent.health = opponent.health - player.power;
                player.power = player.power + player.power;
                $(".player-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " " + player.health)
                $(".computer-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " " + opponent.health)
              }
    }
  });










});
