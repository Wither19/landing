  $( function() {
$( "#datepicker" ).datepicker({
  showAnim: "blind",
  onSelect: function (date, datepicker) { 
    if (date != "") { 
  $("#text").html("The date selected is: " + date); 
      }
  } 
});
});
$( function() {
    $( "#grid" ).draggable({ grid: [ 40, 40 ] });
  });
