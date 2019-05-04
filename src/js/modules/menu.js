module.exports = function() {

  // begin menu-burger

  $('#burger').click(function(){
    $(this).toggleClass('open');
    $('#header-menu').toggleClass('open');
  });

  // end menu-burger

};