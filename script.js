document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuContent = document.getElementById('menuContent');

    menu.addEventListener('click', function () {
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        } else {
            menuContent.style.display = 'block';
        }
    });
});
