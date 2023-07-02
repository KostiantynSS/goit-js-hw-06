const input = document.querySelector("input");
const container = document.querySelector("#boxes");
// const box = document.querySelector(".box");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
    const wrap = `<div class='box' style='background: ${getRandomHexColor()}; width:30px; height:30px;' ></div>`;
    const arr = [];
    arr.push(container.children);
    container.insertAdjacentHTML("afterbegin", wrap);
    console.log(arr);
}

function destroyBoxes() {
    const boxes = document.querySelectorAll(".box");
    console.log(boxes);
    boxes.forEach((box) => box.remove());
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
