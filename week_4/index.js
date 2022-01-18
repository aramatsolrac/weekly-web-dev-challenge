// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types


const textArea = document.getElementById("txtid");
const wordCount = document.getElementById("word-count");
const characterCount = document.getElementById("character-count");

textArea.addEventListener('keyup', wordCounter);

function wordCounter(words) {
    var words = textArea.value;
    let removeChar = words.replace(/[^A-Za-z]\s+/g, " ");
    let newWord = removeChar.trim().split(" ");

    let characters = textArea.value.split("");
    wordCount.innerText = newWord.length;
    characterCount.innerText = characters.length;
}

