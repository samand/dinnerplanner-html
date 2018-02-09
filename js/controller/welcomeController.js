var WelcomeController = function(model, view, app) {
	console.log("in WelcomeController");
	//Create new dinner
    var welcomeBtn= document.getElementById("welcomeButton");
    welcomeBtn.addEventListener("click", app.showDishSearchScreen, false);
}
