/* 

*/

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
];
// create your function here
const yourFunction = (input => {
    const lastPlace = input.length - 1;
    let strPath = '';
    
    strPath += `${input[0]}`;

    for (let i = 1; i < input.length; i++) {
        if (i != lastPlace) {
            strPath += `/${input[i]}`;
        } else {
            strPath += `.${input[i]}`;
        }
    }
    return strPath;
});

console.log(yourFunction(input1)); // 'Downloads/Videos/capture.mp4'
const input2 = [
    'CodinGame',
    'python',
    'py',
];
console.log(yourFunction(input2)); // 'CodinGame/python.py'
const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];
console.log(yourFunction(input3));
// 'programming/languages/easy/beginner/useful/pythonstuff.py'