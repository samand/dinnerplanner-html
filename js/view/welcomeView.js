var WelcomeView = function(container, model){

    //Container - #dinnerPrintout
    this.welcomeButton = container.find("#welcomeButton")[0];

	var welcomeText = container.find("#welcomeText")
	welcomeText.html("Lorem Ipsum. This text should be gotten from the model instead. But as it is, it is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.show = function(){
		container[0].style.display = "inline";
	}
}