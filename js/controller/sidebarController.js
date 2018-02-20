var SidebarController = function(model, view, app){
	
	//Plus button
	//var addGuestBtn = document.getElementById("addGuest");
	var addGuestBtn = view.addGuestButton;
	addGuestBtn.addEventListener("click",model.incrementNumberOfGuests,false);

	//Minus button
	//var removeGuestBtn = document.getElementById("removeGuest");
	var removeGuestBtn = view.removeGuestButton;
	removeGuestBtn.addEventListener("click",model.decrementNumberOfGuests,false);

	//Confirm dinner button
	//var confirmDinnerBtn = document.getElementById("confirmDinner");
	var confirmDinnerBtn = view.confirmDinnerButton;
	confirmDinnerBtn.addEventListener("click", app.showDinnerOverviewScreen, false);
}