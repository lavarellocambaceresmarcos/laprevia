
/*function bebidas (afirmar,botella,lata,qLitrosLata,qLitrosBotella,bebidaTipo) {
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


//localStorage.getItem("nombre del item")------ obtiene el elemento como valor
//localStorage.setItem("nombre del item")------ establece o equipa el elemento 

let obtenerNombre= localStorage.getItem("nombre");*/


/*DOM*/

var botonDeCompra=document.getElementById("botonCompra");
console.log(botonDeCompra.innerHTML);


botonDeCompra.innerHTML ="COMPRAR";/*modifiqué el texto del botón de añadir al carrito*/

/*botonDeCompra.style.color="blue";
botonDeCompra.style.backgroundColor="green";*/

/*onClick---al clickear--propiedad de JS para interacturar con los botones*/

var botonDeCompra=document.getElementById("botonCompra");

function cambiar (){
	botonDeCompra.style.color="white";
	botonDeCompra.style.backgroundColor="blue";
	botonDeCompra.style.borderColor="white";
}

botonDeCompra.onclick=cambiar; /*si a la función la invocamos con los paréntesis, se ejecuta automáticamente e ignora la propiedad .onclick*/


//var parrafos = document.querySelectorAll(`p`); //querySelector sin el all, accedemos a un solo elemento


//definimos la función
function cambio2 () {
	console.log(`me diste un click`);
}

//addEventListener ejecuta una acción a partir de un evento,en este caso, un "click"(ejecuta la función cambio2)

botonDeCompra.addEventListener(`click`,cambio2);

//definimos la función

function cambio3 () {
	console.log(`pasaste el mouse por arriba`)
}

botonDeCompra.addEventListener(`mouseover`,cambio3);

//definimos la función

function cambio4 () {
	console.log(`te alejaste del botón`);
}

botonDeCompra.addEventListener(`mouseout`,cambio4);

/*ALERT DE INICIO*/

let terminos = alert("Usted acepta que es mayor de 18 años")


/* CREANDO OBEJTOS EN BASE A LA PÁGINA WEB*/

let Quilmes= {
	marca:"Quilmes",
	bebida:"cerveza",
	cantidad:"6 unidades",
	precio:"$1000"
}

let Corona = {
	marca:"Corona",
	bebida:"cerveza",
	cantidad:"6 unidades",
	precio:"$1000"
}

let Heineken= {
	marca:"Heineken",
	bebida:"cerveza",
	cantidad:"6 unidades",
	precio:"$1200"

}

let Patagonia= {
	marca:"Patagonia",
	bebida:"cerveza",
	cantidad:"6 unidades",
	precio:"$1200"

}

let StellaArtois= {
	marca:"Stella Artois",
	bebida:"cerveza",
	cantidad:"6 unidades",
	precio:"$1200"

}



/*INICIA LA APLICACIÓN DE DOM EN EL PROYECTO*/


//QUILMES
let packQuilmes=document.getElementById("packQuilmes");

function descriptionQuilmes () {
	console.log(Quilmes);
}

packQuilmes.addEventListener(`click`,descriptionQuilmes);

//CORONA

let packCorona=document.getElementById("packCorona");

function descriptionCorona () {
	console.log(Corona);
}

packCorona.addEventListener(`click`,descriptionCorona);

//HEINEKEN

let packHeineken=document.getElementById("packHeineken");

function descriptionHeineken () {
	console.log(Heineken)
}

packHeineken.addEventListener(`click`,descriptionHeineken);

//PATAGONIA

let packPatagonia=document.getElementById("packPatagonia");

function descriptionPatagonia () {
	console.log(Patagonia);
}

packPatagonia.addEventListener(`click`,descriptionPatagonia);

//STELLA ARTOIS

let packStella=document.getElementById("packStella");

function descriptionStella () {
	console.log(StellaArtois);
}

packStella.addEventListener(`click`,descriptionStella);