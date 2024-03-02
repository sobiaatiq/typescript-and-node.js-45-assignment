function makealbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makealbum("ali", "light");
console.log(album);
album = makealbum("asad", "hussain");
console.log(album);
album = makealbum("ahsan", "shazib");
console.log(album);
