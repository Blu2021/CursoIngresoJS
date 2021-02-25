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
	var banderaDelPar;
	var menorDeLosPares;
	var mayorDeLosNegativos;
	var banderaDelNegativo;
	//iniciar variables
	banderaDelNegativo=0;
	banderaDelPar=0;
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
				//AGREGADO 
				if(numeroIngresado%2==0)
				{
					if(banderaDelPar==0||numeroIngresado<menorDeLosPares)
					{
						menorDeLosPares=numeroIngresado;
						banderaDelPar=1;						
					}	
				}

				if(numeroIngresado<0)
				{
					if(banderaDelNegativo==0||numeroIngresado>mayorDeLosNegativos)
					{
						mayorDeLosNegativos=numeroIngresado;
						banderaDelNegativo=1;
					}

				}

		respuesta=prompt("desea continuar?");
	}
	
	if(banderaDelPar==1)
	{
		alert("El menor de los pares es "+menorDeLosPares);
	}

	if(banderaDelNegativo==1)
	{
		alert("El mayor de los negativos es "+mayorDeLosNegativos);
	}
	


	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}//FIN DE LA FUNCIÓN