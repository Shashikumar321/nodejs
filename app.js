require("./dummy.js");
const data = require("./data.json")
const { calculateSum, calculateMultiply } = require("./calculate");

calculateSum(2, 4);

calculateMultiply(2, 4);

console.log(data);
