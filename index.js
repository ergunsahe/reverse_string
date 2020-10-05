


const btn = document.querySelector("#btn");
btn.addEventListener("click", dspl)


function dspl(){
    const display = document.querySelector("#display");
    const userInput = document.querySelector("#user-input");
    let newWord = ""
    for (i = userInput.value.length-1;i>=0;i--) {newWord += userInput.value[i]}
    display.innerText = newWord;
    userInput.value = "";
    userInput.focus()
}

// function reversedWord(word) {
//     let newWord = ""
//     for (i = word.length-1;i>=0;i--) {newWord += word[i]}
//      console.log(newWord)
    
// }