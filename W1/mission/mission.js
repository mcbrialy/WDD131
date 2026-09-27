let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#3c3b39";
        document.body.style.color = "white";
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
        document.body.style.borderColor = "white";
        // code for changes to colors and logo
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        logo.src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
        // code for changes to colors and logo
    }
}           
                    