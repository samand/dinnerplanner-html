var WelcomeController = function(model, view, app) {
	console.log("in WelcomeViewController");
    var welcomeBtn= document.getElementById("welcomeButton");
    //setup button click listener
    welcomeBtn.addEventListener("click", app.showDishSearchScreen, false);
}
