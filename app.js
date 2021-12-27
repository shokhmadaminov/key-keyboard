
const card1Text = document.getElementById('card1-text')
const card2Text = document.getElementById('card2-text')
const card3Text = document.getElementById('card3-text')
const title = document.querySelector('.title')
const container = document.querySelector('.container')


document.addEventListener('keydown', (e)=> {
    title.classList.add('hidden')
    container.classList.remove('hidden')
    card1Text.textContent = e.key
    card2Text.textContent = e.keyCode
    card3Text.textContent = e.code
})
