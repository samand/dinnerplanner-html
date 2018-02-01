/*var MyDinnerSidebarView = function (model) {
	//We've got a container, a div or similar, and a model with some functionality.
	//We can now use the container to find some element inside it and change it using the functions in the model. 
	if(document.getElementById("NumberOfGuests")){
		this.numberOfGuests = document.getElementById("NumberOfGuests");
		this.numberOfGuests.innerHTML = model.getNumberOfGuests();

		//this.plusButton = container.find("#plusGuest");
		//this.minusButton = container.find("#minusGuest");

		this.priceOfMenu = document.getElementById("PriceOfMenu");
		this.priceOfMenu.innerHTML= model.getTotalMenuPrice();
	}
}
*/
var VariableView = function(model){
	if(document.getElementById("NumberOfGuests")){
		this.numberOfGuests = document.getElementById("NumberOfGuests");
		this.numberOfGuests.innerHTML = model.getNumberOfGuests();
	}
	if(document.getElementById("PriceOfMenu")){
		this.priceOfMenu = document.getElementById("PriceOfMenu");
		this.priceOfMenu.innerHTML= model.getTotalMenuPrice();
	}
	

}