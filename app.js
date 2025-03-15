// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Desafío: Amigo secreto
    En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

    El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

    Fucionalidades:
        Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

        Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

        Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

        Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

// app.js

// Inicializar un array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Verificar que el nombre no esté vacío
    if (nombre) {
        amigos.push(nombre);
        input.value = ''; // Limpiar entrada

        //actualizarListaAmigos();
        actualizarListaAmigos_PorComas();
    } else {
        alert('Por favor, ingrese un nombre.');
    }

    input.focus();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Retornar amigos separados por comas
function actualizarListaAmigos_PorComas() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.textContent = amigos.join(', '); // separador = coma
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agregue algunos nombres primero.');
        return;
    }

    // Obtener un índice aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el amigo secreto en un alert
    //alert(`Tu amigo secreto es: ${amigoSecreto}`);

    // Mostrar amigo secreto en el modal
    const mensajeAmigoSecreto = document.getElementById('mensajeAmigoSecreto');
    mensajeAmigoSecreto.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    abrirModal();
}

// Agregar evento en el input que detecte la tecla Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo(); // Llamar a la misma función que el boton "Añadir"
    }
});

// Modal para mostrar "Amigo Secreto"
function abrirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Cerrar u ocultar Modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}