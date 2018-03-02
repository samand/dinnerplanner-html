var SidebarView = function(container, model){
	this.addGuestButton = container.find("#addGuestButton")[0];
	this.removeGuestButton = container.find("#removeGuestButton")[0];
	this.confirmDinnerButton = container.find("#confirmDinnerButton")[0];

	var updateDishPrices = function(){
		var menuItems = model.getMenuItems()
		for(var key in menuItems){
			var dishId = menuItems[key][0];
			var div = container.find("#dishId_".concat(dishId));
			var divPrice = div.find("#dishPrice")[0];
			divPrice.innerHTML = model.getDishPrice(dishId);
		}
	}

	var populateMenu = function(){
		var menuItems = model.getMenuItems();
		//[id,{'title':title,'instructions':instructions, 'price':price etc}]
		console.log(menuItems)
		for(var key in menuItems){
			var dishId = menuItems[key][0];
			var dishInfo = menuItems[key][1];
			var div = document.createElement("div");
			div.id = "dishId_".concat(dishId);

			var dishTitle = document.createElement("div");
			dishTitle.className = "col-xs-6 noMargin";
			dishTitle.innerHTML = dishInfo.title;
			div.append(dishTitle);


			var dishPrice = document.createElement("div");
			dishPrice.className = "col-xs-6 noMargin";
			dishPrice.innerHTML = model.getDishPrice(dishId);
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
	priceOfMenu.html(model.getMenuPrice());

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.show = function(){
		container[0].style.display = "inline";
	}

	this.update = function(changeDetails){
		if(changeDetails=="numberOfGuests"){
			numberOfGuests.html(model.getNumberOfGuests());
			priceOfMenu.html(model.getMenuPrice());
			updateDishPrices();
		}
		//Ugly solution - remove everything and redraw. 
		//Remove old dishes
		if(changeDetails=="menuChange"){
			menuItemsRow.empty();
			populateMenu();
			priceOfMenu.html(model.getMenuPrice());
		}
	}
	model.addObserver(this.update);
}