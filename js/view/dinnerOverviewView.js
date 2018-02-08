var DinnerOverviewView = function(container, model){
	//Container - #dinnerOverview

	//Header Row
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());	
	
	//Dinner Display Row
	var menu = model.getMenu();
	var dinnerDisplayRow = container.find("#dinnerDisplayRow");
	for(key in menu){
		//Create placeholders and set formatting
		var div = document.createElement("div");
		div.className = "col-xs-6 col-sm-4 border";
		var dishImage = document.createElement("img");
		var dishName = document.createElement("h4");
		var dishPrice = document.createElement("div");
		//Get dish and insert relevant things into the placeholders
		var dish = model.getDish(menu[key]);
		dishImage.src = "images/".concat(dish.image);
		dishName.innerHTML = dish.name;
		var priceString = model.getDishPrice(menu[key]).toString().concat(" SEK");
		dishPrice.innerHTML = priceString;

		//Attach to parents
		div.appendChild(dishImage);
		div.appendChild(dishName);
		div.appendChild(dishPrice);
		dinnerDisplayRow.append(div);
	}

	//Lab 2
	this.update = function(){
		//TODO
		/*
		Repopulate the view from the model.
		*/
	}
	
	model.addObserver(this);

	/////////////

}