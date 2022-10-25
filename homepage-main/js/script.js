console.log("Wiadomość dla developera! :) ");

let Button = document.querySelector(".section__button");
let Answear = document.querySelector(".js-answear");
let ShowFotoButton = document.querySelector(".section__ShowFotoButton");
let Foto = document.querySelector(".section__FotoSection");
let ThemeName = document.querySelector(".section__ThemeName");

Button.addEventListener("click", () => {
    Answear.innerHTML = "DZIESIĘCIORO";
    Button.remove();
});


ShowFotoButton.addEventListener("click", () => {
    Foto.classList.toggle("Hidden");
    if (Foto.classList.contains("Hidden")) {
        ThemeName.innerHTML = "Pokaż";
    }
    else {
        ThemeName.innerHTML = "Ukryj";
    }
})
