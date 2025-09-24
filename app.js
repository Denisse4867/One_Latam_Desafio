// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Estado

let amigos = [];

//agregamos los amigoss
function agregarAmigos() {
    const input = document.getElementById("amigo");
    const nombre = input.ariaValueMax.trim();

    if (nombre === "") {
        alert ("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";

}


//mejoramos la lista amigos con nombres
function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let i = 0; i < amigos.lenght; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}


//sortearlos
function sortearAmigo() {
    if(amigos.lenght === 0); {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.lenght);
    const elegido = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
}

