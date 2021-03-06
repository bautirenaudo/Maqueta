(function () {

    const capaLoading = document.querySelector(".capa-loading");
    const menu = document.getElementById("menu");
    const ul = document.getElementById("ul");
    const opinionNext = document.getElementById("next");
    const opinionBack = document.getElementById("back");
    const opinion = document.getElementById("opinion");
    const before = document.getElementById("before");
    const clientes = document.getElementById("clientes");
    let array = document.querySelector(".nada").content.querySelectorAll(".cliente-templates");
    const headers = document.querySelectorAll("header");
    const productos = document.querySelector(".productos");
    const tituloProductosBefore = document.querySelector(".titulo-productos .after")


    //CAPA LOADING
    /*window.addEventListener("DOMContentLoaded", () => {
        capaLoading.style.cssText = "transition: all .5s; opacity: 0;";
    })*/

    //MENU
    let indiceMenu = 0;
    menu.addEventListener("click", () => {
        if (indiceMenu == 0) {
            ul.style.cssText = "transform:translateX(0%)";
            indiceMenu = 1;
        } else {
            ul.style.cssText = "transform:translateX(-100%)";
            indiceMenu = 0;
        }

    })
    ul.addEventListener("click", (e) => {
        ul.style.cssText = "transform:translateX(-100%)";
        indiceMenu = 0;
    })

    const menuScroll = () => {
        let currentScroll = window.scrollY;
        if (currentScroll > 0) {
            headers.forEach(header => {
                header.style.cssText = "height: 80px; background-color: var(--color); box-shadow: 0 0 5px 2px black;";
            })
        } else {
            headers.forEach(header => {
                header.style.cssText = "height: 95px; background-color: none; box-shadow: none;";
            })
        }
    }

    //OPINIONES
    let indiceOpiniones = -1;
    const scrollOpinionsNext = () => {
        if (indiceOpiniones < 3) {
            indiceOpiniones += 1;
            const node = document.createElement("div");
            node.setAttribute("class", "cliente");
            node.innerHTML = array[indiceOpiniones].innerHTML;
            clientes.innerHTML = "";
            clientes.append(node);
        }



        before.style.cssText = "background: rgba(0, 0, 0, 1);";
        setTimeout(() => {
            before.style.cssText = "background: rgba(0, 0, 0, 0.820);";
        }, 200);
    }

    const scrollOpinionsBack = () => {
        if (indiceOpiniones > 0) {
            indiceOpiniones -= 1;
            const node = document.createElement("div");
            node.setAttribute("class", "cliente");
            node.innerHTML = array[indiceOpiniones].innerHTML;
            clientes.innerHTML = "";
            clientes.append(node);
        }



        before.style.cssText = "background: rgba(0, 0, 0, 1);";
        setTimeout(() => {
            before.style.cssText = "background: rgba(0, 0, 0, 0.820);";
        }, 200);
    }

    opinionNext.addEventListener("click", () => {
        scrollOpinionsNext();
    })
    opinionBack.addEventListener("click", () => {
        scrollOpinionsBack();
    })
    scrollOpinionsNext();


    //MOSTAR ELEMNTOS
    const mostarElementos = () => {
        let currentScroll = document.documentElement.scrollTop;
        let coords = productos.getBoundingClientRect();
        if (window.innerWidth > 500) {
            if (currentScroll > coords.top + 150) {
                productos.style.opacity = "1";
                productos.style.cssText = "transition: all 1s;";
                tituloProductosBefore.style.display = "block";
            } else if (currentScroll < coords.top - 400) {
                productos.style.opacity = "0";
                tituloProductosBefore.style.display = "none";
            }
        } else {
            if (currentScroll > coords.top + 600) {
                productos.style.opacity = "1";
                productos.style.cssText = "transition: all 1s;";
                tituloProductosBefore.style.display = "block";
            } else if (currentScroll < coords.top) {
                productos.style.opacity = "0";
                tituloProductosBefore.style.display = "none";
            }
        }


    }

    window.addEventListener("scroll", () => {
        menuScroll();
        mostarElementos();
    })

}())