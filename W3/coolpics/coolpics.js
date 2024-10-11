function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
}

const menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    
}