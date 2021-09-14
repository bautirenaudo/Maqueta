(function () {
    const menu = document.getElementById("menu");
    const ul = document.getElementById("ul");
    const opinionNext = document.getElementById("next");
    const opinionBack = document.getElementById("back");
    const opinion = document.getElementById("opinion");
    const before = document.getElementById("before");
    const clientes = document.getElementById("clientes");
    let array = document.getElementsByClassName("cliente-templates");

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

    /*OPINIONES*/
    let indiceOpiniones = -1;
    const scrollOpinionsNext = () => {
        /*let currentScroll = opinion.scrollTop + 400;
        opinion.scrollTo({
            top: currentScroll,
            behavior: "smooth",
        });*/
        if (indiceOpiniones < 3) {
            indiceOpiniones += 1;
            console.log(array[indiceOpiniones]);
            const node = document.createElement("div");
            node.setAttribute("class", "cliente");
            console.log(indiceOpiniones);
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
        /*let currentScroll = opinion.scrollTop - 400;
        opinion.scrollTo({
            top: currentScroll,
            behavior: "smooth",
        });*/
        if (indiceOpiniones > 0) {
            indiceOpiniones -= 1;
            console.log(array[indiceOpiniones]);
            const node = document.createElement("div");
            node.setAttribute("class", "cliente");
            node.innerHTML = array[indiceOpiniones].innerHTML;
            console.log(node);
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

}())