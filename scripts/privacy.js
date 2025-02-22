const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')


const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	console.log("Zaakceptowano politykę coockie")
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()