// --- DOM Elements ---
const input = document.getElementById('password-input');
const toggleBtn = document.getElementById('toggle-visibility');
const toggleIcon = toggleBtn.querySelector('i');
const progressBar = document.getElementById('progress-bar');
const ratingBadge = document.getElementById('rating-badge');
const feedbackText = document.getElementById('feedback-text');
const memeGif = document.getElementById('meme-gif');
const charCounter = document.getElementById('char-counter');
const root = document.documentElement;

// --- Meme Tier Database ---
const tiers = [
    { 
        max: 2, 
        name: "Garbage Tier 🗑️", 
        color: "#ff2a2a", 
        gif: "https://media.giphy.com/media/QVP7DawXZitKYg3AX5/giphy.gif", // Dumpster fire
        roasts: ["Did your cat type this?", "My grandma's Wi-Fi password is better.", "Absolute trash."]
    },
    { 
        max: 4, 
        name: "Bhai, Kya Kar Raha Hai? 🤦", 
        color: "#ff7f00", 
        gif: "https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif", // Facepalm
        roasts: ["Come on, put some effort in.", "A literal toddler could guess this.", "Bruh..."]
    },
    { 
        max: 6, 
        name: "Decent. But Noob. 😶", 
        color: "#ffd700", 
        gif: "https://media.giphy.com/media/G5X63GrrLjjVK/giphy.gif", // Shrug
        roasts: ["Average. Just like your grades.", "It'll survive a script kiddie. Maybe.", "Not terrible, not great."]
    },
    { 
        max: 8, 
        name: "Hacker's Snack 🍿", 
        color: "#00ff00", 
        gif: "https://media.giphy.com/media/tyqcJoNjNv0Fq/giphy.gif", // Popcorn
        roasts: ["Getting warmer...", "Now we're talking.", "Solid choice, keyboard warrior."]
    },
    { 
        max: 10, 
        name: "Hacker's Nightmare 💀", 
        color: "#00ffff", 
        gif: "https://media.giphy.com/media/YQitE4YNQBroM/giphy.gif", // Matrix Hacker
        roasts: ["NSA wants to hire you.", "You are the one, Neo.", "Calm down, Edward Snowden."]
    }
];

// --- Core Logic ---
function evaluatePassword(password) {
    if (!password) return -1; // Empty state
    
    // The Easter Egg 
    if (password === "affan_is_going_to_be_a_billionaire") return 999;

    let score = 0;

    // 1. Length Points (Max +5)
    if (password.length >= 5 && password.length <= 7) score += 1;
    else if (password.length >= 8 && password.length <= 11) score += 2;
    else if (password.length >= 12 && password.length <= 14) score += 3;
    else if (password.length >= 15) score += 5; 

    // 2. Character Variety (Max +5)
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 2;

    // 3. The Pattern Penalty
    const commonPatterns = ["123456", "password", "qwerty", "12345", "admin"];
    if (commonPatterns.some(pattern => password.toLowerCase().includes(pattern))) {
        score -= 3;
    }

    // Clamp score between 0 and 10
    return Math.max(0, Math.min(10, score));
}

function updateUI(score, length) {
    charCounter.textContent = `${length} chars • Feeling secure?`;

    // Handle empty state
    if (score === -1) {
        root.style.setProperty('--neon-color', '#555');
        ratingBadge.textContent = "Awaiting Input...";
        feedbackText.textContent = "Type your password... if you dare.";
        progressBar.style.width = '0%';
        memeGif.src = "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif";
        return;
    }

    // Handle Easter Egg
    if (score === 999) {
        root.style.setProperty('--neon-color', '#ff00ff');
        ratingBadge.textContent = "BILLIONAIRE SECURED 💰";
        feedbackText.textContent = "Alright, you win. Take my money.";
        progressBar.style.width = '100%';
        memeGif.src = "https://media.giphy.com/media/lptjRBxFKCJmFoibP3/giphy.gif"; // Make it rain GIF
        triggerBounce();
        return;
    }

    // Find the correct tier
    const tier = tiers.find(t => score <= t.max);
    
    // Update CSS Variable for glow effects
    root.style.setProperty('--neon-color', tier.color);

    // Only update GIF and trigger bounce if the tier actually changed
    if (ratingBadge.textContent !== tier.name) {
        ratingBadge.textContent = tier.name;
        memeGif.src = tier.gif;
        
        // Pick a random roast from the current tier array
        const randomRoast = tier.roasts[Math.floor(Math.random() * tier.roasts.length)];
        feedbackText.textContent = randomRoast;
        
        triggerBounce();
    }

    // Update Progress Bar
    progressBar.style.width = `${(score / 10) * 100}%`;
}

function triggerBounce() {
    ratingBadge.classList.remove('bounce');
    memeGif.parentElement.classList.remove('bounce');
    
    // Trigger reflow to restart animation
    void ratingBadge.offsetWidth;
    
    ratingBadge.classList.add('bounce');
    memeGif.parentElement.classList.add('bounce');
}

// --- Event Listeners ---

// Real-time typing listener
input.addEventListener('input', (e) => {
    const pwd = e.target.value;
    const score = evaluatePassword(pwd);
    updateUI(score, pwd.length);
});

// Show/Hide Password Toggle
toggleBtn.addEventListener('click', () => {
    if (input.type === 'password') {
        input.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
});