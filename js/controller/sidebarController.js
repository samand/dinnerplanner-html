var SidebarController = function(model, view, app){
	//Plus button
	var addGuestBtn = document.getElementById("addGuest");
	addGuestBtn.addEventListener("click",model.incrementNumberOfGuests,false);

	//Minus button
	var removeGuestBtn = document.getElementById("removeGuest");
	removeGuestBtn.addEventListener("click",model.decrementNumberOfGuests,false);

	//Confirm dinner button
	var confirmDinnerBtn = document.getElementById("confirmDinner");
	confirmDinnerBtn.addEventListener("click", app.showDinnerOverviewScreen, false);
}