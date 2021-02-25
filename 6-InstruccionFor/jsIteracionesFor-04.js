//DAUD MANZO JUAN PABLO
function mostrar()
{
	var repeticiones; 
	var contador;
	
	repeticiones=prompt("ingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones);
	
	for(contador=0;contador<repeticiones;contador=contador+1)
	{
		console.log(contador);
		if(contador==30)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN