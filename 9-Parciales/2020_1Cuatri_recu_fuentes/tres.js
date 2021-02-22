//DAUD MANZO JUAN PABLO
//24 MINUTOS
function mostrar()
{
	var continuar;
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var banderaTemperaturaMaxima;
	var temperaturaMaxima;
	var nacionalidadTemperaturaMaxima;
	var contadorDeSolteros;
	var contadorDeMujeresSolterasViudas;
	var contadorDeViejosConTemperatura;
	var edadesAcumuladas;
	var contadorDeMujeresCasadas;
	var promedioMujeresCasadas;

	edadesAcumuladas=0;
	contadorDeMujeresCasadas=0;
	contadorDeViejosConTemperatura=0;
	contadorDeMujeresSolterasViudas=0;
	contadorDeSolteros=0;
	banderaTemperaturaMaxima=0;
	continuar="si";

	while(continuar=="si")
	{

		nombre=prompt("Ingrese nombre por fa");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("error,Ingrese nombre por fa");
		}
		nacionalidad=prompt("Ingrese nacionalidad");
		while(isNaN(nacionalidad)==false)
		{
			nacionalidad=prompt("Error, ingrese nacionalidad");
		}
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)==true||edad<1||edad>100)
		{
			edad=prompt("error,Ingrese edad");
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese sexo m o f")
		while(sexo!="m"&&sexo!="f")
		{
			sexo=prompt("error,Ingrese sexo m o f")
		}
		estadoCivil=prompt("Ingrese estado civil , soltero casado o viudo");
		while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("Ingrese estado civil , soltero casado o viudo");
		}
		temperaturaCorporal=prompt("ingrese temperatura Corporal de 34 a 42");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true||temperaturaCorporal<34||temperaturaCorporal>42)
		{
			temperaturaCorporal=prompt("error,ingrese temperatura Corporal de 34 a 42");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		if(banderaTemperaturaMaxima==0||temperaturaCorporal>temperaturaMaxima)
		{
			temperaturaMaxima=temperaturaCorporal;
			nacionalidadTemperaturaMaxima=nacionalidad;
			banderaTemperaturaMaxima=1;
		}

		if(edad>17&&estadoCivil=="soltero")
		{
			contadorDeSolteros=contadorDeSolteros+1;
		}

		if(sexo=="f"&&(estadoCivil=="soltero"||estadoCivil=="viudo"))
		{
			contadorDeMujeresSolterasViudas=contadorDeMujeresSolterasViudas+1;
		}

		if(edad>60&&temperaturaCorporal>38)
		{
			contadorDeViejosConTemperatura=contadorDeViejosConTemperatura+1;
		}

		if(sexo=="f"&&estadoCivil=="casado")
		{
			edadesAcumuladas=edadesAcumuladas+edad;
			contadorDeMujeresCasadas=contadorDeMujeresCasadas+1;
		}
		continuar=prompt("ingrese si , para ingresar otra persona");
	}

	promedioMujeresCasadas=edadesAcumuladas/contadorDeMujeresCasadas;

	alert("La nacionalidad de la persona con mas tempe es "+nacionalidadTemperaturaMaxima);
	alert("mayores de edad solteros son "+contadorDeSolteros);
	alert("La cantidad de mujeres solteras o viudas es "+contadorDeMujeresSolterasViudas);
	alert("la cantidad de 3ra edad con temperatura+38 es "+contadorDeViejosConTemperatura);
	alert("El promedio de edad mujeres casadas es "+promedioMujeresCasadas);
}
