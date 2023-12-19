var degrees = 0;
$(document).ready(function(){
    $(".f").click(function(){
        degrees += 90;
        $("#follow").css({
            "transform": "rotateZ(" + degrees + "deg)"
        });
    });
});
$(document).ready(function(){
    $(".b").click(function(){
        degrees -= 90;
        $("#follow").css({
            "transform": "rotateZ(" + degrees + "deg)"
        });
    });
});
