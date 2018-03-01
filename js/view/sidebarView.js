var SidebarView = function(container, model){
	this.addGuestButton = container.find("#addGuestButton")[0];
	this.removeGuestButton = container.find("#removeGuestButton")[0];
	this.confirmDinnerButton = container.find("#confirmDinnerButton")[0];

	var updateDishPrices = function(){
		var menu = model.getMenuItems()
		for(var key in menu){
			var dishId = menu[key];
			var div = container.find("#dishId_".concat(dishId));
			var divPrice = div.find("#dishPrice")[0];
			divPrice.innerHTML = model.getDishPrice(menu[key]);
		}
	}

	var populateMenu = function(){
		var menu = model.getMenu();
		for(var key in menu){
			var dish = model.getDish(menu[key]);
			var div = document.createElement("div");
			div.id = "dishId_".concat(dish.id);

			var dishName = document.createElement("div");
			dishName.className = "col-xs-6 noMargin";
			dishName.innerHTML = dish.name;
			div.append(dishName);


			var dishPrice = document.createElement("div");
			dishPrice.className = "col-xs-6 noMargin";
			dishPrice.innerHTML = model.getDishPrice(menu[key]);
			dishPrice.id = "dishPrice";
			div.append(dishPrice);

			menuItemsRow.append(div);
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

	//Price of menu
	var priceOfMenu = container.find("#priceOfMenu");
	priceOfMenu.html(model.getTotalMenuPrice());

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.show = function(){
		container[0].style.display = "inline";
	}

	this.update = function(changeDetails){
		if(changeDetails=="numberOfGuests"){
			numberOfGuests.html(model.getNumberOfGuests());
			priceOfMenu.html(model.getTotalMenuPrice());
			updateDishPrices();
		}
		//Ugly solution - remove everything and redraw. 
		//Remove old dishes
		if(changeDetails=="menuChange"){
			menuItemsRow.empty();
			populateMenu();
			priceOfMenu.html(model.getTotalMenuPrice());
		}
	}
	model.addObserver(this.update);
}