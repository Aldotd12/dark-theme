const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    if (themeToggle.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

themeToggle.addEventListener('change', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    themeToggle.checked = isDarkMode;
    toggleTheme();
});

themeToggle.addEventListener('change', () => {
    localStorage.setItem('dark-mode', themeToggle.checked);
});