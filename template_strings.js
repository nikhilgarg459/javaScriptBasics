"use strict";

/*
    template strings
    use backticks.
    can write expressions using ${expression} inside the string
    a single string can finally be easily written in multiple lines.
*/

const name = "Leonardo";
const interests = ["arts", "architecture", "science", "music", "mathematics"];
const birth = { year : 1452, place : 'Florence' };
const text = `${name} was an Italian polymath interested in many topics such
as ${interests.join(', ')}.
He was born in ${birth.year} in ${birth.place}.`;
console.log(text);