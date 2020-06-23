<?php
	require_once('conectar.php');
	$conexion=conectarDB();		
	$datos= array("nombre"=>"Volantes");
	
	$sentencia= $conexion->prepare("CALL insert_producto_diseno(?)");
	$sentencia->bind_param("s", $datos["nombre"] );
	$sentencia->execute();
	$sentencia->close();
	$conexion->close();

?>