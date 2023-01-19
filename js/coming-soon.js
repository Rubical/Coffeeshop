const chainImg = document.querySelector('.coming-soon-chains');
const menuRow = document.querySelector('.menu-card-wrapper');
const menuBtns = menuRow.getElementsByClassName('[data-action=coming-soon]')

menuRow.addEventListener('click', function (event) {
    if (event.target.dataset.action == ('coming-soon')) {
        chainImg.classList.remove('none')
        setTimeout( () => chainImg.classList.add('coming-soon-chains__scaled'), 10)
        menuBtns.classList.add('btn__not-active')
    }
})
