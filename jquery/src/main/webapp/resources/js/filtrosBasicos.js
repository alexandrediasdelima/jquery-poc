$(document).ready(function() {
	$('button').click(function() {
		$ ('li:first').css('background','red');
	});
});

$(document).ready(function() {
	$('#ultimoItem').click(function() {
		$('li:last').css('background','red');
	});
});

$(document).ready(function() {
	$('#notItem').click(function() {
		$('li:not(li:first)').css('background','red');
	});
});

$(document).ready(function() {
	$('#odd').click(function() {
		$('tr:odd').css('background','red');
	});
});

$(document).ready(function() {
	$('#even').click(function() {
		$('tr:even').css('background','red');
	});
});

$(document).ready(function () {
	$('#eq').click(function() {
		$('tr:eq(2)').css('background','red');
	});
});

$(document).ready(function () {
	$('#gt').click(function () {
		$('tr:gt(2)').css('background', 'red');
	});
});

$(document).ready(function () {
	$('#lt').click(function () {
		$('tr:lt(2)').css('background', 'red');
	});
});

$(document).ready(function () {
	$('#header').click(function () {
		$(':header').css('background', 'red');
	});
});

$(document).ready(function() {
	$('#contains').click(function () {
		$('p:contains(Alexandre)').css('background','red');
	});
});

$(document).ready(function () {
	$('#empty').click(function() {
		$('td:empty').css('background','red');
	});
});

$(document).ready(function () {
	$('#has').click(function () {
		$('p:has(strong)').css('background','red');
	});
});

$(document).ready(function () {
	$('#parent').click(function () {
		$('p:parent').css('background','red');
	});
});

$(document).ready(function () {
	$('#hidden').click(function () {
		var qtd = $('input:hidden').length;
		alert(qtd);
	});
});
