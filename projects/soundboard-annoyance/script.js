// LAYER 1: The Audio Arsenal (Data Layer)
const soundLibrary = [
    { id: 0, name: "Horn", emoji: "📯", file: "./sounds/horn.mp3", color: "#ff6a00" }, // Neon Orange
    { id: 1, name: "Laugh", emoji: "😂", file: "./sounds/laugh.mp3", color: "#ff00ff" }, // Pink
    { id: 2, name: "Beep", emoji: "🔊", file: "./sounds/beep.mp3", color: "#00ffff" }, // Cyan
    { id: 3, name: "Boing", emoji: "🪀", file: "./sounds/boing.mp3", color: "#00ff00" }, // Lime
    { id: 4, name: "Scream", emoji: "😱", file: "./sounds/scream.mp3", color: "#8a2be2" }, // Purple
    { id: 5, name: "Fail", emoji: "💀", file: "./sounds/fail.mp3", color: "#ff0000" }  // Red
];

// Pre-load hidden audio objects (Browser caches these so `new Audio()` is instant later)
const preloadedAudio = [];
soundLibrary.forEach(sound => {
    const audioObj = new Audio(sound.file);
    audioObj.load(); 
    preloadedAudio.push(audioObj);
});

// State Variables
let triggerCount = 0;
let globalVolume = 0.8;
let isMuted = false;
let preMuteVolume = 0.8;

// DOM Elements
const soundGrid = document.getElementById('soundGrid');
const counterBadge = document.getElementById('counterBadge');
const volumeSlider = document.getElementById('volumeSlider');
const toastContainer = document.getElementById('toastContainer');

// LAYER 3: The Spectacle - Generate UI Buttons dynamically
soundLibrary.forEach((sound, index) => {
    const btn = document.createElement('button');
    btn.className = 'sound-btn';
    btn.id = `btn-${sound.id}`;
    btn.style.setProperty('--btn-color', sound.color);
    btn.innerHTML = `
        <span class="emoji">${sound.emoji}</span>
        <span class="name">${sound.name}</span>
    `;

    // Click Event setup
    btn.addEventListener('click', (e) => triggerSound(index, e));
    soundGrid.appendChild(btn);
});

// LAYER 2: The Trigger Engine - Core Play Logic
function triggerSound(index, event = null) {
    const sound = soundLibrary[index];
    const btn = document.getElementById(`btn-${sound.id}`);

    // Double-click protection (Disable for 300ms)
    if (btn.disabled) return;
    btn.disabled = true;
    setTimeout(() => { btn.disabled = false; }, 300);

    // Play Audio (Overlap ON by default per instructions)
    const activeAudio = new Audio(sound.file);
    activeAudio.volume = globalVolume;
    activeAudio.play();

    // Active Animation (Glow while playing)
    btn.classList.add('playing');
    activeAudio.addEventListener('ended', () => {
        btn.classList.remove('playing');
    });

    // Ripple Effect Logic
    if (event && event.clientX) {
        createRipple(event, btn);
    } else {
        // Fallback for keyboard/random triggers
        createRippleCenter(btn);
    }

    // UI Updates
    showToast(`${sound.emoji} ${sound.name.toUpperCase()} BLASTED!`);
    updateCounter();
}

// Extra Chaos: Play All Staggered
document.getElementById('btnPlayAll').addEventListener('click', () => {
    soundLibrary.forEach((sound, index) => {
        setTimeout(() => {
            triggerSound(index);
        }, index * 500); // 0.5s staggered symphony of suffering
    });
});

// Random Button Logic
document.getElementById('btnRandom').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * soundLibrary.length);
    triggerSound(randomIndex);
});

// Volume Control Logic
volumeSlider.addEventListener('input', (e) => {
    globalVolume = parseFloat(e.target.value);
    isMuted = (globalVolume === 0);
});

// Visual Effects & Feedback
function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) { existingRipple.remove(); }
    button.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
}

function createRippleCenter(button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `0px`;
    circle.style.top = `0px`;
    circle.classList.add('ripple');
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 1500);
}

function updateCounter() {
    triggerCount++;
    counterBadge.innerText = `Sounds Triggered: ${triggerCount}`;
}

// Keyboard Shortcuts (Keys 1-6, R, V)
document.addEventListener('keydown', (e) => {
    // Keys 1 to 6 mapped to array indices 0 to 5
    if (e.key >= '1' && e.key <= '6') {
        const index = parseInt(e.key) - 1;
        triggerSound(index);
    }
    
    // 'r' or 'R' for Random
    if (e.key.toLowerCase() === 'r') {
        document.getElementById('btnRandom').click();
    }

    // 'v' or 'V' for Volume toggle (Mute/Unmute)
    if (e.key.toLowerCase() === 'v') {
        if (isMuted) {
            globalVolume = preMuteVolume;
            volumeSlider.value = globalVolume;
            isMuted = false;
        } else {
            preMuteVolume = globalVolume;
            globalVolume = 0;
            volumeSlider.value = 0;
            isMuted = true;
        }
    }
});