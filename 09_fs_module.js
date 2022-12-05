//file module
//sync method
const { readFileSync, writeFileSync } = require("fs")
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
console.log(first)
console.log(second)
const third = "this is bullshit"
writeFileSync(
  "./content/result-sync.txt",
  `here is the result:${first} and ${second}` //this will create file and write the content on it.
  // if the file already exit it will override the file.
)
writeFileSync("./content/result-sync.txt", third, { flag: "a" }) //flag will apend

// const person = {
//   firstName: "sushil",
//   lastName: "bhatta",
//   address: { street: "123 stpark", city: "ktm", region: "bagmati" },
// }
// const {
//   firstName,
//   lastName,
//   address: { street, city, region },
// } = person
// console.log(firstName, lastName)
// console.log(street, city, region)

// NOTE:: js is naturally synchrous langauge.
// ie it read the code from top to bottom
//which create the problem that if the task avove runs into some problem then the task below will not be fullfilled.
// thats why the asynchrous approach is preferred.
