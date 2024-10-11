function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("show");
}

const menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("dropdownMenu")
    if (window.innerWidth > 1000) {
        menu.classList.remove("show");
    } else { 
        menu.classList.add("show")
    }
}
handleResize()
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="{pic}" alt="{alt}">
    </div>`;
 
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target

	// get the src attribute from that element and 'split' it on the "-"

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked

}

function closeViewer()
const imgButton = document.querySelector("gallery")
imgButton.addEventListener("click", viewer)

const i = document.querySelector("gallery")
imgButton.addEventListener("click", viewerTemplate)