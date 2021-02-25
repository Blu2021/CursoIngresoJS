/*	al presionar el bot&oacute;n pedir un n&uacute;mero.
Informar si el numero es PRIMO o no.
*/
function mostrar()
{

	//20 los numeros primos
	


	var numeroIngresado;
	var numeroAnterior;
	var limite;
	numeroIngresado=prompt("ingrese numero");//5
	//for desde el 2 hasta uno antes del numero ingresado
	limite=(numeroIngresado/2);
	for(numeroAnterior=2;numeroAnterior<limite;numeroAnterior++)
	{
		if(numeroIngresado%numeroAnterior==0 )
		{
			break;
		}
	}

	if(numeroAnterior==limite)
	{
		alert("es primo");
	}else
	{
		alert("No es primo");
	}
/*
	if(numeroAnterior!=numeroIngresado)
	{
		alert("No es primo");
	}else
	{
		alert("es primo");
	}
*/

}//FIN DE LA FUNCIÓN
//FIN DE LA FUNCIÓN