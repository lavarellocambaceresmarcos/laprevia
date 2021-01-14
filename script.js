/*function permisoDeConsumo () {
	var edad = parseInt(prompt("ingrese su edad"))

	if (edad<=18) {
		console.log ("usted es menor de edad, no puede consumir alcohol")
		alert ("usted es menor de edad,no puede consumir alcohol")
		permisoDeConsumo()
	} else {
		console.log ("Bienvenido, disfrute su compra") 
		alert ("Bienvenido,disfrute su compra")
	}
}

permisoDeConsumo () */









var cantidadAlumnos = parseInt(prompt("ingrese la cantidad de alumnos"))

function resumenNota () {
	var nombre = prompt("ingrese el nombre del alumno");

	var nota1=parseInt (prompt("ingrese la nota del primer trimestre"));

	var nota2=parseInt (prompt("ingrese la nota del segundo trimestre"));
	
	var nota3=parseInt (prompt("ingrese la nota del tercer trimestre"));

	while ((nota1<0 || nota2<0 || nota3<0) ||(nota1>10 || nota2>10 || nota3>10)){

		console.log ("Datos inválidos")

		alert ("Los datos ingresados son inválidos. Porfavor, vuelva a ingresarlos.")

		var nombre = prompt("ingrese el nombre del alumno");

		var nota1=parseInt (prompt("ingrese la nota del primer trimestre"));

		var nota2=parseInt (prompt("ingrese la nota del segundo trimestre"));
	
		var nota3=parseInt (prompt("ingrese la nota del tercer trimestre"));
 
		

	}

	var promedioTrimestres = (nota1+nota2+nota3)/3;

	if (promedioTrimestres >= 7) {
		console.log (nombre + " aprobado")
		alert(nombre + " aprobado")
	} else { 
		console.log (nombre+ " desaprobado")
		alert(nombre + " desaprobado")
	}

	return promedioTrimestres
}

	
for (var i = 0; i < cantidadAlumnos; i++) {
  resumenNota()
}




