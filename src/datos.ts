let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let Rotulo = document.getElementById("Rotulo");

btnEnv.addEventListener("click", () => {
  console.log("la altura de la persona es ", dato.value);
});
Rotulo.innerHTML = "Ingrese la altura de la persona: ";

let palabra1: string = "este";
let palabra2: string = "algoritmo";
let palabra3: string = "es";
let palabra4: string = "secuencial";
console.log(palabra1);
console.log(palabra2);
console.log(palabra3);
console.log(palabra4);

let base: number = 2;
let altura: number = 3;
let resultado: number;

resultado = base * altura;

console.log(resultado);
