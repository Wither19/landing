$(document).ready(function(){
    $(".draggable").mousedown(function(){
       $(".draggable").on("mousemove", function(e){
    $(".draggable").css({
        'top': e.pageY - 100,
        'left': e.pageX - 100,
        'border': "2px dashed black",
        'filter': "brightness(1.5)",
        'opacity': "0.75",
        'cursor': 'grabbing'
    });
});
});
});
$(document).ready(function(){
    $(".draggable").mouseup(function(){
       $(".draggable").off("mousemove");
});
});
$(document).ready(function(){
    $(".draggable").mouseup(function(){
       $(".draggable").css({
          'border': "1px solid",
          'filter': "brightness(1)",
          'opacity': "1",
          'cursor': 'grab'
       });
});
});
