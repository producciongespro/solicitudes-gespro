<?php

class Conexion {
	private $conn;
	
	public function __construc()
	{
		$this->conn = new mysqli ("localhost", "root", "", "recursos_solicitudes");
	}
	
	public function obtenerConexion ()
	{
		return $this->$conn;
	}
?>