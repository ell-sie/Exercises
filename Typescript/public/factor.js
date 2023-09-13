"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minDistance = void 0;
function minDistance(n) {
    let factor = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factor.push(i);
        }
    }
    let diff = [];
    for (let j = 1; j < factor.length; j++) {
        (diff.push((factor[j] - factor[j - 1])));
    }
    return Math.min(...diff);
}
exports.minDistance = minDistance;
console.log(minDistance(8));
console.log(minDistance(25));
console.log(minDistance(13013));
console.log(minDistance(218683));
