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

var Bases = ["BASES DE DATOS<br><br>NRC: 52785<br><br>LUIS SANDOVAL HERNÁNDEZ <br>Organizador <br><br> <a href=reunion.html><span></span><span></span><span></span><span></span><input type=submit value=Iniciar_Reunion></a>"];
var Inglés = ["INGLÉS", "<br><br>NRC: 57814", "<br><br>JOSE RAMIREZ ALFARO <br>Organizador <br><br> <a href=reunion.html><span></span><span></span><span></span><span></span><input type=submit value=Iniciar_Reunion></a>"];
var Álgebra = ["ÁLGEBRA", "<br><br>NRC: 87642", "<br><br>ROBERTO ROBLEDO OLIVÉ <br>Organizador <br><br> <a href=reunion.html><span></span><span></span><span></span><span></span><input type=submit value=Iniciar_Reunion></a>"];
var MineríaDD = ["MINERIA DE DATOS", "<br><br>NRC: 97842", "<br><br>MAXIMILIANO TUR LARA <br>Organizador <br><br> <a href=reunion.html><span></span><span></span><span></span><span></span><input type=submit value=Iniciar_Reunion></a>"];
var ProgramaciónII = ["PROGRAMACION II", "<br><br>NRC: 21378", "<br><br>ERNESTO VIDAL PALACIOS <br>Organizador <br><br> <a href=reunion.html><span></span><span></span><span></span><span></span><input type=submit value=Iniciar_Reunion></a>"];
var tabla = document.getElementsByTagName("table")[0];
var tbody = document.getElementsByTagName("tbody")[0];
var tr = document.getElementsByTagName("tr")[0];
var td = document.getElementsByTagName("td")[0];
var i = 0;
