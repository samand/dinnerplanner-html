var DinnerPrintoutController = function(model, view, app){
	var editDinnerBtn = view.editDinnerButton;
	editDinnerBtn.addEventListener("click", app.showDishSearchScreen, false);
}