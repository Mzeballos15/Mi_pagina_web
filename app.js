// CONSEJOS

var consejos = [
  "Siempre verificá la seguridad de la escena antes de actuar.",
  "En RCP realizá entre 100 y 120 compresiones por minuto.",
  "Ante una hemorragia, presioná firme con una tela limpia.",
  "No muevas a alguien con posible fractura de columna.",
  "Usá el método VOS para evaluar la respiración: Ver, Oír, Sentir.",
  "Llamá al 107 ante cualquier emergencia médica.",
  "No apliques pomadas en quemaduras graves.",
  "En bebés menores de 1 año, usá golpes en la espalda ante atragantamiento."
];

let indice = 0; 

function mostrarConsejo() {
  const elemento = document.getElementById("textoConsejo");

   elemento.innerHTML = "";

  if (indice < consejos.length) {
    const texto = document.createElement("p");
    texto.textContent = "💡 " + consejos[indice];
    elemento.appendChild(texto); //paso al elemento el texto
    indice++; // avanza al siguiente cada click
  }
  if (indice >= consejos.length){
    indice = 0 ;
  }
}

document.getElementById("mostrar")
  .addEventListener("click", mostrarConsejo);




 


