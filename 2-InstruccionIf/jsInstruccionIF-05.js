//DAUD MANZO JUAN PABLO
function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 14 || edad > 17)
	{
		alert("La persona no es un teenager");
	}
}
/*
IMP DE PANTALLA DE LO QUE PASO EL PROFESOR!
function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	console.log("la edad ingresada es :"+ edad);
	
	
	if(!(edad<18 && edad>12))
	{
		alert("No es adolescente");
	}
	
	if(edad>17)
	{
		alert("No es adolescente");
	}
	if(edad<13)
	{
		alert("No es adolescente");
	}
	//if(edad>17 && edad<13)// nunca
	//if(edad<18 || edad>12)// siempre

	if(!(edad<18 && edad>12))
	if(edad>=18 || edad<=12) ASI QUEDA SI APLICAS DISTRIBUTIVA E INVERTIS SIGNOS
	{
		alert("No es adolescente");
	}
	FIN DE LA FUNCIÓN
	*/
