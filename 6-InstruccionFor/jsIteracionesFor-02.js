//DAUD MANZO JUAN PABLO 
/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/
function mostrar()
{
	var continente;
	var nombrePais;
	var cantidadHabitantes;
	var nivelPobreza;
	var temperaturaMinima;
	var nivelPobrezaEuropa;
	var contadorTemperaturasPares;
	var contadorImparesEuropa;
	var banderaMenosHabitantes;
	var nombrePaisMenosHabitantes;
	var menosHabitantes;
	var contadorPaisesTempAlta;
	var contadorPaisesAmericaFrios;
	var acumuladorDeHabitantes;
	var promedioHabitantes;
	var acumuladorDeHabitantesCalidos;
	var promedioHabitantesCalidos;
	var banderaTemperaturaMinimaIngresada;
	var nombreDePaisMenorTemperatura;
	var temperaturaMinimaIngresada;
	var acumuladorHabitantesAmerica;
	var acumuladorHabitantesAsia;
	var acumuladorDeHabitantesEuropa;
	var acumuladorHabitantesAfrica;
	var acumuladorHabitantesOceania;
	var continenteConMasHabitantes;

	acumuladorHabitantesOceania=0;
	acumuladorHabitantesAfrica=0;
	acumuladorHabitantesAsia=0;
	acumuladorDeHabitantesEuropa=0;
	acumuladorHabitantesAmerica=0;
	banderaTemperaturaMinimaIngresada=0;
	acumuladorDeHabitantesCalidos=0;
	acumuladorDeHabitantes=0;
	contadorPaisesAmericaFrios=0;
	contadorPaisesTempAlta=0;
	banderaMenosHabitantes=0;
	contadorImparesEuropa=0;
	contadorTemperaturasPares=0;

	for(contador=0;contador<5;contador=contador+1)
	{
		continente=prompt("Ingrese continente");
		while(continente!="america"&&continente!="asia"&&continente!="europa"&&continente!="africa"&&continente!="oceania")
		{
			continente=prompt("Ingrese continente");
		}

		nombrePais=prompt("Ingrese nombre pais");
		while(isNaN(nombrePais)==false)
		{
			nombrePais=prompt("Ingrese nombre pais");
		}

		cantidadHabitantes=prompt("Ingrese cantidad habitantes de 1M a 7000MilM");
		cantidadHabitantes=parseInt(cantidadHabitantes);
		while(isNaN(cantidadHabitantes)==true||cantidadHabitantes<1000000||cantidadHabitantes>7000000000)
		{
			cantidadHabitantes=prompt("Ingrese cantidad habitantes de 1M a 7000MilM");
			cantidadHabitantes=parseInt(cantidadHabitantes);
		}

		if(continente=="europa")
		{
			nivelPobrezaEuropa=prompt("Ingrese el nivel de pobreza rico o muy rico");
			while(nivelPobrezaEuropa!="rico"&&nivelPobrezaEuropa!="muy rico")
			{
				nivelPobreza=prompt("Ingrese el nivel de pobreza , pobre , rico o muy rico");
			}
		}
		else
		{
			nivelPobreza=prompt("Ingrese nivel pobreza pobre , rico o muy rico");
			while(nivelPobreza!="pobre"&&nivelPobreza!="rico"&&nivelPobreza!="muy rico")
			{
				nivelPobreza=prompt("Ingrese nivel pobreza pobre , rico o muy rico");
			}
		}

		temperaturaMinima=prompt("Ingrese temperatura entre -50 y 50");
		temperaturaMinima=parseInt(temperaturaMinima);
		while(isNaN(temperaturaMinima)==true||temperaturaMinima<-50||temperaturaMinima>50)
		{
			temperaturaMinima=prompt("Ingrese temperatura entre -50 y 50");
			temperaturaMinima=parseInt(temperaturaMinima);
		}
		
		if(temperaturaMinima%2==0)
		{
			contadorTemperaturasPares=contadorTemperaturasPares+1;
		}
		else
		{
			if(continente=="europa")
			{
				contadorImparesEuropa=contadorImparesEuropa+1;
			}
		}

		if(banderaMenosHabitantes==0||cantidadHabitantes<menosHabitantes)
		{
			menosHabitantes=cantidadHabitantes;
			nombrePaisMenosHabitantes=nombrePais;
			banderaMenosHabitantes=1;
		}

		if(temperaturaMinima>40)
		{
			contadorPaisesTempAlta=contadorPaisesTempAlta+1;
			acumuladorDeHabitantesCalidos=acumuladorDeHabitantesCalidos+cantidadHabitantes;
		}

		if(continente=="america"&&temperaturaMinima<0)
		{
			contadorPaisesAmericaFrios=contadorPaisesAmericaFrios+1;
		}

		acumuladorDeHabitantes=acumuladorDeHabitantes+cantidadHabitantes;

		if(banderaTemperaturaMinimaIngresada==0||temperaturaMinima<temperaturaMinimaIngresada)
		{
			temperaturaMinimaIngresada=temperaturaMinima;
			nombreDePaisMenorTemperatura=nombrePais;
			banderaTemperaturaMinimaIngresada=1;
		}

		switch(continente)
		{
			case"america":
				acumuladorHabitantesAmerica=acumuladorHabitantesAmerica+cantidadHabitantes;
			break;
			case"asia":
				acumuladorHabitantesAsia=acumuladorHabitantesAsia+cantidadHabitantes;
			break;
			case"africa":
				acumuladorHabitantesAfrica=acumuladorHabitantesAfrica+cantidadHabitantes;
			break;
			case"oceania":
				acumuladorHabitantesOceania=acumuladorHabitantesOceania+cantidadHabitantes;
			break;
			case"europa":
				acumuladorDeHabitantesEuropa=acumuladorDeHabitantesEuropa+cantidadHabitantes;
			break;
		}
	}

	promedioHabitantes=acumuladorDeHabitantes/5;

	if(contadorPaisesTempAlta!=0)
	{
		promedioHabitantesCalidos=acumuladorDeHabitantesCalidos/contadorPaisesTempAlta;
		alert("El promedio de habitantes pais calido es "+promedioHabitantesCalidos);
	}

	if(acumuladorHabitantesAmerica>acumuladorHabitantesAfrica&&acumuladorHabitantesAmerica>acumuladorHabitantesAsia&&acumuladorHabitantesAmerica>acumuladorHabitantesOceania&&acumuladorHabitantesAmerica>acumuladorDeHabitantesEuropa)
	{
		continenteConMasHabitantes="america";
	}
	else
	{
		if(acumuladorHabitantesAfrica>acumuladorHabitantesAsia&&acumuladorHabitantesAfrica>acumuladorHabitantesOceania&&acumuladorHabitantesAfrica>acumuladorDeHabitantesEuropa)
		{
			continenteConMasHabitantes="africa";
		}
		else
		{
			if(acumuladorHabitantesAsia>acumuladorHabitantesOceania&&acumuladorHabitantesAsia>acumuladorDeHabitantesEuropa)
			{
				continenteConMasHabitantes="asia";
			}
			else
			{
				if(acumuladorHabitantesOceania>acumuladorDeHabitantesEuropa)
				{
					continenteConMasHabitantes="oceania";
				}
				else
				{
					continenteConMasHabitantes="europa";
				}
			}
		}
	}
	
	alert("El pais con menos temperatura es "+nombreDePaisMenorTemperatura+" con temperatura de "+temperaturaMinimaIngresada);
	alert("El continente con mas habitantes es "+continenteConMasHabitantes);
	alert("La cantidad de temp pares es "+contadorTemperaturasPares);
	alert("La cantidad de temp impares en europa es "+contadorImparesEuropa);
	alert("El nombre pais menos habitantes es "+nombrePaisMenosHabitantes);
	alert("la cantidad de paises +40 grados es "+contadorPaisesTempAlta);
	alert("La cantidad paises america frios -0 es "+contadorPaisesAmericaFrios);
	alert("El promedio habitantes de los 5 paises es "+promedioHabitantes);


}