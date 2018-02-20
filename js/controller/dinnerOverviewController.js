var DinnerOverviewController = function(model, view, app){
	var editDinnerBtn = view.editDinnerButton;
	editDinnerBtn.addEventListener("click", app.showDishSearchScreen, false);
	
	var printRecipeBtn = view.printRecipeButton;
	printRecipeBtn.addEventListener("click", app.showDinnerPrintoutScreen, false);
	//printRecipeBtn.addEventListener("click",function(){app.switchScreen(view,"dinnerPrintout")},false);

}