
let person = {
    name: 'Mosh' ,
    age: 30
};

// Dot notation
person.name = 'Sanjith';
console.log(person.name);

// Bracket notation
let selection = 'name';
person[selection] = 'Manne';

console.log(person['name']);
console.log(person.name);