/*DAUD MANZO JUAN PABLO
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	numeroIngresado = parseInt(numeroIngresado);


	while(isNaN(numeroIngresado) == true || numeroIngresado > 9 || numeroIngresado < 0)
	{
		numeroIngresado = prompt("El numero no cumple el requisito");
	}

	document.getElementById('txtIdNumero').value = numeroIngresado;

}//FIN DE LA FUNCIÓN