var WelcomeView = function(container, model){
	var div = document.createElement("div");
	div.className = "col-sm-offset-3 col-sm-6";

	var p = document.createElement("p");
	p.innerHTML = "Lorem Ipsum. This text should be gotten from the model instead. But as it is, it is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
	var btn = document.createElement("button");
	btn.type = "button";
	btn.className = "btn btn-warning";
	btn.id = "welcomeButton";
	btn.innerHTML = "Create New Dinner"

	div.append(p);
	div.append(btn);
	container.append(div);

}