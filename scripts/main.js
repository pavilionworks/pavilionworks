var bodyHeight = $('body').height();

$("#backToTop").click(function() {
  $('html, body').animate({
    scrollTop: '0px'
  }, 1500);
});


$("#toBlurb").click(function() {
  $('html, body').animate({
    scrollTop: (bodyHeight / 3)
  }, 1500);
});

$("#toContact").click(function() {
  $('html, body').animate({
    scrollTop: (bodyHeight / 1.5)
  }, 1500);
});

$(window).resize(function() {
  bodyHeight = $('body').height();
});
