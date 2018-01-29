var DishDetailsView =function(container,model){

	//Get dish from model
	this.dishID = 1; //Will have to be replaced with proper input
	this.dish = model.getDish(this.dishID);

	//Set dish title
	this.dishTitle = container.find("#DishTitle");
	this.dishTitle.html(this.dish.name);

	//Get image
	this.dishImage = container.find("#DishImage");
	this.imgPath ="images/".concat(this.dish.image);
	//Create the image node and attach to parentnode
	this.img = document.createElement("img");
	this.img.src = this.imgPath;
	this.dishImage[0].appendChild(this.img);

	//Insert dish description
	this.dishDescription = container.find("#DishDescription");
	this.dishDescription.html(this.dish.description);


	//Very possible that this will need to be put into a separate view
	//Create a list of ingredients to be displayed in a box. 
	this.dishIngredients = container.find("#DishIngredients");
	for (key in this.dish.ingredients){
		this.ingr = this.dish.ingredients[key]; //For readability

		//For each ingredient, create a tr element
		this.row = document.createElement('tr');
		this.dishIngredients[0].appendChild(this.row);
		
		//For name, quantity, unit and price, create a div, set innerHTML and attach to div
		this.ingr_name = document.createElement('th');
		this.ingr_name.innerHTML = this.ingr.name;
		this.row.appendChild(this.ingr_name);

		this.ingr_quantity = document.createElement('th');
		console.log(this.ingr.quantity)
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