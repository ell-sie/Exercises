"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
const likes = (a) => {
    if (a.length === 1) {
        return `${(a[0])} likes this`;
    }
    else if (a.length === 2) {
        return `${(a[0])} and ${(a[1])} likes this`;
    }
    else if (a.length === 3) {
        return `${(a[0])}, ${(a[1])} and ${(a[2])} likes this`;
    }
    else if (a.length > 3) {
        return `${(a[0])}, ${(a[1])} and ${(a.length - 2)} others likes this`;
    }
    else {
        return 'no one likes this';
    }
};
exports.likes = likes;
console.log((0, exports.likes)([]));
console.log((0, exports.likes)(["Alex", "Jacob", "Mark", "Max"]));
console.log((0, exports.likes)(["Peter"]));
console.log((0, exports.likes)(["Jacob", "Alex"]));
console.log((0, exports.likes)(["Max", "John", "Mark"]));
