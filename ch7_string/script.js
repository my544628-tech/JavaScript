let password = "Landon1234!=@";

// 1. Basic Information & Access
console.log(password.length); // Output: 13
console.log(password.charAt(0)); // Output: "L"
console.log(password.charCodeAt(0)); // Output: 76 (ASCII code for 'L')
console.log(password.at(-1)); // Output: "@" (supports negative indexing)
console.log(password[0]); // Output: "L" (bracket notation)

// 2. Searching & Position
console.log(password.indexOf("d")); // Output: 3
console.log(password.lastIndexOf("1")); // Output: 6
console.log(password.indexOf("z")); // Output: -1 (not found)
console.log(password.includes("1234")); // Output: true
console.log(password.startsWith("L")); // Output: true
console.log(password.endsWith("@")); // Output: true
console.log(password.search(/\d/)); // Output: 6 (index of first digit via regex)

// 3. Extracting Substrings
console.log(password.slice(0, 6)); // Output: "Landon"
console.log(password.slice(-3)); // Output: "!=@"
console.log(password.substring(0, 6)); // Output: "Landon"

// 4. Case Transformation
console.log(password.toUpperCase()); // Output: "LANDON1234!=@"
console.log(password.toLowerCase()); // Output: "landon1234!=@"

// 5. Modification & Replacement
console.log(password.replace("1234", "****")); // Output: "Landon****!=@"
console.log(password.replaceAll("!", "?")); // Output: "Landon1234?=@"
console.log(password.concat(" extra")); // Output: "Landon1234!=@ extra"
console.log(password.repeat(2)); // Output: "Landon1234!=@Landon1234!=@"

// 6. Trimming Whitespace
let padded = "  Landon1234!=@  ";
console.log(padded.trim()); // Output: "Landon1234!=@"
console.log(padded.trimStart()); // Output: "Landon1234!=@  "
console.log(padded.trimEnd()); // Output: "  Landon1234!=@"

// 7. Padding
let shortPass = "1234";
console.log(shortPass.padStart(8, "*")); // Output: "****1234"
console.log(shortPass.padEnd(8, "*")); // Output: "1234****"

// 8. Splitting & Arrays
console.log(password.split("1234")); // Output: [ "Landon", "!=@" ]
console.log(password.split("")); // Output: ['L', 'a', 'n', 'd', 'o', 'n', '1', '2', '3', '4', '!', '=', '@']

// 9. Pattern Matching
console.log(password.match(/\d+/g)); // Output: ["1234"] (finds sequence of digits)
console.log([...password.matchAll(/a/g)]); // Output: [ Array containing match details for 'a' ]
