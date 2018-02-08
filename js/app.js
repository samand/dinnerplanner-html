$(function() {
	this.showDishSearchScreen = function(){
		console.log("In showDishSearchScreen");
		welcomeView.hide();
		searchResults.show();
		//sidebar.show();
	};
	//Instantiating models
	var dinnerModel = new DinnerModel();

	//Instantiating views
	var welcomeView	= new WelcomeView($("#welcome"),dinnerModel);
	var sidebar = new SidebarView($("#sidebar"),dinnerModel);
	var menuOverview = new MenuOverviewView($("#menuOverview"),dinnerModel);
	var dishInstructions =new DishInstructionsView($("#dishInstructions"),dinnerModel);
	//var dishIngredients = new DishIngredientsView($("#dishIngredients"),dinnerModel);
	var searchResults = new SearchResultsView($("#searchResults"),dinnerModel);
	var menuPrintout = new MenuPrintoutView($("#menuPrintout"),dinnerModel);
	
	//Instantiating controllers
	new WelcomeViewController(dinnerModel,welcomeView,this);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	**/	
});


//TODO
/*
Implement the controller for each view that has some interaction.
Implementing event listeners etc.
*/

	//new WelcomeViewController(model, welcome, this);

/*

var btn= document.getElementById("WelcomeButton");
var listener= function(evt){
    alert(evt.type+' event on "'+evt.target.innerHTML+'"');
}
btn.addEventListener("click", listener , false);

var showIndex = function(){
	//TODO
	/*
	Show welcome text and Create New Dinner Button. 
	Need to change that into a view.
	*/

//}

var showSelectDish = function(){
	//TODO
	/*
	Show Sidebar, Dish Search and Search Results
	*/
}

var showDishDetails = function(){
	//TODO
	/*
	Show Sidebar and Dish Instructions
	*/
}

var showMenuOverview = function(){
	//TODO
	/*
	Show Menu Overview
	*/
}

var showMenuPrintout = function(){
	//TODO
	/*
	Show Menu Printout
	*/
}