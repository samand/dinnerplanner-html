//DinnerModel Object
var DinnerModel = function() {
    var api_key = "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB"
	var numberOfGuests = 4;//Default value
	var menuArray=[]; //Shall contain only id:s of menu items. 
	var searchResults=[]; //For dishSelectView
	var currentDishLocal; //For dishDetailsView
	var observers =[]; //An array of update functions. The observers come from the views.
    var currentDishApi={
        'id':"",
        'title':"",
        'type':"",
        'image':"",
        'summary':"",
        'description':"",
        'price':"",
        'ingredients':[{}]
    }


    /*
    OBSERVERS
    */
	this.addObserver = function(observer){
		observers.push(observer);
	}

	this.removeObserver = function(observer){
		//Remove observer from observers-array
        //TODO
	}

	var notifyObservers = function(changeDetails){
		//changeDetails is a string with the id of the DOM-object or dinnerModel variable that is being changed.
		for (var key in observers){
			observers[key](changeDetails);
		}
	}
    

    /*
    NUMBER OF GUESTS
    */
    this.incrementNumberOfGuests = function () {
        numberOfGuests++;
        notifyObservers("numberOfGuests");
    }
    this.decrementNumberOfGuests = function (){
        numberOfGuests--;
        notifyObservers("numberOfGuests");
    }

    this.getNumberOfGuests = function() {
        return numberOfGuests;
    }


    /*
    CURRENT DISH
    */
	this.setCurrentDishLocal = function(id){
		currentDishLocal = id;
		notifyObservers("currentDish");
	}

    this.getCurrentDish = function(){
        return currentDishApi;
    }

	this.getCurrentDishId = function(){
		return currentDishApi.id;
	}

    this.getCurrentDishPrice = function(){
        return currentDishApi.price*numberOfGuests;
    }

    this.setCurrentDish = function(id){
        if (id != currentDishApi.id){
            var summary_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(id).concat("/summary");
            var information_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(id).concat("/information");
            $.ajax({
                url: summary_url,
                headers: {
                    'X-Mashape-Key':api_key
                },
                success: function(data){
                    currentDishApi.id = data.id;
                    currentDishApi.summary = data.summary;
                    currentDishApi.title = data.title;
                    notifyObservers("currentDish")
                },
                error: function(error){
                    console.log(error);
                }
            })
            $.ajax({
                url: information_url,
                headers:{
                    'X-Mashape-Key':api_key
                },
                success: function(data){
                    currentDishApi.instructions = data.instructions;
                    currentDishApi.ingredients = data.extendedIngredients;
                    currentDishApi.price = data.pricePerServing;
                    currentDishApi.image = data.image;
                },
                error: function(error){
                    console.log(error);
                }
            })
        }
    }


    /*
    PRICE
    */
	this.getAllIngredients = function() {
        //Returns all ingredients for all the dishes on the menu. //Likely soon obsolete!!
		var ingredientsArray = [];
		for (var key in menuArray){
			var dishIngredients = this.getDish(menuArray[key]).ingredients;
			for (ingredient in dishIngredients){
				ingredientsArray.push(dishIngredients[ingredient]);
			}
		}
		return ingredientsArray;
	}

	this.getDishPrice = function(id){
		var dishPrice = 0;
		var ingredients = this.getDish(id).ingredients;
		for (var key in ingredients){
			var quantity = ingredients[key].quantity;
			var price = ingredients[key].price;
			dishPrice += quantity*price;
		}
		dishPrice *= this.getNumberOfGuests();
		return dishPrice
	}

    //function that returns a dish of specific ID 
    this.getDish = function (id){
        var dish= {
            'id':id,
            'name':"Name, TODO, get from API",
            'type':"Type, TODO, get from API",
            'image':"toast.jpg",
            'description':"Get description from API",
            'ingredients':[{
                'name':'eggs',
                'quantity':0.5,
                'unit':'',
                'price':10
            },{
                'name':'milk',
                'quantity':30,
                'unit':'ml',
                'price':6
            }]
        }
        return dish;
    }


	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalSum = 0;
		var ingredientsArray = this.getAllIngredients();
		for (var key in ingredientsArray){
			var quantity = ingredientsArray[key].quantity;
			var price = ingredientsArray[key].price;
			totalSum = totalSum + quantity*price;
		}
		totalSum = totalSum*numberOfGuests;
		return totalSum;
	}


    /*
    MENU
    */	
	this.addDishToMenu = function(id) {
        //Adds the passed dish to the menu. If the dish of that type already exists on the menu
        //it is removed from the menu and the new one added.
        //TODO
		menuArray.push(id);
		notifyObservers("menuChange");
	}

	this.removeDishFromMenu = function(id) {
        //Removes dish from menu
		menuArray.splice(menuArray.indexOf(id),1);
		notifyObservers("menuChange");
	}

    this.getMenuItems = function(){
        //Return a list of dish items
        var information_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(id).concat("/information");
        var menuItems = [];
        for(var key in menuArray){
            dishId = menuArray[key];
            var dish;
             $.ajax({
                url: information_url,
                headers:{
                    'X-Mashape-Key':api_key
                },
                success: function(data){
                    dish.title = data.title;
                    dish.instructions = data.instructions;
                    dish.ingredients = data.extendedIngredients;
                    dish.price = data.pricePerServing;
                    dish.image = data.image;
                    /////////////////////////////dish is not local to this function. Rethink...
                },
                error: function(error){
                    console.log(error);
                }
            })
        }
    }


    /*
    SEARCH
    */    
    this.getSearchResults = function(){
        return searchResults;
    }

    this.searchApi = function (type, filter){ //, callback, errorCallback
        //Search function. Calls API with optional type (ie main course) and filter (a string with search word)
        $.ajax({
            url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search",
            headers: {
                'X-Mashape-Key': api_key
            },
            data: {
                'type':type,
                'query':filter
            },
            success: function(data){
                searchResults = data.results;
                notifyObservers("searchResults");
            },
            error: function(error){
                console.log(error);
            }
        })
    }

    this.searchLocal = function (type,filter){
        //Search function. Makes a local search in the dishes-array.
        return dishes.filter(function(dish){
            var found = true;
            if(filter){
                found = false;
                dish.ingredients.forEach(function(ingredient){
                    if(ingredient.name.indexOf(filter)!=-1){
                        found = true;
                    }
                });
                if(dish.name.indexOf(filter) != -1){
                    found = true;
                }
            }
            return dish.type == type && found;
        });
    }

    this.search = function(type,filter){
        //Takes a type, i.e. main course, appetizer etc.
        //and a filter. Calls api or local search function
        //This function will become obsolete soon!
        this.searchApi(type,filter); //Call to API
        //searchResults = this.searchLocal(type,filter); notifyObservers("searchResults");//Local call

	}




	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
     },{
         'name':'milk',
         'quantity':30,
         'unit':'ml',
         'price':6
     },{
         'name':'brown sugar',
         'quantity':7,
         'unit':'g',
         'price':1
     },{
         'name':'ground nutmeg',
         'quantity':0.5,
         'unit':'g',
         'price':12
     },{
         'name':'white bread',
         'quantity':2,
         'unit':'slices',
         'price':2
     }]
 },{
  'id':2,
  'name':'Sourdough Starter',
  'type':'starter',
  'image':'sourdough.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'active dry yeast',
     'quantity':0.5,
     'unit':'g',
     'price':4
 },{
     'name':'warm water',
     'quantity':30,
     'unit':'ml',
     'price':0
 },{
     'name':'all-purpose flour',
     'quantity':15,
     'unit':'g',
     'price':2
 }]
},{
  'id':3,
  'name':'Baked Brie with Peaches',
  'type':'starter',
  'image':'bakedbrie.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'round Brie cheese',
     'quantity':10,
     'unit':'g',
     'price':8
 },{
     'name':'raspberry preserves',
     'quantity':15,
     'unit':'g',
     'price':10
 },{
     'name':'peaches',
     'quantity':1,
     'unit':'',
     'price':4
 }]
},{
  'id':100,
  'name':'Meat balls',
  'type':'main dish',
  'image':'meatballs.jpg',
  'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
  'ingredients':[{
     'name':'extra lean ground beef',
     'quantity':115,
     'unit':'g',
     'price':20
 },{
     'name':'sea salt',
     'quantity':0.7,
     'unit':'g',
     'price':3
 },{
     'name':'small onion, diced',
     'quantity':0.25,
     'unit':'',
     'price':2
 },{
     'name':'garlic salt',
     'quantity':0.7,
     'unit':'g',
     'price':2
 },{
     'name':'Italian seasoning',
     'quantity':0.6,
     'unit':'g',
     'price':3
 },{
     'name':'dried oregano',
     'quantity':0.3,
     'unit':'g',
     'price':3
 },{
     'name':'crushed red pepper flakes',
     'quantity':0.6,
     'unit':'g',
     'price':3
 },{
     'name':'Worcestershire sauce',
     'quantity':6,
     'unit':'ml',
     'price':7
 },{
     'name':'milk',
     'quantity':20,
     'unit':'ml',
     'price':4
 },{
     'name':'grated Parmesan cheese',
     'quantity':5,
     'unit':'g',
     'price':8
 },{
     'name':'seasoned bread crumbs',
     'quantity':15,
     'unit':'g',
     'price':4
 }]
},{
  'id':101,
  'name':'MD 2',
  'type':'main dish',
  'image':'bakedbrie.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'ingredient 1',
     'quantity':1,
     'unit':'pieces',
     'price':8
 },{
     'name':'ingredient 2',
     'quantity':15,
     'unit':'g',
     'price':7
 },{
     'name':'ingredient 3',
     'quantity':10,
     'unit':'ml',
     'price':4
 }]
},{
  'id':102,
  'name':'MD 3',
  'type':'main dish',
  'image':'meatballs.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'ingredient 1',
     'quantity':2,
     'unit':'pieces',
     'price':8
 },{
     'name':'ingredient 2',
     'quantity':10,
     'unit':'g',
     'price':7
 },{
     'name':'ingredient 3',
     'quantity':5,
     'unit':'ml',
     'price':4
 }]
},{
  'id':103,
  'name':'MD 4',
  'type':'main dish',
  'image':'meatballs.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'ingredient 1',
     'quantity':1,
     'unit':'pieces',
     'price':4
 },{
     'name':'ingredient 2',
     'quantity':12,
     'unit':'g',
     'price':7
 },{
     'name':'ingredient 3',
     'quantity':6,
     'unit':'ml',
     'price':4
 }]
},{
  'id':200,
  'name':'Chocolat Ice cream',
  'type':'dessert',
  'image':'icecream.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'ice cream',
     'quantity':100,
     'unit':'ml',
     'price':6
 }]
},{
  'id':201,
  'name':'Vanilla Ice cream',
  'type':'dessert',
  'image':'icecream.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'ice cream',
     'quantity':100,
     'unit':'ml',
     'price':6
 }]
},{
  'id':202,
  'name':'Strawberry',
  'type':'dessert',
  'image':'icecream.jpg',
  'description':"Here is how you make it... Lore ipsum...",
  'ingredients':[{
     'name':'ice cream',
     'quantity':100,
     'unit':'ml',
     'price':6
 }]
}
];
}
