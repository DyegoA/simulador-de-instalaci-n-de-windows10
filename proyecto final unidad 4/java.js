// Obtiene los elementos de la barra de progreso y el mensaje
const progressBar = document.getElementById('progress-bar');
const message = document.getElementById('message');

// Función para simular la descarga
function simulateDownload() {
    let progress = 0;

    // Intervalo para actualizar la barra de progreso
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';

        // Cuando la descarga llegue al 100%, detiene el intervalo y muestra un mensaje
        if (progress >= 100) {
            clearInterval(interval);
            message.textContent = "Descarga completada.";
        }
    }, 100); // 100 milisegundos para cada paso (puedes ajustar este valor)
}

// Inicia la simulación de la descarga
simulateDownload();


