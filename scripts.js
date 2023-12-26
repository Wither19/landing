           $("october").click(function(){
              $("#dropdownoctober").toggleClass("nah show"); 
           });
           $("november").click(function(){
              $("#dropdownnovember").toggleClass("nah show"); 
           });
           $("#shortcuts").click(function(){
              $("#dropdownshortcuts").toggleClass("nah show"); 
           });
        $(document).keydown(function(e){
           if(e.which == 67){
            $("#dropdownoctober").removeClass("show");
            $("#dropdownoctober").addClass("nah");
           }
        });
        $(document).keydown(function(e){
           if(e.which == 67){
            $("#dropdownnovember").removeClass("show");
            $("#dropdownnovember").addClass("nah");
           }
        });
        $(document).keydown(function(e){
           if(e.which == 67){
            $("#dropdownshortcuts").removeClass("show");
            $("#dropdownshortcuts").addClass("nah");
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
