var api = {
  url: "https://examen-laboratoria-sprint-5.herokuapp.com/topics"
};
var listaTemas = $("#listaTemas");

var funcionInicial = function () {
  cargarTemas();
  $("#agregarFormulario").submit(crearTemaNuevo);
}

var cargarTemas = function () {
  $.getJSON(api.url, function (temas) {
    temas.forEach(mostrarTema);
  });
}

var mostrarTema = function (tema) {
  var titulo = tema.content;
  var autor = tema.author_name;
  var respuestasAlTema = tema.responses_count;

  var $tr = $("<tr />");
  var $tituloTd = $("<td />");
  $tituloTd.text(titulo);
  var $autorTd = $("<td />");
  $autorTd.text(autor);
  var $respuestasTd = $("<td />");
  $respuestasTd.text(respuestasAlTema);

  $tr.append($tituloTd);
  $tr.append($autorTd);
  $tr.append($respuestasTd);

  listaTemas.append($tr);
}

var crearTemaNuevo = function (e) {
  e.preventDefault();
  var tituloTema = $("#titulo-tema").val();
  var autorTema = $("#autor-tema").val();
  $.post(api.url, {
    content: tituloTema,
    author_name: autorTema
  }, function (tema) {
    mostrarTema(tema);
    $("#myModal").modal("hide");
  });
};

$(document).ready(funcionInicial);
