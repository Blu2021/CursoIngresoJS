/* DAUD MANZO JUAN PABLO
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = document.getElementById('txtIdNombre').value;

	edad = document.getElementById("txtIdEdad").value;

	alert("Su nombre es "+nombre+" y su edad es "+edad+" años.");

}

