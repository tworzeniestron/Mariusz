const goToTop = document.querySelector('.scrollTopButton');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > "700") {
        goToTop.style.visibility = "visible"
    } else {
        goToTop.style.visibility = "hidden"
    }
}

goToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})