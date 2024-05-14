function convertToRoman(num) {

  let myStr = num.toString()
  const result = []

  // Funcion que traduce los numeros de 1 a 9
  function oneToNine(dig){
      //Digito menor a 4 - Agregamos Is
      if(dig < 4){
          for(let i = 0; i < myStr[myStr.length -1]; i++){
            result.push('I')
          }
        //Digito igual a 4 - Agragamos IV
        } else if(dig == 4){
            result.push('IV')
        //Digito igual a 5 - Agragamos V
        } else if(dig == 5){
            result.push('V')
        //Digito menor a 9 - Agragamos V, mas tantas I como numeros haya desde 5 hasta el digito
        } else if(dig < 9){
          result.push('V')
          for(let i = 5; i < myStr[myStr.length -1]; i++){
            result.push('I')
          }   
        //Digito 9  - Agragamos V
        } else if(dig == 9){
          result.push('IX')
        }  
  }

  // Funcion que traduce los numeros de 10 a 99
  function tenToNinetynine(dig){
        
        //10 - 39 Digito menor a 4 - Agregamos Xs
        if(dig < 4){
          for(let i = 0; i < myStr[myStr.length -2]; i++){
            result.push('X')
          }
        //40 - 49 Digito igual a 4 - Agragamos XL
        } else if(dig == 4){
            result.push('XL')
        //50 - 59 Digito igual a 5 - Agragamos L
        } else if(dig == 5){
            result.push('L')
        //60 - 89 Digito menor a 9 - Agragamos L, mas tantas X como numeros haya desde 5 hasta el digito
        } else if(dig < 9){
          result.push('L')
          for(let i = 5; i < myStr[myStr.length -2]; i++){
            result.push('X')
          } 
        // 90 - 99 Digito igual a 9 -  Agregamos XC
        } else if(dig == 9){
          result.push('XC')
        }  
  }

  // Funcion que traduce los numeros de 99 al 999
  function threeDigits(dig){
        
        //100 - 399 Digito menor a 4 - Agregamos Cs
        if(dig < 4){
          for(let i = 0; i < myStr[myStr.length -3]; i++){
            result.push('C')
          }
        //400 - 499 Digito igual a 4 - Agragamos CD
        } else if(dig == 4){
            result.push('CD')
        //500 - 599 Digito igual a 5 - Agragamos D
        } else if(dig == 5){
            result.push('D')
        //600 - 899 Digito menor a 9 - Agragamos D, mas tantas C como numeros haya desde 5 hasta el digito
        } else if(dig < 9){
          result.push('D')
          for(let i = 5; i < myStr[myStr.length -3]; i++){
            result.push('C')
          } 
        // 900 - 999 Digito igual a 9 -  Agregamos CM
        } else if(dig == 9){
          result.push('CM')
        }  
  }

  // Funcion que traduce los numeros de 1000 al 3999
  function fourDigits(dig){
        
        //1000 - 3999 Digito menor a 4 - Agregamos M
        if(dig < 4){
          for(let i = 0; i < myStr[myStr.length -4]; i++){
            result.push('M')
          }
        }
  }

  console.log('String completo => ', myStr)
  console.log('String Length => ', myStr.length)

  switch(myStr.length){

    //Caso 1 digito (1-9)
    case 1:
      console.log('First number =>' + myStr[myStr.length -1])
      oneToNine(myStr[myStr.length -1])
    break

    //Caso 2 digitos
    case 2:
      console.log('First number => ' + myStr[myStr.length - 2])
      tenToNinetynine(myStr[myStr.length -2])
      console.log('Last number => ' + myStr[myStr.length - 1])
      oneToNine(myStr[myStr.length -1])
    break

    //Caso 3 digitos
    case 3:
      console.log('First number => ' + myStr[myStr.length - 3])
      threeDigits(myStr[myStr.length -3])
      console.log('Second number => ' + myStr[myStr.length - 2])
      tenToNinetynine(myStr[myStr.length -2])
      console.log('Last number => ' + myStr[myStr.length - 1])
      oneToNine(myStr[myStr.length -1])
    break

    //Caso 4 digitos
    case 4:
      console.log('First number => ' + myStr[myStr.length - 4])
      fourDigits(myStr[myStr.length -4])
      console.log('Second number => ' + myStr[myStr.length - 3])
      threeDigits(myStr[myStr.length -3])
      console.log('thrid number => ' + myStr[myStr.length - 2])
      tenToNinetynine(myStr[myStr.length -2])
      console.log('Last number => ' + myStr[myStr.length - 1])
      oneToNine(myStr[myStr.length -1])
    break
  }
  console.log('Resultado => ', result.join(''))
  return result.join('')
}

convertToRoman(649);