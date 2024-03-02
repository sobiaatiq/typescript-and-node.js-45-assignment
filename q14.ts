let guestArr : string [] = ["Ali", "shazib", "hussain", "komal"];

let canNotAttend: string = "Ali"

let newGuest: string = "Aqeel" 
guestArr [guestArr.indexOf (canNotAttend)] =newGuest;
console.log(guestArr)

//guestArr.map((items) =>
//console.log(`Dear ${items},i found a bigger table so i am invited more people.`)

//part 2
let guestbeg : string = "Asad"
guestArr.unshift(guestbeg);
console.log(guestArr)

//part 3
let middleguest: string  = "Noman"
let middleIndex = guestArr. length/3
guestArr.splice(middleIndex,0,middleguest)
console.log(guestArr)

//part 4
guestArr.push("Zeeshan")
console.log(guestArr)

//part 5
guestArr.map((items) =>
console.log( `Dear ${items} you are invited in the more people list on dinner`));

