<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<style type="text/css">
div {
	float: left;
	margin: 10px;
	width: 90px;
	height: 90px;
	border: 1px solid #000;
}
.clear {
clear: both;
}
</style>

<script type="text/javascript">
$(document).ready(function() {
	$('#add').click(function() {
		$('div').add('.clear', 'p').css('backgroundColor','#ff0');
	});
});
</script>
</head>
<body>

	<button type="button" id="add">Resultado</button>

	<div>Primeiro</div>
	<div>Segundo</div>
	<div>Terceiro</div>
	<p class="clear">Parágrafo com o class clear </p>
	<p> <span class="clear">Parágrafo com o class clear </span></p>
	<b class="clear">Parágrafo com o class clear </b>
	<p><i class="clear">Parágrafo com texto italico da classe clear </i> </p>
	<p></p>

</body>
</html>