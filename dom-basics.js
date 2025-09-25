const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "image from picsum");
document.body.appendChild(newImage);

const newSection = document.createElement("section");

const newHeading = document.createElement("h2");
newHeading.innerText = "DOM Basics";

newParagraph.innerText = "This was added through Javascript"

newSection.appendChild(newHeading);
newSection.appendChild(newParagraph);

document.body.appendChild(newSection);
