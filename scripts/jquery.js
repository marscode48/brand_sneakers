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

  /*=================================================
  スムーススクロール
  ===================================================*/

  // ＃から始まるリンクを取得
  $('a[href^="#"]').click(function() {
    console.log(this);
    // リンクをクリックした時のジャンプ先のid名を取得
    let href= $(this).attr("href");
    console.log(href)
    // 空白or#のみだったらリンク先を「html」に設定
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    console.log(position)
    // スムーズスクロールを実行
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
});