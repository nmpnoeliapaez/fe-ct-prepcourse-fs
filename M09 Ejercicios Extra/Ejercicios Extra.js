/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre = [] ;
   for(let prop in objeto) {
      var arregloHijo = [prop,objeto[prop]] ;
      arregloPadre.push(arregloHijo) ;
   }
   return arregloPadre;
} 


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arreglo = string.split('');
   arreglo = arreglo.sort();
   var objeto = {};
   arreglo.forEach((letra) => {
      if(objeto.hasOwnProperty(letra)) {
         objeto[letra] = objeto[letra] + 1
      }
      else {
         objeto[letra] = 1 ;
      } 
   });
   return objeto 
}
//console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")) ; 


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arreglo = string.split('');
   var arregloOrdenado = []; 
   arreglo.forEach((letra) => {
     if(letra != letra.toUpperCase()) {
      arregloOrdenado.push(letra);
     }
   });
   for(let i = arreglo.length - 1; i >= 0 ; i --) {
      if(arreglo[i] == arreglo[i].toUpperCase()) {
         arregloOrdenado.unshift(arreglo[i]) ;
      }
   }
   return arregloOrdenado.join(''); 
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arreglo = frase.split(' ');
   var arregloEspejo = [] ;
   arreglo.forEach((palabra) => {
      var arregloLetras = palabra.split('');
      arregloEspejo.push(arregloLetras.reverse().join(''))
   }) 
   return arregloEspejo.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();
   var arreglo = numeroString.split('');
   if(arreglo.join('') == arreglo.reverse().join('')) {
      return "Es capicua"
   }
   else {
     return  "No es capicua";
   }  
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arreglo = string.split('');
   var nuevoArreglo = [];
   arreglo.forEach((letra) => {
      if(letra != "a" && letra != "b" && letra != "c") {
         nuevoArreglo.push(letra);
      }
   })
   return nuevoArreglo.join(''); 
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArreglo = arrayOfStrings.sort((palabra1, palabra2) => {
      return palabra1.length - palabra2.length; 
   })
   return nuevoArreglo; 
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array3 = [];
   array1.forEach((num)=> {
      if(array2.includes(num)) {
         array3.push(num);
      }
   }) 
   return array3; 
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
