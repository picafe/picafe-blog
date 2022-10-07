const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-container]")
const searchBar = document.querySelector("[data-search]")

/* Search bar */

let articles = [];
const inputBar = document.getElementById("search");

searchBar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    articles.forEach(verification => {
			console.log(verification.description);
			const isVisible = verification.question.toLowerCase().includes(value) || verification.description.toLowerCase().includes(value)
        verification.element.classList.toggle("trueinvisibility", !isVisible)
    })
})


/* Api to get the faq */
fetch("./articles.json")
    .then(response => response.json())
    .then( data => {
        articles = data.map(list => {
            /* clone card and give document fragment */
            const card = userCardTemplate.content.cloneNode(true).children[0]
            /* Find the data attributes of the two cards */
            const question = card.querySelector("[title]")
            const answer = card.querySelector("[description]")
            /* Change the text in them */
            question.innerHTML = list.Header
            console.log(list.id)
            answer.innerHTML = list.Description
            console.log(list.Description)
            /* Create a card for the content to fit in */
            userCardContainer.append(card)
            console.log(list)
            return { question: list.Header, description: list.Description, element: card }
        });
    })



document.addEventListener("click", e => {
    console.log(e.target)
})