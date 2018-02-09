var DishDetailsController = function(model, view, app){
	console.log("In DishDetailsController");
	var toSearchBtn = document.getElementById("toSearch");
	//The toSearch button actually does something completely wrong at the moment, but it's just to utilize a button for checking some functionality.
	toSearchBtn.addEventListener("click",app.showDishSearchScreen, false);
}