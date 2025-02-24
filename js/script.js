$(document).ready(function () {
  // عند التمرير
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("fixed-nav");
    } else {
      $(".navbar").removeClass("fixed-nav");
    }
  });


  $('.stat-number').each(function () {
    var $this = $(this);
    var countTo = parseInt($this.attr('data-count'));
    $({ countNum: 0 }).animate({
        countNum: countTo
    },
    {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
    });
  });
  $(".owl-suggestions").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    navText: [
      '<i class="fas fa-chevron-right"></i>', // Font Awesome right arrow
      '<i class="fas fa-chevron-left"></i>' // Font Awesome left arrow
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $('.owl-blog').owlCarousel({
    loop: true,
    rtl: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
  $('.owl-events').owlCarousel({
    loop: true,
    rtl: true,

    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
  $('.partners-slider').owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 }
    }
  });
});

