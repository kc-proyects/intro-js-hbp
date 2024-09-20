const input1 = 'string';
// create your function here

const revertInput = (input) => {
    const arrayInput = input.split("");
    return `${arrayInput.length} ${arrayInput.reverse().join("")}`;
}

console.log(revertInput(input1)); // '6 gnirts'
const input2 = 'variable';
console.log(revertInput(input2)); // '8 elbairav'
const input3 = 'pointer';
console.log(revertInput(input3)); // '7 retniop'