var WelcomeController = function(model, view, app) {
	//Create new dinner
    //var welcomeBtn= document.getElementById("welcomeButton");
    var welcomeBtn = view.editWelcome;
    welcomeBtn.addEventListener("click", app.showDishSearchScreen, false);
}
