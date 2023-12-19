           $("october").click(function(){
              $("#dropdownoctober").toggleClass("nah show"); 
           });
           $("november").click(function(){
              $("#dropdownnovember").toggleClass("nah show"); 
           });
        $(document).keydown(function(e){
           if(e.which == 67){
            $("#dropdownoctober, #dropdownnovember").removeClass("show");
            $("#dropdownoctober, #dropdownnovember").addClass("nah");
           }
        });
