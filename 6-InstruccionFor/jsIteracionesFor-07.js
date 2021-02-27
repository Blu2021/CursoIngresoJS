//DAUD MANZO JUAN PABLO
function mostrar()
{
	var continuar;
	var nombre;
	var sexo;
	var edad;
	var altura;
	var temperaturaCorporal;
	var personasMasAltaMide;
	var banderaPersonaMasAlta;
	var nombrePersonaMasAlta;
	var sexoPersonaMasAlta;
	var nombreMujerJoven;
	var edadMujerJoven;
	var banderaMujerMasJoven;
	var banderaHombreMasBajito;
	var alturaHombreMasBajito;
	var nombreDeHombreMasBajito;
	//
	var contadorDeHombres;
	var acumuladorEdadDeHombres;
	var contadorDeMujeres;
	var acumuladorEdadDeMujeres;
	var contadorDeAltos;
	var porcentajeDeMujeres;
	var promedioEdadHombres;
	var promedioEdadMujeres;
	var porcentajeDeMujeres;

	contadorDeHombres=0;
	acumuladorEdadDeHombres=0;
	contadorDeMujeres=0;
	acumuladorEdadDeMujeres=0;
	contadorDeAltos=0;
	banderaHombreMasBajito=0;
	banderaMujerMasJoven=0;
	banderaPersonaMasAlta=0;
	continuar="si";

	while(continuar=="si")
	{
		nombre=prompt("Ingrese nombre");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Ingrese nombre");
		}

		altura=prompt("ingrese altura entre 130 y 200cm");
		altura=parseInt(altura);
		while(isNaN(altura)==true||altura<130||altura>200)
		{
			altura=prompt("ingrese altura entre 130 y 200cm");
			altura=parseInt(altura);
		}
		
		sexo=prompt("ingrese sexo f o m");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese sexo f o m");
		}

		if(sexo=="f")
		{
			edad=prompt("Ingrese edad entre 13 y 17")
			edad=parseInt(edad);
			while(isNaN(edad)==true||edad<13||edad>17)
			{
				edad=prompt("Ingrese edad entre 13 y 17")
				edad=parseInt(edad);
			}
			if(banderaMujerMasJoven==0||edad<edadMujerJoven)
			{
				nombreMujerJoven=nombre;
				edadMujerJoven=edad;
				banderaMujerMasJoven=1;
			}
			acumuladorEdadDeMujeres=acumuladorEdadDeMujeres+edad;
			contadorDeMujeres=contadorDeMujeres+1;
		
		}
		else
		{
			edad=prompt("Ingrese edad menor a 13");
			edad=parseInt(edad);
			while(isNaN(edad)==true||edad>13)
			{
				edad=prompt("Error,edad menor a 13");
				edad=parseInt(edad);
			}
			if(banderaHombreMasBajito==0||altura<alturaHombreMasBajito)
			{
				alturaHombreMasBajito=altura;
				nombreDeHombreMasBajito=nombre;
				banderaHombreMasBajito=1;
			}
			acumuladorEdadDeHombres=acumuladorEdadDeHombres+edad;
			contadorDeHombres=contadorDeHombres+1;
		}

		temperaturaCorporal=prompt("Ingrese temperaturaCorporal entre 34 a 42");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true||temperaturaCorporal<34||temperaturaCorporal>42)
		{
			temperaturaCorporal=prompt("Ingrese temperaturaCorporal entre 34 a 42");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		if(banderaPersonaMasAlta==0||altura>personasMasAltaMide)
		{
			personasMasAltaMide=altura;
			nombrePersonaMasAlta=nombre;
			sexoPersonaMasAlta=sexo;
			banderaPersonaMasAlta=1;
		}

		if(altura>160)
		{
			contadorDeAltos=contadorDeAltos+1;
		}

		continuar=prompt("Ingrese si , para continuar");
	}

	if(banderaMujerMasJoven==1)
	{
		alert("El nombre de la M mas joven es "+nombreMujerJoven);
		promedioEdadMujeres=acumuladorEdadDeMujeres/contadorDeMujeres;
		alert("El promedio de edad entre mujeres es "+promedioEdadMujeres);
	}
	if(banderaHombreMasBajito==1)
	{
		alert("El nombre del hombre bajito es "+nombreDeHombreMasBajito);
		promedioEdadHombres=acumuladorEdadDeHombres/contadorDeHombres;
		alert("El promedio edad hombres es "+promedioEdadHombres);
	}
	
	if(contadorDeAltos==1)
	{
		porcentajeDeMujeres=(contadorDeMujeres/contadorDeAltos)*100;
		alert("El porcentaje de mujeres sobre altos es "+porcentajeDeMujeres);
	}

	alert("La persona mas alta se llama "+nombrePersonaMasAlta+" es "+sexoPersonaMasAlta+" y mide "+personasMasAltaMide);
	alert("La cantidad de personas de mas de 160cm es "+contadorDeAltos);
	
}

	//if(sexo=="m")
	//	{
	//		if(banderaHombreMasBajito==0||altura<alturaHombreMasBajito)
	//		{
	//			alturaHombreMasBajito=altura;
	//			nombreDeHombreMasBajito=nombre;
	//			banderaHombreMasBajito=1;
	//		}
	//	}	
	//	else
	//	{
	//		if(banderaMujerMasJoven==0||edad<edadMujerJoven)
	//		{
	//			nombreMujerJoven=nombre;
	//			edadMujerJoven=edad;
	//			banderaMujerMasJoven=1;
	//		}
	//	}	
	


/*
function mostrar()
{
	var repeticiones; 
	var contador;
	var contadorDeDivisores;
	contadorDeDivisores=0;
	
	repeticiones=prompt("Ingrese repeticiones");
	repeticiones=parseInt(repeticiones);
	while(isNaN(repeticiones)==true)
	{
		repeticiones=prompt("Ingrese repeticiones");
		repeticiones=parseInt(repeticiones);
	}	
	for(contador=0;contador<repeticiones;contador=contador+1)
	{
		if(repeticiones%contador==0)
		{
			contadorDeDivisores=contadorDeDivisores+1;
			console.log(contador);
		}		
	}

	alert("la cantidad de Divisores es "+contadorDeDivisores);

}//FIN DE LA FUNCIÓN
*/