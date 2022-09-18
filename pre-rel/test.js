const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-container]")
const searchBar = document.querySelector("[data-search]")

/* Search bar */

let f_a_q = [];
const inputBar = document.getElementById("search");

searchBar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    f_a_q.forEach(verification => {
			console.log(verification.description);
			const isVisible = verification.question.toLowerCase().includes(value) || verification.description.toLowerCase().includes(value)
        verification.element.classList.toggle("trueinvisibility", !isVisible)
    })
})

/* Api to get the faq */
fetch("./smth.json")
    .then(response => response.json())
    .then( data => {
        f_a_q = data.map(faq => {
            /* clone card and give document fragment */
            const card = userCardTemplate.content.cloneNode(true).children[0]
            /* Find the data attributes of the two cards */
            const question = card.querySelector("[questions]")
            const answer = card.querySelector("[answers]")
            /* Change the text in them */
            question.textContent = faq.Header
            console.log(faq.id)
            answer.innerHTML = faq.Description
            console.log(faq.Description)
            /* Create a card for the content to fit in */
            userCardContainer.append(card)
            console.log(faq)
            return { question: faq.Header, description: faq.Description, element: card }
        });
    })



document.addEventListener("click", e => {
    console.log(e.target)
})