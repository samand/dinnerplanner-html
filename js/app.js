$(function() {
	//Instantiating models
	var dinnerModel = new DinnerModel();

	//Instantiating views

	var sidebar = new SidebarView($("#sidebar"),dinnerModel);
	var menuOverview = new MenuOverviewView($("#menuOverview"),dinnerModel);
	var dishInstructions =new DishInstructionsView($("#dishInstructions"),dinnerModel);
	//var dishIngredients = new DishIngredientsView($("#dishIngredients"),dinnerModel);
	var searchResults = new SearchResultsView($("#searchResults"),dinnerModel);
	var menuPrintout = new MenuPrintoutView($("#menuPrintout"),dinnerModel);
	
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});