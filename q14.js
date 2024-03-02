var guestArr = ["Ali", "shazib", "hussain", "komal"];
var canNotAttend = "Ali";
var newGuest = "Aqeel";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//guestArr.map((items) =>
//console.log(`Dear ${items},i found a bigger table so i am invited more people.`)
//part 2
var guestbeg = "Asad";
guestArr.unshift(guestbeg);
console.log(guestArr);
//part 3
var middleguest = "Noman";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleguest);
console.log(guestArr);
//part 4
guestArr.push("Zeeshan");
console.log(guestArr);
//part 5
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " you are invited in the more people list on dinner"));
});
