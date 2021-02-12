//DAUD MANZO JUAN PABLO
function mostrar()
{
	var Hora;
	var Mensaje;

	Hora = document.getElementById('txtIdHora').value;

	switch(Hora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			Mensaje = "Es de Mañana!";
		break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			Mensaje = "Es de tarde!";
		break;

		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
			Mensaje = "Es de noche!";
		break;

		default:
			Mensaje = "La hora ingresada no es correcta";
		break;
	}

	alert(Mensaje);
	
}//FIN DE LA FUNCIÓN