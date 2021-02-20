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



/*
function mostrar()
{
	//VALIDACION
	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var contador;
	//PUNTO A
	var banderaAlcohol;
	var alcoholMin;
	var fabricanteAlcoholMin;
	var cantidadUniAlcoholBar;
	//PUNTO B
	var cantidadBarbijos; //ACUMULADORES
	var cantidadJabon;	  //ACUMULADORES
	var cantidadAlcohol;  //ACUMULADORES
	var contadorBarbijos;
	var contadorJabones;
	var contadorAlcoholes;
	var promedio;
	var mensaje;
	//VALIDACION
	contador = 0;
	//PUNTO A
	banderaAlcohol = 0;
	//PUNTO B
	cantidadBarbijos = 0; //ACUMULADORES
	cantidadJabon = 0;    //""
	cantidadAlcohol = 0;  //""	
	contadorBarbijos = 0;
	contadorJabones = 0;
	contadorAlcoholes = 0;


	while(contador < 5)
	{
		producto = prompt("Ingrese barbijo,jabon o alcohol");

			while(producto != "barbijo" && producto != "jabon" && producto != "alcohol")
			{
				producto = prompt("Error,Ingrese barbijo,jabon o alcohol");
			}

		precio = prompt("Ingrese precio de 100 a 300");
		precio = parseInt(precio);

			while(isNaN(precio) == true || precio > 300 || precio < 100)
			{
				precio = prompt("Error ,Ingrese precio de 100 a 300");
				precio = parseInt(precio);
			}

		cantidad = prompt("ingrese cantidad de 1 a 1000");
		cantidad = parseInt(cantidad);

			while(isNaN(cantidad) == true || cantidad < 1 || cantidad > 1000)
			{
				cantidad = prompt("error ,ingrese cantidad de 1 a 1000");
				cantidad = parseInt(cantidad);
			}

		marca = prompt("Ingrese marca");

		fabricante = prompt("Ingrese fabricante");

		if(banderaAlcohol == 0 && producto == "alcohol")
		{
			alcoholMin = precio;
			fabricanteAlcoholMin = fabricante;
			cantidadUniAlcoholBar = cantidad;
			banderaAlcohol = 1;

		}
		else
		{
			if(producto == "alcohol" && precio < alcoholMin)
			{
				alcoholMin = precio;
				fabricanteAlcoholMin = fabricante;
				cantidadUniAlcoholBar = cantidad;
			}
		}

		if(producto == "barbijo")
		{
			cantidadBarbijos = cantidadBarbijos + cantidad;
			contadorBarbijos = contadorBarbijos + 1;
		}
		else
		{
			if(producto == "jabon")
			{
				cantidadJabon = cantidadJabon + cantidad;
				contadorJabones = contadorJabones + 1;
			}
			else
			{
				cantidadAlcohol = cantidadAlcohol + cantidad;
				contadorAlcoholes = contadorAlcoholes + 1;
			}
		}	

		contador = contador + 1;
	}

	
	if(cantidadBarbijos > cantidadJabon)
	{
		if(cantidadBarbijos > cantidadAlcohol)
		{
			promedio = cantidadBarbijos / contadorBarbijos;
			mensaje = "barbijo";
		}
		else
		{
			promedio = cantidadAlcohol / contadorAlcoholes;
			mensaje = "alcohol";
		}
	}
	else
	{
		if(cantidadJabon > cantidadAlcohol)
		{
			promedio = cantidadJabon / contadorJabones;
			mensaje = "jabon";
		}
		else
		{
			promedio = cantidadAlcohol / contadorAlcoholes;
			mensaje = "alcohol";
		}
	}
	

	document.write("El mas barato de los alcohol sale " + alcoholMin + " y se llevaron " + cantidadUniAlcoholBar + " fabricante " + fabricanteAlcoholMin + "<br>");
	document.write("El tipo con mas unidades es " + mensaje + " con promedio de " + promedio + "<br>");
	document.write("Hay " + cantidadJabon + " unidades de jabon");
}

			if(Math.max(cantidadBarbijos,cantidadJabon,cantidadAlcohol) == cantidadBarbijos)
		{
			promedio = cantidadBarbijos / contadorBarbijos;
			mensaje = "barbijo";
		}
*/