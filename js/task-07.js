const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", shakeInput);

function shakeInput() {
    text.style.fontSize = this.value + "px";
}
