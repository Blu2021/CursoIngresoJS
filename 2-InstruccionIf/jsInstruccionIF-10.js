//DAUD MANZO JUAN PABLO
function mostrar()
{	
	var nota;
	var mensaje;

	nota = Math.floor(Math.random() * 10) + 1;

	console.log(nota);

	if(nota > 8)
	{
		mensaje = "Excelente usted aprobo con un " + nota;
	}

	else
	{
		if(nota > 4)
		{
			mensaje = "Muy bien usted aprobo con un " + nota;
		}

		else
		{
			mensaje = "Tranquilo usted desaprobo con un " + nota + " pero vamos , la proxima se puede";
		}
	}

	alert(mensaje);

}

/*function mostrar()
{	
	var nota;

	nota = Math.floor(Math.random() * 10) + 1;

	alert(nota);

	if(nota > 8)
	{
		alert("Excelente");
	}

	else
	{
		if(nota > 4)
		{
			alert("Aprobo");
		}

		else
		{
			alert("Vamos , la proxima se puede");
		}
	}

	
}
*/
