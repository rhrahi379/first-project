const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');
const plus = document.querySelector('.plus');
const count = document.querySelector('h1');

minus.addEventListener('click', () => {
    let num = parseInt(count.innerText);
    count.innerText = num - 1;
})

plus.addEventListener('click', () => {
    let num = parseInt(count.innerText);
    count.innerText = num + 1;
})

reset.addEventListener('click', () => {
    count.innerText = 0;
})