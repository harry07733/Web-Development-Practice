let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");

userInputEl.addEventListener("input", event => {
    let url = "https://apis.ccbp.in/numbers-fact?number=" + event.target.value;
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        factEl.textContent = jsonData.fact;
    });
})