<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script type="text/javascript"
	src="../resources/js/metodosManipulacaoDOM.js"></script>

<style type="text/css" media="all">
#img {
	display: block; margin-bottom: 15px; ;
}
</style>

</head>
<body>

	<!-- atrr passando dois argumentos o atributo e uma funcao que recebe mais dois parametros -->
	<!-- essa funcao que passa dois parametro é um indice do elemento e o valor do atributo -->
	<p>Click qualquer imagem (conforme click a imagem vai aumentando a largura)</p>
	
	<img alt="Foto do Coringa" src="../resources/img/coringa.jpg" width="50" height="50" />
	<img alt="Foto do Coringa" src="../resources/img/coringa.jpg" width="50" height="50" />
	<img alt="Foto do Coringa" src="../resources/img/coringa.jpg" width="50" height="50" />

</body>
</html>