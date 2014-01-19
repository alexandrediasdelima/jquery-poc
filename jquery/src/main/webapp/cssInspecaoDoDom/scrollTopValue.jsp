<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>

</head>
<body>
	<p>
		Role a barra para qualquer posição e clique o botão <strong>Coordenadas
			Scroll</strong>
	</p>
	
	<div id="rolagem">
		<p>
			
			<p>teste</p>
			<p>teste1</p>
			<p>teste2</p>
			<p>teste3</p>
			<p>teste4</p>
			<p>teste5</p>
			<p>teste6</p>
			<p style="height: 500px;">teste7</p>
			<p>teste8</p>
			<button type="button" id="botao">Scroll</button>
			<p style="height: 0px;">teste8</p>
			
			
			
	</div>
	<span></span>
</body>
<script type="text/javascript">

$(document).ready(function() {
	$('#botao').click(function() {
		$('body,html').animate({scrollTop:0},0);
		});
});

</script>
</html>