//Nuestro primer comentario
console.log("Hola mundo!");
//Datos Primitivos
numero1 = 1; //Tipo number --> "La mayoria de números"
numero2 = 2;
console.log(typeof numero1);
texto1 = "Textico";
texto2= "Mas texto"; //Tipo String 
console.log(typeof texto1);
operacionesBasicas= ((((5*8)+5)-2)); //PEMDAS
console.log(operacionesBasicas);
unionTextos=texto1+texto2;//Concatenación
console.log(unionTextos);

//Funciones con parametros y con retorno
function sumar(a,b){
    return a+b;
}
console.log(sumar(5,7));
//Funciones con parametros y sin retorno
function sumarSR(a,b){
    console.log(a+b);
}
sumarSR(8,9);
//Funciones sin parametros y sin retorno
function funcionSPSR(){
    console.log("Esta es una función sin parametros y sin retorno");
}
funcionSPSR();
//Funciones sin parametros y con retorno
function funcionSPCR(){
    return ("Esta es una función sin parametros y con retorno");
}
console.log(funcionSPCR());
function alerticas(){
    alert("Esta es una alerta ejecutada desde una función!");
}
//Ingresar datos externos
nombrePersona = prompt("Ingresa el nombre de la persona:");
alert("Tu nombre es: "+ nombrePersona);
alerticas();
