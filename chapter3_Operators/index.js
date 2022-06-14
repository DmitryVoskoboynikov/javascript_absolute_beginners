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

var cake = {
    dough: {
        organicPastryFlour: [1 + 1 / 2, "cup"],
        freshlyGroundNutmeg: [1 / 4, "tsp"],
        saigonCinnamon: [1 / 2, "tsp"],
        soda: [1, "tsp"],
        tartar: [1, "tsp"],
        egg: [2],
        yogurtCheese: [2 / 3, "cup"],
        pureMapleSyrup: [1 / 3, "cup"],
        shreddedGrannySmith: [1 + 2 / 3, "cup"],
        choppedPecans: [1 / 2, "cup"]
    },
    icing: {
        yogurtCheese: [2 / 3, "cup"],
        pureMapleSyrup: [1 + 1/3, "tbs"],
        groundPecans: [2, "tsp"]
    }
};

console.log(cake);

console.log(cake.dough.organicPastryFlour[0] > cake.dough.shreddedGrannySmith[0]); //false
console.log(cake.dough.choppedPecans[0] > cake.dough.pureMapleSyrup[0]); // ture
console.log(cake.dough.freshlyGroundNutmeg[0] > cake.dough.saigonCinnamon[0]); //false
console.log(cake.icing.yogurtCheese[0] > cake.dough.yogurtCheese[0]); // false


var compare = "apple" > "Granny Smith";
console.log(compare); //true
console.log("apple".toLowerCase() > "Granny Smith".toLowerCase()); // false

// Determining Whether One Number or String Is Less Than Another
console.log("/** Determining Whether One Number or String Is Less Than Another */");

var cake = {
    dough: {
        organicPastryFlour: [1 + 1 / 2, "cup"],
        freshlyGroundNutmeg: [1 / 4, "tsp"],
        saigonCinnamon: [1/2, "tsp"],
        soda: [1, "tsp"],
        tartar: [1, "tsp"],
        egg: [2],
        yogurtCheese: [2/3, "cup"],
        pureMapleSyrup: [1/3, "cup"],
        shreddedGrannySmith: [1 + 2/3, "cup"],
        choppedPecans: [1/2, "cup"]
    },
    icing: {
        yogurtCheese: [2/3, "cup"],
        pureMapleSyrup: [1 + 1/3, "tbs"],
        groundPecans: [2, "tsp"]
    }
}

console.log(cake);

console.log(cake.dough.organicPastryFlour[0] < cake.dough.shreddedGrannySmith[0]); //true
console.log(cake.dough.choppedPecans[0] < cake.dough.pureMapleSyrup[0]); //false
console.log(cake.dough.freshlyGroundNutmeg[0] < cake.dough.saigonCinnamon[0]); //true
console.log(cake.icing.yogurtCheese[0] < cake.dough.yogurtCheese[0]); //false

// Greater Than or Equal to, Less Than or Equal to
console.log("/** Greater Than or Equal to, Less Than or Equal to */");

var cake = {
    dough: {
        organicPastryFlour: [1 + 1/2, "cup"],
        freshlyGroundNutmeg: [1/4, "tsp"],
        saigonCinnamon: [1/2, "tsp"],
        soda: [1, "tsp"],
        tartar: [1, "tsp"],
        egg: [2],
        yogurtCheese: [2/3, "cup"],
        pureMapleSyrup: [1/3, "cup"],
        shreddedGrannySmith: [1 + 2/3, "cup"],
        choppedPecans: [1/2, "cup"]
    },
    icing: {
        yogurtCheese: [2/3, "cup"],
        pureMapleSyrup: [1 + 1/3, "tbs"],
        groundPecans: [2, "tsp"]
    }
};

console.log(cake.icing.yogurtCheese[0] <= cake.dough.yogurtCheese[0]); //true
console.log(cake.icing.yogurtCheese[0] >= cake.dough.yogurtCheese[0]); //true
console.log(cake.dough.organicPastryFlour[0] <= cake.dough.shreddedGrannySmith[0]); //true
console.log(cake.dough.choppedPecans[0] >= cake.dough.pureMapleSyrup[0]); //true

// Creating More Complex Comparisons
console.log("/** Creating More Complex Comparisons */");

// Saying or With ||
console.log("/** Saying or With || */");

var muffin = {
    oatFlour: [1/3, "cup"],
    barleyFlour: [1/3, "cup"],
    pastryFlour: [1 + 1/3, "cup"],
    freshlyGroundNutmeg: [1/4, "tsp"],
    saigonCinnamon: [1/2, "tsp"],
    seaSalt: [1/4, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    mapleBrownCow: [1 + 1/2, "cup"],
    boysenberries: [2, "cup"],
    choppedPecans: [1/3, "cup"]
};

console.log(muffin.mapleBrownCow[0] > muffin.boysenberries[0] || muffin.oatFlour[0] === muffin.barleyFlour[0]); //true
console.log(muffin.boysenberries[0] < muffin.choppedPecans[0] || muffin.pastryFlour[0] < muffin.barleyFlour[0]); //false

// Saying "and" with &&
console.log("/** Saying \"and\" with && */");

var muffin = {
    oatFlour: [1/3, "cup"],
    barleyFlour: [1/3, "cup"],
    pastryFlour: [1 + 1/3, "cup"],
    freshlyGroundNutmeg: [1/4, "tsp"],
    saigonCinnamon: [1/2, "tsp"],
    seaSalt: [1/4, "tsp"],
    soda: [1, "tsp"],
    tartar: [1, "tsp"],
    mapleBrownCow: [1 + 1/2, "cup"],
    boysenberries: [2, "cup"],
    choppedPecans: [1/3, "cup"]
};

console.log(muffin.mapleBrownCow[0] > muffin.boysenberries[0] && muffin.oatFlour[0] === muffin.barleyFlour[0]); //false
console.log(muffin.boysenberries[0] > muffin.choppedPecans[0] && muffin.pastryFlour[0] > muffin.barleyFlour[0]); //true

// Conditionally Returning One of Two Values
console.log("/** Conditionally Returning One of Two Values */");

