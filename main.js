"use strict"
 function pizza (name,topping,price) {
	// body...
	
	this.name = name;
	this.topping = topping;
	this.price = price;

}

var pizzas = [['Margarita','Ostur og kridd','L 1500 - M 1250 - S 1000'],['Pepperoni Veisla','Extra Pepperoni og Ostur','L 1500 - M 1250 - S 1000'], ['Beikon sigir gagalagú ','Kjulli og Beikon','L 1500 - M 1250 - S 1000'],['Þetta er Pizza','Insert Pizza shit here','L 1500 - M 1250 - S 1000'] , ['Mamma special','Lambakjöt og sulta','L 1500 - M 1250 - S 1000'],['Banani og Laukur','Nákvæmlega það sem hún heitir','L 1500 - M 1250 - S 1000'], ['Ekki borða svín ','Pulled pork og beikon ','L 1500 - M 1250 - S 1000'],['Tenage mutend ninja turtles','Sikur púði og rækjur ','L 1500 - M 1250 - S 1000'] ];

var pizzaRun = [];




	for (var i = pizzas.length - 1; i >= 0; i--) {
	pizzaRun[i] = new pizza(pizzas[i][0] , pizzas[i][1], pizzas[i][2]);
};


	var echopizza = document.getElementById("demo");

	for (var i = pizzaRun.length - 1; i >= 0; i--) {
	echopizza.innerHTML += "<h1 > " + pizzaRun[i].name + "</h1>" + "<h3>" + pizzaRun[i].topping + "</h3>" + "<h5>" +  pizzaRun [i].price + "</h5>";
};



