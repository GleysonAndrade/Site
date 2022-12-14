// Referência : https://api.jquery.com/category/events/
$(function(){
	// Aqui vai todo nosso código de javascript
	$('nav.mobile').click(function(){
		// o que vai acontecer quando clicar na nav mobile
		var listaMenu = $('nav.mobile ul');

		if(listaMenu.is(':hidden') == true){
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fa-bars');
			icone.addClass('fa-times')
			listaMenu.slideToggle();
		}
		else{
			var icone = $('.botao-menu-mobile').find('i');
			icone.removeClass('fa-times');
			icone.addClass('fa-bars')
			listaMenu.slideToggle();
		}
	});
	// Sistema de rolagem
	if($('target').length > 0){
		//o elemento existe, portanto precisamos da o scroll em algum elemento.
		var elemento = '#'+$('target').attr('target');
		var divScroll = $(elemento).offset().top;
		$('html,body').animate({'scrollTop':divScroll},2000);
	}

	//Carrega páginas dinamicamente
	carregarDinamico();
	function carregarDinamico(){
		$('[realtime]').click(function(){
			var pagina = $(this).attr('realtime');
			$('.container-principal').hide();
			$('.container-principal').load(include_path+'pages/'+pagina+'.php');

			setTimeout(function(){
				initialize();
				addMarker(-20.041942, -44.050342,'','Minha casa',undefined,false);
			},1000);

			$('.container-principal').fadeIn(1000);
			
			return false;
		})
	}
})