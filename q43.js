function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great2(magicians) {
    var greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + " the great");
    }
    return greatmagicians;
}
var magicians3 = ["usman", "haseeb", "hussain"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
