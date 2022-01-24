// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider.
// - Use the gradient as the form background.

// Stretch goals:
// - Add more colors.
// - Add a 'Surprise Me' button which generates random gradients (and updates the inputs).
// - Check for contrast between the gradient and the text.

const gradient = document.getElementById("gradient");
const color1 = document.getElementById("picker-1");
const color2 = document.getElementById("picker-2");
const split = document.getElementById("split");

color1.addEventListener("change", setGradient);
color2.addEventListener("change", setGradient);
split.addEventListener("change", setGradient);

function setGradient() {
    gradient.style.background =
        "linear-gradient(135deg," + color1.value + split.value + ", " + color2.value + ")"
}