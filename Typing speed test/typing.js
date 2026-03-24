let quoteDisplayEl = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("timer");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let resultEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");

let count_timer = 0;
let uniqueId = null;

let quote = "";
let options = {
    method: "GET"
}
let requestURL = "https://apis.ccbp.in/random-quote";

fetch(requestURL, options)
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    quoteDisplayEl.textContent = jsonData.content;
    quote = jsonData.content;
    uniqueId = setInterval(function() {
        count_timer += 1
        timerEl.textContent = count_timer;
    }, 1000);
});

submitBtnEl.addEventListener("click", function(event) {
    if(quoteInputEl.value === quote){
        clearInterval(uniqueId);
        resultEl.textContent = "You typed in " + count_timer + " seconds";
    }
    else if(quoteInputEl.value !== quote){
        resultEl.textContent = "You typed incorrect sentense";
    }
})
resetBtnEl.addEventListener("click", function(event) {
    spinnerEl.classList.remove("d-none");
    clearInterval(uniqueId);
    timerEl.textContent = "0";
    count_timer = 0
    resultEl.textContent = "";
    quoteInputEl.value = "";
    
    fetch(requestURL, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinnerEl.classList.add("d-none");
        quoteDisplayEl.textContent = jsonData.content;
        quote = jsonData.content;
        uniqueId = setInterval(function() {
            count_timer += 1
            timerEl.textContent = count_timer;
        }, 1000);
    });
})

