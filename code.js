var name = prompt("Какое ваше имя?");

var el = document.getElementById('name');
if (typeof el.innerText !== 'undefined') {
    // IE8-
    el.innerText = name;
} else {
    // Нормальные браузеры
    el.textContent = name;
}
