// const buatMatrix = numb => {
//     // kotak matrix
//     const matrix = [];

//     // template matrix
//     let temp = [];
//     for (let i = 1; i <= numb * numb; i++) {
//         // kondisi untuk mengisi nilai atrix
//         if (temp.length < numb) {
//             temp.push(i);
//         }
//         if (temp.length === numb) {
//             matrix.push(temp);
//             // untk membuat temp kembali kosong
//             temp = [];
//         }
//     }
//     // menentukan nilai matrix pertama
//     let total1 = 0;
//     for (let j = 0; j < numb; j++) {
//         total1 += matrix[j][j];
//     }
//     // menentukan nilai matrix pertama
//     let total2 = 0;
//     for (let k = numb - 1; k >= 0; k--) {
//         total2 += matrix[k][k];
//     }
//     console.log(matrix.toString());
//     console.log(total1, 'x', total2);

//     return total1 * total2;
// }

// console.log(buatMatrix(3));