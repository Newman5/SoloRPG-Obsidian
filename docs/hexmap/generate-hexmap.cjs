
const fs = require('fs');
const path = require('path');

const columns = 10;
const rows = 12;
const radius = 40;
const paddingX = 60;
const paddingY = 60;
const height = Math.sqrt(3) * radius;

const hexes = [];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < columns; col++) {
    const y = col * 1.5 * radius + paddingX;
    const x = row * height + (col % 2 ? height / 2 : 0) + paddingY;
    const id = String.fromCharCode(65 + col) + (row + 1);

    hexes.push({
      id: id,
      x: parseFloat(x.toFixed(3)),
      y: parseFloat(y.toFixed(3)),
      index: [col, row],
      terrain: "unknown",
      explored: false,
      note: `hex-${id.toLowerCase()}`
    });
  }
}

const outputPath = path.join(__dirname, 'hexmap.json');
fs.writeFileSync(outputPath, JSON.stringify(hexes, null, 2));
console.log(`Hex map saved to ${outputPath}`);
