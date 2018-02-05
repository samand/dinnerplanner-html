var SidebarView = function(container, model){

	//Lab 2
	this.update = function(){
		//TODO
		/*
		Repopulate the view from the model.
		*/
	}
	
	model.addObserver(this);

	/////////////

	var menu = model.getMenu();
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	var itemDisplay = container.find("#menuItems");
	for(key in menu){
		var dish = model.getDish(menu[key]);

		var divName = document.createElement("div");
		divName.className = "col-xs-6 noMargin";
		divName.innerHTML = dish.name;
		itemDisplay.append(divName);

		var divPrice = document.createElement("div");
		divPrice.className = "col-xs-6 noMargin";
		divPrice.innerHTML = model.getDishPrice(menu[key]);
		itemDisplay.append(divPrice);

		var clear = document.createElement("div");
		clear.className = "clearfix";
		itemDisplay.append(clear);
	}

	var priceOfMenu = container.find("#priceOfMenu");
	priceOfMenu.html(model.getTotalMenuPrice());
}