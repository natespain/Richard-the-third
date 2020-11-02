$(document).ready(function(){
$(".click").click(function(){
  var target = $(this).parent().children(".expand");
  $(target).slideToggle();
});
});
$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-holder").fitVids();
  });
