let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

jokeBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET",
    };
    let requestedURL = "https://apis.ccbp.in/jokes/random";
    fetch(requestedURL, options)
        .then(response => response.json())
        .then(jsonData => {
            spinnerEl.classList.add("d-none");
            jokeTextEl.textContent = jsonData.value;
        });

}

const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
};

const asyncPromise = doNetworkCall();
// console.log(asyncPromise);
// doNetworkCall();