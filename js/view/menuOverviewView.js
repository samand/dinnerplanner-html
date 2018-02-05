var MenuOverviewView = function(container, model){
	var menu = model.getMenu();

	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());	

	var itemDisplay = container.find("#menuDisplay");
	for(key in menu){
		//Create placeholders and set formatting
		var dish = document.createElement("div");
		dish.className = "col-xs-6 col-sm-4 border";
		var img = document.createElement("img");
		var dishName = document.createElement("div");
		var dishPrice = document.createElement("div");
		//Get dish and insert relevant things into the placeholders
		var dishItem = model.getDish(menu[key]);
		img.src = "images/".concat(dishItem.image);
		console.log(img.src);
		dishName.innerHTML = dishItem.name;
		var priceString = model.getDishPrice(menu[key]).toString().concat(" SEK");
		dishPrice.innerHTML = priceString;

		//Attach to parents
		dish.appendChild(img);
		dish.appendChild(dishName);
		dish.appendChild(dishPrice)
		itemDisplay.append(dish)
	}
}