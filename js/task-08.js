const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    const result = { email: email.value, password: password.value };

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    }

    console.log(result);
    event.currentTarget.reset();
}
