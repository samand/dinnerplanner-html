/*var DishIngredientsView = function(container, model){
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());
	
	var dishID =1;
	var dish=model.getDish(dishID);
	var ingredientsDisplay = container.find("#ingredientsDisplay");

	for(key in dish.ingredients){
		var ingr = dish.ingredients[key];
		var ingrQuantity = document.createElement("div");
		ingrQuantity.innerHTML = ingr.quantity;
		ingrQuantity.className = "col-xs-2 noMargin";
		ingredientsDisplay.append(ingrQuantity);

		var ingrUnit = document.createElement("div");
		ingrUnit.innerHTML = "unit";
		ingrUnit.className = "col-xs-2 noMargin";
		ingredientsDisplay.append(ingrUnit);

		var ingrName = document.createElement("div");
		ingrName.innerHTML = ingr.name;
		ingrName.className = "col-xs-4 noMargin";
		ingredientsDisplay.append(ingrName);
		var ingrPrice = document.createElement("div");
		ingrPrice.innerHTML = "SEK ".concat(ingr.price.toString());
		ingrPrice.className = "col-xs-4 noMargin";
		ingredientsDisplay.append(ingrPrice);

		var clear = document.createElement("div");
		clear.className = "clearfix";
		ingredientsDisplay.append(clear);
	}
	var dishPrice = container.find("#dishPrice");
	dishPrice.html(model.getDishPrice(dishID));

/*
	if(document.getElementById("DishIngredients")){
		this.dishIngredients = document.getElementById("DishIngredients");
		for(key in this.dish.ingredients){
			this.ingr = this.dish.ingredients[key]; //For readability
			this.row = document.createElement('tr');
			this.dishIngredients.appendChild(this.row);

			//For name, quantity, unit and price, create a div, set innerHTML and attach to div
			this.ingr_name = document.createElement('th');
			this.ingr_name.innerHTML = this.ingr.name;
			this.row.appendChild(this.ingr_name);

			this.ingr_quantity = document.createElement('th');
			this.ingr_quantity.innerHTML = this.ingr.quantity;
			this.row.appendChild(this.ingr_quantity);

			this.ingr_unit = document.createElement('th');
			if (this.ingr.unit ==""){
				console.log("There was no unit")
			}
			this.ingr_unit.innerHTML = this.ingr.unit;
			this.row.appendChild(this.ingr_unit);

			this.ingr_price = document.createElement('th');
			this.ingr_price.innerHTML = this.ingr.price;
			this.row.appendChild(this.ingr_price);
		}
		*/
	
}