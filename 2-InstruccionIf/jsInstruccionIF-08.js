//DAUD MANZO JUAN PABLO
function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es Soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN