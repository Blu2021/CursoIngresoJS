/*DAUD MANZO JUAN PABLO
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;

	edad = prompt("Ingrese su edad por favor");
	edad = parseInt(edad);

	while(isNaN(edad) == true || edad < 18 || edad > 90)
	{
		edad = prompt("Solo aceptamos personas entre 18 y 90 años inclusive, reingrese edad por favor");
		edad = parseInt(edad);
	}

	sexo = prompt("Ingrese su sexo m para masculino y f para femenino");

	while(sexo != "m" && sexo != "f")//DISTINTO A AMBOS A LA MISMA VEZ
	{
		sexo = prompt("Reingrese sexo por favor utilizando las siglas correctas");
	}

		switch(sexo)
		{
			case "f":
				sexo = "Femenino";
			break;

			case "m":
				sexo = "Masculino";
			break;
		}

	estadoCivil = prompt("Ingrese estado civil mediante el numero 1 para indicar que es soltero , el 2 para casados , el 3 para divorciados y el 4 para viudos");
	estadoCivil = parseInt(estadoCivil);

	while(isNaN(estadoCivil) == true || estadoCivil < 1 || estadoCivil > 4)
	{
		estadoCivil = prompt("Usted no ha ingresado una opcion correcta , reingrese por favor");
		estadoCivil = parseInt(estadoCivil);
	}

		switch(estadoCivil)
		{
			case 1:
				estadoCivil = "Soltero";
			break;

			case 2:
				estadoCivil = "Casado";
			break;

			case 3:
				estadoCivil = "Divorciado";
			break;

			case 4:
				estadoCivil = "Viudo";
			break;
		}

	sueldoBruto = prompt("Ingrese su sueldo en bruto por favor");
	sueldoBruto = parseInt(sueldoBruto);

	while(isNaN(sueldoBruto) == true || sueldoBruto < 8000)
	{
		sueldoBruto = prompt("El sueldo debe ser de 8000 o mayor , reingrese su sueldo");
		sueldoBruto = parseInt(sueldoBruto);
	}

	numeroLegajo = prompt("Ingrese numero de legajo por favor");
	numeroLegajo = parseInt(numeroLegajo);

	while(isNaN(numeroLegajo) == true || numeroLegajo > 9999 || numeroLegajo < 1000)
	{
		numeroLegajo = prompt("El numero de legajo debe tener 4 cigras sin ceros a la izquierda");
		numeroLegajo = parseInt(numeroLegajo);
	}

	nacionalidad = prompt("Ingrese A si es argentino , E si es extranjero ó N si es nacionalizado");

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("Letra no valida , reingrese por favor");
	}

	document.getElementById('txtIdEdad').value = edad + " Años";
	document.getElementById('txtIdSexo').value = "Sexo " + sexo;
	document.getElementById('txtIdEstadoCivil').value = "Estado civil " + estadoCivil;
	document.getElementById('txtIdSueldo').value = "Sueldo de " + sueldoBruto;
	document.getElementById('txtIdLegajo').value = "Numero de legajo " + numeroLegajo;
	document.getElementById('txtIdNacionalidad').value = "Nacionalidad " + nacionalidad;


}
