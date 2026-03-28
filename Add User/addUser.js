let nameInputEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailInputEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let userDetails = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let addUserFormEl = document.getElementById("addUserForm");

nameInputEl.addEventListener("change", event => {
    if(event.target.value === ""){
        nameErrMsgEl.textContent = "Required*";
    }else{
        nameErrMsgEl.textContent = "";
        userDetails.name = event.target.value;
    }
})
emailInputEl.addEventListener("change", event => {
    if(event.target.value === ""){
        emailErrMsgEl.textContent = "Required*";
    }else{
        emailErrMsgEl.textContent = "";
        if(event.target.value.endsWith("@gmail.com")){
            userDetails.email = event.target.value;
        }else{
            emailErrMsgEl.textContent = "Please enter a valid email";
        }
    }
})

statusEl.addEventListener("change", event => {
    userDetails.status = event.target.value;
})

genderMaleEl.addEventListener("change", event => {
    userDetails.gender = event.target.value;
})

addUserFormEl.addEventListener("submit", event => {
    event.preventDefault();
    let {name, email} = userDetails;
    if(name === ""){
        nameErrMsgEl.textContent = "Required*";
        return;
    }
    if(email === ""){
        emailErrMsgEl.textContent = "Required*";
        return;
    }
    
    let requestedURL = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 5674b2944f72fba83e228e09bebd64f845564084e7aa925da274c4e1ed6597e9"
        },
        body: JSON.stringify(userDetails)
    }
    
    fetch(requestedURL, options)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData.status);
    });
})









