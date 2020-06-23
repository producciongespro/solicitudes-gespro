<?php

class conexion {
	private $conn;
	
	public function _construc()
	{
		$this->conn = new mysqli ("localhost", "root", "", "recursos_solicitudes");
	}
	
	public function obtenerConexion ()
	{
		return $this->$conn;
	}
}
?>