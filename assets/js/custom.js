(function($) {
  var $root = $('html, body');

  //On nav click scrool to
  $('.navbar-nav a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top

    }, 600, function () {
      //Update the url
      window.location.hash = href;
    });

    return false;
  });

})(jQuery);
