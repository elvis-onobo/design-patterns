/**
 * We can use the iPhoneXR class to create a bueprint so that we can always create one quickly 
 * rather than to submit all the values for an iPhoneXR every time. This is what a factory is.
 */
const Phone = require('./Phone')

class iPhoneXR {
    constructor(serialNum) {
        return new Phone(serialNum, 'iPhoneXR', 'A12 Bionic', '3 GB', 75.5, 150.9, 8.3, '828 x 1792')
    }
}

module.exports = iPhoneXR