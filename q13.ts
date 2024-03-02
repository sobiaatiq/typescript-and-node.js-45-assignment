let guestArr : string [] = ["sobia", "shazib", "hussain", "komal"];
let canNotAttend: string = "sobia"

console.log(canNotAttend + " " "canNotAttend the dinner")

let newGuest : string = "Ali"
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

// Console.log
guestArr.map((items) =>
console.log(`Dear ${items} you are invited to the dinner.`)