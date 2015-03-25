$(document).ready(function() {
  $(".columns").hide();
  //toggle the componenet with class msg_body
  $(".columnheader").click(function()
  {
   $(this).next(".columns").slideToggle(500);
  });
});


$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#menu');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                right: 0,
                
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});

