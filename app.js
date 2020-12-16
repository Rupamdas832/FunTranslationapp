const inputText = document.querySelector("#inputText")
const inputBtns = document.querySelectorAll("#inputBtn")
const outputDiv = document.querySelector("#outputSection")

//const url = "https://api.funtranslations.com/translate/mandalorian.json"

function getTranslated(text, lang) {
   const url = `http://localhost:3002/translate/${lang}.json`
  //  const url = `https://api.funtranslations.com/translate/${lang}.json`
    return url + "?"+"text="+ text
}

function addText(lang) {
    
    const outputText = document.createElement("h2")
    const textInput = inputText.value;

    fetch(getTranslated(textInput, lang))
    .then(response => response.json())
    .then(json => {
        const langUpper = lang.toUpperCase();
        const translatedText = json.contents.translated;
        outputText.innerHTML = `${langUpper} : ` + translatedText;
        outputDiv.appendChild(outputText)
    }) 
}
inputBtns.forEach(inputBtn => {
    inputBtn.addEventListener('click', () => addText(inputBtn.innerText.toLowerCase()))
})


