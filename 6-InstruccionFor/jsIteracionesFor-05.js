//DAUD MANZO JUAN PABLO
function mostrar()
{
	var númeroIngresado;
	
	for(;;)
	{
		númeroIngresado = prompt("Ingrese un número entre 1 y 100:");
	    númeroIngresado = parseInt(númeroIngresado);

		while(isNaN(númeroIngresado) == true || númeroIngresado < 1 || númeroIngresado > 100)
		{
			númeroIngresado = prompt("ERROR. Ingrese un número entre 0 y 100:");
			númeroIngresado = parseInt(númeroIngresado);
		}

		if(númeroIngresado == 9)
		{
			break;
		}
	}

	alert("Ha finalizado las iteraciones.");
}

/*
function mostrar()
{
	var repeticiones; 
	var contador;
	
	repeticiones=prompt("Ingrese repeticiones");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true||repeticiones!=9)
	{
		repeticiones=prompt("Ingrese repeticiones");
		repeticiones=parseInt(repeticiones);
	}	
	for(contador=0;contador<repeticiones;contador=contador+1)
	{
		console.log(contador);
	}

}//FIN DE LA FUNCIÓN
*/