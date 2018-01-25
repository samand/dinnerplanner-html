var myDinnerLeftView = function (container, model) {
	var numberOfGuests = container.find("#numberOfGuests");
	console.log(numberOfGuests);
	numberOfGuests.html(model.getNumberOfGuests());
}