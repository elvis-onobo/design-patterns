const Bank = require('./Bank')
// const logger = require('./console-logger')
const logger = require('./file-logger')
const user1 = "John Doe"
const user2 = "Elvis O"

/**
 * Take note of how we are easily switching between the console-logger and the file-logger?
 * This is dependency injection that ensures that there is consistency in our code while we only 
 * make one change overboard.
 * 
 * Rather than change the code, we just swap out the module
 */


Bank.config({ // see how we are passing logger? we can equally pass more params to the config and use it in Bank.
    logger
})

Bank.createAccount(user1)
Bank.createAccount(user2)