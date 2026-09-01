document.addEventListener('DOMContentLoaded', () => {
    // Установка текущего года в футере
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});