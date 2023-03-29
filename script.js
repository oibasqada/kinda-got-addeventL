const img = document.querySelector('.wrapper');
const checkBox = document.querySelector('.check');

const array = [
    {src: './assets/ballon.png', id: '1'},
    {src: './assets/ballon.png', id: '2'},
    {src: './assets/ballon.png', id: '3'},
    {src: './assets/ballon.png', id: '4'},
    {src: './assets/ballon.png', id: '5'},
    {src: './assets/ballon.png', id: '6'},
    {src: './assets/ballon.png', id: '7'},
    {src: './assets/ballon.png', id: '8'},
    {src: './assets/ballon.png', id: '9'},
]

img.innerHTML = array.map(item => {
    return `<div class ="col-4">
                <img src="${item.src}" alt="alto"/>
            </div>`
}).join('')

const balloon = document.querySelectorAll('img')

balloon.forEach((item, idx) => {
    item.addEventListener('click', () => {
        item.classList.toggle('bgRed')
    })
    checkBox.addEventListener('click', () => {
        item.classList.toggle('bgRed')
    })
});

