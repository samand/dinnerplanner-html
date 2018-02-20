var SelectDishController = function(model, view, app){
	var searchBtn = view.searchBtn;
	
	//var searchBtn= document.getElementById("searchButton");
	var clickSearch = function(){
		var searchText = view.searchText;
		//var searchText = document.getElementById("searchText");
		var searchCategory = view.searchCategory;
		//var searchCategory = document.getElementById("searchCategory");
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
		var searchResultsRow = view.searchResultsRow;
		for(var key in searchResults){
			var id = "#".concat(searchResults[key].id);
			var div = searchResultsRow.find(id)[0];
			div.addEventListener("click",function(div){clickDish(div)},false);
		}
	}
	

	this.update = function(changeDetails){
		if(changeDetails=="searchResults"){
			makeClickable();
		}
	}
	model.addObserver(this.update);
}