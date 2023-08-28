"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
function solve(s) {
    return Math.max(...(s.split(/[aioue]+/).map((sum) => sum.split("").reduce((a, b) => a + b.charCodeAt(0) - 96, 0))));
}
exports.solve = solve;
console.log(solve("zodiacs"));
