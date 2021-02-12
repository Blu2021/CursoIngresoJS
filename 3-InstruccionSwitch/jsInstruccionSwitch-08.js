//DAUD MANZO JUAN PABLO
function mostrar()
{
	var Destino;
	var Mensaje;

	Destino = document.getElementById('txtIdDestino').value;

	switch(Destino)
	{
		case "Bariloche":
		case "Ushuaia":
			Mensaje = "Hace frio en este destino";
		break;

		default:
			Mensaje = "Hace calor en este destino";
		break;
	}

	alert(Mensaje);
	
}//FIN DE LA FUNCIÓN