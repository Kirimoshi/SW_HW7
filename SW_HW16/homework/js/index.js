'use strict';

class Pizza {
    constructor(size, type) {
        const requiredNumberOfArgumentsPassed = 2;
        if (arguments.length !== requiredNumberOfArgumentsPassed) {
            throw new PizzaException(`Required two arguments, given: ${arguments.length}`);
        }

        if (Pizza.allowedSizes.includes(size)) {
            this.size = size;
        } else {
            throw new PizzaException('Invalid size');
        }
        if (Pizza.allowedTypes.includes(type)) {
            this.type = type;
        } else {
            throw new PizzaException('Invalid type');
        }

        this.extraIngredientsSet = new Set();
        this.extraIngredientsCost = 0;
    }

    addExtraIngredient(ingredient) {
        if (arguments.length !== 1) {
            throw new PizzaException(`Required one argument, given: ${arguments.length}`);
        }

        if (Pizza.allowedExtraIngredients.includes(ingredient)) {
            if (!this.extraIngredientsSet.has(ingredient)) {
                this.extraIngredientsSet.add(ingredient);
                this.extraIngredientsCost += ingredient.price;
            } else {
                throw new PizzaException('Duplicate ingredient');
            }
        } else {
            throw new PizzaException('Invalid ingredient');
        }
    }
    removeExtraIngredient(ingredient) {
        if (arguments.length !== 1) {
            throw new PizzaException(`Required one argument, given: ${arguments.length}`);
        }

        if (Pizza.allowedExtraIngredients.includes(ingredient)) {
            if (this.extraIngredientsSet.has(ingredient)) {
                this.extraIngredientsSet.delete(ingredient);
                this.extraIngredientsCost -= ingredient.price;
            }
        } else {
            throw new PizzaException();
        }
    }
    getSize() {
        return this.size.name
    }
    getPrice() {
        return this.size.price + this.type.price + this.extraIngredientsCost
    }
    getExtraIngredients() {
        const extraIngredientsArray = [];
        this.extraIngredientsSet.forEach((item) => extraIngredientsArray.push(item.infoName));
        return extraIngredientsArray
    }
    getPizzaInfo() {
        return `Size: ${this.size.infoName}, type: ${this.type.infoName}; 
        extra ingredients: ${this.getExtraIngredients().join(', ')}; price: ${this.getPrice()} UAH.`
    }
}

Pizza.SIZE_S = {
    name: 'Pizza.SIZE_S',
    infoName: 'SMALL',
    price: 50
};
Pizza.SIZE_M = {
    name: 'Pizza.SIZE_M',
    infoName: 'MEDIUM',
    price: 75
};
Pizza.SIZE_L = {
    name: 'Pizza.SIZE_L',
    infoName: 'LARGE',
    price: 100
};

Pizza.TYPE_VEGGIE = {
    name: 'Pizza.TYPE_VEGGIE',
    infoName: 'VEGGIE',
    price: 50
};
Pizza.TYPE_MARGHERITA = {
    name: 'Pizza.TYPE_MARGHERITA',
    infoName: 'MARGHERITA',
    price: 60
};
Pizza.TYPE_PEPPERONI = {
    name: 'Pizza.TYPE_PEPPERONI',
    infoName: 'PEPPERONI',
    price: 70
};

Pizza.EXTRA_TOMATOES = {
    name: 'Pizza.EXTRA_TOMATOES',
    infoName: 'TOMATOES',
    price: 5
};
Pizza.EXTRA_CHEESE = {
    name: 'Pizza.EXTRA_CHEESE',
    infoName: 'CHEESE',
    price: 7
};
Pizza.EXTRA_MEAT = {
    name: 'Pizza.EXTRA_MEAT',
    infoName: 'MEAT',
    price: 9
};

Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT];

class PizzaException {
    constructor(log) {
        this.log = log;
    }
}