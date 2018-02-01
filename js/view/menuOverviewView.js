var MenuOverviewView = function(container, model){
	var menu = model.getMenu();
	for(key in menu){
		//Create placeholders and set formatting
		var div = document.createElement("div");
		div.className = "col-xs-6 col-md-4 border";
		var img = document.createElement("img");
		var dishName = document.createElement("div");
		var dishPrice = document.createElement("div");
		//Get dish and insert relevant things into the placeholders
		var dish = model.getDish(menu[key]);
		img.src = "images/".concat(dish.image);
		dishName.innerHTML = dish.name;
		var priceString = model.getDishPrice(menu[key]).toString().concat(" SEK");
		dishPrice.innerHTML = priceString;

		//Attach to parents
		div.appendChild(img);
		div.appendChild(dishName);
		div.appendChild(dishPrice)
		container.append(div)
	}
}