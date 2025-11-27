const form = document.querySelector('form');
const result = document.getElementById("result");
const input = document.getElementById("input");
const textError = document.getElementById("textError");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addValue();
});

// listen to enter key
form.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        addValue();
    }
});

async function getWordInfo(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) throw new Error("Sorry! Word Not Found");
        const data = await response.json();

        if (!Array.isArray(data) || !data[0]?.meanings?.length) {
            throw new Error("Meaning data not available");
        }

        const definitionObj = data[0].meanings[0].definitions[0];
        const antonyms = definitionObj.antonyms || [];

        result.classList.add("bg-result");
        
        result.innerHTML = `
        <h1><strong>Word:</strong> ${data[0].word}</h1>
        <p><strong>Speech:</strong> ${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meanings:</strong> ${definitionObj.definition || "Not Found"}</p>
        <p><strong>Examples:</strong> ${definitionObj.example || "Not Found"}</p>
        <p><strong>Antonyms:</strong></p>
        `;
        
        if (antonyms.length === 0) {
            result.innerHTML += "<p>Not Found</p>";
        } else {
            result.innerHTML += "<ul>" + antonyms.map(a => `<li>${a}</li>`).join('') + "</ul>";
        }
        
        const sourceUrl = Array.isArray(data[0].sourceUrls) ? data[0].sourceUrls[0] : "#";
        result.innerHTML += `<div><a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Read More <i class="fa-solid fa-angle-right"></i></a></div>`;
        
    } catch (error) {
        result.classList.remove("bg-result");
        result.innerHTML = `<p class="error-text">${error.message}</p>`;
    }
}

function addValue() {
    const word = input.value.trim();
    if (!word) {
        textError.textContent = "You Must Write Something";
        setTimeout(() => {
            textError.textContent = "";
        }, 2000);
        return;
    }
    getWordInfo(word);
    input.value = "";
}

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar