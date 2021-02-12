/*DAUD MANZO JUAN PABLO
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById('txtIdNumeroUno').value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value;
	numDos = parseInt(numDos);

	resultado = numUno + numDos;

	alert("El resultado de la suma es "+resultado);

}

