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
			var menu = model.getMenu();
			for(var key in menu){
				//Create elements and set formatting
				var row = document.createElement("div");
				row.className = "row border";
				var img = document.createElement("img");
				img.className = "col-xs-3 col-sm-2";
				var name = document.createElement("h4");
				name.className = "col-xs-3 col-sm-2";
				var description = document.createElement("div");
				description.className = "col-xs-6 col-sm-6";
				//Set image, name and instructions as inner values
				var dishItem = model.getDish(menu[key]);
				img.src = "images/".concat(dishItem.image);
				name.innerHTML = dishItem.name;
				description.innerHTML = dishItem.description;

				row.append(img);
				row.append(name);
				row.append(description);

				menuPrintout.append(row);
			}
		}
	}
	//model.addObserver(this.update);
}