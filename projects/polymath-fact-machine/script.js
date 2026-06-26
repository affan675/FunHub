// ==========================================
// LAYER 1: THE FACT ARSENAL (Data Layer)
// ==========================================
const facts = [
  // Math
  { text: "There are more ways to shuffle a deck of cards than atoms on Earth.", category: "Math", emoji: "🧮" },
  { text: "0.999... repeating infinitely is exactly equal to 1. Not approximately, exactly.", category: "Math", emoji: "♾️" },
  { text: "A 'jiffy' is an actual unit of time. In computing, it's typically 1/100th of a second.", category: "Math", emoji: "⏱️" },
  { text: "If you fold a standard piece of paper 42 times, it will reach the moon.", category: "Math", emoji: "📄" },
  { text: "Graham's Number is so large that the observable universe is far too small to contain an ordinary digital representation of it.", category: "Math", emoji: "🌌" },
  { text: "10! (10 factorial) seconds is exactly equal to 6 weeks.", category: "Math", emoji: "📆" },
  { text: "If you have a pizza with radius 'z' and thickness 'a', its volume is pi * z * z * a.", category: "Math", emoji: "🍕" },
  { text: "The Birthday Paradox: In a room of just 23 people, there's a 50% chance two share a birthday.", category: "Math", emoji: "🎂" },
  { text: "A shape with infinite perimeter but finite surface area exists. It's called Gabriel's Horn.", category: "Math", emoji: "🎺" },
  { text: "Zero is the only number that cannot be represented in Roman numerals.", category: "Math", emoji: "0️⃣" },
  
  // Science
  { text: "Bananas are technically berries, but strawberries aren't.", category: "Science", emoji: "🍌" },
  { text: "Octopuses have three hearts, nine brains, and blue blood.", category: "Science", emoji: "🐙" },
  { text: "Hot water can freeze faster than cold water. This is known as the Mpemba effect.", category: "Science", emoji: "🧊" },
  { text: "Space smells like a combination of diesel fumes, gunpowder, and seared steak.", category: "Science", emoji: "🥩" },
  { text: "A day on Venus is longer than a year on Venus.", category: "Science", emoji: "🪐" },
  { text: "If uncoiled, the DNA in all the cells in your body would stretch to Pluto and back.", category: "Science", emoji: "🧬" },
  { text: "Stomach acid is strong enough to dissolve stainless steel razor blades.", category: "Science", emoji: "🧪" },
  { text: "Honey never spoils. Archaeologists found pots of honey in ancient Egyptian tombs that are over 3,000 years old.", category: "Science", emoji: "🍯" },
  { text: "Helium changes our voice because it's less dense than oxygen, making sound travel faster.", category: "Science", emoji: "🎈" },
  { text: "Humans share 50% of their DNA with bananas.", category: "Science", emoji: "🐒" },

  // Business / Empire
  { text: "Apple was founded in a garage — Affan started in a JNV hostel.", category: "Business", emoji: "🍏" },
  { text: "Blockbuster passed on buying Netflix for $50 million in 2000. Netflix is now worth over $250 billion.", category: "Business", emoji: "🍿" },
  { text: "Nintendo was founded in 1889 as a playing card company.", category: "Business", emoji: "🎮" },
  { text: "Amazon was originally going to be called 'Cadabra' (as in abracadabra).", category: "Business", emoji: "📦" },
  { text: "McDonald's isn't technically a food company; they are a real estate empire.", category: "Business", emoji: "🍔" },
  { text: "Ronald Wayne, the 3rd co-founder of Apple, sold his 10% stake for $800 in 1976. It would be worth billions today.", category: "Business", emoji: "💸" },
  { text: "Samsung originally started in 1938 as a grocery trading store selling noodles.", category: "Business", emoji: "🍜" },
  { text: "Google’s name was an accident. The founders misspelled the math term 'Googol'.", category: "Business", emoji: "🔍" },
  { text: "FedEx was saved from bankruptcy when its founder took the company's last $5,000 to Vegas and won $27,000 playing blackjack.", category: "Business", emoji: "✈️" },
  { text: "Volkswagen group owns Bugatti, Bentley, Lamborghini, Porsche, and Audi.", category: "Business", emoji: "🚗" }
];

// ==========================================
// LAYER 2 & 3: ENGINE & DISPLAY LOGIC
// ==========================================

// State Variables
let usedIndices = [];
let currentCategory = localStorage.getItem('polymathCategory') || "All";
let totalFactsShown = parseInt(localStorage.getItem('polymathCount')) || 0;
let lastFactText = localStorage.getItem('polymathLastFact') || "";

// Timer & Animation State
let timerId = null;
let startTime = 0;
let currentDuration = 0;
let animFrameId = null;

