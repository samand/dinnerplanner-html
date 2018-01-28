var myDinnerLeftView = function (container, model) {
	//We've got a container, a div or similar, and a model with some functionality.
	//We can now use the container to find some element inside it and change it using the functions in the model. 
	var numberOfGuests = container.find("#myDinnerLeftID");
	//console.log(typeof myLeft);
	numberOfGuests.html(model.getNumberOfGuests());
	//console.log(myLeft);
}