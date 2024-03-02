var guestArr = ["sobia", "shazib", "hussain", "komal"];
var canNotAttend = "sobia";
console.log(canNotAttend + " ", "canNotAttend the dinner");
var newGuest = "Ali";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// Console.log
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, " you are invited to the dinner."));
});
