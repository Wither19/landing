var currentHealth;
var maxHealth;
var clickValue = 1;
var exp;
var userLvl = 1;
var clickBonuses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const expThresholds = [1, 50, 100, 200, 300, 450, 600, 750, 1000, 1250, 1500];

function spawn() {
  let health = 55;
  let levelRange = Math.floor(Math.random() * 15 + 5);
  let shinyThreshold = Math.floor(Math.random() * 25);
  if (shinyThreshold === 1) {
    $("img.sprite").attr(
      "src",
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/194.png`
    );
    $(".name sub").html(
      '<img class="shiny" src="https://images.vexels.com/media/users/3/196596/isolated/preview/92ba8e221ba7c1f7c1e7151dbf3e50d4-clean-squeaky-icon.png"> Lv. ' +
        levelRange
    );
    currentHealth = (3.1 * levelRange + health).toFixed();
    maxHealth = (3.1 * levelRange + health).toFixed();
    $(".health").html(currentHealth + " / " + maxHealth);
    $(".health").css({
      width: currentHealth * 2 + "px",
    });
  } else {
    $("img.sprite").attr(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
    );
    $(".name sub").html("Lv. " + levelRange);

    currentHealth = (3.1 * levelRange + health).toFixed();
    maxHealth = (3.1 * levelRange + health).toFixed();
    $(".health").html(currentHealth + " / " + maxHealth);
    $(".health").css({
      width: currentHealth * 2 + "px",
    });
  }
}

function damage() {
  currentHealth -= clickValue;
  $(".health").html(currentHealth + " / " + maxHealth);
  $(".health").css({
    width: currentHealth * 2 + "px",
  });
  if (currentHealth <= 0) {
    faint();
  }
}

function faint() {
  exp += maxHealth / 5;
  spawn();
  $(".exp").html(`Level ${userLvl}`);
  $("div.bar.xp").html(`${exp} / ${expThresholds[userLvl]}`);
}

$(document).keydown(function (e) {
  if (e.key === "r") {
    spawn();
  }
});

$(".sprite").click(function () {
  damage();
});
