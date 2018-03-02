//DinnerModel Object
var DinnerModel = function() {
    var api_key = "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB"
	var numberOfGuests = 4;//Default value
	var menuArray=[]; //Shall contain only id:s of menu items. [5, 6, 9, 46 etc]
    var menuItems=[] //Store data for populating sidebar, maybe more. //[id,{'title':title,'instructions':instructions, 'price':price etc}]
	var searchResults=[]; //For dishSelectView
	var currentDishLocal; //For dishDetailsView
	var observers =[]; //An array of update functions. The observers come from the views.
    var currentDish={
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
    this.getCurrentDish = function(){
        return currentDish;
    }

	this.getCurrentDishId = function(){
		return currentDish.id;
	}

    this.getCurrentDishPrice = function(){
        return currentDish.price*this.getNumberOfGuests();
    }

    this.isCurrentDishInMenu = function(){
        if(menuArray.includes(currentDish.id)){
            return true;
        }
        else return false;
    }

    this.setCurrentDish = function(id){
        //TODO Update view with loading screen. 

        if (id != currentDish.id){
            var summary_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(id).concat("/summary");
            var information_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(id).concat("/information");
            $.ajax({
                url: summary_url,
                headers: {
                    'X-Mashape-Key':api_key
                },
                success: function(data){
                    currentDish.id = data.id;
                    currentDish.summary = data.summary;
                    currentDish.title = data.title;
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
                    currentDish.instructions = data.instructions;
                    currentDish.ingredients = data.extendedIngredients;
                    currentDish.price = data.pricePerServing;
                    currentDish.image = data.image;
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
    this.getDishPrice = function (id){
        if(menuArray.includes(id)){
            for (var key in menuItems){
                if(menuItems[key][0]==id){
                    return menuItems[key][1].price*this.getNumberOfGuests();
                }
            }
        }
        else{
            console.log("Can't get dish price. Dish not on menu. ");
        }
    }

    this.getMenuPrice = function(){
        var menuPrice=0;
        for (var key in menuItems){
            menuPrice += menuItems[key][1].price;
        }
        return menuPrice*this.getNumberOfGuests();
    }





    /*
    MENU
    */	
    this.addDishToMenu = function(id) {
        //Adds the passed dish to the menu. 
        //TODO If the dish of that type already exists on the menu it is removed from the menu and the new one added.
        //EDIT Not applicable with API. Each dish from API can have multiple types. 

        //TODO Update view with loading screen. 

        if (!(menuArray.includes(id))){
            var information_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/".concat(id).concat("/information");
            $.ajax({
                url: information_url,
                headers:{
                    'X-Mashape-Key':api_key
                },
                success: function(data){
                    var dishInfo={};
                    dishInfo.title = data.title;
                    dishInfo.instructions = data.instructions;
                    dishInfo.ingredients = data.extendedIngredients;
                    dishInfo.price = data.pricePerServing;
                    dishInfo.image = data.image;

                    menuItems.push([data.id,dishInfo]);
                    menuArray.push(data.id);
                    notifyObservers("menuChange");
                },
                error: function(error){
                    console.log(error);
                }
            })
        }
        else{
            console.log("Can't add to menu. Dish already in menu. ")
        }
    }

	this.removeDishFromMenu = function(id) {
        //Removes dish from menu
        if(menuArray.includes(id)){
            for (var key in menuItems){
                if(menuItems[key][0]==id){
                    menuItems.splice([key],1);
                }
            }
            menuArray.splice(menuArray.indexOf(id),1);
            notifyObservers("menuChange");
        }
        else{
            console.log("Can't remove from menu. Dish not in menu. ")
        }
		
	}

    this.getMenuItems = function(){
        return menuItems;
    }





    /*
    SEARCH
    */    
    this.getSearchResults = function(){
        return searchResults;
    }

    this.search = function (type, filter){ //, callback, errorCallback
        //Search function. Calls API with optional type (ie main course) and filter (a string with search word)

        //TODO Update view with loading screen. 

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
}
