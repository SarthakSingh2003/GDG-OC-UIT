const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        themeToggle.textContent = '🌚';
    } else {
        body.classList.replace('dark', 'light');
        themeToggle.textContent = '🌞';
    }
});

// Set the default theme to light
document.addEventListener('DOMContentLoaded', () => {
    body.classList.add('light');
});
