"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = void 0;
function circleArea(radius) {
    if (radius <= 0) {
        throw new Error('radius too small');
    }
    return parseFloat((Math.PI * (radius * radius)).toFixed(3));
}
exports.circleArea = circleArea;
console.log(circleArea(68));
