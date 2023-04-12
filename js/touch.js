const touchCircle = document.querySelector('.promo__touch')
const touchFocus = document.querySelector('.focus')

touchCircle.addEventListener('click', function () {
    touchFocus.classList.toggle('active');

})