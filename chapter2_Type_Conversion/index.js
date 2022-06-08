// String Members
console.log("Bat" + "man");
console.log("Bat".concat("man"));

//Determining the Number of Characters
var parrFamily = "Mr. Incredible, Elastigirl, Violet, Dash, Jack-Jack";
console.log(parrFamily.charAt(7));
console.log(parrFamily.charAt(parrFamily.length - 1));

//Decoding of Encoding Characters
var id = "Dr. Otto G" + String.fromCharCode(252) + "nther Octavius";
console.log(id);
console.log(id.charCodeAt(10) === 252);
console.log(id.charAt(10) === "ü");

//Converting Case
console.log("Pow! Bam! Zonk!".toUpperCase());
console.log("PSST...ZZZZ".toLowerCase());

console.log("I".toLowerCase());
console.log("i".toUpperCase());

//console.log("I".toLocaleLowerCase());
//console.log("i".toLocaleUpperCase());

//Locating a Substring
console.log("Iron Monger, Titanium Man, Madame Masque, Ghost, Mandarin".indexOf("Ghost"));

var villains = "Iron Monger, Titanium Man, Madame Masque, Ghost, Mandarin";
console.log(villains.indexOf("Mandarin"));
console.log(villains.indexOf("Green Goblin"));

console.log(villains.indexOf("Man"));
console.log(villains.indexOf("Man", villains.indexOf("Man") + 1));

//Clipping a Substring
console.log("Superman, Batman, Spider-Man, Iron Man".slice(18, 24));

//Replacing a Substring
console.log("Batman and Batgirl".replace(/Bat/g, "Super"));

var titleCase = function(m) {
    return m.slice(0,1).toUpperCase() + m.slice(1);
};
console.log("batman, spider-man, iron man".replace(/\b\w+\b/g, titleCase));

//Splitting a String into an Array of Smaller Strings
