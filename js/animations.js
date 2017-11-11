$(document).ready(function() {

//Slack effects
  $(".block_slack").on("click",function(){
    $("#Slackline_modal").modal('toggle');
  });

  //Computer effects

  $(".block_computer").hover(function(){
    $("#Computer_ON").toggle();
    $(".block_computer").css("cursor","pointer");
  }
);

  $(".block_computer").on("click",function(){
    $("#Computer_modal").modal('toggle');
  });

//Woodman effects

  $(".block_woodman").on("click",function(){
    $("#Creativity_modal").modal('toggle');
  });

  //Electronics effects

  $(".block_micro").on("click",function(){
    $("#Electronics_modal").modal('toggle');
  });



});
