/*funciones para desarrollo de tarea 5*/

/*funciones que permiten calcular el promedio de notas */
/*definiré un array que guardará las notas a las cuales deberá calcular el promedio*/
const notas = [6, 8, 9, 2, 5, 10];
console.log("Notas actuales :",notas);
/*defino la funcion suma
DOM--> notas (array de numeros)
REC--> la suma de las notas (los elementos del arreglo)*/
function suma(notas) {
  let suma = 0;

  for (i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  console.log("Suma de notas: ",suma);
  return suma;
}

/*la función promedio dividirá la suma total del array entre el largo de este, es decir, la cantidad de notas */
/*DOM---> array notas
  REC---> el promedio de notas (numero)*/
function promedio(notas) {
    let S=suma(notas);
    let p= S/notas.length;
    return p;
}


/*calculo el promedio de notas*/
let prom= (promedio(notas)).toFixed(1);
/*Muestro el resultado por consola*/
console.log("Promedio de notas, (redondeado): ",prom);
