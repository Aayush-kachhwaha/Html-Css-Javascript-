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
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", ()=> inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping(){
    let character = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < character.length - 1 && timeLeft > 0){
        if(!isTyping){
            timer = setInterval(initTime, 1000);
            isTyping = true;
        }
        if(typedChar == null){
            if(charIndex > 0){
                charIndex--;
                if(character[charIndex].classList.contains("incorrect")){
                    mistakes--;
                }
                character[charIndex].classList.remove("correct","incorrect");
            }
        }else{
        if(character[charIndex].innerText == typedChar){
            character[charIndex].classList.add('correct');
        }
        else{
            mistakes++;
            character[charIndex].classList.add("inccorect");
        }
        charIndex++;
    }
    character.forEach(span => span.classList.remove("active"));
    character[charIndex].classList.add("active");

    let wpm = Math.round(((charIndex - mistakes)/5)/(maxTime - timeLeft)*60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    wpmTag.innerHTML =wpm;
    mistakeTag.innerHTML = mistakes;
    cpmTag.innerHTML = charIndex- mistakes;
    }else{
        clearInterval(timer);
        inpField.value ="";
    }
    
}

function initTime(){
    if (timeLeft > 0){
        timeLeft --;
        timeTay.innerHTML = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)/5 )/(maxTime- timeLeft)*6 );
        wpmTag.innerHTML= wpm;
    }else{
        clearInterval(timer);
    }
}

function resetGame(){
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes= isTyping=0;
    inpField.value="";
    timeTay.innerHTML = 0;
    wpmTag.innerHTML=0;
    mistakeTag.innerHTML=0;
    cpmTag.innerHTML=0;
}
loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click",resetGame);