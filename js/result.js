function slider() {
  if ($(window).width() < 751) {
    $("#slider").slick({
      dots: true,
      arrows: false,
      autoplay: false,
      pauseOnHover: false,
      fade: false,
      easing: "ease",
      speed: 600,
      slidesToShow: 1,
    });
    $("[data-space]").each(function () {
      var $this = $(this),
        $space = $this.attr("data-space");
      $(".slick-slide").css({
        marginLeft: $space + "px",
        marginRight: $space + "px",
      });
      $(".slick-list").css({
        marginLeft: -$space + "px",
        marginRight: -$space / 2 + "px",
      });
    });
  }else {
    if($('#slider').hasClass('slick-initialized')) {
      console.log("ada")
      $('#slider').slick('unslick');
    }
  }
}

$(document).ready(function () {
  slider();
});

$(window).on("resize", function () {
  slider();
});
