const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')
const cancelBtn = document.querySelector('.cancel-btn')

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	const cookieCancelled = localStorage.getItem('cookie-cancelled')

	if (cookieEaten) {
		cookieBox.classList.add('hide')
	} else if (cookieCancelled) {
		cookieBox.classList.remove('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	console.log("Zaakceptowano politykę coockie")
	cookieBox.classList.add('hide')
}

const handleCancel = () => {
	localStorage.setItem('cookie-cancelled', 'true')
	cookieBox.classList.add('hide')
}

cookieBtn.addEventListener('click', handleCookieBox)
cancelBtn.addEventListener('click', handleCancel)
showCookie()