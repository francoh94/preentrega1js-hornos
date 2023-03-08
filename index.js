function Validacion(edad, ci, sueldo){
    if ( edad > 18){
        validar = true;
        console.log(edad);}
    if ( edad < 18){
        validar = false;
        alert("edad no permitida");
    }
    if ( ci > 10000000 && ci < 70000000) {
        validar = true;
        console.log(ci);}
    if (ci < 10000000 || ci > 70000000) {
        validar = false;
        alert("ci no admitida");
    }
    if ((sueldo) || sueldo >= 10000 ){
        validar = true;
        alert(`${nombre} con su sueldo, tiene una garantia para un alquiler de: ${sueldo / 2}`);
    }
    if (isNaN(sueldo) || sueldo < 10000 ) {
        validar = false;
        alert("sueldo invalido")
    }
    return validar;
}
alert("bienvenido, calculemos que alquiler le permite su sueldo.")
let nombre = prompt("ingrese su nombre y apellido")
console.log(nombre);
let edad = parseInt(prompt("ingrese su edad"))
let ci = parseInt(prompt("ingrese su CI(sin puntos o guiones)"))
let sueldo = parseInt(prompt("ingrese su sueldo liquido"))
Validacion(edad, ci, sueldo);
alert("calculemos el alquiler para los siguientes 3 años")
const alquiler = parseInt(prompt("ingresa tu alquiler"))
for(let i = 0; i <3; i++){
    alert(`año ${1 + i}: ${((alquiler) * 0.05) * i + alquiler}`);
    }
    