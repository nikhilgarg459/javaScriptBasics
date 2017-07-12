"use strict";

/*
    WeakMap

    there are two main differences between Map and WeakMap
    1. There is no way to iterate all over the entries,
    2. it only allows having objects as keys.

    it allows objects used as keys to be garbage collected,
    when the only reference left is inside WeakMap.
*/


let obj = {};
const map = new WeakMap();
map.set(obj, {key: "some_value"});
console.log(map.get(obj)); // {key: "some_value"}
obj = undefined; // now obj and the associated data in the map will be cleaned up in the next gc cycle
console.log(map.get(obj));





/*
    WeakSet

    there are two main differences between Set and WeakSet
    1. There is no way to iterate all over the entries,
    2. it only allows storing objects.

    it allows objects used as keys to be garbage collected,
    when the only reference left is inside WeakSet.    
*/

let obj1 = {key: "val1"};
let obj2 = {key: "val2"};
const set = new WeakSet([obj1, obj2]);

console.log(set.has(obj1)); // true
obj1 = undefined; // now obj1 will be removed from the set
console.log(set.has(obj1)); // false