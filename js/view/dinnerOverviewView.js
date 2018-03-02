var DinnerOverviewView = function(container, model){
	//Container - #dinnerOverview
	this.editDinnerButton = container.find("#editDinnerButton")[0];
	this.printRecipeButton = container.find("#printRecipeButton")[0];

	//Header Row
	var numberOfGuests = container.find("#numberOfGuests");

	//Dinner Display Row
	var dinnerDisplayRow = container.find("#dinnerDisplayRow");
	
	this.hide = function(){
		container[0].style.display = "none";
	}
	this.show = function(){
		container[0].style.display = "inline";
	}

	this.update = function(changeDetails){
		if(changeDetails=="numberOfGuests"){
			numberOfGuests.html(model.getNumberOfGuests());
		}
		if(changeDetails=="menuChange"){
			dinnerDisplayRow.empty();
			var menu = model.getMenu();
			for(var key in menu){
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
		}
	}
	//model.addObserver(this.update);
}