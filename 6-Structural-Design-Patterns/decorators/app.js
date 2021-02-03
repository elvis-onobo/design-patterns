/**
 * Decorators are higher order functions that return functions after consuming them
 */
const CurrencyConverter = require('./CurrencyConverter')

const Cost = (qty, price) => Promise.resolve(qty * price) 

const CostPlus = CurrencyConverter(Cost)
CostPlus(20, 5, "NGN", "USD").then(result => console.log(result))
    .catch(e => console.log('The error is >> ', e))