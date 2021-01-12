(function ($) {


// pagina pre carregamento do site
//$(window).on('load', function() {
  //$("#loader").delay(900).fadeOut("slow");
  //$("#loader").delay(900).addClass("abre-tela");
  //$("#loader").delay(300).slideUp("slow");
//})

/*-----------------------------------------------------------------------------*/
/*  Rolagem suave de tela para os links de Ancora, ligados uma section com ID
/*-----------------------------------------------------------------------------*/
$('a[href*="#"]:not([href="#"])').on('click', function() {
  let target = $(this.hash);
  console.log(target.length);
  if (target.length) {
    $('html, body').animate({ scrollTop: target.offset().top }, 1000);
    $('.navbar-collapse').collapse('hide');
    return false;
  }
});

$(document).on("scroll", function () {
  let nav = $(".main-menu");
  let scroll = $(window).scrollTop();
  if (scroll >= 10) {
    nav.addClass("scrolled");
  } else {
    nav.removeClass("scrolled");
  }
});

})(jQuery);
