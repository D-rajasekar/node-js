const matrix = [[1,2,3],[4,5,6],[7,8,9]];

// function getMatrixElement(matrix, row, col) {
//  if (matrix && matrix[row] && matrix[row][col] !==
// undefined) {
//  return matrix[row][col];
//  }
//  return 'Element not found';
// }

const getMatrixElement = (matrix, row, col) => {
    let element = matrix?.[row]?.[col]|| "Element Not Found";
    return element;
}
console.log(getMatrixElement(matrix,1,2));