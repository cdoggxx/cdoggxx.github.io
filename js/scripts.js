/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Grab the button and text elements
// Grab the checkbox and text elements
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
const themeText = document.getElementById('theme-text');

// 1. Check for saved theme in localStorage on page load
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleCheckbox.checked = true; // Visually set the switch to 'on'
    if (themeText) themeText.textContent = 'Light Mode';
} else {
    themeToggleCheckbox.checked = false; 
    if (themeText) themeText.textContent = 'Dark Mode';
}

// 2. Add change event listener to toggle the theme
themeToggleCheckbox.addEventListener('change', () => {
    // Check if the switch is turned 'on' (checked)
    if (themeToggleCheckbox.checked) {
        // Switch to Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (themeText) themeText.textContent = 'Light Mode';
    } else {
        // Switch to Light Mode
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if (themeText) themeText.textContent = 'Dark Mode';
    }
});

