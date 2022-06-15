// Creating Objects with a Constructor
console.log("/** Creating Objects with a Constructor */");

var WildMaineBlueberry = function(blueberries, vanilla) {
    this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
    this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [1, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6],
    freshLemonJuice: [2, "tsp"]
};
var wildMaineBlueberry = new WildMaineBlueberry();
console.log(wildMaineBlueberry);
console.log(Object.getPrototypeOf(wildMaineBlueberry)); //console.log(wildMaineBlueberry.__proto__);

console.log("/** set parameters to constructor */");

var WildMaineBlueberry = function(blueberries, vanilla) {
    this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
    this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [1, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6],
    freshLemonJuice: [2, "tsp"]
};
var wildMaineBlueberry = new WildMaineBlueberry("Dole frozen wild blueberries", "Tahitian");
console.log(wildMaineBlueberry);
console.log(Object.getPrototypeOf(wildMaineBlueberry)); //console.log(wildMaineBlueberry.__proto__);

console.log("/** invoke object without new */");

var WildMaineBlueberry = function(blueberries, vanilla) {
    this.blueberries = [2, "cup", blueberries ? blueberries : "fresh wild Maine blueberries"];
    this.vanilla = [1, "bean", vanilla ? vanilla : "Madagascar Bourbon"];
};
WildMaineBlueberry.prototype = {
    heavyCream: [1, "cup", "Organic Valley"],
    halfHalf: [1, "cup", "Organic Valley"],
    sugar: [5/8, "cup"],
    yolks: [6],
    freshLemonJuice: [2, "tsp"]
};
var wildMaineBlueberry = WildMaineBlueberry();

console.log(wildMaineBlueberry); // undefined
console.log(typeof wildMaineBlueberry); // undefined
console.log(blueberries); // [ 2, 'cup', 'fresh wild Maine blueberries' ]
console.log(vanilla); // [ 1, 'bean', 'Madagascar Bourbon' ]
