var DishDetailsController = function(model, view, app){
	var toSearchBtn = document.getElementById("toSearch");
	toSearchBtn.addEventListener("click",app.showDishSearchScreen,false);

	var addToMenuBtn = document.getElementById("addToMenu");
	addToMenuBtn.addEventListener("click",function(){model.addDishToMenu(model.getCurrentDishId())},false);


}