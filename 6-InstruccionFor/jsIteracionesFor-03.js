//DAUD MANZO JUAN PABLO  
/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal y nos piden informar solo si existe
a)El perro mas pesado
banderaPerroPesado ; perroMasPesado ;
b)El porcentaje de enfermos sobre el total de mascotas
	contadorMascotasTotal ; contadorEnfermo;
c)El nombre de la ultima mascota de tipo "otra cosa"
	nombreUltimaMascotaOtraCosa; banderaUltimaMascotaOtraCosa;
d)El animal sin pelo con menor temperatura corporal
	temperaturaMinimaAnimalSinPelo ; banderaAnimalSinPelo ;
e)Que tipo de mascota(gato o un perrro u "otra cosa") 
que tiene el mayor promedio de temperatura corporal
	acumuladorTemperaturaGato ; acumuladorTemperaturaPerro ; acumuladorTemperaturaOtraCosa;
	contadorGato; contadorPerro , contadorOtraCosa ;
	promedioTemperaturaPerro ; promedioTemperaturaGato ; promedioTemperaturaOtraCosa;
f)Sumando gatos y perros que porcentaje del total de mascotas son?
	contadorGato , contadorPerro, porcentajePerroGato 
g)Que estado clinico tiene la menor cantidad de mascotas  
     contadorEnfermo , contadorAdopcion , contadorInternado ,
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	acumuladorKilos , contadorMascotasTotal, promedioPeso.
i)El nombre y raza del gato sin pelos mas liviano
	nombreGatoSinPelosLiviano , razaGatoSinPelos, pesoGatoSinPelos 
