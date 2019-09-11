<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Lanzamiento recursos 2019</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="css/one-page-wonder.css" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">




  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
  <script src="vendor/jquery/jquery.min.js" charset="utf-8"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="./vendor/moment/moment-with-locales.min.js"></script>
  <script src="script/main.js" charset="utf-8"></script>

  <!-- Custom styles for this template -->
  <link href="css/one-page-wonder.min.css" rel="stylesheet">
 <style media="screen">
   #texto1{
     margin-left: 20px;
   }


hr.style14 {
  border: 0;
  height: 1px;
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
}

.div-shadow {
    z-index: 999;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center
}

.img-ajax-loading {
    position: absolute;
    top: 37%;
    left: 40%;
}



 </style>


<script>
$(document).ready(function () {
  moment.locale("es");
  obtenerComentarios();
});
</script>


</head>

<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container">
      <img id="logo" class="img-responsive" src="img/logo.png">
      <a class="navbar-brand" href="#">Dirección de Recursos Tecnológicos en Educación </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

  </div>
      <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="nav navbar-nav navbar-right">
          <li><a class="dec" href="index.html">Home &nbsp; </a></li>
        </ul>
      </div>
    </div>


  </nav>


<hr><hr>

<!-- Testimonials-->
  <section id="testimonials" class="testimonials-section bg-gray">
    <div class="container">
      <header class="text-center mb-2">
        <br><br>
        <h2 data-animate="fadeInUp" class="title">Preguntas enviadas<br></h2>
        <p data-animate="fadeInUp" class="lead">Estos son las preguntas que han sido enviados a través del formulario compartido en la presentación del lanzamiento.</p>
      </header>
      <hr><hr>
  </div>

</section>
<div class="container">
  <div id="comentarios" class="">
</div>
</div>


  <!-- Footer -->
  <footer class="py-5 bg-black">
    <div class="container">
      <p class="m-0 text-center text-white small">Dirección de Recursos Tecnológicos en Educación</p>
        <p class="m-0 text-center text-white small">Departamento de GESPRO - 2019</p>
          <p class="m-0 text-center text-white small">22553525, ext.4622 </p>
    </div>
    <!-- /.container -->
  </footer>

  <div class="div-shadow">
        <img class="img-ajax-loading" src="./img/spinner.gif" alt="Loading">
  </div>



</body>

</html>
