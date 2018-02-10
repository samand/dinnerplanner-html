var SelectDishController = function(model, view, app){
	var searchBtn= document.getElementById("searchButton");
	//Do something with search button
	var clickSearch = function(){ //Meaningless function, just to show that the right button has been found.
		console.log("User clicked search button")
	}
	searchBtn.addEventListener("click", app.showDishDetailsScreen, false);
}