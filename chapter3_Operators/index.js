//Combining Math and Assignment Operations
console.log('/** Combining Math and Assignment Operations */');

var dough = {
    pastryFlour: [1 + 3/4, "cup"],
    almondFlout: [1/3, "cup"],
    saigonCinnamon: [1, "tsp"],
    mincedLemonZest: [2, "tsp"],
    seaSalt: [1/4, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    pourableVanillaYogurt: [1, "cup"],
    egg: [1],
    wildBlueberries: [1 + 1/4, "cup"]
};

console.log(dough);

dough.pastryFlour[0] *= 3;
dough.almondFlout[0] *= 3;
dough.saigonCinnamon[0] *= 3;
dough.mincedLemonZest[0] *= 3;
dough.seaSalt[0] *= 3;
dough.soda[0] *= 3;
dough.tartar[0] *= 3;
dough.pourableVanillaYogurt[0] *= 3;
dough.egg[0] *= 3;
dough.wildBlueberries[0] *= 3;

console.log(dough);


// 3 -= 1 generate SyntaxError: invalid assignment left-hand side
// "blue" += "berries" generate SyntaxError: invalid assignment left-hand side
var three = 3;
console.log(three -= 1);

//Incrementing of Decrementing Values
console.log('/** Incrementing or Decrementing Values */');

var dough = {
    pastryFlour: [1 + 3/4, "cup"],
    almondFlout: [1/3, "cup"],
    saigonCinnamon: [1, "tsp"],
    mincedLemonZest: [2, "tsp"],
    seaSalt: [1/4, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    pourableVanillaYogurt: [1, "cup"],
    egg: [1],
    wildBlueberries: [1 + 1/4, "cup"]
};

console.log(dough);

dough.saigonCinnamon[0] ++;
console.log(dough.saigonCinnamon[0]);
dough.mincedLemonZest[0] --;
console.log(dough.mincedLemonZest[0]);

var dough = {
    pastryFlour: [1 + 3/4, "cup"],
    almondFlout: [1/3, "cup"],
    saigonCinnamon: [1, "tsp"],
    mincedLemonZest: [2, "tsp"],
    seaSalt: [1/4, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    pourableVanillaYogurt: [1, "cup"],
    egg: [1],
    wildBlueberries: [1 + 1/4, "cup"]
};

console.log(++ dough.mincedLemonZest[0]);

//Testing for Equality
console.log('/** Testing for Equality */');

var dough = {
    pastryFlour: [1 + 2/3, "cup"],
    hazelnutFlout: [1/3, "cup"],
    butter: [3, "tbs"],
    sugar: [2, "tbs"],
    seaSalt: [1/4, "tsp"],
    soda: [1/2, "tsp"],
    tartar: [1, "tsp"],
    heavyWhippingCream: [1, "cup"],
    currants: [1/3, "cup"]
};

console.log(dough);

console.log(dough.heavyWhippingCream[0] === 2/3);
console.log(dough.currants[0] === dough.hazelnutFlout[0]);
console.log(dough.hazelnutFlout[0] * 5 === dough.pastryFlour[0]);
console.log(dough.soda[0] / dough.tartar[0] === 1);

//Testing for Inequality
console.log('/** Testing fo Inequality */');

var dough = {
    pastryFlour: [1 + 2/3, "cup"],
    hazelnutFlout: [1/3, "cup"],
    butter: [3, "tbs"],
    sugar: [2, "tbs"],
    seaSalt: [1/4, "tsp"],
    soda: [1/2, "tsp"],
    tartar: [1, "tsp"],
    heavyWhippingCream: [1, "cup"],
    currants: [1/3, "cup"]
};

console.log(dough.heavyWhippingCream[0] !== 2/3);
console.log(dough.currants[0] !== dough.hazelnutFlout[0]);
console.log(dough.hazelnutFlout[0] * 5 !== dough.pastryFlour[0]);
console.log(dough.soda[0] / dough.tartar[0] !== 1);

//Comparing Objects, Arrays and Functions
console.log('/** Comparing Object, Arrays and Functions */');

var dough = {
    pastryFlour: [1 + 2/3, "cup"],
    hazelnutFlout: [1/3, "cup"],
    butter: [3, "tbs"],
    sugar: [2, "tbs"],
    seaSalt: [1/4, "tsp"],
    soda: [1/2, "tsp"],
    tartar: [1, "tsp"],
    heavyWhippingCream: [1, "cup"],
    currants: [1/3, "cup"]
};

console.log(dough.pastryFlour === [1 + 2/3, "cup"]); //false
console.log(dough.currants !== [1/3, "cup"]); // true

console.log(dough === {
    pastryFlour: [1 + 2/3, "cup"],
    hazelnutFlout: [1/3, "cup"],
    butter: [3, "tbs"],
    sugar: [2, "tbs"],
    seaSalt: [1/4, "tsp"],
    soda: [1/2, "tsp"],
    tartar: [1, "tsp"],
    heavyWhippingCream: [1, "cup"],
    currants: [1/3, "cup"]
}); // false
console.log(dough === dough); // true
console.log(dough.pastryFlour === [1 + 2/3, "cup"]); //false
console.log(dough.pastryFlour === dough.pastryFlour); //true
console.log([1 + 2/3, "cup"] === [1 + 2/3, "cup"]); //false

// Determining Whether One Number of String is Greater Than Another
console.log('/**  Determining Whether One Number of String is Greater Than Another */');


