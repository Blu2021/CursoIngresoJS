/*DAUD MANZO JUAN PABLO
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje = prompt("Ingrese porcentaje deseado por favor");
	porcentaje = parseInt(porcentaje);

	porcentaje = (importe*porcentaje) / 100;

	document.getElementById("txtIdResultado").value = importe - porcentaje;

}
/*  var aumento;
	var resultado;
	var importe;
	var porcentaje;

	importe = (document.getElementById('txtIdImporte').value);

	importe = parseInt(importe);

	porcentaje = prompt("Ingrese porcentaje deseado por favor");

	porcentaje = parseInt(porcentaje);

	aumento = (importe * porcentaje) / 100

	resultado = importe - aumento;

	document.getElementById("txtIdResultado").value = resultado;
*/