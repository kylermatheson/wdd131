import articles from 'port/articles.mjs';

// Function to get article
function getListEntry(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(list[i]);
    }
    return result;
}

// Template function Tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}


// Template function for an article
function articleTemplate(article) {
    return `  <div class="card article">
                <div>
                    <img src="${article.imgSrc}" alt="${article.imgAlt}">
                </div>
                <div>
                    <h3>${article.title}</h3>
                    <ul class="list">
                        ${tagsTemplate(recipe.tags)}
                    </ul>
                    <p class="italics">${article.date}</p>
                    <p>${article.description}</p>
                </div>
            </div>`;
}

// Render Function
function renderRecipes(recipeList) {
    const outputElement = document.getElementsByClassName('container');
    const articleHTML = articleList.map(articleTemplate).join('');
    outputElement.innerHTML = articleHTML;
}

// Initalize Function
function init() {
    const article = [getListEntry(articles)];
    renderRecipes(article);
}

init()