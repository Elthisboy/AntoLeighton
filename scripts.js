// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const showImageButton = document.getElementById('show-image-btn');

    // URL de la imagen que deseas mostrar
    const imageUrl = 'images/anto.jpg'; // Reemplaza 'ejemplo.jpg' con tu imagen

    showImageButton.addEventListener('click', function() {
        // Almacenar la URL de la imagen en localStorage
        localStorage.setItem('imageToShow', imageUrl);

        // Redirigir a imagen.html
        window.location.href = 'imagen.html';
    });
});

// En imagen.html, cargar la imagen almacenada en localStorage
document.addEventListener('DOMContentLoaded', function() {
    const imageDisplay = document.getElementById('image-display');
    const imageUrl = localStorage.getItem('imageToShow');

    if (imageUrl) {
        imageDisplay.src = imageUrl;
    }
});
