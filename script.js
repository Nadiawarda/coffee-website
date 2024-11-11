// Select navigation links, open/close buttons, and the menu
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');

// Open the menu
menuOpenButton.addEventListener('click', () => {
    navMenu.style.display = 'flex'; // Show the menu
    navMenu.style.flexDirection = 'column'; // Stack the menu items vertically
});

// Close the menu
menuCloseButton.addEventListener('click', () => {
    navMenu.style.display = 'none'; // Hide the menu
});

// Close the menu on link click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.style.display = 'none'; // Hide the menu
    });
});

