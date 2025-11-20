import recipes from "./recipes.mjs";

function randomNumber(num){
    return Math.floor(Math.random()*(num));
};

function getRandomEntry(list){
    return list[RandomNumber(list.length)];
};

function recipeTemplate(recipe){
    return`
    <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.description}">
            <section class="card-info">
                <section class="tags">
                </section>
                <h2>${recipe.name}</h2>
                <span
                    class="rating"
                    role="img"
                    aria-label="Rating: 4 out of 5 stars"
                    >
                </span>
                <p>${recipe.description}</p>
            </section>
        </div>
    `
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML

	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

const randomEntry = GetRandomEntry(recipes);
console.log(randomEntry)