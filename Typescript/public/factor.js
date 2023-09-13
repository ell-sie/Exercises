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
    let minDiff = Infinity;
    for (let j = 1; j < factor.length; j++) {
        diff.push((factor[j + 1] - factor[j]));
    }
    return minDiff = Math.min(...diff);
    console.log(minDistance(13013));
}
exports.minDistance = minDistance;
