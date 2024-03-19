const doc = document.querySelector("body");
const wooperTroop = document.querySelector(".wooperTroop");
var shinyCount = 0;
var shinyQuagCount = 0;

function wooperSpawn() {
  for (let i = 0; i < 25; i++) {
    var faceRight = Math.floor(Math.random() * 6 + 1);
    var whichEvo = Math.floor(Math.random() * 12 + 1);
    var shinyHunt = Math.floor(Math.random() * 40 + 1);
    var pokemon = document.createElement("span");
    pokemon.classList.add("pokesprite");
    pokemon.classList.add("pokemon");
    if (whichEvo != 1) {
      pokemon.classList.add("wooper");
      if (shinyHunt == 1) {
        pokemon.classList.add("shiny");
        shinyCount++;
        if (faceRight == 1) {
          pokemon.classList.add("right");
        }
      }
      if (faceRight == 1) {
        pokemon.classList.add("right");
      }
    } else if (whichEvo == 1) {
      pokemon.classList.add("quagsire");
      if (shinyHunt == 1) {
        pokemon.classList.add("shiny");
        shinyCount++;
        if (faceRight == 1) {
          pokemon.classList.add("right");
        }
      }
      if (faceRight == 1) {
        pokemon.classList.add("right");
      }
    }
    wooperTroop.appendChild(pokemon);
  } // End of the loop
  $(".shinies").html(`Shinies found: ${shinyCount}`);
} // End of the function

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
