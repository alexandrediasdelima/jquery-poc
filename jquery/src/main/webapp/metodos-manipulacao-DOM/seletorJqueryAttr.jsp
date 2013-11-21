<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="../resources/js/metodosManipulacaoDOM.js"></script>

<style type="text/css" media="all">
#resultado{
	display: none;
	width: 300px;
	padding: 8px 12px;
	border: 1px solid #000;
	background: #ff0;
}
#imagem {
display: none;
}
</style>

</head>
<body>

<!-- Primeiro exemplo de attr -->
	<button type="button" id="frase">exibir frase com valor do title</button>
	<h1 title="logotipo" id="titulo">Cabecalho nivel 1 com atributo title =
		"logotipo"
	</h1>
	<p id="um"> primeiro paragrafo com atributo id="um"</p>
	<p class="diferente"> Segundo paragrafo com atributo class="diferente"</p>
	<div id="resultado"></div> <br>
	
	<!-- Sugundo exemplo de attr -->
	<button type="button" id="buttonImg">clique aqui para exibir o coringa</button>
	<button type="button" id="hideAll"> Reset All</button><br><br>
	<img id="imagem">
	
</body>
</html>