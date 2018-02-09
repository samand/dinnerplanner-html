$(function() {
	this.showWelcomeScreen = function(){
		console.log("showWelcomeScreen");
		welcomeView.show();
		sidebarView.hide();
		selectDishView.hide();
		dishDetailsView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	this.showDishSearchScreen = function(){
		console.log("showDishSearchScreen")
		welcomeView.hide();
		sidebarView.show();
		selectDishView.show();
		dishDetailsView.hide();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	};

	this.showDishDetailsScreen = function(){
		console.log("showDishDetailsScreen");
		welcomeView.hide();
		sidebarView.show();
		selectDishView.hide();
		dishDetailsView.show();
		dinnerOverviewView.hide();
		dinnerPrintoutView.hide();
	}
	this.showDinnerOverviewScreen = function(){
		console.log("showDinnerOverviewScreen");
		welcomeView.hide();
		sidebarView.hide();
		selectDishView.hide();
		dishDetailsView.hide();
		dinnerOverviewView.show();
		dinnerPrintoutView.hide();
	}
	this.showDinnerPrintoutScreen = function(){
		console.log("showDinnerPrintoutScreen");
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
	new SidebarController(dinnerModel,sidebarView,this);
	new SelectDishController(dinnerModel,selectDishView,this);
	new DishDetailsController(dinnerModel,dishDetailsView,this);
	new DinnerOverviewController(dinnerModel,dinnerOverviewView,this);
	new DinnerPrintoutController(dinnerModel,dinnerPrintoutView,this);


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