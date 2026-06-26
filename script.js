(function () {
    'use strict';

    // ── 🛠️ DOM REFERENCES ────────────────────
    const grid = document.getElementById('project-grid');
    const searchInput = document.getElementById('search-input');
    const btnSurprise = document.getElementById('btn-surprise');
    const noResults = document.getElementById('no-results');
    const projectCountEl = document.getElementById('project-count');
    const geniusLabel = document.getElementById('genius-label');

    // ── 🧩 POPULATE CARD INNER HTML FROM DATA ATTRIBUTES ──
    function buildCards() {
        const cards = grid.querySelectorAll('.card');
        cards.forEach((card, index) => {
            const title = card.dataset.title;
            const emoji = card.dataset.emoji;
            const description = card.dataset.description;
            const color = card.dataset.color;
            const id = index + 1; // use index for badge number, or you can add data-id later

            // Set CSS custom property for glow color
            card.style.setProperty('--card-glow-color', color);
            // Set staggered animation delay
            card.style.animationDelay = `${index * 50}ms`;

            // Inject inner structure
            card.innerHTML = `
                <span class="card-emoji" aria-hidden="true">${emoji}</span>
                <span class="card-title">${title}</span>
                <span class="card-desc">${description}</span>
                <span class="card-badge" aria-hidden="true">#${id}</span>
                <span class="card-arrow" aria-hidden="true">→</span>
            `;

            // Store lowercase title and description for search
            card.dataset.titleLower = title.toLowerCase();
            card.dataset.descLower = description.toLowerCase();
        });
    }

    // ── 📊 UPDATE PROJECT COUNTER ────────────
    function updateCounter() {
        const total = grid.querySelectorAll('.card').length;
        projectCountEl.textContent = total;
        geniusLabel.textContent = total >= 10 ? '1 Genius' : '1 Mad Lad';
    }

    // ── 🔍 SEARCH LOGIC ──────────────────────
    function filterCards() {
        const query = searchInput.value.trim().toLowerCase();
        const cards = grid.querySelectorAll('.card');
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.dataset.titleLower || '';
            const desc = card.dataset.descLower || '';
            const matches = title.includes(query) || desc.includes(query);

            if (matches) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0 && query.length > 0) {
            noResults.classList.add('visible');
        } else {
            noResults.classList.remove('visible');
        }
    }

    // ── 🧠 DEVICE / MOBILE DETECTION ──────────
    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    // ── 🎯 NAVIGATION HANDLER (based on action type) ──
    function handleCardClick(cardElement) {
        const actionType = cardElement.dataset.actionType;
        const liveUrl = cardElement.dataset.liveUrl;
        const localUrl = cardElement.dataset.localUrl;
        const downloadUrl = cardElement.dataset.downloadUrl;

        // Prevent rapid double-clicks
        if (cardElement.classList.contains('card-clicked')) return;

        // Add pop animation
        cardElement.classList.add('card-clicked');

        const navigate = (url) => {
            setTimeout(() => {
                window.location.href = url;
            }, 200);
        };

        const showToast = (message) => {
            // Simple temporary toast (could be replaced with a nicer one)
            const toast = document.createElement('div');
            toast.textContent = message;
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.background = '#1a1f2b';
            toast.style.color = '#e8eaef';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = '50px';
            toast.style.border = '1px solid rgba(255,255,255,0.1)';
            toast.style.zIndex = '9999';
            toast.style.fontSize = '0.9rem';
            toast.style.backdropFilter = 'blur(12px)';
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.remove();
            }, 2500);
        };

        switch (actionType) {
            case 'live':
                if (liveUrl) navigate(liveUrl);
                break;

            case 'local':
                if (localUrl) {
                    if (isMobileDevice()) {
                        showToast('📱 Opening local file. For full experience, use a desktop with Live Server.');
                    }
                    navigate(localUrl);
                }
                break;

            case 'download':
                if (downloadUrl) {
                    if (isMobileDevice()) {
                        // On mobile, fallback to local HTML if available
                        if (localUrl) {
                            showToast('📱 Mobile detected. Opening HTML (may need server).');
                            navigate(localUrl);
                        } else {
                            showToast('⚠️ This project requires a desktop to download.');
                        }
                    } else {
                        // Desktop: trigger download (zip)
                        navigate(downloadUrl);
                    }
                } else if (localUrl) {
                    // fallback to local if no download
                    navigate(localUrl);
                }
                break;

            case 'conditional':
                // Specific logic for project #4 (Will I Survive Slider)
                if (isMobileDevice()) {
                    if (localUrl) {
                        showToast('📱 Opening lightweight version. For full slider, use desktop.');
                        navigate(localUrl);
                    } else {
                        showToast('⚠️ Desktop required for this project.');
                    }
                } else {
                    if (downloadUrl) {
                        navigate(downloadUrl);
                    } else if (localUrl) {
                        navigate(localUrl);
                    }
                }
                break;

            default:
                // Fallback: try live, then local, then download
                if (liveUrl) navigate(liveUrl);
                else if (localUrl) navigate(localUrl);
                else if (downloadUrl) navigate(downloadUrl);
        }
    }

    // ── 🎲 SURPRISE ME ──────────────────────
    function surpriseMe() {
        const cards = Array.from(grid.querySelectorAll('.card'));
        if (cards.length === 0) return;
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        // Simulate a click on that card (by calling handler directly)
        handleCardClick(randomCard);
    }

    // ── 🖱️ EVENT LISTENERS ──────────────────
    // Card clicks (event delegation)
    grid.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;
        if (card.classList.contains('card-clicked')) return;
        handleCardClick(card);
    });

    // Keyboard support (Enter / Space)
    grid.addEventListener('keydown', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (card.classList.contains('card-clicked')) return;
            handleCardClick(card);
        }
    });

    // Search input
    searchInput.addEventListener('input', filterCards);
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            searchInput.value = '';
            filterCards();
            searchInput.blur();
        }
    });

    // Surprise Me button
    btnSurprise.addEventListener('click', surpriseMe);

    // ── 🚀 INITIALIZATION ────────────────────
    function init() {
        buildCards();      // Inject content & data attributes for search
        updateCounter();   // Set total projects count
        // Initial search state (all visible)
        filterCards();
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();