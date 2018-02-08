var SidebarView = function(container, model){
	//Container - #sidebar
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	//Dishes on the menu
	var menuItemsRow = container.find("#menuItems");
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

	//Price of menu
	var priceOfMenu = container.find("#priceOfMenu");
	priceOfMenu.html(model.getTotalMenuPrice());

	//Lab 2
	this.update = function(){
		//TODO
		/*
		Repopulate the view from the model.
		*/
	}
	
	model.addObserver(this);

	/////////////
/*

	var menu = model.getMenu();



	var priceOfMenu = container.find("#priceOfMenu");
	priceOfMenu.html(model.getTotalMenuPrice());
	*/
}