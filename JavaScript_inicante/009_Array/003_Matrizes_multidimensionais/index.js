//Matrizes multidimensionais
//São arrays dentro de arrays
const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.table(array);

console.log(array[0][0]);//Acesando a posição 0,0
console.log(array[1][2]);//Acesando a posição 1,2

// ┌─────────┬───┬───┬───┐
// │ (index) │ 0 │ 1 │ 2 │
// ├─────────┼───┼───┼───┤
// │ 0       │ 1 │ 2 │ 3 │
// │ 1       │ 4 │ 5 │ 6 │
// │ 2       │ 7 │ 8 │ 9 │
// └─────────┴───┴───┴───┘

