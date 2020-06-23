<?php
header("Content-type:text/html;charset=utf-8");
include('conexion.php');
sleep(2);
if ($_POST) {
  $nombre= utf8_decode($_POST['nombre']);
  $puesto= utf8_decode($_POST['puesto']);
  $email= utf8_decode($_POST['email']);
  $regional= utf8_decode($_POST['regional']);
  $comentario = utf8_decode($_POST['mensaje']);
  $insercion = "INSERT into comentarios(nombre,puesto,email,regional,comentario) VALUES ('$nombre','$puesto','$email','$regional','$comentario')";
  mysqli_query($conexion,$insercion);
}

?>
