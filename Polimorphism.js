function Doctor () {
	this.walk = true;
	this.eat = true;
	this.drink = true;
	this.cure = function () {
		console.log("Ну что? Будем лечить или пусть живет?!");
	};
};

function Dentist () {
	this.cure = function () {
		console.log("Будем лечить зубы?!");
	};
};

function Surgeon () {
	this.cure = function () {
		console.log("Чик-чик!!!");
	};
};

Dentist.prototype = new Doctor();
Surgeon.prototype = new Doctor();


let dentist = new Dentist();
let surgeon = new Surgeon();

dentist.cure();
surgeon.cure();
console.log(dentist);
console.log(surgeon);