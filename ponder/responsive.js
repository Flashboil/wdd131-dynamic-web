const menuButton = document.querySelector('.menu-btn')
const navigation = document.querySelector('nav')

menuButton.addEventListener('click', (event) => {
    navigation.classList.toggle('hide')
    menuButton.classList.toggle('change')
});