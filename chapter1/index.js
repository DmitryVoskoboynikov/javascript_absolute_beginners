console.log("Ben & Jerry's Chocolate Fudge Brownie");

console.log("Ben & Jerry's" + " " + "Chocolate Fudge Brownie" + " is my favorite ice cream.");

console.log(4 * 260);

console.log((6 * 14 + 21) / 7 * 365);

console.log( Math.round((6 * 14 + 21) / 7 * 365 * 100 / (4 * 260)) + " pints of Chocolate Fudge Brownie");

console.log( "Chocolate Fudge Brownie" === "chocolate ice cream" );

console.log( Math.round((6 * 14 + 21) / 7 * 365 * 100 / (4 * 260)) + " pints of Chocolate Fudge Brownie" === "526 pints of Chocolate Fudge Brownie" );

var iceCream;

if (typeof iceCream == 'undefined') { console.log('variable iceCream typeof is undefined'); }

iceCream = "Chocolate Fudge Brownie";
console.log(iceCream);

iceCream = "New York Super Fudge Chunk";
console.log(iceCream);

var newYorkSuperFudgeChunk = 4 * 300 + " calories per pint";
console.log(newYorkSuperFudgeChunk);

//Creating an Object literal
var iceCream = {

};
console.log(iceCream);

iceCream = {
    "Chocolate Fudge Brownie": 4 * 260
};
console.log(iceCream);

iceCream = {
    "Chocolate Fudge Brownie": 4 * 260,
    "Half Baked": 4 * 250
}
console.log(iceCream);

var iceCream = {
    "Chocolate Fudge Brownie": 4 * 260,
    "Half Baked": 4 * 250,
    "New York Super Fudge Chunk": 4 * 300,
    "Coffee Heath Bar Crunch": 4 * 280,
    "Cherry Garcia": 4 * 240,
    "Mud Pie": 4 * 270,
    "Milk & Cookies": 4 * 270,
    "Cinnamon Buns": 4 * 290,
    "Chocolate Chip Cookie Dough": 4 * 270,
    "Mission to Marzipan": 4 * 260
};
console.log(iceCream);

console.log(iceCream["Chocolate Fudge Brownie"] + " calories per pint");

iceCream["Half Baked"] = 4 * 270;
console.log(iceCream["Half Baked"] + " calories per pint");

iceCream["Peanut Butter Cup"] = 4 * 360;
console.log(iceCream["Peanut Butter Cup"] + " calories per pint");

delete iceCream["Peanut Butter Cup"];
console.log(iceCream["Peanut Butter Cup"] + " calories per pint");

var iceCream = {
    chocolateFudgeBrownie: 4 * 260,
    halfBaked: 4 * 270,
    newYorkSuperFudgeChunk: 4 * 300,
    coffeeHeathBarCrunch: 4 * 280,
    cherryGarcia: 4 * 240,
    mudPie: 4 * 270,
    milkCookies: 4 * 270,
    cinnamonBuns: 4 * 290,
    chocolateChipCookieDough: 4 * 270,
    missionToMarzipan: 4 * 260
};
console.log(iceCream);

console.log(iceCream.newYorkSuperFudgeChunk + " calories per pint");

iceCream.bostonCreamPie = 4 * 250;
console.log(iceCream.bostonCreamPie + " calories per pint");

//Creating an Array Literal

