const STORAGE_KEY = 'swarupHallOfShame';
const shameListEl = document.getElementById('shame-list');
const clearBtn = document.getElementById('clear-hall-btn');

export function loadHall() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    renderHall(data);
}

export function addToHall(entry) {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    data.unshift(entry); // Add to beginning
    if (data.length > 3) data.pop(); // Keep only 3
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    renderHall(data);
}

export function clearHall() {
    localStorage.removeItem(STORAGE_KEY);
    renderHall([]);
}

function renderHall(data) {
    shameListEl.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'shame-item';
        li.innerHTML = `
            <div class="shame-top">
                <div class="shame-swatch" style="background-color: ${item.hex}"></div>
                <span class="shame-hex">${item.hex.toUpperCase()}</span>
            </div>
            <p class="shame-roast">"${item.roast}"</p>
            <div class="shame-date">${item.date}</div>
        `;
        shameListEl.appendChild(li);
    });
}

clearBtn.addEventListener('click', clearHall);