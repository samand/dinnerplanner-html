var DishIconView = function(container, model){
	var dishesToBeDisplayed = [1,2,3];
	console.log(dishesToBeDisplayed.length);
	for(key in dishesToBeDisplayed){
		//Create placeholders and set formatting
		var div = document.createElement("div");
		div.className = "col-xs-6 col-md-4 border";
		var img = document.createElement("img");
		var dishName = document.createElement("div");

		//Get dish and insert relevant things into the placeholders
		var dish = model.getDish(dishesToBeDisplayed[key]);
		img.src = "images/".concat(dish.image);
		dishName.innerHTML = dish.name;

		//Attach to parents
		div.appendChild(img);
		div.appendChild(dishName);
		document.getElementById("dishIcons").appendChild(div);
	}
}