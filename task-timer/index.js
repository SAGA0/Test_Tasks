const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
	return (time) => {
		let timer = setInterval(function () {
			seconds = time % 60
			minutes = (time / 60) % 60
			hour = (time / 60 / 60) % 60
			if (time <= 0) {
				clearInterval(timer)
				timerEl.innerHTML = 'hh:mm:ss'
				alert('Время вышло')
			} else {
				let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`
				timerEl.innerHTML = strTimer
			}
			--time
		}, 1000)
	}
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', () => {
	return (inputEl.value = inputEl.value.replace(/[^\d]/g, ''))
})

buttonEl.addEventListener('click', () => {
	const time = Number(inputEl.value)
	animateTimer(time)
	inputEl.value = ''
})
