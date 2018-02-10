var SelectDishView = function(container, model){
	//Container - #selectDish

	//Search Row
	/*
	TODO Populate the dropdown toggle dynamically
	*/

	//Results Row
	var dishesToBeDisplayed = [1,2,3];
	
	var searchResultsRow = container.find("#searchResultsRow");

	for(key in dishesToBeDisplayed){
		//For each dish among the search results
		//Create elements and set formatting
		var div = document.createElement("div");
		div.className = "col-xs-6 col-md-4 border";
		var img = document.createElement("img");
		var dishName = document.createElement("h4");

		//Get dish and insert relevant things into the placeholders
		var dish = model.getDish(dishesToBeDisplayed[key]);
		img.src = "images/".concat(dish.image);
		dishName.innerHTML = dish.name;

		//Attach to parents
		div.appendChild(img);
		div.appendChild(dishName);
		searchResultsRow.append(div);
	}

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.show = function(){
		container[0].style.display = "inline";
	}




	//Lab 2
	this.update = function(model){
		//TODO
		/*
		Repopulate the view from the model.
		*/
	}
	
	model.addObserver(this.update);

	/////////////
	
}