var DishIconView = function(model){
	if(document.getElementById("dishIcons")){
		this.dishesToBeDisplayed = [1,2,3];
		for(key in this.dishesToBeDisplayed){
			//Create placeholders and set formatting
			this.div = document.createElement("div");
			this.div.className = "col-xs-6 col-md-4 border";
			this.img = document.createElement("img");
			this.dishName = document.createElement("div");

			//Get dish and insert relevant things into the placeholders
			this.dish = model.getDish(this.dishesToBeDisplayed[key]);
			this.img.src = "images/".concat(this.dish.image);
			this.dishName.innerHTML = this.dish.name;

			//Attach to parents
			this.div.appendChild(this.img);
			this.div.appendChild(this.dishName);
			document.getElementById("dishIcons").appendChild(this.div);
		}
	}
}