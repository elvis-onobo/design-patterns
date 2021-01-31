const Pizza = require('./Pizza')
const pepperoni = new Pizza() // our pizza builder instance

// now we can build our pizza
pepperoni.setBase('Whole Wheat')
pepperoni.setSauce('Tomato Basil')
pepperoni.setCheese('Smoked Mozzarella')
pepperoni.setToppings(['Pepperoni', 'Basil'])

pepperoni.bake() // outputs our pizza object

/**
 * To create a pizza, you just perform a set of functions step by step
 */