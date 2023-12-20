        $("#colors1 button:nth-child(1)").mouseover(function(){
       $("#colorname").html("Red");
    });
        $("#colors1 button:nth-child(2)").mouseover(function(){
       $("#colorname").html("Orange");
    });
        $("#colors1 button:nth-child(3)").mouseover(function(){
       $("#colorname").html("Yellow");
    });
        $("#colors1 button:nth-child(4)").mouseover(function(){
       $("#colorname").html("Green");
    });
        $("#colors1 button:nth-child(5)").mouseover(function(){
       $("#colorname").html("Blue");
    });
        $("#colors1 button:nth-child(6)").mouseover(function(){
       $("#colorname").html("Purple");
    });
        $("#colors1 button:nth-child(7)").mouseover(function(){
       $("#colorname").html("Pink");
    });
        $("#colors1 button:nth-child(1)").click(function(){
       $("#hex").html("#FF0000");
       $("#rgb").html("255, 0, 0");
    });
        $("#colors1 button:nth-child(2)").click(function(){
       $("#hex").html("#FFA500");
       $("#rgb").html("255, 165, 0");
    });
        $("#colors1 button:nth-child(3)").click(function(){
       $("#hex").html("#FFFF00");
       $("#rgb").html("255, 255, 0");
    });
        $("#colors1 button:nth-child(4)").click(function(){
       $("#hex").html("#00FF00");
       $("#rgb").html("0, 255, 0");
    });
        $("#colors1 button:nth-child(5)").click(function(){
       $("#hex").html("#000FF");
       $("#rgb").html("0, 0, 255");
    });
        $("#colors1 button:nth-child(6)").click(function(){
       $("#hex").html("#9370DB");
       $("#rgb").html("147, 112, 219");
    });
        $("#colors1 button:nth-child(7)").click(function(){
       $("#hex").html("#FFC0CB");
       $("#rgb").html("255, 192, 203");
    });
        $("#colors1 button").mouseout(function(){
       $("#colorname").html("");
    });
        $("#optionscollapse").click(function(){
       $("#colors1").toggleClass("show nah")
    });
