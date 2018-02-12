var SelectDishController = function(model, view, app){
	
	var searchBtn= document.getElementById("searchButton");
	var clickSearch = function(){
		var searchText = document.getElementById("searchText");
		var searchCategory = document.getElementById("searchCategory");
		var categoryChoice = searchCategory.options[searchCategory.selectedIndex];

		model.search(categoryChoice.value,searchText.value);
	}
	searchBtn.addEventListener("click",clickSearch,false);

	var clickDish = function(div){
		var currentDishId = div.path[0].id;
		model.setCurrentDish(currentDishId);
		app.showDishDetailsScreen();
	}

	//Each dish-div should be clickable
	var makeClickable = function(){
		var searchResults = model.getSearchResults();
		for(key in searchResults){
			var div = document.getElementById(searchResults[key].id);
			div.addEventListener("click",function(div){clickDish(div)},false);
		}
	}


	this.update = function(model){
		makeClickable();
	}
	model.addObserver(this.update);
}