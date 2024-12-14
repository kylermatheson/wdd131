import articles from './articles.mjs';

// Template function Tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}


// Template function for an article
function articleTemplate(article) {
    return `<div class="card article" >
                <div>
                    <img class="art-img" src="${article.imgSrc}" alt="${article.imgAlt}">
                </div>
                <div>
                    <h2><a id="${article.id}" class="h2-link" href="post.html">${article.title}</a></h2>
                    <ul class="tags">
                        ${tagsTemplate(article.tags)}
                    </ul>
                    <p class="italics">${article.date}</p>
                    <p>${article.description}</p>
                </div>
            </div>`;
}

// Render Function
function renderArticles(articleList) {
    const outputElement = document.getElementById('jsSelector');
    const articleHTML = articleList.map(articleTemplate).join('');
    outputElement.innerHTML = articleHTML;
}

// Filter recipes based on the query
function filterArticles(query) {
    return articles.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
    ).sort((a, b) => a.title.localeCompare(b.title));
}

// Event listener for search functionality
function searchHandler(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredArticles = filterArticles(query);
    renderArticles(filteredArticles);
}

// Initalize Function
function init() {
    console.log("Init....")
    renderArticles(articles);
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    document.getElementById('search-button').addEventListener('click', searchHandler);
});