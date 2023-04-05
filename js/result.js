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
  } else {
    if ($("#slider").hasClass("slick-initialized")) {
      $("#slider").slick("unslick");
    }
  }
}

$(document).ready(function () {
  slider();
});

$(window).on("resize", function () {
  slider();
});
