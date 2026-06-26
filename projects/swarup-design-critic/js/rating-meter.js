import { randomFloat } from './utils.js';

const needle = document.getElementById('meter-needle');
const scoreDisplay = document.getElementById('rating-score');

export function updateMeter() {
    // Generate a number strictly below 4.0
    const rating = parseFloat(randomFloat(0.5, 3.9));
    scoreDisplay.textContent = `${rating} / 10`;

    // Map 0-10 rating to degrees (-90 to 90)
    // 0 = -90deg, 10 = 90deg. Since max is 3.9, needle won't go past ~ -20deg
    const degrees = (rating / 10) * 180 - 90;

    needle.style.setProperty('--angle', `${degrees}deg`);
    needle.classList.add('jitter');

    // Remove jitter after a second to settle
    setTimeout(() => {
        needle.classList.remove('jitter');
        needle.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
    }, 1000);

    return rating;
}