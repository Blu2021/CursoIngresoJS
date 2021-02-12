//DAUD MANZO JUAN PABLO
function mostrar()
{
	var EstacionAño;
	var Destino;
	var Mensaje;

	EstacionAño = document.getElementById('txtIdEstacion').value;

	Destino = document.getElementById("txtIdDestino").value;

	switch(EstacionAño)
	{
		case "Invierno":

			switch(Destino)
			{
				case "Bariloche":
					Mensaje = "Se viaja";
				break;

				default:
					Mensaje = "No se viaja";
				break;
			}
		break;

		case "Verano":

			switch(Destino)
			{
				case "Mar del plata":
				case "Cataratas":
					Mensaje = "Se viaja";
				break;

				default:
					Mensaje = "No se viaja";
				break;
			}
		break;

		case "Primavera":

			switch(Destino)
			{
				case "Bariloche":
					Mensaje = "No se viaja";
				break;

				default:
					Mensaje = "Se viaja";
				break;
			}
		break;

		default:
			Mensaje = "Se viaja";
		break;
	}

	alert(Mensaje);


}//FIN DE LA FUNCIÓN