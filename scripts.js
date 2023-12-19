           $("october").click(function(){
              $("#dropdown").toggleClass("nah show"); 
        $(document).keydown(function(e){
           if(e.which == 67){
            $("#dropdown").removeClass("show");
            $("#dropdown").addClass("nah");
           }
        });
