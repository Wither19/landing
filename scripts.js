// -  A formulaic set of functions for all the dropdowns 
$("october").click(function() {
    $("#dropdownoctober").toggleClass("nah show");
    $("october > i").toggleClass("bi-caret-down-fill bi-caret-up-fill");
});

$("november").click(function() {
    $("#dropdownnovember").toggleClass("nah show");
    $("november > i").toggleClass("bi-caret-down-fill bi-caret-up-fill");
});

$("#shortcuts").click(function() {
    $("#dropdownshortcuts").toggleClass("nah show");
    $("#shortcuts > i").toggleClass("bi-caret-down-fill bi-caret-up-fill");
});

$(document).keydown(function(e) {
    if (e.which == 67) {
        $("#dropdownoctober").removeClass("show");
        $("#dropdownoctober").addClass("nah");
        $("october > i").removeClass("bi-caret-up-fill");
        $("october > i").addClass("bi-caret-down-fill");
        $("#dropdownnovember").removeClass("show");
        $("#dropdownnovember").addClass("nah");
        $("november > i").removeClass("bi-caret-up-fill");
        $("november > i").addClass("bi-caret-down-fill");
        $("#dropdownshortcuts").removeClass("show");
        $("#dropdownshortcuts").addClass("nah");
        $("#shortcuts > i").removeClass("bi-caret-up-fill");
        $("#shortcuts > i").addClass("bi-caret-down-fill");
    }
});

// - Bible translation context menu
$(document).ready(function() {
    $(".antilag").on("contextmenu", function(e) {
        e.preventDefault();
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        $(".context").css({
            "top": mouseY,
            "left": mouseX,
            "display": "block"
        });
    });
});

$(document).ready(function() {
    $(".antilag").click(function() {
        $(".context").css({
            "display": "none"
        });
    });
});

// - Link navigation filters
$("#tab-one").click(function() {
    $(".proj").css({
        "display": "block"
    });
    $(".exp").css({
        "display": "none"
    });
    $(".misc").css({
        "display": "none"
    });
    $("#link-id").html("Full-blown Projects");
});

$("#tab-two").click(function() {
    $(".proj").css({
        "display": "none"
    });
    $(".exp").css({
        "display": "block"
    });
    $(".misc").css({
        "display": "none"
    });
    $("#link-id").html("Front-end Experimentation");
});

$("#tab-three").click(function() {
    $(".proj").css({
        "display": "none"
    });
    $(".exp").css({
        "display": "none"
    });
    $(".misc").css({
        "display": "block"
    });
    $("#link-id").html("Random things");
});

$("#tab-four").click(function() {
    $(".proj").css({
        "display": "block"
    });
    $(".exp").css({
        "display": "block"
    });
    $(".misc").css({
        "display": "block"
    });
    $("#link-id").html("All Links");
});

// - Dark / Light mode toggle
$("#darkmode").click(function() {
    $("body").toggleClass("dark");
    $("#darkmode > i").toggleClass("bi-brightness-high-fill bi-moon-stars-fill");
});

$(document).keydown(function(e) {
    if (e.which == 68) {
        $("body").toggleClass("dark");
        $("#darkmode > i").toggleClass("bi-brightness-high-fill bi-moon-stars-fill");
    }
});

// - Passcode prompt and all code results
$("#codeprompt").click(function(e) {
    let codePrompt = prompt("Please enter a passcode");
    if (codePrompt == "5831") {
        alert("Lol that did nothing");
    }
  	else if (codePrompt == "sandvich") {
        alert("Moist and Delicious!");
        $("#sandvich").css({
            "display": "block",
            "top": e.pageY,
            "left": e.pageX
	});
    }
    else {
    alert("Invalid Code");
    }  
});

// - "Perfect fuel for killing tiny cowards!" -Heavy Team Fortress 2
$(document).mousemove(function(e) {
            $("#sandvich").css({
                "top": e.pageY,
                "left": e.pageX
            });
});
