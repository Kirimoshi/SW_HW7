'use strict';

/**
 * Class
 * @constructor
 * @param size - size of pizza
 * @param type - type of pizza
 * @throws {PizzaException} - in case of improper use
 */
class Pizza {
    constructor(size, type) {
        this.size = size;
        this.type = type;
    }

    addExtraIngredient(ingredient) {

    }
    removeExtraIngredient(ingredient) {

    }
    getSize() {
        return this.size
    }
    getPrice() {

    }
}

/* Sizes, types and extra ingredients */
Pizza.SIZE_S = 50;
Pizza.SIZE_M = 75;
Pizza.SIZE_L = 100;

Pizza.TYPE_VEGGIE = 50;
Pizza.TYPE_MARGHERITA = 60;
Pizza.TYPE_PEPPERONI = 70;

Pizza.EXTRA_TOMATOES = 5;
Pizza.EXTRA_CHEESE = 7;
Pizza.EXTRA_MEAT = 9;

/* Allowed properties */
Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT];


/**
 * Provides information about an error while working with a pizza.
 * details are stored in the log property.
 * @constructor
 */
class PizzaException {

}


/* It should work */ 
// // small pizza, type: veggie
// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// // add extra meat
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// // check price
// console.log(`Price: ${pizza.getPrice()} UAH`); //=> Price: 109 UAH
// // add extra cheese
// pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
// // add extra tomatoes
// pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
// // check price
// console.log(`Price with extra ingredients: ${pizza.getPrice()} UAH`); // Price: 121 UAH
// // check pizza size
// console.log(`Is pizza large: ${pizza.getSize() === Pizza.SIZE_L}`); //=> Is pizza large: false
// // remove extra ingredient
// pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
// console.log(`Extra ingredients: ${pizza.getExtraIngredients().length}`); //=> Extra ingredients: 2
// console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114UAH.

// examples of errors
// let pizza = new Pizza(Pizza.SIZE_S); // => Required two arguments, given: 1

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // => Invalid type

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Duplicate ingredient

// let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Invalid ingredient
