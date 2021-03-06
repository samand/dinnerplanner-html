var DishDetailsView =function(container, model){
	//Container - #dishDetails
	this.toSearchButton = container.find("#toSearchButton")[0];
	this.addToMenuButton = container.find("#addToMenuButton")[0];
	this.removeFromMenuButton = container.find("#removeFromMenuButton")[0];

	//Find containers
	var dishTitle = container.find("#dishTitle");
	var dishImage = container.find("#dishImage")[0];
	var dishSummary = container.find("#dishSummary");
	var numberOfGuests = container.find("#numberOfGuests");
	var ingredientsDisplay = container.find("#ingredientsDisplay");
	var dishPrice = container.find("#dishPrice");
	var addToMenuButton = container.find("#addToMenuButton")[0];
	var removeFromMenuButton = container.find("#removeFromMenuButton")[0];


	var updateDishDescription = function(){
		dish = model.getCurrentDish();
		dishTitle.html(dish.title);
		//dishImage.src = dish.image; //Both options work, choose depending on what scales easiest.
		dishImage.src = "https://spoonacular.com/recipeImages/".concat(dish.id).concat("-240x150.jpg");
		dishSummary.html(dish.summary);
	}

	var emptyIngredientsDisplay = function(){
		ingredientsDisplay.empty(); //Throw away all old containers
		var q = document.createElement("b");
		var u = document.createElement("b");
		var i = document.createElement("b");
		//var p = document.createElement("b");
		q.className = "col-xs-2 noMargin";
		u.className = "col-xs-4 noMargin";
		i.className = "col-xs-6 noMargin";
		//p.className = "col-xs-4 noMargin";
		q.innerHTML = "Quantity";
		u.innerHTML = "Unit";
		i.innerHTML = "Ingredient";
		//p.innerHTML = "Price";
		var clear = document.createElement("div");
		clear.className = "clearfix";
		ingredientsDisplay.append(q);
		ingredientsDisplay.append(u);
		ingredientsDisplay.append(i);
		//ingredientsDisplay.append(p);
		ingredientsDisplay.append(clear);
	}

	var populateIngredientsDisplay = function(){
		dish = model.getCurrentDish();
		for(var key in dish.ingredients){
			var ingr = dish.ingredients[key];
			var ingrQuantity = document.createElement("div");
			ingrQuantity.innerHTML = ingr.amount;
			ingrQuantity.className = "col-xs-2 noMargin";
			ingredientsDisplay.append(ingrQuantity);

			var ingrUnit = document.createElement("div");
			ingrUnit.innerHTML = ingr.unit;
			ingrUnit.className = "col-xs-4 noMargin";
			ingredientsDisplay.append(ingrUnit);

			var ingrName = document.createElement("div");
			ingrName.innerHTML = ingr.name;
			ingrName.className = "col-xs-6 noMargin";
			ingredientsDisplay.append(ingrName);

			//Removed price - wasn't available in a good way from the API

			var clear = document.createElement("div");
			clear.className = "clearfix";
			ingredientsDisplay.append(clear);
		}
	}

	var updateButtons = function(){
		console.log("updateButtons");
		if(model.isCurrentDishInMenu()){
			addToMenuButton.style.display = "none";	
			removeFromMenuButton.style.display = "inline";
		}
		else{
			addToMenuButton.style.display = "inline";
			removeFromMenuButton.style.display = "none"
		}

	}
	
	this.hide = function(){
		container[0].style.display = "none";
		//Remove observer
	}

	this.show = function(){
		container[0].style.display = "inline";
		//addObserver
		//And update?
	}

	this.update = function(changeDetails){
		if(changeDetails=="numberOfGuests"){
			numberOfGuests.html(model.getNumberOfGuests());
			dishPrice.html(Math.round(model.getCurrentDishPrice()));
		}
		if(changeDetails=="currentDishSummary"){
			updateDishDescription();
		}
		if(changeDetails=="currentDishDetails"){
			emptyIngredientsDisplay();
			populateIngredientsDisplay();
			dishPrice.html(Math.round(model.getCurrentDishPrice()));
			updateButtons();
		}
		if(changeDetails=="menuChange"){
			updateButtons();
		}
		if(changeDetails=="loadNewCurrentDish"){
			dishTitle.html("Loading dish details...")
			dishImage.src = "";
			dishSummary.html("");
			emptyIngredientsDisplay();
			dishPrice.html("0");
		}
		if(changeDetails=="currentDishFailed"){
			alert("Oh no! Looks like that didn't go as planned.\nTry again, and if it doesn't work check your internet connection.");
		}

	}
	model.addObserver(this.update);
}