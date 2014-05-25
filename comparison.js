function copy(obj) {
    var objCopy = {}; //made local; global isn't important.
    for (property in obj) {
        objCopy[property] = obj[property];
    }
    return objCopy;
}

function equal(objA, objB) {
    function match(primary, secondary) {
        for (property in primary) {
            if (secondary[property] != primary[property]) {
//                console.log(secondary[property] + ' != ' + primary[property]);
                return false;
            } else {
//                console.log(secondary[property] + ' == ' + primary[property]);
            }
        }
        return true;
    }
    if (match(objA, objB) && match(objB, objA)) {
        return true;
    } else { 
        return false;
    }
}

function similar(objA, objB) {
    function compare(first, second) {
        for (property in first) {
            if (!second.hasOwnProperty(property)) {
                return false;
                }
        }
        return true;
    }
    return compare(objA, objB) && compare(objB, objA);
}

function union(objA, objB) {
    var newObj = {};
    function getProps(source, destination) {
        for (property in source) {
            destination[property] = source[property];
        }
    }
    getProps (objB, newObj);
    getProps (objA, newObj);
    return newObj;
}

function intersect(objA, objB) {
    var newObj = {};
    for (property in objA) {
        if (objB.hasOwnProperty(property)) {
            newObj[property] = (objA[property] && objB[property]);
        }
    }
    return newObj
}

function subtract(objA, objB) {
    var newObj = {};
    for (property in objA) {
        if (!objB.hasOwnProperty(property)) {
            newObj[property] = (objA[property]);
        }
    }
    return newObj;
}

function assert(claim,message) {
    if (!claim) {console.error(message);} else {console.log('all good!');}
}
//var niagara = { name: "Niagara", hull: 'wood', rig: "brig", engines: 2, sails: { staysails: ['Fore Topmast Staysail', 'Outer Jib', 'Flying Jib', 'Main Staysail', 'Main Topmast Staysail', 'Spanker'], squares: ["Fores'l", "Fore Tops'l", "Fore T'Gallant", "Fore Royal", "Mains'l", "Main Tops'l", "Main T'Gallant", "Main Royal"] }, crew: 18 };

//var lawrence = copy(niagara);
//console.log(equal(lawrence, niagara));
//lawrence.rig = 'snow';
//console.log(equal(lawrence, niagara));

var tom = { whiskers: 'scruffy', tail: false, eatsBugs: false};
var shackleton = { whiskers: 'luxurious', tail: true, fleas: false};
var sally = { whiskers: 'short', tail: true, tongue: 'spotty'};

assert(equal(union(tom, shackleton), {eatsBugs: false, tail: false, fleas: false, whiskers: 'scruffy'}), 'Union test #1 has failed!')
assert(equal(union(tom, sally), {whiskers: 'scruffy', tail: false, eatsBugs: false, tongue: 'spotty'}), 'Union test #2 has failed!')
assert(equal(union(shackleton, sally), {whiskers: 'luxurious', tail: true, fleas: false, tongue: 'spotty'}), 'Union test #3 has failed!')
assert(equal(union(shackleton, tom), {whiskers: 'luxurious', tail: true, fleas: false, eatsBugs: false}), 'Union test #4 has failed!')
assert(equal(union(sally, tom), {whiskers: 'short', tail: true, tongue: 'spotty', eatsBugs: false}), 'Union test #5 has failed!')
assert(equal(intersect(tom, shackleton), {whiskers: 'luxurious', tail: false}), 'Intersect test #1 has failed!')
assert(equal(intersect(tom, sally), {whiskers: 'short', tail: false}), 'Intersect test #2 has failed!')
assert(equal(intersect(shackleton, sally), {whiskers: 'short', tail: true}), 'Intersect test #3 has failed!')
assert(equal(intersect(shackleton, tom), {whiskers: 'scruffy', tail: false}), 'Intersect test #4 has failed!')
assert(equal(intersect(sally, tom), {whiskers: 'scruffy', tail: false}), 'Intersect test #5 has failed!')
assert(equal(subtract(tom, shackleton), {eatsBugs: false}), 'Subtract test #1 has failed!')
assert(equal(subtract(tom, sally), {eatsBugs: false}), 'Subtract test #2 has failed!')
assert(equal(subtract(shackleton, sally), {fleas: false}), 'Subtract test #3 has failed!')
assert(equal(subtract(shackleton, tom), {fleas: false}), 'Subtract test #4 has failed!')
assert(equal(subtract(sally, tom), {tongue: 'spotty'}), 'Subtract test #5 has failed!')

// Question D: On the asymmetry of union and intersection. These are asymmetrical because
// the values of the properties in the new object depend on the order in which the 
// original objects are passed in. You can actually see this in the assertion tests above;
// union(tom, shackleton) is different than union(shackleton, tom).