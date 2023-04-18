function mostrarVentana(contenido) {
  var ventana = document.getElementById("ventana");
  var fondo = document.getElementById("fondo");
  ventana.innerHTML = contenido;
  ventana.style.display = "block";
  fondo.style.display = "block";
}

function ocultarVentana() {
  var ventana = document.getElementById("ventana");
  var fondo = document.getElementById("fondo");
  ventana.style.display = "none";
  fondo.style.display = "none";
}

var Bases = ["BASES DE DATOS", "<br>NRC: 52785", "<br>LUIS SANDOVAL HERNÁNDEZ <br>Organizador"];
var Inglés = ["INGLÉS", "<br>NRC: 57814", "<br>JOSE RAMIREZ ALFARO <br>Organizador"];
var Álgebra = ["ÁLGEBRA", "<br>NRC: 87642", "<br>ROBERTO ROBLEDO OLIVÉ <br>Organizador"];
var MineríaDD = ["MINERIA DE DATOS", "<br>NRC: 97842", "<br>MAXIMILIANO TUR LARA <br>Organizador"];
var ProgramaciónII = ["PROGRAMACION II", "<br>NRC: 21378", "<br>ERNESTO VIDAL PALACIOS <br>Organizador"];
var tabla = document.getElementsByTagName("table")[0];
