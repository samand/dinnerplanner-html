var DinnerPrintoutController = function(model, view, app){
	var editDinnerBtn = view.editDinnerPrintout;
	//var editDinnerBtn = document.getElementById("editDinnerPrintout");
	editDinnerBtn.addEventListener("click", app.showDishSearchScreen, false);
}