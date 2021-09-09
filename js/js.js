(function () {
    const menu = document.getElementById("menu");
    const ul = document.getElementById("ul");

    let indiceMenu = 0;
    menu.addEventListener("click", () => {
        if (indiceMenu == 0) {
            ul.style.cssText="transform:translateX(0%)";
            indiceMenu = 1;
        } else {
            ul.style.cssText="transform:translateX(-100%)";
            indiceMenu = 0;
        }

    })
}())