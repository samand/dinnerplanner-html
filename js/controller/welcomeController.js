var WelcomeController = function(model, view, app) {
	//Welcome screen
    var welcomeBtn = view.welcomeButton;
    welcomeBtn.addEventListener("click", app.showDishSearchScreen, false);
}