*/
function mostrar()
{
	//VALIDACION
	var continuar;
	var tipoAnimal;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var razaMascota;
	var pesoMascota;
	var estadoClinico;
	var temperaturaCorporal;
	//PUNTO A
	var banderaPerroPesado;
	var perroMasPesado;
	//PUNTO B
	var contadorMascotasTotal;
	var contadorEnfermo;
	var porcentajeEnfermo;
	//PUNTO C
	var nombreUltimaMascotaOtraCosa;
	var banderaUltimaMascotaOtraCosa;
	//PUNTO D
	var temperaturaMinimaAnimalSinPelo;
	var banderaAnimalSinPelo;
	//PUNTO E//CTRL+ALT Y DESPUES PA ABAJO Y DESPUES SHIFT+FN,SHIFT+FELCHITA
	//CTRL+ALT , FLECHA PA ABAJO , Y FIN SOLO PARA EL FINAL.
	var acumuladorTemperaturaPerro; 
	var acumuladorTemperaturaGato;
	var acumuladorTemperaturaOtraCosa;
	var contadorPerro;
	var contadorGato;
	var contadorOtraCosa;
	var promedioPerro;
	var promedioGato;
	var promedioOtraCosa;
	var mayorPromedioTemperatura;
	//F
	var porcentajePerroGato;
	//G
	var contadorAdopcion;
	var contadorInternado;
	var contadorEnfermo;
	var estadoClinicoMenor;
	//H
	var acumuladorKilos;
	var promedioPeso;
	//I
	var nombreGatoSinPelosLiviano;
	var razaGatoSinPelos;
	var pesoGatoSinPelos;
	var banderaGatoLiviano;
	//VALIDACION
	continuar="si";
	//PUNTO A
	banderaPerroPesado=0;
	//PUNTO B
	contadorEnfermo=0;
	contadorMascotasTotal=0;
	//PUNTO C
	banderaUltimaMascotaOtraCosa=0;
	//PUNTO D
	banderaAnimalSinPelo=0;
	//PUNTO E
	acumuladorTemperaturaPerro=0;
	acumuladorTemperaturaGato=0;
	acumuladorTemperaturaOtraCosa=0;
	contadorPerro=0;
	contadorGato=0;
	contadorOtraCosa=0;
	//PUNTO G
	contadorAdopcion=0;
	contadorInternado=0;
	contadorEnfermo=0;
	//PUNTO H
	acumuladorKilos=0;
	//PUNTO I
	banderaGatoLiviano=0;

	while(continuar=="si")
	{
		tipoAnimal=prompt("Ingrese gato perro u otra cosa");
		while(tipoAnimal!="gato"&&tipoAnimal!="perro"&&tipoAnimal!="otra cosa")
		{
			tipoAnimal=prompt("Ingrese gato perro u otra cosa");
		}

		tipoPelaje=prompt("Ingrese tipo pelaje corto , largo o sin pelo ");
		while(tipoPelaje!="corto"&&tipoPelaje!="largo"&&tipoPelaje!="sin pelo")
		{
			tipoPelaje=prompt("Ingrese tipo pelaje corto , largo o sin pelo ");
		}

		edadMascota=prompt("Ingrese edad de 1 a 25");
		edadMascota=parseInt(edadMascota);
		while(isNaN(edadMascota)==true||edadMascota<1||edadMascota>25)
		{
			edadMascota=prompt("Ingrese edad de 1 a 25");
			edadMascota=parseInt(edadMascota);
		}

		nombreMascota=prompt("Ingrese nombre mascota");
		while(isNaN(nombreMascota)==false)
		{
			nombreMascota=prompt("Ingrese nombre mascota");
		}

		razaMascota=prompt("Ingrese raza mascota");
		while(isNaN(razaMascota)==false)
		{
			razaMascota=prompt("Ingrese raza mascota");
		}

		pesoMascota=prompt("Ingrese peso mascota de 1 a 30");
		pesoMascota=parseInt(pesoMascota);
		while(isNaN(pesoMascota)==true||pesoMascota<1||pesoMascota>30)
		{
			pesoMascota=prompt("Ingrese peso mascota de 1 a 30");
			pesoMascota=parseInt(pesoMascota);
		}
		
		estadoClinico=prompt("Ingrese estado clinico enfermo,internado o adopcion");
		while(estadoClinico!="enfermo"&&estadoClinico!="internado"&&estadoClinico!="adopcion")
		{
			estadoClinico=prompt("Ingrese estado clinico enfermo,internado o adopcion");
		}
		
		temperaturaCorporal=prompt("Ingrese temperatura corporal 25 a 50");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true||temperaturaCorporal<25||temperaturaCorporal>50)
		{
			temperaturaCorporal=prompt("Ingrese temperatura corporal 25 a 50");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}
		//A	
		if(tipoAnimal=="perro")
		{
			if(banderaPerroPesado==0||pesoMascota>perroMasPesado)
			{
				perroMasPesado=pesoMascota;				
				banderaPerroPesado=1;
			}		
		}
		//B
		switch(estadoClinico)
		{
			case"enfermo":
				contadorEnfermo=contadorEnfermo+1;
			break;
			case"adopcion":
			case"internado":
		}
		//C
		if(tipoAnimal=="otra cosa")
		{
			nombreUltimaMascotaOtraCosa=nombreMascota;
			banderaUltimaMascotaOtraCosa=1;		
		}
		//D
		if(tipoPelaje=="sin pelo")
		{
			if(banderaAnimalSinPelo==0||temperaturaCorporal<temperaturaMinimaAnimalSinPelo)
			{
				temperaturaMinimaAnimalSinPelo=temperaturaCorporal;
				banderaAnimalSinPelo=1;
			}

			if(tipoAnimal=="gato")
			{
				if(banderaGatoLiviano==0||pesoMascota<pesoGatoSinPelos)
				{
					nombreGatoSinPelosLiviano=nombreMascota;
					razaGatoSinPelos=razaMascota;
					pesoGatoSinPelos=pesoMascota;
					banderaGatoLiviano=1;
				}			
			}
		}
		//E
		switch(tipoAnimal)
		{
			case"perro":
				acumuladorTemperaturaPerro=acumuladorTemperaturaPerro+temperaturaCorporal;
				contadorPerro=contadorPerro+1;
			break;
			case"gato":
				acumuladorTemperaturaGato=acumuladorTemperaturaGato+temperaturaCorporal;
				contadorGato=contadorGato+1;
			break;
			case"otra cosa":
				acumuladorTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa+temperaturaCorporal;
				contadorOtraCosa=contadorOtraCosa+1;
			break;
		}

		acumuladorKilos=acumuladorKilos+pesoMascota;

		contadorMascotasTotal=contadorMascotasTotal+1;

		continuar=prompt("Ingrese si , para continuar");
	}
	//A
	if(banderaPerroPesado==1)
	{
		alert("El perro mas pesado pesa "+perroMasPesado);//A
	}
	else
	{
		alert("No Ingresaron Perros");
	}
	//B
	porcentajeEnfermo=(contadorEnfermo*100)/contadorMascotasTotal;
	if(contadorEnfermo!=0)
	{
		alert("El porcentaje de enfermos es "+porcentajeEnfermo);
	}
	//C
	if(banderaUltimaMascotaOtraCosa==1)
	{
		alert("El nombre de la ultima mascota otra cosa es "+nombreUltimaMascotaOtraCosa);
	}
	//D
	if(banderaAnimalSinPelo==1)
	{
		alert("El que menor temperatura tiene de los sin pelo tien "+temperaturaMinimaAnimalSinPelo);
	}
	//E
	if(contadorPerro!=0)
	{
		promedioPerro=acumuladorTemperaturaPerro/contadorPerro;
	}
	else
	{
		promedioPerro=0;
	}
	if(contadorGato!=0)
	{
		promedioGato=acumuladorTemperaturaGato/contadorGato;
	}
	else
	{
		promedioGato=0;
	}
	if(contadorOtraCosa!=0)
	{
		promedioOtraCosa=acumuladorTemperaturaOtraCosa/contadorOtraCosa;
	}
	else
	{
		promedioOtraCosa=0;
	}

	if(promedioPerro>promedioGato&&promedioPerro>promedioOtraCosa)
	{
		mayorPromedioTemperatura="perro";
	}
	else
	{
		if(promedioGato>promedioOtraCosa)
		{
			mayorPromedioTemperatura="gato";
		}
		else
		{
			mayorPromedioTemperatura="otra cosa";
		}
	}
	//F
	if(contadorPerro!=0||contadorGato!=0)
	{
		porcentajePerroGato=((contadorGato+contadorPerro)*100)/contadorMascotasTotal;
		alert("El porcentaje de perros y gatos "+porcentajePerrosGatos);
	}
	else
	{
		alert("No ingresaron perros o gatos");
	}
	//G
	if(contadorAdopcion<contadorEnfermo&&contadorAdopcion<contadorInternado&&contadorAdopcion!=0)
	{
		estadoClinicoMenor="adopcion";
	}
	else
	{
		if(contadorEnfermo<contadorInternado&&contadorEnfermo!=0)
		{
			estadoClinicoMenor="enfermo";
		}
		else
		{
			estadoClinicoMenor="internado";
		}
	}
	//H
	promedioPeso=acumuladorKilos/contadorMascotasTotal;
	//I
	if(banderaGatoLiviano==1)
	{
		alert("el gato sin pelos se llama "+nombreGatoSinPelosLiviano+" y es de raza "+razaGatoLivianoSinPelos);
	}

	alert("El tipo de animal con mayor promedio temperatura es "+mayorPromedioTemperatura);
	alert("El estado clinico menor es "+estadoClinicoMenor);
	alert("El promedio total del peso es "+promedioPeso);
}















































































