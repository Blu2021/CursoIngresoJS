/*DAUD MANZO JUAN PABLO
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numeroIngresado;
	var continuar;
	var positivos;
	var negativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;


	continuar = "si";
	positivos = 0;
	negativos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	while(continuar == "si")
	{
		numeroIngresado = prompt("Ingrese numero por favor");
		numeroIngresado = parseInt(numeroIngresado);

			while(isNaN(numeroIngresado) == true)
			{
				numeroIngresado = prompt("Error , reingrese numero");
				numeroIngresado = parseInt(numeroIngresado);
			}

		if(numeroIngresado > 0)
		{
			positivos = numeroIngresado + positivos;
			contadorPositivos = contadorPositivos + 1;
		}	
		else
		{
			if(numeroIngresado < 0)
			{
				negativos = numeroIngresado + negativos;
				contadorNegativos = contadorNegativos + 1;
			}
			else
			{
				contadorCeros = contadorCeros + 1;
			}
		}

		if(numeroIngresado%2 == 0)
		{
			contadorPares = contadorPares + 1;
		}



		continuar = prompt("Responda si para continuar");
	}

		if(contadorPositivos == 0)
		{
			promedioPositivos = positivos / 1;
		}
		else
		{
			promedioPositivos = positivos / contadorPositivos;
		}

		if(contadorNegativos == 0)
		{
			promedioNegativos = negativos / 1;
		}
		else
		{
			promedioNegativos = negativos / contadorNegativos;
		}
	
	

	diferencia = positivos - negativos;


	document.write ("la suma de negativos es: " + negativos + "<br>");
	document.write ("la suma de positivos es: " + positivos + "<br>");
	document.write ("la cantidad de negativos es de: " + contadorNegativos + "<br>");
	document.write ("la cantidad de positivos es de: " + contadorPositivos + "<br>");
	document.write ("la cantidad de ceros es de: " + contadorCeros + "<br>");
	document.write ("la cantidad de numeros pares es de: " + contadorPares + "<br>");
	document.write ("el promedio de positivos es de: " + promedioPositivos + "<br>");
	document.write ("el promedio de negativos es de: " + promedioNegativos + "<br>");
	document.write ("la diferencia de positivos y negativos es de: " + diferencia);

}//FIN DE LA FUNCIÓN