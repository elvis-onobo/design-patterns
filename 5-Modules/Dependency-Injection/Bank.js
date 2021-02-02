/**
 * The aim of this pattern is to make sure that dependencies are not tightly coupled and can easily be switched out/changes
 * 
 * For example, an app built with Paystack in mind will be painful for the owners if they want to change to Flutterwave,
 * but what if they were building just for payments such that you can change between Flutterwave and Paystack at any time?
 * 
 * In the example below, the logger function is built into a dependency that can be injected and switched without breaking the
 * system.
 */

let accounts = [] 
const findAccount = Symbol("findAccount")

const logger = data => console.log(data)

class Bank {
    //using an object as param allows the config function to become flexible, this way you can add more params latert
    config({ logger }) {
        this.logger = logger
    }
    // findAccount method is now private because it is declared by a Symbol() which is immutable.
    [findAccount](name) {
        return accounts.find(acc => acc.name === name)
    }

    createAccount(name, monies = 0) {
        if (!this[findAccount](name)) {
            accounts.push({
                name,
                monies
            })

            // now the logger functionality will be changeable
            if (this.logger) {
              this.logger.write(`Account created for ${name}`)   
            }
        } else {
            console.log("An account already exists");
        }
    }
}

module.exports = new Bank() // This is initialized so it can act as a singleton
