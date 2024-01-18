           $("october").click(function(){
              $("#dropdownoctober").toggleClass("nah show");
              $("october > i").toggleClass("bi-caret-down-fill bi-caret-up-fill");
           });
           $("november").click(function(){
              $("#dropdownnovember").toggleClass("nah show");
              $("november > i").toggleClass("bi-caret-down-fill bi-caret-up-fill");
           });
           $("#shortcuts").click(function(){
              $("#dropdownshortcuts").toggleClass("nah show");
              $("#shortcuts > i").toggleClass("bi-caret-down-fill bi-caret-up-fill");
           });
        $(document).keydown(function(e){
           if(e.which == 67){
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
        $(document).keydown(function(e){
           if(e.which == 40){
            $(".flip-panel:focus").next().focus();
           }
        });
        $(document).keydown(function(e){
           if(e.which == 38){
            $(".flip-panel:focus").prev().focus();
           }
        });
       $(document).ready(function(){
           $(".antilag").on("contextmenu", function(e){
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
        $(document).ready(function(){
           $(".antilag").click(function(){
              $(".context").css({
                 "display": "none" 
              });
           });
        });
   $("#tab-one").click(function(){
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
   
   $("#tab-two").click(function(){
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
   
   $("#tab-three").click(function(){
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
   $("#tab-four").click(function(){
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
   $("#darkmode").click(function(){
     $("body").toggleClass("dark");
     $("#darkmode > i").toggleClass("bi-brightness-high-fill bi-moon-stars-fill");
   });
    $(document).keydown(function(e){
      if (e.which == 68) {     
      $("body").toggleClass("dark");
      $("#darkmode > i").toggleClass("bi-brightness-high-fill bi-moon-stars-fill");
      }
    });
     $("#codeprompt").click(function(){
      let person = prompt("Please enter a passcode");
           if (person = "5831") {
               alert("Lol that did nothing");
             }
     });
