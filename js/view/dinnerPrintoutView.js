var DinnerPrintoutView = function(container, model){
	//Container - #dinnerPrintout
	this.editDinnerButton = container.find("#editDinnerButton")[0];

	//Header Row
	var numberOfGuests = container.find("#numberOfGuests");
	
	//Dinner Display Row
	var menuPrintout = container.find("#printoutDisplay");
	
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
			menuPrintout.empty();
			var menuItems = model.getMenuItems();
			for(var key in menuItems){
				var dishId = menuItems[key][0];
				var dishInfo = menuItems[key][1];
				//Create elements and set formatting
				var row = document.createElement("div");
				row.id = "dishId_".concat(dishId);
				row.className = "row border";
				var dishImage = document.createElement("img");
				dishImage.className = "col-xs-3 col-sm-2";
				var dishTitle = document.createElement("h4");
				dishTitle.className = "col-xs-3 col-sm-2";
				var dishInstructions = document.createElement("div");
				dishInstructions.className = "col-xs-6 col-sm-6";
				//Set image, name and instructions as inner values
				dishImage.src = dishInfo.image;
				dishTitle.innerHTML = dishInfo.title;
				dishInstructions.innerHTML = dishInfo.instructions;

				row.append(dishImage);
				row.append(dishTitle);
				row.append(dishInstructions);

				menuPrintout.append(row);
			}
		}
	}
	model.addObserver(this.update);
}