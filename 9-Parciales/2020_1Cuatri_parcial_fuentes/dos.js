//DAUD MANZO JUAN PABLO
//TIEMPO 30 MINUTOS 56 SEGUNDOS
function mostrar()
{
	var continuar;
	var tipoIngresado;
	var cantidadBolsas;
	var precioXbolsa;
	var acumuladorDeBolsas;
	var precioConDto;
	var precioMaximo;
	var acumuladorPrecioBruto;
	var descuento;
	var acumuladorArena;
	var acumuladorCemento;
	var acumuladorCal;
	var tipoMasCaro;
	var precioXbolsaMasCaro;
	var banderaCaro;
	var tipoBolsasMax;

	banderaCaro=0;
	acumuladorArena=0;
	acumuladorCemento=0;
	acumuladorCal=0;
	acumuladorPrecioBruto=0;
	continuar="si";
	acumuladorDeBolsas=0;

	while(continuar=="si")
	{

		tipoIngresado=prompt("Ingrese arena , cal o cemento");
		while(tipoIngresado!="arena"&&tipoIngresado!="cal"&&tipoIngresado!="cemento")
		{
			tipoIngresado=prompt("Error,ingrese arena, cal o cemento");
		}

		cantidadBolsas=prompt("Ingrese cantidad de bolsas");
		cantidadBolsas=parseInt(cantidadBolsas);
		while(isNaN(cantidadBolsas)==true||cantidadBolsas<1)
		{
			cantidadBolsas=prompt("error,Ingrese cantidad de bolsas");
			cantidadBolsas=parseInt(cantidadBolsas);
		}

		precioXbolsa=prompt("ingrese precio x bolsa");
		precioXbolsa=parseInt(precioXbolsa);
		while(isNaN(precioXbolsa)==true||precioXbolsa<1)
		{
			precioXbolsa=prompt("error,ingrese precio x bolsa");
			precioXbolsa=parseInt(precioXbolsa);
		}

		acumuladorDeBolsas=acumuladorDeBolsas + cantidadBolsas;

		precioMaximo=cantidadBolsas*precioXbolsa;
		acumuladorPrecioBruto=acumuladorPrecioBruto+precioMaximo;

		switch(tipoIngresado)
		{
			case"arena":
				acumuladorArena=acumuladorArena+cantidadBolsas;
			break;

			case"cemento":
				acumuladorCemento=acumuladorCemento+cantidadBolsas;
			break;

			case"cal":
				acumuladorCal=acumuladorCal+cantidadBolsas;
			break;
		}

		if(banderaCaro==0 || precioXbolsa>precioXbolsaMasCaro)
		{
			precioXbolsaMasCaro=precioXbolsa;
			tipoMasCaro=tipoIngresado;
			banderaCaro=1;
		}
	
		continuar=prompt("Ingrese si , para continuar");
	}

	if(acumuladorDeBolsas>10)
	{
		if(acumuladorDeBolsas>30)
		{
			descuento=25;
		}
		else
		{
			descuento=15;
		}

		precioConDto=acumuladorPrecioBruto-((acumuladorPrecioBruto*descuento)/100);
		alert("El precio con descuento es "+precioConDto);
	}

	if(acumuladorCal>acumuladorCemento&&acumuladorCal>acumuladorArena)
	{
		tipoBolsasMax="cal";
	}
	else
	{
		if(acumuladorCemento>acumuladorArena)
		{
			tipoBolsasMax="cemento";
		}
		else
		{
			tipoBolsasMax="arena";
		}
	}
	alert("El importa total a pagar bruto "+acumuladorPrecioBruto);
	alert("el tipo con mas bolsas es "+tipoBolsasMax);
	alert("El tipo mas caro es "+tipoMasCaro);

}

/*
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
		//else
		//{
		//	if(precio > precioMaximo)
		//	{	
		//		precioMaximo = precio;
		//		tipoMasCaro = tipoIngresado;
		//	}
		//}
			
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
*/