<?php
	require_once('conectar.php');
	$conexion=conectarDB();		
	$datos= array("idSolicitante"=>"1", "idProductoDiseno"=>"5", "descripcion"=>"Esta es la segunda prueba" );
	
	$sentencia= $conexion->prepare("CALL INSERT_DISENO (?,?,?)");
	$sentencia->bind_param("i,i,s", $datos["idSolicitante"], $datos["idProductoDiseno"], $datos["descripcion"] );
	$sentencia->execute();
	$sentencia->close();
	$conexion->close();

?>