// DOM Elements
const factTextEl = document.getElementById('fact-text');
const factEmojiEl = document.getElementById('fact-emoji');
const tickerTextEl = document.getElementById('ticker-text');
const counterEl = document.getElementById('fact-counter');
const filterBtns = document.querySelectorAll('.filter-btn');
const progressCircle = document.querySelector('.progress-ring__indicator');
const cardEl = document.getElementById('fact-card');

// SVG Ring Setup
const radius = progressCircle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

// Audio API Setup
const synth = window.speechSynthesis;

// 1. Initialize System
function init() {
  updateFilterUI();
  counterEl.innerText = `Fact #${totalFactsShown}`;

  // Enforce the specific first fact on absolute first load
  if (!localStorage.getItem('polymathInitialized')) {
    localStorage.setItem('polymathInitialized', 'true');
    displayFact({ text: "Affan built this while his hostel warden thought he was sleeping.", category: "Business", emoji: "🔥" }, true);
  } else if (lastFactText) {
    // Restore last fact on refresh
    const restoredFact = facts.find(f => f.text === lastFactText) || facts[0];
    displayFact(restoredFact, true);
  } else {
    triggerNextFact();
  }
}

// 2. Fact Selection Logic
function triggerNextFact() {
  const filteredFacts = currentCategory === "All" 
    ? facts 
    : facts.filter(f => f.category === currentCategory);

  // Reset pool if 80% used
  if (usedIndices.length >= Math.floor(filteredFacts.length * 0.8)) {
    usedIndices = [];
  }

  // Get available indices
  const availableIndices = filteredFacts
    .map((_, index) => index)
    .filter(index => !usedIndices.includes(index));

  // Pick random
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  usedIndices.push(randomIndex);
  
  displayFact(filteredFacts[randomIndex]);
}

// 3. Display & Glitch Animation
function displayFact(fact, isInit = false) {
  // Update Ticker with previous fact
  if (!isInit && factTextEl.innerText) {
    tickerTextEl.innerText = `PREVIOUS FACT: ${factTextEl.innerText}`;
  }

  // Glitch Effect
  cardEl.classList.add('glitch');
  setTimeout(() => cardEl.classList.remove('glitch'), 150);

  // Update DOM
  factTextEl.innerText = fact.text;
  factEmojiEl.innerText = fact.emoji;

  // Update Counters & Storage
  if (!isInit) totalFactsShown++;
  counterEl.innerText = `Fact #${totalFactsShown}`;
  
  localStorage.setItem('polymathLastFact', fact.text);
  localStorage.setItem('polymathCount', totalFactsShown);

  startTimer();
}

// 4. Timer & Progress Ring Logic
function startTimer() {
  clearTimeout(timerId);
  cancelAnimationFrame(animFrameId);

  // Randomize between 5000ms and 7000ms
  currentDuration = Math.floor(Math.random() * 2000) + 5000;
  startTime = Date.now();

  timerId = setTimeout(() => {
    triggerNextFact();
  }, currentDuration);

  animateRing();
}

function animateRing() {
  const elapsed = Date.now() - startTime;
  const progress = Math.min(elapsed / currentDuration, 1);
  
  // Calculate offset (fills up)
  const offset = circumference - (progress * circumference);
  progressCircle.style.strokeDashoffset = offset;

  if (progress < 1) {
    animFrameId = requestAnimationFrame(animateRing);
  }
}

// 5. User Controls
document.getElementById('surprise-btn').addEventListener('click', () => {
  triggerNextFact();
});

document.getElementById('share-btn').addEventListener('click', () => {
  const textToShare = `${factTextEl.innerText} #PolymathFact`;
  navigator.clipboard.writeText(textToShare).then(() => {
    const btn = document.getElementById('share-btn');
    btn.innerText = "✅ Copied!";
    setTimeout(() => btn.innerText = "🔗 Share Fact", 2000);
  });
});

document.getElementById('voice-btn').addEventListener('click', () => {
  if (synth.speaking) {
    synth.cancel();
    return;
  }
  const utterThis = new SpeechSynthesisUtterance(factTextEl.innerText);
  // Optional: Set a specific voice/pitch to make it robotic
  utterThis.pitch = 0.5;
  utterThis.rate = 0.9;
  synth.speak(utterThis);
});

// 6. Filtering System
filterBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentCategory = e.target.dataset.category;
    localStorage.setItem('polymathCategory', currentCategory);
    usedIndices = []; // Reset pool on category change
    updateFilterUI();
    triggerNextFact();
  });
});

function updateFilterUI() {
  filterBtns.forEach(btn => {
    if (btn.dataset.category === currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Start the engine
init();