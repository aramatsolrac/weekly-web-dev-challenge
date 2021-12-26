const screensaver = document.getElementById("screensaver");
const orb = document.getElementById("orb");

// show screensaver
function showScreensaver() {
    screensaver.style.visibility = 'visible';
}
setTimeout(showScreensaver, 5000);


// stop screensaver
orb.addEventListener("mousemove", stopScreensaver);

function stopScreensaver() {
    screensaver.style.visibility = 'hidden';
    setTimeout(showScreensaver, 5000);
}