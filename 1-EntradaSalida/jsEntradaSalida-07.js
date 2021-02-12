/*DAUD MANZO JUAN PABLO
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

	alert("El resultado de la suma es de "+resultado);

}

function restar()
{
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value;
	numDos = parseInt(numDos);

	resultado = numUno - numDos;

	alert("El resultado de la resta es de "+resultado);
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value;
	numDos = parseInt(numDos);

	resultado = numUno * numDos;

	alert("El resultado de su multiplicacion es de "+resultado);

}	

function dividir()
{
	var numUno;
	var numDos;
	var resultado;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value;
	numDos = parseInt(numDos);

	resultado = numUno / numDos;

	alert("El resultado de la division es de "+resultado);


}