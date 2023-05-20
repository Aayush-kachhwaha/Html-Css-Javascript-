const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
tryAgainBtn = document.querySelector(".content button"),
timeTay = document.querySelector(". time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(". wpm span"),
cpmTag = document.querySelector(".cpm span");

let timer,
maxTime =60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

function loadParagraph(){
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs
}