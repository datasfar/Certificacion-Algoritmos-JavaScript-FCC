function telephoneCheck(str) {
  
    // Filtrado con expresion regular
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
  
    if(regex.test(str)){
      console.log('Si')
      return true
    } else {
      console.log('No')
      return false
    }
  
  }
  
  telephoneCheck("(555)5(55)-5555") ;

  /* 

^ - Este símbolo indica que la cadena debe comenzar en este punto.

1.- (1\s?)? - Este grupo de captura se refiere al código de país opcional. El (1\s?) 
indica que el número debe comenzar con el dígito 1 seguido opcionalmente por un 
espacio. El ? final indica que este grupo de captura es opcional, por lo que el 
número de teléfono puede o no tener un código de país.

2.- (\(\d{3}\)|\d{3}) - Este es el grupo de captura para el prefijo de área del número 
de teléfono. Se compone de dos opciones separadas por el símbolo de barra vertical |.
La primera opción (\(\d{3}\)) indica que el prefijo de área puede estar entre 
paréntesis y consistir en tres dígitos. La segunda opción \d{3} indica que el prefijo
de área también puede consistir en tres dígitos sin paréntesis. Los paréntesis en 
la primera opción deben ser escapados con una barra invertida \ para que la expresión
regular los interprete como caracteres literales en lugar de como parte de la sintaxis.

3.- [\s-]? - Este elemento indica que puede haber un espacio o un guión opcional después 
del prefijo de área.

4.- \d{3} - Este componente se refiere a los tres dígitos que forman la parte central del 
número de teléfono.

5.- [\s-]? - Al igual que el anterior, este elemento indica que puede haber un espacio o un 
guión opcional después de los tres dígitos centrales.

6.- \d{4} - Este componente se refiere a los últimos cuatro dígitos del número de teléfono.

7.- $ - Este símbolo indica que la cadena debe terminar en este punto.

  */