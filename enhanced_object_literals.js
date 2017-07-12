/* shorthand to assign variables and
 functions as members of the object,
 allows us to define computed member names at creation time.
 */

/* Enhanced Object Literals */
const x = 22;
const y = 37;

const obj = { x, y }

/* Similar behaviour with functions */

module.exports = {
    square(x) {
        return x * x;
    },
    cube(x) {
        return x * x * x;
    }
}


/* Getter Setter*/
const person = {
    name: 'Nikhil',
    surname: 'Garg',

    get fullName() {
        return this.name + ' ' + this.surname;
    },

    set fullName(fullname) {
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
};

console.log(person.fullName); // 'Nikhil Garg'
console.log(person.fullName = 'Alan Turing');

console.log(person.name); // 'Alan'