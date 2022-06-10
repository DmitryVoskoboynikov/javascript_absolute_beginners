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
var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, Sandman";
console.log(villains.split(", "));

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
console.log(villains.split(/, (?:and )?/g));

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
villains = villains.split(/, (?:and )?/g);
console.log(villains[1]);

var villains = "Green Goblin, Doctor Octopus, Venom, Hobgoblin, and Sandman";
console.log(villains.match(/[Gg]oblin/g));

//Explicitly Creating Wrappers
var pre = new String("Hob");
var post = pre.concat("goblin");
console.log(pre.valueOf());
console.log(post);

//Converting a Value to Another Type
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));

console.log(Boolean(String.fromCharCode));

//Converting a Value to a Number
console.log('/** Converting a Value to a Number */');

console.log(Number(undefined));
console.log(Number(null));

var nothing, zilch = null;
console.log(nothing * 4);
console.log(zilch * 4);

console.log(Number("4"));
console.log(Number(""));
console.log(Number("Mr. Incredible"));

console.log(Number(["Green Goblin", "Doctor Octopus", "Sandman"]));
console.log(Number({hero: "Batman", archenemy: "Joker"}));
console.log(Number(String.fromCharCode));

//Converting a Value to a String
console.log('/** Converting a Value to a String */');

console.log("Mezmerella"[2]);
console.log("Mezmerella"["2"]);

console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));

console.log(String(["Green Goblin", "Doctor Octopus", "Sandman"]));
console.log(["Green Goblin", "Doctor Octopus", "Sandman"].toString());

console.log(({"Bob Parr": "Mr. Incredible", "Helen Parr": "Elastigirl"}).toString());
console.log(String({"Bob Parr": "Mr. Incredible", "Helen Parr": "Elastigirl"}));

//Methods for Converting a Number to a String
console.log('/** Methods for Converting a Number to a String */');

//Putting Off Learning RegExp Syntax
console.log('/** Putting Off Learning RegExp Syntax */');



