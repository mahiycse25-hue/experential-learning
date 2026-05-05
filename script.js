const card = document.getElementById("card");
const frontText = document.getElementById("frontText");
const backText = document.getElementById("backText");

const words = [
    { eng: "Ephemeral", trans: "Efimero" },
    { eng: "Happy", trans: "Feliz" },
    { eng: "Book", trans: "Libro" },
    { eng: "Water", trans: "Agua" },
    { eng: "Friend", trans: "Amigo" }
];

let index = 0;

// Flip card
card.addEventListener("click", function () {
    card.classList.toggle("flipped");
});

// Next card
function nextCard() {
    index = (index + 1) % words.length;

    frontText.textContent = words[index].eng;
    backText.textContent = words[index].trans;

    card.classList.remove("flipped");
}
