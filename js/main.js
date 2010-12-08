function main() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  context.beginPath();
  context.moveTo(150, 150);
  context.lineTo(450, 150);
  context.stroke();

  rotate();
}

function rotate() {
  var theta = 0;
  var rate = Math.PI / 256;
  setInterval(function() {
    redraw(theta);
    theta -= rate;
  }, 10);
}

function redraw(theta) {
  var length = Math.cos(theta) * 300;
  var delta = 300 - length;
  var startX = 150 + delta / 2;
  var endX = startX + length;

  context.beginPath();
  context.moveTo(startX, 150);
  context.lineTo(endX, 150);
  context.clearRect(0, 0, 640, 480);
  context.stroke();
}

