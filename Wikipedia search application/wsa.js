let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        let searchedItem = searchInputEl.value;
        let options = {
            method: "GET"
        };
        let requestedURL = "https://apis.ccbp.in/wiki-search?search=" + searchedItem;
        fetch(requestedURL, options)
            .then(response => response.json())
            .then(jsonData => {
                for (let eachItem of jsonData.search_results) {
                    let resultItemEl = document.createElement("div");
                    resultItemEl.classList.add("result-item", "mt-3");
                    searchResultsEl.appendChild(resultItemEl);

                    let headingEl = document.createElement("h1");
                    headingEl.classList.add("text-primary", "heading");
                    headingEl.textContent = eachItem.title;
                    resultItemEl.appendChild(headingEl);

                    let textLinkEl = document.createElement("a");
                    textLinkEl.href = eachItem.link;
                    textLinkEl.textContent = eachItem.link;
                    textLinkEl.classList.add("text-success");
                    resultItemEl.appendChild(textLinkEl);

                    let descriptionEl = document.createElement("p");
                    descriptionEl.classList.add("description");
                    descriptionEl.textContent = eachItem.description;
                    resultItemEl.appendChild(descriptionEl);
                }
            });
    }
})