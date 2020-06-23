<?php
	require_once('conectar.php');
	$conexion=conectarDB();		
	$datos= array("idSolicitante"=>10, "idProductoDiseno"=>6, "descripcion"=>"Prueba paty oscar" );	
	$sentencia= $conexion->prepare("CALL INSERT_DISENO (?,?,?)");
	$sentencia->bind_param("iis", $datos["idSolicitante"], $datos["idProductoDiseno"], $datos["descripcion"] );
	
	$sentencia->execute();
	$sentencia->close();
	$conexion->close();

?>