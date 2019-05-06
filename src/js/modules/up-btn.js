module.exports = function() {

  // begin tab in migration page
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 1200) {
        $('.up-btn').addClass('active');
      } else {
        $('.up-btn').removeClass('active');
      }
    });

    $('.up-btn').click(function() {
      $('body,html').animate({scrollTop:0},800);
    });
  });
  // end   tab in migration page

};