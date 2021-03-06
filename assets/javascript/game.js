$(document).ready(function(){

  //GAME INSTRUCTIONS
  alert("INSTRUCTIONS: This is a 1-on-1 duelling challenge. Defeat all opponents to win. Your attack power will increase each time you attack, so it would be wise to fight the more challenging opponents after you have become stronger. May the Force be with you!");

  //CURRENT PLAYER AND OPPONENT CHARACTERS
  var player = null;
  var opponent = null;
  var opponentsFought = [];

  //ARRAY OF CHARACTERS AS OBJECTS
  var rebels = [
    {
      name: "JYN",
      health: 100,
      power: 4,
      counter: 6
    },
    {
      name: "CASSIAN",
      health: 110,
      power: 3,
      counter: 5
    },
    {
      name: "K2",
      health: 130,
      power: 2,
      counter: 4
    },
    {
      name: "CHIRRUT",
      health: 90,
      power: 6,
      counter: 3
    },
    {
      name: "BAZE",
      health: 120,
      power: 5,
      counter: 7
    },
    {
      name: "BODHI",
      health: 80,
      power: 1,
      counter: 2
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
          $(this).clone().replaceAll(".player-div").removeClass("col-md-1 rebelsList cards").addClass("player-div");
          $(this).css("opacity", "0.5");
          $(this).children().css("color", "#555");
          $(this).children().css("border-color", "#555");
          $(this).children("h6").css("color", "black");
          $("#vs").css("color", "#EAE5D4");

          //If the player character has already been selected:
        } else {
            opponent = $(this).children("h4").text();
            opponentsFought.push(opponent);
            console.log("Opponent: " + opponent);
            $("#alert").text("Click ATTACK to Duel");
            $(this).clone().replaceAll(".computer-div").removeClass("col-md-1 rebelsList cards").addClass("computer-div");
            $(this).css("opacity", "0.5");
            $(this).children().css("color", "#555");
            $(this).children().css("border-color", "#555");
            $(this).children("h6").css("color", "black");
            $(".button").css("color", "#EAE5D4").css("border", "3px solid #EAE5D4").css("opacity", "1");
            console.log(opponentsFought);
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
  $(".button").on({
    "click": function (){
      if (opponent === null){
      } else if (player.health <= 0 && opponent.health > 0){
         $("#alert").text("You have been Defeated");
         $(".player-div").css("opacity", "0.5");
         $(".player-div").children().css("color", "#555");
         $(".player-div").children().css("border-color", "#555");
         $(".player-div").children("h6").html("DEFEATED").css("color", "#AE3232");
         $(".button").css("opacity", "0.2");
         $("#vs").text("GAME OVER");
       } else if (opponentsFought.length < 5 && opponent.health <= 0){
            $("#alert").text("Select Your Next Opponent");
            $(".button").css("opacity", "0.2");
            $(".computer-div").css("opacity", "0.5");
            $(".computer-div").children().css("color", "#555");
            $(".computer-div").children().css("border-color", "#555");
            $(".computer-div").children("h6").html("DEFEATED").css("color", "#AE3232");
            opponent = null;
          } else if (opponentsFought.length === 5 && opponent.health <= 0){
              $("#alert").text("You have Defeated All Opponents");
              $(".computer-div").css("opacity", "0.5");
              $(".computer-div").children().css("color", "#555");
              $(".computer-div").children().css("border-color", "#555");
              $(".computer-div").children("h6").html("DEFEATED").css("color", "#AE3232");
              $(".button").css("opacity", "0.2");
              $("#vs").text("YOU WIN");
            } else {
                player.health = Math.round(player.health - opponent.counter);
                opponent.health = Math.round(opponent.health - player.power);
                player.power = player.power * 1.1;
                $("#alert").text("Your Attack Power has Increased to " + Math.round(player.power) + " points");
                if (player.health > 0) {
                  $(".player-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " " + player.health);
                } else {
                    $(".player-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" +  " CRITICAL CONDITION").css("color", "#AE3232");
                  }
                if (opponent.health > 0) {
                  $(".computer-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " " + opponent.health);
                } else {
                    $(".computer-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " CRITICAL CONDITION").css("color", "#AE3232");
                  }
              }
    }
  });

});
