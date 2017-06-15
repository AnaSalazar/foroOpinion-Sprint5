var api = {
  url: "https://examen-laboratoria-sprint-5.herokuapp.com/topics"
};
var listaTemas = $("#listaTemas");

var funcionInicial = function () {
  cargarTemas();
}

var cargarTemas = function () {
  $.getJSON(api.url, function (temas) {
    temas.forEach(crearTema);
  });
}

var crearTema = function (tema) {
  var titulo = tema.content;
  var autor = tema.author_name;
  var respuestasAlTema = tema.responses_count;
  console.log(titulo);
  console.log(autor);
  console.log(respuestasAlTema);
  mostrarTema(titulo, autor, respuestasAlTema);
}

$(document).ready(funcionInicial);
