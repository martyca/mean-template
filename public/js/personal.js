$(function(){
  $("#myButton").on("click", function(){
    $("#cartman").toggle();
  });
  $("#mongobutton").on("click", function(){
    $.post("/", function(data){
      $("#mongoresult").html(data);
    });
  });

});
