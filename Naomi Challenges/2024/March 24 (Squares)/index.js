let squares = [];


for (let i = 0; i < 10000; i++) {
  var square = Math.pow(i, 2);
  if (square.toString().includes("3")) {
    squares.push(i);
  }
}

console.table(squares); 