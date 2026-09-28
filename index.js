let edad = 17;
let nombre = "Magallanes";
nombre = "Eneas";
 
if (edad >= 18) {
    console.log(nombre + " es mayor de edad");
} else {
    console.log(nombre + " esta chavo es menor de edad");
}
 
let numero1 = 10;
let numero2 = 12;
 
if (numero1 > numero2) {
    let resultado = numero1 * 5;
    console.log(resultado + " es mayor que " + numero2);
} else {
    console.log(numero1 + " no es mayor que " + numero2);
}
 
let dia = "Septiembre";
 
switch (dia) {
    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miercoles":
        console.log("Hoy es miércoles");
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    case "sabado":
        console.log("Hoy es sábado");
        break;
    case "domingo":
        console.log("Hoy es domingo");
        break;
    default:
        console.log("No se reconoce el día");
}
 
let mes = "MarZo";
mes = mes.toLowerCase();
 
switch (mes) {
    case "enero":
        console.log("Es el primer mes del año");
        break;
    case "febrero":
        console.log("Es el segundo mes del año");
        break;
    case "marzo":
        console.log("Es el tercer mes del año");
        break;
    case "abril":
        console.log("Es el cuarto mes del año");
        break;
    case "mayo":
        console.log("Es el quinto mes del año");
        break;
    case "junio":
        console.log("Es el sexto mes del año");
        break;
    case "julio":
        console.log("Es el séptimo mes del año");
        break;
    case "agosto":
        console.log("Es el octavo mes del año");
        break;
    case "septiembre":
        console.log("Es el noveno mes del año");
        break;
    case "octubre":
        console.log("Es el décimo mes del año");
        break;
    case "noviembre":
        console.log("Es el undécimo mes del año");
        break;
    case "diciembre":
        console.log("Es el duodécimo mes del año");
        break;
    default:
        console.log("No se reconoce el mes");
}
