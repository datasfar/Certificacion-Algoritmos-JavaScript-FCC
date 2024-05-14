function rot13(str) {

    const myArr = []
    let num = 0
    
    // Iteramos sobre todas las letras de str
    for(let i = 0; i < str.length; i++){
      
      // Si la letra es <65(caracter especial) 
      if(str[i].charCodeAt() < 65){
         //Lo inserta tal cual sin modificarlo
         myArr.push(String.fromCharCode(str[i].charCodeAt()))
      // Si la letra es menor a 78
      } else if (str[i].charCodeAt() < 78){
         // Modifica suma 13 a num
         num = 13 + (str[i].charCodeAt())
         // Inserta el valor del numero en el array
         myArr.push(String.fromCharCode(num))
      // Si no se cumple ninguna condicion   
      } else {
         // Resta 13 al valor de la letra
         // Ya que esta se encuentra en la segunda mitad del alfabeto
         num = (str[i].charCodeAt()) -13
         // Inserta el nuevo valor
         myArr.push(String.fromCharCode(num))
      }
  
    }
    
    console.log(myArr.join('').toUpperCase())
    return myArr.join('').toUpperCase()
  
  }
  
  rot13("SERR CVMMN!");

  /* 
               // Version mas optima //
  function rot13(str) {
  const myArr = []
  
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt()
    
    if (charCode < 65) {
      myArr.push(str[i])
    } else {
      const isUpper = (charCode >= 65 && charCode <= 90)
      const charCodeShifted = ((charCode - (isUpper ? 65 : 97) + 13) % 26) + (isUpper ? 65 : 97)
      myArr.push(String.fromCharCode(charCodeShifted))
    }
  }
  
  console.log(myArr.join('').toUpperCase())
  return myArr.join('').toUpperCase()
}
  */

 