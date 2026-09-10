// ===============================================
// JAVASCRIPT ARRAY METHODS — with password/fruit examples
// ===============================================

let password = "Landon1234!=@";
let fruit = ["apple", "banana", "orange"];
let passwords = ["Landon1234!=@", "abc123", "P@ssw0rd!", "12345", "Str0ngOne!"];

// -----------------------------------------------
// 1. length — number of items
// -----------------------------------------------
console.log(fruit.length); // 3
console.log(passwords.length); // 5

// -----------------------------------------------
// 2. push() — add to end
// -----------------------------------------------
fruit.push("grape");
console.log(fruit); // ["apple", "banana", "orange", "grape"]

// -----------------------------------------------
// 3. pop() — remove from end
// -----------------------------------------------
let removedFruit = fruit.pop();
console.log(removedFruit); // "grape"
console.log(fruit); // ["apple", "banana", "orange"]

// -----------------------------------------------
// 4. unshift() — add to beginning
// -----------------------------------------------
fruit.unshift("mango");
console.log(fruit); // ["mango", "apple", "banana", "orange"]

// -----------------------------------------------
// 5. shift() — remove from beginning
// -----------------------------------------------
let removedFirst = fruit.shift();
console.log(removedFirst); // "mango"
console.log(fruit); // ["apple", "banana", "orange"]

// -----------------------------------------------
// 6. indexOf() — find position of an item
// -----------------------------------------------
console.log(passwords.indexOf("abc123")); // 1
console.log(passwords.indexOf("notThere")); // -1

// -----------------------------------------------
// 7. includes() — does array contain item?
// -----------------------------------------------
console.log(passwords.includes("12345")); // true
console.log(passwords.includes("qwerty")); // false

// -----------------------------------------------
// 8. slice() — copy a portion (does NOT modify original)
// -----------------------------------------------
console.log(passwords.slice(1, 3)); // ["abc123", "P@ssw0rd!"]
console.log(passwords); // unchanged

// -----------------------------------------------
// 9. splice() — add/remove items (MODIFIES original)
// -----------------------------------------------
let passwordsCopy = [...passwords];
passwordsCopy.splice(1, 1, "NewPass99!"); // remove 1 item at index 1, insert new one
console.log(passwordsCopy); // ["Landon1234!=@", "NewPass99!", "P@ssw0rd!", "12345", "Str0ngOne!"]

// -----------------------------------------------
// 10. concat() — merge arrays
// -----------------------------------------------
let morePasswords = ["Extra1!", "Extra2!"];
console.log(passwords.concat(morePasswords));

// -----------------------------------------------
// 11. join() — turn array into a string
// -----------------------------------------------
console.log(passwords.join(", "));
// "Landon1234!=@, abc123, P@ssw0rd!, 12345, Str0ngOne!"

// -----------------------------------------------
// 12. reverse() — flip order (modifies original)
// -----------------------------------------------
console.log([...passwords].reverse());
// ["Str0ngOne!", "12345", "P@ssw0rd!", "abc123", "Landon1234!=@"]

// -----------------------------------------------
// 13. sort() — sort items (default: alphabetical, modifies original)
// -----------------------------------------------
console.log([...passwords].sort());
// ["12345", "Landon1234!=@", "P@ssw0rd!", "Str0ngOne!", "abc123"]

// -----------------------------------------------
// 14. forEach() — run a function on each item (no return value)
// -----------------------------------------------
passwords.forEach((pw, i) => {
  console.log(`Password ${i}: ${pw}`);
});
// Password 0: Landon1234!=@
// Password 1: abc123
// Password 2: P@ssw0rd!
// Password 3: 12345
// Password 4: Str0ngOne!

// -----------------------------------------------
// 15. map() — transform each item into a NEW array
// -----------------------------------------------
let passwordLengths = passwords.map((pw) => pw.length);
console.log(passwordLengths); // [13, 6, 9, 5, 10]

// -----------------------------------------------
// 16. filter() — keep only items matching a condition
// -----------------------------------------------
let strongPasswords = passwords.filter((pw) => pw.length >= 10);
console.log(strongPasswords); // ["Landon1234!=@", "Str0ngOne!"]

// -----------------------------------------------
// 17. find() — return the FIRST matching item
// -----------------------------------------------
let firstWeak = passwords.find((pw) => pw.length < 8);
console.log(firstWeak); // "abc123"

// -----------------------------------------------
// 18. findIndex() — return index of first match
// -----------------------------------------------
let firstWeakIndex = passwords.findIndex((pw) => pw.length < 8);
console.log(firstWeakIndex); // 1

// -----------------------------------------------
// 19. some() — true if ANY item matches
// -----------------------------------------------
let hasWeakPassword = passwords.some((pw) => pw.length < 8);
console.log(hasWeakPassword); // true

// -----------------------------------------------
// 20. every() — true if ALL items match
// -----------------------------------------------
let allStrong = passwords.every((pw) => pw.length >= 8);
console.log(allStrong); // false

// -----------------------------------------------
// 21. reduce() — combine all items into one value
// -----------------------------------------------
let totalCharacters = passwords.reduce((total, pw) => total + pw.length, 0);
console.log(totalCharacters); // 43

// -----------------------------------------------
// 22. flat() — flatten nested arrays
// -----------------------------------------------
let groupedPasswords = [
  ["Landon1234!=@", "abc123"],
  ["P@ssw0rd!", "12345"],
];
console.log(groupedPasswords.flat()); // ["Landon1234!=@", "abc123", "P@ssw0rd!", "12345"]

// -----------------------------------------------
// 23. flatMap() — map then flatten
// -----------------------------------------------
let splitChars = ["ab", "cd"].flatMap((str) => str.split(""));
console.log(splitChars); // ["a", "b", "c", "d"]

// -----------------------------------------------
// 24. Array.isArray() — check if something is an array
// -----------------------------------------------
console.log(Array.isArray(passwords)); // true
console.log(Array.isArray(password)); // false (it's a string)

// -----------------------------------------------
// 25. Array.from() — create array from iterable/string
// -----------------------------------------------
console.log(Array.from(password)); // splits password into array of chars
// ["L","a","n","d","o","n","1","2","3","4","!","=","@"]

// -----------------------------------------------
// 26. fill() — fill array with a static value
// -----------------------------------------------
console.log(new Array(3).fill("****")); // ["****", "****", "****"]

// -----------------------------------------------
// 27. keys() / values() / entries() — iterators
// -----------------------------------------------
for (const [index, pw] of passwords.entries()) {
  console.log(index, pw);
}
// 0 'Landon1234!=@'
// 1 'abc123'
// 2 'P@ssw0rd!'
// 3 '12345'
// 4 'Str0ngOne!'
