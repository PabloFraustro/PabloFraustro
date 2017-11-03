$(document).ready(function() {

  $(".block_slack").on("click",function(){
    $("#Slackline_modal").modal('toggle');
  });

  $(".block_computer").hover(function(){
    $("#Computer_ON").toggle();
    $(".block_computer").css("cursor","pointer");
  });

});
