// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const showImageButton = document.getElementById('show-image-btn');

    // URL de la imagen que deseas mostrar
    const imageUrl = 'images/anto.jpg'; // Reemplaza 'ejemplo.jpg' con tu imagen

    showImageButton.addEventListener('click', function() {
        // Crear un elemento <img> para la imagen
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Imagen mostrada';

        // Agregar la imagen al contenedor en imagen.html
        const imageContainer = document.getElementById('image-container');
        imageContainer.appendChild(imgElement);

        // Redirigir a imagen.html
        window.location.href = 'imagen.html';
    });
});
