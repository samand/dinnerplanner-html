var SearchResultsView = function(container, model){

	//Lab 2
	this.update = function(){
		//TODO
		/*
		Repopulate the view from the model.
		*/
	}
	
	model.addObserver(this);

	/////////////

	var dishesToBeDisplayed = [1,2,3];
	var dishDescription = container.find("#dishIcons");

	for(key in dishesToBeDisplayed){
		//Create placeholders and set formatting
		var div = document.createElement("div");
		div.className = "col-xs-6 col-md-4 border";
		var img = document.createElement("img");
		var dishName = document.createElement("div");

		//Get dish and insert relevant things into the placeholders
		var dish = model.getDish(dishesToBeDisplayed[key]);
		img.src = "images/".concat(dish.image);
		dishName.innerHTML = dish.name;

		//Attach to parents
		div.appendChild(img);
		div.appendChild(dishName);
		dishDescription.append(div);
	}

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.show = function(){
		container[0].style.display = "inline";
	}

	
}