<?php
	require_once('conexion.php');
	$mysql= new Conexion();
	$conexion= mysql.obtenerConexion();
	$datos= array("nombre"=>"Volantes");
	
	$sentencia= $conexion->prepare("CALL insert_producto_diseno(?)");
	$sentencia->bind_param("s", $datos["nombre"] );
	$sentencia->execute();
	$sentencia->close();
	$conexion->close();

?>