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

$(document).ready(function() {
	$('#prepend').click(function(){
		$('#paragrafoUM').prepend(function(){
			
			return '<strong>Inserido com jquery </strong>';
		});
	});
});

$(document).ready(function() {
	$('#after').click(function(){
		$('#paragrafoAfter').after('<strong>Aqui Texto inserido com Jquery. </strong> ');
	});
});

$(document).ready(function() {
	$('#wrap').click(function(){
		$('p').wrap('<div class="container"></div>');
	});
});

$(document).ready(function() {
	$('#wrapAll').click(function(){
		$('p').wrapAll('<div class="container"></div>');
	});
});

$(document).ready(function() {
	$('.demo').hover(function() {
		$(this).toggleClass("demo");
	});
	
	
	$('button:eq(1)').css('display','none');
	
	$('button:eq(0)').click(function() {
		$(this).css('display', 'none');
		$('button:eq(1)').css('display', 'block');
		var detach = $('.demo').detach();
		
	});
	
	$('button:eq(1)').click(function() {
		$(this).css('display', 'none');
		$('button:eq(0)').css('display', 'block');
		detach.appendTo('#container');
	});
});



