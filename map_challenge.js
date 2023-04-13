let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const studentResult = student => [student.name, student.results];
let [john, ...rest] = students.map(studentResult);

console.log(john);
console.log(rest);

// const getValue = (student) => {


// Create variables named john and rest using the destructuring assignment
// Assign the variables values from calling the map method on the students array
// Within the map method either use an arrow function or provide a function created
// outside of the map method (note this function should also be an arrow function)
// Log out the variable named: john to see its value
// Log out the variable named: rest to see its value