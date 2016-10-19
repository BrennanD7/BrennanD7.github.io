app.example = (function($){
  'use strict';

  function init(){
    $('div').addClass('loaded');
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
  setTimeout(function(){
      document.getElementById("HeroVideo").play();
  }, 2200);
  $("#loader").removeClass("u-display-none").delay(3500).queue(function(){
      $(this).addClass("u-display-none").dequeue();
  });
  $("#hero").removeClass("u-overflow-visible").delay(6000).queue(function(){
      $(this).addClass("u-overflow-visible").dequeue();
  });

})(jQuery);
