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
        this.extraIngredientsCost = 0;
    }

    addExtraIngredient(ingredient) {
        this.extraIngredientsCost += ingredient.price;
    }
    removeExtraIngredient(ingredient) {
        this.extraIngredientsCost -= ingredient.price;
    }
    getSize() {
        return this.size.name
    }
    getPrice() {
        return this.size.price + this.type.price + this.extraIngredientsCost
    }
}

/* Sizes, types and extra ingredients */
Pizza.SIZE_S = {
    name: 'Pizza.SIZE_S',
    price: 50,
};
Pizza.SIZE_M = {
    name: 'Pizza.SIZE_M',
    price: 75,
};
Pizza.SIZE_L = {
    name: 'Pizza.SIZE_L',
    price: 100,
};

Pizza.TYPE_VEGGIE = {
    name: 'Pizza.TYPE_VEGGIE',
    price: 50,
};
Pizza.TYPE_MARGHERITA = {
    name: 'Pizza.TYPE_MARGHERITA',
    price: 60,
};
Pizza.TYPE_PEPPERONI = {
    name: 'Pizza.TYPE_PEPPERONI',
    price: 70,
};

Pizza.EXTRA_TOMATOES = {
    name: 'Pizza.EXTRA_TOMATOES',
    price: 5,
};
Pizza.EXTRA_CHEESE = {
    name: 'Pizza.EXTRA_CHEESE',
    price: 7,
};
Pizza.EXTRA_MEAT = {
    name: 'Pizza.EXTRA_MEAT',
    price: 9,
};

/* Allowed properties */
Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
Pizza.allowedExtraIngredients = [
    {
        name: 'tomatoes',
        price: 5,
    },
    {
        name: 'cheese',
        price: 7,
    },
    {
        name: 'meat',
        price: 9,
    }
];


/**
 * Provides information about an error while working with a pizza.
 * details are stored in the log property.
 * @constructor
 */
class PizzaException {

}

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
// pizza.addExtraIngredient(Pizza.EXTRA_CORN); // => Invalid ingredient
