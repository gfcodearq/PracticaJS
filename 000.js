const TASA = 25.0;
const PRECIO_HORA = 60.0;

let horas,dias,total,neto;

horas = prompt("Introduzca las horas trabajadas");
dias = prompt("Introduce los dias trabajados");

total = horas * dias * PRECIO_HORA;
neto = total - TASA;

document.write("El total es: " + total + "<br>");
document.write("El neto es: " + neto);