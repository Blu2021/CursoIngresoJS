//DAUD MANZO JUAN PABLO
//21 MINUTOS 18 SEGUNDOS
function mostrar()
{
  	var continuar;
  	var tipoIngresado;
  	var cantidadBolsas;
  	var precioXbolsa;
  	var bolsasTotales;
  	var descuento;
  	var precioTotal;
  	var precioTotalBruto;
  	var precioConDto;
  	var acumuladorArenaBolsas;
  	var acumuladorCalBolsas;
  	var acumuladorCementoBolsas;
  	var tipoConMasCantidadBolsas;
  	var precioMasCaro;
  	var tipoMasCaro;
  	var banderaMasCaro;

  	banderaMasCaro=0;
  	acumuladorCementoBolsas=0;
  	acumuladorCalBolsas=0;
  	acumuladorArenaBolsas=0;
  	precioTotalBruto=0;
  	bolsasTotales=0;
  	continuar="si";

  	while(continuar=="si")
  	{
	  	tipoIngresado=prompt("Ingrese arena cal o cemento");
	  	while(tipoIngresado!="arena"&&tipoIngresado!="cal"&&tipoIngresado!="cemento")
	  	{
	  		tipoIngresado=prompt("error,Ingrese arena cal o cemento");
	  	}
	  	cantidadBolsas=prompt("ingrese cantidad bolsas");
	  	cantidadBolsas=parseInt(cantidadBolsas);
	  	while(isNaN(cantidadBolsas)==true||cantidadBolsas<1)
	  	{
	  			cantidadBolsas=prompt("error,ingrese cantidad bolsas");
	  			cantidadBolsas=parseInt(cantidadBolsas);
	  	}
	  	precioXbolsa=prompt("Ingrese precio x bolsa");
	  	precioXbolsa=parseInt(precioXbolsa);
	  	while(isNaN(precioXbolsa)==true||precioXbolsa<1)
	  	{
	  		precioXbolsa=prompt("error,Ingrese precio x bolsa");
	  		precioXbolsa=parseInt(precioXbolsa);
	  	}

	  	bolsasTotales=bolsasTotales+cantidadBolsas;
	  	precioTotal=precioXbolsa*cantidadBolsas;
	  	precioTotalBruto=precioTotalBruto+precioTotal;

	  	switch(tipoIngresado)
	  	{	
	  		case"arena":
	  			acumuladorArenaBolsas=acumuladorArenaBolsas+cantidadBolsas;
	  		break;
	  		case"cal":
	  			acumuladorCalBolsas=acumuladorCalBolsas+cantidadBolsas;
	  		break;
	  		case"cemento":
	  			acumuladorCementoBolsas=acumuladorCementoBolsas+cantidadBolsas;
	  		break;
	  	}

	  	if(banderaMasCaro==0||precioXbolsa>precioMasCaro)
	  	{
	  		precioMasCaro=precioXbolsa;
	  		tipoMasCaro=tipoIngresado;
	  		banderaMasCaro=1;
	  	}

	  	continuar=prompt("ingrese si , para continuar");
  	}

  	if(acumuladorArenaBolsas>acumuladorCementoBolsas&&acumuladorArenaBolsas>acumuladorCalBolsas)
  	{
  		tipoConMasCantidadBolsas="arena";
  	}
  	else
  	{
  		if(acumuladorCementoBolsas>acumuladorCalBolsas)
  		{
  			tipoConMasCantidadBolsas="cemento";
  		}
  		else
  		{
  			tipoConMasCantidadBolsas="cal";
  		}
  	}

  	if(bolsasTotales>10)
  	{
  		if(bolsasTotales>30)
  		{
  			descuento=25;
  		}
  		else
  		{
  			descuento=15;
  		}

  		precioConDto=precioTotalBruto-((precioTotalBruto*descuento)/100);
  		alert("El precio con dto es "+precioConDto);
  	}

  	alert("El importa total bruto es "+precioTotalBruto);
  	alert("el tipo con mas cantidad de bolsas es "+tipoConMasCantidadBolsas);
  	alert("El tipo mas caro es "+tipoMasCaro);

}
