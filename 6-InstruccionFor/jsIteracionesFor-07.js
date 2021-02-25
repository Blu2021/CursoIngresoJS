//DAUD MANZO JUAN PABLO
function mostrar()
{
	var repeticiones; 
	var contador;
	var contadorDeDivisores;
	contadorDeDivisores=0;
	
	repeticiones=prompt("Ingrese repeticiones");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true)
	{
		repeticiones=prompt("Ingrese repeticiones");
		repeticiones=parseInt(repeticiones);
	}	
	for(contador=0;contador<repeticiones;contador=contador+1)
	{
		if(repeticiones%contador==0)
		{
			contadorDeDivisores=contadorDeDivisores+1;
			console.log(contador);
		}		
	}

	alert("la cantidad de Divisores es "+contadorDeDivisores);

}//FIN DE LA FUNCIÓN