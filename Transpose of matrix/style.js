// Prompt the user for the number of rows and columns of the matrix
let numRows = parseInt(prompt("Enter the number of rows: "));
let numCols = parseInt(prompt("Enter the number of columns: "));

// Initialize the matrix with zeros
let matrix = [];
for (let i = 0; i < numRows; i++) {
  matrix[i] = new Array(numCols).fill(0);
}

// Prompt the user for the values of each element
for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numCols; j++) {
    matrix[i][j] = parseInt(prompt(`Enter the value for element ${i},${j}: `));
  }
}

// Compute the transpose of the matrix
let transpose = [];
for (let i = 0; i < numCols; i++) {
  transpose[i] = new Array(numRows);
  for (let j = 0; j < numRows; j++) {
    transpose[i][j] = matrix[j][i];
  }
}

// Display the transpose to the user
let output = "Transpose of the matrix:\n";
for (let i = 0; i < numCols; i++) {
  for (let j = 0; j < numRows; j++) {
    output += `${transpose[i][j]} `;
  }
  output += "\n";
}
alert(output);
