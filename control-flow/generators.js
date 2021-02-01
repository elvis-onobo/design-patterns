/**
 * The earlier part of this course handles callback hell, promises and async await.
 * I have chosen not to bother with those since I know them
 */

/**
 * A generator is a special type of function which can be stopped and resumed later.
 * They are created by putting an asterisk after the function keyword.
 */
function* getColours() {
    yield 'Red'
    yield 'Green'
    yield 'Blue'
}

const colours = getColours() // this will return a generator object but the function is not called. It is only initialized

// to make the generator call, we use the next() function
console.log('This is the first iteration of the generator >>>' ,colours.next())
console.log('This is the second iteration of the generator >>>' ,colours.next())
console.log('This is the third iteration of the generator >>>' ,colours.next())
console.log('This is the last iteration of the generator >>>', colours.next())

//--------------------------------------------------------------------------------

const fruits = ['Apples', 'Oranges', 'Pineapple', 'Banana']

function* fruitShop() {
    for (const fruit of fruits) {
        yield fruit
    }
}

const getFruits = fruitShop()

function makeSalad() {
    let fruitBasket = getFruits.next()
    // continue with the loop if the generator is not done
    if (!fruitBasket.done) {
        console.log(fruitBasket.value);
        makeSalad() // call the function again since it is not done
    } else {
        console.log('There are no more fruits!');
    }
}

makeSalad()