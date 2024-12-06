// En liste med eksempeldata
const streets = [
    { name: "Munkegata", image: "munkegata.jpg" },
    { name: "Dronningens gate", image: "dronningensgate.jpg" },
    { name: "Kongens gate", image: "kongensgate.jpg" }
];

// Startspillvariabler
let currentStreet = null;
let score = 0; // Poengstarter på 0

// Velg et tilfeldig gatenavn og bilde
function pickRandomStreet() {
    const randomIndex = Math.floor(Math.random() * streets.length);
    currentStreet = streets[randomIndex];
    document.getElementById("street-image").src = currentStreet.image;

    // Generer svaralternativer
    generateOptions();
}

// Generer svaralternativer
function generateOptions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; // Fjern gamle alternativer

    // Kopier gatenavn og bland rekkefølgen
    const shuffledOptions = [...streets]
        .sort(() => Math.random() - 0.5)
        .map(street => street.name);

    // Legg til alternativene som knapper
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Sjekk om valgt alternativ er riktig
function checkAnswer(selectedOption) {
    const feedback = document.getElementById("feedback");
    if (selectedOption === currentStreet.name) {
        score++; // Øk poengene med 1
        document.getElementById("score").textContent = `Poeng: ${score}`; // Oppdater poengvisningen
        feedback.textContent = "Riktig! Går til neste bilde...";
        feedback.style.color = "green";

        // Gå til neste bilde etter en kort pause
        setTimeout(() => {
            feedback.textContent = "";
            pickRandomStreet();
        }, 1500);
    } else {
        feedback.textContent = "Feil! Prøv igjen.";
        feedback.style.color = "red";
    }
}

// Start spillet
pickRandomStreet();
