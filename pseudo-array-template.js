var array = {length: 0};

array.pop = function () {
	var lastValue = this[(this.length) - 1];
    this[(this.length) - 1] = undefined;
    this.length -= 1;
    return lastValue;
};

array.push = function (value) {
	this[this.length] = value;
    this.length += 1;
};

array.join = function (char) {
    var string = this[0];
	for (var counter = 1; counter < this.length; counter ++) {
        string += (char || ' ') + this[counter];
    }
    return string;
};

// Question b): That sequence will result in the string 'cab'
// Question c): I think that will result in the string 'undefined a'.
// EDIT: Dang, looks like I had the order reversed.