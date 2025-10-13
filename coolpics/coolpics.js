const menuButton = document.querySelector('button')
const navigation = document.querySelector('.nav-links')
const gallery = document.querySelector('.gallery');

menuButton.addEventListener('click', (event) => {
    navigation.classList.toggle('hide')
});

function handleResize() {
    const menu = document.querySelector(".menu")
    if (window.innerWidth > 1000) {
        menu.classList.add("hide");
        navigation.classList.remove("hide");
    } else {
        menu.classList.remove("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

gallery.addEventListener('click', (event) => {
    const dialog = document.createElement('dialog');
    dialog.innerHTML = "<button class='close-viewer'>X</button><img>";

    const imageClicked = event.target.closest('img');
    const dialogImage = dialog.querySelector('img');

    dialogImage.src = imageClicked.src.split('-')[0] + '-full.jpeg'

    document.body.appendChild(dialog);

    dialog.showModal();

    const closeButton = dialog.querySelector('.close-viewer');
  closeButton.addEventListener('click', () => {
    dialog.close();
    dialog.remove();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });  

});