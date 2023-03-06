function Validacion(edad, ci, sueldo){
    if (isNaN(edad)|| edad > 18){
        validar = true;
        console.log(edad);}
    if (isNaN(edad)|| edad < 18){
        validar = false;
        alert("edad no permitida");
    }
    if (isNaN(ci) && ci > 10000000 && ci < 70000000) {
        validar = true;
        console.log(ci);}
    if (isNaN(ci)|| ci < 10000000 || ci > 70000000) {
        validar = false;
        alert("ci no admitida");
        
    }
    if (isNaN(sueldo) || sueldo >= 10000 ){
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
let edad = prompt("ingrese su edad")
let ci = prompt("ingrese su CI(sin puntos o guiones)")
let sueldo = prompt("ingrese su sueldo liquido")
Validacion(edad, ci, sueldo);
alert("calculemos el alquiler para los siguientes 3 años")
const alquiler = parseInt(prompt("ingresa tu alquiler"))
for(let i = 0; i <3; i++){
    alert(`año ${1 + i}: ${((alquiler) * 0.05) * i + alquiler}`);
    }