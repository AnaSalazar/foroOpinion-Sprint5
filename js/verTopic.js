var topicId = getParameterByName('topic_id');

var api = {
  url: "http://examen-laboratoria-sprint-5.herokuapp.com/topics/" + topicId,
  urlResponses: "http://examen-laboratoria-sprint-5.herokuapp.com/topics/" + topicId + "/responses"
}

var funcionInicial = function () {
  cargarTema();
  cargarRespuestas();
}

var cargarTema = function () {
  $.getJSON(api.url, function (tema) {
    mostrarTema(tema);
  })
}

var cargarRespuestas = function () {
  $.getJSON(api.urlResponses, function (responses) {
    responses.forEach(function (response) {
      mostrarResponse(response);
    });
  });
}

var mostrarTema = function (tema) {
  var areaTema = $("#tema");
  var titulo = tema.content;
  var autor = tema.author_name;

  var $areaTitulo = $("<h2 />");
  var $areaAutor = $("<p />")

  $areaTitulo.text(titulo);
  $areaAutor.text(autor);
  // $areaAutor.addClass("italica");
  areaTema.append($areaTitulo);
  areaTema.append($areaAutor);
}

var mostrarResponse = function (response) {
  var areaRespuesta = $("#respuestas");
  var tituloRespuesta = response.content;
  var autorRespuesta = response.author_name;

  var $contenedorIndividualRespuestas = $("<div />")
  var $areaTituloRespuesta = $("<h4 />");
  var $areaAutorRespuesta = $("<p />")

  $areaTituloRespuesta.text(tituloRespuesta);
  $areaAutorRespuesta.text(autorRespuesta);
  $contenedorIndividualRespuestas.addClass("page-header col-sm-8 col-sm-offset-1");

  $contenedorIndividualRespuestas.append($areaTituloRespuesta);
  $contenedorIndividualRespuestas.append($areaAutorRespuesta);
  areaRespuesta.append($contenedorIndividualRespuestas);
}

$(document).ready(funcionInicial);
