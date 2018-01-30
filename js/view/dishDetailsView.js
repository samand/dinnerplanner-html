var DishDetailsView =function(model){
	
	if(document.getElementById("DishInstructions")){
		//Get dish from model
		this.dishID = 1; //Will have to be replaced with proper input
		this.dish = model.getDish(this.dishID);
		//Set dish title
		this.dishTitle = document.getElementById("DishTitle");
		this.dishTitle.innerHTML = this.dish.name;
		//Image
		this.dishImage = document.getElementById("DishImage");
		this.img = document.createElement("img");
		this.img.src = "images/".concat(this.dish.image);
		this.dishImage.appendChild(this.img);
		//Dish description
		this.dishDescription = document.getElementById("DishDescription");
		this.dishDescription.InnerHTML = this.dish.description;
	}
}

var DishIngredients = function(container, model){
	if(document.getElementById("DishIngredients")){
		this.dishID = 1; //Will have to be replaced with proper input
		this.dish = model.getDish(this.dishID);
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
	}
}