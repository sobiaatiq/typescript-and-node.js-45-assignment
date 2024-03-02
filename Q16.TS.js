var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesTovisit = ["Tokyo", "Muree", "Dubae", "London", "China"];
console.log("Original order:", placesTovisit);
console.log("Alphabetical order:", __spreadArray([], placesTovisit, true).sort());
console.log("Original order after sorting:", placesTovisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesTovisit, true).sort().reverse());
console.log("Original order after reverse sorting:", placesTovisit);
placesTovisit.reverse();
console.log("Reversed order:", placesTovisit);
Sort;
the;
array in alphabetical;
order;
placesTovisit.sort();
console.log("sorted in alphabetical order:", placesTovisit);
