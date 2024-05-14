function palindrome(str) {
  // Convertir la cadena a minúsculas y eliminar caracteres especiales
  const myArray = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  // Verificar si la cadena es un palíndromo
  for (let i = 0; i < myArray.length; i++) {
    // Comparar el carácter en la posición i con el carácter en la posición myArray.length - 1 - i
    if (myArray[i] !== myArray[myArray.length - 1 - i]) {
      // Si los caracteres no son iguales, la cadena no es un palíndromo
      return false;
    }
  }
  
  // Si se recorrió todo el array sin encontrar diferencias, la cadena es un palíndromo
  return true;
}

// Ejemplo de uso de la función con una cadena
palindrome("A man, a plan, a canal. Panama");

/* 

1.-Primero, la función palindrome() recibe una cadena de texto como argumento.

2.-La cadena se convierte a minúsculas y se eliminan todos los caracteres que 
no sean letras o números usando la expresión regular /[^a-zA-Z0-9]/g. El 
resultado se guarda en un array de caracteres llamado myArray.

3.-Luego, se inicia un ciclo for que recorre el array de caracteres myArray.

4.-En cada iteración del ciclo, se compara el carácter en la posición i con 
el carácter en la posición myArray.length - 1 - i. Si son iguales, el 
ciclo continúa; si son diferentes, la función retorna false porque la 
cadena no es un palíndromo.

5.-Si el ciclo recorre todo el array sin encontrar ninguna diferencia, la 
función retorna true porque la cadena es un palíndromo.

En resumen, el algoritmo utiliza un ciclo for para comparar los caracteres
de la cadena original desde los extremos hacia el centro, verificando si 
son iguales. Si encuentra un par de caracteres diferentes, la cadena no 
es un palíndromo y la función retorna false. Si logra recorrer todo el array 
sin encontrar diferencias, la cadena es un palíndromo y la función retorna true.

*/

 // Alternativa mas optima
 
/* 

function palindrome(str) {
  // Eliminar los caracteres no alfanuméricos y convertir la cadena a minúsculas
  const cleanStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  
  // Invertir la cadena
  const reversed = cleanStr.split('').reverse().join(''); 
  
  // Comparar la cadena original con la invertida
  return cleanStr === reversed; 
}

// Ejemplo de uso de la función con una cadena
palindrome("A man, a plan, a canal. Panama");


*/