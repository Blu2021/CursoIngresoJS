/*DAUD MANZO JUAN PABLO
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var largo;
   var ancho;
   var resultado;

   largo = document.getElementById('txtIdLargo').value;
   largo = parseInt(largo);

   ancho = document.getElementById("txtIdAncho").value;
   ancho = parseInt(ancho);

   resultado = (ancho * largo) * 3;

   alert("Su resultado es " + resultado);


}
function Circulo () 
{
	var radio;
	var resultado;

	radio = document.getElementById("txtIdRadio").value;
	radio = parseInt(radio);

	resultado = (Math.PI * (radio * radio)) * 3;

	alert("Usted debe comprar "+resultado+" metros de alambre");


}
function Materiales () 
{
	var ancho;
	var largo;
	var resultadoUnoCemento;
	var resultadoDosCal;

	ancho = document.getElementById("txtIdAncho").value;
	ancho = parseInt(ancho);

	largo = document.getElementById("txtIdLargo").value;
	largo = parseInt(largo);

	resultadoUnoCemento = (ancho * largo) * 2;
	resultadoDosCal = (ancho * largo) * 3;

	alert("Usted precisara "+resultadoUnoCemento+" bolsas de cemento y "+resultadoDosCal+" bolsas de cal");


}