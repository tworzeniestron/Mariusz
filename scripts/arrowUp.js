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

const axios = require('axios');

async function pobierzDane() {
    try {
        const response = await axios.get('https://www.facebook.com/mariusz.drabarek.5');
        console.log('Dane:', response.data);
    } catch (error) {
        console.error('Błąd:', error);
    }
}

pobierzDane();
