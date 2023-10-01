const toggleContainer = document.getElementById("namee");
const toggleButton = document.getElementById("toggleButton");
const ball = document.querySelector(".ball");
const monthlyPrices = document.querySelectorAll(".monthly");
const annualPrices = document.querySelectorAll(".annually");

function togglePrices() {
  if (toggleButton.textContent === "Monthly") {
    ball.style.transform = "translateX(30px)";
    toggleButton.textContent = "Annually";
    annualPrices.forEach(price => price.style.display = "block");
    monthlyPrices.forEach(price => price.style.display = "none");
  } else {
    ball.style.transform = "translateX(0)";
    toggleButton.textContent = "Monthly";
    monthlyPrices.forEach(price => price.style.display = "block");
    annualPrices.forEach(price => price.style.display = "none");
  }
}

toggleContainer.addEventListener("click", togglePrices);

togglePrices();
