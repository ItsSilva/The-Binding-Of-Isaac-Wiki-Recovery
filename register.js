// Seleccionar todos los pasos del registro
const registerSteps = document.querySelectorAll('.register-step');
// Seleccionar los botones de "Next"
const nextButtons = document.querySelectorAll('.step-action button.next');

// Función para avanzar al siguiente paso
function goToNextStep() {
    console.log("sisas");
    // Encontrar el paso activo actual
    const currentStep = document.querySelector('.register-step.active');
    // Encontrar el índice del paso actual
    const currentIndex = Array.from(registerSteps).indexOf(currentStep);
    
    // Ocultar el paso actual
    currentStep.classList.remove('active');
    // Mostrar el siguiente paso
    registerSteps[currentIndex + 1].classList.add('active');
}

// Agregar event listener a cada botón "Next"
nextButtons.forEach(button => {
    button.addEventListener('click', goToNextStep);
});


// Selecciona todos los contenedores de contraseña
const passwordContainers = document.querySelectorAll('.show-password-container');

// Itera sobre cada contenedor
passwordContainers.forEach(container => {
    // Encuentra el input de contraseña y el checkbox dentro del contenedor actual
    const passwordInput = container.querySelector('.passwordInput');
    const toggleVisibility = container.querySelector('.toggleVisibility');

    // Agrega un event listener a cada checkbox
    toggleVisibility.addEventListener("change", function() {
        // Cambia el tipo de entrada de contraseña según el estado del checkbox
        if (toggleVisibility.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});
