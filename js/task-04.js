// // <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const totalValue = document.querySelector("#value");
decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);
let counterValue = 0;
function onDecrement() {
    totalValue.textContent = counterValue -= 1;
}
function onIncrement() {
    totalValue.textContent = counterValue += 1;
}
