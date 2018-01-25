$(function() {
	//We instantiate our model
	var dinnerModel = new DinnerModel();
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#header"),dinnerModel);

	var newDinnerView = new createNewDinnerView($("#createNewDinnerView"))

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});