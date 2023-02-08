//FIRST ALERT STORED IN A SEPARATE FILE

//Exercise 1 -
//Página web que presenta un mensaje de alerta indicando que es su primer ejercicio
//de JavaScript. Incluya el código en la cabecera (<head>) de la página html.
alert("My First JavaScriptExercise in a separate file")

//SECOND ALERT MADE TO APPEAR AFTER THE FIRST
//Exercise 2
alert("Another message just in case you didn't see the first")

//EXERCISE 8
//Exercise 3
alert("Hola Mundo!")
alert("I am the first script")

//Exercise 4
//Exercise 5

num1 = 7
num2 = 4
precioSinIva = 123.45
iva=21
name = "Maurice"
numero1 = 5
numero2 =8

    //Exercise 9
function sum(num1, num2) {
    document.getElementById("sum").innerHTML = num1 + num2
}
function difference(num1, num2) {
    document.getElementById("difference").innerHTML = num1 - num2
}
function product(num1, num2) {
    document.getElementById("product").innerHTML = num1 * num2
}
function quotient(num1, num2) {
    document.getElementById("quotient").innerHTML = num1 / num2
}
//Exercise 10
function masIva(precioSinIva, iva) {
    document.getElementById("masIva").innerHTML = precioSinIva + iva
}

//Exercise 11/12
function write() {
    document.write("This is a strong document write")
}
//Exercise 13
function hello(name) {
    document.getElementById("greet").innerHTML = "Hello " + name
}
//Exercise 14

//                          RELACION @

//Exercise 1
if(numero2 > numero1) {
    alert("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
    alert("numero2 es positivo");
}
if(numero1 !== 0) {
    alert("numero1 es negativo o distinto de cero");
}
if(numero2 > (numero1 + 1)) {
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//Exercise 2
numberToCompare = prompt("Type a number")
if ((numberToCompare % 2) !== 0) {
    alert("The number is odd")
} else {
    alert("The number is even")
}
//Exercise 3
wordToCompare = prompt("Type a word or sentence")
if (wordToCompare.indexOf(" ") >= 0) {
    alert("The text has spaces")}
else {
    alert("The text does not have spaces")
}
//Exercise 4
nota = prompt("Type the grade")
if (nota < 5) {
    alert("Suspenso")
} else if (nota < 6){
    alert("Aprobado")
} else if (nota < 7) {
    alert("Bien")
} else if(nota < 8) {
    alert("Notable")
} else {
    alert("Notable")
}

//Exercise 5
let sum = 0
notas = prompt("Type the grades. *, *, *").split(",")
for (i = 0; i < notas.length; i++) {
    if (notas[i] < 5) {
        alert("Signatura se tiene que recuperar")
    } else {
        sum += notas[i];
    }
}
alert(sum)

//Exercise 6
edad = prompt("How old are you?")
if (edad >= 18) {
    alert("Eres mayor de edad")
} else {
    alert("Eres menor de edad")
}

//Exercise 7
let nombre = prompt("Please enter your name", "Desconocido")

if (nombre == null) {
    alert("You have hit cancel")
} else if (nombre.length === 0) {
    alert("Has introducido una cadena vacia")
} else if (nombre === "Desconocido") {
    alert("Has usado el valor por defecto")
} else {
    alert("Has introducido un nombre")
}

//Exercise 8
ageSaldo = prompt("Type your age and saldo. *, *, *").split(",")
if (ageSaldo[0] > 18 && ageSaldo[1] > 100) {
    alert("Puedes seguir jugando")
}

//Exercise 9
sum = 0
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
    'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
dni = prompt("Please enter your DNI", "Desconocido")
letraFinal = dni.slice(-1)
if (dni > 99999999 || dni < 0) {
    alert("DNI es invalido")
} else {
    for (i = 0; i < dni.length; i++) {
        sum += dni[i]
    }
    letra = letras[sum % 23]
    if (letra == letraFinal) {
        alert("Lo hemos adivinado")
    } else {
        alert("Avido un error")
    }
}

//Exercise 10
randomNumber = Math.random()
if (randomNumber > 0.5) {
alert("Cara")
} else {
alert("Cruz")}

//Exercise 11
days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
for (i = 0; i < days.length; i++) {
alert(days[i])
}

//Exercise 12
printNumber = parseInt(prompt("How many time do you want to print?"))
for (i=0;i<printNumber; i++) {
    alert("Tabulare bien mis programas")
}