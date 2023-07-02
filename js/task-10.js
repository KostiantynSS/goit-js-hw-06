const input = document.querySelector("input");
const container = document.querySelector("#boxes");
// const box = document.querySelector(".box");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
    const wrap = `<div class='box' style='background: ${getRandomHexColor()}; width:20px; height:20px;' ></div>`;

    container.insertAdjacentHTML("afterbegin", wrap);
}

function destroyBoxes() {
    const box = document.querySelectorAll(".box");
    console.log(box);
    box.innerHTML = "";
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
