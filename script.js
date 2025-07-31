let count = 1;

document.getElementById('plus').onclick = function () {
    document.querySelector('h1').innerHTML = Math.abs(count);
    count++;
}
document.getElementById('minus').onclick = function () {
    document.querySelector('h1').innerHTML = Math.abs(count - 1);
    count--;
}