module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function() {
    var tariff = $(this).siblings('.tariff-title').text();
    var tariffInput = $('.popup__input--tariff');

    $(tariffInput).val(tariff);
    $('.popup, .popup-layer').fadeIn();
  });
  // end popup open

  // temp popup close
  $('.popup__btn').on('click', function() {
    $('.popup').fadeOut();
    $('.popup-success').fadeIn();
  });
  // temp popup close

  // begin popup close
  $('.popup-layer, .popup__close, .popup-success__close').on('click', function() {
    $('.popup, .popup-success, .popup-layer').fadeOut();
  });
  // end popup close

};