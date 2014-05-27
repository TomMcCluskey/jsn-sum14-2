
var people = {};

people.index = {};

function verify(name) {
    if (!people.index[name]) {
        people.index[name] = { name: name, friends: {} };
    }
}

people.meet = function(nameA,nameB) {
	// check for name property in index, add where appropriate. Increment numbers.
    
    function relate(person1, person2) {
        if (!people.index[person1]['friends'][person2]) {
            people.index[person1]['friends'][person2] = 0;
        }
    }
    
    if (nameA != nameB) {
        verify(nameA);
        verify(nameB);

        relate(nameA, nameB);
        relate(nameB, nameA);

        people.index[nameA]['friends'][nameB] += 1;
        people.index[nameB]['friends'][nameA] += 1;
    }
    
}

people.haveMet = function(nameA,nameB) {
    verify(nameA); // possible downside is that people not in index
    verify(nameB); // get added to it here
	if (people.index[nameA]['friends'][nameB]) {
        return people.index[nameA].friends[nameB];
    } else {
        return 0;
    }
}

people.friendsOf = function(name) {
	if (!people.index[name]) {
        return undefined;
    } else {
        var friendList = [];
        for (property in people.index[name]['friends']) {
            friendList.push(property);
        }
        return friendList.sort().join();
    }
}


function assert(claim,message) {
    if (!claim) {console.error(message);} else {console.log('all good!');}
}