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


