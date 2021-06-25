let mvItems = $('.mv-item');
let mvUrl = 'url("./img/home/mv_';
$('.mv-item').each(function (index, elem) {
  $(elem).css('background-image', mvUrl + index + '.jpeg")');
});
// url("./img/home/mv_1.jpeg")
$(document).ready(function () {
  $('.mv-box').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    prevArrow: '<span class="slide-arrow prev-arrow"><<span>',
    nextArrow: '<span class="slide-arrow next-arrow">><span>',
  });
});
console.log($('.mv-item')[0]);
