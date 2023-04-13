const sumAll = (a, b, c) => a+b+c;

console.log("sumAll(1, 2, 3) = ", sumAll(1,2,3));

console.log("sumAll(1, 2, 3, 4, 5, 6) = ", sumAll(1, 2, 3, 4, 5, 6), " - last 3 ignored");

const sumRest = (a, b, c, ...rest) => {
    let sum = a+b+c;
    for(let i of rest) {
        // console.log("i = "+i);
        sum+=i;
    }
    return sum;
}

console.log("sumRest(1, 2, 3, 4, 5, 6) = ", sumRest(1, 2, 3, 4, 5, 6));

