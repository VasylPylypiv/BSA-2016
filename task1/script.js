var Animal = function ( name, age, sound, region){
	this.name = name;
	this.age = age;
	this.sound = sound;
	this.region = region;
	this.say = function() {
	console.log(this.sound);
	};
};

var Dog = function () {
	this.goAway = function(){
	console.log("Dog goes away...");
	}
};

var Cat = function () {
	this.goAway = function(){
	console.log("Cat goes away...");
	}
};

var Woodpecker = function () {
	this.goAway = function(){
	console.log("Woodpecker goes away...");
	}
};


Dog.prototype =  new Animal("Jack", 1, "woof", "IF" );
var dog = new Dog();

Cat.prototype =  new Animal("Tom", 1, "meow", "LV" );
var cat = new Cat();

Woodpecker.prototype =  new Animal("Woody", 1, "hahaha", "CV" );
var woodpecker = new Woodpecker();



function getType(obj) {
    var typeObject = "";
    if (obj.age && obj.name && obj.sound && obj.region && obj.say) {
        if (obj.goAway) {
        	switch (obj.sound) {
            case "woof":
                typeObject = "Dog";
                break;
            case "meow":
                typeObject = "Cat";
                break;
            case "took":
                typeObject = "Woodpecker";
                break;
            }
            
        } else {
            typeObject = "Animal";
        }
    } else {
        typeObject = "Unknown";
    }
    return typeObject;
}


function getTypeForThis() {
    var typeObject = "";
    if (this.age && this.name && this.sound && this.region && this.say) {
        if (this.goAway) {
            switch (this.sound) {
            case "woof":
                typeObject = "Dog";
                break;
            case "meow":
                typeObject = "Cat";
                break;
            case "took":
                typeObject = "Woodpecker";
                break;
            }
        } else {
            typeObject = "Animal";
        }
    } else {
        typeObject = "Unknown";
    }
    return typeObject;
}


dog.say();
cat.say();
woodpecker.say();

console.log (getType(dog)); 
console.log (getTypeForThis.apply(cat));