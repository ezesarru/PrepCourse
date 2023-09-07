// Crear un número
var numeroEntero = 17
var numeroNegativo = -4
var numeroDecimal = 11.75



// Transformar un número en string
function transformacion(num) {
    return num.toString()
}



// Longitud de un número
// var num = 123
function longitud(num) {
    return num.toString().length
}
// Salida: 3



// Acceso a determinado caracter de un número
// var num = 123
function acceso(num) {
    return num.toString()[1]
}
// Salida: 2



// Comparación de caracteres de un número
// var num = 123
function comparacionDeCaracteres(num) {
    if (num.toString()[0] == 1) { // Transformamos num en str para poder separarlo en caracteres
        return 'El primer caracter es 1'
    }
    else 'El primer caracter no es 1'
}



// Sumar
return 1 + 1



// Restar
return 2 - 1



// Multiplicar
return 2 * 2



// Dividir
return 81 / 9



// Resto de una división
return 5 % 2
// Salida: 1



// Potenciar
var num = 2
function potenciacion(num) {
    return Math.pow(num, 3)
}
// Salida: 8



// Redondear al entero más cercano
return Math.round(1.6)
// Salida: 2



// Redondear para arriba
return Math.ceil(1.3)
// Salida: 2



// Redondear para abajo
return Math.floor(1.7)
// Salida: 1



// Generar un decimal entre 0 y 1
return Math.random()



// Generar un entero entre 0 y 1
return Math.round(Math.random)



// Generar un entero entre 1 y 10
return Math.round(Math.random() * 10)



// Generar un entero entre 1 y 9
return Math.floor(Math.random() * 10)



// Igualdad
return (5 == 5)
// Salida: true
return (5 == '5') // No importa el tipo de dato
// Salida: true



// Igualdad estricta
return (5 === 5)
// Salida: true
return (5 === '5') // Importa el tipo de dato
// Salida: false



// Menor
return (1 < 2) // También tenemos <=
// Salida: true



// Mayor
return (2 > 1) // También tenemos >=
// Salida: true



// Número par
return (12 % 2) == 0 // Si el resto es 0, es un número par
// Salida: true 



// Número impar
return (3 % 2) != 0 // Si el resto no es 0, es un número impar
// Salida: true 



// Número primo
function primo(num) {
    if (num < 2) { // Los negativos, el 0 y el 1 no son primos
        return false // Por ende, si num es menor a 2, no es primo
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) { // Los primos son divisibles por 1 y por sí mismos
            return false // Si num es divisible por i y el resto es 0, no es primo
        }
    }
    return true // Si no se encontraron divisores, el número es primo
}



// Número simétrico o capicúa
function simetria(num) {
    cantidadDeCaracteres = num.toString().length / 2 // Dividimos en 2 la cantidad de caracteres del número
    primeraMitad = num.toString().slice(0, Math.floor(cantidadDeCaracteres)) // Selecciona desde -∞ hasta la mitad
    segundaMitad = num.toString().slice(-Math.floor(cantidadDeCaracteres)) // Selecciona desde la mitad hasta +∞
    if (primeraMitad === segundMitad.split('').reverse().join('')) { // Lo transformamos en array para aplicar reverse(), luego vuelve a ser string
        return 'Es capicúa'
    }
    else 'No es capicúa'
}



// Bucle For (incrementando en 2 el número recibido 10 veces)
function bucleFor(num) {
    for (var i = 0; i < 10; i++) {
        num += 2
    }
    return num
}
// Salida: 20



// Bucle Do While (incrementando en 2 el número recibido 10 veces)
function bucleDoWhile(num) {
    var i = 0
    do {
        i++
        num += 2
    } while (i < 10)
    return num
}
// Salida: 20

























// Booleanos
var estoyEntendiendo = true;
var estoyAburrido = false;



// Undefined
var cajon1;
console.log(cajon1);



// Null
var sinNada = null;



// Función I
function sumaTres(x) {
    console.log(x+3)
}
sumaTres(5)



// Función II
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre)
return
}



// Función III: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre)
return nombre
}



