var DinnerPrintoutController = function(model, view, app){
	console.log("In DinnerPrintoutController");
	var editDinnerBtn = document.getElementById("editDinnerPrintout");
	editDinnerBtn.addEventListener("click", app.showDishSearchScreen, false);
}