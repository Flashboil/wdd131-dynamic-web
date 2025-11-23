import recipes from "./recipes.mjs";

function randomNumber(num){
    return Math.floor(Math.random()*(num));
};

function getRandomEntry(list){
    return list[randomNumber(list.length)];
};

function recipeTemplate(recipe){
    return`
    <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.description}">
            <section class="card-info">
                <section class="tags">
                ${tagsTemplate(recipe.tags)}
                </section>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </section>
        </div>
    `
}

function tagsTemplate(tags) {
    var html = ""
	// loop through the tags list and transform the strings to HTML
    tags.forEach(tag => {
        html += `<p>${tag}</p>`
    });

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
        for (let star = 0; star < 5; star++)
            if (star < rating)
                html += `<span aria-hidden="true" class="icon-star">⭐</span>`
            else
                html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

const recipe = getRandomEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipesSpace = document.querySelector("main");

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const htmlStrings = recipeList.map(recipeTemplate);

    recipesSpace.innerHTML = htmlStrings.join("");

	// Set the HTML strings as the innerHTML of our output element.

}

const form = document.getElementById("search");
const input = document.getElementById("search-bar");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  searchHandler(event);
});

function sortFunction(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
}

function filter(query) {
    function filterFunction(item){
        return (
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        );
    }
	const filtered = recipes.filter(filterFunction)
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
    e.preventDefault();

    const query = input.value;

    const filterRecipes = filter(query);

    renderRecipes(filterRecipes);
}


function init() {
  // get a random recipe
  const recipe = getRandomEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();