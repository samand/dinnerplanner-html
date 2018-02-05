var MenuPrintoutView = function(container, model){
	var menu = model.getMenu();

	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	menuPrintout = container.find("#printoutDisplay");

	for(key in menu){
		//Create elements and set formatting
		var row = document.createElement("div");
		row.className = "row borderu";
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