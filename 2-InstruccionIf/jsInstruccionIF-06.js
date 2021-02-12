//DAUD MANZO JUAN PABLO
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("La persona es mayor de edad");
	}

	else
	{
		if(edad > 13)
		{
			alert("La persona es un teenager");
		}

		else
		{
			alert("La persona es un babyboy");
		}
	}
}