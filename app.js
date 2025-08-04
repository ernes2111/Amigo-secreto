// Lista donde se van guardando los amigos (array)
let listaDeAmigos = [];


// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); //".trim" para eliminar los espacios en blanco

    if (nombre === "") {
        alert("Por favor, escribí un nombre válido.");
        input.focus(); // coloca el puntero sobre la entrada de datos
        return;
    }

    // Agregar el nombre a la lista y al HTML
    listaDeAmigos.push(nombre);
    mostrarAmigos();

    // Limpiar el campo y enfocarlo
    input.value = "";
    input.focus();
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    const listita = document.getElementById("listaAmigos");
    listita.innerHTML = ""; // limpia la lista antes de volver a dibujarla

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listita.appendChild(li);
    });
}

// Función principal para sortear un amigo
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Se necesitan al menos 2 amigos para hacer el sorteo.");
        return;
    }
    //funcion para elegir un amigo secreto al azar
    const indice = Math.floor(Math.random() * listaDeAmigos.length);
    const elegido = listaDeAmigos[indice];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${elegido}</strong></li>`;
}
 //Bloquear el input de numeros
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault(); // Evita que se ingresen números
    }
});
