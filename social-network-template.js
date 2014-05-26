
var people = {};

function Person(name, friends) {
    this.name = name;
    this.friends = friends;
}

people.index = {};

people.meet = function(nameA,nameB) {
	// check for name property in index, add where appropriate. Increment numbers.
    function verify(name) {
        if (!people.index[name]) {
            people.index[name] = { name: name, friends: {} };
        }
    }
    
    function relate(person1, person2) {
        if (!people.index[person1]['friends'][person2]) {
            people.index[person1]['friends'][person2] = 0;
        }
    }
    
    verify(nameA);
    verify(nameB);
    
    relate(nameA, nameB);
    relate(nameB, nameA);
    
    people.index[nameA]['friends'][nameB] += 1;
    people.index[nameB]['friends'][nameA] += 1;
    
}

people.haveMet = function(nameA,nameB) {
	//...
}

people.friendsOf = function(name) {
	//...
}


function assert(claim,message) {
    if (!claim) {console.error(message);} else {console.log('all good!');}
}

/*
The first thing we need to do is set up a relationship, then we need to 
increment that relationship. to set up the relationship, the first thing
we need to do is check to see if both people exist. Then we need to add
entries for the other people. Check to see if nameA exists. If not, create
an entry for them. If so, don't create an entry for them. Then see if 
nameB exists. If not, create an entry. If so, don't. Then add friends
entries for each to the other, or increment them if they already exist.
*/