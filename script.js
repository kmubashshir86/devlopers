// script.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Change the mode icon based on the mode
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.src = 'dark-mode-icon.png';  // Replace with the appropriate dark mode icon
        } else {
            modeIcon.src = 'light-mode-icon.png';  // Replace with the appropriate light mode icon
        }
    });
});