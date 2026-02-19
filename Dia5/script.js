//Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona

//"Te prometo entregar algo"
// Si cumplo hago algo --> Resultado
// Si no cumplo --> Error 

//Estados de una promesa:
//1. Pediente : Aun no se resolvió ni falló.
//2. Fulfilled (cumplida): Ya tenemos un valor para usar.
//3. Rejected (rechazada): Ya tiene un motivo de error.

/* Ciclo de vida de una promesa
1. Nace en pediente --> Pasará una sola vez a fulfilled o rejected --> quedará en "asentada" (settled), donde no cambiará jamás
--> Evitar doble entrega.
*/

//Plantillas generales


//Utilidades
const log = (...args) => console.log(...args);

const titulo = (n, nombre) => {
  log("\n" + "=".repeat(50));
  log(`EJERCICIO ${n}: ${nombre}`);
  log("=".repeat(50));
};

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
/**
 * Plantilla para promesa con delay que RESUELVE
 */
const resolverEn = (ms, valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), ms));

/**
 * Plantilla para promesa con delay que RECHAZA
 */
const rechazarEn = (ms, error) =>
  new Promise((_, reject) => setTimeout(() => reject(error), ms));

//EJ: Promesa que resuelve
function runEjercicio1() {
  titulo(1, "Mi primera promesa (resolve)");
  function saludarAsync(nombre) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Hola, ${nombre}`)
      }, 1200);
    })
  }
  log("Antes de llamar saludarAsync...");
  saludarAsync("Pedro")
    .then(function (msg) { log("✅ then:", msg) })
    .catch((err) => log("❌ catch:", err.message))
    .finally(() => log("🔚 finally: terminó Ejercicio 1"));
}
//runEjercicio1();
/*
A. Ejercicio 1 — Promesa básica con delay
Objetivo: Crear una promesa que se resuelva después de cierto tiempo.

Instrucciones

1. Crea una función mensajeAsync(texto, tiempo)

2. Debe devolver una Promise

3. Después de tiempo milisegundos debe resolver con el texto recibido

4. Consumirla con .then()

5. Agregar un .finally()

Validación esperada

1. Antes de la llamada se imprime: "Iniciando..."

2. Después del tiempo: el mensaje

3. Finalmente: "Proceso finalizado"
*/
function mensajeAsync(texto, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(texto);
    }, tiempo);
  })
}
console.log("Iniciando!");
mensajeAsync("Hola mundo!!!", 1000)
  .then((mensaje) => {
    console.log(mensaje);//Siempre será funcional
  }).finally(
    () => { console.log("Proceso finalizado.") }
  )
/*
B. Ejercicio 2 — Rechazo condicional
Objetivo: Comprender resolve vs reject.

Instrucciones

1. Crea verificarNumeroAsync(numero)

2. Si el número es par → resolve "Número válido"

3. Si es impar → reject "Número inválido"

4. Maneja ambos casos

Validación

Probar con:

1. 4 → debe entrar en .then()

2. 5 → debe entrar en .catch()
 */
function verificarNumeroAsync(numero) {
  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          if (numero % 2 === 0) {
            resolve("Numero válido")
          } else {
            reject(new Error("Número es inválido."));
          }
        }
        , 500)
    }
  )
}

verificarNumeroAsync(4)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

verificarNumeroAsync(3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

fetch('https://www.dnd5eapi.co/api/2014/monsters')
.then(response=> response.json())
.then(data=>{
  console.log(data["results"][0]);
});