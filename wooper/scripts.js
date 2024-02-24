const doc = document.querySelector("body");
const wooperTroop = document.querySelector(".wooperTroop");
var shinyCount = 0;

function wooperSpawn() {
  for (let i = 0; i < 200; i++) {
    var whichEvo = Math.floor(Math.random() * 20 + 1);
    var shinyHunt = Math.floor(Math.random() * 819 + 1);

    if (whichEvo != 1) {
      if (shinyHunt == 1) {
        wooperTroop.innerHTML += '<span class="pokesprite pokemon wooper shiny"></span>';
		shinyCount++;
      } else {
        wooperTroop.innerHTML += '<span class="pokesprite pokemon wooper"></span>';
      }
    } else if (whichEvo == 1) {
      if (shinyHunt == 1) {
        wooperTroop.innerHTML += '<span class="pokesprite pokemon quagsire shiny"></span>';
		shinyCount++;
      } else {
        wooperTroop.innerHTML += '<span class="pokesprite pokemon quagsire"></span>';
      }
    }
  }// End of the loop
  $(".shinies").html(`Shinies found: ${shinyCount}`);
}// End of the function

function wooperChange() {
  $(".pokemon").toggleClass("shiny");
}


function wooperReset() {
  wooperTroop.innerHTML = '';
  wooperSpawn();
}

$(document).keydown(function(e) {
  if (e.key == "r") {
    wooperReset();
  }
});
