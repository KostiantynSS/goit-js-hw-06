const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", checkValidation);

function checkValidation() {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
        console.log(inputEl.classList);
    } else if (inputEl.value === "") {
        inputEl.classList.remove("valid");
        inputEl.classList.remove("invalid");
    } else if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
}
