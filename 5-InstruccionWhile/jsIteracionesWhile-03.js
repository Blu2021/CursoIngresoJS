/*DAUD MANZO JUAN PABLO
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("ingrese el numero clave");

		console.log(claveIngresada);
	}

	alert("Clave correcta");
	
}//FIN DE LA FUNCIÓN
