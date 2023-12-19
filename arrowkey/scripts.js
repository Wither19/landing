$("#up").click(function(){
  $("#heavy").css(
    {
  "top": "-=25"
  });
});
$("#down").click(function(){
  $("#heavy").css(
    {
  "top": "+=25"
  });
});
$("#left").click(function(){
  $("#heavy").css(
    {
  "left": "-=25",
  "transform": "rotateY(0deg)" 
  });
});
$("#right").click(function(){
  $("#heavy").css(
    {
  "left": "+=25",
  "transform": "rotateY(180deg)"
  });
});
$(document).keydown(function(e) { 
  if (e.which == "38") {  
    $("#heavy").css({ 
      "top": "-=25" 
      }); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "40") {  
    $("#heavy").css({ 
      "top": "+=25" 
      }); 
    } 
}); 
$(document).keydown(function(e) { 
  if (e.which == "37") {  
    $("#heavy").css({ 
      "left": "-=25",
      "transform": "rotateY(0deg)" 
      }); 
    } 
}); 
$(document).keydown(function(e) { 
  if (e.which == "39") {  
    $("#heavy").css({ 
      "left": "+=25",
      "transform": "rotateY(180deg)" 
      }); 
    } 
}); 
$(document).keydown(function(e) { 
  if (e.which == "17") {  
    $("button").css({ 
      "display": "none" 
      }); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "18") {  
    $("button").css({ 
      "display": "inline" 
      }); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "49") {  
    $("#heavy").attr("src", "docs/assets/images/scout.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "50") {  
    $("#heavy").attr("src", "docs/assets/images/soldier.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "51") {  
    $("#heavy").attr("src", "docs/assets/images/pyro.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "52") {  
    $("#heavy").attr("src", "docs/assets/images/demoman.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "53") {  
    $("#heavy").attr("src", "docs/assets/images/heavy.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "54") {  
    $("#heavy").attr("src", "docs/assets/images/engineer.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "55") {  
    $("#heavy").attr("src", "docs/assets/images/medic.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "56") {  
    $("#heavy").attr("src", "docs/assets/images/sniper.gif"); 
    } 
});
$(document).keydown(function(e) { 
  if (e.which == "57") {  
    $("#heavy").attr("src", "docs/assets/images/spy.gif"); 
    } 
});
$(document).ready(function(){
  $(document).on('contextmenu', function(e){ 
    event.preventDefault();
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    $(".context").css({
        'top':mouseY,
        'left':mouseX, 
        'display':'block'
    });
  }); 
});
$(document).ready(function(){
  $(document).click(function(e){ 
    $(".context").css({
        'display':'none'
    });
  }); 
});
$("li:nth-child(1)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/scout.gif");
});
$("li:nth-child(2)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/soldier.gif");
});
$("li:nth-child(3)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/pyro.gif");
});
$("li:nth-child(4)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/demoman.gif");
});
$("li:nth-child(5)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/heavy.gif");
});
$("li:nth-child(6)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/engineer.gif");
});
$("li:nth-child(7)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/medic.gif");
});
$("li:nth-child(8)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/sniper.gif");
});
$("li:nth-child(9)").click(function(){
    $("#heavy").attr("src", "docs/assets/images/spy.gif");
});
