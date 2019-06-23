const learning = document.querySelector(".learning");
const words = ["Javascript.", "HTML5.", "CSS3.", "React."];
let letterCount = 0;
let wordCount = 0;

const writeWord = () => {
  let letterToWrite = words[wordCount].charAt(letterCount);
  learning.textContent += letterToWrite;
  letterCount++;
  if (letterCount > words[wordCount].length) {
    setTimeout(eraseWord, 1000);
    return;
  }
  console.log("next letter");
  setTimeout(writeWord, 300);
};

const eraseWord = () => {
  deleteCount = learning.textContent.length - 1;
  learning.textContent = words[wordCount].slice(0, deleteCount);
  deleteCount--;
  console.log(learning.textContent.length);

  if (learning.textContent.length === 0) {
    letterCount = 0;
    wordCount++;
    if (wordCount === words.length) {
      wordCount = 0;
      setTimeout(writeWord, 1000);
      return;
    }
    setTimeout(writeWord, 1000);
    return;
  }

  setTimeout(eraseWord, 200);
};

setTimeout(writeWord, 400);
