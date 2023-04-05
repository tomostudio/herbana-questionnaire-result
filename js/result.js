function slider() {
  if ( window.innerWidth < 751) {
    $('#slider').slick({
      dots: true,
      arrows: false,
      autoplay: false,
      pauseOnHover: false,
      fade: false,
      easing: 'ease',
      speed: 600,
      infinite: false,
      // centerMode: true,
      focusOnSelect: true,
      slidesToShow: 1,
      variableWidth: true,
    });
  } else {
    if ($('#slider').hasClass('slick-initialized')) {
      $('#slider').slick('unslick');
    }
  }
}

$(document).ready(function () {
  slider();
});

$(window).on('resize', function () {
  slider();
});
