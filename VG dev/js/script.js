//Чтобы стрелочка в услугах ходила вверх вниз
document.querySelectorAll('.services-content').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        const img = element.querySelector('.services-content-image');
        img.src = 'img/arrow-up.svg';
    });
    element.addEventListener('mouseout', function() {
        const img = element.querySelector('.services-content-image');
        img.src = 'img/arrow-down.png';
    });
});
//Смена цвета
document.addEventListener('DOMContentLoaded', function() {
    const switchThemeLink = document.querySelector('.header-link');
    const switchThemeCircle = document.querySelector('.header-switch-theme');
    const body = document.body;
    const modalswitchTheme = document.querySelector('.modal-content');
    const headermenuswitchTheme = document.querySelector('.header-menu');
    const colors = ['rgb(229, 220, 207)', 'rgb(206, 233, 223)'];
    const images = {
        "volga": ["img/volga.svg", "img/volga_alt.svg"],
        "develop": ["img/develop.svg", "img/develop_alt.svg"],
        "ment": ["img/ment.svg", "img/ment_alt.svg"]
    };
    let currentColorIndex = 0;
    // Установить начальный цвет в круге как следующий
    switchThemeCircle.style.backgroundColor = colors[(currentColorIndex + 1) % colors.length];
    switchThemeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        // Установить цвет фона страницы таким же, как текущий цвет круга
        body.style.backgroundColor = switchThemeCircle.style.backgroundColor;
        modalswitchTheme.style.backgroundColor = switchThemeCircle.style.backgroundColor;
        headermenuswitchTheme.style.backgroundColor = switchThemeCircle.style.backgroundColor;
        // Увеличить индекс цвета
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        // Изменить цвет фона круга на следующий цвет
        switchThemeCircle.style.backgroundColor = colors[(currentColorIndex + 1) % colors.length];
        // Меняем изображения
        document.querySelectorAll('.theme-img').forEach(img => {
            if (img.classList.contains('volga-img')) {
                img.src = images.volga[currentColorIndex];
            } else if (img.classList.contains('develop-img')) {
                img.src = images.develop[currentColorIndex];
            } else if (img.classList.contains('ment-img')) {
                img.src = images.ment[currentColorIndex];
            }
        });
    });
});
//Кружочки
document.querySelectorAll('.circle-group').forEach(function(element) {
    const visibleCircle = element.querySelector('.visible-circle');
    const invisibleCircle = element.querySelector('.invisible-circle');
    element.addEventListener('mouseover', function() {
        visibleCircle.style.opacity = '0';
        invisibleCircle.style.opacity = '1';
    });
    element.addEventListener('mouseout', function() {
        visibleCircle.style.opacity = '1';
        invisibleCircle.style.opacity = '0';
    });
});
// Всплывающее окошко
// Получаем элементы
var modal = document.getElementById("modal");
var btn = document.querySelector(".main-page-order-button");
var span = document.querySelector(".close");

// При нажатии на кнопку открывается модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// При нажатии на <span> (x), модальное окно закрывается
span.onclick = function() {
    modal.style.display = "none";
}

// При нажатии вне модального окна, оно закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.header-menu');
    const menuLinks = document.querySelectorAll('.header-menu .header-link');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
});