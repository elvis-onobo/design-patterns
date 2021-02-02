/**
 * class methods and variables are public and thus accessible from outside. In order to make them private,
 * put them outside the class or use Symbol().
 * 
 * The difference can be seen between the commented class and the completed one.
 */

// class Bank {
//     constructor() {
//         this.accounts = []
//     }

//     findAccount(name) {
//         return this.accounts.find(acc => acc.name === name)
//     }

//     createAccount(name, monies = 0) {
//         if (!this.findAccount(name)) {
//             this.accounts.push({
//                 name,
//                 monies
//             })
//         } else {
//             console.log("An account already exists");
//         }
//     }
// }

let accounts = [] // private variable
const findAccount = Symbol("findAccount")

class Bank {
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
        } else {
            console.log("An account already exists");
        }
    }
}

module.exports = new Bank() // This is initialized so it can act as a singleton
