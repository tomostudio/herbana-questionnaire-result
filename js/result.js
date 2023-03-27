$(document).ready(function () {
  $('#slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    pauseOnHover: false,
    fade: false,
    easing: 'ease',
    speed: 600,
  });

  $('[data-space]').each(function () {
    var $this = $(this),
      $space = $this.attr('data-space');

    $('.slick-slide').css({
      marginLeft: $space + 'px',
      marginRight: $space + 'px',
    });

    $('.slick-list').css({
      marginLeft: -$space + 'px',
      marginRight: -$space / 2 + 'px',
    });
  });
});
