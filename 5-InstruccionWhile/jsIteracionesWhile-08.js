/*DAUD MANZO JUAN PABLO
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var numeroPositivo;
	var numeroNegativo;
	var continuar;
	var banderaN;


	continuar = "s";
	numeroPositivo = 0;
	numeroNegativo = 1;
	banderaN = 1;

	while(continuar == "s")
	{
		numeroIngresado = prompt("Ingrese Numero por favor");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error , solo se aceptan numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > 0)
		{
			numeroPositivo = numeroPositivo + numeroIngresado;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				banderaN = 0;
				numeroNegativo = numeroNegativo * numeroIngresado;
			}
		}

		continuar = prompt("Ingrese s si desea continuar");
		
	}

		if(banderaN == 1) //SI BANDERA DE NEGATIVO SIGUE SIENDO 1 ES XQ NO SE INGRESO NINGUN NEGATIVO.. ENTONCES
		{				  // LO QUE VIENE A CONTINUACION... NUMERONEGATIVO = 0				
			numeroNegativo = 0;
		}

	document.getElementById("txtIdSuma").value = numeroPositivo;
	document.getElementById("txtIdProducto").value = numeroNegativo;


}//FIN DE LA FUNCIÓN