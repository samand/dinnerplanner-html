$(function() {
	//We instantiate our model
	var dinnerModel = new DinnerModel();
	//console.log("In app.js. Number of guests: ",dinnerModel.getNumberOfGuests());

	var myDinnerSidebar = new MyDinnerSidebarView($("#DinnerSidebar"),dinnerModel);
	//var dishDetails = new DishDetailsView($("#DishInstructions"),dinnerModel);
	var searchResults = new SearchResults($("#SearchResults"),dinnerModel);





	
	// And create the instance of ExampleView
	// var exampleView = new ExampleView($("#header"),dinnerModel);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});