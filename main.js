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
=================================*/
/*
var myself = {
	name: "Heather",
	favoriteColor: "blue",
	favoriteSwear: "$#%&"
}
=== 1 ====
console.log("My name is " + person.name); //dot syntax

=== 2 ====
console.log("And I like " + person['favoriteColor']); //referencing string

=== 3 ====
var key = 'favoriteSwear';
console.log("And I like " + person['favoriteColor'] + ", ya " + person[key] + "!!!");  

*/


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
	};


// 1. log everyone that doesnt live in NC

persons.forEach(function(element, index, array){
	//console.log(element.address.state);
	if (element.address.state !== "NC") {
		console.log(element.name + " does not live in North Carolina");
	}
});

//2. count gender 

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

//4. build out mr or ms display name

var guestList = persons.map(function(element) {
	//console.log(element);
	var prefix = "Mr. ";
	if (element.gender === "female") {
		prefix = "Ms. "
	}
	return prefix + element.name;
});
console.log(guestList);

//5. find out the oldest year someone was born in

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
console.log(minYear);

var maxYear = years.reduce(function(previousValue, currentValue, index, array){
	if (previousValue > currentValue) {
		return previousValue;
	} else {
		return currentValue;
	}
});
console.log(maxYear);

//6. figure out everyones age 

persons = persons.map(function(element) {
	//console.log(element);
	element.age = 2014 - element.born;
	return element;
});
console.log(persons);

//7. find out the youngest persons 

var ages = persons.map(function(element) {
	return element.age;
});
console.log(ages);
var youngest = ages.reduce(function(previousValue, currentValue) {
	if (previousValue < currentValue) {
		return previousValue;
	} else {
		return currentValue; 
	}
});
console.log(youngest);
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
console.log("The total age of all people is " + totalAge);
var averageAge = totalAge / totalPeople;
averageAge = Math.round(averageAge);
console.log("The average age of all people is " + averageAge);

//10. most favorited color

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

//11. count how many people like the color orange

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


//12. build out a mailing address. add a mailing address node create a string 
persons.forEach(function(element) {
	console.log(element.address);
})



/*=====================================
Total count includes 1 map, 2 foreach, & 1 reduce from optional homework. (pleaase!!!)
.forEach: 7
.map: 6
.reduce: 5
*/
