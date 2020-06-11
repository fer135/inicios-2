//abren 7am hasta las 8pm
//fds 8am a 12m

/* const dias = 0;
const horaActual = 10;
 */
let horaApertura;
let mensaje;

let date = new Date();
let day = date.getDay();
let hour = date.getHours();

/* si los dias 0 o 6
if ([0,6]) */

horaApertura = [0, 6].includes(day) ? 8 : 7;
mensaje = [hour >= horaApertura]
  ? "esta abierto"
  : `esta cerrado, abrimos a las ${horaApertura}`;
console.log(mensaje);
 