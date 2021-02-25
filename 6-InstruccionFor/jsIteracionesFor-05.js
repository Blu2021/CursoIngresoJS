//DAUD MANZO JUAN PABLO
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
		if(repeticiones!=9)
		{
			continue;
		}

		console.log(contador);
	}

}//FIN DE LA FUNCIÓN