// Control de flujo
function viajar(destino) {
    if(destino === 'Brasil') console.log('Gire a la izquierda')
    else if (destino === 'Argentina') console.log('Gire a la derecha')
    else console.log('Nos perdimos')

viajar('Brasil');

function puedeManejar (edad) {
    if(edad >=18) console.log(true)
    else console.log(false)
}

puedeManejar("18");
puedeManejar('3');
puedeManejar('20');


























// Crear un string vacío
var str = ''



// Crear un prototype que retorne un string
String.prototype.saludar = function () {
    return 'Hello World!'
}



// Concatenar strings
return 'Tengo ' + 'hambre' + '!'
// Salida: Tengo hambre!



// Cantidad de caracteres de un string
function longitud(str) {
    return str.length
}



// Seleccionar un caracter determinado
function seleccion(str) {
    return str[0] // El índice 0 sería el primer caracter
}



// Mayuscular un string
function mayusculizacion(str) {
    return str.toUpperCase()
}



// Minuscular un string
function minusculizacion(str) {
    return str.toLowerCase()
}



// Rebanar un string
// Se arranca a contar desde el índice 0, el primer valor incluye, pero el segundo excluye
var str = 'Banana con dulce de leche'

return str.slice(11) // Salida: dulce de leche

return str.slice(11, -1) // Salida: dulce de leche

return str.slice(11, 24) // Salida: dulce de lech

return str.slice(0, 6) // Salida: Banana

return str.slice(-5) // Salida: leche

return str.slice(-14, -9) // Salida: dulce

return str.slice(-14, 15) // Salida: dulce



// Mayuscular el primer caracter de un string
function mayusculizacion(str) {
    return str[0].toUpperCase() + str.slice(1)
}



// Ideas
function ideas(arrOfStr) {
    var acc = 0
    for (var i = 0; i < arrOfStr.length; i++) {
        if (arrOfStr[i] === 'Idea') {
            acc += 1
        }
    }
    if (acc === 0) {
        return 'Ninguna idea'
    }
    else if (acc > 2) {
        return 'Muchas ideas'
    }
    else {
        return 'Una idea'
    }
}


















// Crear un array vacío
var array = []



// Cantidad de elementos de un array
var array = ['3 manzanas', '4 bananas', '2 naranjas']
return array.length
// Salida: 3



// Acceder a determinado elemento de un array
return array[0]
// Salida: 3 manzanas



// Acceder al último elemento de un array
return array[array.length - 1]
// Salida: 2 naranjas



// Agregar un elemento al final de un array
function alFinal(array, elemento) {
    array.push(elemento)
}



// Agregar un elemento al principio de un array
function alPrincipio(array, elemento) {
    array.unshift(elemento)
}



// Transformar los elementos de un array a strings
array.join('')
// Salida: 3 manzanas, 4 bananas, 2 naranjas



// Bucle For
function forClasico(array) {
    for (var i = 0; i < array.length; i++) {
    }
}



// Bucle For invertido
function forInvertido(array) {
    for (var i = array.length -1; i >= 0; i--) {
    }
}



// Bucle Do While
function doWhile(array) {
    var i = 0
    do {
        i++
    } 
    while (i < array.length)
}



// Verificar si hay determinado elemento dentro de un array
function determinado(array, elemento) {
    for (var i = 0; i < array.length; i++) {
        if (elemento === array[i]) {
            return 'El elemento está dentro del array'
        }
        else 'El elemento no está dentro del array'
    }
}



// Verificar si todos los elementos del array son iguales
function igualdad(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[0] !== array[i]) {
            return 'No todos los elementos del array son iguales'
        }
        else 'Todos los elementos del array son iguales'
    }
}



// Verificar el tipo de valor de los elementos de un array
function valor(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            return 'Los elementos son números'
        }
        else 'Ningún elemento es un número'
    }
}



// Sumar elementos numéricos dentro de un array 
function sumaDeElementos(array, acc) {
    for (var i = 0; i < array.length; i++) {
        acc += array[i]
    }
    return acc
}



// Multiplicar elementos numéricos dentro de un array
function multiplicacionDeElementos(array, acc) {
    for (var i = 0; i < array.length; i++) {
        acc *= array[i]
    }
    return acc
}



// Crear una tabla de multiplicación
function tablaDel6(array) {
    for (var i = 0; i < 11; i++) {
        array.push(6 * i)
    }
    return array
}



// Separación de elementos numéricos de un array
function separando(array, mayoresQue100) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 100) { // Si algún número es mayor a 100...
            mayoresQue100.push(array[i]) // Se agrega a mayoresA100
        }
    }
    return mayoresQue100
}



