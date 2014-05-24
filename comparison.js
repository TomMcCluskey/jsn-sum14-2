function copy(obj) {
    objCopy = {}; //is this the best way to have a function make a global variable?
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
    
}

function union(objA, objB) {
    
}

function intersect(objA, objB) {
    
}

function subtract(objA, objB) {
    
}


//var niagara = { name: "Niagara", hull: 'wood', rig: "brig", engines: 2, sails: { staysails: ['Fore Topmast Staysail', 'Outer Jib', 'Flying Jib', 'Main Staysail', 'Main Topmast Staysail', 'Spanker'], squares: ["Fores'l", "Fore Tops'l", "Fore T'Gallant", "Fore Royal", "Mains'l", "Main Tops'l", "Main T'Gallant", "Main Royal"] }, crew: 18 };

//var lawrence = copy(niagara);
//console.log(equal(lawrence, niagara));
//lawrence.rig = 'snow';
//console.log(equal(lawrence, niagara));