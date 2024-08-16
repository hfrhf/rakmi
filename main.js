
document.addEventListener("DOMContentLoaded", function() {
  $('.center').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    arrows: false,
    rtl: true,
    adaptiveHeight: false,
    infinite: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        }
      }
    ],
})});


