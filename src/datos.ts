let btnEnv = document.getElementById("btnEnviar");
let dato = document.forms[0].dato;
let Rotulo = document.getElementById("Rotulo");

btnEnv.addEventListener("click", () => {
  console.log("la altura de la persona es ", dato.value);
});
Rotulo.innerHTML = "Ingrese la altura de la persona: ";
