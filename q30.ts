let users : string [] = ["admin", "eric", "hussain", "Ali", "asad"]
for (let user of users){
    if(user === "admin"){
    console.log("Hello admin, would you like to use a status report?")
} else {
    console.log(`Hello ${user},thank you for logging in again`)
    
}
}