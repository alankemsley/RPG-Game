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

  //REBEL AND OPPONENT SELECTION FUNCTIONS (I'm sure there is a more concise way of doing this, but I can't figure out how to change the CSS of the elemnts of the selected character.)

  $("#jyn").on({
    "click": function(){
      if (selectedRebel === null) {
        selectedRebel = jyn;
        $("#alert").text("Select Your Opponent");
        $("#jyn, #jyn-name, #jyn-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
        $("#player").attr("src", "assets/images/jyn-left.png").css("border-color", "#A18064");
        $("#player-name").css("color", "#A18064").html("JYN");
        $("#player-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 120</h5>");
        $("#vs").css("color","#EAE5D4");
        $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
      } else {
          selectedOpponent = jyn;
          $("#alert").text("Click ATTACK to Begin Duel");
          $("#jyn, #jyn-name, #jyn-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
          $("#computer").attr("src", "assets/images/jyn-right.png").css("border-color", "#A18064");
          $("#computer-name").css("color", "#A18064").html("JYN");
          $("#computer-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 120</h5>");
          $("#attack").css("color", "#A18064").css("border-color", "#A18064").addClass(".button-hover");
        }
    }
  });

  $("#cassian").on({
    "click": function(){
      if (selectedRebel === null) {
        selectedRebel = cassian;
        $("#alert").text("Select Your Opponent");
        $("#cassian, #cassian-name, #cassian-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
        $("#player").attr("src", "assets/images/cassian-left.png").css("border-color", "#A18064");
        $("#player-name").css("color", "#A18064").html("CASSIAN");
        $("#player-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 100</h5>");
        $("#vs").css("color","#EAE5D4");
        $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
      } else {
          selectedOpponent = cassian;
          $("#alert").text("Click ATTACK to Begin Duel");
          $("#cassian, #cassian-name, #cassian-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
          $("#computer").attr("src", "assets/images/cassian-right.png").css("border-color", "#A18064");
          $("#computer-name").css("color", "#A18064").html("CASSIAN");
          $("#computer-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 100</h5>");
          $("#attack").css("color", "#A18064").css("border-color", "#A18064");
        }
    }
  });

  $("#k2").on({
    "click": function(){
      if (selectedRebel === null) {
        selectedRebel = k2;
        $("#alert").text("Select Your Opponent");
        $("#k2, #k2-name, #k2-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
        $("#player").attr("src", "assets/images/k2-left.png").css("border-color", "#A18064");
        $("#player-name").css("color", "#A18064").html("K-2");
        $("#player-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 180</h5>");
        $("#vs").css("color","#EAE5D4");
        $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
      } else {
          selectedOpponent = k2;
          $("#alert").text("Click ATTACK to Begin Duel");
          $("#k2, #k2-name, #k2-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
          $("#computer").attr("src", "assets/images/k2-right.png").css("border-color", "#A18064");
          $("#computer-name").css("color", "#A18064").html("K-2");
          $("#computer-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 180</h5>");
          $("#attack").css("color", "#A18064").css("border-color", "#A18064");
        }
    }
  });

  $("#chirrut").on({
    "click": function(){
      if (selectedRebel === null) {
        selectedRebel = chirrut;
        $("#alert").text("Select Your Opponent");
        $("#chirrut, #chirrut-name, #chirrut-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
        $("#player").attr("src", "assets/images/chirrut-left.png").css("border-color", "#A18064");
        $("#player-name").css("color", "#A18064").html("Chirrut");
        $("#player-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 140</h5>");
        $("#vs").css("color","#EAE5D4");
        $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
      } else {
          selectedOpponent = chirrut;
          $("#alert").text("Click ATTACK to Begin Duel");
          $("#chirrut, #chirrut-name, #chirrut-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
          $("#computer").attr("src", "assets/images/chirrut-right.png").css("border-color", "#A18064");
          $("#computer-name").css("color", "#A18064").html("Chirrut");
          $("#computer-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 140</h5>");
          $("#attack").css("color", "#A18064").css("border-color", "#A18064");
        }
    }
  });

  $("#baze").on({
    "click": function(){
      if (selectedRebel === null) {
        selectedRebel = baze;
        $("#alert").text("Select Your Opponent");
        $("#baze, #baze-name, #baze-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
        $("#player").attr("src", "assets/images/baze-left.png").css("border-color", "#A18064");
        $("#player-name").css("color", "#A18064").html("Baze");
        $("#player-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 160</h5>");
        $("#vs").css("color","#EAE5D4");
        $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
      } else {
          selectedOpponent = baze;
          $("#alert").text("Click ATTACK to Begin Duel");
          $("#baze, #baze-name, #baze-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
          $("#computer").attr("src", "assets/images/baze-right.png").css("border-color", "#A18064");
          $("#computer-name").css("color", "#A18064").html("Baze");
          $("#computer-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 160</h5>");
          $("#attack").css("color", "#A18064").css("border-color", "#A18064");
        }
    }
  });

  $("#bodhi").on({
    "click": function(){
      if (selectedRebel === null) {
        selectedRebel = bodhi;
        $("#alert").text("Select Your Opponent");
        $("#bodhi, #bodhi-name, #bodhi-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
        $("#player").attr("src", "assets/images/bodhi-left.png").css("border-color", "#A18064");
        $("#player-name").css("color", "#A18064").html("Bodhi");
        $("#player-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 80</h5>");
        $("#vs").css("color","#EAE5D4");
        $("#restart").css("color", "#EAE5D4").css("border-color", "#EAE5D4");
      } else {
          selectedOpponent = bodhi;
          $("#alert").text("Click ATTACK to Begin Duel");
          $("#bodhi, #bodhi-name, #bodhi-hp").css("opacity", "0.5").css("color", "#555").css("border-color", "#555");
          $("#computer").attr("src", "assets/images/bodhi-right.png").css("border-color", "#A18064");
          $("#computer-name").css("color", "#A18064").html("Bodhi");
          $("#computer-hp").css("color", "#EAE5D4").html("<h5><i class='fa fa-heartbeat hp-icon' aria-hidden='true'></i> 80</h5>");
          $("#attack").css("color", "#A18064").css("border-color", "#A18064");
        }
    }
  });

























});
