//DAUD MANZO JUAN PABLO
function mostrar()
{
	var MesDelAño;
	var Mensaje;

	MesDelAño = document.getElementById('txtIdMes').value;


	switch(MesDelAño)
	{
		case "Febrero":
			Mensaje = "Este mes tiene 28 dias";
		break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			Mensaje = "Este mes tiene 30 dias";
		break;

		default:
			Mensaje = "Este mes tiene 31 dias";
		break;
	}
	
	alert(Mensaje);
	
}//FIN DE LA FUNCIÓN