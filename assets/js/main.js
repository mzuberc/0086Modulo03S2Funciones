//Estandar Ecmascript5
function saludar(nombre, edad, salarioHora, horasTrabajadas) {
    var salario = calcularSalario(salarioHora, horasTrabajadas)
    var mensaje = `Hola ${nombre}!, tu edad es ${edad} y tu salario es ${salario}`
    alert(mensaje)
}

function calcularSalario(salariBasicoHora, horasTrabajadas) {
    var salario = salariBasicoHora * horasTrabajadas
    return salario
}

var nombre = prompt("Ingrese su nombre");
var edad = prompt("Ingrese su edad");
var salarioHora = prompt("Ingrese su salario por hora");
var horasTrabajadas = prompt("Ingrese sus horas trabajadas");

saludar(nombre, edad, salarioHora, horasTrabajadas)  //llamar a función con el mismo orden (nombre en primer lugar y edad en segundo)

// var salarioNeto = calcularSalario(salarioHora, horasTrabajadas);

// alert(`Y su salario es ${salarioNeto}`)