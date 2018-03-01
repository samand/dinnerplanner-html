var DishDetailsView =function(container, model){
	//Container - #dishDetails
	this.toSearchButton = container.find("#toSearchButton")[0];
	this.addToMenuButton = container.find("#addToMenuButton")[0];

	//Find containers
	var dishTitle = container.find("#dishTitle");
	var dishImage = container.find("#dishImage");
	var dishSummary = container.find("#dishSummary");
	var numberOfGuests = container.find("#numberOfGuests");
	var ingredientsDisplay = container.find("#ingredientsDisplay");
	var dishPrice = container.find("#dishPrice");


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

	var populateIngredientsDisplay = function(dish){
		console.log(dish.ingredients);
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
			dishPrice.html(model.getCurrentDishPrice());
		}
		if(changeDetails=="currentDish"){
			dish = model.getCurrentDish();
			dishTitle.html(dish.title);
			//dishImage[0].src = dish.image; //Both options work, choose depending on what scales easiest.
			dishImage[0].src = "https://spoonacular.com/recipeImages/".concat(dish.id).concat("-240x150.jpg");
			dishSummary.html(dish.summary);
			emptyIngredientsDisplay();
			populateIngredientsDisplay(dish);
			dishPrice.html(model.getCurrentDishPrice());
		}
	}
	model.addObserver(this.update);
}