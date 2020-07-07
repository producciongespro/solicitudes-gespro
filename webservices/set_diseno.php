<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);  

	require_once('conectar.php');
	$conexion=conectarDB();		
	
$idUsuario= $dataObject-> idUsuario;
$idProductoDiseno= $dataObject-> idProductoDiseno;
$descripcion= $dataObject-> descripcion;
	
	
	$sentencia= $conexion->prepare("CALL INSERT_DISENO (?,?,?)");
	$sentencia->bind_param("iis", $idUsuario, $idProductoDiseno, $descripcion);
	
	$sentencia->execute();
	$sentencia->close();
	$conexion->close();

?>