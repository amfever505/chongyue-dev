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
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    prevArrow: '<span class="slide-arrow prev-arrow"><<span>',
    nextArrow: '<span class="slide-arrow next-arrow">><span>',
  });
});

//ハンバーガーメニュー

$('.burger-btn').on('click', function () {
  //.btn_triggerをクリックすると
  $('.burger-btn').toggleClass('close'); //.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
  $('.nav-wrapper').fadeToggle(500); //.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
  $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
});
