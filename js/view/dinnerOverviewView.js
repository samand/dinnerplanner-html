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

	var updateDishPrices = function(){
		var menuItems = model.getMenuItems();
		for(var key in menuItems){
			var dishId = menuItems[key][0];
			var div = container.find("#dishId_".concat(dishId));
			var divPrice = div.find("#dishPrice")[0];
			divPrice.innerHTML = model.getDishPrice(dishId);
		}
	}

	this.update = function(changeDetails){
		if(changeDetails=="numberOfGuests"){
			numberOfGuests.html(model.getNumberOfGuests());
			updateDishPrices();
		}
		if(changeDetails=="menuChange"){
			dinnerDisplayRow.empty();
			var menuItems = model.getMenuItems();
			for(var key in menuItems){
				var dishId = menuItems[key][0];
				var dishInfo = menuItems[key][1];
				//Create placeholders and set formatting
				var div = document.createElement("div");
				div.id = "dishId_".concat(dishId);
				div.className = "col-xs-6 col-sm-4 border";
				var dishImage = document.createElement("img");
				var dishTitle = document.createElement("h4");
				var dishPrice = document.createElement("b");
				dishPrice.id = "dishPrice";
				//Insert relevant things into the placeholders
				//dishImage.src = "images/".concat(dish.image);
				dishImage.src = dishInfo.image; //TODO Fix formatting!!
				dishTitle.innerHTML = dishInfo.title;
				dishPrice.innerHTML = model.getDishPrice(dishId).toString().concat(" SEK");;

				//Attach to parents
				div.appendChild(dishImage);
				div.appendChild(dishTitle);
				div.appendChild(dishPrice);
				dinnerDisplayRow.append(div);
			}
		}
	}
	model.addObserver(this.update);
}