//DAUD MANZO JUAN PABLO
//TIEMPO 28 MINUTOS 56 SEGUNDOS
function mostrar()
{
	var continuarContador;
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var fabricanteAlcoholMasBarato;
	var precioAlcoholMasBarato;
	var cantidadUnidadesAlcoholBarato;
	var banderaAlcoholBarato;
	var contadorDeBarbijos;
	var contadorDeJabones;
	var contadorDeAlcohol;
	var acumuladorUnidadesjabon;
	var acumuladorUnidadesBarbijo;
	var acumuladorUnidadesAlcohol;
	var promedio;
	var tipoConMasUnidades;

	banderaAlcoholBarato=0;
	continuarContador=0;
	contadorDeBarbijos=0;
	contadorDeAlcohol=0;
	contadorJabones=0;
	acumuladorUnidadesjabon=0;
	acumuladorUnidadesBarbijo=0;
	acumuladorUnidadesAlcohol=0;

	while(continuarContador<5)
	{
		tipoProducto=prompt("Ingrese producto");
		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol")
		{
			tipoProducto=prompt("error,Ingrese producto");
		}

		precioProducto=prompt("Ingrese precio entre 100 y 300");
		precioProducto=parseInt(precioProducto);
		while(isNaN(precioProducto)==true||precioProducto<100||precioProducto>300)
		{
			precioProducto=prompt("error,Ingrese precio entre 100 y 300");
			precioProducto=parseInt(precioProducto);
		}

		cantidadUnidades=prompt("Ingrese cantidad unidades 1 a 1000");
		cantidadUnidades=parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades)==true||cantidadUnidades<1||cantidadUnidades>1000)
		{
			cantidadUnidades=prompt("error,Ingrese cantidad unidades 1 a 1000");
			cantidadUnidades=parseInt(cantidadUnidades);
		}

		marca=prompt("Ingrese marca");
		fabricante=prompt("ingrese fabricante");

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		if(tipoProducto=="alcohol")
		{
			if(banderaAlcoholBarato==0 || precioProducto<precioAlcoholMasBarato)
			{
				cantidadUnidadesAlcoholBarato=cantidadUnidades;
				fabricanteAlcoholMasBarato=fabricante;
				precioAlcoholMasBarato=precioProducto;
				banderaAlcoholBarato=1;
			}
			//else
			//{
			//	if(precioProducto<precioAlcoholMasBarato)
			//	{
			//		cantidadUnidadesAlcoholBarato=cantidadUnidades;
			//		fabricanteAlcoholMasBarato=fabricante;
			//		precioAlcoholMasBarato=precioProducto;
			//	}
			//}
		}

		//b) Del tipo con mas unidades, el promedio por compra
		switch(tipoProducto)
		{
			case"barbijo":
				acumuladorUnidadesBarbijo=acumuladorUnidadesBarbijo+cantidadUnidades;
				contadorDeBarbijos=contadorDeBarbijos+1;
			break;
			case"jabon":
				acumuladorUnidadesjabon=acumuladorUnidadesjabon+cantidadUnidades;
				contadorDeJabones=contadorDeJabones+1;
			break;
			case"alcohol":
				acumuladorUnidadesAlcohol=acumuladorUnidadesAlcohol+cantidadUnidades;
				contadorDeAlcohol=contadorDeAlcohol+1;
			break;
		}

		//c) Cuántas unidades de jabones hay en total

		continuarContador=continuarContador+1;
	}

	if(acumuladorUnidadesBarbijo>acumuladorUnidadesjabon && acumuladorUnidadesBarbijo>acumuladorUnidadesAlcohol)
	{
		promedio=acumuladorUnidadesBarbijo/contadorDeBarbijos;
		tipoConMasUnidades="Barbijo";
	}
	else
	{
		if(acumuladorUnidadesjabon>acumuladorUnidadesAlcohol)
		{
			promedio=acumuladorUnidadesjabon/contadorDeJabones;
			tipoConMasUnidades="jabon";
		}
		else
		{
			promedio=acumuladorUnidadesAlcohol/contadorDeAlcohol;
			tipoConMasUnidades="alcohol";
		}

	}

	document.write("La cantidad de alcohol mas barato es "+cantidadUnidadesAlcoholBarato+"y el fabricante "+fabricanteAlcoholMasBarato+"<br>");
	document.write("el tipo con mas unidades es "+tipoConMasUnidades+" y el promedio es "+promedio+"<br>");
	document.write("La cantidad de unidades de jabon total es "+acumuladorUnidadesjabon+"<br>");
}