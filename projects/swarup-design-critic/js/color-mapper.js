import { parseHex } from './utils.js';

const exactMap = {
    '#ff0000': 'Angry Red',
    '#00ff00': 'Lime Green',
    '#0000ff': 'Boring Blue',
    '#ffff00': 'Banana Puke',
    '#800080': 'Purple Bruise',
    '#ffa500': 'Traffic Cone Orange',
    '#ffffff': 'Imaginationless White',
    '#000000': 'Emo Black'
};

export function getColorInfo(hex) {
    const normalized = hex.toLowerCase();
    if (exactMap[normalized]) {
        return { name: exactMap[normalized], family: getFamilyByHex(normalized) };
    }

    const { r, g, b } = parseHex(normalized);
    const family = guessFamily(r, g, b);
    return { name: `Mystery ${family}`, family };
}

function getFamilyByHex(hex) {
    if (['#ff0000', '#ffa500'].includes(hex)) return 'Red/Orange';
    if (hex === '#00ff00') return 'Green';
    if (hex === '#0000ff') return 'Blue';
    if (hex === '#ffff00') return 'Yellow';
    if (hex === '#800080') return 'Purple/Pink';
    return 'Black/White/Gray';
}

function guessFamily(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    // Low saturation / monochromatic check
    if (max - min < 40 || max < 40) return 'Black/White/Gray';

    if (r > g && r > b) {
        return (g > 100 && r - g < 50) ? 'Yellow' : 'Red/Orange';
    }
    if (g > r && g > b) return 'Green';
    if (b > r && b > g) {
        return (r > 100 && b - r < 50) ? 'Purple/Pink' : 'Blue';
    }
    if (r > 150 && g > 150 && b < 100) return 'Yellow';
    if (r > 100 && b > 100 && g < 100) return 'Purple/Pink';
    
    return 'Generic';
}