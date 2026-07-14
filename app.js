import versesDB from './versesDB.js';

// 1. Definimos el estado inicial (empezamos en el versículo 0)
let indiceActual = 0;

// 2. Capturamos los elementos del HTML
const textoVersiculo = document.getElementById('texto-versiculo');
const citaVersiculo = document.getElementById('cita-versiculo');
const reflexionVersiculo = document.getElementById('reflexion-versiculo');
const btnSiguiente = document.getElementById('btn-siguiente');

// 3. Función central para pintar el versículo en pantalla
function mostrarVersiculo(indice) {
  // Obtenemos el objeto correspondiente
  const versiculo = versesDB[indice];

  // Inyectamos los datos en el HTML
  textoVersiculo.textContent = `"${versiculo.text}"`;
  citaVersiculo.textContent = versiculo.ref;
  reflexionVersiculo.textContent = versiculo.reflection;
}

// 4. Lógica del botón Siguiente
btnSiguiente.addEventListener('click', () => {
  indiceActual++; // Sumamos 1 al índice

  // Si llegamos al final de la base de datos, volvemos al inicio (versículo 0)
  if (indiceActual >= versesDB.length) {
    indiceActual = 0;
  }

  // Llamamos a la función para actualizar la pantalla
  mostrarVersiculo(indiceActual);
});

// 5. Inicializamos la app mostrando el primer versículo al cargar la página
mostrarVersiculo(indiceActual);
