var DishDetailsView =function(container, model){
	//Container - #dishDetails
	this.toSearch = container.find("#toSearch")[0];
	this.addToMenu = container.find("#addToMenu")[0];

	//Find containers
	var dishTitle = container.find("#dishTitle");
	var dishImage = container.find("#dishImage");
	var dishDescription = container.find("#dishDescription");
	var numberOfGuests = container.find("#numberOfGuests");
	var ingredientsDisplay = container.find("#ingredientsDisplay");
	var dishPrice = container.find("#dishPrice");


	var emptyIngredientsDisplay = function(){
		ingredientsDisplay.empty(); //Throw away all old containers
		var q = document.createElement("b");
		var u = document.createElement("b");
		var i = document.createElement("b");
		var p = document.createElement("b");
		q.className = "col-xs-2 noMargin";
		u.className = "col-xs-2 noMargin";
		i.className = "col-xs-4 noMargin";
		p.className = "col-xs-4 noMargin";
		q.innerHTML = "Quantity";
		u.innerHTML = "Unit";
		i.innerHTML = "Ingredient";
		p.innerHTML = "Price";
		var clear = document.createElement("div");
		clear.className = "clearfix";
		ingredientsDisplay.append(q);
		ingredientsDisplay.append(u);
		ingredientsDisplay.append(i);
		ingredientsDisplay.append(p);
		ingredientsDisplay.append(clear);
	}

	var populateIngredientsDisplay = function(dish){
		for(var key in dish.ingredients){
			var ingr = dish.ingredients[key];
			var ingrQuantity = document.createElement("div");
			ingrQuantity.innerHTML = ingr.quantity;
			ingrQuantity.className = "col-xs-2 noMargin";
			ingredientsDisplay.append(ingrQuantity);

			var ingrUnit = document.createElement("div");
			ingrUnit.innerHTML = ingr.unit;
			ingrUnit.className = "col-xs-2 noMargin";
			ingredientsDisplay.append(ingrUnit);

			var ingrName = document.createElement("div");
			ingrName.innerHTML = ingr.name;
			ingrName.className = "col-xs-4 noMargin";
			ingredientsDisplay.append(ingrName);
			var ingrPrice = document.createElement("div");
			ingrPrice.innerHTML = "SEK ".concat(ingr.price.toString());
			ingrPrice.className = "col-xs-4 noMargin";
			ingredientsDisplay.append(ingrPrice);

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
			if (model.getCurrentDishId()){
				var currentDish = model.getCurrentDishId();
				dishPrice.html(model.getDishPrice(currentDish));
			}
		}
		if(changeDetails=="currentDish"){
			var currentDish = model.getCurrentDishId();
			dish = model.getDish(currentDish);
			dishTitle.html(dish.name);
			dishImage.src = "images/".concat(dish.image);
			dishDescription.html(dish.description);
			emptyIngredientsDisplay();
			populateIngredientsDisplay(dish);
			dishPrice.html(model.getDishPrice(currentDish));	
		}
	}
	model.addObserver(this.update);
}