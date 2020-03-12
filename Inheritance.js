function Man () {
	this.walk = true;
	this.eat = true;
	this.drink = true;
};

function Soldier () {
	this.shoot = function () {
		console.log("Пих-пах!!!!")
	};
};

function Doctor () {
	this.cure = function () {
		console.log("Ну что? Будем лечить или пусть живет?!")
	};
};

Soldier.prototype = new Man();
Doctor.prototype = new Man();

let soldier = new Soldier();
let doctor = new Doctor();

console.log(soldier);
soldier.shoot();

console.log(doctor);
doctor.cure();