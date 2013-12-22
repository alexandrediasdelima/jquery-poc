$(document).ready(function() {
	$('#help').click(function() {

		var corFundo = $('div').css('backgroundColor');
		$('span').text('A cor do fundo da div é ' + corFundo);
	});
});

$(document).ready(function() {
	$('#multipla').click(function() {
		$('div').css({
			width : '400px;',
			lineHeigth : '60px;',
			background : 'red',
			border : '1px dotted #000'
		});
	});
});

$(document).ready(
		function() {
			$('#coordenadas').click(
					function() {
						var cordenadas = $('.coordenadas').offset();
						alert(cordenadas);
						$('#spanHelp').html(
								'As coordenadas do div são <br/> left'
										+ cordenadas.left + 'px<br/> top: '
										+ cordenadas.top + ' px');
					});
		});

$(document)
		.ready(
				function() {
					$('button:eq(0)')
							.click(
									function() {
										var rolagemVertical = $('#rolagem')
												.scrollTop();
										var rolagemHorizontal = $('#rolagem')
												.scrollLeft();
										$('span')
												.html(
														'posição da rolagem vertical: '
																+ rolagemVertical
																+ 'px <br/> posição da rolagem horizontal: '
																+ rolagemHorizontal
																+ 'px');
									});

					$('button:eq(1)').click(function() {
						$('#rolagem').scrollTop(0);
						$('#rolagem').scrollLeft(0);
						$('span').empty();
					});
				});

$(document).ready(function() {
	$('#filter').click(function() {
		
		$('p').filter('.alvo').css('color','red');
	});
});

$(document).ready(function() {
	$('#not').click(function() {
		$('p').not('.alvo').css('color','red');
	});
});

$(document).ready(function() {
	$('#slice').click(function() {
		$('div').slice(1,5).css('backgroundColor','#ff0');
	});
});


