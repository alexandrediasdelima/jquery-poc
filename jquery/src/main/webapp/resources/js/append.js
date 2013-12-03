$(document).ready(function () {
	$('#append').click(function() {
		$('p').append('<strong> Aqui Texto Inserido com Jquery</string>');
	});
});

$(document).ready(function() {
	$('#appendTo').click(function(){
		$('<strong>Aqui Texto inserido com Jquery. </strong> ').appendTo('p');
	});
});