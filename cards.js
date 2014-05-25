// Simple version (no error-detection)

// function()--> possible return values

function inRange(number, min, max) {
    if (typeof (number) !== "number") {
        console.error('Validation Error! "' + number + '" is not a number');
        return NaN;
    } else if ((number <= max) && (number >= min)) {
        return true;
    } else {
        console.error('Validation Error! "' + number + '" is outside the given range');
        return undefined;
    }
}

function rank(card) { // --> 1..13
    if ( inRange(card, 0, 51)) {
        return (Math.floor(card/4) + 1);
    } else {
        return;
    }        
}

function suit(card) { // --> 1..4
    if ( inRange(card, 0, 51)) {
        return ((card) % 4) + 1;
    } else {
        return;
    }        
}

function cardID(rank, suit) { // --> 0..51
    if ((inRange(rank, 1, 13)) && (inRange(suit, 1, 4))) {
        return ((rank - 1) * 4 + suit - 1);
    } else {
        return;
    }        
}

function color(card) { // -->"red","black"
    if ( inRange(card, 0, 51)) {
        if (suit(card) < 3) {
            return "red";
        } else {
            return "black";
        }
    } else {
        return;
    }
}

function name(card) { // --> string
        if (inRange(card, 0, 51)) {
        var nameString = "";
        switch (rank(card)) {
        case 1:
            nameString = nameString.concat("Ace");
            break;
        case 2:
            nameString = nameString.concat("Two");
            break;
        case 3:
            nameString = nameString.concat("Three");
            break;
        case 4:
            nameString = nameString.concat("Four");
            break;
        case 5:
            nameString = nameString.concat("Five");
            break;
        case 6:
            nameString = nameString.concat("Six");
            break;
        case 7:
            nameString = nameString.concat("Seven");
            break;
        case 8:
            nameString = nameString.concat("Eight");
            break;
        case 9:
            nameString = nameString.concat("Nine");
            break;
        case 10:
            nameString = nameString.concat("Ten");
            break;
        case 11:
            nameString = nameString.concat("Jack");
            break;
        case 12:
            nameString = nameString.concat("Queen");
            break;
        case 13:
            nameString = nameString.concat("King");
            break;
        }
        nameString = nameString.concat(" of ");
        switch (suit(card)) {
        case 1:
            nameString = nameString.concat("Hearts");
            break;
        case 2:
            nameString = nameString.concat("Diamonds");
            break;
        case 3:
            nameString = nameString.concat("Spades");
            break;
        case 4:
            nameString = nameString.concat("Clubs");
            break;
        }
        return nameString;
        } else {
            return;
        }
}

function precedes(cardA, cardB) { //-->false,true
   if ((inRange(cardA, 0, 51)) && (inRange(cardB, 0, 51))) {
        if (rank(cardB) - rank(cardA) === 1) {
            return true;
        } else if ((rank(cardB) == 1) && (rank(cardA) == 13)) {
            return true;
        } else {
            return false;
        }
   } else {
       return;
   }
}

function sameColor(cardA, cardB) { //-->false,true
       if ((inRange(cardA, 0, 51)) && (inRange(cardB, 0, 51))) {
        if (color(cardB) == color(cardA)) {
            return true;
        } else {
            return false;
        }
   } else {
       return;
   }
    }

function nextInSuit(cardA) {//--> 0..51
    if ( inRange(cardA, 0, 51)) {
        if (cardA < 48) {
            return (cardA + 4);
        } else {
            return (cardA + 4 - 52);
        }
    } else {

        return;
    }        
}

function prevInSuit(cardB) {//--> 0..51
    if ( inRange(cardB, 0, 51)) {
        if (cardB > 3) {
            return (cardB - 4);
        } else {
            return (cardB - 4 + 52);
        }
    } else {

        return;
    }        
}


// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,"Test 1 failed");
assert(rank(3)===1,"Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,"Test 4 failed");
assert(suit(5)===2,"Test 5 failed");
assert(suit(51)===4,"Test 6 failed");
assert(cardID(1,1)===0,"Test 7 failed");
assert(cardID(13,4)===51,"Test 8 failed");
assert(cardID(8,3)===30,"Test 9 failed");
assert(color(0)==='red',"Test 10 failed");
assert(color(2)==='black',"Test 11 failed");
assert(name(5)==='Two of Diamonds',"Test 12 failed");
assert(name(51)==='King of Clubs',"Test 13 failed");
assert(!precedes(0,1),"Test 14 failed");
assert(precedes(0,5),"Test 15 failed");
assert(precedes(51,0),"Test 16 failed");
assert(precedes(50,2),"Test 17 failed");
assert(sameColor(0,1),"Test 18 failed");
assert(!sameColor(1,2),"Test 19 failed");
assert(nextInSuit(0)===4,"Test 20 failed");
assert(nextInSuit(51)===3,"Test 21 failed");
assert(nextInSuit(48)===0,"Test 22 failed");
assert(prevInSuit(0)===48,"Test 23 failed");
assert(prevInSuit(3)===51,"Test 24 failed");
assert(prevInSuit(5)===1,"Test 25 failed");
// Extra testing!
// These tests check that invalid arguments produce invalid output.
// They may need rewriting for certain error-reporting schemes.
assert(!rank(52),"Test 26 failed");
assert(!rank("0"),"Test 27 failed");
assert(!rank(-1),"Test 28 failed");
assert(!suit(52),"Test 29 failed");
assert(!suit(false),"Test 30 failed");
assert(!suit(true),"Test 31 failed");
assert(isNaN(cardID(0,1)),"Test 32 failed");
assert(isNaN(cardID("1",1)),"Test 33 failed");
assert(isNaN(cardID(1,5)),"Test 34 failed");
assert(isNaN(cardID(14,1)),"Test 35 failed");
assert((typeof color('apple'))!='string',"Test 36 failed");
assert((typeof name(false))!='string',"Test 37 failed");
assert((typeof precedes(51,52))!='boolean',"Test 38 failed");
assert((typeof precedes(-1,0)),"Test 39 failed");
assert((typeof sameColor("0","1"))!='boolean',"Test 40 failed");
assert(isNaN(nextInSuit(52)),"Test 41 failed");
assert(isNaN(prevInSuit(52)),"Test 42 failed");

