document.addEventListener('DOMContentLoaded', function () {
    const blendModeSelector = document.getElementById('blend-mode-selector');
    const blendImage = document.querySelector('.blend-image');

    blendModeSelector.addEventListener('change', function () {
        const selectedBlendMode = blendModeSelector.value;
        blendImage.style.mixBlendMode = selectedBlendMode;
    });
});
