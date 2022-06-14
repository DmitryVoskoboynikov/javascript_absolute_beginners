// Writing an if Condition
console.log("/** Writing an if Condition */");

var mayfly = function () {
    var tally = 0;
    return {
        addToTally: function (km) {
            if (typeof km === "number" && isFinite(km)) {
                return tally += km;
            } else {
                return "Invalid parameter!";
            }
        },
        kmLeftToLive: function () {
            if (tally < 100) {
                return "Mayfly has " + (100 - tally) + " kilometers left to live.";
            } else {
                return "Mayfly is dead!";
            }
        }
    }
}();

console.log(mayfly.addToTally(10));
console.log(mayfly.addToTally(10));
console.log(mayfly.addToTally(10));
console.log(mayfly.addToTally(10));

console.log(mayfly.kmLeftToLive());

console.log(mayfly.addToTally("ten"));
console.log(mayfly.addToTally(110));

console.log(mayfly.kmLeftToLive());

// Coding Several Paths with the else if Idiom
console.log("/** Coding Several Paths with the else if Idiom */");

var fridge = {
    brownCow: false,
    stonyfield: false,
    fage: false,
    lifeway: false
};
var smoothie;
if (fridge.brownCow)
    smoothie = "Brown Cow cream-top yogurt";
else if (fridge.stonyfield)
    smoothie = "Stonyfield cream-top yogurt";
else if (fridge.fage)
    smoothie = "Fage cultured cream";
else if (fridge.lifeway)
    smoothie = "Lifeway Greek-style kefir";
else
    smoothie = "Dannon yogurt";

console.log(smoothie += ", grass-fed cream and milk, Saigon cinnamon, and wild blueberries.");

// Controlling Flow with Conditional Expressions
console.log("/** Controlling Flow with Conditional Expressions */");

var fridge = {
    brownCow: false,
    stonyfield: false,
    fage: false,
    lifeway: true
};

var smoothie = fridge.brownCow ? "Brown Cow cream-top yogurt" :
    (fridge.stonyfield ? "Stonyfield cream-top yogurt" :
        (fridge.fage ? "Fage cultured cream" :
            (fridge.lifeway ? "Lifeway Greek-style kefir" : "Dannon yogurt")));
console.log(smoothie += ", grass-fed cream and milk, Saigon cinnamon, and wild blueberries.");
