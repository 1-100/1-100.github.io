

// Slick Slider

$(document).ready(function(){
  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed: 30,
    arrows: false,
    infinite: true,
    speed: 1,
    fade: true,
    cssEase: 'linear'
  });
});


// Filtro

function getParameter( parametersName ) {
  let parameters = new URLSearchParams( window.location.search );
  return parameters.get( parametersName );
}

function filtrarElementos( valor ) {
  if (valor === 'todas') {
    $('.item').show('1000');
  } else {
    $('.item').not('.'+valor).hide('1000');
    $('.item').filter('.'+valor).show('1000');
  }
}

function atualizarFiltros( elemento ) {
  $('.lista-filtros li').children().removeClass('ativo');
  elemento.addClass('ativo');
}

$( document ).ready(function() {

  const valorURL = getParameter( 'filtro' );
  console.log(valorURL);

  if ( valorURL ) {
    filtrarElementos( valorURL );
    
    const filtroAtivo = $('.filtro .botao[data-filter=' + valorURL + ']');
    console.log(filtroAtivo)
    atualizarFiltros( filtroAtivo );
    var elmnt = document.getElementById("filtros");
    elmnt.scrollIntoView();
  }

  $('.lista-filtros .botao').click(function(){
    const valor = $(this).attr('data-filter');
    filtrarElementos( valor );
  });

  // Adiciona a classe ativa ao botão
  $('.lista-filtros li').click(function(){
    atualizarFiltros( $(this) );
  })

});

function getParameter( parametersName ) {
  let parameters = new URLSearchParams( window.location.search );
  return parameters.get(  parametersName );
}

//Voltar ao topo:

$(document).ready(function(){ 
  $('#botao_topo').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
  });
});


// Loading

$(window).on('load', function(){
  $('.loader').addClass('esconde');
  $('.conteudo').removeClass('carregando')
});
