var num = 101;

let arr = String(num).split("").map((num) => {
    return Number(num);
})

arr.reverse();
let numCheck = arr.toString();
numCheck = numCheck.replace(/,/g, "");

console.log(numCheck);

if (numCheck != num) {
    console.log('err - not a palindrom number');
} else {
    console.log('numCheck matches num!');
}