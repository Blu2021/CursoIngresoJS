/*DAUD MANZO JUAN PABLO
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese numero por favor");
		numeroIngresado = parseInt(numeroIngresado);

			while(isNaN(numeroIngresado) == true)
			{
				numeroIngresado = prompt("Eso no es un numero ,reinserte numero #");
				numeroIngresado = parseInt(numeroIngresado);
			}

				if(banderaDelPrimero == "es el primero")
				{
					numeroMaximo = numeroIngresado;
					numeroMinimo = numeroIngresado;
					banderaDelPrimero = "No es el primero";
				}
				else
				{
					if(numeroIngresado > numeroMaximo)
					{
						numeroMaximo = numeroIngresado;
					}
					if(numeroIngresado < numeroMinimo)
					{
						numeroMinimo = numeroIngresado;
					}

				}

		respuesta=prompt("desea continuar?");
	}
	



	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}//FIN DE LA FUNCIÓN