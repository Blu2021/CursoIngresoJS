//DAUD MANZO JUAN PABLO
function mostrar()
{
	//INICIO
	var continuar;
	var tipoIngresado;
	var cantidad;
	var precio;
	var precioConDto;
	//PUNTO A
	var precioBruto;
	var acumuladorPrecioBruto;
	//PUNTO B
	var acumuladorTotal;
	//PUNTO D
	var acumuladorArena;
	var acumuladorCal;
	var acumuladorCemento;
	var tipoBolsasMax;
	//PUNTO F
	var tipoMasCaro;
	var banderaCaro;
	var precioMaximo;
	//INICIO
	continuar = "si";
	//PUNTO A
	acumuladorPrecioBruto = 0;
	//PUNTO B
	acumuladorTotal = 0;
	//PUNTO C
	acumuladorArena = 0;
	acumuladorCal = 0;
	acumuladorCemento = 0;
	//PUNTO F
	banderaCaro = 0;

	

	while(continuar == "si")
	{
		tipoIngresado = prompt("Ingrese arena , cal o cemento");
		while(tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
		{
			tipoIngresado = prompt("Error , ingrese arena , cal o cemento");
		}

		cantidad = prompt("Ingrese cantidad");
		cantidad = parseInt(cantidad);
		while(isNaN(cantidad) == true || cantidad < 1)
		{
			cantidad = prompt("Error, ingrese cantidad");
			cantidad = parseInt(cantidad);
		}	

		precio = prompt("Ingrese precio");
		precio = parseInt(precio);
		while(isNaN(precio) == true || precio < 1)
		{
			precio = prompt("Error ,Ingrese precio");
			precio = parseInt(precio);
		}	

		if(banderaCaro == 0 || precio > precioMaximo)
		{
			precioMaximo = precio;
			tipoMasCaro = tipoIngresado;
			banderaCaro = 1; 
		}
		/*else
		{
			if(precio > precioMaximo)
			{	
				precioMaximo = precio;
				tipoMasCaro = tipoIngresado;
			}
		}
		*/	
		precioBruto = cantidad * precio;	
		acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;

		acumuladorTotal = acumuladorTotal + cantidad; 

		switch(tipoIngresado)
		{
			case "arena":
				acumuladorArena = acumuladorArena + cantidad;
			break;

			case "cal":
				acumuladorCal = acumuladorCal + cantidad;
			break;

			case "cemento":
				acumuladorCemento = acumuladorCemento + cantidad;
			break;
		}	

		continuar = prompt("Ingrese si , si desea continuar");
	}

		if(acumuladorTotal > 10)
		{
			if(acumuladorTotal < 31)
			{
				//precioConDto = acumuladorPrecioBruto - ((acumuladorPrecioBruto * 15)/100);
				porcentaje = 15;
			}
			else
			{
				//precioConDto = acumuladorPrecioBruto - ((acumuladorPrecioBruto * 25)/100);
				porcentaje = 25;
			}

			precioConDto = acumuladorPrecioBruto - ((acumuladorPrecioBruto * porcentaje)/100);
			alert("El precio con dto es " + precioConDto);
		}

		if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
		{
			tipoBolsasMax = "arena";
		}	
		else
		{
			if(acumuladorCal > acumuladorCemento)
			{
				tipoBolsasMax = "cal";
			}
			else
			{
				tipoBolsasMax = "cemento";
			}
		}


		
		alert("El importe total es de " + acumuladorPrecioBruto);
		alert("El tipo con mas cantidad es " + tipoBolsasMax);
		alert("El tipo mas caro es " + tipoMasCaro);
}


/*function mostrar()
{
  //VALIDACION
  var continuar;
  var producto;
  var cantidad;
  var precio;
  //PUNTO PRE
  var acumuladorArena;
  var acumuladorCal;
  var acumuladorCemento;
  var totalBolsas;
  var descuento;
  var precioConDto;
  //PUNTO A
  var acumuladorPrecio;
  //PUNTO D
  var tipoMax;
  //PUNTO F
  var banderaCaro;
  var tipoCaro;
  var precioMax;

  //VALIDACION
  continuar = "si";
  //PUNTO PRE
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  //PUNTO A
  acumuladorPrecio = 0;
  //PUNTO F
  banderaCaro = 0;

  while(continuar == "si")
  {

  	producto = prompt("Ingrese arena , cal o cemento");

  		while(producto != "arena" && producto != "cal" && producto != "cemento")
  		{
  			producto = prompt("Error ,Ingrese arena , cal o cemento");
  		}

  	cantidad = prompt("Ingrese cantidad");
  	cantidad = parseInt(cantidad);

  		while(isNaN(cantidad) == true || cantidad < 1)
  		{
  			cantidad = prompt("Error , ingrese cantidad");
  			cantidad = parseInt(cantidad);
  		}

  	precio = prompt("Ingrese precio");
  	precio = parseInt(precio);

  		while(isNaN(precio) == true || precio < 1)
  		{
  			precio = prompt("Error, ingrese precio");
  			precio = parseInt(precio);
  		}

  	switch(producto)
  	{
  		case "arena":
  			acumuladorArena = acumuladorArena + cantidad;
  		break;

  		case "cal":
  			acumuladorCal = acumuladorCal + cantidad;
  		break;

  		case "cemento":
  			acumuladorCemento = acumuladorCemento + cantidad;
  		break;
  	}	

  	if(banderaCaro == 0)
  	{
  		precioMax = precio;
  		tipoCaro = producto;
  		banderaCaro = 1;

  	}
  	else
  	{
  		if(precio > precioMax)
  		{
  			precioMax = precio;
  			tipoCaro = producto;
  		}
  	}

  	acumuladorPrecio = acumuladorPrecio + precio;

  	continuar = prompt("Ingrese si , si desea continuar");
  }

  totalBolsas = acumuladorArena + acumuladorCal + acumuladorCemento;

  if(totalBolsas > 10)
  {
  	if(totalBolsas < 31)
  	{
  		descuento = 15;
  		precioConDto = acumuladorPrecio - ((acumuladorPrecio * 15) / 100);
  	}
  	else
  	{
  		descuento = 25;
  		precioConDto = acumuladorPrecio - ((acumuladorPrecio * 25) / 100);
  	}
  }

  if(acumuladorArena > acumuladorCal)
  {
  	if(acumuladorArena > acumuladorCemento)
  	{
  		tipoMax = "arena";
  	}
  	else
  	{
  		tipoMax = "cemento";
  	}
  }
  else
  {
  	if(acumuladorCal > acumuladorCemento)
  	{
  		tipoMax = "cal";
  	}
  	else
  	{
  		tipoMax = "cemento";
  	}
  }


  alert("El precio sin DTO es " + acumuladorPrecio);

  alert("El precio con DTO es " + precioConDto);

  alert("El tipo con mas cantidad es " + tipoMax);

  alert("El tipo mas caro es " + tipoCaro);


}
*/