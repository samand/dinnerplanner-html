var WelcomeViewController = function(model, view, app) {

    var btn= document.getElementById("welcomeButton");

    btn.addEventListener("click", listener , false);
    //setup button click listener
    app.showDishSearchScreen();
}
}