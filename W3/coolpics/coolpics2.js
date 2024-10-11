// Toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
}

const menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", toggleMenu);

// Handle resizing to show/hide menu
function handleResize() {
    const menu = document.getElementById("dropdownMenu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("show");
    }
}
handleResize();
window.addEventListener("resize", handleResize);

// Template for image viewer
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${pic}" alt="${alt}">
            </div>`;
}

// Handle viewing an image
function viewHandler(event) {
    const target = event.target;
    if (target.tagName === "IMG") {
        const src = target.getAttribute("src").split("-")[0] + "-full.jpeg";
        const alt = target.getAttribute("alt");
        const viewerHTML = viewerTemplate(src, alt);
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}

// Close the image viewer
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

// Add event listener to gallery images
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

const closeButton = document.querySelector(".close-viewer");
closeButton.addEventListener("click", closeViewer);