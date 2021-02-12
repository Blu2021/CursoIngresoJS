//DAUD MANZO JUAN PABLO
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 13 && edad < 18)
	{
		alert("La persona es un teenager");
	}

}//FIN DE LA FUNCIÓN