import { parseHex } from './utils.js';
import { getColorInfo } from './color-mapper.js';
import { getRoast } from './roast-engine.js';
import { updateVerdict } from './verdict.js';
import { addToHall, loadHall } from './hall-of-shame.js';
import { updateMeter } from './rating-meter.js';

// DOM Elements
const colorPicker = document.getElementById('color-picker');
const mainSwatch = document.getElementById('main-swatch');
const critiqueBtn = document.getElementById('critique-btn');
const rejectedStamp = document.getElementById('rejected-stamp');
const swarupSig = document.getElementById('swarup-sig');
const streakBanner = document.getElementById('streak-banner');

// State
let streak = 0;

function runCritique() {
    const hex = colorPicker.value;
    const rgb = parseHex(hex);
    
    // 1. Handle Dark Mode Logic
    if (hex.toLowerCase() === '#000000') {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }

    // 2. Fetch Data
    const { name, family } = getColorInfo(hex);
    let roast = getRoast(family);
    
    // Dark mode override roast
    if (hex.toLowerCase() === '#000000') {
        roast = "You're already in the void. No hope.";
    }

    // 3. Update DOM
    mainSwatch.style.backgroundColor = hex;
    updateVerdict({ hex, rgb, name, roast });
    const rating = updateMeter();

    // 4. Handle Visual Stamps
    rejectedStamp.classList.remove('hidden');
    setTimeout(() => rejectedStamp.classList.add('hidden'), 2000);
    swarupSig.classList.remove('hidden');

    // 5. Streak Management
    if (rating < 2) {
        streak++;
        if (streak >= 5) streakBanner.classList.remove('hidden');
    } else {
        streak = 0;
        streakBanner.classList.add('hidden');
    }

    // 6. Hall of Shame Logic (30% Critical hit OR rating < 1.0)
    const isCritical = Math.random() < 0.3 || rating < 1.0;
    if (isCritical) {
        addToHall({
            hex,
            roast,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
    }
}

// Event Listeners
colorPicker.addEventListener('input', (e) => {
    mainSwatch.style.backgroundColor = e.target.value;
});
colorPicker.addEventListener('change', runCritique);
critiqueBtn.addEventListener('click', runCritique);

// Init
window.addEventListener('DOMContentLoaded', () => {
    loadHall();
    // Trigger initial state
    runCritique();
});