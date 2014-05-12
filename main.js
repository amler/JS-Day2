/*===============Lecture Examples ====================

========= MAP ================
var thing = ["abe", "'bama", "W"].map(function(president) {
return "Mr. " + president;
});
console.log(thing);

========== REDUCE ============
var reDuce = [1, 2, 3, 4].reduce (function (x, y) {
	return x + "" + y;
});
console.log(reDuce);

var reDuce = [1, 8, 3, 4].reduce (function (x, y) {
	console.log(x, y);
	return x + y;
});
console.log(reDuce);
=================================

var myself = {
	name: "Heather",
	favoriteColor: "blue",
	favoriteSwear: "bastard"
}
=== 1 ====
console.log("My name is " + person.name); //dot syntax

=== 2 ====
console.log("And I like " + person['favoriteColor']); //referencing string

=== 3 ====
var key = 'favoriteSwear';
console.log("And I like " + person['favoriteColor'] + ", ya " + person[key] + "!!!");  



var persons = [];
	persons[0] = {
		name: "Heather",
		favoriteColor: "red",
		address: {
			street: "123 Washington Street",
			city: "Charlotte",
			state: "NC",
			zipcode: "90875"
		},
		born: 1974,
		gender: "female",
		lottoNumbers: [10, 28, 39, 51, 59, 14]
	};

	persons[1] = {
		name: "Will",
		favoriteColor: "green",
		address: {
			street: "456 Quail Meadow Lane",
			city: "Charlotte",
			state: "NC",
			zipcode: "28210"
		},
		born: 1980,
		gender: "male",
		lottoNumbers: [06, 07, 13, 51, 52, 09]
	};	 
		
	persons[2] = {
		name: "Erwin",
		favoriteColor: "orange",
		address: {
			street: "567 Carmel Street",
			city: "Belmont",
			state: "NC",
			zipcode: "45678"
		},
		born: 1959,
		gender: "male",
		lottoNumbers: [10, 28, 15, 09, 07, 11]
	};

	persons[3] = {
		name: "Maria",
		favoriteColor: "blue",
		address: {
			street: "567 Carmel Street",
			city: "Austin",
			state: "TX",
			zipcode: "45678"
		},
		born: 1960,
		gender: "female",
		lottoNumbers: [16, 32, 05, 31, 47, 55]
	};

	persons[4] = {
		name: "Troy",
		favoriteColor: "orange",
		address: {
			street: "123 Sparrow Street",
			city: "Hickory",
			state: "NC",
			zipcode: "90210"
		},
		born: 2000,
		gender: "male",
		lottoNumbers: [16, 32, 05, 31, 47, 55]
	};


//  log everyone that doesnt live in NC

persons.forEach(function(element, index, array){
	//console.log(element.address.state);
	if (element.address.state !== "NC") {
		console.log(element.name + " does not live in North Carolina");
	}
});

// count gender 

var femaleCount = [];
persons.forEach(function(element, index, array){
	if (element.gender === "female") {
		femaleCount.push(1);
	} else {
		femaleCount.push(0);
	}
});
//console.log(femaleCount);

var totalFemales = femaleCount.reduce(function(previousValue, currentValue, index, array){
	//console.log (array[index]);
	//console.log(previousValue);
	//console.log(currentValue);
	//console.log("==============");
	return previousValue + currentValue; 
});
var totalPeople = femaleCount.length;
var totalMales = totalPeople - totalFemales;
console.log("There are " + totalPeople + " people.");
console.log("There are " + totalFemales + " females.");
console.log("There are " + totalMales + " males.");

// more men than women

if (totalMales > totalFemales) {
	console.log("There are more men than women.");
} else if (totalFemales === totalMales) {
	console.log("There are the same amount of males & females.")
} else {
	console.log("There are more women than men.");
}; 

// build out mr or ms display name

var guestList = persons.map(function(element) {
	//console.log(element);
	var prefix = "Mr. ";
	if (element.gender === "female") {
		prefix = "Ms. "
	}
	return prefix + element.name;
});
console.log(guestList);

// find out the oldest year someone was born in

var years = persons.map(function(element) {
	return element.born;
});
console.log(years);

var minYear = years.reduce(function(previousValue, currentValue, index, array){
	if (previousValue < currentValue) {
		return previousValue;
	} else {
		return currentValue;
	}
});
//console.log(minYear);

var maxYear = years.reduce(function(previousValue, currentValue, index, array){
	if (previousValue > currentValue) {
		return previousValue;
	} else {
		return currentValue;
	}
});
//console.log(maxYear);

// figure out everyones age 

persons = persons.map(function(element) {
	//console.log(element);
	element.age = 2014 - element.born;
	return element;
});
//console.log(persons);

// find out the youngest persons 

var ages = persons.map(function(element) {
	return element.age;
});

// console.log(ages);
var youngest = ages.reduce(function(previousValue, currentValue) {
	if (previousValue < currentValue) {
		return previousValue;
	} else {
		return currentValue; 
	}
});
//console.log(youngest);
var youngPeople = [];
persons.forEach(function(element) {
	if (element.age === youngest) {
		youngPeople.push(element.name);
	}
});
console.log(youngPeople);

var totalAge = ages.reduce(function(x, y) {
	return (x + y);
})
//console.log("The total age of all people is " + totalAge);
var averageAge = totalAge / totalPeople;
averageAge = Math.round(averageAge);
//console.log("The average age of all people is " + averageAge);

//most favorited color

var colorTotals = {};
persons.forEach(function(element) {
	var colorkey = element.favoriteColor
	if (colorTotals[colorkey] == undefined) {
		colorTotals[colorkey] = 1;
	} else {
		colorTotals[colorkey] ++;
	}
});

var popColor = "";
var popColorTotal = 0;
for (var key in colorTotals) {
	if (colorTotals[key] > popColorTotal) {
		popColor = key;
		popColorTotal = colorTotals[key];
	}
};
console.log(popColorTotal + " people like the color " + popColor + ", making it the most popular!");

// count how many people like the color orange

var popColorPeople = [];
persons.forEach(function(element) {
	if (element.favoriteColor == popColor) {
		popColorPeople.push(element.name);
	}
});
var message = "The most popular color " + popColor + " is liked by ";
for (var i = 0; i < popColorPeople.length; i++) {
	message += popColorPeople[i] + " & " ;
};
var orangeMessage = message.slice(0, -2);
console.log(orangeMessage);


// build out a mailing address. add a mailing address node create a string 
var mailingAddress = [];
persons.forEach(function(element) {
	mailingAddress.push(element.name + " " + element.address.street + " " + element.address.city + " " + element.address.state + " " + element.address.zipcode);
	//console.log(element);
});
console.log(mailingAddress);

//====================================================== Who won the lottery 


var winningNumbers = [10, 28, 15, 09, 07, 11];
persons.forEach(function(person){
	var lottoCheck = 0;
	person.lottoNumbers.forEach(function(number, index){
		if (winningNumbers[index] === number) {
			lottoCheck ++
		}
	});
	if (lottoCheck === winningNumbers.length) {
		console.log(person.name);
	}	
});

//=========================
var lottosArray = persons.map(function(element) {
	return element.lottoNumbers;
});
console.log(lottosArray);

///=============================
var lottoWinners = persons.map(function(person, index, array){
	if ( person.lottoNumbers[0] === winningNumbers[0] &&
		 person.lottoNumbers[1] === winningNumbers[1] &&
		 person.lottoNumbers[2] === winningNumbers[2] &&
		 person.lottoNumbers[3] === winningNumbers[3] &&
		 person.lottoNumbers[4] === winningNumbers[4] &&
		 person.lottoNumbers[5] === winningNumbers[5]
	) {
		return 1;
	} else {
		return 0;
	}
});
console.log(lottoWinners);
var totalWinners = lottoWinners.reduce(function(x, y) {
	return x + y;
})
console.log("There is a total of " + totalWinners + " winner");


// how old will everyone be in 10 years

var agesDecade = persons.map(function(element) {
	return element.age + 10;
});
console.log(agesDecade);

*/
// Reduce attempts
var sentence = ["I ",  "don't ", "remember ", "math ", "enough to ", "come up with ", "multiple examples for", " reduce."].reduce(function(x, y) {
	return x + y;
});
console.log(sentence);




/*
=====================================
Total count includes 1 map, 2 foreach, & 1 reduce from optional homework. (pleaase!!!)
.forEach: 10
.map: 9
.reduce: 6

*/



