
$(document).ready(function() {

// //Slack effects
//   $(".block_slack").on("click",function(){
//     $("#Slackline_modal").modal('toggle');
//   });

//   //Computer effects

//   $(".block_computer").hover(function(){
//     $("#Computer_ON").toggle();
//     $(".block_computer").css("cursor","pointer");
//   }
// );

//   $(".block_computer").on("click",function(){
//     $("#Computer_modal").modal('toggle');
//   });

// //Woodman effects

//   $(".block_woodman").on("click",function(){
//     $("#Creativity_modal").modal('toggle');
//   });

//   //Electronics effects

//   $(".block_micro").on("click",function(){
//     $("#Electronics_modal").modal('toggle');
//   });

//   //scroll top on computer modal

//   $('#Computer_modal').on('shown.bs.modal', function () {
//     $('#Computer_modal').scrollTop(0);
// });

// $('#Slackline_modal').on('shown.bs.modal', function () {
//   $('#Slackline_modal').scrollTop(0);
// });

//   // Automatically close vimeo video when closing modal
//   var $frame_1 = $('iframe#embedded_video_1');
//   var $frame_2 = $('iframe#embedded_video_2');

//   $('#Slackline_modal').on('hidden.bs.modal', function () {
//     // saves the current iframe source
//     var vidsrc_1 = $frame_1.attr('src');
//     var vidsrc_2 = $frame_2.attr('src');

//     // sets the source to nothing, stopping the video
//     $frame_1.attr('src','');
//     $frame_2.attr('src','');

//     // sets it back to the correct link so that it reloads immediately on the next window open
//     $frame_1.attr('src', vidsrc_1);
//     $frame_2.attr('src', vidsrc_2);
// });

var anim_b2_1;
var anim_b2_2;
var anim_b2_3;
var anim_b2_4;

$('.b2_1').mouseenter(function(){
  $(".b2_1").css("cursor","pointer");
  anim_b2_1 = bodymovin.loadAnimation({
    container: document.getElementById('anim_b2_1'),
    renderer: 'svg',
    loop: false,
    autoplay:true,
    path: 'js/animation_1/data.json'
  })
});

$('.b2_1').mouseleave(function(){
  anim_b2_1.destroy();
});

$('.b2_2').mouseenter(function(){
  $(".b2_2").css("cursor","pointer");
  anim_b2_2 = bodymovin.loadAnimation({
    container: document.getElementById('anim_b2_2'),
    renderer: 'svg',
    loop: false,
    autoplay:true,
    path: 'js/animation_2/data_2.json'
  })
});

$('.b2_2').mouseleave(function(){
  anim_b2_2.destroy();
});


$('.b2_3').mouseenter(function(){
  $(".b2_3").css("cursor","pointer");
  anim_b2_3 = bodymovin.loadAnimation({
    container: document.getElementById('anim_b2_3'),
    renderer: 'svg',
    loop: false,
    autoplay:true,
    path: 'js/animation_3/data_3.json'
  })
});

$('.b2_3').mouseleave(function(){
  anim_b2_3.destroy();
});

$('.b2_4').mouseenter(function(){
  $(".b2_4").css("cursor","pointer");
  anim_b2_4 = bodymovin.loadAnimation({
    container: document.getElementById('anim_b2_4'),
    renderer: 'svg',
    loop: false,
    autoplay:true,
    path: 'js/animation_4/data_4.json'
  })
});

$('.b2_4').mouseleave(function(){
  anim_b2_4.destroy();
});


});
