/*var edad = parseInt(prompt("ingrese su edad"))

function permisoDeConsumo (edad) {
	

	if (edad<=18) {
		console.log ("usted es menor de edad, no puede consumir alcohol")
		alert ("usted es menor de edad,no puede consumir alcohol")
		var edad = parseInt(prompt("ingrese su edad"))
		permisoDeConsumo (edad)
	} else {
		console.log ("Bienvenido, disfrute su compra") 
		alert ("Bienvenido,disfrute su compra")
	}
}

permisoDeConsumo (edad) 




/*var cantidadAlumnos = parseInt(prompt("ingrese la cantidad de alumnos"))

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
}*/


/*var persona = new object()

persona.nombre = "Marcos"  /*también se puede escribir de esta manera---- persona["nombre"]="Marcos"*/

/*persona.edad= 24

persona.altura= 1.80

persona.catlover= false

persona.doglover= true */


/*var Marcos= new Persona()*/

/*function Persona (nombre,edad,altura,catlover,doglover) {
	this.nombre= nombre
	this.edad=edad
	this.altura=altura
}

var nombre= prompt("ingrese su nombre")

var edad = prompt ("ingrese su edad")

var altura = prompt ("ingrese su altura")

var persona= new Persona (nombre,edad,altura)
console.log (persona)


var propiedad = prompt("qué dato querés saber sobre la persona")
	if (!Persona[propiedad]) {
		console.log("no contamos con ese dato")
	} else console.log(Persona[propiedad])


console.log(Persona[propiedad])*/



/*Esto es un objeto*/

/*var miAuto = new object()

miAuto.modelo ="ford-mustang"

miAuto.marca= "ford"

miAuto.anio= 1970

miAuto.color= "gris"

miAuto.patente="edg 123"*/


/*Esto es un constructor, en este caso, las propiedades están anidadas-dentro de una función, que luego son utilizadas por una variable*/


/*function cliente (edad, peso, nacimiento,sexo) {
	this.edad=edad
	this.peso=peso
	this.nacimiento=nacimiento
	this.sexo=sexo

	this.ingresar= function () {return "El cliente ingresó a la plataforma"};

	this.getEdad= function () {return this.edad};

	this.getPeso=function() {return this.peso};

	this.getNacimiento =function() {return this.nacimiento};

	this.getSexo=function() {return this.sexo};

	
}

var cliente1 = new cliente("25","82","1996","Masculino");

var cliente2 = new cliente("23", "65", "1994", "Femenino");

console.log (cliente1.ingresar ())

console.log (cliente1.getEdad())

console.log (cliente1.getSexo())

console.log (cliente2.ingresar())

console.log (cliente2.getEdad())

console.log (cliente2.getPeso())*/




/* DESAFÍO DE LA CLASE 5---- OBJETOS*/

function permisoDeConsumo (edad) {
	

	if (edad<=18) {
		console.log ("usted es menor de edad, no puede consumir alcohol")
		alert ("usted es menor de edad,no puede consumir alcohol")
		var edad = parseInt(prompt("ingrese su edad"))
		permisoDeConsumo (edad)
	} else {
		console.log ("Bienvenido, disfrute su compra") 
		alert ("Bienvenido,disfrute su compra")
	}
}



function cliente (nombre,edad) {
	this.nombre=nombre
	this.edad=edad
}

var nombre= prompt("ingrese su nombre")

var edad = prompt ("ingrese su edad")
	permisoDeConsumo (edad)

var cliente= new cliente (nombre,edad)
console.log (cliente)



/*DESAFÍO DE LA CLASE 6-----ARRAYS*/

var datosCliente = prompt("Quisiera  usted recuperar algún dato(nombre o edad?")
	if( (!cliente[datosCliente]) ) {
		var hola = ("Hola señor Thomson");
		var holaSrThomson= (" creo que le habla a usted...");
		var negarleAlSrThomson= hola.concat(holaSrThomson)
		var trabajoMuyDuro = alert(negarleAlSrThomson)
		

	} else { 

		alert(cliente[datosCliente])
		console.log(cliente[datosCliente])
		
		var monoRiel= ["train",22,"springfield"];
		console.log (monoRiel.join("*"))
		console.log (monoRiel.slice(0,2));
		
		var homero = ("mira Marge!");
		var homeroDIce=("A la grande le puse cuca");
		var frseCompleta= homero.concat(homeroDIce);
		var dialogo= alert (frseCompleta);

	} if (datosCliente=="no") {
		alert ("Continúe a la página")
	}





