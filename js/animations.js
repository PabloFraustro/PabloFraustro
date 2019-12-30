
$(document).ready(function() {

  
    if (window.innerWidth < 650) {
      $('#warning_modal').modal('show');
    }
  // modal content managment

  //projects

  //init

  $('#midi_section').hide();
  $('#kuniyoshi_section').hide();
  $('#hand_section').hide();
  $('#marella_section').hide();


  $(".li_midi").click(function(){
    
    window.scrollTo(0,0);
    $('#kuniyoshi_section').hide();
    $('#hand_section').hide();
    $('#marella_section').hide();
    if($('#midi_section').is(':visible')){
      $('#midi_section').hide();
    }
    else{
      $('#midi_section').show();
    }
  });

  $(".li_kuniyoshi").click(function(){
    window.scrollTo(0,0);
    $('#midi_section').hide();
    $('#hand_section').hide();
    $('#marella_section').hide();
    if($('#kuniyoshi_section').is(':visible')){
      $('#kuniyoshi_section').hide();
    }
    else{
      $('#kuniyoshi_section').show();
    }
  });

  $(".li_hand").click(function(){
    window.scrollTo(0,0);
    $('#midi_section').hide();
    $('#kuniyoshi_section').hide();
    $('#marella_section').hide();
    if($('#hand_section').is(':visible')){
      $('#hand_section').hide();
    }
    else{
      $('#hand_section').show();
    }
  });

  $(".li_marella").click(function(){
    window.scrollTo(0,0);
    $('#midi_section').hide();
    $('#kuniyoshi_section').hide();
    $('#hand_section').hide();
    if($('#marella_section').is(':visible')){
      $('#marella_section').hide();
    }
    else{
      $('#marella_section').show();
    }
  });

// Modals

 $(".b2_1").on("click",function(){
    $("#b2_1_modal").modal('toggle');
  });

  $(".b2_2").on("click",function(){
    $("#b2_2_modal").modal('toggle');
  });

  $(".b2_3").on("click",function(){
    $("#b2_3_modal").modal('toggle');
  });

  $(".b2_4").on("click",function(){
    $("#b2_4_modal").modal('toggle');
  });

// $(".zoom").hover(function(){

// $(this).addClass('transition');
// }, function(){
    
// $(this).removeClass('transition');
// });
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

  // Automatically close vimeo video when closing modal
  var $frame_1 = $('#embedded_video_1');
  var $frame_2 = $('#embedded_video_2');


  $('#b2_1_modal').on('hidden.bs.modal', function () {
    // saves the current iframe source
    var vidsrc_1 = $frame_1.attr('src');

    // sets the source to nothing, stopping the video
    $frame_1.attr('src','');

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame_1.attr('src', vidsrc_1);
});

$('#b2_2_modal').on('hidden.bs.modal', function () {
  // saves the current iframe source
  var vidsrc_2 = $frame_2.attr('src');

  // sets the source to nothing, stopping the video
  $frame_2.attr('src','');

  // sets it back to the correct link so that it reloads immediately on the next window open
  $frame_2.attr('src', vidsrc_2);
});



var anim_b2_1;
var anim_b2_2;
var anim_b2_3;
var anim_b2_4;
 //support just mobile animations

$('.b2_1').mouseenter(function(){
  $(".b2_1").css("cursor","pointer");
  anim_b2_1 = bodymovin.loadAnimation({
    container: document.getElementById('anim_b2_1'),
    renderer: 'svg',
    loop: false,
    autoplay:true,
    path: 'js/animation_1/data.json'
  })
  anim_b2_1.setSpeed(2);
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
  anim_b2_2.setSpeed(2);
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
  anim_b2_3.setSpeed(2);
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
  anim_b2_4.setSpeed(2);
});

$('.b2_4').mouseleave(function(){
  anim_b2_4.destroy();
});


// Mobile versions

  $('.block_woodman').on("click",function(){
    $("#b2_1_modal").modal('toggle');
    $('#midi_section').show();
    $('#kuniyoshi_section').show();
    $('#hand_section').show();
  });


  $('.b1_mobile').on("click",function(){
    $("#b2_2_modal").modal('toggle');

  });


  $('.b2_mobile').on("click",function(){
    $("#b2_3_modal").modal('toggle');
  });


  $('.b3_mobile').on("click",function(){
    $("#b2_4_modal").modal('toggle');
  });
  

  //backup

  // $('.block_woodman').on("click",function(){
  //   anim_b2_1 = bodymovin.loadAnimation({
  //     container: document.getElementById('anim_b2_1_mobile'),
  //     renderer: 'svg',
  //     loop: false,
  //     autoplay:true,
  //     path: 'js/animation_1/data.json'
  //   })
  //   anim_b2_1.setSpeed(4);
  //   anim_b2_1.addEventListener("complete", function(){
  //   $("#b2_1_modal").modal('toggle');
  //   anim_b2_1.destroy();
  //   });
  //   $('#midi_section').show();
  //   $('#kuniyoshi_section').show();
  //   $('#hand_section').show();
  // });


  // $('.b1_mobile').on("click",function(){
  //   anim_b2_2 = bodymovin.loadAnimation({
  //     container: document.getElementById('anim_b2_2_mobile'),
  //     renderer: 'svg',
  //     loop: false,
  //     autoplay:true,
  //     path: 'js/animation_2/data_2.json'
  //   })
  //   anim_b2_2.setSpeed(4);
  //   anim_b2_2.addEventListener("complete", function(){
  //   $("#b2_2_modal").modal('toggle');
  //   anim_b2_2.destroy();
  //   });
  // });


  // $('.b2_mobile').on("click",function(){
  //   anim_b2_3 = bodymovin.loadAnimation({
  //     container: document.getElementById('anim_b2_3_mobile'),
  //     renderer: 'svg',
  //     loop: false,
  //     autoplay:true,
  //     path: 'js/animation_3/data_3.json'
  //   })
  //   anim_b2_3.setSpeed(4);
  //   anim_b2_3.addEventListener("complete", function(){
  //   $("#b2_3_modal").modal('toggle');
  //   anim_b2_3.destroy();
  //   });
  // });


  // $('.b3_mobile').on("click",function(){
  //   anim_b2_4 = bodymovin.loadAnimation({
  //     container: document.getElementById('anim_b2_4_mobile'),
  //     renderer: 'svg',
  //     loop: false,
  //     autoplay:true,
  //     path: 'js/animation_4/data_4.json'
  //   })
  //   anim_b2_4.setSpeed(4);
  //   anim_b2_4.addEventListener("complete", function(){
  //   $("#b2_4_modal").modal('toggle');
  //   anim_b2_4.destroy();
  //   });
  // });
  


});
