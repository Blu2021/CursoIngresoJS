//DAUD MANZO JUAN PABLO
//21 MINUTOS 32 SEGUNDOS
function mostrar()
{
	var contador;
	var tipoProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var banderaJabonCaro;
	var cantidadUnidadesJabonMasCaro;
	var fabricanteJabonMasCaro;
	var acumuladorBarbijos;
	var acumuladorJabones;
	var acumuladorAlcoholes;
	var contadorBarbijos;
	var contadorJabones;
	var contadorAlcoholes;
	var tipoConMasUnidades;
	var promedio;

	acumuladorBarbijos=0;
	acumuladorJabones=0;
	acumuladorAlcoholes=0;
	contadorBarbijos=0;
	contadorAlcoholes=0;
	contadorJabones=0;
	banderaJabonCaro=0;
	contador=0;

	while(contador<5)
	{
		tipoProducto=prompt("Ingrese tipo de producto , barbijo jabon o alcohol");
		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol")
		{
			tipoProducto=prompt("Error,Ingrese tipo de producto , barbijo jabon o alcohol");
		}
		precio=prompt("Ingrese precio entre 100 y 300");
		precio=parseInt(precio);
		while(isNaN(precio)==true||precio<100||precio>300)
		{
			precio=prompt("error,Ingrese precio entre 100 y 300");
			precio=parseInt(precio);
		}
		cantidadUnidades=prompt("Ingrese cantidad unidades de 1 a 1000");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)==true||cantidadUnidades<1||cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("error,Ingrese cantidad unidades de 1 a 1000");
			cantidadUnidades=parseInt(cantidadUnidades);
		}
		marca=prompt("Ingrese marca");
		fabricante=prompt("Ingrese fabricante");

		if(tipoProducto=="jabon")
		{
			if(banderaJabonCaro==0)
			{
				jabonMasCaro=precio;
				cantidadUnidadesJabonMasCaro=cantidadUnidades;
				fabricanteJabonMasCaro=fabricante;
				banderaJabonCaro=1;
			}
			else
			{	
				if(precio>jabonMasCaro)
				{
					jabonMasCaro=precio;
					cantidadUnidadesJabonMasCaro=cantidadUnidades;
					fabricanteJabonMasCaro=fabricante;
				}
				
			}
		}

		switch(tipoProducto)
		{
			case"barbijo":
				acumuladorBarbijos=acumuladorBarbijos+cantidadUnidades;
				contadorBarbijos=contadorBarbijos+1;
			break;
			case"jabon":
				acumuladorJabones=acumuladorJabones+cantidadUnidades;
				contadorJabones=contadorJabones+1;
			break;
			case"alcohol":
				acumuladorAlcoholes=acumuladorAlcoholes+cantidadUnidades;
				contadorAlcoholes=contadorAlcoholes+1;
			break;
		}

		contador=contador+1;
	}

	if(acumuladorBarbijos>acumuladorJabones&&acumuladorBarbijos>acumuladorAlcoholes)
	{
		promedio=acumuladorBarbijos/contadorBarbijos;
		tipoConMasUnidades="barbijo";
	}
	else
	{
		if(acumuladorJabones>acumuladorAlcoholes)
		{
			promedio=acumuladorJabones/contadorJabones;
			tipoConMasUnidades="jabon";
		}
		else
		{
			promedio=acumuladorAlcoholes/contadorAlcoholes;
			tipoConMasUnidades="alcohol";
		}
	}

	alert("El fabricante del mas caro de los jabones es "+fabricanteJabonMasCaro+" y la cantidad U es "+cantidadUnidadesJabonMasCaro);
	alert("El tipo con mas unidades " +tipoConMasUnidades+" y el promedio "+promedio);
	alert("La cantidad total barbijos unidades es " +acumuladorBarbijos);
}
