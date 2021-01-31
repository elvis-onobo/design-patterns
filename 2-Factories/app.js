const iPhoneXR = require('./iPhoneXR')

// create a new Phone
const myNewPhone = new iPhoneXR('XR-001')

myNewPhone.displayConfig()

// we can also create more iPhoneXR classes as factories and pass them to one
// factory class that can be used to create any type of those phones.

/**
 * The fctory patern allows you to use provides an interface for constructing 
 * pre-configured objects
 * 
 * It is used a lot in writing NPM packages
 */