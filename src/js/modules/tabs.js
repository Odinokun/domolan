module.exports = function() {

  // begin tabs
  $('.internet-tab__btn').on('click', function() {
    var tabActive = $(this).data('tab');

    $('.internet-tab__btn, .internet-tariff').removeClass('active');
    $(this).addClass('active');
    $('.internet-tariff--' + tabActive).addClass('active');
  });
  // end tabs

};