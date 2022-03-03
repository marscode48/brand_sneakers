$(function() {
  /*=================================================
  スマホメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
  $('.header__btn').on('click', function() {
    if ($('.header').hasClass('open')) {
      $('.header').removeClass('open');
    } else {
      $('.header').addClass('open');
    }
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function() {
    $('.header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('.header__navi a').on('click', function() {
    $('.header').removeClass('open');
  })
});