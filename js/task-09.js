const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
    const rightColor = getRandomHexColor();
    body.style.backgroundColor = rightColor;
    colorValue.textContent = rightColor;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
