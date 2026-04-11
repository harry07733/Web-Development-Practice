let showAllBtnEl = document.getElementById("showAllBtn");
let myGithubBtnEl = document.getElementById("myGithubBtn");
let myEducationBtnEl = document.getElementById("myEducationBtn");
let letsConnectBtnEl = document.getElementById("letsConnectBtn");
let myExperienceContainerEl = document.getElementById("myExperienceContainer");

let myExperience = [{
        heading: "Web Development Projects",
        description: "Here I apply my webdev skills for developing different projects.",
        link: "https://github.com/harry07733/Web-Development-Practice",
        genre: "github"
    },
    {
        heading: "Competative Programing",
        description: "Here I practice concepts of DSA and the contests that I attended.",
        link: "https://github.com/harry07733/Competitive_Programming",
        genre: "github"
    },
    {
        heading: "10th Performance",
        description: "A single peice of paper can't decide my Future!!",
        link: null,
        genre: "education"
    },
    {
        heading: "12th Performance",
        description: "A single peice of paper can't decide my Future!!",
        link: null,
        genre: "education"
    },
    {
        heading: "BTech CSE at IGIT, Sarang",
        description: "stil the same statement. Can't repeat multiple times bro.",
        link: null,
        genre: "education"
    }
];

function displayAllExperience(myExperience) {
    for (let eachExperience of myExperience) {
        let experienceCardEl = document.createElement("div");
        experienceCardEl.classList.add("experience-card");
        myExperienceContainerEl.appendChild(experienceCardEl);

        let h1El = document.createElement("h1");
        h1El.classList.add("card-heading");
        h1El.textContent = eachExperience.heading;
        experienceCardEl.appendChild(h1El);

        let descEl = document.createElement("p");
        descEl.classList.add("card-description");
        descEl.textContent = eachExperience.description;
        experienceCardEl.appendChild(descEl);

        let hrEl = document.createElement("hr");
        experienceCardEl.appendChild(hrEl);

        let visitSectionEl = document.createElement("div");
        visitSectionEl.classList.add("visit-section");
        experienceCardEl.appendChild(visitSectionEl);

        let paraEl = document.createElement("p");
        paraEl.classList.add("plz-visit");
        paraEl.textContent = "Please visit";
        visitSectionEl.appendChild(paraEl);

        let anchorEl = document.createElement("a");
        anchorEl.setAttribute("href", eachExperience.link);
        visitSectionEl.appendChild(anchorEl);

        let iconEl = document.createElement("i");
        iconEl.classList.add("fa-solid", "fa-circle-arrow-right", "visiting-arrow");
        anchorEl.appendChild(iconEl);
    }
}
displayAllExperience(myExperience);

showAllBtnEl.addEventListener("click", () => {
    myExperienceContainerEl.textContent = "";

    for (let eachExperience of myExperience) {
        let experienceCardEl = document.createElement("div");
        experienceCardEl.classList.add("experience-card");
        myExperienceContainerEl.appendChild(experienceCardEl);

        let h1El = document.createElement("h1");
        h1El.classList.add("card-heading");
        h1El.textContent = eachExperience.heading;
        experienceCardEl.appendChild(h1El);

        let descEl = document.createElement("p");
        descEl.classList.add("card-description");
        descEl.textContent = eachExperience.description;
        experienceCardEl.appendChild(descEl);

        let hrEl = document.createElement("hr");
        experienceCardEl.appendChild(hrEl);

        let visitSectionEl = document.createElement("div");
        visitSectionEl.classList.add("visit-section");
        experienceCardEl.appendChild(visitSectionEl);

        let paraEl = document.createElement("p");
        paraEl.classList.add("plz-visit");
        paraEl.textContent = "Please visit";
        visitSectionEl.appendChild(paraEl);

        let anchorEl = document.createElement("a");
        anchorEl.setAttribute("href", eachExperience.link);
        visitSectionEl.appendChild(anchorEl);

        let iconEl = document.createElement("i");
        iconEl.classList.add("fa-solid", "fa-circle-arrow-right", "visiting-arrow");
        anchorEl.appendChild(iconEl);
    }

});

myGithubBtnEl.addEventListener("click", () => {
    myExperienceContainerEl.textContent = "";

    for (let eachExperience of myExperience) {
        if (eachExperience.genre === "github") {
            let experienceCardEl = document.createElement("div");
            experienceCardEl.classList.add("experience-card");
            myExperienceContainerEl.appendChild(experienceCardEl);

            let h1El = document.createElement("h1");
            h1El.classList.add("card-heading");
            h1El.textContent = eachExperience.heading;
            experienceCardEl.appendChild(h1El);

            let descEl = document.createElement("p");
            descEl.classList.add("card-description");
            descEl.textContent = eachExperience.description;
            experienceCardEl.appendChild(descEl);

            let hrEl = document.createElement("hr");
            experienceCardEl.appendChild(hrEl);

            let visitSectionEl = document.createElement("div");
            visitSectionEl.classList.add("visit-section");
            experienceCardEl.appendChild(visitSectionEl);

            let paraEl = document.createElement("p");
            paraEl.classList.add("plz-visit");
            paraEl.textContent = "Please visit";
            visitSectionEl.appendChild(paraEl);

            let anchorEl = document.createElement("a");
            anchorEl.setAttribute("href", eachExperience.link);
            visitSectionEl.appendChild(anchorEl);

            let iconEl = document.createElement("i");
            iconEl.classList.add("fa-solid", "fa-circle-arrow-right", "visiting-arrow");
            anchorEl.appendChild(iconEl);
        }
    }
});

myEducationBtnEl.addEventListener("click", () => {
    myExperienceContainerEl.textContent = "";

    for (let eachExperience of myExperience) {
        if (eachExperience.genre === "education") {
            let experienceCardEl = document.createElement("div");
            experienceCardEl.classList.add("experience-card");
            myExperienceContainerEl.appendChild(experienceCardEl);

            let h1El = document.createElement("h1");
            h1El.classList.add("card-heading");
            h1El.textContent = eachExperience.heading;
            experienceCardEl.appendChild(h1El);

            let descEl = document.createElement("p");
            descEl.classList.add("card-description");
            descEl.textContent = eachExperience.description;
            experienceCardEl.appendChild(descEl);

            let hrEl = document.createElement("hr");
            experienceCardEl.appendChild(hrEl);

            let visitSectionEl = document.createElement("div");
            visitSectionEl.classList.add("visit-section");
            experienceCardEl.appendChild(visitSectionEl);

            let paraEl = document.createElement("p");
            paraEl.classList.add("plz-visit");
            paraEl.textContent = "Please visit";
            visitSectionEl.appendChild(paraEl);

            let anchorEl = document.createElement("a");
            anchorEl.setAttribute("href", eachExperience.link);
            visitSectionEl.appendChild(anchorEl);

            let iconEl = document.createElement("i");
            iconEl.classList.add("fa-solid", "fa-circle-arrow-right", "visiting-arrow");
            anchorEl.appendChild(iconEl);
        }
    }
});

letsConnectBtnEl.addEventListener("click", () => {});