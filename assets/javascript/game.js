$(document).ready(function(){

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
      counter: 5
    },
    {
      name: "CASSIAN",
      health: 110,
      power: 3,
      counter: 4
    },
    {
      name: "K2",
      health: 130,
      power: 2,
      counter: 7
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
      counter: 6
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
         $("#alert").text("GAME OVER");
         $("#row2").css("opacity", "0.2");
         $("#row3").css("opacity", "0.2");
         $(".button").css("opacity", "0.2");
       } else if (opponentsFought.length < 5 && opponent.health <= 0){
            $("#alert").text("Select Your Next Opponent");
            $(".button").css("opacity", "0.2");
            $(".computer-div").css("opacity", "0.5");
            $(".computer-div").children().css("color", "#555");
            $(".computer-div").children().css("border-color", "#555");
            $(".computer-div").children("h6").html("DEFEATED").css("color", "#AE3232");
            opponent = null;
          } else if (opponentsFought.length === 5 && opponent.health <= 0){
              $("#alert").text("YOU WIN");
              $("#row2").css("opacity", "0.2");
              $("#row3").css("opacity", "0.2");
              $(".button").css("opacity", "0.2");
            } else {
                player.health = Math.round(player.health - opponent.counter);
                opponent.health = Math.round(opponent.health - player.power);
                player.power = player.power * 1.1;
                if (player.health > 0) {
                  $(".player-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " " + player.health);
                } else {
                    $(".player-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" +  " DANGER ZONE").css("color", "#AE3232");
                  }
                if (opponent.health > 0) {
                  $(".computer-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " " + opponent.health);
                } else {
                    $(".computer-div").children("h6").html("<i class = 'fa fa-heartbeat hp-icon' aria-hidden='true'></i>" + " DANGER ZONE").css("color", "#AE3232");
                  }
              }
    }
  });

});
