import { randomItem } from './utils.js';

const roasts = {
    'Red/Orange': [
        "Did you lose a fight with a tomato?",
        "Traffic cone called, wants its job back.",
        "This red screams 'I have no branding sense'.",
        "Orange you glad you didn't pick a better colour? I'm not.",
        "This is the colour of a cheap ketchup packet."
    ],
    'Blue': [
        "Ah yes, the default Windows 95 background. Brave.",
        "Blue? How original. Did your mom pick this?",
        "I've seen more personality in a puddle.",
        "This blue is so corporate, it wears a tie.",
        "You picked the colour of sadness. Fitting."
    ],
    'Green': [
        "Are you a frog or a designer?",
        "This green is so dull, even plants would reject it.",
        "Mid. Absolute mid.",
        "Green? Were you going for 'eco-friendly' or 'I give up'?",
        "This green looks like mouldy bread."
    ],
    'Yellow': [
        "Banana peel energy. Slippery and disappointing.",
        "Looking at this yellow makes my retinas cry.",
        "Yellow? Are you designing a children's menu?",
        "This shade of yellow is why mustard is hated.",
        "It's like you dipped your brush in a highlighter."
    ],
    'Purple/Pink': [
        "Barbie called. She wants her leftover paint back.",
        "This isn't a colour; it's a mid‑life crisis.",
        "Purple? Trying too hard to be royal.",
        "This pink is the colour of bubblegum that lost its flavour.",
        "I've seen better purples in a bruise."
    ],
    'Black/White/Gray': [
        "Bold move. By 'bold', I mean cowardly.",
        "You picked a shade of nothing. Congrats.",
        "This is the colour of my depression.",
        "Gray? How edgy. Not.",
        "You're already in the void. No hope."
    ],
    'Generic': [
        "I've seen better colours in a 90s screensaver.",
        "This colour is a crime against design.",
        "Did you even try?",
        "My toaster has more creativity.",
        "Swarup weeps."
    ]
};

export function getRoast(family) {
    const category = roasts[family] || roasts['Generic'];
    return randomItem(category);
}