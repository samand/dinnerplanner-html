var DinnerPrintoutController = function(model, view, app){
	var editDinnerBtn = document.getElementById("editDinnerPrintout");
	editDinnerBtn.addEventListener("click", app.showDishSearchScreen, false);
}