function show_magicians(magicians: string[]): void {
    for(const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

    function make_great2(magicians: string[]): string[] {
        const greatmagicians: string[] = [];
        for (let i = 0; i < magicians.length; i++){
               greatmagicians.push(magicians[i] + ` the great`)
        } 
        return greatmagicians;
} 

const magicians3: string[] = ["usman", "haseeb","hussain"];
const greatMagicians2: string[] = make_great2 (magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2)