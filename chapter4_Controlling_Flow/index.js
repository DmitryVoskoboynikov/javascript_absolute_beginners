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

//console.log(looseLeafTea);

function findTea(tea) {
    var i = 0;
    while (i < looseLeafTea.length)
    {
        if (looseLeafTea[i] === tea) {
            return "cheery";
        } else if (! looseLeafTea[i]) {
            looseLeafTea.splice(i, 1);
            continue;
        } else {
            i++;
        }
    }

    return "glum";
}

console.log("I feel " + findTea("Kenilworth") + "!");

// Writing a do while loop
console.log("/** Writing a do while loop */");

var spices = [
    "cinnamon",
    "ginger",
    "nutmeg",
    "cloves",
    "sesame seed",
    "pepper",
    "rosemary",
    "tarragon",
    "basil",
    "mace",
    "poppy seed",
    "lemon peel",
    "vanilla",
    "oregano",
    "allspice",
    "thyme"
];

//console.log(spices);

var putTheKaiboshOn = true;
var i = 0;
do {
    if (spices[i] === "lemon peel")
    {
        putTheKaiboshOn = false;
        break;
    }

    i++;
} while (i < spices.length);

console.log((putTheKaiboshOn) ? "No can do!" : "Go right ahead!");

// Writing a for Loop
console.log("/** Writing a for Loop */");

var theFall = [
    "Chasing Pirates",
    "Even Though",
    "Light as a Feather",
    "Young Blood",
    "I Wouldn't Need You",
    "Waiting",
    "It's Gonna Be",
    "You've Ruined Me",
    "Back to Manhattan",
    "Stuck",
    "December",
    "Tell Yer Mama",
    "Man of the Hour"
];

var song = "Back to Manhattan";

for (var i = 0, j = 0; i < theFall.length; i ++) {
    if (theFall[i] === song) {
        j = i + 1;
        break;
    }
}

console.log(song + (j > 0 ? " is track " + j : " is not ") + " on The Fall.");

// Enumerating Members with a for in Loop
console.log("/** Enumerating Members with a for in Loop */");

var shoes = {
    "LunaRacer": 6.6,
    "Air Max": 13,
    "LunarGlide": 10.2,
    "Zoom Streak XC": 7,
    "Free": 8.6,
    "Mayfly": 4,
    "Zoom Vomero": 11.6,
    "LunarElite": 9.7
}

var myOptions = [];
for (var shoe in shoes) {
    if (shoes[shoe] >= 10)
    {
        myOptions.push(shoe);
    }
}

console.log(myOptions);

// Snappier Conditionals
console.log("/** Snappier Conditions */");

function namePirate(jersey) {
    var name;
    switch (jersey) {
        case 77:
            name = "D.J. Carrasco";
            break;
        case 53:
            name = "Brendan Donnelly";
            break;
        case 29:
            name = "Octavio Dotel";
            break;
        case 46:
            name = "Garrett Jones";
            break;
        default:
            name = "not worn by any Pirate";
    }

    return jersey + " is " + name + ".";
}

console.log(namePirate(46));

var pirates = {
    "77": "D.J. Carrasco",
    "53": "Brendan Donnelly",
    "29": "Octavio Dotel",
    "57": "Zach Duke",
    "48": "Javier Lopez",
    "28": "Paul Maholm",
    "34": "Daniel McCutchen",
    "47": "Evan Meek",
    "37": "Charlie Morton",
    "49": "Ross Ohlendorf",
    "62": "Hayden Penn",
    "43": "Jack Taschner",
    "41": "Ryan Doumit",
    "35": "Jason Jaramillo",
    "13": "Ronny Cedeno",
    "6": "Jeff Clement",
    "2": "Bobby Crosby",
    "3": "Akinori Iwamura",
    "15": "Andy LaRoche",
    "19": "Ryan Church",
    "46": "Garrett Jones",
    "22": "Andrew McCutchen",
    "85": "Lastings Milledge",
    "58": "John Raynor",
    "24": "Delwyn Young"
};

function namePirate1(jersey)
{
    return jersey + " is " + (pirates[jersey] ? pirates[jersey] : "not worn by a Pirate") + ".";
}

console.log(namePirate1(3));

// Snappier Loops
console.log("/** Snappier Loops */");

var topTwenty = {
    "Crosby": 49,
    "Ovechkin": 48,
    "Stamkos": 48,
    "Marleau": 43,
    "Gaborik": 41,
    "Kovalchuk": 40,
    "Heatley": 39,
    "Semin": 39,
    "Parise": 37,
    "Burrows": 35,
    "Kopitar": 34,
    "Ryan": 34,
    "Carter": 33,
    "Nash": 33,
    "Iginla": 32,
    "Penner": 32,
    "Backstrom": 31,
    "Hornqvist": 30,
    "Jokinen": 30,
    "Kane": 30
};

var rocketRichard = ["Ovechkin", "Crosby", "Marleau", "Stamkos", "Gaborik"], note = "";

console.log(rocketRichard);

rocketRichard.sort(function(p1, p2) {
    var d = topTwenty[p2] - topTwenty[p1];
    console.log(p1, p2, d);
    if (d !== 0) {
        return d;
    } else {
        return (p1 < p2) ? -1 : 1;
    }
});

for (var i = 0; i < rocketRichard.length; i ++) {
    note = note + rocketRichard[i] + ": " + topTwenty[rocketRichard[i]] + ", ";
}

console.log(note.slice(0, -2));
