// createBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);
// const input = document.querySelector("input");
// function createBoxes(amount) {
//     let size = 30;
//     for (let i = 0; i < createBtn.addEventListe; i += 1) {
//         return (size += 10);
//     }
//     const wrap = `<div class='box' style='background-color: ${getRandomHexColor()}; width:${size}px; height:${size}px;' ></div>`;
//     container.insertAdjacentHTML("afterbegin", wrap);
// }
// function destroyBoxes() {
//     const boxes = document.querySelectorAll(".box");
//     boxes.forEach((box) => box.remove());
//     console.log(boxes);
// }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
createButton.addEventListener(
    "click",

    createBoxes
);
destroyButton.addEventListener("click", destroyBoxes);
const input = document.querySelector("input");
const amount = Number(input.value);

function createBoxes(amount) {
    console.log(amount);
    const boxSize = 30;
    let html = "";
    for (let i = 0; i < amount; i++) {
        const size = boxSize + i * 10;
        const color = getRandomHexColor();
        html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
    }
    boxesDiv.innerHTML = html;
}
function destroyBoxes() {
    boxesDiv.innerHTML = "";
}
