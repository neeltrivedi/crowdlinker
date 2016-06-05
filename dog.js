var Dog = function(){
	this.legs = 4;
};
Dog.prototype.getInfo = function(){
	console.log('Legs ' + this.legs + ' Age ' + this.age + '.');
};

var fido = Object.create(Dog.prototype);
fido.age = 3; 
Dog.apply(fido);
console.log(fido.getInfo());
