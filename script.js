document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces de la barra de navegación que apuntan a un ancla
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Previene el comportamiento de salto por defecto
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición del elemento de destino
                const topOffset = targetElement.offsetTop - 56; // Resta la altura del navbar

                // Realiza el desplazamiento suave
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });

                // Cierra el menú de navegación en móviles si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            }
        });
    });
});
