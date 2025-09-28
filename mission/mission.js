const themeSelector = document.querySelector("select")
function changeTheme() {
    let selected = themeSelector.value;
    if (selected == "dark") {
        document.body.className = "dark";
        document.querySelector("img").src = "../images/byui-logo_white.png"
    }
   else {  
        document.body.className = null;
        document.querySelector("img").src = "../images/byui-logo-blue.webp"
    }
}

// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.


// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);