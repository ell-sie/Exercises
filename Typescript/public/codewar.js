"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.race = void 0;
function race(v1, v2, g) {
    if (v1 >= v2) {
        return null;
    }
    else {
        const time = g / (v2 - v1);
        const hour = Math.floor(time);
        const min = Math.floor((time - hour) * 60);
        const sec = Math.floor((((time - hour) * 60) - min) * 60);
        return [hour, min, sec];
    }
}
exports.race = race;
console.log(race(18, 19, 59));
