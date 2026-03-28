let consoleFormEl = document.getElementById("consoleForm");

let requestUrlEl = document.getElementById("requestUrl");

let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");

let requestMethodEl = document.getElementById("requestMethod");

let requestBodyEl = document.getElementById("requestBody");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");
let url = "https://gorest.co.in/public-api/users";
let options = {
        method: "",
        headers: {},
        body: ""
    };

consoleFormEl.addEventListener("change", event => {
    if(requestUrlEl.value === ""){
        requestUrlErrMsgEl.textContent = "Required*";
    }else{
        requestUrlErrMsgEl.textContent = "";
    }
    
    url = requestUrlEl.value;
    let method = requestMethodEl.value;
    options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 5674b2944f72fba83e228e09bebd64f845564084e7aa925da274c4e1ed6597e9"
        },
        body: requestBodyEl.value
    }
    
})
consoleFormEl.addEventListener("submit", event => {
    event.preventDefault();
    fetch(url, options)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        responseStatusEl.value = jsonData.code;
        responseBodyEl.value = JSON.stringify(jsonData);
    });
})

















