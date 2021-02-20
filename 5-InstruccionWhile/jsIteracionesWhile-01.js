/*DAUD MANZO JUAN PABLO
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var ingresoNuevoProducto;
	var contadorTemperaturasPares;
	var marcaMasPesado;
	var pesoMax;
	var pesoMin;
	var marcadorPrimero;
	var contadorTemperaturasFrias;
	var acumuladorDePeso;
	var contadorProductos;
	var promedio;

	ingresoNuevoProducto = "si";
	contadorTemperaturasPares = 0;
	marcadorPrimero = 0;
	contadorTemperaturasFrias = 0;
	acumuladorDePeso = 0;
	contadorProductos = 0;

	while(ingresoNuevoProducto == "si")
	{
		marca = prompt("Ingrese la marca de su producto");

		while(isNaN(marca) == false)
		{
			marca = prompt("Error , reingrese marca");
		}

		peso = prompt("Ingrese el peso en kilos admisible solo desde 1 a 100 (no agrege las siglas kg. solo el numero)");
		peso = parseInt(peso);

		while(isNaN(peso) == true || peso > 100 || peso < 1) 
		{
			peso = prompt("Error , reingrese peso");
			peso = parseInt(peso);
		}	

		//PRODUCTO MAS PESADO
		if(marcadorPrimero == 0)
		{
			marcaMasPesado = marca;
			pesoMax = peso;
			pesoMin = peso;

			marcadorPrimero = 1;
		}
		else
		{
			if(peso > pesoMax)
			{
				marcaMasPesado = marca;
				pesoMax = peso;
			}
			else
			{
				if(peso < pesoMin)
				{
					pesoMin = peso;
				}
			}
		}	

		temperatura = prompt("Ingrese temperatura de almacenamiento , solo admisible desde -30° hasta 30° (introduzca solo el numero sin el signo °)");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) == true || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Error , reingrese temperatura");
			temperatura = parseInt(temperatura);
		}
		//TEMPERATURAS PARES
		if(temperatura%2 == 0)
		{
			contadorTemperaturasPares = contadorTemperaturasPares + 1;
		}

		//CONTADOR DE PRODUCTOS FRIOS
		if(temperatura < 0)
		{
			contadorTemperaturasFrias = contadorTemperaturasFrias + 1;
		}

		acumuladorDePeso = acumuladorDePeso + peso;

		contadorProductos = contadorProductos + 1;

		ingresoNuevoProducto = prompt("Ingrese la palabra (si) para ingresar un nuevo producto");

	}

	promedio = acumuladorDePeso / contadorProductos;


	document.write("La cantidad de temperaturas pares es de " + contadorTemperaturasPares + "<br>");
	document.write("La marca del producto mas pesado es " + marcaMasPesado + "<br>");
	document.write("Cantidad de productos frios a -0 grados es de " + contadorTemperaturasFrias + "<br>");
	document.write("El promedio de peso de todos los productos es de " + promedio + "<br>");
	document.write("El producto mas pesado pesa " + pesoMax + " y el mas liviano pesa " + pesoMin + "<br>");

}


/*
function mostrar()
{
	var edad;
	var nombre;
	var continuar;
	var marcadorPrimero;
	var edadMax;
	var edadMin;
	var nombreViejo;
	var nombreJoven;

	continuar = "si";

	marcadorPrimero = 1;

	while(continuar == "si")
	{
		edad = prompt("Ingrese su edad por favor");
		edad = parseInt(edad);

		while(isNaN(edad) == true || edad > 110 || edad < 1)
		{
		edad = prompt("Error , reingrese edad");
		edad = parseInt(edad);
		}

		nombre = prompt("Ingrese su nombre por favor");

		while(isNaN(nombre) == false)
		{
			nombre = prompt("Error , reingrese nombre");
		}

		if(marcadorPrimero == 1)
		{
			edadMax = edad;
			edadMin = edad;
			nombreViejo = nombre;
			nombreJoven = nombre;

			marcadorPrimero = 0;
		}
		else
		{
			if(edad > edadMax)
			{
				edadMax = edad;
				nombreViejo = nombre;
			}

			if(edad < edadMin)
			{
				edadMin = edad;
				nombreJoven = nombre;
			}

		}
		continuar = prompt("Ingrese si , si desea continuar");
    }

    alert("La persona mas vieja se llama " + nombreViejo + " y tiene " + edadMax + " años y la persona mas joven se llama " + nombreJoven + " y tiene " + edadMin + " años");

}//FIN DE LA FUNCIÓN

	var contador;

	contador = 0;

	while(contador < 10)
	{
		contador = contador + 1;

		console.log(contador);
	}
*/