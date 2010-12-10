topp = 100;
left = 150;
fullLength = 300;
centerX = left + (fullLength / 2);
centerY = topp + (fullLength / 2);

function main() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  rotate();
}

function skewit() {
  clear();
  drawSquare(Math.PI / 4);
  drawCross(Math.PI / 4);
  context.stroke();
}

function drawSquare(theta) {
  if (theta == undefined) theta = 0;

  var width = currentLength(theta);
  var deltaX = (fullLength - width) / 2;

  var deltaY;
  if (Math.sin(theta) == 0) {
    deltaY = 0;
  } else {
    var hyp = deltaX / Math.sin(theta);
    deltaY = hyp * Math.cos(theta);
  }

  context.beginPath();
  context.moveTo(left + deltaX, topp - deltaY);
  context.lineTo(left + deltaX + width, topp + deltaY);
  context.lineTo(left + deltaX + width, topp + fullLength - deltaY);
  context.lineTo(left + deltaX, topp + fullLength + deltaY);
  context.lineTo(left + deltaX, topp - deltaY);
  context.stroke();

  alert("theta: " + (theta / Math.PI) + "pi");

}

function currentLength(theta) {
  if (theta == undefined) theta = 0;
  return Math.cos(theta) * fullLength;
}
  
function drawCross(theta) {
  if (theta == undefined) theta = 0;
  var length = currentLength(theta);
  var delta = fullLength - length;
  var startX = left + delta / 2;
  var endX = startX + length;

  context.beginPath();
  context.moveTo(startX, centerY);
  context.lineTo(endX, centerY);
  context.moveTo(centerX, topp);
  context.lineTo(centerX, topp + fullLength);
  context.stroke();
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// function rotate() {
//   if (rotate.theta == undefined) rotate.theta = 0;
//   var theta = rotate.theta;
//   clear();
//   // drawCross(theta);
//   drawSquare(theta);
//   rotate.theta += Math.PI / 32;
// }

function rotate() {
  var theta = 0;
  var rate = Math.PI / 256;
  setInterval(function() {
    clear();
    drawCross(theta);
    drawSquare(theta);
    theta += rate;
  }, 10);
}
