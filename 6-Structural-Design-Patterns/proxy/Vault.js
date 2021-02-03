/**
 * A proxy provides a placeholder for another Object to control access to it
 * 
 * 
 * This ensures that the consumer enjoys consistent interface
 */
const Cryptr = require("cryptr")

const lock = (obj, password) => {
    const cryptr = new Cryptr(password)
    
    let newObj = {}
    for (const i of Object.keys(obj)) {
        newObj[i] = cryptr.encrypt(obj[i])
    }

    return new Proxy(newObj, {
        set(target, key, value) {
            return (target[key] = cryptr.encrypt(value)) 
        },
        get(target, key) {
            return target[key]
        }
    })
}

module.exports = { lock }