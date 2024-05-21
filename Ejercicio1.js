//Ejercicio 1 : Condicionales
//Deberas realizar los ejercicios anexados abajo:
//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, 
//responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
let pregunta = prompt("¿Eres bellisimo/a?");
if(pregunta== "si"){
    console.log("Ciertamente");
}
else;{
    console.log("No te creo");
}
//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
//Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.
let numero = prompt("Ingresa un numero");
numero = parseInt(numero)

if(numero % 2==0){
    console.log(numero + " es divisible entre 2");
}
else{
    console.log(numero + " no es divisible entre 2");
}

//3. Crear un programa que determine si un número introducido
// en un Prompt es par o no, la respuesta será mostrada en un Alert.

let par = parseInt(prompt("Ingresa un numero"));
if(Number.isInteger(par)){
    if(par % 2==0){
        alert("El numero " + par + " es par");
    }    
    else{
        alert("El numero " + par + " no es par")
    }
}
else{
    alert("No es un numero");
}

//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
// 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let sorteo = parseInt(prompt("Ingresa un numero"));
if(Number.isInteger(sorteo)){
    if(sorteo ==1000){
        alert("Ganaste un premio");
    }    
    else{
        alert("Lo sentimos, sigue participando")
    }
}
else{
    alert("No es un numero");
}

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
//No considerar el caso en que ambos números son iguales.

let numero1 = parseInt(prompt("Ingresa un numero"));
let numero2 = parseInt(prompt("Ingresa un segundo numero"));
if(Number.isInteger(numero1) || Number.isInteger(numero2)){
    if(numero1 < numero2){
        alert("El numero " + numero1 + " es menor");
    }    
    else{
        alert("El numero " + numero2 + " es menor");
    }
}
else{
    alert("No es un numero");
}


//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
//Considerar el caso en que 2 números sean iguales.
let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa un segundo numero"));
let num3 = parseInt(prompt("Ingresa un tercer numero"));
if(Number.isInteger(num1) || Number.isInteger(num2) || Number.isInteger(num3)){
    if(num1==num2 || num1==num3 || num2==num3){
        alert("Dos o mas numeros son iguales");
    }
    else{
        if(num1 > num2 && num1 > num3){
                alert(num1 + " es el numero mayor");
        }    
        else if(num2 > num1 && num2 > num3){
                alert(num2 + " es el numero mayor");
        }
        else{
            console.log(num3)
            alert(num3 + " es el numero mayor");
        } 
    }
}

//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes,
// otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo.
 //Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt("Ingresa un dia de la semana");

switch (dia) {
    case "lunes":
      alert("Ingreso el dia " + dia)
      break;
  
    case "viernes":
        alert("Este es el dia " + dia)
      break;

    case "sabado":
        alert("Listo para le proximo dia " + dia)
        break;

    case "domingo":
        alert("Selecciono el ultimo dia de la semana, " + dia)
        break;

    default:
        alert("No selecciono uno de los mejores dia de la semana")
  }
  */
 /*8. Solicitar al usuario una calificación (entre 1 y 10).
Luego se debe comprobar que el número efectivamente esté en ese rango, 
si no lo está imprima un mensaje de error. 
Si lo está, imprima “reprobado” si la calificación es inferior a 6,
“regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let calificacion = parseInt(prompt("Ingresa su calificacion"));

if(calificacion >= 1 && calificacion <= 10){
  switch (calificacion) {
    case 6:
    case 7:
    case 8:
        alert("Regular")
      break;

    case 9:
        alert("Bien")
        break;

    case 10:
        alert("Excelente")
        break;
    default:
        alert("Reprobado")
        break;
}
}
else{
    alert("Ingresa una calificacion entre 1 y 10");
}
*/
/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida
marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, 
el programa le indicará “no tenemos este topping, lo sentimos.”
y a continuación le informará el precio del helado sin ningún topping.

let opcion = parseInt(prompt("Por favor seleccione la opcion deseada:\n" +
" 1.- Helado sin topping.\n" + 
" 2.- Topping de oreo.\n" +
" 3.- Topping de KitKat.\n" +
" 4.- Topping de brownie.\n"
));

switch (opcion) {

case 1:
    alert("El Helado sin topping Cuesta 50 MXN.")
break;

case 2:
    alert("El Topping de oreo Cuesta 10 MXN.")
    break;

case 3:
    alert("El Topping de KitKat Cuesta 15 MXN.")
    break;
case 4:
    alert("El Topping de brownie Cuesta 20 MXN.")
    break;  

default:
    alert("No tenemos este topping, lo sentimos.\n \n" +
          "El helado sin topping cuesta 50 MXN."  
)
    break;
}
*/
/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido,
tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses 
// costo
let curso = prompt("Por favor selecciona el curso deseado:\n" +
"Course\n" + 
"Carrera\n" +
"Master\n" 
);
var valor
var duracion
switch (curso) {

case "Course":
   valor = 4999
   duracion = 2
   console.log(valor)
break;

case "Carrera":
   valor = 3999
   duracion = 6
    break;

case "Master":
   valor  = 2999
   duracion = 12
    break;

}
//becas
let tipo = prompt("Con cual beca cuentas:\n" +
                "Facebook:\n" +
                "Google:\n" +
                "Jesua:\n"
)
var beca 
switch (tipo) {

    case "Facebook":
        beca = 20
    break;
    
    case "Google":
        beca = 15
        break;
    
    case "Jesua":
        beca = 50
        break;
    }

let porcentaje = (valor * beca)/100
let Cdescuento = valor - beca
let total = Cdescuento * duracion

alert("Costo mensual ... $" + valor + " MXN \n" + 
      "Descuento del " + beca + " % \n" + 
      "Descuento aplicado mensual ... $" + Cdescuento + " MXN \n" +
      "Duracion del Curso ... " + duracion + " meses \n" + 
      "Valor total del curso ... $" + total + " MXN \n"
)

/* 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida
 por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 
y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, 
si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */
var kilometro
let vehiculo = prompt("Ingresa el tipo de vehiculo");
var distancia = prompt("Ingrese la distancia recorrida en Km");
var litros = prompt("Ingrese los litros consumidos");


switch(vehiculo){
    case "coche":
        parseFloat(kilometro = 0.20)
        break;
    
    case "moto":
        parseFloat(kilometro = 0.10)
        break;
    
    case "autobus":
        parseFloat(kilometro = 0.5)
        break;
}

var total
if(litros >= 0 && litros <= 100){
    total = (kilometro * distancia) + 5;
}

else if(litros > 100){
    total = (kilometro * distancia) + 10;
}  

alert(total);