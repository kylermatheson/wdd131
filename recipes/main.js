import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random recipe
function getRandomListEntry(list) {
    const randomNum = random(list.length);
    return list[randomNum]; // Return the actual recipe, not just the index
}

// Template function for tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Template function for ratings
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating
            ? `<span aria-hidden="true" class="icon-star">⭐</span>`
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

// Template function for a recipe
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="${recipe.description}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

// Render function
function renderRecipes(recipeList) {
    const outputElement = document.getElementById('card-container');
    const recipeHTML = recipeList.map(recipeTemplate).join('');
    outputElement.innerHTML = recipeHTML;
}

// Filter recipes based on the query
function filterRecipes(query) {
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    ).sort((a, b) => a.name.localeCompare(b.name));
}

// Event listener for search functionality
function searchHandler(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Initialize the page with a random recipe
function init() {
    const randomRecipe = [getRandomListEntry(recipes)];
    renderRecipes(randomRecipe);
}

// Ensure DOM is ready before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-button').addEventListener('click', searchHandler);
    init();
});
