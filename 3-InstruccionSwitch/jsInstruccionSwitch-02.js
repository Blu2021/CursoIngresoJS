//DAUD MANZO JUAN PABLO
function mostrar()
{
	var MesDelAño;
	var Mensaje;

	MesDelAño = document.getElementById('txtIdMes').value;


	switch(MesDelAño)
	{
		case "Julio":
			Mensaje = ("Abrigate que hace Frio");
		break;

		case "Agosto":
			Mensaje = ("Abrigate que hace Frio");
		break;

		case "Septiembre":
			Mensaje = ("Ya pasamos el frio , ahora hace calor");
		break;

		case "Octubre":
			Mensaje = ("Ya pasamos el frio , ahora hace calor");
		break;

		case "Noviembre":
			Mensaje = ("Ya pasamos el frio , ahora hace calor");
		break;

		case "Diciembre":
			Mensaje = ("Ya pasamos el frio , ahora hace calor");
		break;

		default:
			Mensaje = ("Falta para el invierno");
		break;
	}

	alert(Mensaje);

}//FIN DE LA FUNCIÓN