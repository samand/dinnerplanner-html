var SearchResultsView = function (container, model) {
	//TODO Get dish from model
	this.searchResults=[1,2,3];

	for (key in this.searchResults){
		//For each search result, get the dish 
		this.dishID = this.searchResults[key];
		this.dish = model.getDish(this.dishID);
		//Create a div element with the right class -- shouldn't be done here I guess...? rather some identifier
		this.div = document.createElement('div');
		this.div.className = "col-xs-6 col-md-4 border";

		//For dish image, create element and attach to div
		//Get image
		this.imgPath ="images/".concat(this.dish.image);
		//Create the image node and attach to parentnode
		this.img = document.createElement("img");
		this.img.src = this.imgPath;
		this.div.appendChild(this.img);

		//For dish name, create element and attach to div
		this.dishName = document.createElement("div");
		this.dishName.innerHTML = this.dish.name;
		this.div.appendChild(this.dishName);

		//Attach to the parent node - the first (and hopefully only) node in the container
		container[0].appendChild(this.div);
	}
}