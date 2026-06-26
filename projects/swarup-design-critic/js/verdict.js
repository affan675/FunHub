import { rgbToPercent } from './utils.js';

const card = document.getElementById('verdict-card');
const hexEl = document.getElementById('v-hex');
const nameEl = document.getElementById('v-name');
const roastEl = document.getElementById('v-roast');
const breakdownEl = document.getElementById('v-breakdown');
const copyBtn = document.getElementById('copy-btn');

let currentRoastText = '';

export function updateVerdict(data) {
    const { hex, rgb, name, roast } = data;
    currentRoastText = roast;

    // Flip away
    card.classList.remove('flipped');
    
    // Wait for half the flip animation to change content
    setTimeout(() => {
        hexEl.textContent = hex.toUpperCase();
        nameEl.textContent = name;
        roastEl.textContent = roast;
        
        const percents = rgbToPercent(rgb.r, rgb.g, rgb.b);
        breakdownEl.innerHTML = `
            R: ${percents.r}% | G: ${percents.g}% | B: ${percents.b}%<br>
            <span style="color: #e74c3c">This balance is mathematically offensive.</span>
        `;
        
        // Flip back to reveal
        card.classList.add('flipped');
    }, 400); 
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(currentRoastText).then(() => {
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span style="color: lime; font-weight: bold;">Copied!</span>';
        setTimeout(() => copyBtn.innerHTML = originalIcon, 2000);
    });
});