const img = document.querySelector('.wrapper');
const checkBox = document.querySelector('.check');

const array = [
    {src: './assets/ballon.png', id: '1'},
    {src: './assets/ballon.png', id: '2'},
    {src: './assets/ballon.png', id: '3'},
    // {src: './assets/ballon.png', id: '4'},
    // {src: './assets/ballon.png', id: '5'},
    // {src: './assets/ballon.png', id: '6'},
    // {src: './assets/ballon.png', id: '7'},
    // {src: './assets/ballon.png', id: '8'},
    // {src: './assets/ballon.png', id: '9'},
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
        updateCheckbox()


        // if (balloon.forEach(item => item.classList.contains('bgRed'))) {
        //     return checkBox.checked = true
        // } else if (item !== item.classList.contains('bgRed')){
        //     return checkBox.checked = false
        // }
    })
    checkBox.addEventListener('click', () => {
        item.classList.toggle('bgRed')
    })
});

function updateCheckbox() {
    const checkedBalloonsCount = document.querySelectorAll('.bgRed').length;
    checkBox.checked = checkedBalloonsCount === array.length;
}


