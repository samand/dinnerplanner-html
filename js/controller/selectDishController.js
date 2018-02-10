var SelectDishController = function(model, view, app){
	
	var searchBtn= document.getElementById("searchButton");
	//Do something with search button
	var clickSearch = function(){ //Meaningless function, just to show that the right button has been found.
		var searchText = document.getElementById("searchText");
		var searchCategory = document.getElementById("searchCategory");
		var categoryChoice = searchCategory.options[searchCategory.selectedIndex];

		model.search(categoryChoice.value,searchText.value);
	}
	searchBtn.addEventListener("click",clickSearch,false);
}