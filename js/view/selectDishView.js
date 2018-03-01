var SelectDishView = function(container, model){
	//Container - #selectDish

	//Search Row
	this.searchBtn = container.find("#searchButton")[0];
	this.searchText = container.find("#searchText")[0];
	this.searchCategory = container.find("#searchCategory")[0];
	/*
	TODO Populate the dropdown toggle dynamically
	*/

	//Results Row
	this.searchResultsRow = container.find("#searchResultsRow");
	var dishesToBeDisplayed = [1,2,3];
	
	var searchResultsRow = container.find("#searchResultsRow");

	var showSearchResults = function(){
		searchResultsRow.empty();
		var searchResults = model.getSearchResults();
		for(var key in searchResults){
			//For each dish among the search results
			//Create elements and set formatting
			var div = document.createElement("div");
			div.className = "col-xs-6 col-md-4 border";
			var img = document.createElement("img");
			var dishName = document.createElement("h4");

			//Get dish and insert relevant things into the placeholders
			var dish = searchResults[key];
			//TODO Make these images fit, and make the surrounding divs a fixed size.
			//  https://spoonacular.com/food-api/docs/show-images   check it out!
			img.src = "https://spoonacular.com/recipeImages/".concat(dish.id).concat("-240x150.jpg");
			dishName.innerHTML = dish.title;

			div.id = dish.id;
			dishName.id=dish.id; //#badProgramming
			img.id=dish.id;
			//Attach to parents
			div.appendChild(img);
			div.appendChild(dishName);
			searchResultsRow.append(div);
		}
	}

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.show = function(){
		container[0].style.display = "inline";
	}

	this.update = function(changeDetails){
		if(changeDetails=="searchResults"){
			showSearchResults();
		}
	}
	
	model.addObserver(this.update);	
}