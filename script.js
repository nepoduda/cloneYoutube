document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.querySelector('.show-more-button');
    const descriptionBox = document.querySelector('.video-description-box');

    if (showMoreButton && descriptionBox) {
        showMoreButton.addEventListener('click', () => {
            descriptionBox.classList.toggle('expanded');
            if (descriptionBox.classList.contains('expanded')) {
                showMoreButton.textContent = 'Mostrar menos';
            } else {
                showMoreButton.textContent = 'Mostrar mais';
            }
        });
    }

    // Você pode adicionar funcionalidade para o toggle de reprodução automática aqui,
    // embora o checkbox HTML já forneça um estado visual básico.
    // const autoplayCheckbox = document.querySelector('.autoplay-toggle input[type="checkbox"]');
    // if (autoplayCheckbox) {
    //     autoplayCheckbox.addEventListener('change', (event) => {
    //         console.log('Autoplay está agora:', event.target.checked);
    //         // Adicione lógica aqui para habilitar/desabilitar a reprodução automática do player de vídeo
    //     });
    // }
});