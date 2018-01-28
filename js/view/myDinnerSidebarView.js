var MyDinnerSidebarView = function (container, model) {
	//We've got a container, a div or similar, and a model with some functionality.
	//We can now use the container to find some element inside it and change it using the functions in the model. 
	var numberOfGuests = container.find("#NumberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	priceOfMenu = container.find("#PriceOfMenu");
	priceOfMenu.html(model.getTotalMenuPrice());
}