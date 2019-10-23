
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

  //scroll top on computer modal

  $('#Computer_modal').on('shown.bs.modal', function () {
    $('#Computer_modal').scrollTop(0);
});

$('#Slackline_modal').on('shown.bs.modal', function () {
  $('#Slackline_modal').scrollTop(0);
});

  // Automatically close vimeo video when closing modal
  var $frame_1 = $('iframe#embedded_video_1');
  var $frame_2 = $('iframe#embedded_video_2');

  $('#Slackline_modal').on('hidden.bs.modal', function () {
    // saves the current iframe source
    var vidsrc_1 = $frame_1.attr('src');
    var vidsrc_2 = $frame_2.attr('src');

    // sets the source to nothing, stopping the video
    $frame_1.attr('src','');
    $frame_2.attr('src','');

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame_1.attr('src', vidsrc_1);
    $frame_2.attr('src', vidsrc_2);
});


});
