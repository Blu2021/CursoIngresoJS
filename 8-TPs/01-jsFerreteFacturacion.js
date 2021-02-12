/*DAUD MANZO JUAN PABLO

Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;

	alert("La suma de sus productos es " + resultado);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);

	resultado = (precioUno + precioDos + precioTres) / 3;

	alert("El promedio de los productos es de " + resultado);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var iva;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioUno = parseInt(precioUno);

	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioDos = parseInt(precioDos);

	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioTres = parseInt(precioTres);

	iva  = ((precioUno + precioDos + precioTres) * 21) / 100;

	resultado = (precioUno + precioDos + precioTres) + iva;

	alert("La suma de sus productos +iva es de " + resultado);
}
	

