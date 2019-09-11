

function obtenerComentarios () {
  $.getJSON("obtener_comentarios.php", function(result){
    console.log("Json obtenido de obtener comentarios:");

    console.log(result);



    $.each(result, function(i, field){
      //let tiempo = moment().startOf('day').fromNow( field.fecha_envio );
      let tiempo = moment(field.fecha_envio).fromNow()
      $("#comentarios").append(
         "<i class='far fa-comment-dots'></i>" +  " " +
         "<b>" + field.nombre +", "+  field.puesto  + "</b> de la Dirección Regional de " + field.regional + ", con el correo "   +  field.email  + ",  pregunta: "  +  tiempo        +    ":<br> <span id='texto1'><i>\"" + field.comentario + "\"</i></span><br><hr class='style14' >"
         );
    });


    $(".div-shadow").addClass("invisible");
    console.log("dedede");


  });
}


function obtenerRegionales() {
      $.getJSON("obtener_regionales.php", function(data){
        //console.log(data);
        $.each(data, function(i, valor){
            // html += "<option value=" + i  + ">" +valor.nombre + "</option>"
            $("#regional").append("<option value=" + i  + ">" +valor.nombre + "</option>");
        });
      });
}


function enviarComentario(valorCaja1, valorCaja2, regional, valorCaja3, valorCaja4){

      var parametros = {
          "nombre" : valorCaja1,
          "puesto" : valorCaja2,
          "regional" : regional,
          "email" : valorCaja3,
          "mensaje" : valorCaja4
      };
      $.ajax({
          data:  parametros,
          url:   'enviar.php',
          type:  'post',
          beforeSend: function () {
              console.log("enviando datos");

              $("#mensajeResultado").html("<br><div class='alert alert-info alert-dismissible fade show' role='alert' id='resultado'> </div>");
              $("#resultado").html("Enviando información. Por favor espere...");


          },
          success:  function (response) {

              $("#mensajeResultado").html("<br><div class='alert alert-success alert-dismissible fade show' role='alert' id='resultado'> </div>");
              $("#resultado").html("Su mensaje fue enviado satisfactoriamente. <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>");
          }
      });
      limpiarCampos();
  };


function limpiarCampos() {
 $("#main-contact-form")[0].reset();
}
