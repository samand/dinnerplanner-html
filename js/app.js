$(function() {
	this.showWelcomeScreen = function(){
		welcomeView.show();
		sidebarView.hide();
		selectDishView.hide();
		dishDetailsView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	this.showDishSearchScreen = function(){
		welcomeView.hide();
		sidebarView.show();
		selectDishView.show();
		dishDetailsView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	};

	this.showDishDetailsScreen = function(){
		welcomeView.hide();
		sidebarView.show();
		selectDishView.hide();
		dishDetailsView.show();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	this.showDinnerOverviewScreen = function(){
		welcomeView.hide();
		sidebarView.hide();
		selectDishView.hide();
		dishDetailsView.hide();
		dinnerOverviewView.show();
		dinnerPrintoutView.hide();
	}
	this.showDinnerPrintoutScreen = function(){
		welcomeView.hide();
		sidebarView.hide();
		selectDishView.hide();
		dishDetailsView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.show();
	}

	//Instantiating models
	var dinnerModel = new DinnerModel();

	//Instantiating views
	var welcomeView	= new WelcomeView($("#welcome"),dinnerModel);
	var sidebarView = new SidebarView($("#sidebar"),dinnerModel);
	var selectDishView = new SelectDishView($("#selectDish"),dinnerModel);
	var dishDetailsView =new DishDetailsView($("#dishDetails"),dinnerModel);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverview"),dinnerModel);
	var dinnerPrintoutView = new DinnerPrintoutView($("#dinnerPrintout"),dinnerModel);
	
	//Instantiating controllers
	new WelcomeController(dinnerModel,welcomeView,this);
	new SelectDishController(dinnerModel,selectDishView,this);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	**/	
	this.showWelcomeScreen();
});

//TODO
/*
Implement the controller for each view that has some interaction.
Implementing event listeners etc.
*/