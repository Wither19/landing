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
