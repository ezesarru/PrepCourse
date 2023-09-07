/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var ArrayPadre = []
   for (var prop in objeto) {
      ArrayPadre.push([prop, objeto[prop]])
   }
   return ArrayPadre
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var ListadoDeLetras = {}
   var ArrayHechaDeStrings = string.split('').sort()
   for (var i = 0 ; i < ArrayHechaDeStrings.length ; i++) {
      if (ListadoDeLetras.hasOwnProperty(ArrayHechaDeStrings[i])) {
         ListadoDeLetras[ArrayHechaDeStrings[i]] += 1
      }
      else {
         ListadoDeLetras[ArrayHechaDeStrings[i]] = 1
      }
   }
   return ListadoDeLetras
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var LetrasMayusculas = ''
   var LetrasMinusculas = ''

   for (var i = 0 ; i < string.length ; i++) {
      if (string[i] === string[i].toUpperCase()) {
         LetrasMayusculas += string[i]
      } 
      else {
         LetrasMinusculas += string[i]
      }
   }
   return LetrasMayusculas + LetrasMinusculas
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ')
   for (var i = 0 ; i < palabras.length ; i++) {
      var palabra = palabras[i]
      var letras = palabra.split('')
      letras = letras.reverse()
      var palabraInvertida = letras.join('')
      palabras[i] = palabraInvertida
   }
   var fraseInvertida = palabras.join(' ')
   return fraseInvertida
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var cantidadDeCaracteres = numero.toString().length / 2
   var primeraMitad = numero.toString().slice(0, Math.floor(cantidadDeCaracteres * -1))
   var segundaMitad = numero.toString().slice(Math.ceil(cantidadDeCaracteres))
   if (primeraMitad === segundaMitad.split('').reverse().join('')) {
      return 'Es capicua'
   }
   else return 'No es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var NuevoString = string.replace('a', '').replace('b', '').replace('c', '')
   return NuevoString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length)
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var elementosEnComun = []
   for (var elemento of array1) {
      if (array2.includes(elemento)) {
         elementosEnComun.push(elemento)
      }
   }
   return elementosEnComun.filter((elemento, indice) => elementosEnComun.indexOf(elemento) === indice)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
