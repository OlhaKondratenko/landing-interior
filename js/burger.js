const burgerMenuIcon = document.querySelector('.header__burger')
const menuBody = document.querySelector('.navbar')

burgerMenuIcon.addEventListener('click', function (e) {
    burgerMenuIcon.classList.toggle('active')
    menuBody.classList.toggle('active')
})