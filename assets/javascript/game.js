$(document).ready(function(){

  //CURRENT PLAYER AND OPPONENT CHARACTERS
  var player = null;
  var opponent = null;

  //ARRAY OF CHARACTERS AS OBJECTS
  var rebels = [
    {
      name: "JYN",
      health: 100,
      power: 20,
      counter: 25
    },
    {
      name: "CASSIAN",
      health: 110,
      power: 15,
      counter: 20
    },
    {
      name: "K2",
      health: 130,
      power: 10,
      counter: 15
    },
    {
      name: "CHIRRUT",
      health: 90,
      power: 25,
      counter: 30
    },
    {
      name: "BAZE",
      health: 120,
      power: 30,
      counter: 35
    },
    {
      name: "BODHI",
      health: 80,
      power: 5,
      counter: 10
    }
  ];

  //GAME INSTRUCTIONS
  alert("INSTRUCTIONS: ");

  //PLAYER AND OPPONENT CHARACTER SELECTION PROCESS
  $(".rebelsList").on({
    "click": function(){
      //If the same character has already been selected, or if player has already selected an opponent:
      if (player == $(this).children("h4").text() || opponent !== null) {
        //If the player character hasn't been selected yet:
      } else if (player === null) {
          player = $(this).children("h4").text();
          $("#alert").text("Select Your Opponent");
          //For better visual aesthetics, selected characters get grayed out instead of disappearing from the grid.
          $(this).clone().replaceAll("#player-div").removeClass("col-md-1 col-sm-2 col-xs-4 rebelsList cards").addClass("col-sm-2 col-xs-4");
          $(this).css("opacity", "0.5");
          $(this).children().css("color", "#555");
          $(this).children().css("border-color", "#555");
          $(this).children("h6").text("");
          $("#vs").css("color", "#EAE5D4");
          $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
          console.log("Player: " + player);

          //If the player character has already been selected:
        } else {
            opponent = $(this).children("h4").text();
            $("#alert").text("Click ATTACK to Duel");
            $(this).clone().replaceAll("#computer-div").removeClass("col-md-1 col-sm-2 col-xs-4 rebelsList cards").addClass("col-sm-2 col-xs-4");
            $(this).css("opacity", "0.5");
            $(this).children().css("color", "#555");
            $(this).children().css("border-color", "#555");
            $(this).children("h6").text("");
            $("#attack").css("color", "#A18064").css("border-color", "#A18064");
            console.log("Opponent: " + opponent);
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

      //FOR TESTING
      console.log("Player stats: " + player.health + " health, " + player.power + " attack power.");

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

      //FOR TESTING
      console.log("Opponent stats: " + opponent.health + " health, " + opponent.counter + " counter-attack power.");
    }
  });

  //ATTACK PROCESS
  $("#attack").on({
    "click": function (){
      //IF PLAYER LOSES
      if (player.health <= 0) {
        console.log("You have been defeated!");
        $("#alert").text("GAME OVER");
        $("#row2").css("opacity", "0.2");
        $("#row3").css("opacity", "0.2");
        $(this).on({"click": function(){$("#alert").text("Click RESTART to restart the game.")}});
        $(this).css("opacity", "0.2");
          //IF PLAYER WINS
      }   else if (opponent.health <= 0){
            console.log("You have defeated your opponent!");
            $("#alert").text("You have Defeated Your Opponent.");
            $(this).on({"click": function(){$("#alert").text("Select Your Next Opponent.")}});
            $(this).css("opacity", "0.2");
            opponent = null; //For some reason, this isn't reseting my opponent list and allowing me to select a new opponent.

              //IF NOBODY HAS WON YET
          }   else {
            //BORING MATH STUFF HERE.
            //Use Math to decrease the health of both characters according to the attack power and counter-attack power, while increasing the attack power of the player.
                player.health = player.health - opponent.counter;
                player.power = player.power * 2;
                opponent.health = opponent.health - player.power;
                console.log("Player stats: " + player.health + " health, " + player.power + " attack power.");
                console.log("Opponent stats: " + opponent.health + " health, " + opponent.counter + " counter-attack power.");
                $("#alert").text("Your Health: " + player.health + " | Opponent Health: " + opponent.health);

                //Replace player and opponent health point text in HTML with new health points. I can't do this because I had previously cloned the selected characters into the new DIV, rather than moving them over. This also cloned the IDs so now I can't call the IDs of the new DIV. This is what I get for going the extra mile and trying to do more than what is expected of me.
                $(".player-div-class").children("h6").text(player.health);
                $("#computer-hp").text(opponent.health);
              }
    }
  });

  //RESTART GAME
  $("#restart").on({
    "click": function (){
      if (player !== null) {
        location.reload();
      } else {}
    }
  });

});
