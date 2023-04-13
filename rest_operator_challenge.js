let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
// console.log("moreMixedLetters = "+moreMixedLetters);
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    for(let i of letters) {
        // console.log("i = "+i);
        arr.push(i);
    }
    arr=arr.sort();
    arr=arr.reverse();
    return arr;
}


let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
// console.log("reverseSort = "+reverseSort);
// console.log("mixedLetters = "+mixedLetters);

console.log(reverseSort);
console.log(mixedLetters);
