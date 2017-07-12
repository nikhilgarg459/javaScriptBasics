/*
    In ES5,
    we were used to creating hash maps using plain objects.
    In ES6,
    we have new prototype Map.
*/

"use strict";

const profiles = new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');

profiles.size; // 3
profiles.has('twitter'); // true
profiles.get('twitter'); // "@adalovelace"
profiles.has('youtube'); // false
profiles.delete('facebook');
profiles.has('facebook'); // false
profiles.get('facebook'); // undefined
for (let entry of profiles) {
  console.log(entry); // entry is an array => [key, value]
}/*[ 'twitter', '@adalovelace' ]
[ 'googleplus', 'ada' ]*/


/*
    In map ypu can use functions and objects as keys of the map,
    and this is something that is not entirely possible using plain objects,
    because with objects all the keys are automatically cast to strings. 
*/

/*  
    Micro test framework using Map
    we are storing functions as keys and
    expected results as values. 
    Then we can iterate through our hash map and execute all the functions.

    when we iterate through the map,
    all the entries respect the order in which they have been inserted;
    this is also something that was not always guaranteed with plain objects.
*/

const tests = new Map();
tests.set(function add(x = 2) { return x + x; }, 4);
tests.set(() => 2 * 2, 4);
tests.set(() => 2 / 2, 1);

for (let entry of tests) {
  console.log((entry[0]() === entry[1]) ? 'PASS' : 'FAIL');
}

/*
  ES2015 also introduces the Set prototype.
  This prototype allows us to easily construct sets, 
  which means lists with unique values:

  sets can also contain objects and functions as values.
*/

const s = new Set([0, 1, 2, 3]);

s.add(3); // will not be added
s.size; // 4
s.delete(0);
s.has(0); // false

for (let entry of s) {
  console.log(entry);
}

