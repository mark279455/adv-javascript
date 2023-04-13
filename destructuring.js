/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27]
let john = ages[0]
let fred = ages[1]
let sid = ages[2]

console.log(john, fred, sid);
let [john1, fred1, sid1] = ages;
console.log(john1, fred1, sid1);

// Destructuring objects
let jobs = {
    mike: "milkman",
    bert: "painter",
    sam: "barsteward"
}

let {mike, bert, sam} = jobs;
console.log(mike, bert, sam);

// Destructuring subsets
let languages = ["english", "french", "german", "spanish", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
let [, , fredNative, fredSecondary] = languages;
console.log(fredNative, fredSecondary);

let languages2 = {
    lang1: "english",
    lang2: "french",
    lang3: "german",
    lang4: "spanish",
    lang5: "japanese"
};

let {lang1, lang3} = languages2;
console.log(lang1, lang3);


// Using rest parameter syntax

let favouriteFoods = {
    brianx: "pizza",
    sidx: "cheese",
    fredx: "cornflakes",
    jimx: "beer"
};

let {brianx, fredx, ...rest} = favouriteFoods;

console.log(brianx);
console.log(fredx);
console.log(rest);
