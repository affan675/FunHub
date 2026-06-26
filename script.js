        (function() {
            // ── 📦 PROJECT MANIFEST ─────────────────
            // ✏️ EDIT THIS ARRAY to add, remove, or rename projects.
            //    Each object: { id, title, emoji, description, folder, color }
            const projects = [
                { id: 1, title: "Dost Mast JNV", emoji: "😂",
                    description: "Hostel roasts + rivalry meter", folder: "dost_mast_jnv", color: "#ff6b6b" },
                { id: 2, title: "Hostel Excuse Generator", emoji: "🏃",
                    description: "Wild curfew excuses generator", folder: "hostel-excuse-generator", color: "#feca57" },
                { id: 3, title: "Roast My Code", emoji: "🔥", description: "Savage dev insult generator",
                    folder: "roast-my-code", color: "#ff9ff3" },
                { id: 4, title: "Will I Survive Slider", emoji: "🍛",
                    description: "Hostel food survival probability", folder: "survival-slider", color: "#54a0ff" },
                { id: 5, title: "Swarup's Design Critic", emoji: "🎨",
                    description: "AI-level sarcastic design roasts", folder: "swarup-design-critic", color: "#5f27cd" },
                { id: 6, title: "Click the Moving Chappal", emoji: "🩴",
                    description: "Rage-bait floating chappal game", folder: "click-the-chappal", color: "#ff9f43" },
                { id: 7, title: "Polymath Fact Machine", emoji: "🧠",
                    description: "Random facts with glitch news ticker", folder: "polymath-fact-machine",
                color: "#00d2d3" },
                { id: 8, title: "Password Meme Rater", emoji: "🔐",
                    description: "Meme-tier password strength checker", folder: "password-meme-rater", color: "#f368e0" },
                { id: 9, title: "Desk Pet Simulator", emoji: "🟣",
                    description: "Passive-aggressive Tamagotchi clone", folder: "desk-pet-simulator", color: "#1dd1a1" },
                { id: 10, title: "Soundboard of Annoyance", emoji: "🔊",
                    description: "6 obnoxious MP3 sound buttons", folder: "soundboard-annoyance", color: "#ee5a24" }
            ];

            // ── DOM refs ──
            const grid = document.getElementById('project-grid');
            const searchInput = document.getElementById('search-input');
            const btnSurprise = document.getElementById('btn-surprise');
            const noResults = document.getElementById('no-results');
            const projectCountEl = document.getElementById('project-count');
            const geniusLabel = document.getElementById('genius-label');

            // ── Update dynamic counter ──
            projectCountEl.textContent = projects.length;
            // Keep "1 Genius" or make it playful
            geniusLabel.textContent = projects.length >= 10 ? '1 Genius' : '1 Mad Lad';

            // ── ⚙️ RENDER ENGINE ────────────────────
            function renderAllProjects() {
                // Clear grid
                grid.innerHTML = '';

                projects.forEach((project, index) => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.setAttribute('role', 'listitem');
                    card.setAttribute('tabindex', '0');
                    card.setAttribute('aria-label', `${project.title} — ${project.description}`);
                    // Store folder & color as data attributes for navigation & styling
                    card.dataset.folder = project.folder;
                    card.dataset.color = project.color;
                    card.dataset.title = project.title.toLowerCase();
                    card.dataset.desc = project.description.toLowerCase();
                    // Set the glow color as a CSS custom property on the card
                    card.style.setProperty('--card-glow-color', project.color);
                    // Staggered animation delay (50ms per card)
                    card.style.animationDelay = `${index * 50}ms`;

                    // ── Card inner HTML ──
                    card.innerHTML = `
                <span class="card-emoji" aria-hidden="true">${project.emoji}</span>
                <span class="card-title">${project.title}</span>
                <span class="card-desc">${project.description}</span>
                <span class="card-badge" aria-hidden="true">#${project.id}</span>
                <span class="card-arrow" aria-hidden="true">→</span>
              `;

                    grid.appendChild(card);
                });

                // Hide no-results message on fresh render
                noResults.classList.remove('visible');
            }

            // ── 🔍 SEARCH LOGIC ──────────────────────
            function filterCards() {
                const query = searchInput.value.trim().toLowerCase();
                const cards = grid.querySelectorAll('.card');
                let visibleCount = 0;

                cards.forEach(card => {
                    const title = card.dataset.title || '';
                    const desc = card.dataset.desc || '';
                    const matches = title.includes(query) || desc.includes(query);

                    if (matches) {
                        card.style.display = '';
                        // Re-trigger stagger subtly? No—just keep them visible.
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Show/hide the "no results" message
                if (visibleCount === 0 && query.length > 0) {
                    noResults.classList.add('visible');
                } else {
                    noResults.classList.remove('visible');
                }
            }

            // ── 🎲 SURPRISE ME ──────────────────────
            function surpriseMe() {
                const randomIndex = Math.floor(Math.random() * projects.length);
                const chosen = projects[randomIndex];
                navigateToProject(chosen.folder);
            }

            // ── 🧭 Navigation helper ─────────────────
            function navigateToProject(folderName) {
                const targetUrl = `./projects/${folderName}/index.html`;
                window.location.href = targetUrl;
            }

            // ── ✨ INTERACTIVE EFFECTS (click feedback) ──
            function handleCardClick(cardElement) {
                const folder = cardElement.dataset.folder;
                if (!folder) return;

                // Prevent rapid double-clicks
                if (cardElement.classList.contains('card-clicked')) return;

                // Add the pop animation class
                cardElement.classList.add('card-clicked');

                // After 200ms, navigate
                setTimeout(() => {
                    navigateToProject(folder);
                }, 200);
            }

            // ── 🖱️ EVENT LISTENERS ──────────────────
            // Card clicks (event delegation on the grid)
            grid.addEventListener('click', (event) => {
                const card = event.target.closest('.card');
                if (!card) return;
                if (card.classList.contains('card-clicked')) return;
                handleCardClick(card);
            });

            // Keyboard support: Enter/Space on focused card
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
            // Also handle Escape key to clear search
            searchInput.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    searchInput.value = '';
                    filterCards();
                    searchInput.blur();
                }
            });

            // Surprise Me button
            btnSurprise.addEventListener('click', surpriseMe);

            // ── 🚀 INITIAL RENDER ───────────────────
            renderAllProjects();

            // Log for dev convenience
            console.log('⚡ FunHub initialized with %c' + projects.length + ' projects',
                'font-weight:bold;color:#00d2d3;');
            console.log('📦 Manifest is editable inside the <script> tag — look for "const projects = ["');
            console.log('🎲 Click "Surprise Me" or any card to launch a project!');
        })();