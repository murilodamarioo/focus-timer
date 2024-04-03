import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function plus() {
    el.minutes.textContent = String(Number(el.minutes.textContent) + 1).padStart(2, '0')
    console.log(el.minutes.textContent)
    sounds.buttonPressAudio.play()
}

export function minus() {
    if (el.minutes.textContent > 0) {
        el.minutes.textContent = String(Number(el.minutes.textContent) - 1).padStart(2, '0')
    }
    console.log(el.minutes)
    sounds.buttonPressAudio.play()
}

export function themeSound() {

    el.themeSound.addEventListener('click', (event) => {
        const theme = event.target.id
        const activeTheme = document.getElementById(theme)

        activeTheme.classList.toggle('active')
        console.log(activeTheme)

        if (theme == 'forest' && !activeTheme.classList.contains('active')) {
            sounds.forestAudio.play()
            sounds.forestAudio.loop()
        } else {
            sounds.forestAudio.pause()
        }

        if (theme == 'rain' && !activeTheme.classList.contains('active')) {
            sounds.rainAudio.play()
            sounds.rainAudio.loop()
        } else {
            sounds.rainAudio.pause()
        }

        if (theme == 'coffe' && !activeTheme.classList.contains('active')) {
            sounds.coffeStoreAudio.play()
            sounds.coffeStoreAudio.loop()
        } else {
            sounds.coffeStoreAudio.pause()
        }

        if (theme == 'fire' && !activeTheme.classList.contains('active')) {
            sounds.fireplaceAudio.play()
            sounds.fireplaceAudio.loop()
        } else {
            sounds.fireplaceAudio.pause()
        }
    });
}