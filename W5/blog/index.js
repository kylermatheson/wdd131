const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const articlesContainer = document.getElementById('articles-container');

// Loop through the articles array and create HTML content for each article
articles.forEach(article => {
    // Create a div for the first column
    const columnone = document.createElement('div'); // Create a new div element
    columnone.classList.add('column_one'); // Correct class assignment

    // Create a div for the second column
    const columntwo = document.createElement('div'); // Create a new div element
    columntwo.classList.add('column_two'); // Correct class assignment

    // Create HTML structure for the first column
    columnone.innerHTML = `
        <p>Published: ${article.date}</p>
        <p>Ages: ${article.ages}</p>
        <p>Genre: ${article.genre}</p>
        <p>Rating: ${article.stars}</p>
    `;
    
    // Create HTML structure for the second column
    columntwo.innerHTML = `
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
    `;

    // Append both columns to the container
    articlesContainer.appendChild(columnone);
    articlesContainer.appendChild(columntwo);
});

const columnthree = document.createElement('div'); // Create a new div element
columnthree.classList.add('column_three'); // Correct class as
columnthree.innerHTML = `
	<p>Filters will go here </p>
`
articlesContainer.appendChild(columnthree);
