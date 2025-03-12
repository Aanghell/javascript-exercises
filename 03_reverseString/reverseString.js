const reverseString = function(string) {
let reverseText=string.split("").reverse().join("");
return reverseText;
};

// reverseString('hello world');

// Do not edit below this line
module.exports = reverseString;

// npm test reverseString.spec.js