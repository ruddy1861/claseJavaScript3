//operadores Aritmeticos
// let numero= 2;
// let numerodos= 3;
// let resultado = numero - numerodos;
// alert(resultado)
//document.write(resultado)
// console.log(resultado);


//Operadores de asignacion.
// let numero = 10;
// numero += 5;
// document.write(numero)

// let numeroresta= 10;
// numeroresta -=5;
// document.write(numeroresta)

// let numeroM= 10;
// numeroM *=5;
// document.write(numeroM)

// let numeroDivision= 10;
// numeroDivision /=5;
// document.write(numeroDivision)

//Ejercicio Incremento
//incrementa el valor de una variable  usando el operador ++
// let num1=5;
// num1++;//equivalente a num1+1=
// console.log(num1)

//ejercicio Decremento 
// let num2=5;
// num2--;
// console.log(num2)


//ejercicio combinado
// let resultado = 2;
// resultado += 4 * 2;
// resultado /=3;
// console.log(resultado)

//concatenar
// let nombre= "juan"
// nombre += " Perez"
// console.log(nombre)

//array
// let frutas=["manzana"];
// frutas.push("pera");
// console.log(frutas)

// let numero = prompt("")

//condicional if
// if (condicion){

// }else{

// }

//ejercicio1: Numero negativo o positivo 
// let numero = 3;

// if(numero > 0){
//     alert("El numero es positivo.")
// }else if (numero < 0){
//     alert("el numero es negativo")
// }
// else{
//     alert("El numero es cero ")
// }
//ejemplo : usuario es mayor de edad

// let edadUsuario= 18;
// if(edadUsuario >=18){
//     alert("Usted es mayor de edad")
// }else{
//     alert("No puedes ingresar")
// }

// ejercicio 3 ....validar credenciales
// let UsuarioIngresado= prompt("Ingrese su usuario: ")
// let contraseñaIngresada = prompt("Ingrese su contraseña: ")

// let UsuarioValido= "RRodriguez"
// let ContraseñaValida= "Rrr34567"

// if(UsuarioIngresado===UsuarioValido && contraseñaIngresada === ContraseñaValida){
//     alert("Inicio de sesion exitoso ¡Bienvenido!")
// }else{
//     alert("Credenciales incorrectas. Vuelve a intertarlo.")
// }

//Bot simple con prompt 

// alert("Hola! soy un bot de respuestas simples")
// let Nombre = prompt("¿Cual es tu nombre?")

// if(Nombre){
//     alert("Hola  "+Nombre+" ¿En que puedo ayudarte?");
//     let pregunta=prompt("Ingresa tu pregunta")
//     if(pregunta){
//         alert("Gracias por preguntar "+Nombre+". Lamentableblemente soy un bot simple y aun no contengo respuestas")
//     }else{
//         alert("No ingresaste ninguna Pregunta, Feliz noche!!")
//     }
// }else{
//     alert("No has ingresado un nombre. ¡Hasta luego!")
// }
// alert("Hola soy una calculadora") 
// let operador= prompt(" Que operacion deseas ralizar suma, resta, multiplicacion o division")
// operador=operador.toLowerCase();
// if( operador === "suma"){
//     let num1= parseInt(prompt("Ingresa un numero: "))
//     let num2= parseInt(prompt("Ingresa un numero: "))
//     let respuestas= num1+num2
//     alert("Su resultado es: "+respuestas)
// }else if( operador === "resta"){
//     let num1= parseInt(prompt("Ingresa un numero: "))
//     let num2= parseInt(prompt("Ingresa un numero: "))
//     let respuestas= num1-num2
//     alert("Su resultado es: "+respuestas)
// }else if( operador === "multiplicacion"){
//     let num1=parseInt(prompt("Ingresa un numero: "))
//     let num2=parseInt(prompt("Ingresa un numero: "))
//     let respuestas= num1*num2
//     alert("Su resultado es: "+respuestas)
// }else{
//     let num1=parseInt(prompt("Ingresa un numero: "))
//     let num2=parseInt(prompt("Ingresa un numero: "))
//     let respuestas= num1/num2
//     alert("Su resultado es: "+respuestas)
// }

// let numerotres = parseInt(prompt("Ingresa el numero "))

//if anidados

// Ejercicio de clasificar las edades de las personas
// let edad = 25;

// if (edad < 18){
//     console.log("Eres mayor de edad")
// }else if(edad >= 18 && edad < 60){
//     console.log("eres un adulto joven")
// }else{
//      console.log("eres un adulto mayor")
// }

// si la nota es 13 a 15 (" ganaste el año")
// si la nota es 9 a 12(" casi no pasas, pero lo lograste")
// si la nota es 6 a 10 (" quedaste reforzando ")
// si es menor a 6(" a que haz venido vago")

// let nota1=parseInt(prompt("Escribe tu primer nota: "));
// let nota2=parseInt(prompt("Escribe tu segunda nota: "));
// let nota3=parseInt(prompt("Escribe tu tercer nota: "));

// let resultado= nota1+nota2+nota3

// if(resultado>=13 && resultado<=15){
//  alert("ganaste el año")
// }else if(resultado>=9&& resultado<=12){
//     alert("casi no pasas, pero lo lograste")
//    }else if(resultado>=6&& resultado<=10){
//     alert("quedaste reforzando")
//    }else if(resultado>6){
//     alert("a que haz venido vago")
//    }else(alert("ni te conozco"))


