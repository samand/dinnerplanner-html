var DishInstructionsView =function(container, model){

	//Lab 2
	this.update = function(){
		//TODO
		/*
		Repopulate the view from the model.
		*/
	}
	
	model.addObserver(this);

	/////////////

	//Get dish from model
	var dishID=1;
	var dish = model.getDish(dishID);
	//set dish title
	var dishTitle = container.find("#dishTitle");
	dishTitle.html(dish.name);
	//Image
	var dishImage = container.find("#dishImage");
	var img = document.createElement("img");
	img.src = "images/".concat(dish.image);
	dishImage.append(img);
	//Dish description
	var dishDescription = container.find("#dishDescription");
	dishDescription.html(dish.description);
	//Number of guests
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());
	
	//Displaying ingredients
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
	//Displaying price of dish
	var dishPrice = container.find("#dishPrice");
	dishPrice.html(model.getDishPrice(dishID));
}