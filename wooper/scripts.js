var currentHealth;
var maxHealth;
var clickValue = 1;
var xAttackMult = 1;
var xAttackEnabled = false;
var totalDamage = clickValue * xAttackMult;
var exp = 0;
var userLvl = 1;
var critChance = 25 * direHitMult;
var direHitMult = 1;
var direHitEnabled = false;
var critDamage = 3;
var shinyOdds = 50;
var quagsireSpawnChance = 15;
const clickBonuses = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
const expThresholds = [
  1, 50, 100, 200, 300, 450, 600, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500,
  2750, 3000, 3500, 4000, 4500, 5000,
];
const baseHP = {
  wooper: 55,
  quagsire: 95,
};

const links = {
  wooper:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
  quagsire:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
  glint:
    "https://images.vexels.com/media/users/3/196596/isolated/preview/92ba8e221ba7c1f7c1e7151dbf3e50d4-clean-squeaky-icon.png",
};

function spawn() {
  let evoThreshold = Math.floor(Math.random() * quagsireSpawnChance);
  $(".health").css({
    background: "var(--health1)",
  });

  if (evoThreshold === 1) {
    let levelRange = Math.floor(Math.random() * 40 + 20);

    $("img.sprite").attr("src", links.quagsire);

    $(".name sub").html(`Lv. ${levelRange}`);

    $(".name h1").html("Quagsire");

    currentHealth = (3.1 * levelRange + baseHP.quagsire).toFixed();

    maxHealth = (3.1 * levelRange + baseHP.quagsire).toFixed();

    $(".healthNumbers").html(currentHealth + " / " + maxHealth);

    $(".health").css({
      width: (currentHealth / maxHealth) * 25 + "%",
    });
  } else {
    let levelRange = Math.floor(Math.random() * 20 + 1);

    $("img.sprite").attr("src", links.wooper);

    $(".name sub").html(`Lv. ${levelRange}`);

    $(".name h1").html("Wooper");

    currentHealth = (3.1 * levelRange + baseHP.wooper).toFixed();

    maxHealth = (3.1 * levelRange + baseHP.wooper).toFixed();

    $(".healthNumbers").html(currentHealth + " / " + maxHealth);

    $(".health").css({
      width: (currentHealth / maxHealth) * 25 + "%",
    });
  }
}

function damage() {
  let crit = Math.floor(Math.random() * (20 / direHitMult));
  if (crit === 1) {
    currentHealth -= 1 * xAttackMult * critDamage;
    $(".lostHealth").html(
      `<span style="font-weight: 900;">-${
        totalDamage * critDamage
      } Critical Hit!</span>`
    );
  } else {
    currentHealth -= totalDamage;
    $(".lostHealth").html(`-${totalDamage}`);
  }
  $(".healthNumbers").html(currentHealth + " / " + maxHealth);

  $(".health").css({
    width: (currentHealth / maxHealth) * 25 + "%",
  });

  if (maxHealth / 2 >= currentHealth) {
    $(".health").css({
      background: "var(--health2)",
    });
  }

  if (maxHealth / 4 >= currentHealth) {
    $(".health").css({
      background: "var(--health3)",
    });
  }

  if (currentHealth <= 0) {
    faint();
  }
}

function faint() {
  spawn();

  if (maxHealth > 150) {
    exp += Math.floor(maxHealth / 2);
  } else {
    exp += Math.floor(maxHealth / 4);
  }

  $(".exp").html(`Level ${userLvl}`);

  $("div.bar.xp").html(`${exp} / ${expThresholds[userLvl]}`);

  if (exp >= expThresholds[userLvl]) {
    levelUp();
  }
}

function levelUp() {
  exp -= expThresholds[userLvl];

  clickValue += clickBonuses[userLvl];

  userLvl++;

  $(".exp").html(`Level ${userLvl}`);

  $("div.bar.xp").html(`${exp} / ${expThresholds[userLvl]}`);
}

$(document).keydown(function (e) {
  if (e.key === "r") {
    spawn();
  } else if (e.key === " ") {
    damage();
    e.preventDefault();
  } else if (e.key === "/") {
    $(".diag").toggleClass("show");
    $("#evoC").html(
      `<img class="box" src="https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/quagsire.png"><br> 1/${quagsireSpawnChance}`
    );

    $("#critC").html(`${100 / (20 / direHitMult)}%`);

    $("#critDmg").html(`${critDamage}x`);

    $("#shinyC").html(
      `<img class="box" src="https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/shiny/wooper.png"><br> 1/${shinyOdds}`
    );
  }
});

$(".sprite").click(function () {
  damage();
});

$("#xAttack").click(function () {
  if (userLvl >= 1) {
    xAttackEnabled = !xAttackEnabled;
    $("#xAttack").toggleClass("active");
  } else {
    alert("How are you less than Level 1? I suspect hacking");
  }
});

$("#direHit").click(function () {
  if (userLvl >= 3) {
    direHitEnabled = !direHitEnabled;
    $("#direHit").toggleClass("active");
  } else {
    alert("Dire Hit is unlocked at Level 3!");
  }
});

$(".upgradeButton").click(function () {
  setTimeout(100, itemCheck);
});

function itemCheck() {
  if (direHitEnabled === true) {
    direHitMult = 2;
  } else if (direHitEnabled !== true) {
    direHitMult = 1;
  }
  if (xAttackEnabled === true) {
    xAttackMult = 2;
  } else if (xAttackEnabled !== true) {
    xAttackMult = 1;
  }
}
