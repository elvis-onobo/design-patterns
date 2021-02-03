const lock = require('./Vault')

const password = 'password'

const obj = {
    name: "john doe",
    age: 32,
    city: 'Lagos',
    country: 'NG'
}

const person = lock(obj, password)

console.log(person);