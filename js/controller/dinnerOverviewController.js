var DinnerOverviewController = function(model, view, app){
	var editDinnerBtn = view.editDinnerOverview;
	//var editDinnerBtn = document.getElementById("editDinnerOverview");
	editDinnerBtn.addEventListener("click", app.showDishSearchScreen, false);
	var printRecipeBtn = view.printRecipe;
	//var printRecipeBtn = document.getElementById("printRecipe");
	printRecipeBtn.addEventListener("click", app.showDinnerPrintoutScreen, false);
}