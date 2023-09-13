"use strict";
// export function circleArea(radius: number): number {
//   if (radius <= 0) {
//     throw new Error('radius too small');
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixAddition = void 0;
function matrixAddition(a, b) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        res[i] = [];
        for (let j = 0; j < a[i].length; j++) {
            res[i][j] = a[i][j] + b[i][j];
        }
    }
    return res;
}
exports.matrixAddition = matrixAddition;
console.log(matrixAddition([
    [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1]
], [[2, 2, 1],
    [3, 2, 3],
    [1, 1, 3]]));
