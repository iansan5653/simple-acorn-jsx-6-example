const Parser = require("acorn").Parser;
const acornJsx = require("acorn-jsx");

const parser = Parser.extend(acornJsx());

result = parser.parse("function example() {return <div />}");
console.log(result);
module.exports.result = result;
