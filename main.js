$(document).ready( function() {
  alignContent();

  $(window).resize( function() {
    alignContent();
  } );

  function alignContent() {
    var contentLeftMargin = $('nav').offset().left + $('nav').outerWidth();
    $('#landing-rest').css( 'margin-left', contentLeftMargin );
    $('#test').css('margin-left', contentLeftMargin);
  }
});
