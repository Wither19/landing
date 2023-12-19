        $("button:nth-child(2)").mouseover(function(){
       $("#colorname").html("Red");
    });
        $("button:nth-child(3)").mouseover(function(){
       $("#colorname").html("Orange");
    });
        $("button:nth-child(4)").mouseover(function(){
       $("#colorname").html("Yellow");
    });
        $("button:nth-child(5)").mouseover(function(){
       $("#colorname").html("Green");
    });
        $("button:nth-child(6)").mouseover(function(){
       $("#colorname").html("Blue");
    });
        $("button:nth-child(7)").mouseover(function(){
       $("#colorname").html("Purple");
    });
        $("button:nth-child(8)").mouseover(function(){
       $("#colorname").html("Pink");
    });
        $("button:nth-child(2)").click(function(){
       $("#hex").html("#FF0000");
       $("#rgb").html("255, 0, 0");
    });
        $("button:nth-child(3)").click(function(){
       $("#hex").html("#FFA500");
       $("#rgb").html("255, 165, 0");
    });
        $("button:nth-child(4)").click(function(){
       $("#hex").html("#FFFF00");
       $("#rgb").html("255, 255, 0");
    });
        $("button:nth-child(5)").click(function(){
       $("#hex").html("#00FF00");
       $("#rgb").html("0, 255, 0");
    });
        $("button:nth-child(6)").click(function(){
       $("#hex").html("#000FF");
       $("#rgb").html("0, 0, 255");
    });
        $("button:nth-child(7)").click(function(){
       $("#hex").html("#9370DB");
       $("#rgb").html("147, 112, 219");
    });
        $("button:nth-child(8)").click(function(){
       $("#hex").html("#FFC0CB");
       $("#rgb").html("255, 192, 203");
    });
        $("button").mouseout(function(){
       $("#colorname").html("");
    });
        $("#optionscollapse").click(function(){
       $("#colors1").toggleClass("show nah")
    });
