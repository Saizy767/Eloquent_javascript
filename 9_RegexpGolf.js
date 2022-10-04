let firstWord = /ca[r | t]/
let secondWord = /pr?op/
let thirdWord = /ferr[et|y|ari]/
let fourthWord = /ious\b/
let fifthWord = /\s[.|,|:|;]/
let sixthWord = /\w{7,}/
let seventhWord = /\b[^\se]+\b/i

verify(firstWord,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(secondWord,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(thirdWord,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(fourthWord,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(fifthWord,
    ["bad punctuation ."],
    ["escape the period"]);

verify(sixthWord,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verify(seventhWord,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
// Ignore unfinished exercises
if (regexp.source == "...") return;
for (let str of yes) if (!regexp.test(str)) {
 console.log(`Failure to match '${str}'`);
}
for (let str of no) if (regexp.test(str)) {
 console.log(`Unexpected match for '${str}'`);
}
}