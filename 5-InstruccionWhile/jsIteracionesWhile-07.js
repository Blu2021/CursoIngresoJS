/*DAUD MANZO JUAN PABLO
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	var Continuar;

	contador = 0;

	acumulador = 0;

	Continuar = "s";

	while(Continuar == "s")
	{
		contador = contador + 1;

		numeroIngresado = prompt("Ingrese numero por favor #" + contador);
		numeroIngresado = parseInt(numeroIngresado);

			while(isNaN(numeroIngresado) == true)
			{
				numeroIngresado = prompt("Eso no es un numero ,reinserte numero #" + contador);
				numeroIngresado = parseInt(numeroIngresado);
			}
		
		acumulador = acumulador + numeroIngresado;


		Continuar = prompt("Ingrese s si desea continuar");
	}

	promedio = acumulador / contador;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN