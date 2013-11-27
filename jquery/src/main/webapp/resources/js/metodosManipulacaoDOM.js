$(document).ready(
		function() {
			$('#frase').click(
					function() {
						var valorAtributo = $('#titulo').attr('title');

						$('#resultado').css('display', 'block').text(
								'O valor do atributo title é' + ' '
										+ valorAtributo);
					});
		});

$(document).ready(function() {
	
	$('#buttonImg').click(function() {
		$('#imagem').show().attr({ src:"../resources/img/coringa.jpg", alt:"Foto do Coringa"
			
		});
	});
});

$(document).ready(function() {
	
	$('#hideAll').click(function() {
		$('#imagem').hide();
		$('#resultado').css('display', 'none');
			
		});
	});

$(document).ready(function() {
	$('img').click(function() {
	$('p.msg').empty();
	$('img').attr('width', function(i, valor) {
		$('<p class="msg"> width = ' + valor*(i +1) + 'px<p/>').insertAfter(this);
		return (valor*(i +1));
		});
	});
});

$(document).ready(function() {
	$('#botao').click(function () {
		$('#remover').removeAttr('id');
	});
});

$(document).ready(function() {
	$('#adicionar').click(function() {
		$('p').addClass('minha_classe');
	});
});
