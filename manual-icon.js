const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 128x128 canvas with higher quality rendering
const size = 128;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#2b78d4'; // Sky blue background
ctx.fillRect(0, 0, size, size);

// Add subtle gradient
const gradient = ctx.createLinearGradient(0, 0, size, size);
gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
gradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, size, size);

// Circle with border
ctx.beginPath();
ctx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
ctx.fill();
ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
ctx.lineWidth = 2;
ctx.stroke();

// Auto-continue symbol
ctx.fillStyle = 'white';

// Continuous circular arrow
ctx.beginPath();
ctx.arc(size/2, size/2, size/3, 0, Math.PI * 1.7);
ctx.lineWidth = 8;
ctx.strokeStyle = 'white';
ctx.stroke();

// Arrow head
const arrowSize = 12;
ctx.beginPath();
ctx.moveTo(size/2 + 32, size/2 - 22);
ctx.lineTo(size/2 + 32 + arrowSize, size/2 - 22);
ctx.lineTo(size/2 + 32 + arrowSize/2, size/2 - 22 - arrowSize);
ctx.closePath();
ctx.fill();

// Play button in center
ctx.beginPath();
ctx.moveTo(size/2 - 12, size/2 - 18);
ctx.lineTo(size/2 + 16, size/2);
ctx.lineTo(size/2 - 12, size/2 + 18);
ctx.closePath();
ctx.fill();

// Draw "AUTO" text
ctx.font = 'bold 16px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('AUTO', size/2, size - 24);

// Output the PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('icon.png', buffer);

console.log('Manual icon created successfully!'); 