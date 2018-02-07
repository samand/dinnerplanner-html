var SidebarView = function(container, model){
	//Create the top of the sidebar - header and buttons
	var sidebarHeader = document.createElement("h3");
	sidebarHeader.innerHTML = "My Dinner";
	var numberOfGuestsRow = document.createElement("div");
	numberOfGuestsRow.className = "row";
	numberOfGuestsRow.innerHTML = "Number of guests: ";
	var guests = document.createElement("span");
	guests.id = "numberOfGuests";
	guests.innerHTML = model.getNumberOfGuests();
	numberOfGuestsRow.append(guests);
	//Buttons
	var guestsButtons = document.createElement("div");
	var guestsPlus = document.createElement("button");
	guestsPlus.id = "addGuest";
	guestsPlus.className = "btn";
	var glyphPlus = document.createElement("span");
	glyphPlus.className = "glyphicon glyphicon-plus"
	var guestsMinus = document.createElement("button");
	guestsMinus.id = "removeGuest";
	guestsMinus.className = "btn";
	var glyphMinus = document.createElement("span");
	glyphMinus.className = "glyphicon glyphicon-minus";
	//Order of appending determines order of display of buttons
	guestsPlus.append(glyphPlus);
	guestsButtons.append(guestsPlus);
	guestsMinus.append(glyphMinus);
	guestsButtons.append(guestsMinus);
	numberOfGuestsRow.append(guestsButtons);

	//Header for dishes on the menu
	var dishesHeaderRow = document.createElement("div");
	dishesHeaderRow.className = "row border";
	var dishesHeaderName = document.createElement("h4");
	dishesHeaderName.className = "col-xs-6 alignLeft noMargin";
	dishesHeaderName.innerHTML = "Dish name";
	var dishesHeaderPrice = document.createElement("h4")
	dishesHeaderPrice.className = "col-xs-6 alignLeft noMargin";
	dishesHeaderPrice.innerHTML = "Price";
	dishesHeaderRow.append(dishesHeaderName);
	dishesHeaderRow.append(dishesHeaderPrice);


	//Dishes on the menu
	var menuItemsRow = document.createElement("div");
	menuItemsRow.className = "row border";
	menuItemsRow.id = "menuItems";

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
	var menuPriceRow = document.createElement("div");
	menuPriceRow.className = "row";

	var text = document.createElement("div");
	text.className = "col-xs-6";
	text.innerHTML = "Price of menu: ";

	var priceOfMenu = document.createElement("div");
	priceOfMenu.className = "col-xs-6";
	priceOfMenu.innerHTML = model.getTotalMenuPrice();
	menuPriceRow.append(text);
	menuPriceRow.append(priceOfMenu);

	//Confirm menu button
	var confirmButton = document.createElement("button");
	confirmButton.type = "button";
	confirmButton.className = "btn btn-warning btn-block";
	confirmButton.id = "confirmDinner";
	confirmButton.innerHTML = "Confirm Dinner";

	container.append(sidebarHeader);
	container.append(numberOfGuestsRow);
	container.append(dishesHeaderRow);
	container.append(menuItemsRow);
	container.append(menuPriceRow);
	container.append(confirmButton);

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
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	var itemDisplay = container.find("#menuItems");


	var priceOfMenu = container.find("#priceOfMenu");
	priceOfMenu.html(model.getTotalMenuPrice());
	*/
}