var SidebarController = function(model, view, app){
	
	//Plus button
	//var addGuestBtn = document.getElementById("addGuest");
	var addGuestBtn = view.addGuestBtn;
	addGuestBtn.addEventListener("click",model.incrementNumberOfGuests,false);

	//Minus button
	//var removeGuestBtn = document.getElementById("removeGuest");
	var removeGuestBtn = view.removeGuestBtn;
	removeGuestBtn.addEventListener("click",model.decrementNumberOfGuests,false);

	//Confirm dinner button
	//var confirmDinnerBtn = document.getElementById("confirmDinner");
	var confirmDinnerBtn = view.confirmDinnerBtn;
	confirmDinnerBtn.addEventListener("click", app.showDinnerOverviewScreen, false);
}