const checkBox = document.querySelector("#bg-check");
const header = document.querySelector(".header");
const mediumCards = document.querySelectorAll(".medium-card");
const smallCards = document.querySelectorAll(".overview-card");
const heading = document.querySelector(".heading");
const numbers = document.querySelectorAll("h2");
const counts = document.querySelectorAll(".count");
const cardTitles = document.querySelectorAll(".overview-tittle");
const subheaders = document.querySelectorAll(".subheader");

checkBox.addEventListener('change', function () {
    if (this.checked) {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
        heading.style.color = "#fff";
        mediumCards.forEach(card => {
            card.style.backgroundColor = "hsl(228, 28%, 20%)";
        })
        smallCards.forEach(card => {
            card.style.backgroundColor = "hsl(228, 28%, 20%)";
        })
        numbers.forEach(num => {
            num.style.color = "#fff";
        })
        counts.forEach(count => {
            count.style.color = "#fff";
        })
        cardTitles.forEach(el => {
            el.style.color = "hsl(228, 34%, 66%)";
        })
        subheaders.forEach(el => {
            el.style.color = "hsl(228, 34%, 66%)";
        })
    } else {
        document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        heading.style.color = "#000";
        mediumCards.forEach(card => {
            card.style.backgroundColor = "hsl(227, 47%, 96%)";
        })
        smallCards.forEach(card => {
            card.style.backgroundColor = "hsl(227, 47%, 96%)";
        })
        numbers.forEach(num => {
            num.style.color = "#000";
        })
        counts.forEach(count => {
            count.style.color = "#000";
        })
        cardTitles.forEach(el => {
            el.style.color = "hsl(228, 12%, 44%)";
        })
        subheaders.forEach(el => {
            el.style.color = "hsl(228, 12%, 44%)";
        })
    }
});