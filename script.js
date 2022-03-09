const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
//RESOLUCIÓN 1
const EsPrimo = numero => {
  if(numero ==0||numero ==1) return false;
  for(let n=2;n<numero;n++) {
    if(numero % n==0) return false;
  }
  return true;
}
console.log(ejercicio1)
console.log(EsPrimo(2))

for(let i=0; i<ejercicio1.length; i++){
  if(EsPrimo(ejercicio1[i]))
  console.log(ejercicio1[i]);
}

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];
//RESOLUCIÓN 2
//Sólo pasarán personas >=18 y familiares de Ramón.
let invitados =[]
// iniciar for indicando comoenzo, a d+ónde llega, como avanzará.
for(let i = 0; i<ejercicio2.length;i++){
  //declaramos la condición, >=18 y que sesn familiares.
  if(ejercicio2[i].edad >=18 && ejercicio2[i].esFamiliar){
    //imprimir variables y nombres que cumplan la condición.
    console.log ( ejercicio2[i]. nombre  + " puedes pasar a la fiesta")
  }
}

//RESOLUCIÓN 3
//Serie Fibonacci primeros 50 números
let numfibo =1
let numfiboA = 0;
let numfiboB = 0;
//imprime

console.log(numfibo);
numfiboA =numfibo;
for(let i = 0; i<50; i++){
  numfibo =numfiboA + numfiboB,
  //imprime el número de acuerdo a la sucesión.
  console.log(numfibo);
  numfiboA = numfiboB,
  numfiboB = numfibo;
}
if(numbfiboB=0){

}