// Descubrir cuál es el número más grande y el número más pequeño
function masYMenos(arrOfNum) {
    var mayorYMenor = []
    var mayor = arrOfNum[0]
    var menor = arrOfNum[0]
    for (var i = 0; i < arrOfNum.length; i++) {
        if (arrOfNum[i] > mayor) {
            mayor = arrOfNum[i]
        }
        if (arrOfNum[i] > menor) {
            menor = arrOfNum[i]
        }
    }
    mayorYMenor.push(menor, mayor)
    return mayorYMenor
}



// Descubrir cuál es el mayor número del array
function elMayor(array) {
    elMayor = array[0]
    for (var i = 1; i < array.length; i++) {
        if (elMayor < array[i]) {
            elMayor = array[i]
        }
    }
    return elMayor
}



// Descubrir cuál es el string con mayor número de carácteres
function caracteres(array) {
    elMasLargo = array[0]
    for (var i = 0; i < array.length; i++) {
        if (elMasLargo.length < array[i].length) {
            elMasLargo = array[i]
        }
    }
    return elMasLargo
}



// Evitar determinada iteración en un Bucle For
function metodoContinue(numero) {
    var array = []
    for (var i = 0; i < 10; i++) {
        if (i === 5) {
            continue
        }
        array.push(numero + 2)
    }
    return array
}



// Separar elementos de a 2
function particion(arr, separacion) {
    var arr2 = []
    var arr3 = []
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
        if (arr2.length === separacion || i === arr.length - 1) {
            arr3.push(arr2)
            arr2 = []
        }
    }
    return arr3
}


// Prototype array
Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push(false);
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
}

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres()
console.log(nuevoArreglo)
















// Crear un objeto vacío
var nombreGenerico = {}



// Si tengo el nombre de la propiedad por variable o parámetro… 
obj[nombreDeLaPropiedad]



// Si sé el nombre de la propiedad… 
obj['nombreDeLaPropiedad']     
obj.nombreDeLaPropiedad



// Función dentro de un objeto
function maullador(nombre, edad) {
    var gatito = {
        nombre: nombre,
        edad: edad,
        maullido: function() {
            return 'Miau!'
        }
    }
    return primerObjeto
}



// Acceder a la propiedad de un objeto y establecer un valor
function acceso(objeto, propiedad) {
    objeto[propiedad] = null
}



// Invocar una función dentro de una propiedad de un objeto
function invocacion(objeto, propiedad) {
    objeto[propiedad]()
}



// Multiplicación de un valor numérico de una propiedad de un objeto
function multiplicacion(objeto, propiedad) {
    return objeto[propiedad] * 5
}



// Eliminación de una propiedad de un objeto
function eliminacion(objeto, propiedad) {
    delete objeto[propiedad]
}



// Chequeo de propiedad de un objeto
function chequeo(objeto) {
    if (objeto['propiedad']) { // Entre comillas ya que no la recibimos por parámetro
        return 'Tiene la propiedad llamada propiedad'
    }
    else 'No tiene la propiedad llamada propiedad'
}



// Actualización del valor de una propiedad de un objeto
function actualizando(objeto, propiedad, nuevoValor) {
    objeto[propiedad] = nuevoValor
}



// Incorporación de un elemento a un array dentro de un objeto
function incorporacion(objeto, propiedadArray, elemento) {
    objeto[propiedadArray].push(elemento)
}



// Asignación de valores de un array de objetos
function asignacion(arrayDeObjetos, propiedad) {
    for (var i = 0; i < arrayDeObjetos.length; i++) {
        arrayDeObjetos[i][propiedad] = true
    }
}



// Suma de valores de una propiedad de un objeto de un array de un objeto
function acumulador(objeto, propiedadArrayDeObjetos, propiedadDeElementosDeArrayDeObjetos) {
    acc = 0
    for (var i = 0; i < objeto[propiedadArrayDeObjetos].length; i++) {
        0 += objeto[propiedadArrayDeObjetos][i][propiedadDeElementosDeArrayDeObjetos]
    }
    return acc
}



// Chequeo de valor booleano de una propiedad
function cuantosOnline(objeto) {
    var usuariosOnline = 0
    for (var usuario in objeto) {
        if (objeto[usuario]['online'] === true) {
            usuariosOnline += 1
        }
    }
    return usuariosOnline
}