/*
function mostrar()
{
	var continuar;
	var tipoAnimal;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var razaMascota;
	var pesoMascota;
	var estadoClinico;
	var temperaturaCorporal;
	//a)El perro mas pesado	
	var banderaPerroPesado;
	var perroMasPesado;
	var nombrePerroMasPesado;
	//b)El porcentaje de enfermos sobre el total de mascotas
	var contadorDeEnfermo;
	var contadorMascotas;
	var porcentajeEnfermos;
	//c)El nombre de la ultima mascota de tipo "otra cosa"
	var banderaOtraCosa;
	var ultimaMascotaOtraCosa;
	//d)El animal sin pelo con menor temperatura corporal
	var animalSinPeloMenorTemperatura;
	var banderaMenorTemperatura;
	var menorTemperatura;
	//e)Que tipo de mascota tiene el mayor promedio de temperatura corporal
	var acumuladorTemperaturaPerro;
	var acumuladorTemperaturaGato;
	var acumuladorTemperaturaOtraCosa;
	var contadorPerros;
	var contadorGatos;
	var contadorOtraCosa;
	var promedioGatos;
	var promedioPerros;
	var promedioOtraCosa;
	var mayorPromedio;
	//f)Sumando gatos y perros que porcentaje del total de mascotas son?
	var porcentajePerrosGatos;
	var contadorPerrosGatos;
	//g)Que estado clinico tiene la menor cantidad de mascotas  
	var contadorAdopcion;
	var contadorInternado;
	var estadoClinicoMenor;
	//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	var promedioPesoTotal;
	var acumuladorkilos;
	//i)El nombre y raza del gato sin pelos mas liviano
	var banderaGatoLiviano;
	var nombreGatoSinPelosLiviano;
	var razaGatoLivianoSinPelos;
	var gatoSinPelosMasLiviano;

	banderaGatoLiviano=0;
	acumuladorkilos=0;
	contadorAdopcion=0;
	contadorInternado=0;
	promedioPerros=0;
	promedioGatos=0;
	promedioOtraCosa=0;
	acumuladorTemperaturaGato=0;
	acumuladorTemperaturaPerro=0;
	acumuladorTemperaturaOtraCosa=0;
	banderaMenorTemperatura=0;
	banderaOtraCosa=0;
	contadorDeEnfermo=0;
	contadorMascotas=0;
	banderaPerroPesado=0;
	continuar="si";

	while(continuar=="si")
	{
		tipoAnimal=prompt("Ingrese tipo animal ,gato , perro u otra cosa");
		while(tipoAnimal!="gato"&&tipoAnimal!="perro"&&tipoAnimal!="otra cosa")
		{
			tipoAnimal=prompt("Ingrese tipo animal ,gato , perro u otra cosa");
		}

		tipoPelaje=prompt("Ingrese tipo pelaje corto , largo o sin pelo");
		while(tipoPelaje!="corto"&&tipoPelaje!="largo"&&tipoPelaje!="sin pelo")
		{
			tipoPelaje=prompt("Ingrese tipo pelaje corto , largo o sin pelo");
		}

		edadMascota=prompt("Ingrese edad mascota de 1 a 25");
		edadMascota=parseInt(edadMascota);
		while(isNaN(edadMascota)==true||edadMascota<1||edadMascota>25)
		{
			edadMascota=prompt("Ingrese edad mascota de 1 a 25");
			edadMascota=parseInt(edadMascota);
		}

		nombreMascota=prompt("Ingrese nombre mascota en una palabra");
		while(isNaN(nombreMascota)==false)
		{
			nombreMascota=prompt("Ingrese nombre mascota en una palabra");
		}

		razaMascota=prompt("Ingrese raza mascota en una palabra");
		while(isNaN(razaMascota)==false)
		{
			razaMascota=prompt("Ingrese raza mascota en una palabra");
		}

		pesoMascota=prompt("Ingrese peso mayor a 0 y menor a 40");
		pesoMascota=parseInt(pesoMascota);
		while(isNaN(pesoMascota)==true||pesoMascota<0||pesoMascota>40)
		{
			pesoMascota=prompt("Ingrese peso mayor a 0 y menor a 40");
			pesoMascota=parseInt(pesoMascota);
		}

		estadoClinico=prompt("Ingrese estado clinico enfermo internado o adopcion");
		while(estadoClinico!="enfermo"&&estadoClinico!="internado"&&estadoClinico!="adopcion")
		{
			estadoClinico=prompt("Ingrese estado clinico enfermo internada o adopcion");
		}

		temperaturaCorporal=prompt("Ingrese temperatura corporal entre 8 y 40 ");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal)==true||temperaturaCorporal<8||temperaturaCorporal>40)
		{
			temperaturaCorporal=prompt("Ingrese temperatura corporal entre 8 y 40 ");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		if(tipoAnimal=="perro")//a)El perro mas pesado
		{
			if(banderaPerroPesado==0||pesoMascota>perroMasPesado)
			{
				perroMasPesado=pesoMascota;
				nombrePerroMasPesado=nombreMascota;
				banderaPerroPesado=1;
			}					
		}

		if(estadoClinico=="enfermo")//b)El porcentaje de enfermos sobre el total de mascotas
		{
			contadorDeEnfermo=contadorDeEnfermo+1;
		}

		if(tipoAnimal=="otra cosa")//c)El nombre de la ultima mascota de tipo "otra cosa"
		{
			ultimaMascotaOtraCosa=nombreMascota;
			banderaOtraCosa=1;
		}

		if(tipoPelaje=="sin pelo")//i)El nombre y raza del gato sin pelos mas liviano
		{
			if(banderaMenorTemperatura==0||temperaturaCorporal<menorTemperatura)//d)El animal sin pelo con menor temperatura corporal
			{
				menorTemperatura=temperaturaCorporal;
				animalSinPeloMenorTemperatura=tipoAnimal;
				banderaMenorTemperatura=1;
			}
			//i)El nombre y raza del gato sin pelos mas liviano
			if(tipoAnimal=="gato")
			{
				if(banderaGatoLiviano==0||pesoMascota<gatoSinPelosMasLiviano)
				{
					gatoSinPelosMasLiviano=pesoMascota;
					razaGatoLivianoSinPelos=razaMascota;
					nombreGatoSinPelosLiviano=nombreMascota;
					banderaGatoLiviano=1;
				}				
			}
		}

		switch(tipoAnimal)//e)Que tipo de mascota tiene el mayor promedio de temperatura corporal
		{
			case"perro":
				acumuladorTemperaturaPerro=acumuladorTemperaturaPerro+temperaturaCorporal;
				contadorPerros=contadorPerros+1;
			break;
			case"gato":
				acumuladorTemperaturaGato=acumuladorTemperaturaGato+temperaturaCorporal;
				contadorGatos=contadorGatos+1;
			break;
			case"otra cosa":
				acumuladorTemperaturaOtraCosa=acumuladorTemperaturaOtraCosa+temperaturaCorporal;
				contadorOtraCosa=contadorOtraCosa+1;
			break;
		}

		switch(estadoClinico)//g)Que estado clinico tiene la menor cantidad de mascotas  
		{
			case"adopcion":
				contadorAdopcion=contadorAdopcion+1;
			break;
			case"internado":
				contadorInternado=contadorInternado+1;
			break;
		}
		contadorMascotas=contadorMascotas+1;
		//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
		acumuladorkilos=acumuladorkilos+pesoMascota;		

		continuar=prompt("Ingrese si ,para continuar");

	}

	if(banderaPerroPesado==1)
	{
		alert("El nombre del perro mas pesado es "+nombrePerroMasPesado+" y pesa "+perroMasPesado);
	}
	if(contadorPerros!=0)//e)Que tipo de mascota tiene el mayor promedio de temperatura corporal
	{
		promedioPerros=acumuladorTemperaturaPerro/contadorPerros;
	}
	if(contadorGatos!=0)//e)Que tipo de mascota tiene el mayor promedio de temperatura corporal
	{
		promedioGatos=acumuladorTemperaturaGato/contadorGatos;
	}
	if(contadorOtraCosa!=0)//e)Que tipo de mascota tiene el mayor promedio de temperatura corporal
	{
		promedioOtraCosa=acumuladorTemperaturaOtraCosa/contadorOtraCosa;
	}	

	if(promedioPerros>promedioGatos&&promedioPerros>promedioOtraCosa)//e)Que tipo de mascota tiene el mayor promedio de temperatura corporal
	{
		mayorPromedio="perros";
	}
	else
	{
		if(promedioGatos>promedioOtraCosa)
		{
			mayorPromedio="gatos";
		}
		else
		{
			mayorPromedio="otra cosa";
		}
	}
	//b)El porcentaje de enfermos sobre el total de mascotas
	porcentajeEnfermos=(contadorDeEnfermo/contadorMascotas)*100;
	if(contadorDeEnfermo==0)
	{
		porcentajeEnfermos=0;
	}
	//c)El nombre de la ultima mascota de tipo "otra cosa"
	if(banderaOtraCosa==1)
	{
		alert("El nombre de ultima mascota rara es "+ultimaMascotaOtraCosa);
	}
	//d)El animal sin pelo con menor temperatura corporal
	if(banderaMenorTemperatura==1)
	{
		alert("El tipo animal menos temperatura sin pelo es "+animalSinPeloMenorTemperatura);
	}
	//g)Que estado clinico tiene la menor cantidad de mascotas  
	if(contadorDeEnfermo<contadorAdopcion&&contadorDeEnfermo<contadorInternado)
	{
		estadoClinicoMenor="Enfermos";
	}
	else
	{
		if(contadorAdopcion<contadorInternado)
		{
			estadoClinicoMenor="Adopcion";
		}
		else
		{
			estadoClinicoMenor="Internado";
		}
	}
	//f)Sumando gatos y perros que porcentaje del total de mascotas son?
	contadorPerrosGatos=contadorPerros+contadorGatos;
	porcentajePerrosGatos=(contadorPerrosGatos/contadorMascotas)*100;
	//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	promedioPesoTotal=acumuladorkilos/contadorMascotas;

	alert("El porcentajeEnfermos es de "+porcentajeEnfermos);
	alert("El mayor promedio de temperatura lo tienen los "+mayorPromedio);
	alert("El porcentaje de perros y gatos en el total de animales es "+porcentajePerrosGatos);
	alert("El estado clinico con menores pacientes es "+estadoClinicoMenor);
	alert("El promedio de peso sobre el total de mascotas es "+promedioPesoTotal);
	alert("El nombre del gato sin pelos liviano es "+nombreGatoSinPelosLiviano+" de raza "+razaGatoLivianoSinPelos);
	
}//FIN DE LA FUNCIÓN
*/