var api = {
  url: "https://examen-laboratoria-sprint-5.herokuapp.com/topics"
};
var listaTemas = $("#listaTemas");
var arregloTitulos = [];

var funcionInicial = function () {
  cargarTemas();
  $("#formularioTemaNuevo").submit(crearTemaNuevo);
  $("#busquedaTemas").submit(filtroTemas);
}

var cargarTemas = function () {
  $.getJSON(api.url, function (temas) {
    temas.forEach(mostrarTema);
    arregloTitulos = temas;
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

var filtroTemas = function (e) {
  e.preventDefault();
  var busqueda = $("#busqueda").val().toLowerCase();

  var busquedaFiltrada = arregloTitulos.filter(function (tema) {
    var temaEncontrado = tema.content.toLowerCase().indexOf(busqueda) >= 0;
    return temaEncontrado;
  });

  listaTemas.html("");
  busquedaFiltrada.forEach(function (titulo){
    mostrarTema(titulo);
  });
}

$(document).ready(funcionInicial);
