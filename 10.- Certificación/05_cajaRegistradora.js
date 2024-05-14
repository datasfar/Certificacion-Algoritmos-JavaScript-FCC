function checkCashRegister(price, cash, cid) {
  // Define las unidades monetarias disponibles y sus valores
  const CURRENCY_UNITS = [    
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  // Calcula el total de efectivo en la caja registradora
  let totalCashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);
  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;

  // Calcula el cambio debido
  let changeDue = cash - price;
  let change = [];

  // Verifica si hay suficiente efectivo en la caja para entregar el cambio
  if (changeDue > totalCashInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Verifica si el efectivo en caja es igual al cambio debido
  if (changeDue.toFixed(2) === totalCashInDrawer.toFixed(2)) {
    return { status: "CLOSED", change: cid };
  }

  // Calcula el cambio a entregar
  for (let i = CURRENCY_UNITS.length - 1; i >= 0; i--) {
    const currencyName = CURRENCY_UNITS[i][0];
    const currencyValue = CURRENCY_UNITS[i][1];
    let currencyAmountInDrawer = cid[i][1];
    let currencyAmountToReturn = 0;

    // Mientras haya suficiente efectivo en la caja y el cambio sea mayor 
    //o igual al valor de la unidad monetaria actual, se resta el valor de
    //la unidad monetaria del cambio y se agrega a la cantidad a devolver
    while (changeDue >= currencyValue && currencyAmountInDrawer > 0) {
      changeDue -= currencyValue;
      changeDue = Math.round(changeDue * 100) / 100;
      currencyAmountInDrawer -= currencyValue;
      currencyAmountToReturn += currencyValue;
    }

    // Si se debe entregar alguna cantidad de la unidad monetaria actual, 
    //se agrega al arreglo de cambio
    if (currencyAmountToReturn > 0) {
      change.push([currencyName, currencyAmountToReturn]);
    }
  }

  // Si el cambio debido no se ha agotado completamente, no se puede entregar 
  //el cambio exacto
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Si todo ha salido bien, devuelve el cambio a entregar
  return { status: "OPEN", change: change };
}



/* 
                                 - EXPLICACION -

La función recibe el precio de compra como primer argumento (price), la cantidad 
pagada como segundo argumento (cash) y el dinero en efectivo que tiene la caja (cid)
como tercer argumento.

En primer lugar, la función calcula el total de efectivo en la caja registradora y lo
 almacena en la variable totalCashInDrawer.

Luego, la función calcula el cambio debido y lo almacena en la variable changeDue.

A continuación, la función verifica si el efectivo en caja es menor que el cambio debido.
Si es así, devuelve un objeto con status "INSUFFICIENT_FUNDS" y un arreglo vacío de cambio.
Si no, la función verifica si el efectivo en caja es igual al cambio debido. Si es así, 
devuelve un objeto con status "CLOSED" y el arreglo cid como cambio. Si no, la función 
procede a calcular el cambio que se debe entregar.

La función recorre el arreglo CURRENCY_UNITS en orden descendente para ir calculando el 
cambio en billetes y monedas de mayor a menor denominación. Para cada unidad monetaria, 
se calcula la cantidad disponible en la caja (currencyAmountInDrawer) y la cantidad que 
se debe entregar (currencyAmountToReturn), y se resta el valor del cambio debido (changeDue)
en cada iteración hasta que el cambio debido se agote o se agote el efectivo de la unidad

*/