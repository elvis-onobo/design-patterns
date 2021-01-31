/**
 * The objective of the builder is to hide away the process of getting things done and
 * to give the user the ability (representation) to create many different instances using the same
 * representation
 * 
 * For example, preparing different types of pizza using using the same method 
 */

function Pizza() {
    this.pizza = {},
        this.setBase = base => this.pizza.base = base,
        this.setSauce = sauce => this.pizza.sauce = sauce,
        this.setCheese = cheese => this.pizza.cheese = cheese,
        this.setToppings = toppings => this.pizza.toppings = toppings,
        this.bake = () => console.log(this.pizza);
}

module.exports = Pizza