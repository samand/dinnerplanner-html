var DishDetailsView =function(container,model){

	//Get dish from model
	this.dishID = 1; //Will have to be replaced with proper input
	this.dish = model.getDish(this.dishID);

	//Set dish title
	this.dishTitle = container.find("#DishTitle");
	this.dishTitle.html(this.dish.name);

	//Insert image
	this.imgPath ="images/".concat(this.dish.image);
	this.dishImage = container.find("#DishImage");
	//Create the image node and attach to parentnode
	this.img = document.createElement("img");
	this.img.src = this.imgPath;
	this.dishImage[0].appendChild(this.img);

	//Insert dish description
	this.dishDescription = container.find("#DishDescription");
	this.dishDescription.html(this.dish.description);

/*
	//TODO
	//Create a list of ingredients to be displayed in a box. 
	this.dishIngredients = container.find("#DishIngredients");
	for (key in this.dish.ingredients){
		//For each ingredient, create a div element
		this.div = document.createElement('div');

		//Create four more <div> elements,
		this.ingr_name = document.createElement('div');
		this.div.appendChild(this.ingr_name);
		this.ingr_amount = document.createElement('div');
		this.div.appendChild(this.ingr_amount);
		this.ingr_unit = document.createElement('div');
		this.div.appendChild(this.ingr_unit);
		this.ingr_price = document.createElement('div');
		this.div.appendChild(this.ingr_price);
		/*this.ingr = this.dish.ingredients[key];
		this.div.html = this.ingr.name;
		console.log(this.ingr.name);
		console.log(this.ingr.amount);
		if (this.ingr.unit ==""){
			console.log("there was no unit for this");
		}
		else {console.log(this.ingr.unit);}
		console.log(this.ingr.price);
		*/
		this.dishIngredients[0].appendChild(this.div)
	}
	this.dishIngredients.html("This should contain the list of ingredients");

}