var DishDetailsController = function(model, view, app){
	var toSearchBtn = view.toSearch;
	//var toSearchBtn = document.getElementById("toSearch");
	toSearchBtn.addEventListener("click",app.showDishSearchScreen,false);

	var addToMenuBtn = view.addToMenu;
	//var addToMenuBtn = document.getElementById("addToMenu");
	addToMenuBtn.addEventListener("click",function(){model.addDishToMenu(model.getCurrentDishId())},false);


}