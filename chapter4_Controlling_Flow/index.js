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

// Taking One of Several Paths with a Switch
console.log("/** Taking One of Several Paths with a Switch */");

var jersey = 92, name = "";

switch (jersey) {
    case 7:
        name = "Roethlisberger";
        break;
    case 10:
        name = "Holmes";
        break;
    case 17:
        name = "Wallace";
        break;
    case 34:
        name = "Mendenhall";
        break;
    case 43:
        name = "Polamalu";
        break;
    case 83:
        name = "Miller";
        break;
    case 92:
    case 97:
        name = "Harrison";
        break;
    case 94:
        name = "Timmons";
        break;
    case 96:
        name = "Hood";
        break;
    default:
        name = "not worn by any Steeler";
        break;
}

console.log("Number " + jersey + " is " + name + ".");

var jersey = 7, name = "";

function identifyPlayer() {
    switch (jersey) {
        case 7:
            return "Roethlisberger";
        case 10:
            return "Holmes";
        case 17:
            return "Wallace";
        case 34:
            return "Mendenhall";
        case 43:
            return "Polamalu";
        case 83:
            return "Miller";
        case 86:
            return "Ward";
        case 92:
            return "Harrison";
        case 94:
            return "Timmons";
        case 96:
            return "Hood";
        default:
            return "not worn by any Steeler";
    }
}

console.log("Number " + jersey + " is " + identifyPlayer() + ".");

// Writing a while Loop
console.log("/** Writing a while Loop */");

var looseLeafTea = [
    "Ghillidary",
    "Kenilworth",
    "Milima",
    "Keemun",
    "Boisahabi",
    "Manohari",
    "Borpatra",
    "Lukwah",
    "Khongea"
];

var mood = "glum";
var i = 0;

while (i < looseLeafTea.length) {
    if (looseLeafTea[i] === "Borpatra") {
        mood = "chery";
        break;
    }

    i++;
}

console.log("I feel " + mood + "!");

// Aborting an Iteration but Not the Loop
console.log("/** Aborting an Iteration but Not the Loop */");

var looseLeafTea = [
    "Ghillidary",
    "",
    "Kenilworth",
    "Milima",
    ,
    "Keemun",
    "Boisahabi",
    "Manohari",
    "Borpatra",
    "Lukwah",
    "Khongea"
];

console.log(looseLeafTea);

var mood = "glum";
var i = 0;
while (i < looseLeafTea.length) {
    if (looseLeafTea[i] === "Borpatra") {
        mood = "cheery";
        break;
    } else if (! looseLeafTea[i]) {
        looseLeafTea.splice(i, 1);
        continue;
    } else {
        i++;
    }
}

console.log("I feel " + mood + "!");
console.log(looseLeafTea);

// Replacing Break with Return in a Function
console.log("/** Replacing Break with Return in a Function */");




