let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");
let countryDetails = null;

spinnerEl.classList.remove("d-none");
resultCountriesEl.classList.add("d-none");

let requestedURL = "https://apis.ccbp.in/countries-data";
fetch(requestedURL)
.then(response => {
    return response.json();
})
.then(jsonData => {
    countryDetails = jsonData;
    spinnerEl.classList.add("d-none");
    resultCountriesEl.classList.remove("d-none");
    for(let eachCountry of jsonData){
        let countryCardEl = document.createElement("div");
        countryCardEl.classList.add("col-12", "col-md-6", "col-xl-4", "d-flex", "flex-row", "country-card");
        resultCountriesEl.appendChild(countryCardEl);
        
        let countryFlagEl = document.createElement("img");
        countryFlagEl.src = eachCountry.flag;
        countryFlagEl.classList.add("country-flag", "mr-5");
        countryCardEl.appendChild(countryFlagEl);
        
        let descriptionContainerEl = document.createElement("div");
        descriptionContainerEl.classList.add("description-container");
        countryCardEl.appendChild(descriptionContainerEl);
        
        let countryNameEl = document.createElement("h1");
        countryNameEl.classList.add("country-name");
        countryNameEl.textContent = eachCountry.name;
        descriptionContainerEl.appendChild(countryNameEl);
        
        let countryPopulationEl =document.createElement("p");
        countryPopulationEl.classList.add("country-population");
        countryPopulationEl.textContent = eachCountry.population;
        descriptionContainerEl.appendChild(countryPopulationEl);
    }
});

searchInputEl.addEventListener("input", function(event) {
    resultCountriesEl.textContent = "";
    for(let eachCountry of countryDetails){
        if(eachCountry.name.toLowerCase().includes(event.target.value.toLowerCase())){
            let countryCardEl = document.createElement("div");
            countryCardEl.classList.add("col-12", "col-md-6", "col-xl-4", "d-flex", "flex-row", "country-card");
            resultCountriesEl.appendChild(countryCardEl);
            
            let countryFlagEl = document.createElement("img");
            countryFlagEl.src = eachCountry.flag;
            countryFlagEl.classList.add("country-flag", "mr-5");
            countryCardEl.appendChild(countryFlagEl);
            
            let descriptionContainerEl = document.createElement("div");
            descriptionContainerEl.classList.add("description-container");
            countryCardEl.appendChild(descriptionContainerEl);
            
            let countryNameEl = document.createElement("h1");
            countryNameEl.classList.add("country-name");
            countryNameEl.textContent = eachCountry.name;
            descriptionContainerEl.appendChild(countryNameEl);
            
            let countryPopulationEl =document.createElement("p");
            countryPopulationEl.classList.add("country-population");
            countryPopulationEl.textContent = eachCountry.population;
            descriptionContainerEl.appendChild(countryPopulationEl);
        }
    }
})




















