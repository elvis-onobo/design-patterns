/**
 * In Node Js, variables and properties are private to a module unless explicityly exported using module.exports
 * 
 * The revealing module pattern describes a distinction between public and private methods and properties
 */

let _accounts = [] // private variables and methods in Node Js are written with an underscore in front of them. Just convention.
 
const _findAccount = name => _accounts.find(acc => acc.name === name)

const createAccount = (name, monies = 0) => {
    if (!_findAccount(name)) {
        _accounts.push({
            name,
            monies
        })

        return `New account created for ${name}`
    } else {
        return 'Account Already exists'
    }
}

module.exports = {
    createAccount // NB: only this function can be used by a function from outside the imports this file. _accounts & _findAccount are inaccessible
}