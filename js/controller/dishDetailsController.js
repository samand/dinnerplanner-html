var DishDetailsController = function(model, view, app){
	var toSearchBtn = view.toSearchButton;
	toSearchBtn.addEventListener("click",app.showDishSearchScreen,false);

	var addToMenuBtn = view.addToMenuButton;
	addToMenuBtn.addEventListener("click",function(){model.addDishToMenu(model.getCurrentDishId())},false);

	var removeFromMenuBtn = view.removeFromMenuButton;
	removeFromMenuBtn.addEventListener("click",function(){model.removeDishFromMenu(model.getCurrentDishId())},false);
}