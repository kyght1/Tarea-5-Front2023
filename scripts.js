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
  
  return suma;
}
/*prueba de suma notas*/
let S =suma(notas);
console.log("Suma de notas: ",S);

/*la dunción promedio dividirá la suma total del array entre el largo de este, es decir, la cantidad de notas */
/*DOM---> suma (numero), cElementos (numero)
  REC---> el promedio de notas (numero)*/
function promedio(suma,cElementos) {
    return suma/cElementos;
}


/*calculo el promedio de notas*/
let p= (promedio(S,notas.length)).toFixed(1);
/*Muestro el resultado por consola*/
console.log("Promedio de notas, (redondeado): ",p);
