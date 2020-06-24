<?php
	require_once('conectar.php');
	$conexion=conectarDB();		
	$datos= array("idUsuario"=>1, "idProductoDiseno"=>6, "descripcion"=>"Prueba 202020" );	
	$sentencia= $conexion->prepare("CALL INSERT_DISENO (?,?,?)");
	$sentencia->bind_param("iis", $datos["idUsuario"], $datos["idProductoDiseno"], $datos["descripcion"] );
	
	$sentencia->execute();
	$sentencia->close();
	$conexion->close();

?>