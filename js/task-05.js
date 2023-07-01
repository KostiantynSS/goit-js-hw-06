const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", changeInput);

function changeInput() {
    if (input.value === "") {
        return (output.textContent = "Anonymous");
    }
    output.textContent = input.value;
}
