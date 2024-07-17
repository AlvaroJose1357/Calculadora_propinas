//* esta funcion lo que hace es recibir un precio: number y lo formatea a un formato de moneda en dolares
export function formatCurrency(price: number) {
  return new Intl.NumberFormat("es-US", {
    // el metodo Intl.NumberFormat() es un constructor de objetos que permite formatear numeros en una representacion de texto con formato de moneda
    style: "currency",
    currency: "USD",
    // el style es el estilo de formato de moneda que se va a utilizar y el currency es el tipo de moneda que se va a utilizar
  }).format(price);
  // el metodo format() de Intl.NumberFormat() devuelve una cadena de texto con un formato de moneda
}
