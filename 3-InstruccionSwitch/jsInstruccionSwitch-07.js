//DAUD MANZO JUAN PABLO
function mostrar()
{
	var Destino;
	var Mensaje;

	Destino = document.getElementById('txtIdDestino').value;

	switch(Destino)
	{
		case "Bariloche":
			Mensaje = "Punto cardinal Este";
		break;

		case "Cataratas":
			Mensaje = "Punto cardinal Norte";
		break;

		case "Mar del plata":
			Mensaje = "Punto cardinal Oeste";
		break;

		case "Ushuaia":
			Mensaje = "Punto cardinal Sur";
		break;
	}

	alert(Mensaje);
	
}//FIN DE LA FUNCIÓN