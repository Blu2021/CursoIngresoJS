/*3.	DAUD MANZO JUAN PABLO
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempreatura;
	var resultado;

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura);

	resultado = (temperatura - 32) * 5/9;

	alert("el traspaso de temperatura Fahrenheit a centígrados es de "+resultado+" grados centigrados");

}

function CentigradosFahrenheit () 
{
	var temperatura;
	var resultado;

	temperatura = document.getElementById("txtIdTemperatura").value
	temperatura = parseInt(temperatura);

	resultado = (temperatura * 9/5) + 32;

	alert("el traspaso de temperatura centígrados a Fahrenheit es de "+resultado+" grados Fahrenheit");
}
