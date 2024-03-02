var users = ["admin", "eric", "hussain", "Ali", "asad"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to use a status report?");
    }
    else {
        console.log("Hello ".concat(user, ",thank you for logging in again"));
    }
}