//    ingresos en el año 1000000 exento
//    menor 400000 bajo
//   ingresos 800000 medio

//   let IngresosAnuales= 400000;
//   let impuestos ="";

//   if (IngresosAnuales === 1000000){
//     console.log("excento")
//   }else if (IngresosAnuales <= 400000){
//     console.log("Impuestos bajos")
//   }else if (IngresosAnuales === 800000){
//     console.log("medio")
//   }
//   else{
//     console.log("altos")
//   }

// let Dia =  parseInt(prompt("Cual es tu dia de Nacimiento?"));
// let Mes = prompt("¿Cual es tu mes de nacimiento")
//  Mes= Mes.toLowerCase();
//  if((Dia >= 21 && Mes === "marzo")|| (Dia <= 19 && Mes ==="abril")){
//  console.log("eres Aries")
//  }else if((Dia >= 20 && Mes === "abril")|| (Dia <= 20 && Mes ==="mayo")){
//     console.log("eres Tauro")
//     }else if((Dia >= 21 && Mes === "mayo")|| (Dia <=20 && Mes ==="junio")){
//         console.log("eres Geminis")
//         }else if((Dia >= 23 && Mes === "Junio")|| (Dia <= 22 && Mes ==="julio")){
//             console.log("eres Cancer")
//             }else if((Dia >= 23 && Mes === "julio")|| (Dia <= 22 && Mes ==="agisto")){
//                 console.log("eres Leo")
//                 }else if((Dia >= 23 && Mes === "agosto")|| (Dia < 23 && Mes ==="septiembre")){
//                     console.log("eres Virgo")
//                     }else if((Dia >= 23 && Mes === "septiembre")|| (Dia <= 22 && Mes ==="octubre")){
//                         console.log("eres Libra")
//                         }else if((Dia >= 23 && Mes === "octubre")|| (Dia <= 21 && Mes ==="noviembre")){
//                             console.log("eres escorpio")
//                             } else if((Dia >= 22 && Mes === "noviembre")|| (Dia <= 21 && Mes ==="diciembre")){
//                                 console.log("eres sagitario")
//                                 }else if((Dia >= 22 && Mes === "diciembre")|| (Dia <= 19 && Mes ==="enero")){
//                                     console.log("eres capricornio")
//                                     }else if((Dia >= 20 && Mes === "enero")|| (Dia <= 18  && Mes ==="febrero")){
//                                         console.log("eres Aries")
//                                         }else if((Dia >= 19 && Mes === "febrero")|| (Dia <= 20 && Mes ==="marzo")){
//                                             console.log("eres Aries")
//                                             }else{
//                                                 console.log("el dia o mes son incorrectos")
//                                             }

//Switch

// switch(expresion){
//     case valor1:
//         codigo a ejecutar
//     case valor2:
//         codigo a ejecutar
//     default:
//         codigo a ejecutar    
// }

// Dias de la semana

// let diaSemana= 3;
// let nombreDia= "";

// switch(diaSemana){
//     case 1:
//         nombreDia = "Lunes";
//         break;
//     case 2:
//         nombreDia = "Martes";
//         break;
//     case 3:
//         nombreDia = "Miercoles";
//         break;
//     case 4:
//         nombreDia= " Jueves";
//         break;
//     case 5: 
//         nombreDia= "Viernes";
//         break;
//     case 6: 
//         nombreDia= "Sabado";
//         break;
//     case 7: 
//         nombreDia= "Domingo";
//         break; 
//     default:
//         nombreDia = "Dia Invalido";
// } 

// console.log("El dia "+ diaSemana + " es " + nombreDia + ".")

// coche puedes conducirlo
// bicicleta puedes montarla
// moto puedes manejarla
// te toco caminar


// let tipoVehiculo = prompt("Que clase de vehiculo necesitas?");
// let mensaje="";

// switch(tipoVehiculo){
//     case "coche":
//         mensaje="Es un coche, lo puedes conducir";
//         break;
//     case "bicicleta":
//         mensaje="Es un bocicleta; la puedes montar";
//         break;
//     case "moto":
//         mensaje=" Es una moto; la puedes manejar";
//         break;
//     default:
//         mensaje="Te toco caminar"
// }
// console.log(mensaje)


// precio camiseta 5
// pantalon 10
// zapatos 15
// medias 2 
// producto no valido 

// let producto = prompt("Que producto desea facturar?");
// let precio = prompt("Me regalas el precio?");
// let descuento = prompt("que descuento tiene?");
// let precioTotal=0;

// switch(producto){
//     case "camiseta": 
//     precioTotal = (precio * descuento)/100;
//     break;
//     case "pantalon": 
//     precioTotal = precio * (descuento/100);
//     break;
//     case "zapatos": 
//     precioTotal = precio * (descuento/100);
//     break;
//     case "medias": 
//     precioTotal = precio * (descuento/100);
//     break;
//     default:
//         alert("Productos no validos");
// }
// console.log("El precio del producto : "+ producto+" queda con decuento incluido en: "+precioTotal)

// Figuras geometricas
// 3 triangulo
// 4 cuadrado
// 5 pentagono
// 6 hexagono 
// 7heptagono
// 8 octagono