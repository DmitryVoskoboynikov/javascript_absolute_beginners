// Inherited Members Are Shared Not Copied
console.log("/** Inherited Members Are Shared Not Copied */");

var VanillaBean = function(vanilla, cinnamon) {
    this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
    cinnamon && (this.cinnamon = [1, "stick", "Saigon"]);
};
VanillaBean.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [2, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6]
};

var Coffee = function(coffee) {
    this.coffee = coffee || [1/4, "cup, coarsely ground", "Starbucks Espresso"];
}
Coffee.prototype = new VanillaBean();

var Chocolate = function(cocoa, bittersweet) {
    this.cocoa = cocoa || [3/16, "cup", "Callebaut"];
    this.bittersweet = bittersweet || [1 + 1/2, "cup", "Callebaut"];
};
Chocolate.prototype = new VanillaBean();
Chocolate.prototype.yolks = [4];

var MintChocolateChunk = function(mint) {
    this.mint = mint || [1, "cup", "fresh mint leaves"];
};
MintChocolateChunk.prototype = new Chocolate();
MintChocolateChunk.prototype.vanilla = [1/3, "bean", "Madagascar Bourbon"];
MintChocolateChunk.prototype.bittersweet[0] = 1;
delete MintChocolateChunk.prototype.cocoa;

// Output section
var vanilla = new VanillaBean("Tahitian", true);
console.log("\n// vanilla object");
console.log(vanilla);
console.log(Object.getPrototypeOf(vanilla));
console.log("// end of vanilla object \n");

var coffee = new Coffee();
console.log("\n// coffee object");
console.log(coffee);
console.log(Object.getPrototypeOf(coffee));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(coffee)));
console.log("// end of coffee object \n");

var chocolate = new Chocolate([1/4, "cup", "Bensdorp"]);
console.log("\n// chocolate object");
console.log(chocolate);
console.log(Object.getPrototypeOf(chocolate));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(chocolate)));
console.log("// end of chocolate object \n");

var mintChocolateChunk = new MintChocolateChunk();
console.log("\n// mintChocolateChunk object");
console.log(mintChocolateChunk);
console.log(Object.getPrototypeOf(mintChocolateChunk));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(mintChocolateChunk)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(mintChocolateChunk))));
console.log("// end of mintChocolateChunk object \n");

console.log(vanilla.heavyCream === coffee.heavyCream &&
    vanilla.heavyCream === chocolate.heavyCream &&
    vanilla.heavyCream === mintChocolateChunk.heavyCream &&
    mintChocolateChunk.heavyCream === coffee.heavyCream &&
    coffee.heavyCream === chocolate.heavyCream &&
    mintChocolateChunk.heavyCream === chocolate.heavyCream); //true

console.log(mintChocolateChunk.yolks); // 4
