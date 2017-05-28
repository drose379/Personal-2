$(document).ready( function() {
  if( $(window).width() >= 1100 )
    alignContent();
  else {
    var contentTopMargin = $('nav').outerHeight() + $('nav').find('.col').outerHeight();
    $('#landing-rest').css('margin-top', contentTopMargin);
  }

  $(window).resize( function() {
    //alignContent();

    if( $(window).width() >= 1100 ) {
      $('#landing-rest').css( 'margin-top', '1.5em' )
      alignContent()
    } else {
      var contentTopMargin = $('nav').outerHeight() + $('nav').find('.col').outerHeight() + 50;
      $('#landing-rest').css('margin-top', contentTopMargin);
      $('#landing-rest').css('margin-left', '0');
    }

  } );

  function alignContent() {
    var contentLeftMargin = $('nav').offset().left + $('nav').outerWidth();
    $('#landing-rest').css( 'margin-left', contentLeftMargin );
  }
});
