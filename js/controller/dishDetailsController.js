var DishDetailsController = function(model, view, app){
	var toSearchBtn = view.toSearchButton;
	toSearchBtn.addEventListener("click",app.showDishSearchScreen,false);

	var addToMenuBtn = view.addToMenuButton;
	addToMenuBtn.addEventListener("click",function(){model.addDishToMenu(model.getCurrentDishId())},false);
}