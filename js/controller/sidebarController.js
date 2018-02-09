var SidebarController = function(model, view, app){
	console.log("In SidebarController");
	//Plus button
	var addGuestBtn = document.getElementById("addGuest");
	//Call model to set number of guests
	//Call view to update
	var clickPlus = function(){ //Meaningless function, just to show that the right button has been found.
		console.log("User clicked plus button")
	}
	addGuestBtn.addEventListener("click", clickPlus, false);

	//Minus button
	var removeGuestBtn = document.getElementById("removeGuest");
	var clickMinus = function(){ //Meaningless function, just to show that the right button has been found.
		console.log("User clicked minus button")
	}
	removeGuestBtn.addEventListener("click", clickMinus, false);

	//Confirm dinner button
	var confirmDinnerBtn = document.getElementById("confirmDinner");
	confirmDinnerBtn.addEventListener("click", app.showDinnerOverviewScreen, false);
}