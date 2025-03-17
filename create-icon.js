const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 128x128 canvas
const canvas = createCanvas(128, 128);
const ctx = canvas.getContext('2d');

// Create a gradient background
const gradient = ctx.createLinearGradient(0, 0, 128, 128);
gradient.addColorStop(0, '#4286f4');
gradient.addColorStop(1, '#373277');

// Draw background circle
ctx.beginPath();
ctx.arc(64, 64, 60, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.stroke();

// Draw circular arrow (simplified for canvas)
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(64, 64, 40, Math.PI * 0.2, Math.PI * 1.8, false);
ctx.lineTo(90, 94);
ctx.lineTo(82, 85);
ctx.arc(64, 64, 32, Math.PI * 1.8, Math.PI * 0.2, true);
ctx.lineTo(46, 85);
ctx.lineTo(38, 94);
ctx.closePath();
ctx.fill();

// Draw play triangle
ctx.beginPath();
ctx.moveTo(52, 48);
ctx.lineTo(76, 64);
ctx.lineTo(52, 80);
ctx.closePath();
ctx.fill();

// Draw "AUTO" text
ctx.font = 'bold 14px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('AUTO', 64, 105);

// Output the PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('icon.png', buffer);

console.log('Icon created successfully!');

// Create alternative version without text
const canvas2 = createCanvas(128, 128);
const ctx2 = canvas2.getContext('2d');

// Create a gradient background
const gradient2 = ctx2.createLinearGradient(0, 0, 128, 128);
gradient2.addColorStop(0, '#4286f4');
gradient2.addColorStop(1, '#373277');

// Draw background circle
ctx2.beginPath();
ctx2.arc(64, 64, 60, 0, Math.PI * 2);
ctx2.fillStyle = gradient2;
ctx2.fill();
ctx2.strokeStyle = 'white';
ctx2.lineWidth = 2;
ctx2.stroke();

// Draw circular arrow (simplified for canvas)
ctx2.fillStyle = 'white';
ctx2.beginPath();
ctx2.arc(64, 64, 40, Math.PI * 0.2, Math.PI * 1.8, false);
ctx2.lineTo(90, 94);
ctx2.lineTo(82, 85);
ctx2.arc(64, 64, 32, Math.PI * 1.8, Math.PI * 0.2, true);
ctx2.lineTo(46, 85);
ctx2.lineTo(38, 94);
ctx2.closePath();
ctx2.fill();

// Draw play triangle
ctx2.beginPath();
ctx2.moveTo(48, 48);
ctx2.lineTo(80, 64);
ctx2.lineTo(48, 80);
ctx2.closePath();
ctx2.fill();

// Output the PNG
const buffer2 = canvas2.toBuffer('image/png');
fs.writeFileSync('icon-no-text.png', buffer2);

console.log('Alternative icon created successfully!'); 