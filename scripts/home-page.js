const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
var modeGlow = document.querySelectorAll(".modeGlow");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("😎")) {
        body.style.background = "#000";
        main.style.color = "#fff";
        modeGlow.forEach(element => {
            element.classList.replace("modeGlow", "modeDark");
        });
        modeButton.textContent = "🌞";
    } else {
        body.style.background = "#fff";
        main.style.color = "#000";
       
        modeGlow.forEach(element => {
            element.classList.replace("modeDark", "modeGlow");
        });
        modeButton.textContent = "😎";
    }
});
