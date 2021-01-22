/* DESAFÍO DE LA CLASE 5---- OBJETOS*/

/*function permisoDeConsumo (edad) {
	

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

/*var datosCliente = prompt("Quisiera  usted recuperar algún dato(nombre o edad?")
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





function cliente (edad, peso, nacimiento,sexo) {
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

console.log (cliente2.getPeso())


/* CREANDO OBEJTOS EN BASE A LA PÁGINA WEB*/


/*var Brahma = {

	botella="sí,contamos con botellas"

	lata="sí,contamos con latas"

	qLitrosBotella= 1

	qLitrosLata= 0.47

	bebida= "cerveza"
}

var Corona = {

	botella="sí,contamos con botellas"

	lata="sí,contamos con latas"

	qLitrosBotella= 1

	qLitrosLata= 0.35

	bebida= "cerveza"
}

var Heineken = {

	botella="sí,contamos con botellas"

	lata="sí,contamos con latas"

	qLitrosBotella= 1

	qLitrosLata= 0.47

	bebida= "cerveza"
}

var Frizze = {

	botella="sí,contamos con botellas"

	lata="no contamos con latas"

	qLitrosBotella= 1

	qLitrosLata= 0

	bebida= "licor"
}

var Patagonia = {

	botella="sí,contamos con botellas"

	lata="sí,contamos con latas"

	qLitrosBotella= 1

	qLitrosLata= 0.47

	bebida= "cerveza"
}


var Quilmes = {

	botella="sí,contamos con botellas"

	lata="sí,contamos con latas"

	qLitrosBotella= 1

	qLitrosLata= 0.47

	bebida= "cerveza"
}

var StellaArtois = {

	botella="sí,contamos con botellas"

	lata="sí,contamos con latas"

	qLitrosBotella= 1

	qLitrosLata= 0.47

	bebida= "cerveza"
}

*/



function bebidas (afirmar,botella,lata,qLitrosLata,qLitrosBotella,bebidaTipo) {
	this.afirmar=afirmar
	this.botella=botella
	this.lata=lata
	this.qLitrosLata=qLitrosLata
	this.qLitrosBotella=qLitrosBotella
	this.bebidaTipo=bebidaTipo

}



	var Brahma= new bebidas("Brahma","sí,tenemos botellas de Brahma","Sí,tenemos latas de Brahma","0,47","1L","cerveza")

	var Corona = new bebidas ("Corona","sí, tenemos botellas de Corona","sí tenemos latas de Corona","0,35","1L","cerveza")

	var Heineken = new bebidas   ("Heineken","sí, tenemos botellas de Heineken","sí,tenemos latas de Heineken","0,47","1L","cerveza")

	var Patagonia = new bebidas ("Patagonia","sí, tenemos botellas de Patagonia","sí´,tenemos latas de Heineken","0,47","1L","cerveza")
	
	var Quilmes = new bebidas ("Quilmes","sí,tenemos botellas de Quilmes","Sí,tenemos latas de Quilmes","0,47","1L","cerveza")


function seleccionarBebida () {
	var choose = prompt("Seleccione una de las siguientes bebidas : Brahma,Corona,Heineken,Patagonia o Quilmes")

	if (choose=="Brahma") {
		console.log(Brahma)
		alert(Brahma.afirmar)

	} else if (choose=="Corona") {
		console.log(Corona)
		alert(Corona.afirmar)
	}  else if (choose=="Patagonia") {
		console.log(Patagonia)
		alert(Patagonia.afirmar)
	} else if (choose=="Quilmes"){
		console.log(Quilmes)
		alert(Quilmes.afirmar)
	} else {
		console.log("no contamos con esa bebida")
		alert("no contamos con esa bebida")
		seleccionarBebida();

	}
}


seleccionarBebida();



