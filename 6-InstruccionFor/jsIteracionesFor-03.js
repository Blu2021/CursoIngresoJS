//DAUD MANZO JUAN PABLO  
/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano */ 
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
			if(banderaPerroPesado==0)
			{
				perroMasPesado=pesoMascota;
				nombrePerroMasPesado=nombreMascota;
				banderaPerroPesado=1;
			}
			else
			{
				if(pesoMascota>perroMasPesado)
				{
					perroMasPesado=pesoMascota;
					nombrePerroMasPesado=nombreMascota;
				}
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
			if(banderaMenorTemperatura==0)//d)El animal sin pelo con menor temperatura corporal
			{
				menorTemperatura=temperaturaCorporal;
				animalSinPeloMenorTemperatura=tipoAnimal;
				banderaMenorTemperatura=1;
			}
			else
			{
				if(temperaturaCorporal<menorTemperatura)//d)El animal sin pelo con menor temperatura corporal
				{
					menorTemperatura=temperaturaCorporal;
					animalSinPeloMenorTemperatura=tipoAnimal;
				}
			}
			//i)El nombre y raza del gato sin pelos mas liviano
			if(tipoAnimal=="gato")
			{
				if(banderaGatoLiviano==0)
				{
					gatoSinPelosMasLiviano=pesoMascota;
					razaGatoLivianoSinPelos=razaMascota;
					nombreGatoSinPelosLiviano=nombreMascota;
					banderaGatoLiviano=1;
				}
				else
				{
					if(pesoMascota<gatoSinPelosMasLiviano)//i)El nombre y raza del gato sin pelos mas liviano
					{
						gatoSinPelosMasLiviano=pesoMascota;
						razaGatoLivianoSinPelos=razaMascota;
						nombreGatoSinPelosLiviano=nombreMascota;
					}
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