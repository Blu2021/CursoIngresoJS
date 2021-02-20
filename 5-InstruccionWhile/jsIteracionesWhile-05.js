/*DAUD MANZO JUAN PABLO
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!="f" && sexoIngresado!="m") //DEBE SER DIFERENTE A AMBAS AL MISMO TIEMPO PARA QUE SE CUMPLA
	{
		sexoIngresado = prompt("Dato incorrecto Ingrese f ó m");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN