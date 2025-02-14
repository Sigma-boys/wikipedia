document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded with JavaScript');
    const chevron = document.querySelector('.welcome img.chevron');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let isRotated = false;

    chevron.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        if (isRotated) {
            chevron.style.transform = 'rotate(0deg)';
        } else {
            chevron.style.transform = 'rotate(180deg)';
        }
        isRotated = !isRotated;
    });

    window.addEventListener('click', function(event) {
        if (!chevron.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});