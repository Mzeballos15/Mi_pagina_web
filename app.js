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
/*--------------------------------------------------------------------- */

  //CAMBIAR COLOR DE VOLVER AL INICIO

function resaltarBtnIn() {
  const boton = document.getElementById("bot-inicio");
  boton.style.backgroundColor = "rgb(32, 25, 78)";
}
 
function restaurarBtnIn() {
  const boton = document.getElementById("bot-inicio");
  boton.style.backgroundColor = "rgb(120, 120, 240)";
}

 //al pasar el cursor 
document.getElementById("bot-inicio").addEventListener("mouseover",resaltarBtnIn );
 
// al sacar el cursor
  document.getElementById("bot-inicio").addEventListener("mouseout",restaurarBtnIn);

/*--------------------------------------------------------------------- */

// SALUDAR USUARIO POR SU NOMBRE

function saludarUsuario(){
    const nombre = document.getElementById("nombreUsu").value;
    const saludo = document.getElementById("saludo");

    if (nombre === ""){
        saludo.textContent= ""
    }else{
        saludo.textContent= "¡¡Hola "+  nombre  + "!!  "  + " Gracias por tu interés en primeros auxilios"
    }
}
 document.getElementById("nombreUsu").addEventListener("input", saludarUsuario);
