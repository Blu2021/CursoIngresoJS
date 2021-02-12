//DAUD MANZO JUAN PABLO
function mostrar()
{
	var EstacionAño;
	var Destino;
	var Tarifa;
	var Porcentaje;
	var Resultado;
	

	EstacionAño = document.getElementById('txtIdEstacion').value;

	Destino = document.getElementById("txtIdDestino").value;

	Tarifa = 15000;

	switch(EstacionAño)
	{
		case "Invierno":

			switch(Destino)
			{
				case "Bariloche":
					Porcentaje = 20;
				break;

				case "Mar del plata":
					Porcentaje = -20;
				break;

				default:
					Porcentaje = -10;
				break;
			}
		break;

		case "Verano":

			switch(Destino)
			{
				case "Bariloche":
					Porcentaje = -20;
				break;

				case "Mar del plata":
					Porcentaje = 20;
				break;

				default:
					Porcentaje = 10;
				break;
			}
		break;

		default:		

			switch(Destino)
			{
				case "Cordoba":
					Porcentaje = 0;
				break;

				default:
					Porcentaje = 10;
				break;
			}
		break;
	}

	Resultado = Tarifa + ((Tarifa * Porcentaje) / 100);

	alert(Resultado);
	
}//FIN DE LA FUNCIÓN*/