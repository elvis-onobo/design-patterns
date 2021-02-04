/**
 * Assuming this is Chase bank
 */
const Bank = require('./Bank')

class Chase extends Bank {
    processPayment() {
        console.log(`Your payment of ${this.amount} for ${this.account} has been processed by Chase Bank`);
    }

    processRefund() {
        console.log(`A refund of ${this.amount} for ${this.account} has been processed by Chase Bank`);
    }
}

module.exports = Chase