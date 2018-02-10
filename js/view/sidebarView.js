var SidebarView = function(container, model){

	var populateMenu = function(){
		var menu = model.getMenu();
		for(key in menu){
			var dish = model.getDish(menu[key]);

			var divName = document.createElement("div");
			divName.className = "col-xs-6 noMargin";
			divName.innerHTML = dish.name;
			menuItemsRow.append(divName);

			var divPrice = document.createElement("div");
			divPrice.className = "col-xs-6 noMargin";
			divPrice.innerHTML = model.getDishPrice(menu[key]);
			menuItemsRow.append(divPrice);

			var clear = document.createElement("div");
			clear.className = "clearfix";
			menuItemsRow.append(clear);
		}
	}
	//Container - #sidebar
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	//Dishes on the menu
	var menuItemsRow = container.find("#menuItems");
	populateMenu();

	//Price of menu
	var priceOfMenu = container.find("#priceOfMenu");
	priceOfMenu.html(model.getTotalMenuPrice());

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.show = function(){
		container[0].style.display = "inline";
	}

	this.update = function(){
		//Ugly solution - remove everything and redraw. 
		//Update number of guests
		numberOfGuests.html(model.getNumberOfGuests());
		//Remove old dishes
		menuItemsRow.empty();
		//Add dishes from the menu
		populateMenu();
		//Update price of menu
		priceOfMenu.html(model.getTotalMenuPrice());
	}
	model.addObserver(this.update);
}