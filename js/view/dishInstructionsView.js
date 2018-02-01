var DishInstructionsView =function(container, model){
	//Get dish from model
	var dishID=1;
	var dish = model.getDish(dishID);
	//set dish title
	var dishTitle = container.find("#dishTitle");
	dishTitle.html(dish.name);
	//Iimage
	var dishImage = container.find("#dishImage");
	var img = document.createElement("img");
	img.src = "images/".concat(dish.image);
	dishImage.append(img);
	//Dish description
	var dishDescription = container.find("#dishDescription");
	dishDescription.html(dish.description);
}