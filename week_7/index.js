const advice = [
  "If you’re good at something, never do it for free.",
  "Do, or do not. There is no try.",
  "It’s what you do right now that makes a difference.",
  "Until you start believing in yourself, you ain't gonna have a life!",
  "Life does not stop and start at your convenience.",
  "You know what the trouble about real life is? There's no danger music.",
];

const adviceButton = document.getElementById("adviceBtn");
const adviceDisplay = document.getElementById("adviceDisplay");
const adviceEye = document.getElementById("adviceEye");

adviceButton.addEventListener("click", () => {
  const randomAdvice = advice[Math.floor(Math.random() * advice.length)];
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = "rgb(" + red + ", " + green + ", " + blue + ", 0.3)";

  adviceDisplay.innerText = randomAdvice;
  adviceEye.style.backgroundColor = randomColor;
});
