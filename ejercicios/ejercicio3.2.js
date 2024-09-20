const input = 10;
// create your function here

const separateDigits = (nums) => {
    let arrayNums = Array.from(nums.toString());
    return arrayNums.join('-');
};

console.log(separateDigits(input)); // '1-0'
const secondInput = 1;
console.log(separateDigits(secondInput)); // '1'
const thirdInput = 11234;
console.log(separateDigits(thirdInput)); // '1-1-2-3-4'