// Método hasOwnProperty()
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 }
var tienePropiedad = libro.hasOwnProperty('autor')
console.log(tienePropiedad);         // Esto mostrará "true"



// Método hasOwnProperty()
function agregaPropiedad(objeto, propiedad) {
    var arrOfObj = []
    for (var i = 0; i < objeto.length; i++) {
        if (!objeto[i].hasOwnProperty(propiedad)) {
            amigos[i][propiedad] = null
        }
        arrOfObj.push(objeto[i])
    }
    return arrOfObj
}



// Keys
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);



// Chequeo si dos números cuya suma sea igual al número dado
function sumaRara(arrOfNum, numeroTotal) {
    var set = new Set()
    for (var i = 0; i < arrOfNum.length; i++) {
        var elQueFaltaParaElTotal = numeroTotal - arrOfNum[i]
        if (set.has(elQueFaltaParaElTotal)) {
            return true
        }
        set.add(arrOfNum[i])
    }
    return false
}





















// Crea una clase
class persona {
    constructor(nombre, apellido, edad, domicilio, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
        this.libros = libros;
    }
    informacionTotal() {
        return {
            nombre:this.nombre,
            apellido:this.apellido,
            edad:this.edad,
            domicilio:this.domicilio,
            libros:this.libros,
        }
    }
    nombreYEdad() {
        return 'Hola, mi nombre es ' + this.nombre + ' y tengo' + this.edad + ' años'
    }
    agregarUnaPersona(nuevaPersona) {
        this.persona.push(nuevaPersona)
    }
    cantidadDePersonas() {
        this.persona.length
    }
    nuevoLibroObjeto(titulo, autor) {
        this.libros.push({
            titulo: titulo,
            autor: autor,
        })
    }
    titulosDeLibros() {
        return this.libros.map(libro => libro.titulo)
    }
}



// Extensión de Clase
class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       )
    }
}
let martin = new Persona('Martin', 26);
martin.saludar();



class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       )
    }
}
 



let martin = new Persona('Martín', 26)
let programador = new Programador('María', 37, 4)
martin.saludar()
programador.codear()



// Crea una instancia de la clase creada en el ejemplo anterior
var nuevaInstancia = new persona (nombre, apellido, edad, domicilio) // 'new' crea una nueva instancia



// Crea un prototype que retorne datos de la clase anteriormente creada
persona.prototype.datos = function() {
    return this.nombre + ', ' + this.edad + ' años'
}


// Prototype de clase
class LatinoAmerica {
	constructor() {
		this.paises = [];
	}
}
 
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais)
}
let continente = new LatinoAmerica()
continente.agregarPais('México')
console.log(continente.paises)






















// Invocar callback
function invocacion(cb) {
    cb()
}



// Callback
function devuelvoUsuario() {
    return 'Camilo'
}
function devuelvoSaludo() {
    return 'Hola'
}
function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2()
}
var resultado = saludar(devuelvoSaludo, devuelvoUsuario)
console.log(resultado)



// Callback matemático
function cbMatematico(cb, num1, num2) {
    cb(num1, num2) // el callback realiza una función matemátatica, necesitando 2 números
    return cb
}



// Sumar los elementos del array y darselos como parámetro al callback
function cbArray(cb, array, acumulador) {
    for (var i = 0; i < array.length; i++) {
        acumulador += array[i]
    }
    cb(acumulador) // El acumulador se le pasa como argumento al callback
}

























// For Each, ejecutar el callback en cada elemento del array
function porCada(arr, cb) {
    arr.forEach((elemento) => cb(elemento)) // For Each funciona con los elementos de un array
}



// Map, ejecutar el callback en cada elemento del array, guardando el resultado en un nuevo array
function mapeando(arr, cb) {    
    return arr.map((elemento) => cb(elemento)) // Map funciona con los elementos de un array
}


// Filtro, retorná todos los elementos que comiencen con la letra A.
function filtroDeInicialesConA(arrOfStr) {
    return arrOfStr.filter(string => string[0] === 'a')
}


// Eliminar del array los elementos que sean iguales al num
function buscaYDestruye(arrOfNum, num) {
    return arrOfNum.filter(elementos => elementos !== num)
}