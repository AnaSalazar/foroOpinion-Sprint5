var api = {
  url: "https://examen-laboratoria-sprint-5.herokuapp.com/topics"
};
var listaTemas = $("#listaTemas");

var funcionInicial = function () {
  cargarTemas();
}

var cargarTemas = function () {
  $.getJSON(api.url, function (temas) {
    temas.forEach(obtenerTema);
  });
}

var obtenerTema = function (tema) {
  var titulo = tema.content;
  var autor = tema.author_name;
  var respuestasAlTema = tema.responses_count;

  mostrarTema(titulo, autor, respuestasAlTema);
}

var mostrarTema = function (titulo, autor, respuestasAlTema) {
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

$(document).ready(funcionInicial);
