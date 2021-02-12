/*DAUD MANZO JUAN PABLO
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/

function CalcularPrecio () 
{
	var lamparitas;
	var cantLamp;
	var descuento;
	var resultado;
	var marca;
	var ingresosBrutos;
	var mensaje;

	lamparitas = 35;

	cantLamp = document.getElementById("txtIdCantidad").value;
	cantLamp = parseInt(cantLamp);

	marca = document.getElementById("Marca").value;

	descuento = 0;

	switch(cantLamp)
	{
		case 5:
		
			switch(marca)
			{
				case "ArgentinaLuz":
					descuento = 40;
				break;

				default:
					descuento = 30;
				break;
			}
	}
    
    resultado = (cantLamp * 35) - (((cantLamp * 35) * descuento) / 100);

    if(resultado > 120)
    {
		ingresosBrutos = (resultado * 10) / 100;
    	mensaje = "Usted Pago " + resultado + " pesos , siendo " + ingresosBrutos + " pesos los ingresos brutos";
    	alert(mensaje);
    }

	document.getElementById("txtIdprecioDescuento").value = resultado;


}

/*
function CalcularPrecio () 
{
	var lamparitas;
	var cantLamp;
	var descuento;
	var resultado;
	var marca;
	var ingresosBrutos;
	var mensaje;

	lamparitas = 35;

	cantLamp = document.getElementById("txtIdCantidad").value;
	cantLamp = parseInt(cantLamp);

	marca = document.getElementById("Marca").value;

	descuento = 0;

	if(cantLamp > 5)
	{
		descuento = 50;
	}
	else
	{
		if(cantLamp == 5)
		{
			if(marca == "ArgentinaLuz")
			{
				descuento = 40;
			}
			else
			{
				descuento = 30;
			}
		}
		else
		{
			if(cantLamp == 4)
			{
				if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
				{
					descuento = 25;
				}
				else
				{
					descuento = 20;
				}
			}
			else
			{
				if(cantLamp == 3)
				{
					if(marca =="ArgentinaLuz")
					{
						descuento = 15;
					}
					else
					{
						if(marca =="FelipeLamparas")
						{
							descuento = 10;
						}
						else
						{
							descuento = 5;
						}
					}
				}	
			}
		}		
	}
    
    resultado = (cantLamp * 35) - (((cantLamp * 35) * descuento) / 100);

    if(resultado > 120)
    {
		ingresosBrutos = (resultado * 10) / 100;
    	mensaje = "Usted Pago " + resultado + " pesos , siendo " + ingresosBrutos + " pesos los ingresos brutos";
    	alert(mensaje);
    }

	document.getElementById("txtIdprecioDescuento").value = resultado;


}
*/