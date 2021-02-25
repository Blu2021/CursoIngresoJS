//DAUD MANZO JUAN PABLO
function mostrar()
{
	var repeticiones; 
	var contador;
	var contadorDePares;
	contadorDePares=0;
	
	repeticiones=prompt("Ingrese repeticiones");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true)
	{
		repeticiones=prompt("Ingrese repeticiones");
		repeticiones=parseInt(repeticiones);
	}	
	for(contador=0;contador<repeticiones;contador=contador+1)
	{
		if(contador%2==0)
		{
			contadorDePares=contadorDePares+1;
			console.log(contador);
		}	
	}

	alert("la cantidad de numeros pares es "+contadorDePares);

}//FIN DE LA FUNCIÓN