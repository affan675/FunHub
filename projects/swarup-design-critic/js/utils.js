export function parseHex(hex) {
    const cleanHex = hex.replace('#', '');
    return {
        r: parseInt(cleanHex.substring(0, 2), 16),
        g: parseInt(cleanHex.substring(2, 4), 16),
        b: parseInt(cleanHex.substring(4, 6), 16)
    };
}

export function rgbToPercent(r, g, b) {
    const total = r + g + b;
    if (total === 0) return { r: 0, g: 0, b: 0 };
    return {
        r: Math.round((r / total) * 100),
        g: Math.round((g / total) * 100),
        b: Math.round((b / total) * 100)
    };
}

export function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
}