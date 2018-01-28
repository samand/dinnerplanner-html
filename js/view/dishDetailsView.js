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
	this.dishDescription = container.find("#DishDescription")
	this.dishDescription.html(this.dish.description)

	//TODO
	//Create a list of ingredients to be displayed in a box. 

}