$(document).ready( function() {
  var contentLeftMargin = $('nav').offset().left + $('nav').outerWidth();

  console.log( contentLeftMargin );
  $('#landing-rest').css( 'margin-left', contentLeftMargin );
  $('#test').css('margin-left', contentLeftMargin);
});
