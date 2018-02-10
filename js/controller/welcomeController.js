var WelcomeController = function(model, view, app) {
	//Create new dinner
    var welcomeBtn= document.getElementById("welcomeButton");
    welcomeBtn.addEventListener("click", app.showDishSearchScreen, false);
}
