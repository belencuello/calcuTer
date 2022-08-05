/*CREO UNA VARIABLE PARA PANTALLA CON EL METODO getElementByClass
TAMBIEN CREO CONSTANTES PARA EL RESTO DE LOS ELEMENTOS DE LA CALCULADORA
QUE NOMBRE EN HTML*/
var pantalla = document.getElementsByClassName("pantalla");//La función getElementsByName()buscan los elementos cuyo atributo name sea igual al parámetro proporcionado
const teclas = document.getElementsByName("tecla");//document es el nodo apartir del cual se realiza la búsqueda de los elementos
const operadores = document.getElementsByName("operador");
const borrar = document.getElementsByName("borrar");
const igual = document.getElementsByName("igual");

//CREO TRES VARIABLES GLOBALES PARA PODER TRABAJAR CON ELLAS EN EL CODIGO

var actual = 0;
var anterior = 0;
var operacion = "";

/*CON ESTE CODIGO LE DOY FUNCIONALIDAD A LAS TECLAS
APARECEN EN LA PANTALLA DE LA CALCULADORA

El bucle forEach es una estructura especializada
en recorrer los elementos que contiene una variable*/
teclas.forEach(function(tecla){
    tecla.addEventListener("click", function(){/*El método addEventListener() nos sirve para registrar un evento a un objeto en específico en este caso se registra el evento click*/
        pantalla[0].textContent += tecla.innerText;//text:nodo que contiene el texto encerrado por una etiqueta XHTML.Comment: representa los comentarios incluidos en la página XHTML.
    } );
});