const sentences = [
    // Subject Pronouns
    { sentence: "___ is my best friend.", correct: "He" },
    { sentence: "___ are very kind.", correct: "You" },
    { sentence: "___ love playing soccer.", correct: "They" },
    { sentence: "___ am reading a book.", correct: "I" },
    { sentence: "___ is a teacher.", correct: "She" },
    { sentence: "___ is barking loudly.", correct: "It" },
    { sentence: "___ are going to the park.", correct: "We" },
    { sentence: "___ is my brother.", correct: "He" },
    { sentence: "___ are my best friends.", correct: "They" },
    { sentence: "___ is sunny today.", correct: "It" },

    // Object Pronouns
    { sentence: "I saw ___ at the park.", correct: "him" },
    { sentence: "She invited ___ to her party.", correct: "us" },
    { sentence: "They are looking for ___.", correct: "me" },
    { sentence: "I will help ___ with homework.", correct: "you" },
    { sentence: "We gave ___ a gift.", correct: "him" },
    { sentence: "Can you call ___ later?", correct: "her" },
    { sentence: "The dog is following ___.", correct: "them" },
    { sentence: "He explained it to ___.", correct: "me" },
    { sentence: "They saw ___ yesterday.", correct: "her" },
    { sentence: "The teacher praised ___.", correct: "us" },

    // Possessive Pronouns
    { sentence: "That pen is ___.", correct: "mine" },
    { sentence: "The house is ___.", correct: "theirs" },
    { sentence: "This car is ___.", correct: "ours" },
    { sentence: "The bag is ___.", correct: "hers" },
    { sentence: "That book is ___.", correct: "his" },
    { sentence: "The decision is ___.", correct: "yours" },
    { sentence: "This tail is ___.", correct: "its" },
    { sentence: "These toys are ___.", correct: "theirs" },
    { sentence: "The responsibility is ___.", correct: "mine" },
    { sentence: "The victory is ___.", correct: "ours" }
];

let currentSentenceIndex = 0;
const sentenceElement = document.getElementById("sentence");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");

function getRandomOptions(correctOption) {
    const allOptions = ["I", "You", "He", "She", "It", "We", "They", "me", "you", "him", "her", "us", "them", "mine", "yours", "his", "hers", "its", "ours", "theirs"];
    const randomOptions = allOptions.filter(option => option !== correctOption);
    const selectedOptions = randomOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
    selectedOptions.push(correctOption);
    return selectedOptions.sort(() => 0.5 - Math.random());
}

function loadSentence() {
    const currentSentence = sentences[currentSentenceIndex];
    sentenceElement.textContent = currentSentence.sentence;
    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";

    const options = getRandomOptions(currentSentence.correct);
    options.forEach(option => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = sentences[currentSentenceIndex].correct;
    if (selected === correct) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Try again!";
        feedbackElement.style.color = "red";
    }

    setTimeout(() => {
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        loadSentence();
    }, 1500);
}

loadSentence();
