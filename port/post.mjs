import articles from './articles.mjs';

// Template function Tags
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}


// Template function for an article 
function articleTemplate(article, index) {
    return   `<div id="post-header" class="post-container">
                <div class="div-post-img">
                    <img class="post-img" src="${article[index].imgSrc}" alt="${article[index].imgAlt}">
                </div>
                <div>
                    <h2>${article[index].title}</h2>
                    <ul class="tags">
                        ${tagsTemplate(article[index].tags)}
                    </ul>
                    <p class="italics">${article[index].date}</p>
                    <p>${article[index].description}</p>
                </div>
            </div>
            <div id="post-article">
                ${article[index].post}
            </div>`;
}

// Render Function
function renderArticles(articleList, index) {
    const outputElement = document.getElementById('post');
    const articleHTML =  articleTemplate(articleList, index)
    console.log('%cport/post.mjs:33 outputElement', 'color: #007acc;', outputElement);
    console.log('%cport/post.mjs:33 articleHTML', 'color: #007acc;', articleHTML);
    outputElement.innerHTML = articleHTML;
}

// Initalize Function
function init(Id) {
    // when post.html loaded then renderArticles


    console.log("Init....")
    renderArticles(articles, Id);
}



// Add an event listener for all <a> elements with the class 'h2-link'
document.addEventListener('DOMContentLoaded', () => {
    // Select all <a> elements with the class 'h2-link'
    const links = document.querySelectorAll('.h2-link');
    
    // Loop through each link and attach an event listener
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent the default behavior (optional, if needed)
            event.preventDefault();

            // Get the id of the clicked link
            const linkId = event.target.id;
            
            // Log the id to the console
            console.log(`Clicked link ID: ${linkId}`);
            window.location.href = link.href;

            // window.onload =  init(linkId);           // Call the init function when the link is clicked
            localStorage.setItem('linkId', linkId); 

            // Optionally, perform the default action after calling init()
            // Example: Redirect manually (optional)
        });
    });
});

       // Run this script after the page loads
       window.onload = () => {
        // Retrieve the linkId from localStorage
        const linkId = localStorage.getItem('linkId');
        if (linkId) {
            // console.log(`Initialized with link ID: ${linkId}`);
            // document.getElementById('linkInfo').textContent = `You clicked link with ID: ${linkId}`;
            init(linkId)
            // Clear the stored linkId if needed
            localStorage.removeItem('linkId');
        } else {
            console.log('No link ID found.');
        }
    };
