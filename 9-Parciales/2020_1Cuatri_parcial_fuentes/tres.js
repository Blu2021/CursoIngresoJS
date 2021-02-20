//DAUD MANZO JUAN PABLO
//TIEMPO 28 minutos 54 segundos
function mostrar()
{
	var continuar;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var banderaDeTemperatura;
	var temperaturaMaxima;
	var nombreConMasTemperatura;
	var contadorDeViudos;
	var contadorDeHombresSolterosViudos;
	var terceraEdadConTemperatura;
	var promedioEdadSolteros;
	var acumuladorDeEdad;
	var contadorDeSolteros;


	continuar = "si";
	banderaDeTemperatura=0;
	contadorDeViudos=0;
	contadorDeHombresSolterosViudos=0;
	terceraEdadConTemperatura=0;
	contadorDeSolteros=0;
	acumuladorDeEdad=0;

	while(continuar == "si")
	{
		nombre=prompt("Ingrese nombre");	
		while(isNaN(nombre) == false)
		{
			nombre=prompt("Error,Ingrese nombre");
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad) == true || edad>100 || edad<1)
		{
			edad=prompt("Error,Ingrese edad");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese sexo f o m");
		while(sexo != "f" && sexo != "m")
		{
			sexo=prompt("Error,Ingrese sexo f o m");
		}

		estadoCivil=prompt("Ingrese estado civil,soltero ,casado o viudo");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Error,Ingrese estado civil,soltero ,casado o viudo");
		}

		temperaturaCorporal=prompt("Ingrese temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<30 || temperaturaCorporal >45)
		{
			temperaturaCorporal=prompt("ERROR,Ingrese temperatura corporal");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		if(banderaDeTemperatura == 0 || temperaturaCorporal > temperaturaMaxima)
		{
			temperaturaMaxima=temperaturaCorporal;
			nombreConMasTemperatura=nombre;
			banderaDeTemperatura=1;
		}

		if(edad>18 && estadoCivil=="viudo")
		{
			contadorDeViudos = contadorDeViudos + 1;
		}

		if(sexo=="m"&&(estadoCivil=="soltero"||estadoCivil=="viudo"))
		{
			contadorDeHombresSolterosViudos= contadorDeHombresSolterosViudos + 1;
		}

		if(edad>60 && temperaturaCorporal>38)
		{
			terceraEdadConTemperatura=terceraEdadConTemperatura + 1;
		}

		if(sexo=="m" && estadoCivil=="soltero")
		{
			acumuladorDeEdad=acumuladorDeEdad + edad;
			contadorDeSolteros=contadorDeSolteros + 1;
		}

		continuar = prompt("Ingrese si , para continuar");
	}


	

	promedioEdadSolteros=acumuladorDeEdad/contadorDeSolteros;

	alert("La persona con mas temperatura se llama "+nombreConMasTemperatura);
	//a) El nombre de la persona con mas temperatura.
	//b) Cuantos mayores de edad estan viudos
	alert("Mayores de edad viudos hay "+contadorDeViudos);
	//c) La cantidad de hombres que hay solteros o viudos.
	alert("La cantidad de hombres solteros o viudos es "+contadorDeHombresSolterosViudos);
	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	alert("La cantidad de persona mayores a 60 con temperatura es "+terceraEdadConTemperatura);
	//e) El promedio de edad entre los hombres solteros.
	alert("El promedio de edad hombres solteros es "+promedioEdadSolteros);



}
