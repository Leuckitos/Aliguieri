/* =========================================================
   ALIGUIERE — INTERAÇÕES DA HOMEPAGE
   Os registros recuperáveis desta página fazem parte da investigação.
========================================================= */

/* REC-09: caracteres recuperados do registro de uma antiga sessão escolar. */
window.__unidades = [99, 114, 105, 97, 110, 99, 97, 115];


/* =========================================================
   APARECER ELEMENTOS AO ROLAR
========================================================= */

const elements = document.querySelectorAll(
    ".purpose, .application, .empresa-main, .numbers div"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {

        element.classList.add("hidden");
        observer.observe(element);

    });

} else {

    elements.forEach((element) => {
        element.classList.add("visible");
    });

}


/* =========================================================
   ABRIR A EXPERIÊNCIA COMPLETA DA IA
========================================================= */

const openAI = document.getElementById("openAI");

if (openAI) {

    openAI.addEventListener("click", () => {

        window.location.href = "aliguiere-ai.html";

    });

}


/* =========================================================
   HOVER NOS PROPÓSITOS
========================================================= */

document.querySelectorAll(".purpose").forEach((purpose) => {

    purpose.addEventListener("mouseenter", () => {

        purpose.style.transform = "translateX(8px)";

    });

    purpose.addEventListener("mouseleave", () => {

        purpose.style.transform = "translateX(0)";

    });

});


/* =========================================================
   BOTÃO DO FUTURO
========================================================= */

const futureButton = document.querySelector(".future-button");

if (futureButton) {

    futureButton.addEventListener("click", () => {

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   PISTAS DE CONSOLE
========================================================= */

console.log(
    "%cALIGUIERE",
    "font-family:serif;font-size:24px;"
);

console.log(
    "Toda jornada possui um caminho."
);

console.log(
    "7 propósitos. 7 caminhos. 1 destino."
);


/* =========================================================
   TRANSIÇÃO PARA O CANAL PRIVADO
========================================================= */

const invasion = document.getElementById("invasion");

let invasionStarted = false;
let pageHasMoved = false;


function verificarFimDaPagina() {

    if (window.scrollY > 80) {
        pageHasMoved = true;
    }

    if (
        !invasion ||
        invasionStarted ||
        !pageHasMoved
    ) {
        return;
    }

    const scrollPosition =
        window.scrollY + window.innerHeight;

    const pageHeight =
        document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 40) {

        iniciarInvasao();

    }

}


function iniciarInvasao() {

    if (!invasion || invasionStarted) {
        return;
    }

    invasionStarted = true;

    invasion.classList.add(
        "active",
        "glitch",
        "flash"
    );

    window.setTimeout(() => {

        invasion.classList.remove(
            "glitch",
            "flash"
        );

    }, 850);

}


window.addEventListener(
    "scroll",
    verificarFimDaPagina,
    { passive: true }
);